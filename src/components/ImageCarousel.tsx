"use client";

import { useEffect, useState } from "react";
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
    if (typeof window === "undefined" || !images) return;

    const SUPABASE_URL =
      "https://zdvmvjifemgnmvqykbna.supabase.co/storage/v1/object/public/properties";

    const resolved = images.map((image) => {
      // Caso A: Imagen guardada en localStorage
      if (image.startsWith("property_image_")) {
        const localValue = localStorage.getItem(image);
        return localValue || "";
      }

      // Caso B: Imagen subida a Supabase (sin dominio)
      if (!image.startsWith("http")) {
        return `${SUPABASE_URL}/${image}`;
      }

      // Caso C: URL completa
      return image;
    });

    setResolvedImages(resolved.filter((img) => img !== ""));
  }, [images]);

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
