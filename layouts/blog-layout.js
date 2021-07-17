import { Component } from "react"
import React from "react"
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ContactMeBanner from "../components/contact-me-banner/contact-me-banner";
import Head from 'next/head'
import H1 from "../components/blog/h1"

class BlogLayout extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="blog-layout">
                <Navbar/>

                <Head>
                    <title>{this.props.title} | reinards.lv</title>
                </Head>

                <div className="blog-container">

                    <H1>{this.props.title}</H1>

                    {this.props.children}

                    <ContactMeBanner/>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default BlogLayout;