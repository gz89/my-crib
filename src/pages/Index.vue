<template>
  <q-page class="">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>Upcoming</q-toolbar-title>
      </q-toolbar>
      <q-toolbar q-pa-md>
        <q-input v-model="search" outlined rounded placeholder="Search" style="min-width: 100%;" >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-space />
      </q-toolbar>
    </q-header>
    <q-list>
      <div v-for="(u, index) in upcoming" :key="index" v-show="filterUpcoming(u)">
        <q-item>
          <q-item-section>
            <q-item-label class="date">
              {{u.date}}
            </q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-item-label>
              {{u.events.length}} Events
            </q-item-label>
          </q-item-section>
        </q-item>
        <div v-for="(e, index) in u.events" :key="index" v-show="filterEvent(e.title)">
          <q-item clickable v-ripple :to="'event/' + e.id" >
            <q-item-section side class="time">
                {{e.time}}
            </q-item-section>
            <q-item-section>
              <q-item-label class="event">
                {{e.title}}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator spaced inset v-show="!(index == u.events.length-1)" />
        </div>
      </div>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round class="btn-contact" icon="far fa-comment-dots" to="contact" />
    </q-page-sticky>
  </q-page>
</template>
<style>
.date {
  color: #c8d323;
  font-weight: bold;
}
.time {
  font-size: 11px;
}
.event {
  font-size: 15px;
}
</style>

<script>
export default {
  name: 'Upcoming',
  data () {
    return {
      search: '',
      upcoming: [
        {
          id: '0',
          date: 'Mon, Jul 17, 2017',
          events: [
            {
              id: '0',
              time: '12:00 PM',
              title: '🎉 Check In',
              detail: "We can't wait to welcome you in to your property! Before we can give you your keys you must make sure right to rent checks and first months rent have been paid."
            }
          ]
        },
        {
          id: '1',
          date: 'Mon, Jul 17, 2017',
          events: [
            {
              id: '1',
              time: '12:00 PM',
              title: '🔍 Inspection',
              detail: 'Our monthly inspection from our Crib Caretaker'
            }
          ]
        },
        {
          id: '2',
          date: 'Mon, Jul 17, 2017',
          events: [
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
            }
          ]
        },
        {
          id: '3',
          date: 'Mon, Jul 17, 2017',
          events: [
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
            }
          ]
        },
        {
          id: '4',
          date: 'Mon, Jul 17, 2017',
          events: [
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
      ]
    }
  },
  methods: {
    filterUpcoming (u) {
      let result = true
      if (this.search !== '') {
        let query = this.search
        for (let i = 0; i < u.events.length; i++) {
          let title = u.events[i].title
          title = title.toLowerCase()
          result = title.includes(query.toLowerCase())
          if (result === true) break
        }
      }
      return result
    },
    filterEvent (title) {
      let result = true
      if (this.search !== '') {
        let query = this.search
        title = title.toLowerCase()
        result = title.includes(query.toLowerCase())
      }
      return result
    }
  }
}
</script>
