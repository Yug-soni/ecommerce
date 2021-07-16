import React from "react";
import RegisterForm from "../components/RegisterForm.component";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      adminUserList: [],
      special: "special",
    };
  }

  getListOfAllAdminUsers = () => {
    const { special } = this.state;
    try {
      fetch(`http://localhost:8080/${special}/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
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
    const { special } = this.state;
    fetch(`http://localhost:8080/${special}/insert`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminUserId: 1,
        email: "test",
        password: "test",
      }),
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

  updateDefaultAdminUser = () => {
    const { special } = this.state;
    fetch(`http://localhost:8080/${special}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminUserId: 156,
        email: "newMail",
        password: "newPassword",
      }),
    }).then(response => {
      this.getListOfAllAdminUsers();
    });
  };

  deleteDefaultAdminUser = () => {
    const { adminUserList, special } = this.state;
    fetch(`http://localhost:8080/${special}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminUserList[adminUserList.length - 1]),
    })
      .then(response => response.json())
      .then(
        data => {
          if (data !== undefined || data !== null) {
            this.setState(
              {
                adminUserList: adminUserList.filter(
                  element => element.adminUserId !== data.adminUserId
                ),
              }
              //   () => {
              //     console.log(adminUserList);
              //   }
            );
          }
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
          <RegisterForm />
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

export default HomePage;
