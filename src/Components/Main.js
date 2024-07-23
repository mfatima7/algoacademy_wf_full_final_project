import Header from "./Header";
import Nav from "./Nav";
import "../Css of components/Main.css";

function Main({ children, searchInput = false }) {
  return (
    <>
      <Nav></Nav>
      <Header
       searchInput={searchInput}>{children}</Header>
    </>
  );
}

export default Main;
