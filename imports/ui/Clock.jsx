import React, {useEffect, useState} from 'react';

export const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('nl-NL'));

    useEffect(() => {
        const timer = Meteor.setInterval(() => {
            setTime(new Date().toLocaleTimeString('nl-NL'));
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    });

    return (
        time
    )
}