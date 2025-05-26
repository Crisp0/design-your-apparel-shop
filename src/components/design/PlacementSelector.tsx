
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import type { PlacementPosition, UploadedFile } from './DesignCustomizer';

interface PlacementSelectorProps {
  onPlacementSelect: (position: { x: number; y: number }) => void;
  placements: PlacementPosition[];
  onPlacementRemove: (placementId: string) => void;
  selectedFile: UploadedFile | null;
}

const PlacementSelector: React.FC<PlacementSelectorProps> = ({
  onPlacementSelect,
  placements,
  onPlacementRemove,
  selectedFile
}) => {
  const [selectedArea, setSelectedArea] = useState<string>('front');

  const predefinedPositions = {
    front: [
      { name: 'Center Chest', x: 50, y: 35 },
      { name: 'Left Chest', x: 35, y: 25 },
      { name: 'Right Chest', x: 65, y: 25 },
      { name: 'Lower Front', x: 50, y: 65 }
    ],
    back: [
      { name: 'Center Back', x: 50, y: 35 },
      { name: 'Upper Back', x: 50, y: 25 },
      { name: 'Lower Back', x: 50, y: 65 }
    ],
    sleeves: [
      { name: 'Left Sleeve', x: 20, y: 40 },
      { name: 'Right Sleeve', x: 80, y: 40 }
    ],
    pockets: [
      { name: 'Left Pocket', x: 40, y: 50 },
      { name: 'Right Pocket', x: 60, y: 50 }
    ]
  };

  const handleTShirtClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedFile) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    onPlacementSelect({ x, y });
  };

  const handlePredefinedPosition = (position: { x: number; y: number }) => {
    if (!selectedFile) return;
    onPlacementSelect(position);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {Object.keys(predefinedPositions).map((area) => (
          <Button
            key={area}
            variant={selectedArea === area ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedArea(area)}
            className="capitalize"
          >
            {area}
          </Button>
        ))}
      </div>

      {selectedFile ? (
        <>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-medium mb-4 text-center">Click on the garment to place your design</h4>
            <div 
              className="relative mx-auto bg-white rounded-lg shadow-sm cursor-crosshair"
              style={{ width: '300px', height: '400px' }}
              onClick={handleTShirtClick}
            >
              {/* T-shirt outline */}
              <svg
                viewBox="0 0 300 400"
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 1 }}
              >
                <path
                  d="M80 60 L80 40 Q80 20 100 20 L200 20 Q220 20 220 40 L220 60 L260 80 L260 120 L220 100 L220 380 Q220 390 210 390 L90 390 Q80 390 80 380 L80 100 L40 120 L40 80 Z"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
              </svg>

              {/* Placement indicators */}
              {placements.map((placement) => (
                <div
                  key={placement.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${placement.position.x}%`,
                    top: `${placement.position.y}%`,
                    zIndex: 2
                  }}
                >
                  <div 
                    className="w-12 h-12 bg-elegant-charcoal/80 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                  >
                    <span className="text-white text-xs font-bold">
                      {placements.findIndex(p => p.id === placement.id) + 1}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      onPlacementRemove(placement.id);
                    }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Quick Placement Options</h4>
            <div className="grid grid-cols-2 gap-2">
              {predefinedPositions[selectedArea as keyof typeof predefinedPositions].map((position, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handlePredefinedPosition(position)}
                  className="text-left justify-start"
                >
                  {position.name}
                </Button>
              ))}
            </div>
          </div>

          {placements.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium">Current Placements</h4>
              {placements.map((placement, index) => (
                <div key={placement.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">{index + 1}</Badge>
                    <span className="text-sm font-medium">{placement.name}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onPlacementRemove(placement.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <FileImage className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Upload a design file to start placing it on your garment</p>
        </div>
      )}
    </div>
  );
};

export default PlacementSelector;
