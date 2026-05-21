import React, { ImgHTMLAttributes } from "react";

interface CloudinaryImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  folder?: string;
  filename?: string;
  src?: string; // Fallback source to support easiest placeholder swap
  alt: string;
  eager?: boolean;
  className?: string;
}

export default function CloudinaryImage({
  folder,
  filename,
  src,
  alt,
  eager = false,
  className,
  ...props
}: CloudinaryImageProps) {
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "df6nnksd2";
  
  // Calculate Cloudinary URL if folder and filename are provided, else fallback to src
  const imageUrl = folder && filename
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/ah/${folder}/${filename}`
    : src;

  return (
    <img
      src={imageUrl}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={className}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
