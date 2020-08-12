<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<form action="">
			<b-card>
				<b-form-group label="Nome:">
					<b-form-input type="text" size="lg" v-model="usuario.name" placeholder="Informe o Nome"></b-form-input>
				</b-form-group>
				<b-form-group label="Email:">
					<b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe o email"></b-form-input>
				</b-form-group>
			</b-card>
			<hr>
			<b-button @click.prevent="salvar" variant="success">Salvar</b-button>
			<b-button @click.prevent="obterUsuarios" class="ml-2">Obter usuários</b-button>
			<hr>
			<b-list-group>
				<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
					<strong>Nome:</strong> {{ usuario.name }} <br>
					<strong>Email:</strong> {{ usuario.email }} <br>
					<strong>Id:</strong> {{ id }} <br>
				</b-list-group-item>
			</b-list-group>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			usuario: {
				name: '',
				email: '',
			}
		}
	},
	methods: {
		salvar() {
			this.$http.post('usuarios.json', this.usuario)
				.then(res => {
					this.usuario = {};
				});
		},
		obterUsuarios() {
			this.$http.get('usuarios.json')
				.then(res => {
					this.usuarios = res.data;
					console.log(res.data)
				});
		}
	},
	// created() {
	// 	this.$http.post('ususarios.json', {
	// 		nome: "Gustavo",
	// 		emails: 'gustavo@email.com'
	// 	}).then(res => console.log('res', res))
	// },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>