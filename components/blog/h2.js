import { Component } from "react"

export default class H2 extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <h2 className="blog-h2 mt4">{this.props.children}</h2>
    }
}