import './Components.css'
import '../App.css'

interface textInfo {
    imgSrc: string;
    alt: string;
    title: string;
    text: string;
}
const ImageLeft = ({
    imgSrc,
    alt,
    title,
    text
                       }: textInfo) => {

    return (
        <div className={"page_content"}>
            <img src={imgSrc} alt={alt} className={"image_left"}/>
            <div>
                <div className={"text_title"}>{title}</div>
                <div className={"text_image_left"}>{text}</div>
            </div>

        </div>
    )
};

export default ImageLeft;