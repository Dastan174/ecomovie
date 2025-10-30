"use client";
import { useTrending } from "@/hooks/movies/trending/useTrendingMovies";
import SectionCard from "@/ui/sectionCard/SectionCard";
import React from "react";

const Trending = () => {
  const { data: trendingMovies, isLoading } = useTrending("day");
  return (
    <SectionCard
      isLoading={isLoading}
      data={trendingMovies}
      title="Trending"
      toggle="day | week"
      key={0}
    />
  );
};

export default Trending;
