import React from "react";
import styles from "./about.module.css";
import MainForm from "@/components/MainForm";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
const page = () => {
  return (
    <div className={styles.aboutContainer}>
      <Sidebar />
      <Navbar />
      <Pagination />
      <div className={styles.about}>
        <div className={styles.aboutContent}>
          <h3 className={styles.aboutTitle}>
            elite renovation of your apartment
          </h3>
          <div className={styles.aboutInfo}>
            <div className={styles.aboutInfoItem}>
              <span className={styles.aboutInfoItemNumber}>18</span>
              <p className={styles.aboutInfoItemText}>
                years <br /> on the market
              </p>
            </div>
            <span className={styles.border}></span>
            <div className={styles.aboutInfoItem}>
              <span className={styles.aboutInfoItemNumber}>237</span>
              <p className={styles.aboutInfoItemText}>Completed projects</p>
            </div>
            <span className={styles.border}></span>
            <div className={styles.aboutInfoItem}>
              <span className={styles.aboutInfoItemNumber}>50</span>
              <p className={styles.aboutInfoItemText}>Employees</p>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <p className={styles.buttonText}>
            Discuss a project{" "}
            <Image
              className={styles.arrow}
              src={"/icons/white-arrow.png"}
              width={100}
              height={20}
              alt="arrow"
            />
          </p>
        </div>
        <MainForm />
      </div>
    </div>
  );
};

export default page;
