import axios from 'axios';

// 测试axios功能的简单示例
export const testAxios = async () => {
    try {
        // 测试基本的GET请求
        const response = await axios.get('https://httpbin.org/get');
        console.log('Axios GET request successful:', response.status);
        return response;
    } catch (error) {
        console.error('Axios request failed:', error);
        throw error;
    }
};

// 测试POST请求
export const testAxiosPost = async (data: any) => {
    try {
        const response = await axios.post('https://httpbin.org/post', data);
        console.log('Axios POST request successful:', response.status);
        return response;
    } catch (error) {
        console.error('Axios POST request failed:', error);
        throw error;
    }
};

// 测试axios配置
export const testAxiosConfig = () => {
    const config = {
        method: 'get',
        url: 'https://httpbin.org/get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    
    console.log('Axios config test:', config);
    return config;
};