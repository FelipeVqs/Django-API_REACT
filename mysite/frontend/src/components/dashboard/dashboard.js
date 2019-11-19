import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/users";

export class Dashboard extends Component {
  static PropTypes = {
    users: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <Fragment>
        <h2>Usuarios</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome: </th>
              <th>Sobrenome: </th>
              <th>Email: </th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(users => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.nome}</td>
                <td>{users.sobrenome}</td>
                <td>{users.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStatetoProps = state => ({
  users: state.users.users
});

export default connect(mapStatetoProps, { getUsers })(Dashboard);
