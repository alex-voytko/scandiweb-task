import { Link } from 'react-router-dom';

function ViewWrapper({
    title,
    firstBtnName,
    secondBtnName,
    firstBtnLink,
    secondBtnLink,
}) {
    return (
        <div className="view-wrapper">
            <h2>{title}</h2>
            <div className="btn-container">
                <Link className="link" to={firstBtnLink}>
                    <button className="btn">{firstBtnName}</button>
                </Link>
                <Link className="link" to={secondBtnLink}>
                    <button className="btn">{secondBtnName}</button>
                </Link>
            </div>
        </div>
    );
}

export default ViewWrapper;
