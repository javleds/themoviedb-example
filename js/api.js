(function () {

  const Api = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '',
  
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