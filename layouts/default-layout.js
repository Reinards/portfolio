import { Component } from "react"
import React from "react"
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

class DefaultLayout extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="layout">
                <Navbar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default DefaultLayout;