import { Controller, useFormContext } from 'react-hook-form'
import {
  StyleProp,
  Text,
  TextInput as TextField,
  TextStyle,
} from 'react-native'

export default function TextInput(props: {
  name: string
  placeholder?: string
  onChange?: (text: string) => void
  errorMessage?: string
  required?: boolean
  errorStyle?: StyleProp<TextStyle>
  secure?: boolean
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: props.required,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            secureTextEntry={props.secure}
            placeholder={props.placeholder || ''}
            onBlur={onBlur}
            onChangeText={(text: string) => {
              onChange(text)
              props.onChange(text)
            }}
            value={value}
          />
        )}
        name={props.name}
      />
      {errors[props.name] && (
        <Text style={props.errorStyle}>
          {props.errorMessage || 'This is required.'}
        </Text>
      )}
    </>
  )
}
