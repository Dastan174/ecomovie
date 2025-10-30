"use client";
import SearchInput from "@/ui/searchInput/SearchInput";
import scss from "./banner.module.scss";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  const bannerQuotes = [
    "Welcome to TmdbMovie - Enjoy the Show!",
    "Discover Movie Magic at TmdbMovie",
    "Get Ready for Cinematic Bliss",
  ];
  return (
    <div className={scss.container}>
      <div className={scss.overlay}></div>
      <div className="container">
        <div className={scss.mainContainer}>
          <Typewriter
            words={bannerQuotes}
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
          />
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
