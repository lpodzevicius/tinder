import { useCookies } from 'react-cookie'

const Header = ({ user }) => {
    const [cs, setC, removeC] = useCookies(['user'])

    const logout = () => {
        removeC('UserId', cs.UserId)
        removeC('AuthToken', cs.AuthToken)
        window.location.reload()
    }

    return (
        <div className="c-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.url} alt={"photo of " + user.first_name} />
                </div>
                <h3>{user.first_name}</h3>
            </div>
            <i className="logouti" onClick={logout}>⌫</i>
        </div>
    )
}

export default Header