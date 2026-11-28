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
      fetchPriority={priority ? "high" : undefined}
      decoding={priority ? "sync" : "async"}
      loading={priority ? undefined : loading || "lazy"}
      {...props}
    />
  );
}
