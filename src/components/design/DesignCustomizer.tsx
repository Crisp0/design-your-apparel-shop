
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import PlacementSelector from './PlacementSelector';
import { Card } from '@/components/ui/card';

export interface UploadedFile {
  file: File;
  preview: string;
  id: string;
}

export interface PlacementPosition {
  id: string;
  name: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const DesignCustomizer = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null);
  const [placements, setPlacements] = useState<PlacementPosition[]>([]);

  const handleFileUpload = (files: UploadedFile[]) => {
    setUploadedFiles(prev => [...prev, ...files]);
    if (files.length > 0 && !selectedFile) {
      setSelectedFile(files[0]);
    }
  };

  const handleRemoveFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
    if (selectedFile?.id === fileId) {
      setSelectedFile(uploadedFiles.length > 1 ? uploadedFiles[0] : null);
    }
    setPlacements(prev => prev.filter(p => p.id !== fileId));
  };

  const handlePlacementSelect = (position: { x: number; y: number }) => {
    if (!selectedFile) return;

    const newPlacement: PlacementPosition = {
      id: selectedFile.id,
      name: selectedFile.file.name,
      position,
      size: { width: 60, height: 60 }
    };

    setPlacements(prev => {
      const existing = prev.find(p => p.id === selectedFile.id);
      if (existing) {
        return prev.map(p => p.id === selectedFile.id ? newPlacement : p);
      }
      return [...prev, newPlacement];
    });
  };

  const handlePlacementRemove = (placementId: string) => {
    setPlacements(prev => prev.filter(p => p.id !== placementId));
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-elegant-charcoal">Upload Your Design</h2>
          <FileUpload 
            onFileUpload={handleFileUpload}
            uploadedFiles={uploadedFiles}
            selectedFile={selectedFile}
            onSelectFile={setSelectedFile}
            onRemoveFile={handleRemoveFile}
          />
        </Card>
        
        {uploadedFiles.length > 0 && (
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-elegant-charcoal">Design Preview</h3>
            {selectedFile && (
              <div className="bg-gray-50 rounded-lg p-4">
                <img 
                  src={selectedFile.preview} 
                  alt={selectedFile.file.name}
                  className="max-w-full max-h-48 mx-auto object-contain"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">{selectedFile.file.name}</p>
              </div>
            )}
          </Card>
        )}
      </div>

      <div>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-elegant-charcoal">Choose Placement</h2>
          <PlacementSelector 
            onPlacementSelect={handlePlacementSelect}
            placements={placements}
            onPlacementRemove={handlePlacementRemove}
            selectedFile={selectedFile}
          />
        </Card>
      </div>
    </div>
  );
};

export default DesignCustomizer;
