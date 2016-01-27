(function(app) {
  app.HeroDetailComponent = // Export
    ng.core.Component({
      selector: 'my-hero-detail',
      template: `
      <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
      </div>
    `,
    inputs: ['hero']
    })
    .Class({
      // A implementação em si
      constructor: function() {
          return {
              hero: undefined
          }
      }
    });
})(window.app || (window.app = {})); // Inicializa o namespace global "app"