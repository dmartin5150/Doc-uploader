"use client";
import { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResponseViewer from "./components/ResponseViewer";
import { UploadResult } from "./types/UploadResult";

export default function HomePage() {
  const [response, setResponse] = useState<UploadResult | null>(null);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload a Document</h1>
      <UploadForm onUpload={setResponse} />
      <ResponseViewer response={response} />
    </main>
  );
}
