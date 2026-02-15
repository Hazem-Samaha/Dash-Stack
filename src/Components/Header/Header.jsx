import "./Header.css"

const Header = ({place}) => {
    const user=JSON.parse(localStorage.getItem('user'))||{}
  return (
        <div className="header">
      <h1>{place}</h1>
      <div className="information">
        <img  src={user.profile_image_url} />
        <div className="userInfo">
            <h1>{user.user_name}</h1>
            <p>{user?"Admin":""}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
