<template>
  <q-page class="event">
    <q-header>
      <q-toolbar>
        <q-btn flat icon="fas fa-chevron-left" label="Back" v-go-back="'/'" class="btn-back toolbar-left" />
        <q-toolbar-title>{{event.title}}</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-card flat class="event-card">
      <q-card-section>
        <div class="text-h6 title">{{event.title}}</div>
      </q-card-section>

      <q-card-section class="description">
        {{event.detail}}
      </q-card-section>
      <q-btn flat text-color="black" label="More Info" class="detail" />
    </q-card>
  </q-page>
</template>
<style>
.btn-back {
 color: #c8d323;
 padding: 4px 0px;
}
.event-card .title {
  font-weight:600;
  font-size: 24px;
}
.event-card .desciption {
  font-size: 18px;
  font-weight: 500;
  color: rgb(0,0,0,0.6);
}
.event-card .detail {
  background: #c8d323;
  width: 96%;
  margin-left: 2% !important;
}
</style>

<script>
export default {
  name: 'Event',
  data () {
    return {
      event: null,
      events: [
        {
          id: '0',
          time: '12:00 PM',
          title: '🎉 Check In',
          detail: "We can't wait to welcome you in to your property! Before we can give you your keys you must make sure right to rent checks and first months rent have been paid."
        },
        {
          id: '1',
          time: '12:00 PM',
          title: '🔍 Inspection',
          detail: 'Our monthly inspection from our Crib Caretaker'
        },
        {
          id: '2',
          time: '12:00 PM',
          title: '👀 Viewing',
          detail: 'A group of students viewing your property with one of our Crib Caretakers'
        },
        {
          id: '3',
          time: '12:00 PM',
          title: '❌ Cancelled Viewing',
          detail: 'A cancelled viewing'
        },
        {
          id: '4',
          time: '12:00 PM',
          title: '💳 Rent Payment Due',
          detail: 'Your first rent payment is due on this date'
        },
        {
          id: '5',
          time: '12:00 PM',
          title: '📈 Meter readings',
          detail: 'A meter reading will be taken by our Crib Caretaker '
        },
        {
          id: '6',
          time: '12:00 PM',
          title: '👀 Viewing ',
          detail: 'A group of students viewing your property with one of our Crib Caretakers'
        },
        {
          id: '7',
          time: '12:00 PM',
          title: '🔧Broken Fridge : Job Scheduled ',
          detail: 'A job has been scheduled for this issue by our internal maintenance manager Gary Sheekey'
        }
      ]
    }
  },
  created () {
    let eventId = this.$route.params.id
    this.event = this.events.find(e => e.id === eventId)
  }
}
</script>
