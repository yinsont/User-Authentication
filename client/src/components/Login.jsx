import React from 'react'

const Login = () => {
    return (
        <div> 
            <form>
                <input placeholder='Email'></input>{/*  Email */}
                <input placeholder='Username'></input>{/*  Username */}
                <input placeholder='Password'></input>{/*  Password */}
                <input placeholder='Re-Enter Password'></input>{/*  Password */}
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login