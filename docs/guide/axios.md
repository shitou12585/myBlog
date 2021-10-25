# Axios封装

在vue项目开发时，一般为了简化api接口全局应用，项目中用到了axios，需要对其进行简单封装，统一数据处理和错误信息等。发现发送请求的时候可以直接实例调用，不是必须显示调用request。

## get和post请求封装

```
import qs from 'qs';
let axios = window.axios;
let escape = window.escape;

axios.defaults.baseURL = window.CONTEXT || '/multitzgg'; // 上下文

let reg = /^[\u0391-\uFFE5%]+$/;
axios.interceptors.request.use((request) => {
  // 去缓存
  let noche = new Date().getTime();
  if (request.method === 'get') {
    request.params = {
      noche,
      ...request.params
    };
  }
  // post请求数据序列化
  if (request.data && request.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    request.data = qs.stringify(request.data, { allowDots: true });
  }
  // 平台统一处理GET请求参数有中文的情况，可以和后端对接一下，如果不是平台项目，可以删除
  if (request.method === 'get' && request.params) {
    let params = request.params;
    for (let key in params) {
      let value = params[key];
      if (typeof value === 'string') {
        let newS = '';
        for (let i = 0; i < value.length; i++) {
          if (reg.test(value.charAt(i))) {
            newS += escape(value.charAt(i));
          } else {
            newS += value.charAt(i);
          }
        }
        params[key] = newS;
      }
      params['_app_encoding_tag_'] = 1;
    }
  }
  return request;
}, function (error) {
  return Promise.reject(error);
});

export function axiosFactory ({ method, url, params, data }) {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      params, // 不能再这里直接设置headers，会覆盖Authorization
      data
    }).then(({ data }) => {
      data.message === 'success' ? resolve(data) : reject(data);
    }, (err) => {
      reject(err);
    }).catch((err) => {
      reject(err);
    });
  });
}

export function axiosPostFactory ({url, data}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' } // 不同的项目可能这里不同，具体请百度Content-type相关
    }).then(({ data }) => {
      data.message === 'success' ? resolve(data) : reject(data);
    }).catch((error) => {
      reject(error);
    });
  });
}

export function axiosUploadFactory ({url, data}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data,
      headers: { 'Content-Type': 'multipart/form-data' } // 不同的项目可能这里不同，具体请百度Content-type相关
    }).then(({ data }) => {
      data.message === 'success' ? resolve(data) : reject(data);
    }).catch((error) => {
      reject(error);
    });
  });
}

```