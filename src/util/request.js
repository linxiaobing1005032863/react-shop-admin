import axios from 'axios';

import store from '../store.js';
import { doLogOut } from '../page/login/actions';

const request = (config) => {
  const { method, url, data, params } = config;

  const axioConfig = {
    method,
    url,
    data,
    params,
    timeout: 1000,
    baseURL: 'http://admintest.happymmall.com',
  };

  return axios(axioConfig).then(response => {
    const { status, data, msg } = response.data;

    if (status === 0) {
      return data;
    } else if (status === 10) {
      // status 为 10 的时候，表示用户未登录。
      store.dispatch(doLogOut());
      return Promise.reject(msg);
    } else {
      return Promise.reject(msg);
    }
  });
};

/**
 * get 请求
 * @param {string} url 
 * @param {object} params 查询参数
 */
const get = (url, params) => {
  return request({
    method: 'GET',
    url,
    params,
  });
};

/**
 * 将数据转换为表单格式
 * @param {object} data 表单数据
 */
const createFormData = data => {
  if (!data) return;

  let processedData = new FormData();
  Object.keys(data).forEach(element => {
    processedData.append(element, data[element]);
  });

  return processedData;
};

/**
 * post 请求
 * @param {string} url 
 * @param {object} data 数据
 */
const post = (url, data) => {
  return request({
    method: 'POST',
    url,
    data: createFormData(data),
  });
};

export {
  get,
  post
};
