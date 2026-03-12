import './Components.css'
import '../App.css'
import {Link} from "react-router-dom";

interface textInfo {
    title: string;
    text: string;
    link: string;
    link_text?: string;
}


const TitleText = ({
                        title,
                        text,
                        link,
                        link_text
                    }: textInfo) => {

    return (
        <div className={"page_object"}>
            <div className={"title_text_container"}>
                <div className={"text_title"}>{title}</div>
                <div className={"text_centered"}>{text}</div>
                <Link to={link} style={{textDecoration: "none"}} className={"link"}>{link_text}</Link>
            </div>
        </div>
    )
};

export default TitleText;