import { UploadResult } from "../types/UploadResult";

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

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Result:</h2>
      <p className="text-sm text-gray-600 mb-2">
        Detected type: <strong>{response.type}</strong>
      </p>
      <pre className="bg-gray-100 p-4 whitespace-pre-wrap text-sm max-h-96 overflow-y-scroll">
        {response.data}
      </pre>
    </div>
  );
}
