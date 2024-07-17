"use client";
import React from "react";
import styles from "./plans.module.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div style={{ position: "absolute", left: "150px" }}>
        <Navbar props={true} />
      </div>
      <Sidebar />
      <Pagination />
      <div className={styles.plans}>
        <div className={styles.plan1}>
          <h3 className={styles.planTitle}>ELITE</h3>
        </div>
        <span className={styles.border}></span>
        <div className={styles.plan2}>
          <h3 className={styles.planTitle}>
            VIP <span className={styles.forBorder}></span>
          </h3>
          <div className={styles.planContent}>
            <p className={styles.planContentText}>
              THE VIP STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR
              THOSE WHO WANTS TO GET THE PERFECT RESULT.
            </p>
            <button
              className={styles.button}
              onClick={() => router.push("plans/vip/1")}
            >
              <p className={styles.buttonText}>
                GALLERY
                <Image
                  className={styles.arrow}
                  src={"/icons/arrow.png"}
                  width={100}
                  height={20}
                  alt="arrow"
                />
              </p>
            </button>
            <button className={styles.whiteButton}>
              <p className={styles.buttonText}>
                List of services
                <Image
                  className={styles.arrow}
                  src={"/icons/white-arrow.png"}
                  width={70}
                  height={20}
                  alt="arrow"
                />
              </p>
            </button>
          </div>
        </div>
        <span className={styles.border}></span>
        <div className={styles.plan3}>
          <h3 className={styles.planTitle}>PREMIUM</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
