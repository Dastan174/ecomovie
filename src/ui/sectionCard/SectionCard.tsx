import Card from "../card/Card";
import scss from "./sectionCard.module.scss";

interface SectionCardProps {
  title: string;
  toggle: string;
  isLoading: boolean;
  data: any;
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
            <button>{toggle}</button>
          </div>
          <div className={scss.list}>
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              data.map((item, idx) => (
                <Card selected={"movie"} key={idx} movie={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
