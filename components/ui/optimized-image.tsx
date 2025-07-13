"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  fallback?: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  fallback,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (fallback && imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      onError={handleError}
      priority={priority}
      sizes={fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
    />
  );
}
