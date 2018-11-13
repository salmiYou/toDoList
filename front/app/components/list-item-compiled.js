import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleElementStatus(id, status) {
      if (!status) {
        console.log("i should update the action having the id ", id);
        this.set('updateTodo', id);
      }
    }
  }
});

//# sourceMappingURL=list-item-compiled.js.map