import ActorCard from "../actorCard/ActorCard";
import scss from "./oneMovieCarousel.module.scss";
interface CarouselProps {
  title: string;
  data: any[];
  isCast?: boolean;
  isTrailer?: boolean;
}

export default function OneMovieCarousel({
  title,
  data,
  isCast,
  isTrailer,
}: CarouselProps) {
  return (
    <div className={scss.main}>
      <h4>{title}</h4>
      <div className={scss.list}>
        {isCast &&
          data?.map((item, idx) => <ActorCard actor={item} key={idx} />)}
      </div>
    </div>
  );
}
