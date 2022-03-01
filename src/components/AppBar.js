import { Link } from 'react-router-dom';

function AppBar() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <Link to={'/'}>
                    <img
                        src="https://www.marello.com/wp-content/uploads/2019/04/Scandiweb_logo-1.png"
                        alt="scandiweb-logo"
                    />
                </Link>
            </div>
        </header>
    );
}

export default AppBar;
