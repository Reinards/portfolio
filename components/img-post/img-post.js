import css from './img-post.module.scss';
import { Component } from "react";
import Link from 'next/link'

class ImgPost extends Component {

    constructor (props) {
        super(props);
        this.state = {
            open: false
        }
    }
    
    togglePost = () => {
        this.setState({open: !this.state.open})
    }

    render() {

        if(this.state.open) {
            return (
                <div onClick={this.togglePost} className={css.postWrapper+" cc"}>
                    <img onClick={this.togglePost} src={this.props.fullRes}></img>
                    <div className={css.postDetails}>
                        <h2 className="f3 f2-ns">{this.props.title}</h2>
                        <p className="f5 fw-300 o-80">{this.props.desc}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <img className="cp" onClick={this.togglePost} src={this.props.thumbnail}></img>
            )
        }

    }
}

export default ImgPost;