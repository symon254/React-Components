import React, { useState } from "react";
import Button from "../Buttons/Buttons";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modals from "../Modal/Modal";

export const thData = ["name", "email", "date", "Actions"];
export const tbData = [
    {
        id: "1",
        items: [
            "simon",
            "simon@gmail.com",
            "01/01/2022",
            <Button startIcon={<FaEdit />} styleClass="btn-success" />,
            <Button
                startIcon={<MdDelete />}
                styleClass="btn-danger"
                marginLeft="-90px"
            />,
        ],
    },
    {
        id: "2",
        items: [
            "effie",
            "effie@gmail.com",
            "01/01/2022",
            <Button startIcon={<FaEdit />} styleClass="btn-success" />,
            <Button
                startIcon={<MdDelete />}
                styleClass="btn-danger"
                marginLeft="-90px"
            />,
        ],
    },
    {
        id: "3",
        items: [
            "sydo",
            "sydo@gmail.com",
            "01/01/2022",
            <Button startIcon={<FaEdit />} styleClass="btn-success" />,
            <Button
                startIcon={<MdDelete />}
                styleClass="btn-danger"
                marginLeft="-90px"
            />,
        ],
    },
];
