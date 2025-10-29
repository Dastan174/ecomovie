import scss from "./footer.module.scss";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa6";
import { footerNav } from "@/constants/common";

const Footer = () => {
  return (
    <footer className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <nav>
            {footerNav.map((item, idx) => (
              <Link key={idx} href={item.link}>
                {item.name}
              </Link>
            ))}
          </nav>
          <p>
            EcoMovie - a unique website providing fascinating information about
            movies and TV shows. Here you can discover all the necessary details
            about your favorite films, actors, directors, ratings, and much
            more. EcoMovie boasts a stylish and intuitive interface that makes
            your search for cinematic masterpieces as convenient and enjoyable
            as possible.
          </p>
          <nav>
            <span>
              <FaDiscord />
            </span>
            <span>
              <FaDiscord />
            </span>
            <span>
              <FaDiscord />
            </span>
            <span>
              <FaDiscord />
            </span>
            <span>
              <FaDiscord />
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
