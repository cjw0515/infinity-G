<template>
    <FullCalendar 
    defaultView="dayGridMonth" 
    :plugins="calendarPlugins"
    :weekends="true"
    :events="[
        { title: 'event 1', date: '2019-05-01' },
        { title: 'event 2', date: '2019-05-02' }
    ]"    
    @dataClick="handleClickData()"
    :navLinks= "true" 
    :editable= "true"
    :eventLimit= "true"
    ></FullCalendar>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
    components: {
        FullCalendar
    },
    data(){
        return{
            calendarPlugins: [dayGridPlugin]
        }
    },
    methods: {
        handleClickData(){
            alert();
        }
    }
}
</script>
