import "../../App.css";
import React, {useLayoutEffect} from "react";
import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import MinecraftPDF from "../../PDFs/MinecraftPortfolioV2.pdf"
import TitleBar from "../../components/TitleBar";
import Name from "../../images/Name.png";
import Footer from "../../components/Footer";
import ButtonGeneric from "../../components/ButtonGeneric";
import Spacer from "../../components/Spacer";
import MenuBar from "../../components/MenuBar";

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

    function useWindowSize() {
        const [size, setSize] = useState(0);
        useLayoutEffect(() => {
            function updateSize() {
                setSize(window.innerWidth);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    function PDFPage () {
        const width = useWindowSize();
        if(width * 0.76 > 1100) {
            return <Page width={1100} pageNumber={pageNumber}></Page>;
        }
        return <Page width={width * 0.76} pageNumber={pageNumber}></Page>;
    }

    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <MenuBar></MenuBar>
                <div className={"page_object"}>
                    <ButtonGeneric label={"Back"} dest={"/visualart"}></ButtonGeneric>
                </div>
                <div className={'page_object'}>
                <Document  file={MinecraftPDF} onLoadError={console.error}
                          onLoadSuccess={onDocumentLoadSuccessA}>
                    <PDFPage></PDFPage>
                </Document>
                </div>
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
                <Spacer count={1}></Spacer>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
};

export default Minecraft;