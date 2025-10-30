"use client";
import { useRouter } from "next/navigation";
import scss from "./card.module.scss";

interface CardProps {
  movie: ICard;
  selected: "movie" | "tv";
}

interface ICard {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  id: number;
}

const Card = ({ movie, selected }: CardProps) => {
  const { push } = useRouter();
  return (
    <div className={scss.card} onClick={() => push(`/${selected}/${movie.id}`)}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt=""
        width={170}
        height={230}
      />
      <div className={scss.scale}>{movie.vote_average}</div>
      <div className={scss.genres}>
        {movie.genre_ids.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className={scss.title}>
        <h4>{movie.title}</h4>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default Card;
