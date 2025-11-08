import './Components.css'
import ButtonGeneric from "./ButtonGeneric";

const MenuBar = () => {

    return (
        <div className={"menu"}>
            <ButtonGeneric label={"Game Design"} dest={"gamedesign"}></ButtonGeneric>
            <ButtonGeneric label={"Writing"} dest={"writing"}></ButtonGeneric>
            <ButtonGeneric label={"Visual Art"} dest={"visualart"}></ButtonGeneric>
        </div>
    )
};

export default MenuBar;