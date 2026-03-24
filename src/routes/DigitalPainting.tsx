import "../App.css";
import React from "react";
import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import PaintingPDF from "../PDFs/Owen_Lacey_DigitalPainting_Portfolio_2022.pdf"
import ConceptPDF from "../PDFs/Owen_Lacey_ConceptArt_Portfolio_Fall2024.pdf"
import Toussaint from "../images/ToussaintTownDetail.png";
import TitleBar from "../components/TitleBar";

const DigitalPainting = () => {
    // Setup, needed to make the PDF display work at all
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
    ).toString();

    // First PDF Functions and Variables
    const [numPagesA, setNumPagesA] = useState<number>(0);
    const [pageNumberA, setPageNumberA] = useState<number>(1);
    function onDocumentLoadSuccessA({ numPages }: { numPages: number }): void {
        setNumPagesA(numPages);
    }
    function changePageA(offset: number) {
        setPageNumberA(prevPageNumber => prevPageNumber + offset);
    }
    function previousPageA() {
        changePageA(-1);
    }
    function nextPageA() {
        changePageA(1);
    }

    // Second PDF Functions and Variables
    const [numPagesB, setNumPagesB] = useState<number>(0);
    const [pageNumberB, setPageNumberB] = useState<number>(1);
    function onDocumentLoadSuccessB({ numPages }: { numPages: number }): void {
        setNumPagesB(numPages);
    }
    function changePageB(offset: number) {
        setPageNumberB(prevPageNumber => prevPageNumber + offset);
    }
    function previousPageB() {
        changePageB(-1);
    }
    function nextPageB() {
        changePageB(1);
    }

    return (
        <div className={"App"}>
            <TitleBar imgSrc={Toussaint} alt={"A Minecraft build"} text={"Owen Lacey"}></TitleBar>
            <div className={"page_content"}>

                <Document className={'pdf_display'} file={PaintingPDF} onLoadError={console.error}
                          onLoadSuccess={onDocumentLoadSuccessA}>
                    <Page pageNumber={pageNumberA} renderTextLayer={false} renderAnnotationLayer={false}></Page>
                </Document>
                <div className={"page_object"}>
                    <div>
                        <p className={"paragraph_text"}>
                            Page {pageNumberA || (numPagesA ? 1 : '--')} of {numPagesA || '--'}
                        </p>
                        <button
                            type="button"
                            disabled={pageNumberA <= 1}
                            onClick={previousPageA}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            disabled={pageNumberA >= numPagesA}
                            onClick={nextPageA}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <p className={"page_object"}>​</p>
                {/*Start of PDF B - Concept Art*/}
                <Document className={'pdf_display'} file={ConceptPDF} onLoadError={console.error}
                          onLoadSuccess={onDocumentLoadSuccessB}>
                    <Page pageNumber={pageNumberB} renderTextLayer={false} renderAnnotationLayer={false}></Page>
                </Document>
                <div className={"page_object"}>
                    <div>
                        <p className={"paragraph_text"}>
                            Page {pageNumberB || (numPagesB ? 1 : '--')} of {numPagesB || '--'}
                        </p>
                        <button
                            type="button"
                            disabled={pageNumberB <= 1}
                            onClick={previousPageB}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            disabled={pageNumberB >= numPagesB}
                            onClick={nextPageB}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <p className={"page_object"}>​</p>
            </div>
        </div>
    )
};

export default DigitalPainting;