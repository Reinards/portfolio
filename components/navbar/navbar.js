import css from './navbar.module.scss';
import { Component } from "react";
import LinkPlus from '../link-plus';

class Navbar extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <nav id={css.navbar}>
                {/* <div className="toggleWrap">bars</div> */}
                <div className="flex justify-center items-center pa4">
                    <LinkPlus href="/" exact activeClassName={css.active}>
                        <a className={css.link+" f6"}>Sākums</a>
                    </LinkPlus>
                    <LinkPlus href="/pakalpojumi" exact activeClassName={css.active}>
                        <a className={css.link+" f6"}>Pakalpojumi</a>
                    </LinkPlus>
                    <LinkPlus href="/blogs" activeClassName={css.active}>
                        <a className={css.link+" f6"}>Blogs</a>
                    </LinkPlus>
                </div>
            </nav>
        )
    }
}

export default Navbar;