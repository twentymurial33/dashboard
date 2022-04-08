import React from "react";
import Footer from "./Footer";
import Drawer from "./Drawer";

function Layouts({ children, ...rest }) {
  return (
    <div className="overflow-hidden" {...rest}>
      <section id="content">{children}</section>
      <Drawer />
      <Footer />
    </div>
  );
}

export default Layouts;
