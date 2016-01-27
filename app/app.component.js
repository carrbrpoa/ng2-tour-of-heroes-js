(function(app) {
  app.AppComponent = // Export
    ng.core.Component({
      selector: 'my-app',
      template:`
          <h1>{{title}}</h1>
          <h2>My Heroes</h2>
          <ul class="heroes">
              <li *ngFor="#hero of heroes"
                  [class.selected]="hero === selectedHero"
                      (click)="onSelect(hero)">
                  <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
          </ul>
          <my-hero-detail [hero]="selectedHero"></my-hero-detail>
      `,
      styles:[`
              .selected {
                background-color: #CFD8DC !important;
                color: white;
              }
              .heroes {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 10em;
              }
              .heroes li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0em;
                height: 1.6em;
                border-radius: 4px;
              }
              .heroes li.selected:hover {
                color: white;
              }
              .heroes li:hover {
                color: #607D8B;
                background-color: #EEE;
                left: .1em;
              }
              .heroes .text {
                position: relative;
                top: -3px;
              }
              .heroes .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0em 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0px 0px 4px;
              }
            `],
            directives: [app.HeroDetailComponent],
            providers: [app.HeroService]
    })
    .Class({
      // A implementação em si
      constructor: [app.HeroService, function(_heroService) {          
          return {
              title: 'Tour of Heroes',
              selectedHero: undefined,
              onSelect: function(hero) { this.selectedHero = hero; },
              getHeroes: function() {
                  //_heroService.getHeroes().then(heroes => this.heroes = heroes);
                  _heroService.getHeroesSlowly().then(heroes => this.heroes = heroes); // Para simular latência de conexão, com "Operador Flecha" (ES2015)
              },
              ngOnInit: function() {
                  this.getHeroes();
              }
          }
      }],
      ngOnInit: function dummy() {} // WTF? Gambiarra captada na internet, necessária para o ngOnInit de dentro do construtor rodar
    });
})(window.app || (window.app = {})); // Inicializa o namespace global "app"