import "./App.scss";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { AppRoutes } from "./shared/enums/AppRoutes.enum";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import Login from "./pages/Auth/LogIn/LogIn";
import Logout from "./pages/Auth/LogOut/LogOut";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";

const Auth = lazy(() => import('./pages/Auth/Auth'));
const Home = lazy(() => import('./pages/Home/Home'));
const Products = lazy(() => import('./pages/Products/Products'));
const Product = lazy(() => import('./pages/Products/Product/Product'));
const About = lazy(() => import('./pages/About/About'));
const Contatcs = lazy(() => import('./pages/About/Contacts'));
const ShopInfo = lazy(() => import('./pages/About/ShopInfo'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path={AppRoutes.home} element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path={AppRoutes.about} element={<About />}>
                            <Route path={AppRoutes.contact} element={<Contatcs />} />
                            <Route path={AppRoutes.shopInfo} element={<ShopInfo />} />
                        </Route>
                        <Route path={AppRoutes.products} element={<Products />} />
                        <Route path={AppRoutes.productsElement} element={<Product />} />
                    </Route>
                    <Route path={AppRoutes.auth} element={<Auth />}>
                        <Route index element={<Login />}/>
                        <Route path={AppRoutes.logout} element={<Logout />}/>
                    </Route>
                    <Route path={AppRoutes.notFound} element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
