<template>
  <q-page class="flex flex-center">
    This is the Issues page
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round class="btn-contact" icon="far fa-comment-dots" to="contact" />
    </q-page-sticky>
  </q-page>
</template>
<style>
</style>

<script>
export default {
  name: 'Issue'
}
</script>
