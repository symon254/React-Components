import { FcStart } from "react-icons/fc";
import { GiStopSign } from "react-icons/gi";
import Button from "./Buttons";
export const buttons = [
    {
        label: (
            <>
                <Button children="success" styleClass="btn-success" />
                <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button children="warning" styleClass="btn-warning" /> <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button children="info" styleClass="btn-info" /> <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button children="primary" styleClass="btn-primary" />
                <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button children="secondary" styleClass="btn-secondary" />
                <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button children="default" styleClass="btn-default" />
                <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button
                    startIcon={<FcStart />}
                    children="mimi"
                    styleClass="btn-default"
                />{" "}
                <br />
            </>
        ),
    },
    {
        label: (
            <>
                <Button
                    children="mimi"
                    endIcon={<GiStopSign />}
                    styleClass="btn-default"
                />{" "}
                <br />
            </>
        ),
    },
];
