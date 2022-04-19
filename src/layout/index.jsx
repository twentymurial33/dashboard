import React, { useState } from "react";
import { Flex, Text, useTheme } from "@aws-amplify/ui-react";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Header";
import Links from "./Links";

const Layout = ({ children, ...rest }) => {
  return (
    <div>
      {/*header*/}

      {/*sidenav*/}
      <section id="side_nav">
        <Drawer />
      </section>
      {/*footer*/}
      <section id="footer">
        <Flex justifyContent="center" padding={tokens.space.medium}>
          <Text> 2022 &copy; All Rights Reserved</Text>
        </Flex>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
