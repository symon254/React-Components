import React from "react";

const Toast = () => {
    return (
        <div>
            <div
                className="position-fixed bottom-0 end-0 p-3"
                style="z-index: 11"
            >
                <div
                    id="liveToast"
                    className="toast"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="toast-header">
                        <strong class="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toast;
