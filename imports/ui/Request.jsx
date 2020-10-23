import React from 'react';
import { Trash } from 'react-bootstrap-icons';

export const Request = ({request, onDelete}) => {
    return <tr>
        <td>{request.by}</td>
        <td>{request.trackName}</td>
        <td>{request.artist}</td>
        <td>
            <button type="button" className="btn btn-outline-danger btn-sm"
                    onClick={() => onDelete(request) }>Delete <Trash size="16"/></button>
        </td>
    </tr>
};