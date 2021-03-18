export let axios;

export default ({ store, $axios }) => {

    $axios.defaults.baseURL = 'https://4fc1wt8cqi.execute-api.ap-northeast-1.amazonaws.com/dev'
  
    $axios.onRequest(config => {
      config.headers.common['Authorization'] = `${localStorage.getItem("auth._token.auth0")}`;
      config.headers.common['Accept'] = 'application/json';
    });
  
    $axios.onResponse(response => {
      return Promise.resolve(response);
    })
  
    $axios.onError(error => {
      return Promise.reject(error.response);
    });
  
    axios = $axios;
  }