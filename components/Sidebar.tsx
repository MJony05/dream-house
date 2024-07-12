import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Image
        className={styles.logo}
        src={"/icons/logo.png"}
        width={30}
        height={40}
        alt="logo"
      />
      <div className={styles.divForP}>
        <p>apartment renovation</p>
      </div>
      <span></span>
      <div className={styles.socialIcons}>
        <Image
          className={styles.socialIconsItem}
          src={"/icons/fb-icon.png"}
          width={21}
          height={21}
          alt="icon"
        />
        <Image
          className={styles.socialIconsItem}
          src={"/icons/i-icon.png"}
          width={21}
          height={21}
          alt="icon"
        />
        <Image
          className={styles.socialIconsItem}
          src={"/icons/t-icon.png"}
          width={21}
          height={21}
          alt="icon"
        />
        <Image
          className={styles.socialIconsItem}
          src={"/icons/yt-icon.png"}
          width={21}
          height={21}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Sidebar;
