import React from "react";
import styles from "./Package1.module.css";

function Package1() {
  return (
    <div className={styles.package_container}>
      <div className={styles.left}>
        <br />
        <img
          src="/imgs/img1INT.jpg"
          alt="Package"
          className={styles.package_image}
        />
      </div>
      <div className={styles.middle}>
        <br />
        <div>
          <a href="/">
            <h2>Heavenly Himachal</h2>
          </a>
        </div>
        <div>6 Days | 5 Nights | 3 Cities</div>
        <div>Dharmashala (2N)| Dalhousie(2N)| Amritsar(1N)</div>
        <br />
        <a href="/form">Know More</a>
        <br />
      </div>
      <div className={styles.right}>
        <br />
        <div>
          <h5>Inclusions</h5>
          <div>
            <div>
              <span>
                <i aria-hidden="true"></i> Meals
              </span>
            </div>
            <div>
              <span>
                <i aria-hidden="true"></i> Sightseeing
              </span>
            </div>
            <div>
              <span>
                <i aria-hidden="true"></i> Hotels
              </span>
            </div>
            <div>
              <span>
                <i aria-hidden="true"></i> Taxes
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Package1;
