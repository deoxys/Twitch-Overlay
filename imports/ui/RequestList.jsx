import React from 'react';
import {useTracker} from 'meteor/react-meteor-data';
import {RequestCollection} from '/imports/api/RequestCollection';
import {Request} from "./Request";

export const RequestList = () => {

    const requests = useTracker(() => RequestCollection.find({}, {sort: {createdAt: 1}, limit: 100}).fetch());

    const deleteRequest = ({_id}) => RequestCollection.remove(_id);

    return (
        <div className="container">
            <h1 className="display-4 text-white text-center">Track Requests</h1>
            <table className="table table-hover table-dark">
                <thead>
                <tr>
                    <th scope="col">Added By</th>
                    <th scope="col">Track Name</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {requests.map(request => <Request key={request.createdAt} request={request} onDelete={deleteRequest}/>)}
                </tbody>
            </table>
        </div>
    );
};
