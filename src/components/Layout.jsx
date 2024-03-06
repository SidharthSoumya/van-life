import { Component } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends Component {
    render() {
        return (
            <div className="site-wrapper">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        )
    }
}