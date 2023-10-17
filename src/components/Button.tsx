interface Prop {
    name: string;
    onClick: () => void;
    colour?: 'primary' | 'secondary';
}
export const Button = ({name, onClick, colour = 'primary'}: Prop) => {


  return (
    <button type="button" className={"btn btn-" + colour} onClick = {onClick}>{name}</button>
  )
}
