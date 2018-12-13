<template>
	<div>
		<h1>Profile for</h1>
	</div>
</template>

<script>
	export default {
		name:'ViewProfile',
		data() {
			return {
				userId: this.$route.params.user_id,
			}
		}
	}
</script>