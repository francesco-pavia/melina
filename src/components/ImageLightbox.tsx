import React, { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageLightboxProps {
  images: { url: string; caption: string }[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length)
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, currentIndex, images.length, onClose, onNavigate])

  if (!isOpen || images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors focus:outline-none"
        aria-label="Close photo viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image Counter */}
      <div className="absolute top-6 left-6 z-50 px-3 py-1 rounded-full bg-stone-900/80 text-xs font-mono text-stone-300">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((currentIndex - 1 + images.length) % images.length)
        }}
        className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-stone-900/70 hover:bg-stone-800 text-white transition-all focus:outline-none"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((currentIndex + 1) % images.length)
        }}
        className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-stone-900/70 hover:bg-stone-800 text-white transition-all focus:outline-none"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Stage */}
      <div className="relative max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center">
        <img
          src={currentImage.url}
          alt={currentImage.caption}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
        />
        {currentImage.caption && (
          <p className="mt-4 text-center text-sm text-stone-300 max-w-xl">
            {currentImage.caption}
          </p>
        )}
      </div>
    </div>
  )
}
