import { InputHTMLAttributes, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export default function Checkbox(props: InputHTMLAttributes<HTMLInputElement>) {
  const methods = useFormContext()
  const [value, setValue] = useState(false)

  return (
    <Controller
      name={props.name!}
      control={methods.control}
      render={({ field: { onChange } }) => {
        return (
          <>
            <input type="hidden" value={value ? 'true' : 'false'} />
            <div className="flex-start-row">
              <input
                type="checkbox"
                checked={value}
                onChange={(event) => {
                  onChange(event)
                  setValue((value) => !value)
                }}
              />
              <label>{props.placeholder}</label>
            </div>
          </>
        )
      }}
    />
  )
}
