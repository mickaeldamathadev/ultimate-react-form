import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

export default function Input({
  name,
  placeholder,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const { register, setValue } = useFormContext()
  return (
    <div className="input-frame">
      <p className="input-placeholder">{placeholder}</p>
      <input
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
