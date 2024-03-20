<script setup>
import { reactive } from "vue";

const state = reactive({
  tarefas: [
    {
      nome: "Ir para academia",
      finalizada: TextTrackCueList
    },
    {
      nome: "Estudar VUE JS",
      finalizada: true
    },
    {
      nome: "Estudar React JS",
      finalizada: false
    },
  ]
})

const statusTarefa = () => {
  if (state.tarefa.finalizada) {
    return
  }
}

</script>

<template>
  <div class="container">
    <ul class="list-group list-group-flush">
      <li v-for="tarefa in state.tarefas" class="list-group-item">
        <!-- vai aplicar a classe 'finalizada' quando tarefa.finalizada for true -->
        <input type="checkbox" :name="tarefa.nome" :id="tarefa.nome" :checked="tarefa.finalizada">
        <label :for="tarefa.nome" class="ms-1"> {{ tarefa.nome }}</label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.finalizada {
  text-decoration: line-through;
}
</style>
