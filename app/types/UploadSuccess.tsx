import { PdfExtractedData } from "./PDFExtractedData";
import { TiffExtractedData } from "./TIFFExtractedData";

export interface UploadSuccessPdf {
  file_type: "pdf";
  data: PdfExtractedData;
}

export interface UploadSuccessTiff {
  file_type: "tiff";
  data: TiffExtractedData;
}

export type UploadSuccess = UploadSuccessPdf | UploadSuccessTiff;
