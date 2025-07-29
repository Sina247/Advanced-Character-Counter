const textInput = document.getElementById("textInput");
const remainingCount = document.getElementById("remainingCount");
const progressBar = document.getElementById("progressBar");
const maxLength = textInput.getAttribute("maxlength");

textInput.addEventListener("input", () => {
	const length = textInput.value.length;
	const remaining = maxLength - length;
	remainingCount.textContent = remaining;

	const percentage = (length / maxLength) * 100;
	progressBar.style.width = `${percentage}%`;

	if (remaining <= 10) {
		remainingCount.classList.remove("text-gray-500");
		remainingCount.classList.add("text-red-500");
		progressBar.classList.remove("bg-blue-500");
		progressBar.classList.add("bg-red-500");
	}

	else {
		remainingCount.classList.remove("text-red-500");
		remainingCount.classList.add("text-gray-500");
		progressBar.classList.remove("bg-red-500");
		progressBar.classList.add("bg-blue-500");
	}
});
