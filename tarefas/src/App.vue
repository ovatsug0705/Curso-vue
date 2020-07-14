<template>
	<div id="app">
		<h1>Tarefas</h1>
		<progress-bar :tasks="tasks"></progress-bar>
		<input-field :tasks="tasks"></input-field>
		<task-list :tasks="tasks"></task-list>
	</div>
</template>

<script>
import ProgressBar from './components/Progressbar.vue';
import InputField from './components/Input.vue';
import TaskList from './components/Tasklist.vue';

export default {
	data() {
		return {
			tasks: [],
		}
	},
	components: {
		ProgressBar, 
		InputField,
		TaskList
	}
}
</script>

<style>
	* {
		box-sizing: border-box;
	}
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
