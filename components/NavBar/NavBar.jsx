import Link from "next/link";
import styles from "./NavBar.module.css";
import { useRouter } from "next/router";
export default function NavBar() {
  const router = useRouter();
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? styles.active : ""}>
          About
        </a>
      </Link>
    </div>
  );
}
