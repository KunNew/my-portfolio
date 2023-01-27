<template>
  <div class="flex flex-col gap-[2.5rem]">
    <!-- introduction section -->
    <div class="divCenter">
      <p
        id="landing_intro"
        ref="landingIntro"
        class="lg:text-xl text-md acrlyic w-auto text-center selector"
      ></p>
    </div>
    <section class="">
      <h1 class="text-4xl font-bold">Noreakun Nong</h1>
      <h3 class="text-lg">Web developer</h3>
      <button
        class="mt-3 cv lg:text-md text-sm text-center selector rounded-md xl:p-3 xl:px-4 p-2 px-3 cursor-pointer transition ease-in-out hover:rotate-6 flex items-center"
      >
        <span class="mr-1">Download CV</span>
        <svg
          class="w-5 h-5 animate-[bounce_2s_ease-in-out_infinite]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          ></path>
        </svg>
      </button>
    </section>
    <section class="pt-2">
      <h2
        class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
      >
        Professional background
      </h2>
      <br />
      <p class="lg:text-lg text-sm text-justify leading-6">
        &nbsp;&nbsp;&nbsp;&nbsp; Professional junior web developer capable
        professional looking and user-friendly websites from stratch and writes
        <strong>performance optimized, reusable and refactorable codes</strong>.
        Professionally developed 5 web applications with multiple Javascript
        frameworks.
      </p>
      <br />
      <p class="lg:text-lg text-sm text-justify leading-6">
        <!-- &nbsp;&nbsp;&nbsp;&nbsp; -->
        Hungry for knowledge, collaborative individual and possess analytical
        skills. Enjoys problem solving and willing to adapt to changes in the
        industry to stay on top.
      </p>
    </section>
    <!-- info section -->
    <section class="">
      <h2
        class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
      >
        Bio
      </h2>
      <br />
      <p class="lg:text-lg text-sm text-justify leading-6">
        &nbsp;&nbsp;&nbsp;&nbsp; Kun has a strong passion on technology and
        computers. Outside of programmimg, Kun has a hobby of collecting and
        engage with technology. He likes to tinker with his Arch Linux Operating
        System and enjoys collecting custom keyboards.
      </p>
    </section>
    <!-- journey section -->
    <section class="">
      <h2
        class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
      >
        Journey
      </h2>
      <br />
      <div class="flex flex-col gap-2">
        <!-- year 2017 -->
        <!-- <p class="lg:text-lg text-sm text-justify">
          <strong>2017:</strong>
          &nbsp; Started journey on programming as a hobby
        </p> -->
        <!-- year 2020 -->
        <p class="lg:text-lg text-sm text-justify">
          <strong>2020:</strong>
          &nbsp; Study at National University of Battambang (NUBB) (Infomation
          Technology)
        </p>
        <!-- year 2021  -->
        <p class="lg:text-lg text-sm text-justify">
          <strong>2021:</strong>
          &nbsp; Started journey on web development
        </p>
      </div>
    </section>
  </div>
</template>

<script>
  import TypeIt from 'typeit';
  import 'animate.css';
  import { ref } from 'vue';

  export default {
    data() {
      return {
        display: false
      };
    },
    setup() {
      const landingIntro = ref('');

      if (landingIntro.value !== '') {
        landingIntro.value === '';
      }
    },
    mounted() {
      new TypeIt('#landing_intro', {
        speed: 50,
        waitUntilVisible: true,
        startDelay: 2000,
        startDelete: true,
        // remove cursor when finished
        afterComplete: function (instance) {
          instance.destroy();
        }
      })
        .type('Hello! I am a full stack web developer based in NUBB.')
        .go();
    }
  };
</script>

<style>
  .cv:hover {
    color: var(--text-highlight-2);
  }

  .selector {
    background-color: var(--bg-sel);
  }

  .copyright {
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
    animation-delay: 3s;
  }

  /* @keyframes copyright {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
} */
</style>
