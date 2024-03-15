const button = document.getElementById('btn');

button.addEventListener('click',async function() {
  console.log('click');
  const module  = await import('./module.js');
  console.log(module);
  module.hello();
});