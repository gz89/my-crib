<template>
  <q-page class="flex flex-center">
    This is the Contact page
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round class="btn-contact" icon="fas fa-plus" to="contact" />
    </q-page-sticky>
  </q-page>
</template>
<style>
</style>

<script>
export default {
  name: 'Contact'
}
</script>
