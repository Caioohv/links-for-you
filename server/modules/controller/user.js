import error from '../../config/error.js';
import userBS from '../business/user.js';

class UserController {

  constructor(){}
  
  async login(req, res){
    try{
      const { email, password } = req.body;

      let result = await userBS.tryLogin(email, password)

      res.status(200).json({message: 'ok'});
    }catch(exception){
      if(typeof exception == 'string')
        return error(res, exception);

      error(res, 'generic');
    }
    

  }

}

export default new UserController();