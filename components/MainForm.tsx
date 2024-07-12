import Image from "next/image";
import React from "react";
import styles from "./mainForm.module.css";
const MainForm = () => {
  return (
    <div className={styles.mainForm}>
      <form className={styles.form}>
        <input
          placeholder="Your name"
          type="text"
          className={styles.nameInput}
        />
        <input
          placeholder="Your phone number"
          type="number"
          className={styles.numberInput}
        />
        <button>
          <p className={styles.buttonText}>
            Discuss a project{" "}
            <Image
              className={styles.arrow}
              src={"/icons/arrow.png"}
              width={100}
              height={20}
              alt="arrow"
            />
          </p>
        </button>
      </form>
    </div>
  );
};

export default MainForm;
