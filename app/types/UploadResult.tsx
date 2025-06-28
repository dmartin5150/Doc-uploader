// app/components/types.ts
export type UploadResult =
  | {
      type: 'pdf' | 'fax';
      data: string;
    }
  | {
      error: string;
    };
