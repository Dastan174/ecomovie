"use client";
import { useOneMovie } from "@/hooks/movies/oneMovie/useOneMovie";
import OneMovieCarousel from "../oneMovieCarousel/OneMovieCarousel";
import scss from "./oneMovie.module.scss";
import { useParams } from "next/navigation";
import { useActors } from "@/hooks/movies/actors/useActors";
import { useSimilar } from "@/hooks/movies/similar/useSimilar";
import { useRecommendations } from "@/hooks/movies/recommendation/useRecommendation";

export default function OneMovie() {
  const { id } = useParams();
  const { data: oneMovie, isLoading } = useOneMovie({ type: "movie", id: id });
  const { data: actors, isLoading: isActorLoading } = useActors({
    type: "movie",
    id: id,
  });
  const { data: similarMovies, isLoading: similarLoading } = useSimilar({
    type: "movie",
    id: id,
  });
  const { data: recommendMovies } = useRecommendations({
    type: "movie",
    id: id,
  });
  console.log(recommendMovies);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className={scss.container}>
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${oneMovie?.backdrop_path}")`,
        }}
        className={scss.overlay}
      ></div>
      <div className="container">
        <div className={scss.mainContainer}>
          <img
            src={`https://image.tmdb.org/t/p/original${oneMovie?.poster_path}`}
            alt=""
          />
          <div className={scss.titleCard}>
            <h2>{oneMovie?.title}</h2>
            <h4>{oneMovie?.tagline}</h4>
            <div className={scss.genre}>
              {oneMovie?.genres.map((item) => (
                <span key={item.id}>{item.name}</span>
              ))}
            </div>
            <div className={scss.play}>
              <div className={scss.rating}></div>
              <div className={scss.trailer}>
                <div className={scss.rating}></div>
                <h4>Watch trailer</h4>
              </div>
            </div>
            <div className={scss.overview}>
              <h4>Overview</h4>
              <p>{oneMovie?.overview}</p>
            </div>
            <div className={scss.status}>
              <p>
                Status: <span>{oneMovie?.status}</span>
              </p>
              <p>
                Release date: <span>{oneMovie?.release_date}</span>
              </p>
              <p>
                Runtime: <span>{oneMovie?.runtime}m</span>
              </p>
            </div>
            <div className={scss.status}>
              <p>
                Writer: <span>{oneMovie?.production_companies[0].name}</span>
              </p>
            </div>
            <div className={scss.status}>
              <p>
                Director: <span>{oneMovie?.production_companies[0].name}</span>
              </p>
            </div>
          </div>
        </div>
        <OneMovieCarousel
          title="Cast"
          data={actors}
          isLoading={isActorLoading}
          isCast={true}
        />
        <OneMovieCarousel
          title="Similar Movies"
          isSimilar={true}
          data={similarMovies}
        />
        <OneMovieCarousel
          isRecommend={true}
          data={recommendMovies}
          title="Recommendation Movie"
        />
      </div>
    </section>
  );
}
