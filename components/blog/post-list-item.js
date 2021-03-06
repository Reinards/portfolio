import { Component } from "react";
import Link from "next/link"

class PostListItem extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.hasBottomPadding ? "mb3 mb4-ns border-bottom" : ""}>
                <div className="flex items-center">
                    <Link href={this.props.href}>
                        <a className="link">
                            <h2 className="accent fw-500 pr3 ma0 pb0">{this.props.title}</h2>
                        </a>
                    </Link>
                    {/* TODO: Share Btn */}
                </div>
                <p className="f5 o-80 mt1 mb3 mb4-ns">{this.props.children}</p>
            </div>
        )
    }
}

export default PostListItem;