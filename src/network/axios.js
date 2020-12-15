import axios from 'axios'
export  function requestone (config){
  const instance=axios.create({
    baseURL:'',
    timeout:5000,
  })
  instance.interceptors.request.use((res)=> {
    return res
  },(err)=>console.log(err));
  instance.interceptors.response.use((res)=> {
    return res.data
  },(err)=>console.log(err))
  return instance(config)
  }




