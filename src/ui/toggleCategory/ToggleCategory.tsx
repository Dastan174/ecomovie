import { useState } from "react";
import scss from "./toggleCategory.module.scss";
const ToggleCategory = () => {
  const [isActive, setIsActive] = useState<string>("Movie");

  const handleBtn = (value) => {
    if (value === "Movie") {
      setIsActive("Movie");
    } else {
      setIsActive("tv");
    }
    // console.log();
    console.log(isActive);
  };

  return (
    <div className={scss.main}>
      <button
        onClick={(e) => handleBtn(e.target.innerHTML)}
        className={`${scss.left} ${scss.isActive}`}
      >
        Movie
      </button>
      <button
        onClick={(e) => handleBtn(e.target.value)}
        className={`${scss.right} ${isActive}`}
      >
        Tv Show
      </button>
    </div>
  );
};

export default ToggleCategory;
