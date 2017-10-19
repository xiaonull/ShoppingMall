<template>
	<section class="judge">
		
	</section>
</template>

<script>
	export default {
		mounted() {
			let option = {
				url: 'frontend/store/profile',
				type: 'GET',
				success(result, status, xhr) {
					if(result.status_code === 0) {
						window.location.assign('/index.html#/index/home');
					} 
				}
			};

			myAjax(option);
		}
	}
</script>