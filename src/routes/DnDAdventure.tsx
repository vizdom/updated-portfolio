import React from "react";
import {Document, Page, pdfjs} from "react-pdf";
import PDF from "../PDFs/DNDAdventure.pdf"

const DnDAdventure = () => {


    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
        ).toString();



    return (
        <div>
            <Document file={PDF} onLoadError={console.error}>
                <Page pageNumber={1}></Page>
            </Document>
        </div>
    )
};

export default DnDAdventure;