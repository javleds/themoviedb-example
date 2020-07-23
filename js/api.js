(function () {

  const Api = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '135df516df7af8dcac05099ac1b522aa',
  
    parametersToQueryString: function(parameters) {
      let query = '';
  
      for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
          query += '&' + key + '=' + parameters[key];       
        }
      }
  
      return query;
    },
  
    request: function(url, parameters) {
      const queryString = this.parametersToQueryString(parameters);
      const compositeUrl = this.baseUrl + url 
        + '?api_key=' + this.apiKey 
        + queryString;
  
      return fetch(compositeUrl);
    },
  };
  
  window.Api = Api;

})();