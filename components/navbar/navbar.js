import css from './navbar.module.scss';
import { Component } from "react";
import LinkPlus from '../link-plus';

class Navbar extends Component {

    constructor (props) {
        super(props);
    }

    render() {

        if (this.props.en) {
            return (
                <nav id={css.navbar}>
                    {/* <div className="toggleWrap">bars</div> */}
                    <div className="flex justify-center items-center pa4">
                        <LinkPlus href="/en/" exact activeClassName={css.active}>
                            <a className={css.link+" f6"}>Portfolio</a>
                        </LinkPlus>
                        <LinkPlus href="/en/services/" exact activeClassName={css.active}>
                            <a className={css.link+" f6"}>Services</a>
                        </LinkPlus>
                        <LinkPlus href="/en/blog/" activeClassName={css.active}>
                            <a className={css.link+" f6"}>Blog</a>
                        </LinkPlus>
                        <LinkPlus href="/lv/" activeClassName={css.active}>
                            <a className={css.link+" f6"}>Lv</a>
                        </LinkPlus>
                    </div>
                </nav>
            )
        }else {
            return (
                <nav id={css.navbar}>
                    {/* <div className="toggleWrap">bars</div> */}
                    <div className="flex justify-center items-center pa4">
                        <LinkPlus href="/lv" exact activeClassName={css.active}>
                            <a className={css.link+" f6"}>Projekti</a>
                        </LinkPlus>
                        <LinkPlus href="/lv/pakalpojumi/" exact activeClassName={css.active}>
                            <a className={css.link+" f6"}>Pakalpojumi</a>
                        </LinkPlus>
                        <LinkPlus href="/lv/blogs/" activeClassName={css.active}>
                            <a className={css.link+" f6"}>Blogs</a>
                        </LinkPlus>
                        <LinkPlus href="/en" activeClassName={css.active}>
                            <a className={css.link+" f6"}>En</a>
                        </LinkPlus>
                    </div>
                </nav>
            )
        }

    }
}

export default Navbar;