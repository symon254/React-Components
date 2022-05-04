import React from "react";
import { FcStart } from "react-icons/fc";
import { GiStopSign } from "react-icons/gi";
import Button from "./Buttons";
import "./Button.css";

export const buttons = [
    {
        label: (
            <>
                <Button children="success" styleClass=" btn-me btn-success " />
                <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button children="warning" styleClass="btn-me btn-warning" />{" "}
                <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button children="danger" styleClass="btn-me btn-danger" />{" "}
                <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button children="info" styleClass="btn-me btn-info" /> <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button children="primary" styleClass="btn-me btn-primary" />
                <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button
                    children="secondary"
                    styleClass="btn-me btn-secondary"
                />
                <br />
            </>
        ),
    },
    // {
    //     label: (
    //         <>
    //             <Button children="default" styleClass="btn-me btn-default" />
    //             <br />
    //         </>
    //     ),
    // },
    // {
    //     label: (
    //         <>
    //             <Button
    //                 startIcon={<FcStart />}
    //                 children="mimi"
    //                 styleClass="btn-me btn-default"
    //                 backgroundColor="lightgrey"
    //             />{" "}
    //             <br />
    //         </>
    //     ),
    // },
    // {
    //     label: (
    //         <>
    //             <Button
    //                 children="mimi"
    //                 endIcon={<GiStopSign />}
    //                 styleClass="btn-me btn-default"
    //                 backgroundColor="lightgrey"
    //             />{" "}
    //             <br />
    //         </>
    //     ),
    // },
];
