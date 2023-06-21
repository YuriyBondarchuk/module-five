import { useEffect, useState } from "react";
import { getEndpint } from "../../shared/services/Api.service";
import { AppEndpoints } from "../../shared/enums/AppEndpoints.enum";
import { FilterSortEnum } from "../../shared/enums/Filters.enum";
import './Filters.scss';

function Filters({
    emitSortEvent,
    emitSelectedEvent,
    defaultSort,
}: {
    emitSortEvent: any;
    emitSelectedEvent: any;
    defaultSort: FilterSortEnum;
}) {
    const [categories, setCategories] = useState<string[]>([]);
    const [sort, setSort] = useState<FilterSortEnum[]>([FilterSortEnum.desc, FilterSortEnum.asc]);
    const [activeSort, setActiveSort] = useState<FilterSortEnum>(defaultSort);

    useEffect(() => {
        if (!categories.length) {
            getCategories();
        }
    });

    const getCategories = () => {
        return getEndpint(AppEndpoints.productsCategories).then((data) =>
            setCategories(['all', ...data])
        );
    };

    return (
        <div className="card">
            <h4 className="categories">categories</h4>
            <select
                defaultValue={'all'}
                onChange={(e) => emitSelectedEvent(e.target.value)}
            >
                <option></option>
                {categories.map((category: string, index: number) => (
                    <option key={index} className="card col-3" value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <h4 className="sort">sort</h4>
            <div className="sort-list">
                {sort.map((sort: FilterSortEnum, index: number) => (
                    <div
                        key={index}
                        className={sort === activeSort ? "active sort-item" : "sort-item"}
                        onClick={() => {emitSortEvent(sort); setActiveSort(sort)}}
                    >
                        {sort}
                    </div>
                ))}
                {/* <div onClick={() => emitSortEvent(FilterEnum.desc)}>desc</div>
                <div onClick={() => emitSortEvent(FilterEnum.asc)}>asc</div> */}
            </div>
        </div>
    );
}

export default Filters;
