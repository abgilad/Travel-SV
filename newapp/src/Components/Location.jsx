import React from 'react'

export default function Location({ data }) {

    const viewFriends = () => {
        return data.friends.map((val) => {
            return <p>{val}</p>
        })
    }

    return (
        <div className='locationDiv'>
            <div className='locationPlacePic' style={{ backgroundColor: data.locationColor }}></div>
            <p>{data.description}</p>
            {viewFriends()}
        </div>
    )
}
