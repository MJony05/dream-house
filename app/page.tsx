import Image from "next/image";
import styles from "./main.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.image}
        src={"/image.png"}
        width={689}
        height={343}
        alt="main"
      />
    </main>
  );
}
