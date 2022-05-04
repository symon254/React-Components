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
                    height={"100%"}
                    header="input fields"
                    content={<SelectInput actions={Names} width="18rem" />}
                    actions={inputss}
                    border="white"
                    borderBody="white"
                    borderHead="white"
                    borderTitle="white"
                    marginBottomCard="-30px"
                />

                <br />
            </div>
        </div>
    );
}

export default InputDisplay;
