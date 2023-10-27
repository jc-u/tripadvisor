document.addEventListener("DOMContentLoaded", () => {
	const connexion = document.getElementById("connexion");
	const modal = document.querySelector(".modal");
	const close = document.querySelector(".icon-times");
	const body = document.querySelector("body");

	connexion.addEventListener("click", () => {
		modal.style.display = "flex";
	});

	close.addEventListener("click", () => {
		modal.style.display = "none";
	});
	body.addEventListener("click", (e) => {
		if (e.target.className === "modal") {
			modal.style.display = "none";
		}
	});

	document.querySelector("form").addEventListener("submit", async (e) => {
		e.preventDefault();

		const data = {
			firstname: document.getElementById("firstname").value,
			lastname: document.getElementById("lastname").value,
			email: document.getElementById("email").value,
			message: document.getElementById("message").value,
		};

		console.log(data);

		const backendURL =
			"https://site--tripadvisor-backend--ltvfvlfs59v4.code.run/form";

		const response = await axios.post(backendURL, data);
		console.log(response);
	});
});
