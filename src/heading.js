export default () => {
  console.log('heading');

  const element = document.createElement('h2')

  element.textContent = 'hello world'
  element.classList.add('heading')
  element.addEventListener('click', () => {
    alert('hello webpack')
  })

  return element
}