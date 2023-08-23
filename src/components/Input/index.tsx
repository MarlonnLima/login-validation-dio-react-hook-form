import { InputContainer } from "./styles";
import { IInput } from "./types";
import { Controller } from "react-hook-form";

export default function Input({
  placeholder,
  name,
  control,
  errorMessage,
  ...rest
}: IInput) {
  return (
    <InputContainer>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <input placeholder={placeholder} {...field} {...rest} />
            {errorMessage ? <p>{errorMessage}</p> : null}
          </>
        )}
      ></Controller>
    </InputContainer>
  );
}
