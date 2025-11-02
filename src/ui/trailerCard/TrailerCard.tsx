import scss from "./trailerCard.module.scss";

export default function TrailerCard() {
  return (
    <div className={scss.card}>
      <img src="https://img.youtube.com/vi/pYGf3p0mE60/mqdefault.jpg" alt="" />
      <h4>Fresh Fish</h4>
    </div>
  );
}
