import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import './Layout.css';
import { Outlet } from "react-router-dom";

const Layout = (props) => {
    return (
        <>
            <Header />
            <div id="contents">
                <div className="clearfix">
                   {props.children ?? <Outlet />} 
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;