import './Components.css'
import '../App.css'

interface textInfo {
    imgSrc: string;
    alt: string;
    title: string;
    text: string;
}
const ImageRight = ({
                       imgSrc,
                       alt,
                       title,
                       text
                   }: textInfo) => {

    return (
        <div className={"page_object"}>
            <div>
                <div className={"text_title"}>{title}</div>
                <div className={"text_image_right"}>{text}</div>
            </div>
            <img src={imgSrc} alt={alt} className={"image_right"}/>
        </div>
    )
};

export default ImageRight;