import React, { useContext, useEffect, useState } from "react";
import LeftSidebar from "../../containers/LeftSidebar";
import Navbar from "../../containers/Navbar/Navbar";
import RightSidebar from "../../containers/RightSidebar";
import Dashboard from "../Dashboard";
import Orders from "../Orders";
import { navContext } from "../../contexts/navigationContext";

const Home = () => {
  const { activeView } = useContext(navContext);
  const [isDashboard, setIsDashboard] = useState();
  
  useEffect(() => {
    activeView == "dashboard" ? setIsDashboard(true) : setIsDashboard(false);
  }, [activeView]);
  
  return (
    <main class="home-wrapper">
      <LeftSidebar />
      <div className="main-wrapper">
        <Navbar />
        {isDashboard ? <Dashboard /> : <Orders />}
      </div>
      <RightSidebar />
    </main>
  );
  
};

export default Home;
