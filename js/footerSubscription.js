 
document.getElementById("formNamee").addEventListener("submit", async function(event) {
  event.preventDefault();

  const scriptURL = "https://script.google.com/macros/s/AKfycbwzuoJWIjJFxRBuW5yRjkW0uCuXdkZI0L37a3EUl3lWzf98DwFMklwagKSbbznzKoJ1/exec";
  const form = document.getElementById("formNamee");
  const formData = new FormData(form);
  const spinner = document.getElementById("loadingSpinnerr");
  const button = document.getElementById("submitBtnn");

  try {
    button.classList.add('hidden');
    spinner.style.display = 'inline-block';

    const response = await fetch(scriptURL, { method: "POST", body: formData });
    if (response.ok) {
      alert("Thank you! Your form is submitted successfully");
    } else {
      alert("There was a problem with the submission. Please try again.");
    }
  } catch (error) {
    console.error("Error!", error.message);
    alert("An error occurred while submitting the form. Please try again later.");
  } finally {
    spinner.style.display = 'none';
    button.classList.remove('hidden');
    form.reset();
  }
}); 