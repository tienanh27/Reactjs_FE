import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MenuCyberbugs from "../components/Cyberbugs/MenuCyberbugs";
import SidebarCyberbugs from "../components/Cyberbugs/SidebarCyberbugs";

import WarningTemplate from "./WarningTemplate";
import { Layout } from "antd";

export default function CyberBugsTemplate(props) {
  const [size, setSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (size.width >= 1300) {
    return (
      <div className="jira">
        <Layout>
          {/* Sidebar */}
          <SidebarCyberbugs />
          {/* Menu */}
          <MenuCyberbugs />

          <Outlet />
        </Layout>
      </div>
    );
  } else {
    return <WarningTemplate />;
  }
}
