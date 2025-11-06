import './Components.css'
import ButtonGeneric from "./ButtonGeneric";

const MenuBar = () => {

    return (
        <div className={"menu"}>
            <ButtonGeneric label={"Class1"} dest={"class1"}></ButtonGeneric>
            <ButtonGeneric label={"Class2"} dest={"class2"}></ButtonGeneric>
            <ButtonGeneric label={"Class3"} dest={"class3"}></ButtonGeneric>
        </div>
    )
};

export default MenuBar;