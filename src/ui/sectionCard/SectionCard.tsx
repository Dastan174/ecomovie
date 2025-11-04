import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "../card/Card";
import scss from "./sectionCard.module.scss";
import ToggleCategory from "../toggleCategory/ToggleCategory";

interface SectionCardProps {
  title: string;
  toggle: string;
  isLoading: boolean;
  data: any;
  isHideToggle?: boolean;
}

export default function SectionCard({
  title,
  toggle,
  data,
  isLoading,
}: SectionCardProps) {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.top}>
            <h3>{title}</h3>
            <ToggleCategory />
          </div>
          <div className={scss.list}>
            <button className={`btn-prev ${scss["btn-prev"]}`}>{"<-"}</button>
            <button className={`btn-next ${scss["btn-next"]}`}>{"->"}</button>
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".btn-next",
                  prevEl: ".btn-prev",
                }}
                spaceBetween={50}
                slidesPerView={5}
              >
                {data.map((item, idx) => (
                  <SwiperSlide>
                    <Card selected={"movie"} key={idx} movie={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
