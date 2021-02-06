<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="text"></textarea>
    </div>

    <button class="btn primary" :disabled="!checkDisabled" @click="createOrder">Создать</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      date: '',
      text: '',
      order: {},
      status: null,
      badgeText: null
    }
  },
  methods: {
    createOrder () {
      if (this.statusOfOrder) {
        this.status = 'active'
      } else {
        this.status = 'done'
      }

      this.order = {
        title: this.title,
        date: this.date,
        text: this.text,
        status: this.status,
        badgeText: this.statusOfBadge,
        id: this.getRandomInt
      }
      this.$store.commit('addToOrderList', this.order)
      this.$router.push('/')
      this.order = {}
      console.log(this.$store.orderList)
    }
  },
  computed: {
    checkDisabled () {
      return this.date !== '' && this.title !== '' && this.text !== ''
    },
    statusOfOrder () {
      const givenDate = new Date(this.date).getTime()
      const currentDate = new Date().getTime()
      return givenDate > currentDate
    },
    statusOfBadge () {
      if (this.status === 'done') {
        return this.badgeText = 'Завершен'
      } else if (this.status === 'active') {
        return this.badgeText = 'Активен'
      }
    },
    getRandomInt () {
      const min = Math.ceil(0)
      const max = Math.floor(10000)
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>
