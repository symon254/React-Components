import React from "react";
import { buttons } from "./Button";
import Cards from "../card/Card";

function ButtonDisplay() {
    return (
        <div>
            <div>
                <Cards
                    // width="18rem"
                    variantnav="tab"
                    nameTab="simon"
                    header="button"
                    title="buttons"
                    actions={buttons}
                />
            </div>
        </div>
    );
}

export default ButtonDisplay;
