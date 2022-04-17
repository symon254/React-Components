import React from "react";
import { buttons } from "./Buttons/Button";
import Cards from "./card/Card";
import ChecksRadios from "./InputsComponent/ChecksRadios";
import { Names } from "./InputsComponent/data";
import Inputs from "./InputsComponent/Inputs";
import SelectInput from "./InputsComponent/Select";
import Table from "./TablesComponent/Table";
import { tbData, thData } from "./TablesComponent/TableData";

function Card() {
    return (
        <div>
            <div>
                <Cards
                    // width="18rem"
                    variantnav="tab"
                    nameTab="simon"
                    header="button"
                    title="test"
                    actions={buttons}
                />
            </div>

            <div>
                <SelectInput actions={Names} width="18rem" />
                <br />
            </div>
            <div>
                <Inputs />
                <br />
            </div>
            <div>
                <ChecksRadios type="checkbox" label="checkbox" />
                <ChecksRadios type="radio" label="radio" />
                <ChecksRadios type="switch" label="switch" />
            </div>
            <div>
                <Table
                    thData={thData}
                    tbData={tbData}
                    className="table"
                    size="small"
                    width="50rem"
                />
            </div>
        </div>
    );
}

export default Card;
