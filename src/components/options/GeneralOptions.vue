<template>
  <div>
    <b-list-group>
      <b-list-group-item>
        <button>
          <b-icon icon="bar-chart-line-fill"></b-icon>
          <span>Статистика</span>
        </button>
      </b-list-group-item>
      <b-list-group-item>
        <button @click="showEditDialog">
          <b-icon icon="pencil-fill"></b-icon>
          <span>Редактировать</span>
        </button>
      </b-list-group-item>
      <b-list-group-item>
        <button @click="remove">
          <b-icon icon="trash-fill"></b-icon>
          <span>Удалить</span>
        </button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "general-options",
  props: {
    object: Object
  },
  methods: {
    remove() {
      this.$emit('remove', this.object)
    },
    showEditDialog() {
      this.$emit('showEditDialog', this.object)
    }
  }
}
</script>

<style>
button {
  border: None;
  background-color: inherit
}
</style>
