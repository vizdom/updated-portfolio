import './Components.css'

interface labelInfo {
    label: string;
}
const ButtonGeneric = ({
    label,
                       }: labelInfo) => {

    return (
        <div className={"genericButton"}>
            {label}
        </div>
    )
};

export default ButtonGeneric;