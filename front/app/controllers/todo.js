import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleElementStatus(id, status) {
      if (!status) {
        console.log("i should update the action having  todo controllre the id ", id);
        this.store.findRecord('todo', id).then(function (todo) {
          console.log('youba the old value of done is ', todo);
          todo.set('done', true);
          //todo.set('label', todo.get('label'));*/
          console.log('has dirty attributes ', todo.get('hasDirtyAttributes'), " the changes are ", todo.get('changedAttributes'));
          todo.save();
        });
      }
    }
  }
});
