import { Meteor } from 'meteor/meteor';
import { TrackCollection } from '/imports/api/TrackCollection';
import { RequestCollection } from '/imports/api/RequestCollection';
import data from "./data/data.json";

var i = 0;
const insertTrack = (jsonRow) => {
  TrackCollection.insert({id: i, name: jsonRow.name, artist: jsonRow.artist});
  i++;
};

Meteor.startup(() => {
  if (TrackCollection.find().count() === 0) {
    data.tracks.forEach(insertTrack);
  }
});