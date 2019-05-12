import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import List from './List';
import Profile from './Profile';

const url = 'http://uinames.com/api/?amount=5';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    data: [],
    currentUser: null,
  };
  fetchUsers = () => {
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ data: json, isLoggedIn: true }))
      .catch(error => alert(`${error} Check The Url!`));
  };

  showUser = () => {
    const { data } = this.state;
    data.map((user, index) => {
      if (data.index === index) {
        this.setState({ currentUser: user });
      }
    });
  };

  render() {
    const { data } = this.state;
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <SearchBar onClick={this.fetchUsers} />
        {isLoggedIn ? <List data={data} /> : null}
        <Profile users={this.showUser} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
