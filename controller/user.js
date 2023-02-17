module.exports.getUser=async(event,context,callback)=>{
    let user = {"name":"akku","user_id":"07"} ;
    let response ={
      "user_exists":true,
      "user_data": user
    }
    if(user){
       return{statuscode:200,body:JSON.stringify(response)}
    }else{
      return{statuscode:200,body:JSON.stringify(response)}
    }
  }