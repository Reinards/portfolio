import css from './navbar.module.scss';
import { Component } from "react";
import Link from 'next/link'

class Navbar extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <nav id={css.navbar}>
                {/* <div className="toggleWrap">bars</div> */}
                <div className="flex justify-center items-center pa4">
                    <Link href="/">
                        <a className={css.link+" f6"}>Sākums</a>
                    </Link>
                    <Link href="pakalpojumi">
                        <a className={css.link+" f6"}>Pakalpojumi</a>
                    </Link>
                    <Link href="blogs">
                        <a className={css.link+" f6"}>Blogs</a>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;