import React from 'react'
import Logo from './Logo'
import SignInInputs from './SignInInputs'

export default function SignIn({ allData }) {
    return (
        <div className='signInDiv'>
            <Logo />
            <SignInInputs allData={allData} />
        </div>
    )
}
