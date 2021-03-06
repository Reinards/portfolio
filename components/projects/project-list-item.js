import css from "./project-list-item.module.scss";
import { Component } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Book from './book.svg'

class ProjectListItem extends Component {

    constructor (props) {
        super(props);
    }

    render() {

        if (this.props.en) {
            return (
                <Link href={this.props.data.projectHref}>
                    <a className={css.wrapper} style={{
                        backgroundImage: "url('/projects/"+ this.props.data.url +"')"
                    }}>
                        <div className={css.tint}></div>
                        <h2 className={css.title}>{this.props.data["title-en"]}</h2>
                        <span className={css.link}>{this.props.data.href}</span>
                        <div className={css.hover}>
                            <Image src={Book}/>
                        </div>
                    </a>
                </Link>
            )
        }else {
            return (
                <Link href={this.props.data.projectHref}>
                    <a className={css.wrapper} style={{
                        backgroundImage: "url('/projects/"+ this.props.data.url +"')"
                    }}>
                        <div className={css.tint}></div>
                        <h2 className={css.title}>{this.props.data.title}</h2>
                        <span className={css.link}>{this.props.data.href}</span>
                        <div className={css.hover}>
                            <Image src={Book}/>
                        </div>
                    </a>
                </Link>
            )
        }

    }
}

export default ProjectListItem;