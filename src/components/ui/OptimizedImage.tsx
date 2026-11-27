"use client";

import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

export function OptimizedImage({
  alt,
  loading,
  priority,
  ...props
}: ExportedImageProps) {
  return (
    <ExportedImage
      alt={alt}
      priority={priority}
      loading={priority ? undefined : loading || "lazy"}
      {...props}
    />
  );
}
