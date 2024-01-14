import error from '../../config/error.js';
import userBS from '../business/user.js';

class UserController {
  
  async login(req, res){
    try{
      const { email, password } = req.body;
    
      if (!email || !password) {
        throw 'incorrect-login-fields';
      }

      userBS.tryLogin(email, password)
    }catch(exception){
      if(exception instanceof String)
        error(res, exception);

      error(res, 'generic');
    }
    

  }




}