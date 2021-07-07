import { Component } from "react";
import Link from "next/link"

class PostListItem extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.hasBottomPadding ? "pb3 pb5-ns" : ""}>
                <div className="flex items-center">
                    <Link href={this.props.href}>
                        <a className="link">
                            <h2 className="accent fw-500 pr3 ma0 pb0">{this.props.title}</h2>
                        </a>
                    </Link>
                    {/* <p className="ma0 pa0 i">{this.props.date}</p> */}
                    {/* TODO: Share Btn */}
                </div>
                <p className="paragraph">{this.props.children}</p>
            </div>
        )
    }
}

export default PostListItem;