import "./header.scss";
import Mentor from '../mentor/mentor'
import Nav from '../nav/nav.component'
import Roadmap from "../roadmap/roadmap";

function Header() {
    return (
        <header className="site-header">
            <div className="site-header__container">
                <Mentor />
                <Nav />
                <Roadmap />
            </div>
        </header>
    )
}
export default Header