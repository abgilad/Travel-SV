import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu({ allData }) {


    return (
        <div className='menuDiv'>
            <Link><button disabled={allData.btnsLoginFlag} className='btnMenu'>Sign in</button></Link>
            <Link to='/home'><button disabled={allData.btnsAllFlag} className='btnMenu'>Home</button></Link>
            <Link to=''><button disabled={allData.btnsAllFlag} className='btnMenu'>Add</button></Link>
            <Link><button disabled={allData.btnsAllFlag} className='btnMenu'>Update</button></Link>
            <Link><button disabled={allData.btnsAllFlag} className='btnMenu'>Logout</button></Link>
        </div>
    )
}
