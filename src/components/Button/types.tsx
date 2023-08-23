export interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    title: string,
    onClick?: () => void,
    ref?: React.MutableRefObject<null>
}