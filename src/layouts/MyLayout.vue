<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="main-tabs"
      >
        <q-route-tab name="upcoming" icon="far fa-calendar" label="Upcoming" to="/" />
        <q-route-tab name="issues" icon="far fa-question-circle" label="Issues" to="/issue" />
        <q-route-tab name="payments" icon="far fa-credit-card" label="Payments" to="/payment" />
        <q-route-tab name="energy" icon="info_outline" label="Energy" to="/energy" />
        <q-route-tab name="documents" icon="fas fa-paperclip" label="Documents" to="/document" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      tab: 'mails'
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>

/* Main Layout */
.q-layout__section--marginal {
    background-color: #fff;
    color: #000;
}
.q-toolbar__title {
  text-align: center;
}

/* Toolbar */
.toolbar-left {
  position: absolute;
  left: 8px;
}
.toolbar-right {
  position: absolute;
  right: 8px;
}
.q-toolbar .on-left {
    margin-right: 0px;
}

.q-toolbar__title {
  font-size: 17px;
  padding: 0 58px;
}

.q-toolbar__title:last-child {
  padding-right: 58px;
}

/* Main Tab */
.main-tabs {
  color: #000 !important;
}
.q-tab__label {
  font-size: 10px;
}
.q-tab--active {
  color: #c8d322;
}

/* Contact Suppor Button */
.q-btn--round {
  width: 60px;
  height: 60px;
}
.btn-contact {
  color: #c8d322;
  background: #5f6062;
}
.btn-contact .q-icon {
  font-size: 32px;
}

/* Search Control */
.q-field__control {
  height: 40px;
  background:#f2f2f2;
}
.q-field__marginal {
  height: 40px;
}
</style>
