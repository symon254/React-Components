import React from "react";
import khaki from "../../Assets/Img/khaki.jpg";
import hoodie from "../../Assets/Img/hoodie.jpg";
import shirt from "../../Assets/Img/shirt.jpg";
import shoe from "../../Assets/Img/shoe.jpg";
import Cards from "../../components/Card/Cards";

const PageE = () => {
    return (
        <div style={{ marginLeft: "160px" }}>
            <Cards
                src={khaki}
                alt="khaki"
                title="Mens Khaki"
                des="All Stylish Mens Khaki"
                price="1200.00"
                Children="Add Cart"
            />
            <Cards
                src={hoodie}
                alt="hoodie"
                title="Hoodies"
                des="Stylish Hoodies"
                price="1,500.00"
                Children="Add Cart"
            />
            <Cards
                src={shirt}
                alt="shirt"
                title="Mens Shirts"
                des="Office shirt wearable"
                price="1,000.00"
                Children="Add Cart"
            />
            <Cards
                src={shoe}
                alt="shoe"
                title="Shoes"
                des="Stylish shoe wear"
                price="2,500.00"
                Children="Add Cart"
            />
        </div>
    );
};

export default PageE;
