<template>
<!--  <h1 class="text-white center">Задач пока нет</h1>-->
  <div v-for="(order, i) in orderList" :key="i">
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card">
      <h2 class="card-title">
        {{order.title}}
        <AppStatus :type="order.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{order.date}}
          </small>
        </strong>
      </p>
      <p>{{order.text}}</p>
      <button class="btn primary">Посмотреть</button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  components: { AppStatus },
  computed: {
    orderList () {
      return this.$store.state.orderList
    }
  }
}
</script>
