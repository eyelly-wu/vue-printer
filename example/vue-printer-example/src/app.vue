<template>
  <div>
    <div ref="printContent"> this is content to print </div>
    <div> this is normal content </div>
    <Printer :content="content">
      <button>print</button>
    </Printer>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    computed: {
      content() {
        return {
          refs: this.$refs,
          refName: 'printContent'
        }
      }
    }
  }
</script>

<style>
</style>
