import Nav from "./Nav";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Nav />
      <main>{children}</main>
      <footer>Copyright 2022</footer>
    </>
  );
}

export default Layout;
