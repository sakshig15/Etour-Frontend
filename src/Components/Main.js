import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubCategories from "./SubCategories";
import Packages from "./Packages";
import Categories from "./Categories";
import Home from "./Home";
import Iternary from "./Iternary";
import CustomerForm1 from "./CustomerForm1";
import Login from "../Login";
import AboutUs from "./AboutUs";
function Main() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Categories />}></Route>
            <Route path="/category/:id" element={<SubCategories />}></Route>
            <Route path="/packages/:id" element={<Packages />}></Route>
            <Route path="/iternary/:id" element={<Iternary />}></Route>
            <Route path="/form" element={<CustomerForm1 />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Main;
