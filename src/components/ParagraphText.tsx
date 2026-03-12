import './Components.css'
import '../App.css'

interface textInfo {
    title: string;
    text: string;
}
const ParagraphText = ({
                        title,
                        text
                    }: textInfo) => {

    return (
        <div className={"page_object"}>
            <div className={"paragraph"}>
                <div className={"paragraph_title"}>{title}</div>
                <div className={"paragraph_text"}>{text}</div>
            </div>
        </div>
    )
};

export default ParagraphText;