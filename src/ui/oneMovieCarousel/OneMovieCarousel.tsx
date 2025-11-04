import ActorCard from "../actorCard/ActorCard";
import Card from "../card/Card";
import scss from "./oneMovieCarousel.module.scss";
interface CarouselProps {
  title: string;
  data: any[];
  isCast?: boolean;
  isTrailer?: boolean;
  isSimilar?: boolean;
  isRecommend?: boolean;
}

export default function OneMovieCarousel({
  title,
  data,
  isCast,
  isTrailer,
  isSimilar,
  isRecommend,
}: CarouselProps) {
  return (
    <div className={scss.main}>
      <h4>{title}</h4>
      <div className={scss.list}>
        {isCast &&
          data?.map((item, idx) => <ActorCard actor={item} key={idx} />)}
        {isTrailer && data?.map((item, idx) => <Card movie={item} key={idx} />)}
        {isSimilar && data?.map((item, idx) => <Card movie={item} key={idx} />)}
        {isRecommend &&
          data?.map((item, idx) => <Card movie={item} key={idx} />)}
      </div>
    </div>
  );
}
