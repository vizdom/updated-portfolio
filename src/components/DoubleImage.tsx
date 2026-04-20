import './Components.css'
import '../App.css'

interface textInfo {
    img1Src: string;
    img2Src: string;
    alt1: string;
    alt2: string;
    title1: string;
    title2: string;
    link1?: string;
    link2?: string;
}
const DoubleImage = ({
                        img1Src,
                        img2Src,
                        alt1,
                        alt2,
                        title1,
                        title2,
                        link1,
                        link2,
                    }: textInfo) => {

    return (
        <div className={"page_object"}>
            <div className={"double_image_container"}>
                <a href={link1}>
                    <div className={"double_image_item"}>
                        <div className={"double_image_title"}>{title1}</div>
                        <img src={img1Src} alt={alt1} className={"double_image"}/>
                    </div>
                </a>
                <a href={link2}>
                    <div className={"double_image_item"}>
                        <div className={"double_image_title"}>{title2}</div>
                        <img src={img2Src} alt={alt2} className={"double_image"}/>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default DoubleImage;