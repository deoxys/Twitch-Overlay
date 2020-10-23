import React from 'react';
import { PlusSquare } from 'react-bootstrap-icons';

export const Track = ({track, setTrack}) => {
    return <tr>
        <td>{track.id}</td>
        <td>{track.name}</td>
        <td>{track.artist}</td>
        <td>
            <button type="button" className="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#myModal"
                    onClick={setTrack(track)}>Add to
                Queue <PlusSquare size="16"/></button>
        </td>
    </tr>
};