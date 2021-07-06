import { Component } from "react";

class PostListItem extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.hasBottomPadding ? "pb3 pb5-ns" : ""}>
                <div className="flex items-center">
                    <h2 className="accent fw-500 pr3 ma0 pb0">{this.props.title}</h2>
                    <p className="ma0 pa0 i">{this.props.date}</p>
                    {/* TODO: Share Btn */}
                </div>
                <p className="tj">{this.props.children}</p>
            </div>
        )
    }
}

export default PostListItem;