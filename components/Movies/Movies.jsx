import { useRouter } from "next/router";
import styles from "./Movies.module.css";

import Link from "next/link";

export default function Movies({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`movies/${title}/${id}`);
  };
  return (
    <div className={styles.container}>
      {results?.map(({ adult, title, vote_average, original_title, id }) => (
        <div className={styles.item} key={id}>
          <img src={""} />
          <div>
            <Link href={`movies/${original_title}/${id}`}>
              <a>
                <h1>{title}</h1>
              </a>
            </Link>
            <h2>{adult ? "성인" : "전 연령 관람 가능"}</h2>
            <h3>평점 : {vote_average} </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
