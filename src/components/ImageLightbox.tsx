import React, { useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useModalBehavior } from '../hooks/useModalBehavior'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

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
  const { language } = useLanguage()
  const t = translations[language].apartmentSection
  const dialogRef = useRef<HTMLDivElement>(null)
  useModalBehavior(isOpen, onClose, dialogRef)

  const onNavigateRef = useRef(onNavigate)
  onNavigateRef.current = onNavigate

  React.useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        onNavigateRef.current((currentIndex - 1 + images.length) % images.length)
      } else if (event.key === 'ArrowRight') {
        onNavigateRef.current((currentIndex + 1) % images.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, images.length])

  if (!isOpen || images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.photoViewerLabel}
      aria-describedby={currentImage.caption ? 'lightbox-caption' : undefined}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label={t.closePhotoViewer}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image Counter */}
      <div
        aria-live="polite"
        className="absolute top-6 left-6 z-50 px-3 py-1 rounded-full bg-stone-900/80 text-xs font-mono text-stone-300"
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((currentIndex - 1 + images.length) % images.length)
        }}
        className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-stone-900/70 hover:bg-stone-800 text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label={t.previousPhoto}
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
        className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-stone-900/70 hover:bg-stone-800 text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label={t.nextPhoto}
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
          <p
            id="lightbox-caption"
            className="mt-4 text-center text-sm text-stone-300 max-w-xl"
          >
            {currentImage.caption}
          </p>
        )}
      </div>
    </div>
  )
}
