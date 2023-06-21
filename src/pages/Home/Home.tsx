import { useEffect, useState } from "react";
import { getEndpint } from "../../shared/services/Api.service";
import { AppEndpoints } from "../../shared/enums/AppEndpoints.enum";

function Home() {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        if (!categories.length) {
            getCategories();
        }
    });

    const getCategories = () => {
        return getEndpint(AppEndpoints.productsCategories).then((data) =>
            setCategories(data)
        );
    };

    return (
        <>
            <div>Home</div>

            <div className="d-flex flex-wrap">
                {categories.map((category: string, index: number) => (
                    <div key={index} className="card col-3">
                        {category}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
