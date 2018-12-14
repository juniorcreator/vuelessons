<template>
  <div class="index container">
  	<div class="card" v-for='smothie in smothies' :key="smothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click='deleteSmosie(smothie.id)'>delete</i>
        <h2 class="indigo-text">{{smothie.title}}</h2>
        <ul class="ingredients">
          <li  v-for="(ing, index) in smothie.ingredients" :key="index">
            <span class="chip">{{ing}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
        smothies: [
        {title: 'Ninja brew', slug: 'ninja-brew', ingredients: ['bananas','coffee', 'milk'], id: 1},
        {title: 'Morning mood', slug: 'morning-mood', ingredients: ['bananas','cheese', 'orange'], id: 2},
        ],
    }
  },
  methods: {
    deleteSmosie(smothieId) {
      this.smothies = this.smothies.filter((smothie) => {
        return smothie.id != smothieId;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 22px;
  text-align: center;
  margin-top: 10px;
}
.index  .ingredients li{
  display: inline-block;
}
.index  .delete{
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
}
</style>
