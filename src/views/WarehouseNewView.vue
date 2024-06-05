<template>
  <div>
    <h1>Cadastrar Galpão</h1>

    <div class="container">
      <v-alert v-if="msg != null" type="info">
        {{ msg }}
      </v-alert>

      <v-form v-on:submit.prevent>

        <v-text-field 
          label="Código"
          v-model="form.code" 
        />

        <v-text-field 
          label="Nome"
          v-model="form.name" 
        />
        
        <v-text-field 
          label="Endereço"
          v-model="form.address" 
        />         
        
        <v-text-field 
          label="Cidade"
          v-model="form.city" 
        />

        <v-text-field 
          label="CEP"
          v-model="form.cep" 
        />

        <v-text-field 
          label="Área em m²"
          v-model="form.area" 
        />

        <v-textarea 
          label="Descrição"
          v-model="form.description" 
        />
        
        <v-btn v-on:click="postWarehouse" color="primary">
          Cadastrar
        </v-btn>      
      </v-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WarehouseNew',

    data() {
      return {
        msg: null,
        form: {
          name: null,
          code: null,
          city: null,
          address: null,
          cep: null,
          area: null,
          description: null
        }
      }
    },

    methods: {
      async postWarehouse() {
        try {
          await this.$http.post('http://localhost:3000/api/v1/warehouses', {
            code: this.form.code,
            name: this.form.name,
            code: this.form.code,
            city: this.form.city,
            address: this.form.address,
            cep: this.form.cep,
            area: this.form.area,
            description: this.form.description
          });
          
          this.msg = "Cadastrado com sucesso!";

        } catch (error) {
          this.msg = "Ops, tente novamente!";
          console.log(error);
        }
      }
    }
  }
</script>

<style>
  .form {
    margin-bottom: 15px;
  }

  .form input {
    margin: 5px;
  }
</style>