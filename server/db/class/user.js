const bcrypt = require('bcrypt');

class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  getRole() {
    return this.role;
  }

  setUsername(username) {
    this.username = username;
  }

  setPassword(password) {
    this.password = password;
  }

  setRole(role) {
    this.role = role;
  }

  static fromJSON(json) {
    return Object.assign(new User(), json);
  }

  comparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}