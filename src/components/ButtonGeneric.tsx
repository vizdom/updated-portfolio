import './Components.css'

interface labelInfo {
    label: string;
    dest: string;
}
const ButtonGeneric = ({
    label,
    dest,
                       }: labelInfo) => {

    return (
        <a href={dest} style={{textDecoration: "none"}}>
        <div className={"genericButton"} onClick={() => {alert("hello!")}}>
            {label}
        </div>
        </a>
    )
};

export default ButtonGeneric;