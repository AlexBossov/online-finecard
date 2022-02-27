<template>
    <b-list-group>
      <b-list-group-item>
        <button @click="restore">
          <b-icon icon="arrow-counterclockwise"></b-icon>
          <span>Восстановить</span>
        </button>
      </b-list-group-item>
    </b-list-group>
</template>

<script>
export default {
  name: "general-restore-option",
  props: {
    object: Object
  },
  methods: {
    restore() {
      this.$emit('restore', this.object)
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
