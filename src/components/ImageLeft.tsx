import './Components.css'

interface textInfo {
    imgSrc: string;
    alt: string;
    text: string;
}
const ImageLeft = ({
    imgSrc,
    alt,
    text
                       }: textInfo) => {

    return (
        <div>
            <img src={imgSrc} alt={alt} className={"image_left"}/>
            <div className={"text_image_left"}>{text}</div>
        </div>
    )
};

export default ImageLeft;