import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

export default function Select({
  name,
  options,
  placeholder,
  ...props
}: {
  options?: { value: string | boolean; title: string }[]
} & InputHTMLAttributes<HTMLSelectElement>) {
  const { register } = useFormContext()
  return (
    <>
      <label>{placeholder}</label>
      <select {...(name && register(name))} {...props}>
        <option value="" disabled>
          {'Selectionner'}
        </option>
        {options &&
          options.map((option) => (
            <option
              key={option.value.toString()}
              value={option.value.toString()}
            >
              {option.title}
            </option>
          ))}
      </select>
    </>
  )
}
