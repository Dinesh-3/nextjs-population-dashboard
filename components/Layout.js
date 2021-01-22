import Header from "./Header"
import ScrollTopComponent from "./ScrollTop"
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