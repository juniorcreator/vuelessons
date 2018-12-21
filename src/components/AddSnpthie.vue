<template>
	<div class="add-smoothie container">
		<h1 class="center-align indigo-text">Add task</h1>
		<form>
			<div class="field title">
				<label for="title">Title task</label>
				<input type="text" name="title" id="title" v-model='title'>
			</div>
			<div class="selected-ing" v-for='(ing, index) in ingredients' :key="index">
				<label for="seling">Selected: {{ing}}</label>
				<input type="text" name="seling" v-model='ingredients[index]'>
				<i class="material-icons delete" @click='delIng(ing)'>delete</i>
			</div>
			<div class="field add-ingredient">
				<label for="tasks">Heading</label>
				<input type="text" name="tasks" @keydown.tab.prevent="addIng" v-model='enother'>

			</div>
			<p class="center-align red-text" v-if='errorMessage'>{{errorMessage}}</p>
			<div class="field center-align">
				<button @click.prevent="addSmothie" class="btn orange">Add</button>
			</div>
		</form>
		</div>
</template>

<script>
	import db from '@/firebase/init'
	import slugify from 'slugify'

	export default {
		data() {
			return {
				title: null,
				enother: null,
				errorMessage: null,
				ingredients: [],
				slug: null,
			}
		},
		methods: {
			addSmothie() {
				if(this.title) {
					this.errorMessage = null;
					this.slug = slugify(this.title, {
						replacement: '_',
						remove: /[$*_+~.()'"!\-:@]/g,
						lower: true,
					});

					db.collection('smoothies').add({
						title: this.title,
						slug: this.slug,
						ingredients: this.ingredients
					}).
					then(() => {
						this.title = null;
						this.ingredients = [];
						this.enother = null;
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
					this.ingredients.push(this.enother);
					this.enother = null;
					this.errorMessage = null;
				}else {
					this.errorMessage = 'you must enter at last one ingredient';
				}
			},
			delIng(ing) {
				this.ingredients = this.ingredients.filter(item => {
					return item != ing;
				})
			}
		}
	}
</script>

<style scoped>
.add-smoothie {
	max-width: 500px;
}
.add-smoothie h1 {
	font-size: 30px;
	font-weight: bold;
} 
	.add-smoothie .field {
		margin: 20px;
	}
.selected-ing {
	position: relative;
	    max-width: 80%;
    margin: 0 auto;
}
.add-smoothie .delete{
	position: absolute;
	right: 15px;
	top: 15px;
	cursor: pointer;
}
</style>