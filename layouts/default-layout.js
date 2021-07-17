import { Component } from "react"
import React from "react"
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

class DefaultLayout extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.en) {
            return (
                <div id="layout">
                    <Navbar en/>
                    {this.props.children}
                    <Footer en/>
                </div>
            )
        }else {
            return (
                <div id="layout">
                    <Navbar/>
                    {this.props.children}
                    <Footer/>
                </div>
            )
        }

    }
}

export default DefaultLayout;