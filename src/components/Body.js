import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body =()=>{
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
    return <div className="flex">
     {isMenuOpen&& <Sidebar/>}
     <Outlet/>
    </div>
}

export default Body;