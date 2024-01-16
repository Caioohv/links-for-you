import fs from 'fs'

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)))

export default (res, errorCode, context = null) => {
  try{
    if(!errorCode) throw 'generic';
      
    errorCode = errorCode.replaceAll(' ', '-')

    const errorResponse = loadJSON(`./errors/${errorCode}.json`)

    if(context){
      errorResponse.context = context
    }

    const {status, ...response} = errorResponse;
    
    res.status(status || 500).json(response)

  }catch(exception){
    const errorResponse = loadJSON(`./errors/generic.json`)
    res.status(errorResponse?.status || 500).json(errorResponse)
  }
}