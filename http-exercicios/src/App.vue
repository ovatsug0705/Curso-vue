<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" 
			:key="mensagem.texto"
			:variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
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
					<b-button variant="warning" size="lg"
						@click="carregar(id)">Carregar</b-button>
					<b-button variant="danger" size="lg" class="ml-2"
						@click="excluir(id)">Excluir</b-button>
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
			mensagens: [],
			id: null,
			usuario: {
				name: '',
				email: '',
			}
		}
	},
	methods: {
		limpar() {
			this.usuario.name = '';
			this.usuario.email = '';
			this.id = null;
			this.mensagens = [];
		},
		carregar(id) {
			this.id = id;
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => {
					this.limpar();
					this.mensagens.push({
						texto: 'Excluido com sucesso!',
						tipo: 'success',
					});
					this.obterUsuarios();
				})
				.catch((err) => {
					this.limpar();
					this.mensagens.push({
						texto: `Problemas para excluir: ${err}`,
						tipo: 'danger',
					});
				});
		},
		salvar() {
			const useMethod = this.id ? 'patch' : 'post';
			const finalUrl = this.id ? `/${this.id}.json` : '.json';

			this.$http[useMethod](`/usuarios${finalUrl}`, this.usuario)
				.then(() => {
					this.limpar();
					this.mensagens.push({
						texto: 'Operação realizada com sucesso!',
						tipo: 'success',
					})
					this.obterUsuarios();
				});
		},
		obterUsuarios() {
			this.$http.get('usuarios.json')
				.then(res => {
					this.usuarios = res.data;
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