import { useLayoutEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";



// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js@3.11.174/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

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
      <Document file="https://res.cloudinary.com/armanimages/image/upload/v1709882225/newspaper/n9fcibznwtv1dpnddowx.pdf" onLoadSuccess={onDocumentLoadSuccess} onLoadError={	(error) => console.log(error.message)}>
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
