import css from './back-button.module.scss';
import { Component } from "react";
import Link from 'next/link'
import BackArrow from './arrow.svg'
import Image from 'next/image'


class BackButton extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Link href="/">
                <a className={css.btn+" link black fw-500 flex f5"}><span className={css.arrow}><Image src={BackArrow} layout="responsive" /></span>Atpakaļ</a>
            </Link>
        )
    }
}

export default BackButton;