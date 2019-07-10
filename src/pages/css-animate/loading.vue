<template>
<div class="loading">
  <section>
    <div id="chart">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
  </section>
  <section>
    <div id="roll">
      <div class="inner"></div>
      <div class="outter"></div>
    </div>
  </section>
  <section>
    <div id="block">
      <div class="square square1"></div>
      <div class="square square2"></div>
      <div class="square square3"></div>
      <div class="square square4"></div>
      <div class="square square5"></div>
      <div class="square square6"></div>
      <div class="square square7"></div>
      <div class="square square8"></div>
    </div>
  </section>
  <section>
    <div id="turn">
      <div class="curcle"></div>
    </div>
  </section>
  <section>
    <div id="diffTurn">
      <div class="curcle"></div>
      <div class="curcle2"></div>
    </div>
  </section>
  <section>
    <div id="omit">
      <div class="curcle curcle1"></div>
      <div class="curcle curcle2"></div>
      <div class="curcle curcle3"></div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {

    }
  },
  props: {

  },
  components: {},
  mounted() {

  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
@keyframes chartLoading {
  0% {
    height: 10px;
  }

  100% {
    height: 60px;
  }
}

@keyframes rollLoading-inner {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
}

@keyframes rollLoading-outter {
  0% {
    transform: rotate(360deg)
  }

  100% {
    transform: rotate(0deg)
  }
}

@keyframes blockLoading {
  0% {
    transform: rotate(0deg);
    background-color: #fff;
  }

  50% {
    transform: rotate(-90deg);
    background-color: rgba(255, 255, 255, 1);
  }

  100% {
    transform: rotate(0deg);
    background-color: rgba(255, 255, 255, .1);
  }
}

@keyframes turnLoading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes diffTurnLoading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(200deg);
  }
}

@keyframes diffTurnLoading-inner {
  0% {
    transform: rotate(200deg);
    border-width: 3px;
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes omitDot {
  0% {
    top:25%;
  }

  100% {
    top:50%;
  }
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    text-align: center;
    background-color: rgb(58, 58, 58);
    vertical-align: top;
    border: 1px solid #fff;
  }

  #chart {
    position: relative;
    width: 60px;
    height: 60px;
    margin: 75px;
    vertical-align: middle;
    // left: -17px;

    .line {
      display: inline-block;
      width: 10px;
      height: 60px;
      border-radius: 5px;
      background: linear-gradient(to bottom, #1ee95d, #5714ce);
      margin-left: 15px;
      position: absolute;
      bottom: 0;
      // bottom: 10px;

      // transition: 1s ease;
    }

    .line1 {
      left: -10px;
      animation: chartLoading 0.5s ease 0s alternate infinite;
    }

    .line2 {
      left: 15px;
      animation: chartLoading 0.5s ease .2s alternate infinite;
    }

    .line3 {
      left: 40px;
      animation: chartLoading 0.5s ease .4s alternate infinite;
    }
  }

  #roll {
    position: relative;
    width: 60px;
    height: 60px;
    margin: 75px;
    vertical-align: middle;

    // left: -17px;
    .inner,
    .outter {
      // display: inline;
      position: absolute;
      // transform: translateY(-50%);
      left: 0px;
      top: 0px;
      // top:50%;
      // transform: translate(-50%,-50%)
    }

    .inner {
      width: 40px;
      height: 40px;
      border: 4px solid rgb(255, 113, 113);
      top: calc(50% - 20px);
      left: calc(50% - 20px);
      border-radius: 50%;
      border-left-color: transparent;
      border-top: 0;
      animation: rollLoading-inner .5s cubic-bezier(.42, .61, .58, .41) infinite;
    }

    .outter {
      width: 100%;
      height: 100%;
      border: 4px solid rgb(255, 113, 113);
      // left:0px;
      // top:-20px;
      border-radius: 50%;
      border-left-color: transparent;
      border-bottom: 0;
      animation: rollLoading-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
    }
  }

  #block {
    position: relative;
    width: 60px;
    height: 60px;
    margin: 75px;
    vertical-align: middle;

    // left: -17px;
    .square {
      position: absolute;
      width: 7px;
      height: 40px;
      top: 15px;
    }

    .square1 {
      left: 0px;
      animation: blockLoading 1s .3s ease infinite;
    }

    .square2 {
      left: 10px;
      animation: blockLoading 1s .4s ease infinite;
    }

    .square3 {
      left: 20px;
      animation: blockLoading 1s .5s ease infinite;
    }

    .square4 {
      left: 30px;
      animation: blockLoading 1s .6s ease infinite;
    }

    .square5 {
      left: 40px;
      animation: blockLoading 1s .7s ease infinite;
    }

    .square6 {
      left: 50px;
      animation: blockLoading 1s .8s ease infinite;
    }

    .square7 {
      left: 60px;
      animation: blockLoading 1s .9s ease infinite;
    }

    .square8 {
      left: 70px;
      animation: blockLoading 1s 1s ease infinite;
    }

  }

  #turn {
    position: relative;
    width: 60px;
    height: 60px;
    margin: 75px;
    vertical-align: middle;
    left: -17px;

    .curcle {
      position: relative;
      width: 100%;
      height: 100%;
      border: 8px double rgb(255, 91, 91);
      // border-style:solid double;
      border-radius: 50%;
      animation: turnLoading 1s linear infinite;

      &:before {
        position: absolute;
        left: -12px;
        top: 50%;
        transform: translateY(-50%);
        content: "";
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: rgb(255, 91, 91);
      }

      &:after {
        position: absolute;
        right: -12px;
        top: 50%;
        transform: translateY(-50%);
        content: "";
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: rgb(255, 91, 91);
      }
    }
  }

  #diffTurn {
    position: relative;
    width: 60px;
    height: 60px;
    margin: 75px;
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    // left: -17px;
    border: 3px outset rgb(186, 103, 253);
    border-radius: 50%;
    animation: diffTurnLoading 1s ease-out alternate infinite;

    .curcle {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: 100%;
      border: 13px groove rgb(220, 190, 248);
      border-radius: 50%;
      animation: diffTurnLoading-inner 1s ease-out alternate-reverse infinite;
    }
  }

  #omit {
    position: relative;
    width: 60px;
    height: 60px;
    margin: 75px;
    vertical-align: middle;

    .curcle {
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: rgb(120, 247, 95);
      border-radius: 50%;
      top: 50%;
      left: 0px;
      // transform: translateY(-50%);
    }

    .curcle1 {
      left: 0px;
      animation: omitDot 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
    }

    .curcle2 {
      left: 30px;
      animation: omitDot 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) .2s alternate infinite;
    }

    .curcle3 {
      left: 60px;
      animation: omitDot 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) .4s alternate infinite;
    }

  }
}
</style>
