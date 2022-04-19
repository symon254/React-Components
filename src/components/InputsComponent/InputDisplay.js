import React from "react";
import Cards from "../card/Card";
import { inputss, Names } from "../InputsComponent/data";
import SelectInput from "../InputsComponent/Select";

function InputDisplay() {
    return (
        <div>
            <div>
                <Cards
                    // width="18rem"
                    header="Inputs"
                    title="input fields"
                    content={<SelectInput actions={Names} width="18rem" />}
                    actions={inputss}
                />

                <br />
            </div>
        </div>
    );
}

export default InputDisplay;
