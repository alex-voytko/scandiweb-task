import { Link } from 'react-router-dom';

function ErrorView() {
    return (
        <div className="error-view">
            <h2 className="title">{`oops, wrong page =(`}</h2>
            <Link className="link" to={'/'}>
                <button className="btn">Back Home</button>
            </Link>
        </div>
    );
}

export default ErrorView;
