import css from "./project-list-item.module.scss";
import { Component } from "react";

class ProjectListItem extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className={css.wrapper} style={{
                backgroundImage: "url(" + this.props.data.url + ")",
            }}>
                <div className={css.tint}></div>
                <h2 className={css.title}>{this.props.data.title}</h2>
                <a href={this.props.data.href} target="_blank" className={css.link}>{this.props.data.href}</a>
            </div>
        )
    }
}

export default ProjectListItem;