"use client";
import Image from "next/image";
import styles from "./main.module.css";
import MainForm from "@/components/MainForm";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <Navbar />
      <Pagination />
      <main className={styles.main}>
        <Image
          className={styles.image}
          src={"/main-image.png"}
          width={689}
          height={343}
          alt="main"
        />
        <MainForm />
      </main>
    </div>
  );
}
