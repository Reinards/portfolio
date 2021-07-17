import css from './footer.module.scss';
import { Component } from "react";
import Link from 'next/link'

class Footer extends Component {

    constructor (props) {
        super(props);
    }

    render() {

        if (this.props.en) {
            return (
                <footer id={css.footer}>
                    <div className="flex justify-center items-center pa3">
                        <span className="f6">© 2017-{new Date().getFullYear()}, Reinards Jānis Saulītis </span>
                    </div>
                </footer>
            )
        } else {
            return (
                <footer id={css.footer}>
                    <div className="flex justify-center items-center pa3">
                        <span className="f6">© 2017-{new Date().getFullYear()}, Reinards Jānis Saulītis</span>
                    </div>
                </footer>
            )
        }

    }
}

export default Footer;