import { Component } from "react";

class PageHeader extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="pv4 pv5-ns flex items-center justify-center">
                <h1 className="header-1 tc w-80 w-60-ns">{this.props.children}</h1>
            </div>
        )
    }
}

export default PageHeader;