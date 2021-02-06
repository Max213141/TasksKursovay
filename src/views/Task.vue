<template>
  <h3 class="text-white center" v-if="!currentTask">
    <div>Задачи с id = <strong>{{id}}</strong> нет.</div>
  </h3>
  <div class="card" v-else>
    <h2>{{currentTask.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="currentTask.status" :badgeText="currentTask.badgeText" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(currentTask.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{currentTask.text}}</p>
    <div>
      <button class="btn" @click="$store.commit('startWorking',currentTask)">Взять в работу</button>
      <button class="btn primary" @click="$store.commit('finish',currentTask)">Завершить</button>
      <button class="btn danger" @click="$store.commit('cancel',currentTask)">Отменить</button>
    </div>
  </div>

</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  props: ['id'],
  computed: {
    currentTask () {
      console.log(typeof (this.id))
      const tasks = this.$store.getters.tasks
      const task = tasks.find(task => task.id === +this.id)
      return task
    }
  },
  components: { AppStatus }

}
</script>

<style scoped>

</style>
