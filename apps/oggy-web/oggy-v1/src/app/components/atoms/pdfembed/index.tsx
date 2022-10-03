import styled from 'styled-components';
import {useState} from 'react';
import Pdf from "./p.pdf";
import {pdfjs, Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/* eslint-disable-next-line */
export interface PDFEmbedProps {
  File: string,
}

const StyledPDFEmbed = styled.div`
  color: pink;
`;

export function PDFEmbed(this: any, props: PDFEmbedProps) {
  const [numPages, setNumPages] = useState<Number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  
  function onDocumentLoadSuccess( numPages: number ) {
    setNumPages(numPages);
  }
  
  return (
    <StyledPDFEmbed>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',height: "100vh"}}>
      {/* <Document file={{url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', httpHeaders: {'Access-Control-Allow-Origin': '*'}}} onLoadSuccess={() => {onDocumentLoadSuccess}}>
        <Page pageNumber={pageNumber} />
      </Document> */}
      <object data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" type="application/pdf" width="45%" height="100%">
        <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
      </object> 

    </div>
    <p> {`Page ${pageNumber} of ${numPages}`} </p>

    </StyledPDFEmbed>
  );
}

export default PDFEmbed;
