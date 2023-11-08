import { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function Binary(props: InputHTMLAttributes<HTMLInputElement>) {
  const methods = useFormContext();

  return (
    <Controller
      name={props.name!}
      control={methods.control}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <>
            <input type="hidden" value={value || ""} />
            <div>
              <label>{props.placeholder}</label>
              <div className="flex-start-start">
                {props.options!.map(
                  (choice: { value: string; title: string }) => (
                    <div className="flex-start-center-row choice">
                      <input
                        type="checkbox"
                        checked={choice.value === value}
                        value={choice.value}
                        onChange={(event) => {
                          onChange(choice.value);
                        }}
                      />
                      <p>{choice.title}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </>
        );
      }}
    />
  );
}
