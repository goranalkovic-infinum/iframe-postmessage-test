const btn = document.querySelector(".btn-send");

btn.addEventListener("click", () => {
	console.log("Sent action");
	parent.postMessage(JSON.stringify({ action: "closeView" }), '*');
});
