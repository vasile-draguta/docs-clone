import { useState, useRef } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useStorage, useMutation } from '@liveblocks/react';

const DOCUMENT_WIDTH = 816;
const MIN_DOCUMENT_WIDTH = 100;
const STARTING_PADDING = 56;
const RULER_STEPS = 83;

const markers = Array.from({ length: RULER_STEPS }, (_, i) => i);

export function Ruler() {
  const leftMargin = useStorage((root) => root.leftMargin) ?? STARTING_PADDING;
  const setLeftMargin = useMutation(({ storage }, newPosition) => {
    storage.set('leftMargin', newPosition);
  }, []);

  const rightMargin =
    useStorage((root) => root.rightMargin) ?? STARTING_PADDING;
  const setRightMargin = useMutation(({ storage }, newPosition) => {
    storage.set('rightMargin', newPosition);
  }, []);

  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);
  const rulerRef = useRef<HTMLDivElement>(null);

  const handleLeftMouseDown = () => {
    setIsDraggingLeft(true);
  };

  const handleRightMouseDown = () => {
    setIsDraggingRight(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
      const container = rulerRef.current.querySelector('#ruler-container');
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const relativeX = e.clientX - containerRect.left;
        const rawPosition = Math.max(0, Math.min(DOCUMENT_WIDTH, relativeX));

        if (isDraggingLeft) {
          const maxLeftPosition =
            DOCUMENT_WIDTH - rightMargin - MIN_DOCUMENT_WIDTH;
          const newLeftPosition = Math.min(rawPosition, maxLeftPosition);
          setLeftMargin(newLeftPosition);
        } else if (isDraggingRight) {
          const maxRightPosition =
            DOCUMENT_WIDTH - (leftMargin + MIN_DOCUMENT_WIDTH);
          const newRightPosition = Math.max(DOCUMENT_WIDTH - rawPosition, 0);
          const constrainedRightPosition = Math.min(
            newRightPosition,
            maxRightPosition
          );
          setRightMargin(constrainedRightPosition);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  };

  const handleLeftDoubleClick = () => {
    setLeftMargin(STARTING_PADDING);
  };

  const handleRightDoubleClick = () => {
    setRightMargin(STARTING_PADDING);
  };

  return (
    <div
      className='w-[816px] mx-auto h-6 border-b border-gray-300 flex items-end sticky top-0 z-10 bg-[#f9fbfd] select-none print:hidden dark:bg-zinc-950'
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div id='ruler-container' className='h-full w-full relative'>
        <Marker
          position={leftMargin}
          isLeft={true}
          isDragging={isDraggingLeft}
          onMouseDown={handleLeftMouseDown}
          onDoubleClick={handleLeftDoubleClick}
        />
        <div className='absolute inset-x-0 bottom-0 h-full'>
          <div className='relative h-full w-[816px]'>
            {markers.map((marker) => {
              const position = (marker * DOCUMENT_WIDTH) / RULER_STEPS - 1;

              return (
                <div
                  key={marker}
                  className='absolute bottom-0'
                  style={{ left: `${position}px` }}
                >
                  {marker % 10 === 0 && (
                    <>
                      <div className='absolute bottom-0 w-[1px] h-2 bg-neutral-500' />
                      <span className='absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1.5'>
                        {marker / 10 + 1}
                      </span>
                    </>
                  )}

                  {marker % 5 === 0 && marker % 10 !== 0 && (
                    <>
                      <div className='absolute bottom-0 w-[1px] h-1.5 bg-neutral-500' />
                    </>
                  )}
                  {marker % 5 !== 0 && (
                    <>
                      <div className='absolute bottom-0 w-[1px] h-1 bg-neutral-500' />
                    </>
                  )}
                </div>
              );
            })}
            <Marker
              position={rightMargin}
              isLeft={false}
              isDragging={isDraggingRight}
              onMouseDown={handleRightMouseDown}
              onDoubleClick={handleRightDoubleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface MarkerProps {
  position: number;
  isLeft: boolean;
  isDragging: boolean;
  onMouseDown: () => void;
  onDoubleClick: () => void;
}

function Marker({
  position,
  isLeft,
  isDragging,
  onMouseDown,
  onDoubleClick,
}: MarkerProps) {
  return (
    <div
      className='absolute top-0 w-4 h-full cursor-ew-resize z-[5] grouo -ml-2'
      style={{ [isLeft ? 'left' : 'right']: `${position}px` }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    >
      <FaCaretDown className='absolute left-1.5 top-0 h-full fill-blue-500 transform -translate-x-1/2' />
      <div
        className='absolute left-1/2 top-4 transform -translate-x-1/2 transition-opacity durration-150'
        style={{
          height: '100vh',
          width: '1px',
          transform: 'scaleX(0.5)',
          backgroundColor: '#3b72f6',
          display: isDragging ? 'block' : 'none',
        }}
      />
    </div>
  );
}
