import "../App.css";
import { useState, useEffect } from "react";
import ParagraphText from "./ParagraphText";

const get_text_file = async (filepath : string) => {
    // prefix public dir files with `process.env.PUBLIC_URL  `
    // see https://create-react-app.dev/docs/using-the-public-folder/
    const res = await fetch(`${process.env.PUBLIC_URL}/${filepath}`);

    // check for errors
    if (!res.ok) {
        throw res;
    }

    return res.text();
};

interface file {
    filename: string;
}

const TextDisplay = ({filename}: file) => {

        const [text, setText] = useState(""); // init with an empty string

        useEffect(() => {
            get_text_file(`${filename}.txt`).then(setText).catch(console.error);
        }, [filename]);


    return (
        <div className={"page_object"}>
            <ParagraphText title={""} text={text}></ParagraphText>
        </div>
    )
}

export default TextDisplay;