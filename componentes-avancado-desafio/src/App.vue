<template>
	<div id="app">
		<div>
			<button @click="componente = 'green'">Green</button>
			<button @click="componente = 'red'">Red</button>
			<button @click="componente = 'Blue'">Blue</button>
		</div>
		<keep-alive>
			<component :is="componente">
				<span slot="content">Este é o componente: </span>
				<strong slot="strong">{{ componente }}</strong>
			</component>
		</keep-alive>
	</div>
</template>

<script>
import Red from '@/components/Red.vue';
import Blue from '@/components/Blue.vue';
import Green from '@/components/Green.vue';

export default {
	components: { Red, Blue, Green },
	data() {
		return {
			componente: 'red',
		};
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
		outline: none;
		padding: 5px 15px 10px;
		margin: 10px 5px;
		border-radius: 3px;
		font-size: 2rem;
		font-weight: 300;
		color: #FFF;
		background-color: rgba(0, 0, 0, .5);
	}
</style>