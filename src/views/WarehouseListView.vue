<template>
  <div>
    <h1>Galpões Cadastrados</h1>

    <table border="1px">
      <thead>
        <th>Código</th>
        <th>Nome</th>
        <th>Sigla</th>
      </thead>

      <tbody>
        <tr v-for="w in warehouses" :key="w.code">
          <td>{{ w.id }}</td>
          <td>{{ w.name }}</td>
          <td>{{ w.code }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'WarehouseListView',

    data() {
      return {
        warehouses: []
      }
    },
    
    async mounted() {
      this.getWarehouses()
    },

    methods: {
      async getWarehouses() {
        const response = await this.$http.get('http://localhost:3000/api/v1/warehouses');
        this.warehouses = await response.json();

        return this.warehouses
      }
    }
  }
</script>

<style>

</style>