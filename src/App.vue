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

const reloadPage = () => {
  window.location.reload();
}

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
  if (state.tarefas.some(tarefa => tarefa.nome === novaTarefa.nome)) {
    window.alert(`A tarefa ${novaTarefa.nome} já foi inserida`)
  } else {
    state.tarefas.push(novaTarefa);
    state.tarefaTemplate = '';
  }
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
</script>

<template>
  <div class="container">
    <header class="text-center my-5">
      <h1 class="mb-4 d-flex justify-content-center align-items-center">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        To-do List
      </h1>
      <p v-if="tarefasNaoFinalizadas().length > 1">Você possui <strong>{{ tarefasNaoFinalizadas().length }}</strong>
        tarefas pendentes</p>
      <p v-else-if="tarefasNaoFinalizadas().length == 1">Você possui apenas <strong>{{ tarefasNaoFinalizadas().length
          }}</strong>
        tarefa pendente</p>
      <p v-else><strong>Você finalizou todas as tarefas! 🥳</strong></p>
    </header>
    <form @submit.prevent="insereNovaTarefa" class="d-flex flex-row flex-wrap gap-3 align-items-center ">
      <div class="input-group mb-1 w-75 flex-grow-1">
        <input :value="state.tarefaTemplate" @change="atualizaNovaTarefa" type="text" class="form-control" required
          placeholder="Digite o nome da nova tarefa">
        <button type="submit" class="btn btn-outline-success">Adicionar +</button>
        <button @click="reloadPage" id="btn-restart"
          class="btn btn-outline-danger d-flex align-items-center gap-1">Reiniciar
          <svg id="restart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            style="width: 15px; fill: #dc3545;">
            <path
              d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
          </svg>
        </button>
      </div>
      <div class="form-floating mb-3 ">
        <select id="floatingSelect" class="form-select" @change="atualizaFiltro">
          <option selected value="filtroTodas">Todas tarefas</option>
          <option value="filtroNaoFinalizadas">Tarefas não finalizadas</option>
          <option value="filtroFinalizadas">Tarefas finalizadas</option>
        </select>
        <label for="floatingSelect">Filtrar <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            style="width: 15px; fill: #dee2e6;">
            <path
              d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
          </svg></label>
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
.feita {
  text-decoration: line-through;
}

#btn-restart:hover svg {
  fill: #ffffdb !important;
}
</style>
