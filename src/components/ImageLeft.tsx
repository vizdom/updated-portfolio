import './Components.css'
import '../App.css'

interface textInfo {
    imgSrc: string;
    alt: string;
    title: string;
    text: string;
    link?: string;
    linkText?: string;
}
const ImageLeft = ({
    imgSrc,
    alt,
    title,
    text,
    link,
    linkText
                       }: textInfo) => {

    /*function ImLink ({link, linkText} : {link: string, linkText: string}) {
        if(link != null){
            return(
                <div className={"text_image_left"}><a href={link} rel={"noopener noreferrer"}>{linkText}</a></div>
            )
        }
        return null;
    }
*/


    return (
        <div className={"page_object"}>
            <a href={link} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={imgSrc} alt={alt} className={"image_left"}/>
            </a>
            <div>
                <div className={"text_title"}>{title}</div>
                <div className={"text_image_left"}>{text}</div>
                <div className={"text_image_left"}><a href={link} rel={"noopener noreferrer"}>{linkText}</a></div>
            </div>
        </div>
    )
};

export default ImageLeft;