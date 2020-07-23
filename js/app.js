(function() {

  const App = {
    onDocumentReady: function() {
      Movies.resetContainer();
      Movies.fetch();
    },

    onMaxScroll: function() {
      const maxScroll = Scroll.getScrollY() + window.innerHeight;

      if (Scroll.getDocHeight() - 20 <= maxScroll) {
        Movies.fetch();
      }
    },
  };

  window.App = App;

})();