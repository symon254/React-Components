import React, { useState } from "react";

const functions = ({}) => {
    const [item, setItem] = useState();
    const delitem = (index) => () => {
        setItem((item) => item.filter((_, i) => i !== index));
    };

    return <div></div>;
};

export default functions;
