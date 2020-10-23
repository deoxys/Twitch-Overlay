import {RequestCollection} from "../api/RequestCollection";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MusicNoteBeamed } from 'react-bootstrap-icons';

const CustomToast = ({ closeToast, request } ) => {
    return [
        <div key={1} className="toast-header bg-transparent text-light">
            <strong className="mr-auto">{request.by}</strong>
            <small className="text-monospace text-light">Request Track</small>
        </div>,
        <div key={2} className="toast-body">
            <MusicNoteBeamed size={16}/> {request.trackName} - {request.artist}
        </div>
    ];
}

export const Notifications = () => {
    const now = Date.now();

    let notifications = [];

    useEffect(() => {
        RequestCollection.find({createdAt: {$gt: now}}).observe({
            added: (document) => {
                if (!(document._id in notifications)) {
                    // console.log("added: [" + document.trackName + "] by " + document.by);
                    notifications.push({[document._id]: document});
                    toast.dark(<CustomToast request={document}/>);
                }
            }
        })
    }, []);

    return (
        <ToastContainer closeButton={false} closeOnClick={false} draggable={false} position={"top-right"} className={"halloween-shadow"} autoClose={10000} />
    );
}