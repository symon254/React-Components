import React from "react";
import { Delete, Edit } from "../../Data/ButtonsModal";

export const thData = ["name", "email", "date", "Actions"];
export const tbData = [
    {
        id: "1",
        items: ["simon", "simon@gmail.com", "01/01/2022", <Edit />, <Delete />],
    },
    {
        id: "2",
        items: ["effie", "effie@gmail.com", "01/01/2022", <Edit />, <Delete />],
    },
    {
        id: "3",
        items: ["sydo", "sydo@gmail.com", "01/01/2022", <Edit />, <Delete />],
    },
];
