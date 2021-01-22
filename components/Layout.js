import Header from "./Header"
import ScrollTopComponent from "./ScrollTop"
import Head from "next/head"
/*
* App Layout Component
*/
const Layout = (props) => (
  <div>
    <Head>
        <title>NextJS Dashboard</title>
    </Head>  
    <Header/>
    <div>
      {props.children}
    </div>
    <ScrollTopComponent />
  </div>
);

export default Layout;