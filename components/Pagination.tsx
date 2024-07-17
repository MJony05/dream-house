"use client";
import React from "react";
import styles from "./pagination.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Pagination = () => {
  const path = usePathname();
  console.log(path);

  const links = [
    {
      href: "/",
      iconVisited: "/icons/visited.png",
      iconUnvisited: "/icons/unvisited.png",
    },
    {
      href: "/about",
      iconVisited: "/icons/visited.png",
      iconUnvisited: "/icons/unvisited.png",
    },
    {
      href: "/plans",
      iconVisited: "/icons/visited.png",
      iconUnvisited: "/icons/unvisited.png",
    },
  ];

  return (
    <div className={styles.pagination}>
      {links.map((link) => {
        const isVisited =
          path === link.href || path.startsWith(`${link.href}/`);
        return (
          <Link key={link.href} href={link.href} className={styles.link}>
            <Image
              src={isVisited ? link.iconVisited : link.iconUnvisited}
              width={isVisited ? 20 : 10}
              height={isVisited ? 20 : 10}
              alt="menu"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
