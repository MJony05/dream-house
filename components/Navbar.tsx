import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <Image src={"/menu.svg"} width={30} height={30} alt="menu" />
        <p className={styles.phone}>+38 (097) 123 45 67</p>
      </div>
      <div className={styles.navRight}>
        <p className={styles.callText}>request for a call</p>
        <Image src={"/phone-icon.png"} width={50} height={50} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
