import { Link, useNavigate } from "react-router-dom";
import './Header.scss';
import { AppRoutes } from "../../shared/enums/AppRoutes.enum";

function Header(): JSX.Element {
    const pages: string[] = ["home", "about", "products"];

    const navigate = useNavigate();

    const setMenu = (): JSX.Element[] => {
        return pages.map((list: string, index: number) => (
            <li key={index} className="me-3">
                <Link to={list === 'home' ? '/' : list}>{list}</Link>
            </li>
        ));
    };

    const loginBtn = (): JSX.Element => {
        return (
            <button onClick={() => navigate(AppRoutes.auth, {replace: true})} className="btn btn-success">
                Login
            </button>
        )
    }

    return (
        <nav id="header" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand">Navbar</div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {setMenu()}
                    </ul>

                </div>

                {loginBtn()}
            </div>
        </nav>
    );
}

export default Header;
