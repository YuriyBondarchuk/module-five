import { useEffect, useRef, useState } from "react";
import { getProductsFilters } from "../../shared/services/Api.service";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import { ProductItem } from "../../shared/interfaces/Product.interface";
import Filters from "../../components/Filters/Filters";
import { FilterSortEnum } from "../../shared/enums/Filters.enum";
import { AppRoutes } from "../../shared/enums/AppRoutes.enum";
import { useLocation, useNavigate } from "react-router-dom";

function Products(): JSX.Element {
    const [list, setList] = useState<ProductItem[]>([]);
    const [categories, setCategories] = useState<string>("");
    const [sort, setSort] = useState<FilterSortEnum>(FilterSortEnum.asc);

    const navigate = useNavigate();
    
    const location = useLocation();

    const sortRef = useRef("");
    const categoriesRef = useRef("");

    useEffect(() => {
        if (!list.length) {
            getProductFilter();
        }

        if (categories !== categoriesRef.current) {
            console.log("cat");
            categoriesRef.current = categories;
            getProductFilter();
        }

        if (sort !== sortRef.current) {
            sortRef.current = sort;
            getProductFilter();
        }
    }, [sort, list, categories]);

    const getProductFilter = (): void => {
        getProductsFilters(categories, sort).then((data: ProductItem[]) =>
            setList(data)
        );
    };

    const setProductList = (): JSX.Element[] => {
        return list.map(
            (product: ProductItem, index: number): JSX.Element => (
                <ProductListItem product={product} key={index} index={index} />
            )
        );
    };

    const toContacts = () => {
        navigate(AppRoutes.about + "/" + AppRoutes.contact, { replace: true });
    };

    const setMessage = (): JSX.Element | false => {
        return !list.length && <div>Element List Is Empty</div>;
    };

    const sortProducts = (e: FilterSortEnum) => {
        console.log(e);
        setSort(e);
    };

    const getByCategories = (e: any) => {
        console.log(e);
        let categ = e !== "all" ? e : "";
        setCategories(categ);
    };

    return (
        <>
            <h2>Product List</h2>
            <button onClick={() => toContacts()}>Contacts</button>
            <Filters
                emitSortEvent={sortProducts}
                emitSelectedEvent={getByCategories}
                defaultSort={FilterSortEnum.asc}
            />
            <ul className="product-list d-flex flex-wrap">
                {" "}
                {setProductList()}
            </ul>
            {setMessage()}
        </>
    );
}

export default Products;
