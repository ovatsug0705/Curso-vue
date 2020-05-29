new Vue({
	el: '#desafio',
	data: {
		activeClass: 'destaque',
		class1: 'class1',
		class2: 'class2',
		dynamicClass: '',
		dynamicClass2: '',
		applyrotate: false,
		inputValue: '',
		progressBar: {},
	},
	watch: {
		inputValue(novo, antigo) {
			this.inputValue == 'true' ? this.applyrotate = true : this.applyrotate = false
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.activeClass = this.activeClass == 'destaque' ? 'encolher' : 'destaque';
			}, 500);
		},
		iniciarProgresso() {
			let width = 0;
			let timer = setInterval(() => {
				this.progressBar = {
					backgroundColor: 'red',
					width: `${width++}%`
				}
				if(width >= 100) clearInterval(timer);
			}, 500);
		},
	}
})
