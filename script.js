const btn = document.querySelector(".btn-send");

btn.addEventListener("click", () => {
	console.log("Sent action");
	postMessage(JSON.stringify({ action: "closeView" }), "dev.dept.test");
});