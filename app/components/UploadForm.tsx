"use client";
import { useState } from "react";
import { UploadResult } from "../types/UploadResult";

interface UploadFormProps {
  onUpload: (result: UploadResult, filename: string) => void;
}

export default function UploadForm({ onUpload }: UploadFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      const data: UploadResult = await res.json();
      console.log("Upload response:", data);
      onUpload(data, file.name);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6 shadow flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">Upload a Document</h2>
        <p className="text-sm text-gray-500">
          Select a PDF or image file to extract patient data.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 items-center w-full md:w-auto">
        <label className="flex items-center justify-center bg-blue-600 text-white text-sm px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
          Select File
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="hidden"
          />
        </label>
        {file && (
          <div className="text-sm text-gray-700 truncate max-w-xs">
            {file.name}
          </div>
        )}
        <button
          type="submit"
          disabled={!file || isUploading}
          className={`flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isUploading && (
            <svg
              className="animate-spin h-4 w-4 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {isUploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </form>
  );
}
