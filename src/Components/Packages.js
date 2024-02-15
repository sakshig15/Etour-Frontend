import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Packages.module.css";

function Packages() {
  const [subcategory, setSubCategory] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      async function getSubCategory() {
        try {
          const response = await fetch(
            `http://localhost:8080/api/subcategory/${id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setSubCategory(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getSubCategory();
    }
  }, [id]);

  function handleButtonClick(id) {
   // navigate(`/iternary/${id}`);
   navigate(`/form`);
  }
  // console.log(subcategory);
  return (
    <div className={styles.maincontainer}>
      {subcategory.packages &&
        subcategory.packages.map((pack) => (
          <div className={styles.package_container} key={pack.package_id}>
            <div className={styles.left}>
              <br />
              <img
                src={pack.package_image_path}
                alt="Package"
                className={styles.package_image}
              />
            </div>
            <div className={styles.middle}>
              <br />
              <div>
                <a href="/">
                  <h2>{pack.package_name}</h2>
                </a>
              </div>
              <div>{pack.package_info}</div>
              {/* <div>Dharmashala (2N)| Dalhousie(2N)| Amritsar(1N)</div> */}
              <br />
              <button
                onClick={() => {
                  handleButtonClick(pack.package_id);
                }}
              >
                Know More
              </button>
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
        ))}
    </div>
  );
}

export default Packages;
