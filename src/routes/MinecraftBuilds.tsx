import "../App.css";
import React from "react";
import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import MinecraftPDF from "../PDFs/MinecraftPortfolio.pdf"
import Toussaint from "../images/ToussaintTownDetail.png";
import TitleBar from "../components/TitleBar";

const Minecraft = () => {
    // Setup, needed to make the PDF display work at all
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
    ).toString();

    // First PDF Functions and Variables
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    function onDocumentLoadSuccessA({ numPages }: { numPages: number }): void {
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

                <Document className={'pdf_display'} file={MinecraftPDF} onLoadError={console.error}
                          onLoadSuccess={onDocumentLoadSuccessA}>
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

export default Minecraft;