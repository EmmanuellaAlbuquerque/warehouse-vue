<template>
  <div>
    <h1>Galpões Cadastrados</h1>

    <input type="text" class="form" v-model="term" placeholder="Buscar galpão">

    <div v-for="w in filterWarehouse" :key="w.code">
      <Warehouse 
        :id =  "w.id"
        :name =  "w.name"
        :code =  "w.code"
        :city =  "w.city"
        :area =  "w.area"
        :address =  "w.address"
      />
    </div>

    <!-- <table border="1px">
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
    </table> -->
  </div>
</template>

<script>
  import Warehouse from '../components/Warehouse';

  export default {
    name: 'WarehouseListView',
    components: {
      Warehouse
    },

    data() {
      return {
        warehouses: [],
        term: ''
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
    },

    computed: {
      filterWarehouse() {
        return this.warehouses.filter(warehouse => {
          return warehouse.name.toLowerCase().includes(this.term.toLocaleLowerCase());
        });
      }
    }
  }
</script>

<style>
  .form {
    margin-bottom: 20px;
  }
</style>