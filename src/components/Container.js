import Header from './Header'
import MatchesDisplay from './MatchesDisplay'
import { useState } from 'react'

const Container = ({ user }) => {
    const [clickedUser, setClickedUser] = useState(null)

    return (
        <div className="c-container">
            <Header user={user} />

            <div>
                <button className="op" onClick={() => setClickedUser(null)}>Matches</button>
                
            </div>

            {!clickedUser && <MatchesDisplay matches={user.matches} setClickedUser={setClickedUser} />}

            
        </div>
    )
}

export default Container