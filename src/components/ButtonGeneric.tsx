import './Components.css'
import { Link } from "react-router-dom";

interface labelInfo {
    label: string;
    dest: string;
}
const ButtonGeneric = ({
    label,
    dest,
                       }: labelInfo) => {

    return (
        <a href={dest}>
        <div className={"genericButton"}>
            {label}
        </div>
        </a>
    )
};

export default ButtonGeneric;