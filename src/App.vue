<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <table class="table table-dark">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Phone</th>
        <th scope="col">Name</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
      <PhoneEntry v-for="(phone, index) in phones"
                 :idx="index"
                 :phoneRecord="phone"
                 v-on:delete="deletePhone"
                 v-on:edit="editPhone"
      ></PhoneEntry>
    </table>
    <button type="button" class="btn btn-success" v-on:click="addPhone">Add phone</button>
    <EditEntry :data="modal"
           v-if="modal.visible"
           v-on:close="modal.visible = false"
           v-on:save="save"
    >
      <h3 slot="header">Phone editor</h3>
    </EditEntry>
  </div>
</template>

<script>
import PhoneEntry from './components/PhoneEntry.vue'
import EditEntry from './components/EditEntry.vue'
import Storage from './modules/Storage';

export default {
  name: 'app',
  components: {
    EditEntry,
    PhoneEntry
  },
  data: function () {
    return  {
      phones: null,
      modal: {
        visible: false,
        idx: null,
        number: null,
        name: null
      }
    };
  },
  methods: {
    addPhone: function () {
      this.modal.idx = null;
      this.modal.number = null;
      this.modal.name = null;
      this.modal.visible = true;
    },
    editPhone: function (data) {
      this.modal.visible = true;
      this.modal.idx = data.idx;
      this.modal.number = data.number;
      this.modal.name = data.name;
    },
    save: function (data) {
      if (Number.isInteger(data.idx)) {
        this.phones[data.idx] = data;
      } else {
        this.phones.push(data);
      }
      this.modal.visible = false;
      Storage.savePhones(this.phones);
    },
    deletePhone: function (idx) {
      this.phones.splice(idx, 1);
      Storage.savePhones(this.phones);
    },
    setPhones: function(phones) {
      this.phones = phones;
    }
  },
  mounted: function () {
    this.setPhones(Storage.getPhones());
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
