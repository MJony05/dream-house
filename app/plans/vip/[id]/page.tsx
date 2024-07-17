"use client";
import { jwtDecode } from "jwt-decode";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import MainForm from "@/components/MainForm";

type Service = {
  _id: number;
  name: string;
  index: string;
  x: number;
  y: number;
};

export default function Page() {
  const [services, setServices] = useState<Service[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [name, setName] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const pathName = usePathname();
  const index = pathName?.split("/").slice(2).join("");
  const bgImage = index + "-dark.jpg";

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      const decoded = jwtDecode<{ username: string; isAdmin: boolean }>(
        savedToken
      );
      setIsAdmin(decoded.isAdmin);
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    async function fetchServices() {
      const res = await fetch("/api/services");
      const data = await res.json();
      // I need only the services that belong to this index
      const sortedData = data.filter(
        (service: Service) => service.index === index
      );
      setServices(sortedData);
    }

    fetchServices();
  }, [index]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (isAdmin && !isFormVisible) {
        setClickCoordinates({ x: event.clientX, y: event.clientY });
        setIsFormVisible(true);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isAdmin, isFormVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newService = {
      name,
      x: clickCoordinates!.x,
      y: clickCoordinates!.y,
      index: index,
    };

    try {
      const res = await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newService),
      });

      if (res.ok) {
        const savedService = await res.json();
        setServices([...services, savedService]);
        setIsFormVisible(false);
        setName("");
      } else {
        console.error("Failed to save service");
      }
    } catch (error) {
      console.error("Failed to save service", error);
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFormVisible(false);
    setName("");
    setClickCoordinates(null);
  };

  return (
    <div className={styles.servicesContainer}>
      <div style={{ position: "absolute", left: "150px" }}>
        <Navbar />
      </div>
      <Sidebar />
      <Pagination />
      <Image
        src={`/${bgImage}`}
        alt="Background"
        className={styles.bgImage}
        width={1200}
        height={1000}
      />

      {isAdmin && (
        <button
          className={styles.triggerBtn}
          style={{ position: "absolute", right: "150px", top: "70px" }}
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "Cancel" : "Add"}
        </button>
      )}

      {services &&
        services.map((service) => (
          <div
            key={service._id}
            className={styles.serviceItem}
            style={{ top: `${service.y}px`, left: `${service.x}px` }}
          >
            <Image
              className={styles.markIcon}
              src={"/icons/mark.png"}
              width={350}
              height={35}
              alt="dot"
            />
            <span className={styles.serviceTooltip}>{service.name}</span>
          </div>
        ))}
      {isAdmin && isFormVisible && clickCoordinates && isEditing && (
        <form
          className={styles.form}
          style={{
            top: clickCoordinates.y,
            left: clickCoordinates.x,
            zIndex: 9999,
          }}
          onSubmit={handleSubmit}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleCancel}
          >
            X
          </button>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {!isAdmin && <MainForm />}
    </div>
  );
}
