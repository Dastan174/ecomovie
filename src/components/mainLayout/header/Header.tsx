import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import scss from "./header.module.scss";
import Link from "next/link";
const Header = () => {
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          {/* <Image src="/logo.png" alt="logo" /> */}
          <h3>EcoMovie</h3>
          <nav>
            <Link href="/movies">Movies</Link>
            <Link href="/tv">TV Shows</Link>
            <span>
              <IoIosSearch />
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
