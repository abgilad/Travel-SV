import React, { useState } from 'react'
import Location from './Location.jsx'

export default function Home({ allData }) {

    const [nextLocation, setNextLocation] = useState(0)

    console.log(allData.data)

    const viewCurrentLocation = (n) => {
        // return allData.data.map((val) => {
        //     return <Location data={val} />
        // })

        if (n === 'next' && nextLocation >= 0 && nextLocation < allData.data.length - 1) {
            setNextLocation(nextLocation + 1)
            console.log('next')
        }
        if (n === 'previous' && nextLocation > 0) {
            setNextLocation(nextLocation - 1)
            console.log('previous')
        }

    }


    return (
        <div>
            <Location key={nextLocation} nextIndex={viewCurrentLocation} data={allData.data[nextLocation]} />
            {/* {viewCurrentLocation()} */}
        </div>
    )
}
