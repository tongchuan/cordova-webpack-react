import axios from 'axios';
import queryString from 'query-string';
import config from './config';
// import commonActions from 'Root/redux/actions/commonActions';

let instance =  axios.create({
  baseURL:config.baseUrl,
  method: 'get',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  // withCredentials: !!config.env,
  responseType: 'json',
  timeout: 0,
  transformRequest: [
    function(data) {
      return data;
    }
  ],
  transformResponse:[function(data) {
    // console.log(data)
    return data;
  }]
});

// 添加请求拦截器
instance.interceptors.request.use(function (conf) {
  // 在发送请求之前做些什么
  // commonActions.loadingShow(conf.dispatch);
  if (conf.headers['Content-Type'] !== 'application/json;charset=utf-8') {
    if(conf.method.toLowerCase() === 'post') {
      conf.data = queryString.stringify(conf.data);
    }else{
      conf.params = queryString.stringify(conf.data);
    }
  } else {
    if(conf.method.toLowerCase() === 'post') {
      conf.data = JSON.stringify(conf.data);
    }else{
      // conf.params = JSON.stringify(conf.data);
      conf.params = conf.data;
    }
  }

  
  // if(conf.method.toLowerCase() === 'get' && conf.headers['Content-Type']!='application/json;charset=utf-8'){
  //   conf.params = JSON.parse(conf.data)
  // }
  // console.log(config)
  return conf;
}, function (error) {
  // globalStore.hideWait();
  // 对请求错误做些什么
  console.log('error');
  return error;
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // globalStore.hideWait();
  // 对响应数据做点什么
  return {error: undefined, data: response.data};
}, function (error) {
  // globalStore.hideWait();
  // globalStore.showError('数据请求失败,错误信息：'+error.toString());
  // 对响应错误做点什么
  return {error: error, data: null};
});
export default instance;