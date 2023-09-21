import sunset from '../images/sunset.jpg';
import blue from '../images/blue-run.jpg';
import rainy from '../images/rainy.jpg';

export default function FirstBlockImages () {
    return (
        <div className="images">
            <img className="run one" src={blue} />
            <img className="run two" src={rainy} />
            <img className="run three" src={sunset} />
        </div>
    )
};