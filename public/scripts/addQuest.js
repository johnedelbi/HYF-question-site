
const btn = document.querySelector('.ask__question__form__button');
const category = document.getElementById('category');
btn.addEventListener('click', async (e) => {
  e.preventDefault()
  const question = document.getElementById
  ('message').value;

  const email = document.querySelector('.ask__question__form__input').value;

  let data = {
    "data": {
      moudel: category.value,
      text: question,
      email
    }
  }

  console.log(data)

  await fetch('http://localhost:1337/api/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
})
