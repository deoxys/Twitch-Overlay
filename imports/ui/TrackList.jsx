import React, {useState} from 'react';
import {useTracker} from 'meteor/react-meteor-data';
import {TrackCollection} from '/imports/api/TrackCollection';
import {RequestCollection} from '/imports/api/RequestCollection';
import {Track} from './Track.jsx';
import { Hash } from 'react-bootstrap-icons';
import {Modal} from "./Modal";

export const TrackList = () => {

    const [artistRegex, setArtist] = useState("");
    const [trackRegex, setTrack] = useState("");
    const [show, setShow] = useState(false);
    const [track, setModalTrack] = useState(null);

    const tracks = useTracker(() => TrackCollection.find({
        artist: {$regex: artistRegex, $options: "i"},
        name: {$regex: trackRegex, $options: "i"}
    }, {sort: {name: 1}, limit: 100}).fetch());

    const handleFormChange = e => {
        e.preventDefault();
        if (e.target.name === "trackName") {
            setTrack(e.target.value);
        } else if (e.target.name === "artist") {
            setArtist(e.target.value);
        }
    };

    const showModal = track => e => {
        e.preventDefault();
        setModalTrack(track);
    };

    const addRequest = (name) => e => {
        e.preventDefault();
        if (!name || name.length === 0) {
            return;
        }
        const now = Date.now();
        console.log(now);
        RequestCollection.insert({
            createdAt: now,
            by: name,
            trackName: track.name,
            artist: track.artist,
        });
        console.log("added: " + name + " " + track.name);
        setShow(false);
        setModalTrack(null);
    };

    return (
        <div className="container">
            <Modal track={track} addRequest={addRequest}/>
            <h1 className="display-4 p-5 text-white text-center">Request a Track!</h1>
            <table className="table table-hover table-dark">
                <thead>
                <tr>
                    <th scope="col"><Hash size="26"/></th>
                    <th scope="col"><input name="trackName" type="text" className="form-control"
                                           placeholder="Track Name" onChange={handleFormChange}/></th>
                    <th scope="col"><input name="artist" type="text" className="form-control" placeholder="Artist"
                                           onChange={handleFormChange}/></th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {tracks.map(track => <Track key={track.id} track={track} setTrack={showModal}/>)}
                </tbody>
            </table>
        </div>
    );
};
