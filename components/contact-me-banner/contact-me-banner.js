import { Component } from "react";

class ContactMeBanner extends Component {

    constructor (props) {
        super(props);
    }

    render() {

        if (this.props.en) {
            return (
                <div className="flex items-center justify-center mv5 mv6-ns">
                    <div className="flex flex-column items-center">
                        <h2 className="f2 relative ma0 accent">Let's Talk! <div className="header-accent-block"></div></h2>
                        <a href="mailto: reinardssaulitis@gmail.com" className="mt3 link black b f5">reinardssaulitis@gmail.com</a>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="flex items-center justify-center mv5 mv6-ns">
                    <div className="flex flex-column items-center">
                        <h2 className="f2 relative ma0 accent">Uzraksti man! <div className="header-accent-block"></div></h2>
                        <a href="mailto: reinardssaulitis@gmail.com" className="mt3 link black b f5">reinardssaulitis@gmail.com</a>
                    </div>
                </div>
            )
        }

    }
}

export default ContactMeBanner;