import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
interface Props {
  props?: any;
}
const Navbar = ({ props }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navLeft}>
          <Image
            onClick={() => setIsOpen(!isOpen)}
            src={"/menu.svg"}
            width={30}
            height={30}
            alt="menu"
          />
          <p className={styles.phone}>+38 (097) 123 45 67</p>
        </div>
        <div className={styles.navRight}>
          <p className={styles.callText}>request for a call</p>
          <Image src={"/phone-icon.png"} width={50} height={50} alt="menu" />
        </div>
      </div>
      {isOpen && (
        <div className={styles.footer}>
          <div className={styles.footerTop}>
            <div>
              <Image
                className={styles.footerLogo}
                onClick={() => setIsOpen(!isOpen)}
                src={"/icons/logo-black.png"}
                width={65}
                height={75}
                alt="logo"
              />
              <h1>строительство домов под ключ</h1>
            </div>
            <Image
              className={styles.footerArrow}
              src={"/icons/long-arrow.png"}
              width={200}
              height={30}
              alt="menu"
            />
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.footerBottomItem}>
              <Image
                src={"/icons/location.png"}
                width={20}
                height={20}
                alt="menu"
                className={styles.footerBottomIcon}
              />
              <p>Kiev, st. Knyazhiy Zaton 2/30 </p>
            </div>
            <div className={styles.footerBottomItem}>
              <Image
                src={"/icons/clock.png"}
                width={20}
                height={20}
                alt="menu"
                className={styles.footerBottomIcon}
              />
              <p>Mon-Fri: 9:00 - 19:00, Sat: 10:00 - 17:00 </p>
            </div>
            <div className={styles.footerBottomItem}>
              <Image
                src={"/icons/mail.png"}
                width={20}
                height={20}
                alt="menu"
                className={styles.footerBottomIcon}
              />
              <p>info@intol.net</p>
            </div>
            <div className={styles.footerBottomItem}>
              <Image
                src={"/icons/phone.png"}
                width={20}
                height={20}
                alt="menu"
                className={styles.footerBottomIcon}
              />
              <p>+38 (044) 337 14 00</p>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className={props ? styles.navbarBodyPlan : styles.navbarBody}
        ></div>
      )}
    </>
  );
};

export default Navbar;
