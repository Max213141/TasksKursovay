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
              {{order.date}}
            </small>
          </strong>
        </p>
        <p>{{order.text}}</p>
        <button class="btn primary" @click="toTheTask(order.id)">Посмотреть</button>
      </div>
  </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  components: { AppStatus },
  methods: {
    toTheTask (id) {
      this.$router.push(`/task + ${id}`)
    }
  },
  computed: {
    orderList () {
      return this.$store.state.orderList
    },
    numberOfTasks () {
      return this.$store.activeTasks = this.$store.state.orderList.filter(task=> task.status === 'active').length
    }
  }
}
</script>
