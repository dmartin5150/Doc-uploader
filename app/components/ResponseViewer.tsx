import { UploadResult } from "../types/UploadResult";
import ReferralForm from "./ReferralForm";
import FieldForm from "./FieldForm";

interface ResponseViewerProps {
  response: UploadResult | null;
  filename: string | null;
}

export default function ResponseViewer({
  response,
  filename,
}: ResponseViewerProps) {
  if (!response) return null;

  if ("error" in response) {
    return (
      <div className="mt-6 text-red-600">
        <strong>Error:</strong> {response.error}
      </div>
    );
  }

  const fileInfo = filename ? ` from: ${filename}` : "";

  if (response.file_type === "pdf") {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Patient Information Extracted{fileInfo}
        </h2>
        <ReferralForm data={response.data} />
      </div>
    );
  }

  if (response.file_type === "tiff") {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Patient Information Extracted
          {filename && (
            <span className="text-gray-600 font-normal"> from: {filename}</span>
          )}
        </h2>
        <FieldForm data={response.data} />
      </div>
    );
  }

  return null;
}
