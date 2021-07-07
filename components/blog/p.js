import { Component } from "react"

export default class P extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <p className="blog-paragraph">{this.props.children}</p>
    }
}