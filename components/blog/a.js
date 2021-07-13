import { Component } from "react"

export default class A extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <a href={this.props.href ? this.props.href : this.props.children} className="blog-link accent" target="_blank" rel="noreferrer noopener" title={"Atvērt "+this.props.children}>{this.props.children}</a>
    }
}