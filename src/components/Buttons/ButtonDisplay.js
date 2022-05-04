import React from "react";
import { buttons } from "./Button";
import Cards from "../card/Card";

function ButtonDisplay() {
    return (
        <div>
            <div>
                <Cards
                    // width="18rem"

                    header="button"
                    actions={buttons}
                    border="white"
                    borderBody="white"
                    borderHead="white"
                    borderTitle="white"
                />
            </div>
        </div>
    );
}

export default ButtonDisplay;
