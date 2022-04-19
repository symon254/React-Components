import Inputs from "./Inputs";
import ChecksRadios from "./ChecksRadios";

export const inputss = [
    {
        label: (
            <>
                <br /> <Inputs />
                <br />
            </>
        ),
    },
    {
        label: (
            <>
                <ChecksRadios type="radio" label="radio" />
                <ChecksRadios type="checkbox" label="checkbox" />
                <ChecksRadios type="switch" label="switch" />
            </>
        ),
    },
];

export const Names = [
    { value: "simon", label: "simon" },
    { value: "Effie", label: "Effie" },
    { value: "Sydo", label: "Sydo" },
    { value: "Peter", label: "Peter" },
    { value: "Elveen", label: "Elveen" },
    { value: "Joy", label: "Joy" },
];
