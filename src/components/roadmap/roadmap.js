import './roadmap.scss'
import { Link } from 'react-router-dom'

function Roadmap() {
    return (
        <div className="roadmap">

            <div className="roadmap__view">
                <h3 className="roadmap__view-heading">Roadmap</h3>
                <Link className="roadmap__view-link" to="/view">view</Link>
            </div>

            <ul className="roadmap__list">

                <li className="roadmap__item">
                    <div className='roadmap__item-wrapper'>
                       <div className="roadmap__item-box roadmap__item-box--orange"></div>
                       <p className="roadmap__item-desc">Planned</p>
                    </div>
                    <span className="roadmap__item-count">2</span>
                </li>

                <li className="roadmap__item">
                    <div className='roadmap__item-wrapper'>
                       <div className="roadmap__item-box roadmap__item-box--pink"></div>
                       <p className="roadmap__item-desc">In-Progress</p>
                    </div>
                    <span className="roadmap__item-count">3</span>
                </li>

                <li className="roadmap__item">
                    <div className='roadmap__item-wrapper'>
                       <div className="roadmap__item-box roadmap__item-box--green"></div>
                       <p className="roadmap__item-desc">Live</p>
                    </div>
                    <span className="roadmap__item-count">1</span>
                </li>

                <li className="roadmap__item">
                    <div className='roadmap__item-wrapper'>
                       <div className="roadmap__item-box roadmap__item-box--yellow"></div>
                       <p className="roadmap__item-desc">suggestion</p>
                    </div>
                    <span className="roadmap__item-count">7</span>
                </li>
            </ul>
        </div>
    );
}
export default Roadmap