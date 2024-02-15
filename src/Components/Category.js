import {  useEffect ,useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Categories.module.css";

function Category() {
    const [categories,setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        async function getCategories(){
            try
            {
                const response =await fetch("http://localhost:8080/api/category");
                if(!response.ok)
                {
                    throw new Error("It's Error");
                }
                const data = await response.json();
                setCategories(data);

            }
            catch(error)
            {
                console.error("It's error",error);
            }
        }
        getCategories();
    },[]);

    const handleContainerClick = (id)=>
    {
        navigate(`/category/${id}`);
    };

    return (
        <div>
           <div>
           <div className={styles.categories_container}>
        {categories.map((category) => (
          <div
            className={styles.category_card}
            key={category.category_id}
            onClick={() => {
              handleContainerClick(category.category_id);
            }}
          >
            <img
              src={category.category_image_path}
              alt={category.category_name}
            />
            <div className={styles.category_card_info}>
              <h2>{category.category_name}</h2>
              <p>{category.category_info}</p>
            </div>
          </div>
        ))}
      </div>
            </div> 
        </div>
    )
}

export default Category
