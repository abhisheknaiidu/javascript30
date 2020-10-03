<template>
<div id="features">
  <b-row id="row">
    <b-col v-for="feature in features" :key="feature.id" class="column" cols="4">
      <div class="icon">
        <img :src="feature.img" :alt="feature.title" />
      </div>
      <h3 class="aligncenter">{{feature.title}}</h3>
      <p
        class="aligncenter"
      >{{feature.desc}}</p>
    </b-col>
  </b-row>
  </div>
</template>

<script>
import Features from  '../../utils/constants';

export default {
  name: "Features",
  data(){
      return {
          features: Features
      }
  }
};
</script>
<style scoped>
.column{
    text-align: center;
    margin-bottom: 40px;
}
</style>