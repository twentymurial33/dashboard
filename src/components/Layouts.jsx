import React from "react";
import Footer from "./Footer";
import Drawer from "./Drawer";
import Icons from "./Icons";

function Layout({ children, ...rest }) {
  return (
    <div>
      <section id="content">{children}</section>
    </div>
  );
}

export default Layout;
