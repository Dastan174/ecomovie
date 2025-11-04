import { useState } from "react";
import scss from "./searchInput.module.scss";
import { useSearchMovie } from "@/hooks/movies/searchMovie/useSearchMovie";

interface SearchProps {}

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data: searchMovies } = useSearchMovie({
    type: "movie",
    query: searchValue,
  });
  console.log(searchMovies);

  return (
    <div className={scss.main}>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search for a movie or tv show..."
      />
      <button>Search</button>
    </div>
  );
};

export default SearchInput;
