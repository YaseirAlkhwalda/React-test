import React from 'react';

class Profile extends React.Component {

  render() {
    const { users } = this.props;
    return (
      <div>
        {/* {users.map(user => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.surname}</p>
              <p>{user.gender}</p>
              <p>{user.region}</p>
            </div>
          )
        })
      } */}
      </div>
    )
  }
}
export default Profile;