import React from 'react';
import { DateRange } from 'react-date-range';

export default function MyComponent() {
    function handleSelect(range) {
        console.log(new Date(range.startDate._d).toLocaleDateString());
        console.log(new Date(range.endDate._d).toLocaleDateString());
        // An object with two keys,
        // 'startDate' and 'endDate' which are Momentjs objects.
    }

    return (
        <div>
            <DateRange
                onInit={handleSelect}
                onChange={handleSelect}
            />
        </div>
    )
}