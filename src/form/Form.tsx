import { InputHTMLAttributes, ReactNode, useEffect } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import Input from './inputs/Input'
import Select from './inputs/Select'
import SubmitInput from './inputs/Submit'

interface TagElement {
  select: boolean
  options?: { value: string; title: string }[]
}

declare module 'react' {
  interface HTMLAttributes<T> extends TagElement {
    select?: boolean
    options?: { value: string; title: string }[]
  }
}

export default function Form(props: {
  children?: ReactNode
  bottom?: ReactNode
  onSubmission: any
  onChange?: any
  formData?: InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>[]
  submitTitle?: string
}) {
  const formHandler = useForm()

  return (
    <FormProvider {...formHandler}>
      <FormFrame onSubmission={props.onSubmission} onChange={props.onChange}>
        {(props.formData &&
          props.formData.map(
            ({ select, options, ...input }, index) =>
              (select && (
                <Select {...input} key={input.name} options={options} />
              )) || <Input {...input} key={input.name} />,
          )) ||
          null}
        {props.children}
        {(props.submitTitle && <SubmitInput title={props.submitTitle!} />) ||
          null}
        {props.bottom}
      </FormFrame>
    </FormProvider>
  )
}

export function FormFrame(props: {
  children?: ReactNode
  onSubmission: any
  onChange?: any
}) {
  const { handleSubmit, control, watch } = useFormContext()

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (props.onChange) props.onChange({ ...value })
    })
    return () => subscription.unsubscribe()
  }, [watch])
  return (
    <form
      className="flex items-stretch justify-evenly flex-col"
      onSubmit={handleSubmit(props.onSubmission)}
    >
      {props.children}
    </form>
  )
}
