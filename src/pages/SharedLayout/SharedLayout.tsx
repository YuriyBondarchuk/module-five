import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Suspense } from "react";
import Loader from "../../components/Loader/Loader";

function SharedLayout() {
    return ( 
        <>
            <Header />
            <div className="container">
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
        </>
     );
}

export default SharedLayout;