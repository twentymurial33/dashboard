import Nav from "./Nav";
import Drawer from "./Drawer";

function Layout(props) {
  const { children } = props;
  return (
    <>
      {/*drawer*/}
      <Drawer />
      {/*nav bar*/}
      <Nav />
      {/*body*/}
      <main>{children}</main>
    </>
  );
}

export default Layout;
