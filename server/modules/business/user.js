class UserBs {
  constructor() {
  }

  async tryLogin(email, password) {

    if (!email || !password) {
      throw 'incorrect login fields';
    }

    return email == password;
  }
}

export default new UserBs();