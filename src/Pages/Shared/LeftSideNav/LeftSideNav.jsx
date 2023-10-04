import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className=" space-y-4 p-2">
            <h2 className=" text-2xl font-semibold">All Categories</h2>
            <div className="flex flex-col ml-4 space-y-3">
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className="text-xl font-medium px-4" key={category.id}>{category.name}</Link>)
                }
            </div>
            

            <div>

            </div>
        </div>
    );
};

export default LeftSideNav;