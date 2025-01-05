"use client";

import React from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils"; // Utilitas kelas CSS
import Image from "next/image";

interface FieldProps {
  value: string; // Ganti dengan tipe yang lebih spesifik, misalnya: string | undefined
  onChange: (value: string | ArrayBuffer) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

interface ReactDropzoneProps {
  field: FieldProps;
}

export default function ReactDropzone({ field }: ReactDropzoneProps) {
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            const pathGambar = reader.result;
            pathGambar.slice(4);
            field.onChange(pathGambar); // Simpan data base64 atau URL
          } else {
            console.error("Reader result is null");
          }
        };

        reader.readAsDataURL(file);
      }
    },
    [field]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed p-4 rounded-md text-center cursor-pointer",
        isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
      )}
    >
      <input {...getInputProps()} />
      <p>
        {isDragActive
          ? "Drop the files here ..."
          : field.value
          ? "Replace the image by dropping a new file or clicking here."
          : "Drag & drop an image here, or click to select one."}
      </p>
      {field.value && (
        <div className="mt-4">
          <Image
            src={field.value as string}
            alt="Preview"
            className="max-h-96 mx-auto"
            width={1920}
            height={1080}
          />
        </div>
      )}
    </div>
  );
}
