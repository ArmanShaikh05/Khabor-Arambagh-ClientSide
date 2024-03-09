import { useLayoutEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";


// const url = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = url;

 const PdfComp = ({ pdfFile }) => {
  const [numPages, setNumPages] = useState();


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  console.log(pdfFile);

  // GETTING THE WIDTH OF THE WINDOW TO SET DYNAMICALLY THE SCALE OF  PDF VIEWER
  function useWindowSize() {
    const [width, setWidth] = useState([0]);
    useLayoutEffect(() => {
      function updateSize() {
        setWidth([window.innerWidth]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return width;
  }

  const [width] = useWindowSize();

  return (
    <div className="pdf-container">
      <Document file={pdfFile?pdfFile:''} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page, index) => {
            return (
              <Page
              className={"pdf-page"}
                key={index}
                scale={width < 1060 ? width < 768 ? width < 540 ? width < 470 ? width < 370 ? 0.45 : 0.5 : 0.65 : 0.8 : 1 : 1.4}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
              
            );
          })}
      </Document>
    </div>
  );
}

export default PdfComp;
