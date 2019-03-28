<template>
  <div class="countdown">
    <transition v-for="(letter,i) of display" :key="i" name="letter">
      <span :key="letter" class="letter">{{ letter }}</span>
    </transition>
  </div>
</template>

<script>
import moment from "moment";

export default {
  
  data() {
    return { now: Date.now()  / 1000, intervalId: null,end:Date.now()+100*500*1000,format:"HH : mm : ss" };
  },
  computed: {
    remain() {
      return Math.round(this.end / 1000 - this.now);
    },
    count() {
      return this.remain >= 1;
    },
    display() {
      return moment.utc(this.remain * 1000).format(this.format);
    }
  },
  watch: {
    count: {
      handler(v) {
        if (v)
          this.intervalId = setInterval(() => {
            this.now++;
          }, 1000);
        else clearInterval(this.intervalId);
      },
      immediate: true
    }
  },
  destroyed() {
    clearInterval(this.intervalId);
  }
};
</script>

<style>
.countdown {
  overflow: hidden;
  position: relative;
  font-weight: 800;
  font-size: 3rem;
}
.letter {
  display: inline-block;
  white-space: pre;
}
.letter-enter-active,
.letter-leave-active {
  transition: all 0.4s ease-in-out;
}
.letter-leave-active {
  position: absolute;
}
.letter-enter {
  transform: translateY(-100%);
}
.letter-enter-to,
.letter-leave {
  transform: translateY(0);
}
.letter-leave-to {
  transform: translateY(100%);
}
</style>
