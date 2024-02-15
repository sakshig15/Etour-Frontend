// Iternary.js

import React from "react";
import styles from "./Iternary.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Iternary = () => {
  const [packages, setPackages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      async function getSubCategory() {
        try {
          const response = await fetch(
            `http://localhost:8080/api/package/${id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setPackages(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getSubCategory();
    }
  }, [id]);

  return (
    <div className={styles.container}>
      {packages.iternary &&
        packages.iternary.map((pack) => (
          <div className={styles.itemContainer} key={pack.iternery_id}>
            <div className={styles.left}>
              <div className={styles.details}>
                <div className={styles.day}>{pack.iternery_day}</div>
                <div className={styles.description}>
                  <p>{pack.iternery_info}</p>
                </div>
                <div className={styles.inclusions}>
                  <span>
                    <i aria-hidden="true"></i> Breakfast
                  </span>
                  <span>
                    <i aria-hidden="true"></i> Dinner
                  </span>
                </div>
                <div className={styles.stay}>
                  <span>
                    <i aria-hidden="true"></i> Nights Stay in Dharmashala.
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <img
                src={pack.iternery_imgpath}
                alt=""
                className={styles.image}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Iternary;
