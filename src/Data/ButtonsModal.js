import React, { useState } from "react";
import Modals from "../components/Modal/Modal";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { tbData } from "../components/TablesComponent/TableData";

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
    //const dataList = tbData;
    const [handleDelete, setHandleDelete] = useState(tbData);
    // const deletes = (id) => {
    //     setHandleDelete(handleDelete.filter((item) => item.id !== id));
    // };
    const removes = () => {
        const me = handleDelete.filter((item) => item.id !== tbData.id);
        setHandleDelete(me);
    };
    return (
        <div>
            <button
                // onClick={(id) => removes(id)}
                className="btn btn-danger"
            >
                <MdDelete />
            </button>
            {/* <Modals
                title="Delete"
                children="the record cant be deleted at the moment"
                showModal={handleDelete}
                onHideMode={() => setHandleDelete(false)}
            /> */}
        </div>
    );
};
