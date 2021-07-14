import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      adminUserList: [],
    };
  }

  getListOfAllAdminUsers = () => {
    try {
      fetch(`http://localhost:8080/`)
        .then(response => response.json())
        .then(
          adminUserList => {
            this.setState(
              {
                adminUserList: adminUserList,
                isLoaded: true,
                error: null,
              },
              () => {
                // console.log(this.state.adminUserList);
              }
            );
          },
          error => {
            this.setState({
              isLoaded: true,
              error: error,
            });
          }
        );
    } catch (error) {
      console.log("Error");
      console.log(error);
    }
  };

  insertDefaultAdminUser = () => {
    fetch(`http://localhost:8080/insert-default-admin-user`)
      .then(response => response.json())
      .then(
        data => {
          console.log(data);
          this.getListOfAllAdminUsers();
        },
        error => {
          console.log(error);
        }
      );
  };

  updateDefaultAdminUser = () => {
    fetch(`http://localhost:8080/update-default-admin-user`).then(response => {
      this.getListOfAllAdminUsers();
    });
  };

  deleteDefaultAdminUser = () => {
    let { adminUserList } = this.state;
    fetch(`http://localhost:8080/delete-default-admin-user`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminUserList[adminUserList.length - 1]),
    })
      .then(response => response.json())
      .then(
        data => {
          console.log(data);
          this.getListOfAllAdminUsers();
        },
        error => {
          console.log(error);
        }
      );
  };

  render() {
    const { isLoaded, error, adminUserList } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          Loading...{" "}
          <button onClick={() => this.getListOfAllAdminUsers()}>
            Get List of All Users
          </button>{" "}
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => this.insertDefaultAdminUser()}>
            Insert default admin user
          </button>
          <button onClick={() => this.updateDefaultAdminUser()}>
            Update default admin user
          </button>
          <button onClick={() => this.deleteDefaultAdminUser()}>
            Delete default admin user
          </button>
          <button onClick={() => this.getListOfAllAdminUsers()}>
            Get List of All Users
          </button>{" "}
          <br />
          {adminUserList.map(({ adminUserId, email, password }) => (
            <div key={adminUserId}>
              <p>Id: {adminUserId}</p>
              <p>Email: {email}</p>
              <p>Password: {password}</p>
              <br />
            </div>
          ))}
        </div>
      );
    }
  }
}

export default App;
