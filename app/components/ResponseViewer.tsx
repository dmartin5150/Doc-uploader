import { UploadResult } from "../types/UploadResult";
import ReferralForm from "./ReferralForm";
import ReferralTable from "./ReferralTable";

interface ResponseViewerProps {
  response: UploadResult | null;
}

export default function ResponseViewer({ response }: ResponseViewerProps) {
  if (!response) return null;

  if ("error" in response) {
    return (
      <div className="mt-6 text-red-600">
        <strong>Error:</strong> {response.error}
      </div>
    );
  }

  if (response.file_type === "pdf") {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Extracted Patient Information (Form)</h2>
        <ReferralForm data={response.data} />
      </div>
    );
  }

  if (response.file_type === "tiff") {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Extracted Data (Table)</h2>
        <ReferralTable data={response.data} />
      </div>
    );
  }

  return null;
}
