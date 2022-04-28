import React, { useState } from "react";
import Modals from "../components/Modal/Modal";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Edit = () => {
    const [handleShowEdit, setHandleShowEdit] = useState(false);

    return (
        <div>
            <button
                onClick={() => setHandleShowEdit(true)}
                className="btn btn-success"
            >
                <FaEdit />
            </button>
            <Modals
                title="Edit"
                children="the record cant be edited at the moment"
                showModal={handleShowEdit}
                onHideMode={() => setHandleShowEdit(false)}
            />
        </div>
    );
};
export const Delete = () => {
    const [handleDelete, setHandleDelete] = useState(false);

    return (
        <div>
            <button
                onClick={() => setHandleDelete(true)}
                className="btn btn-danger"
            >
                <MdDelete />
            </button>
            <Modals
                title="Delete"
                children="the record cant be deleted at the moment"
                showModal={handleDelete}
                onHideMode={() => setHandleDelete(false)}
            />
        </div>
    );
};
