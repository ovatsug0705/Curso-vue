<template>
	<v-app>
		<v-navigation-drawer app>
			<app-toolbar-2 />

			<v-divider></v-divider>

			<Sidemenu />
		</v-navigation-drawer>

		<app-toolbar />

		<app-carousel />

		<app-footer />
	</v-app>
</template>

<script>
import Sidemenu from './components/Sidemenu.vue'

export default {
	components: {
		Sidemenu
	}
}
</script>
