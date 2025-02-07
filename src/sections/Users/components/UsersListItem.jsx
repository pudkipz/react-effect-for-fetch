export default function UsersListItem({usersItem:{
  firstName, lastName, gender, email, jobTitle, street, city,
  latitude, longitude, favouriteColour, profileImage}}) {

    return (
      // <li style={{background: '#0d7f26'}}>
      <li style={{background: favouriteColour}}>
          <img src={profileImage} alt={`${firstName} ${lastName}`}/>
          <h3>{`${jobTitle} ${firstName} ${lastName}`}</h3>
          <p>Email: {email}</p>
      </li>
    )
}