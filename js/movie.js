(function() {

  const Movie = {
    selector: '#movie',
    container: null,

    fetch: function(id) {
      const _this = this;

      Api
        .request('/movie/' + id)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          _this.render(data);
        });
    },

    getContainer: function() {
      if (!this.container) {
        this.container = document.querySelector(this.selector);
      }
  
      return this.container;
    },

    render: function(movie) {
      const _this = this;
      const $container = _this.getContainer();
      $container.innerHTML = '';
      const $itemString = [
        '<div class="single-movie">',
          '<div class="cover">',
            '<img src="https://image.tmdb.org/t/p/w500/' + movie.poster_path + '" />',
          '</div>',
          '<div class="description">',
            '<h1>' + movie.original_title + '</h1>',
            '<ul class="companies">',
              '<li>',
                '<img src="https://image.tmdb.org/t/p/w500/' + movie.production_companies[0].logo_path + '">',
              '</li>',
            '</ul>',
            '<hr>',
            '<p>' + movie.overview + '</p>',
            '<span>Calificación:</span>',
            '<div class="rating-container">',
              '<span class="rating" style="width:' + (movie.vote_average * 10) + '%"></span>',
            '</div>',
            '<ul class="details">',
              '<li><strong>Lenguaje: </strong>' + movie.original_language + '</li>',
              '<li><strong>Duración: </strong>' + movie.runtime + ' mins.</li>',
              '<li><strong>Popularidad: </strong>' + movie.popularity + '</li>',
            '</ul>',
          '</div>',
        '</div>',
      ].join('');
  
      const $parent = document.createElement('div');
      $parent.innerHTML = $itemString;
  
      const $item = $parent.firstElementChild;
  
      $container.appendChild($item);
    },
  };

  window.Movie = Movie;

})();