import scss from "./searchInput.module.scss";
const SearchInput = () => {
  return (
    <div className={scss.main}>
      <input type="text" placeholder="Search for a movie or tv show..." />
      <button>Search</button>
    </div>
  );
};

export default SearchInput;
