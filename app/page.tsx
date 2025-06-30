"use client";
import { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResponseViewer from "./components/ResponseViewer";
import { UploadResult } from "./types/UploadResult";

export default function HomePage() {
  const [response, setResponse] = useState<UploadResult | null>(null);
  const [uploadKey, setUploadKey] = useState(0);
  const [uploadedFilename, setUploadedFilename] = useState<string | null>(null);

  const handleReset = () => {
    setResponse(null);
    setUploadKey((k) => k + 1);
    setUploadedFilename(null);
  };

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      {!response && (
        <UploadForm
          key={uploadKey}
          onUpload={(result, filename) => {
            setResponse(result);
            setUploadedFilename(filename);
          }}
        />
      )}

      {response && (
        <div className="flex justify-end">
          <button
            onClick={handleReset}
            className="text-sm text-blue-600 hover:underline"
          >
            Upload Another Document
          </button>
        </div>
      )}

      <ResponseViewer response={response} filename={uploadedFilename} />
    </main>
  );
}
