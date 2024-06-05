<template>
  <div>
    <h1>Galpões Cadastrados</h1>

    <v-text-field label="Buscar o galpão" v-model="term" class="my-5" />
    
    <v-card dark>
      <v-card-text>
        <WarehouseTable :warehouses="filterWarehouse" />
      </v-card-text>      
    </v-card>

    <!-- <div v-for="w in filterWarehouse" :key="w.code">
      <Warehouse 
        :id =  "w.id"
        :name =  "w.name"
        :code =  "w.code"
        :city =  "w.city"
        :area =  "w.area"
        :address =  "w.address"
      />
    </div> -->
  </div>
</template>

<script>
  import Warehouse from '../components/Warehouse';
  import WarehouseTable from '../components/WarehouseTable';

  export default {
    name: 'WarehouseListView',
    components: {
      Warehouse,
      WarehouseTable
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