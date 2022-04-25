import React from "react";
import Cards from "../card/Card";
import Inputs from "../InputsComponent/Inputs";
import ChecksRadios from "../InputsComponent/ChecksRadios";
import GridTest from "./GridTest";

function GridDisplay() {
    const inputss = [
        {
            children: (
                <>
                    <br /> <Inputs />
                    <br />
                </>
            ),
        },
        {
            children: (
                <>
                    <ChecksRadios type="radio" label="radio" />
                    <ChecksRadios type="checkbox" label="checkbox" />
                    <ChecksRadios type="switch" label="switch" />
                </>
            ),
        },
    ];
    return (
        <div>
            <div>
                <Cards
                    // width="18rem"
                    header="Inputs"
                    title="input fields"
                    content={<GridTest />}
                    actions={inputss}
                />

                <br />
            </div>
        </div>
    );
}

export default GridDisplay;
