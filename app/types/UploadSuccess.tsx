import { ExtractedData } from './ExtractedData';

export interface UploadSuccess {
  type: 'pdf' | 'fax';
  data: ExtractedData;
}