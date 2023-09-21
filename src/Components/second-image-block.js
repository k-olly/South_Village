import dolomit from '../images/dolomit.jpg';
import lake from '../images/lake.jfif';
import cloudy from '../images/cloudy.jpg';

export default function SecondBlockImages () {
    return (
        <div className="images">
            <img className="second run one" src={dolomit} />
            <img className="second run two" src={lake} />
            <img className="second run three" src={cloudy} />
        </div>
    )    
};