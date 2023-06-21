import { Link, Outlet } from "react-router-dom";
import { AppRoutes } from "../../shared/enums/AppRoutes.enum";
import { Suspense } from "react";
import Loader from "../../components/Loader/Loader";

function About() {
    return (
        <>
            <h3>About Us</h3>
            <Link to={AppRoutes.contact}>contact</Link>
            <Link to={AppRoutes.shopInfo}>shop Info</Link>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
}

export default About;