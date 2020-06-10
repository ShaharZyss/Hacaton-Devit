<script>
	import Header from './components/Layout/Header.svelte';
	import Footer from './components/Layout/Footer.svelte';
	import LandingPage from './components/pages/LandingPage.svelte';
	
	let page = 0;
</script>

<main>

	<div class = "header box">
		<Header/>
	</div>

	<div class = "page box">
	{#if page == 0}
		<LandingPage/>
	{/if}

	</div>

	<div class = "footer box">
		<Footer/>
	</div>
</main>


<style>
	.header{
		height: 13vh;
	}

	.footer{
		height: 12vh;
	}

	.page{
		height: 70vh;
		overflow: auto;
	}


    .box{
        border: 2px solid rgb(250, 187, 187);
        padding: 0 5px;
        margin: 0 0 15px 0px;
        background-color: whitesmoke;
		color: black;
        box-shadow: 5px 5px 10px 5px whitesmoke, -5px -5px 15px 5px  whitesmoke;
    }
</style>