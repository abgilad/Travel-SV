import React from 'react'
import Location from './Location.jsx'

export default function Home({ allData }) {

    console.log(allData.data)

    const viewCurrentLocation = () => {
        return allData.data.map((val) => {
            return <Location data={val} />
        })
    }

    return (
        <div>
            {viewCurrentLocation()}
        </div>
    )
}
