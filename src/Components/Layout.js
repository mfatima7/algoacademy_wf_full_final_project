import Header from "./Header";
import Nav from "./Nav";

function Layout({ children, searchInput = false }) {
  return (
    <>
      <Nav></Nav>
      <Header searchInput={searchInput}>{children}</Header>
    </>
  );
}

export default Layout;
