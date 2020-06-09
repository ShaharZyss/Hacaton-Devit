import App from './App.svelte';
import '../node_modules/materialize-css/dist/css/materialize.css'
import '../public/global.css'
import '../node_modules/materialize-css/dist/js/materialize'


M.AutoInit()
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;