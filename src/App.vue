<script setup>
import { reactive } from "vue";

const state = reactive({
  tarefaTemplate: '',
  tarefas: [
    {
      nome: "Ir para academia",
      finalizada: true,
    },
    {
      nome: "Estudar VUE JS",
      finalizada: true,
    },
    {
      nome: "Estudar React JS",
      finalizada: false,
    },
  ],
});

const tarefasFinalizadas = () => {
  return state.tarefas.filter(tarefa => tarefa.finalizada)
}

const tarefasNaoFinalizadas = () => {
  return state.tarefas.filter(tarefa => !tarefa.finalizada)
}

const finalizaTarefa = (tarefa) => {
  tarefa.finalizada = !tarefa.finalizada;
};

const atualizaNovaTarefa = (e) => {
  state.tarefaTemplate = e.target.value;
  if (state.tarefaTemplate.length < 2) {
    window.alert("teste");
  }
};

const insereNovaTarefa = () => {
  const novaTarefa = {
    nome: state.tarefaTemplate,
    finalizada: false,
  }
  state.tarefas.push(novaTarefa);
  state.tarefaTemplate = '';
}


</script>

<template>
  <div class="container">
    <header>
      <h1 class="my-5 text-center">To-do List</h1>
      <p v-if="tarefasNaoFinalizadas().length >= 1">Você possui <strong>{{ tarefasNaoFinalizadas().length }}</strong>
        tarefas pendentes</p>
      <p v-else><strong>Você finalizou todas as tarefas! 🥳</strong></p>
    </header>
    <form class="d-flex justify-content-between ">
      <div class="input-group mb-3">
        <input :value="state.tarefaTemplate" @change="atualizaNovaTarefa" type="text" class="form-control" required>
        <button @click.prevent="insereNovaTarefa" type="submit" class="btn btn-outline-success">Adicionar tarefa
          +</button>
      </div>

    </form>
    <ul class="list-group list-group-flush">
      <li v-for="tarefa in state.tarefas" class="list-group-item">
        <input @change="finalizaTarefa(tarefa)" :name="tarefa.nome" :id="tarefa.nome"
          :checked="tarefa.finalizada === true" type="checkbox" />
        <label :for="tarefa.nome" :class="{ feita: tarefa.finalizada }" class="ms-3"> {{ tarefa.nome }}</label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.feita {
  text-decoration: line-through;
}
</style>
