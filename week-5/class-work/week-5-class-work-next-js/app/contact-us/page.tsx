"use client";

import styles from "../page.module.css";

import { HomePage } from "../(components)/home-page/HomePage";
import { useThemeContext } from "@/context/ThemeContext";

export default function ContactUs() {
  const { theme } = useThemeContext();

  return (
    <div
      className={
        theme === "dark"
          ? `${styles.pageWrap} ${styles.darkPage}`
          : `${styles.pageWrap} ${styles.lightPage}`
      }
    >
      <HomePage head="Contact Us" />
    </div>
  );
}
