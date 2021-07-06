import css from './footer.module.scss';
import { Component } from "react";
import Link from 'next/link'

class Footer extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <footer id={css.footer}>
                <div className="flex justify-center items-center pa3">
                    <span className="f6">© Visas tiesības aizsargātas {new Date().getFullYear()}</span>
                </div>
            </footer>
        )
    }
}

export default Footer;