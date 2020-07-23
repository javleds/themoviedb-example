(function() {
  
  const Scroll = {
    getScrollY: function() {
      let scrollY = 0;
  
      if( typeof( window.pageYOffset ) == 'number' ) {
        scrollY = window.pageYOffset;
      } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
        scrollY = document.body.scrollTop;
      } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
        scrollY = document.documentElement.scrollTop;
      }
  
      return scrollY;
    },
  
    getDocHeight: function () {
      return Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
      );
    },
  };

  window.Scroll = Scroll;

})();