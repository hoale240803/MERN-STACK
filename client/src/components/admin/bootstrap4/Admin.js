import React from "react";
import Average from "./element/Average";
import Congratulations from "./element/Congratulations";
import Footer from "./element/Footer";
import Navbar from "./element/Navbar";
import Orders from "./element/Orders";
import Sidebar from "./element/Sidebar";
import Subscriber from "./element/Subscriber";
import UserAppDesign from "./element/UserAppDesign";
import UserSales from "./element/UserSales";
import UserTables from "./element/UserTables";
import UserTimeline from "./element/UserTimeline";

const Admin = () => {
  return (
    <div className="vue__website">
      <Sidebar />
      <div class="block__right">
        <Navbar />
        <div class="con__sub__ord">
          <Congratulations />
          <Subscriber />
          <Orders />
        </div>
        <div class="ave__sup">
          <Average />
        </div>
        <div class="user__sale__app">
          <UserTimeline />
          <UserSales />
          <UserAppDesign />
        </div>
        <UserTables />
        <Footer />
      </div>
    </div>
  );
};

export default Admin;
