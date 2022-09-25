import Nav from '../components/Nav'
import AuthModal from "../components/AuthModal"
import { useState } from 'react'
import { useCookies } from "react-cookie"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cs, setC, removeC] = useCookies(['user'])
    const authToken = cs.AuthToken

    const handleClick = () => {
        if (authToken) {
            removeC('UserId', cs.UserId)
            removeC('AuthToken', cs.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav
                authToken={authToken}
                minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <h1 className="first-title">Dating App</h1>
                <button className="first-button" onClick={handleClick}>
                    {authToken ? 'SIGNOUT' : 'REGISTRATION'}
                </button>


                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
                )}
            </div>
        </div>
    )
}
export default Home