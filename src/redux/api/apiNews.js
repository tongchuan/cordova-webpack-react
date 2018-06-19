import Promise from 'promise';
import config from './config';
import axios from './axios';

export default {
  getNewsTest(data) { // {code111:'voucherlist'}
    return new Promise(function(resolve,reject) {
      axios({
        method: 'get',
        url: config.ficloud.customviewctrl,
        data: data,
        headers: {
          // 'Accept': '*/*',
          'Content-Type': 'application/json;charset=utf-8'
          // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(({error, data}) => {
        if(error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  },
  getNewsList(data) { // {refCode:'accperiod',refType:'list',displayFields:['code','name']}
    return new Promise(function(resolve,reject) {
      axios({
        method: 'post',
        url: config.ficloud.queryRefJSON,
        data: data,
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json;charset=utf-8'
        }
      }).then(({error, data}) => {
        if(error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

}