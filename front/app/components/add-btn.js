import Component from '@ember/component';
import {inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
      if (this.isShowingModal)
          this.$('#new-act-input').focus();
    },
    saveNewAction() {
      const actionVal = this.get('newActionValue');
      let store = this.get('targetObject.store');
      if (actionVal.length) {
        let todo = store.createRecord('todo', {label: actionVal});
        todo.save();
        this.toggleProperty('isShowingModal');
      }
    }
  }
});
