/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import UploadForm from './components/UploadForm';
import ResponseViewer from './components/ResponseViewer';

export default function HomePage() {
  const [response, setResponse] = useState<any>(null);

  return (
    <main className="p-6">
      <h1 className="text-2xl mb-4 font-bold">Upload a Document</h1>
      <UploadForm onUpload={setResponse} />
      <ResponseViewer response={response} />
    </main>
  );
}
