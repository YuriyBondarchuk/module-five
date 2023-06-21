import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEndpint } from "../../../shared/services/Api.service";
import { AppEndpoints } from "../../../shared/enums/AppEndpoints.enum";
import { ProductItem } from "../../../shared/interfaces/Product.interface";
import { AppRoutes } from "../../../shared/enums/AppRoutes.enum";

function Product() {
    const [product, setProduct] = useState<ProductItem>();
    const { productId } = useParams<string>();
    const location = useLocation();
    console.log(location.state);

    useEffect(() => {
        if (!product) {
            getProduct();
        }
    });

    const getProduct = () => {
        getEndpint(AppEndpoints.products, productId).then((data) =>
            setProduct(data)
        );
    };

    return (
        <>
            <div>
                <Link to={location.state.from}>Products/</Link>
                {product?.title}
            </div>
            <h4 className="title">{product?.title}</h4>
            <p>{product?.description}</p>
            <p>{product?.category}</p>
            <p>{product?.price}</p>
            <img src={product?.image} alt="" />
        </>
    );
}

export default Product;
