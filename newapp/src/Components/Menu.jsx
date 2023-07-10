import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu({ allData }) {

    console.log(allData)

    return (
        <div className='menuDiv'>
            <Link><button disabled={allData.btnsLoginFlag} className='btnMenu'>Sign in</button></Link>
            <Link><button disabled={allData.btnsAllFlag} className='btnMenu'>Add</button></Link>
            <Link><button disabled={allData.btnsAllFlag} className='btnMenu'>Update</button></Link>
            <Link><button disabled={allData.btnsAllFlag} className='btnMenu'>Logout</button></Link>
        </div>
    )
}
