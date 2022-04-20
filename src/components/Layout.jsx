import Nav from "./Nav";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}

export default Layout;
