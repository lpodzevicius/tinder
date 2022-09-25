import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'


const AuthModal = ({ setShowModal, isSignUp }) => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cs, setC, removeC] = useCookies(null)

    let navigate = useNavigate()

    console.log(username, password, confirmPassword)


    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match!')
                return
            }

            const response = await axios.post(`http://localhost:8000/${isSignUp ? 'signup' : 'login'}`, { username, password })

            setC('AuthToken', response.data.token)
            setC('UserId', response.data.userId)

            const success = response.status === 201
            if (success && isSignUp) navigate('/main')
            if (success && !isSignUp) navigate('/swipe')

            window.location.reload()

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="at-modal">
            <div className="closei" onClick={handleClick}>✖</div>

            <h2>{isSignUp ? 'REGISTRATION' : 'LOG IN'}</h2>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="username"
                    id="username"
                    name="username"
                    placeholder="username"
                    required={true}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="second-button" type="submit" />
                <p>{error}</p>
            </form>

            <hr />
            <h2>Find your love</h2>

        </div>
    )
}
export default AuthModal