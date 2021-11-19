new Vue({
	el: "#root",
	data: {
		emails: [],
		API_RANDOM_MAIL: "https://flynn.boolean.careers/exercises/api/random/mail",
	},
	methods: {
		generateEmails(len) {
			this.emails = [];
			// voglio vedere il loading! 😅
			setTimeout(() => {
				Array.from({ length: len }, (_, i) => {
					axios.get(this.API_RANDOM_MAIL).then((response) => {
						this.emails.push(response.data.response);
					});
				});
			}, 500);
		},
	},
	computed: {
		loaded() {
			return this.emails.length >= 10 ? true : false;
		},
	},
	created() {
		this.generateEmails(10);
	},
});

console.log("js");
