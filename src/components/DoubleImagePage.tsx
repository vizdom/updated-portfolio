import './Components.css'
import '../App.css'
import {Link} from "react-router-dom";

interface textInfo {
    img1Src: string;
    img2Src: string;
    alt1: string;
    alt2: string;
    title1: string;
    title2: string;
    link1: string;
    link2: string;
}
const DoubleImagePage = ({
                        img1Src,
                        img2Src,
                        alt1,
                        alt2,
                        title1,
                        title2,
                        link1,
                        link2
                    }: textInfo) => {

    return (
        <div className={"page_object"}>
            <div className={"double_image_container"}>
                <div className={"double_image_item"}>
                    <img src={img1Src} alt={alt1} className={"double_image_page"}/>
                    <Link to={link1}>{title1}</Link>
                </div>
                <div className={"double_image_item"}>
                    <img src={img2Src} alt={alt2} className={"double_image_page"}/>
                    <Link to={link2}>{title2}</Link>
                </div>
            </div>
        </div>
    )
};

export default DoubleImagePage;