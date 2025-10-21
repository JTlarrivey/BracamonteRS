"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [resolvedImages, setResolvedImages] = useState<string[]>([]);

  useEffect(() => {
    // Evita acceso a localStorage durante el SSR
    if (typeof window === "undefined" || !images) return;

    const resolved = images.map((image) => {
      if (image.startsWith("property_image_")) {
        const localValue = localStorage.getItem(image);
        return localValue || "";
      }
      return image;
    });

    setResolvedImages(resolved.filter((img) => img !== ""));
  }, [images]);

  if (!resolvedImages || resolvedImages.length === 0) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
        No hay imágenes disponibles
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="w-full h-full"
    >
      {resolvedImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Property image ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
