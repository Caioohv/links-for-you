export default (res, error, context) => {
  try{
    
    if(!error) throw 'generic';
    error = error.replaceAll(' ', '-');

    const errorResponse = require(`./errors/${errorCode}.json`);

    if(context){
      errorResponse.context = context;
    }

    res.status(errorResponse?.status || 500).json(errorResponse);


  }catch(exception){
    const error = require(`./errors/default.json`);
    return error;
  }
}