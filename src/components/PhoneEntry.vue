<template>
  <tr>
    <th scope="row">{{ idx + 1 }}</th>
    <td>{{ phoneRecord.number }}</td>
    <td>{{ phoneRecord.name }}</td>
    <td>
      <button type="button" class="btn btn-warning" v-on:click="doEdit">Edit</button>
      <button type="button" class="btn btn-danger" v-on:click="doDelete">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'PhoneItem',
  props: {
    idx: Number,
    phoneRecord: Object
  },
  data() {
    return {
        number: null,
        name: null
    }
  },
  methods: {
    doDelete () {
      this.$emit('delete', this.idx)
    },
    doEdit () {
      this.$emit('edit', { idx:this.idx, number: this.number, name: this.name})
    }
  },
  mounted: function() {
    this.number = this.phoneRecord.number;
    this.name = this.phoneRecord.name;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: darkolivegreen;
}
</style>
