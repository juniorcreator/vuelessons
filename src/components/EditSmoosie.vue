<template>
	<div v-if="smoosies" class="edit-smoosie container">
		<h1>Edit smoosie {{smoosies.title}}</h1>
		<!--<p>{{id}} id</p>-->
		<form>
			<div class="field title">
				<label for="title">Edit Title task</label>
				<input type="text" name="title" id="title" v-model='smoosies.title'>
			</div>
			<div class="selected-ing" v-for='(ing, index) in smoosies.ingredients' :key="index">
				<label for="seling">Selected: {{ing}}</label>
				<input type="text" name="seling" v-model='smoosies.ingredients[index]'>
				<i class="material-icons delete" @click='delIng(ing)'>delete</i>
			</div>
			<div class="field add-ingredient">
				<label for="tasks">Heading</label>
				<input type="text" name="tasks" @keydown.tab.prevent="addIng" v-model='enother'>

			</div>
			<p class="center-align red-text" v-if='errorMessage'>{{errorMessage}}</p>
			<div class="field center-align">
				<button @click.prevent="editSmoosie" class="btn orange">Update</button>
			</div>
		</form>
	</div>
</template>

<script>
	import db from '@/firebase/init'
	import slugify from 'slugify'
	export default {
		props: ['id'],
		data() {
			return {
			  smoosies: null,
              enother: null,
              errorMessage: null,
			}
		},
	  methods: {
		editSmoosie() {
          if(this.smoosies.title) {
            this.errorMessage = null;
            this.smoosies.slug = slugify(this.smoosies.title, {
              replacement: '_',
              remove: /[$*_+~.()'"!\-:@]/g,
              lower: true,
            });

            db.collection('smoothies').add({
              title: this.smoosies.title,
              slug: this.smoosies.slug,
              ingredients: this.smoosies.ingredients
            }).
            then(() => {
              this.$router.push({name: 'Index'});
            }).
            catch(err => {
              console.log(err);
            })
          }else {
            this.errorMessage = 'you must enter title';
          }
		},
        addIng() {
          if(this.enother && this.enother != ' ') {
            this.smoosies.ingredients.push(this.enother);
            this.enother = null;
            this.errorMessage = null;
          }else {
            this.errorMessage = 'you must enter at last one ingredient';
          }
        },
        delIng(ing) {
          this.smoosies.ingredients = this.smoosies.ingredients.filter(item => {
            return item != ing;
          })
        }
	  },
		created() {
			// let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoosie_slug);
          let ref = db.collection('smoothies').doc(`${this.id}`);
          ref.get().then(datas => {
            this.smoosies = datas.data();
            this.smoosies.id = datas.id;
		  });
			// ref.get().then(spanshot => {
			// 	spanshot.forEach(doc => {
			// 	  console.log(doc.data());
			// 	  console.log(doc.id);
			// 		this.smoosies = doc.data();
			// 		this.smoosies.id = doc.id;
			// 	})
			// });
		  // console.log(ref);
		},
	}
</script>

<style>
	.edit-smoosie {
		max-width: 500px;
	}
	.edit-smoosie h1 {
		font-size: 30px;
		font-weight: bold;
	}
	.edit-smoosie .field {
		margin: 20px;
	}
	.selected-ing {
		position: relative;
		max-width: 80%;
		margin: 0 auto;
	}
	.edit-smoosie .delete{
		position: absolute;
		right: 15px;
		top: 15px;
		cursor: pointer;
	}
</style>