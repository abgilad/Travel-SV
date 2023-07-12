import React from 'react'

export default function Location({ data, nextIndex }) {

    const viewFriends = () => {
        return data.friends.map((val, i) => {
            return <p key={i}>{val}</p>
        })
    }

    console.log(data)

    return (
        <div className='locationDiv'>
            <button onClick={() => { nextIndex('next') }}>{`<`}</button>
            <div className='locationPlacePic' style={{ backgroundColor: data.locationColor }}>{data.location}</div>
            <button onClick={() => { nextIndex('previous') }}>{`>`}</button>
            <p>{data.description}</p>

            {viewFriends()}
        </div>
    )
}
