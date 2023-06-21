import { Link } from "react-router-dom";
import { ProductItem } from "../../shared/interfaces/Product.interface";
import "./ProductListItem.scss";
import { AppRoutes } from "../../shared/enums/AppRoutes.enum";

function ProductListItem(props: { product: ProductItem; index: number }) {
    return (
        <li key={props.index} className="col-3 product-item">
            <Link
                to={"/products/" + props.product.id}
                state={{ from: AppRoutes.products }}
            >
                <div className="card product-item-card">
                    <h5 className="product-item-title">
                        {props.product.title}
                    </h5>
                    <div className="product-item-pic">
                        <img
                            src={props.product.image}
                            alt={props.product.category}
                        />
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default ProductListItem;
