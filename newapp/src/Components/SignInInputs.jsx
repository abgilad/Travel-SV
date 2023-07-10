import React, { useState } from 'react'

export default function SignInInputs({ allData }) {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')




    console.log(allData.checkUser)

    return (
        <div className='signInInputsDiv'>
            <input onChange={(e) => { setUser(e.target.value) }} className='input' placeholder='User Name' autoComplete="off" /><br />
            <input onChange={(e) => { setPassword(e.target.value) }} className='input' placeholder='Password' autoComplete="off" /><br />
            <button onClick={() => { allData.checkUser(user, password) }}>Login</button>
        </div>
    )
}
