import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer kX7tTLP_i73kX7B5R3ystYS01BbgV-u7MxDqsvTyPh1bT3_zlUPrDLRLcuK4QJh-N2Nz6rXf_HTJXREO0ds4odskcSQK8MLJUS5cIJsRVVhiShewUSBpXBTpuWHNXXYx'
    }

});

