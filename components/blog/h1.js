import { Component } from "react"

export default class H1 extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <h1 className="blog-h1 mt6-ns">{this.props.children}</h1>
    }
}