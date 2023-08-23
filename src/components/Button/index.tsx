import { ButtonContainer } from "./styles";
import { IButton } from "./types";

export default function Button({title, onClick, ref}: IButton) {
  return (
    <ButtonContainer>
        <button ref={ref} onClick={onClick}>{title}</button>
    </ButtonContainer>
  )
}
