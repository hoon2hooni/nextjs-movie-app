import styles from "./Movies.module.css";

export default function Movies({ results }) {
  return (
    <div className={styles.container}>
      {results?.map(({ adult, title, vote_average }) => (
        <div className={styles.item}>
          <img src={""} />
          <div>
            <h1>{title}</h1>
            <h2>{adult ? "성인" : "전 연령 관람 가능"}</h2>
            <h3>평점 : {vote_average} </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
