<template>
	<div class="edit-smoosie container">
		<h1>Edit smoosie {{this.$route.params.smoosie_slug}}</h1>
		<p>{{id}} id</p>
	</div>
</template>

<script>
	import db from '@/firebase/init'
	export default {
		props: ['id'],
		data() {
			return {

			}
		},
		created() {
			let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoosie_slug);
			ref.get().then(spanshot => {
				spanshot.forEach(doc => {
					console.log(doc.data())
					// console.log(doc.id);
				})
			})
		},
	}
</script>

<style>
	
</style>