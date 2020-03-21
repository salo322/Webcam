const saveButton = document.querySelector('#save');
saveButton.addEventListener('click', function(){
  saveButton.innerHTML = 'saved';
  setTimeout(() => {
    saveButton.innerHTML = 'save';
  }, 750);
})


function save_options() {
const shapes = document.getElementById('shape').value;
const positions = document.getElementById('position').value;
const mirror = document.getElementById('mirror').checked;
chrome.storage.sync.set({
position: positions,
shape:shapes,
mirrors:mirror 
});
}

document.getElementById('save').addEventListener('click',save_options); 