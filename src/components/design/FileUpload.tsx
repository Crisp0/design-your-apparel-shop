
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Upload, X, FileImage } from 'lucide-react';
import { toast } from 'sonner';
import type { UploadedFile } from './DesignCustomizer';

interface FileUploadProps {
  onFileUpload: (files: UploadedFile[]) => void;
  uploadedFiles: UploadedFile[];
  selectedFile: UploadedFile | null;
  onSelectFile: (file: UploadedFile) => void;
  onRemoveFile: (fileId: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  uploadedFiles,
  selectedFile,
  onSelectFile,
  onRemoveFile
}) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => {
      const isValidType = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'application/pdf'].includes(file.type);
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      
      if (!isValidType) {
        toast.error(`${file.name}: Unsupported file type. Please use PNG, JPG, SVG, or PDF.`);
        return false;
      }
      
      if (!isValidSize) {
        toast.error(`${file.name}: File too large. Maximum size is 10MB.`);
        return false;
      }
      
      return true;
    });

    const newFiles: UploadedFile[] = validFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }));

    if (newFiles.length > 0) {
      onFileUpload(newFiles);
      toast.success(`${newFiles.length} file(s) uploaded successfully!`);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/svg+xml': ['.svg'],
      'application/pdf': ['.pdf']
    },
    multiple: true,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    onDropAccepted: () => setIsDragActive(false),
    onDropRejected: () => setIsDragActive(false)
  });

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
          isDragActive 
            ? 'border-elegant-charcoal bg-elegant-pearl' 
            : 'border-gray-300 hover:border-elegant-stone'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
        <h3 className="text-lg font-semibold mb-2 text-gray-900">
          {isDragActive ? 'Drop files here' : 'Upload your design files'}
        </h3>
        <p className="text-gray-600 mb-4">
          Drag & drop files here, or click to browse
        </p>
        <p className="text-sm text-gray-500">
          Supports PNG, JPG, SVG, PDF • Max 10MB per file
        </p>
        <Button className="mt-4" variant="outline">
          Choose Files
        </Button>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Uploaded Files</h4>
          <div className="grid grid-cols-2 gap-4">
            {uploadedFiles.map((uploadedFile) => (
              <div
                key={uploadedFile.id}
                className={`relative border rounded-lg p-3 cursor-pointer transition-all ${
                  selectedFile?.id === uploadedFile.id 
                    ? 'border-elegant-charcoal bg-elegant-pearl' 
                    : 'border-gray-200 hover:border-elegant-stone'
                }`}
                onClick={() => onSelectFile(uploadedFile)}
              >
                <div className="flex items-center space-x-3">
                  {uploadedFile.file.type.startsWith('image/') ? (
                    <img
                      src={uploadedFile.preview}
                      alt={uploadedFile.file.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                      <FileImage className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {uploadedFile.file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-1 right-1 h-6 w-6 p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFile(uploadedFile.id);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
