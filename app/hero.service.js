(function(app) {
  app.HeroService = // Export
    ng.core.Injectable()
    .Class({
      // A implementação em si
      constructor: function() {},
      getHeroes: function() {
          return Promise.resolve(HEROES);
      },
      getHeroesSlowly: function() {
          return new Promise(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
          );
      }
    });
})(window.app || (window.app = {})); // Inicializa o namespace global "app"