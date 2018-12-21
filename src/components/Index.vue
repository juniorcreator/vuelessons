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
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{name: 'EditSmoosie', params: {smoosie_slug: smothie.slug, id:smothie.id}}">
          <i class="material-icons edit">edit</i>
        </router-link> 
      </span>
    </div>
  </div>
</template>

<script>
  import db from "@/firebase/init"
export default {
  name: 'Index',
  data () {
    return {
        smothies: [],
    }
  },
  methods: {
    deleteSmosie(id) {
      db.collection('smoothies').doc(id).delete().
      then(() => {
        this.smothies = this.smothies.filter((smothie) => {
        return smothie.id != id;
      })
      }).
      then(() => {
      })
    }
  },
  created() {
    // fetch data from the firestire
    db.collection('smoothies').get().
    then(snapshot => {
      snapshot.forEach(doc => {
        let docs = doc.data();
        docs.id = doc.id;
        this.smothies.push(docs);
      })
    })
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
