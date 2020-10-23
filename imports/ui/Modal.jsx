import React, {useState} from 'react';


export const Modal = ({track, addRequest}) => {

    const [name, setName] = useState("");
    const [valid, setValid] = useState(true);

    const nameHandler = e => {
        if (e.target.value.length > 0) {
            setValid(true);
            setName(e.target.value);
        } else {
            setValid(false);
        }
    };

    return (
        <div id="myModal" className="modal fade">
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Track Request</h5>
                        <button type="button" className="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <input name="name" type="text" className={"form-control"} onChange={nameHandler}
                                   placeholder="Your Name"/>
                        </div>
                        <div className="input-group mb-3">
                            Your request:
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control"
                                   placeholder="Track Name" disabled={true} value={track ? track.name : ""}/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control"
                                   placeholder="Artist" disabled={true} value={track ? track.artist : ""}/>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                        </button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal"
                                onClick={addRequest(name)}>Add Request!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};