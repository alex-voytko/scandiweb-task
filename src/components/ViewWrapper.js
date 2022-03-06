import { Link } from "react-router-dom";

function ViewWrapper({
    title,
    firstBtnName,
    firstBtnType,
    firstBtnLink,
    firstBtnClick,
    secondBtnName,
    secondBtnType,
    secondBtnLink,
    secondBtnClick,
}) {
    return (
        <div className="view-wrapper">
            <h2>{title}</h2>
            <div className="btn-container">
                <Link className="link" to={firstBtnLink}>
                    <button
                        type={firstBtnType}
                        className="btn blue"
                        onClick={firstBtnClick}
                    >
                        {firstBtnName}
                    </button>
                </Link>
                <Link className="link" to={secondBtnLink}>
                    <button
                        type={secondBtnType}
                        className="btn red"
                        onClick={secondBtnClick}
                    >
                        {secondBtnName}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ViewWrapper;
