<script setup>
import { reactive } from "vue";

const state = reactive({
  tarefaTemplate: '',
  filtro: 'filtroTodas',
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
};

const atualizaFiltro = (e) => {
  state.filtro = e.target.value;
};

const insereNovaTarefa = () => {
  const novaTarefa = {
    nome: state.tarefaTemplate,
    finalizada: false,
  }
  state.tarefas.push(novaTarefa);
  state.tarefaTemplate = '';
}

const tarefasFiltradas = () => {
  switch (state.filtro) {
    case 'filtroNaoFinalizadas':
      return tarefasNaoFinalizadas();
    case 'filtroFinalizadas':
      return tarefasFinalizadas();
    default:
      return state.tarefas;
  }
}

// precisa verificar se tarefa já foi incluída (includes)
</script>

<template>
  <div class="container">
    <header>
      <h1 class="my-5 text-center d-flex justify-content-center align-items-center">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        To-do List
      </h1>
      <p v-if="tarefasNaoFinalizadas().length >= 1">Você possui <strong>{{ tarefasNaoFinalizadas().length }}</strong>
        tarefas pendentes</p>
      <p v-else><strong>Você finalizou todas as tarefas! 🥳</strong></p>
    </header>
    <form @submit.prevent="insereNovaTarefa">
      <div class="input-group mb-3">
        <input :value="state.tarefaTemplate" @change="atualizaNovaTarefa" type="text" class="form-control" required>
        <button @click. type="submit" class="btn btn-outline-success">Adicionar tarefa
          +</button>
        <div class="form-floating">
          <select id="floatingSelect" class="form-select" @change="atualizaFiltro">
            <option selected value="filtroTodas">Todas tarefas</option>
            <option value="filtroNaoFinalizadas">Tarefas não finalizadas</option>
            <option value="filtroFinalizadas">Tarefas finalizadas</option>
          </select>
          <label for="floatingSelect">Filtros</label>
        </div>
      </div>
    </form>
    <ul class="list-group list-group-flush">
      <li v-for="tarefa in tarefasFiltradas()" class="list-group-item">
        <input @change="finalizaTarefa(tarefa)" :name="tarefa.nome" :id="tarefa.nome"
          :checked="tarefa.finalizada === true" type="checkbox" />
        <label :for="tarefa.nome" :class="{ feita: tarefa.finalizada }" class="ms-3"> {{ tarefa.nome }}</label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.d-flex {
  gap: .9rem;
}



.feita {
  text-decoration: line-through;
}
</style>
