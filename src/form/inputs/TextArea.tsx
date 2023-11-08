import { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

export default function TextArea({
  name,
  placeholder,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { register, setValue } = useFormContext()
  return (
    <div className="input-frame">
      <p className="input-placeholder">{placeholder}</p>
      <textarea
        {...(name &&
          register(name, {
            required: props.required,
          }))}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}
