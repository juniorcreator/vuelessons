<template>
	<div>
		<nav>
			<ul>
				<li><router-link to='/home'>Home </router-link></li>
				<li><router-link to='/about'>About </router-link></li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'Nav',
		data() {
			return {

			}
		},
	}
</script>

<style>
	ul {
		list-style: none;
	}
	ul li {
		text-align: center;
		margin-bottom: 10px;
	}
	a {
		font-size: 20px;
		color: orange;
		text-decoration: none;
		display: inline-block;
	}
</style>