import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  updateRecord(store, type, snapshot) {
    const data = {};
    const serializer = store.serializerFor(type.modelName);

    serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

    const id = snapshot.id;
    let url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

    if (snapshot.adapterOptions && snapshot.adapterOptions.done && snapshot.adapterOptions.done.label) {
      url += '?done=' + snapshot.adapterOptions.done + '&label=' + snapshot.adapterOptions.label;
    }

    return this.ajax(url, 'PATCH', { data: data });
  }
});

//# sourceMappingURL=todo-compiled.js.map