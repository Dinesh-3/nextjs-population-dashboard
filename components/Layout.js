import Header from "./Header"
import ScrollTopComponent from "./ScrollTop"

/*
* App Layout Component
*/
const Layout = (props) => (
  <div>
    <Header/>
    <div>
      {props.children}
    </div>
    <ScrollTopComponent />
  </div>
);

export default Layout;