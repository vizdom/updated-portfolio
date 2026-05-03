import './Components.css'

interface labelInfo {
    label: string;
}
function ButtonPageNav({
                            label,
                       }: labelInfo) {

    return (
            <div className={"navButton"}>
                {label}
            </div>
    )
}

export default ButtonPageNav;