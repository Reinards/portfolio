import { Component } from "react";

class ContactMeBanner extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="flex items-center justify-center mv6">
                <div className="flex flex-column items-center">
                    <h2 className="header-2 relative mb0">Uzraksti man! <div className="header-accent-block"></div></h2>
                    <span className="black f5 f4-ns fw-300 mv3 tc">Varam sarunāt bezmaksas konsultāciju.</span>
                    <a href="mailto: reinardssaulitis@gmail.com" className="mt3 link black underline b f5">reinardssaulitis@gmail.com</a>
                </div>
            </div>
        )
    }
}

export default ContactMeBanner;