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

    // 🧩 URL base correcta del bucket "properties"
    const SUPABASE_BASE_URL =
      "https://zdvmvjifemgnmvqykbna.supabase.co/storage/v1/object/public/properties";

    const resolved = images.map((image) => {
      // Si ya es una URL completa, usarla tal cual
      if (image.startsWith("http")) return image;

      // Si es un path relativo o nombre de archivo, agregar la URL base
      return `${SUPABASE_BASE_URL}/${image}`;
    });

    setResolvedImages(resolved.filter((img) => img !== ""));
  }, [images]);

  if (!resolvedImages || resolvedImages.length === 0) {
    return null;
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
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://via.placeholder.com/800x600?text=Imagen+no+disponible";
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
