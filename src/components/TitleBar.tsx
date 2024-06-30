
interface titleInfo {
    imgSrc : string;
    alt : string;
    text? : string;
}
const TitleBar = ({
    imgSrc,
    alt,
    text,
                  }: titleInfo ) => {

    return (
        <div className={"title"}>
            <img src={imgSrc} alt={alt}/>
            <div className={"title_centered"}>{text}</div>
        </div>
    )
};

export default TitleBar;