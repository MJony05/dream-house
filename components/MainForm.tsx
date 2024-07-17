"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./mainForm.module.css";
const MainForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, number }),
      });

      if (response.ok) {
        setMessage("User data saved successfully");
        setName("");
        setNumber("");
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      setMessage("Failed to submit form");
    }
  };
  return (
    <div className={styles.mainForm}>
      <form className={styles.form}>
        <input
          value={name}
          placeholder="Your name"
          type="text"
          className={styles.nameInput}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Your phone number"
          type="number"
          className={styles.numberInput}
        />
        <button onClick={handleSubmit}>
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
