import "../App.css";
import React from "react";
import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import PDF from "../PDFs/DNDAdventure.pdf"
import Toussaint from "../images/ToussaintTownDetail.png";
import TitleBar from "../components/TitleBar";

const DnDAdventure = () => {
    // Setup, needed to make the PDF display work at all
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
    ).toString();


    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    function changePage(offset: number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div className={"App"}>
            <TitleBar imgSrc={Toussaint} alt={"A Minecraft build"} text={"Owen Lacey"}></TitleBar>
            <div className={"page_content"}>
                <p className={"page_object"}>​</p>
                <Document className={"page_object"} file={PDF} onLoadError={console.error}
                          onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}></Page>
                </Document>
                <div className={"page_object"}>
                    <div>
                        <p className={"paragraph_text"}>
                            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                        </p>
                        <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
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

export default DnDAdventure;