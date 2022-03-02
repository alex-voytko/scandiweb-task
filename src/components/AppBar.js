import { Link } from 'react-router-dom';

function AppBar() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <Link to={'/'}>
                    <div className="logo-container"></div>
                </Link>
            </div>
        </header>
    );
}

export default AppBar;
