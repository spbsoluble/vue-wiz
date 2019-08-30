<template>
	<div class="hello">
  <form-wizard :start-index.sync="activeIndex" color="#70C95A">
            <wizard-step 
              slot-scope="props"
              slot="step"
              :tab="props.tab"
              :transition="props.transition"
              :index="props.index">
              <div slot="active-step" 
               style="display: flex; justify-content:center; align-items: center;">
                 <lottie v-if="props.index == 1"
                  :options="defaultOptions" 
                  :height="65" 
                  :width="65" />
                 <lottie v-else-if="props.index == 0"
                  :options="defaultOptions2" 
                  :height="65" 
                  :width="65" />
              </div>
           </wizard-step>
            <tab-content title="Personal details" icon=" ">
               <lottie v-if="activeIndex == 0"
                  :options="defaultOptions2" 
                  :height="200" 
                  :width="200" />
            </tab-content>
            <tab-content title="Done"
                         icon=" ">
             <lottie v-if="activeIndex == 1"
                  :options="defaultOptions" 
                  :height="200" 
                  :width="200"/>
            </tab-content>
        </form-wizard>
  
	</div>
</template>

<script>
import Lottie from "vue-lottie";
import animationData from "./../assets/animation.js";
import animationData2 from "./../assets/animation2.js";

export default {
  name: "hello",
  components: {
    Lottie
  },
  data() {
    return {
      activeIndex: 0,
      defaultOptions: { animationData: animationData, loop: false },
      defaultOptions2: { animationData: animationData2, loop: false },
      animationSpeed: 1
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
