const btn = document.getElementById("submit")
const username = document.getElementById("username")
const password = document.getElementById("password")

btn.addEventListener("click", async function(){
	try{
		let post = await axios.post("http://localhost:3000/login", {
			username : username.value,
			password : password.value
		})
		console.log(post.data);
		username.value = ""
		password.value = ""
	} catch(err) {
		console.log(err);
	}
})

