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
        <Link to={dest} style={{textDecoration: "none"}}>
        <div className={"genericButton"}>
            {label}
        </div>
        </Link>
    )
};

export default ButtonGeneric;