<template>
  <div class="w-full mt-16 px-10 mx-auto max-w-[1200px]">
    <div v-if="!loggedIn">
      <p>
        Rev up your Forza Horizon 5 adventure with our game-changing service tailored just for you!
        Cruise through the ultimate selection of Forza Horizon 5 cars, from sleek speedsters to
        rugged off-road rides, and find the perfect wheels to match your style and speed dreams.
      </p>
      <p>
        Feeling lost at the auction house? Bid like a pro with our insider tips and tricks! Get the
        lowdown on autoshow store prices so you can snag the best deals and build your dream garage
        without busting your credits.
      </p>
      <p>
        Ready to leave the competition in the dust? Discover the fastest cars in Forza Horizon 5 and
        dominate every race with your unbeatable speed and skill.
      </p>
      <p>
        Keep track of your epic car collection effortlessly - no more accidental duplicates! Our
        handy tools make managing your garage a breeze, so you can focus on hitting the road in
        style.
      </p>
      <p>
        Earn credits faster than ever before with our expert strategies, leveling up your game and
        unlocking epic upgrades in no time.
      </p>
      <p>
        Rev your engines and take control of your Forza Horizon 5 journey today. With our service by
        your side, the road to greatness has never looked brighter!
      </p>
    </div>
    <div v-else>
      <h2 class="w-full text-center font-bold text-xl">Select the manufacturer to see cars list</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const loggedIn = computed(() => userStore.isLoggedIn);
</script>
