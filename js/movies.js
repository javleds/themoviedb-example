(function() {

  const Movies = {
    selector: '#movies',
    container: null,
    currentPage: 1,

    fetch: function() {
      const _this = this;

      Api
        .request('/movie/popular', {
          page: this.currentPage,
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          _this.currentPage = _this.currentPage + 1;
          _this.render(data.results);
        });
    },

    getContainer: function() {
      if (!this.container) {
        this.container = document.querySelector(this.selector);
      }
  
      return this.container;
    },

    resetContainer: function() {
      const $container = this.getContainer();
      $container.innerHTML = '';
    },
  
    render: function(movies) {
      const _this = this;
      const $container = _this.getContainer();
      movies.map(function(movie) {
        const $itemString = [
          '<li>',
            '<div class="movie">',
              '<div class="cover">',
                '<img src="https://image.tmdb.org/t/p/w500/' + movie.poster_path + '" />',
              '</div>',
              '<div class="description">',
                '<h1>' + movie.original_title + ' <span>(' + movie.original_language + ')</span></h1>',
                '<hr>',
                '<p>' + movie.overview + '</p>',
                '<button data-id="' + movie.id + '">Ver más</button>',
              '</div>',
            '</div>',
          '</li>'
        ].join('');
  
        const $parent = document.createElement('div');
        $parent.innerHTML = $itemString;
  
        const $item = $parent.firstElementChild;
        $item.getElementsByTagName('button')[0].addEventListener('click', _this.showDetail.bind(_this))
  
        $container.appendChild($item);
      });
    },

    showDetail: function(event) {
      event.preventDefault();

      const id = event.target.getAttribute('data-id');
      Movie.fetch(id);
    }
  };

  window.Movies = Movies;

})();