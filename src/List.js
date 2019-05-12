import React from 'react';


class List extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((user, id) =>
          <div key= {id}>{user.name}</div>
        )
        }
    </div>
  )
}
}



export default List;