import React from "react";
import Image from "next/image";

interface CloudinaryImageProps {
  folder?: string;
  filename?: string;
  src?: string;
  alt: string;
  eager?: boolean;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  [key: string]: any;
}

export default function CloudinaryImage({
  folder,
  filename,
  src,
  alt,
  eager = false,
  className,
  fill,
  width,
  height,
  style,
  ...props
}: CloudinaryImageProps) {
  const CLOUD_NAME = "df6nnksd2";
  
  const imageUrl = folder && filename
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/ah/${folder}/${filename}`
    : src;

  if (!imageUrl) return null;

  // Use fill if explicitly requested or if no size constraints are provided
  const useFill = fill ?? (!width && !height);

  return (
    <Image
      src={imageUrl}
      alt={alt}
      priority={eager}
      className={className}
      fill={useFill}
      width={useFill ? undefined : (width ?? 200)}
      height={useFill ? undefined : (height ?? 50)}
      style={style}
      unoptimized={true} // required for Static Export
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
