'use client';
import { useState } from 'react';
import { UploadResult } from '../types/UploadResult';

interface UploadFormProps {
  onUpload: (result: UploadResult) => void;
}

export default function UploadForm({ onUpload }: UploadFormProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    onUpload(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="file"
        accept=".pdf,.png,.jpg,.jpeg"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </form>
  );
}
