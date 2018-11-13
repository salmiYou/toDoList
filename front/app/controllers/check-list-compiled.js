import Controller from '@ember/controller';

export default Controller.extend({
  model() {
    return [{
      acLabel: 'milk',
      acDone: true
    }, {
      acLabel: 'eggs',
      acDone: false
    }, {
      acLabel: 'coffee',
      acDone: true
    }, {
      acLabel: 'Bacon',
      acDone: false
    }];
  }
});

//# sourceMappingURL=check-list-compiled.js.map