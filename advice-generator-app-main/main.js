function getAdvice() {
  axios
    .get('https://api.adviceslip.com/advice')
    .then(response => response.data)
    .then(data => {
      adviceText.textContent = data.slip.advice;
      adviceId.textContent = `ADVICE #${data.slip.id}`;
    })
    .catch(error => console.error(error));
}
