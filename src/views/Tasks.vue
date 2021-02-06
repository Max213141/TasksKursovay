<template>
<!--  <h1 class="text-white center" v-if=" orderList.length === 0">Задач пока нет</h1>-->
  <div>
    <h3 class="text-white">Всего активных задач: {{numberOfTasks}}</h3>
    <div v-for="(order, i) in orderList" :key="i">
      <div class="card">
        <h2 class="card-title">
          {{order.title}}
          <AppStatus :status="order.status" :badgeText="order.badgeText"/>
        </h2>
        <p>
          <strong>
            <small>
              {{ new Date(order.date).toLocaleDateString() }}
            </small>
          </strong>
        </p>
        <p>{{order.text}}</p>
        <router-link
          :to="{name:'task', params:{id:order.id}}"
          v-slot="{navigate}"
        >
          <button class="btn primary" @click="navigate">Посмотреть</button>
        </router-link>
      </div>
  </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  components: { AppStatus },
  methods: {},
  computed: {
    orderList () {
      return this.$store.getters.tasks
    },
    numberOfTasks () {
      const activeTasks = this.$store.state.orderList.filter(task => task.status === 'active').length
      return activeTasks
    }
  }
}
</script>
