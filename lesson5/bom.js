const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    if (input.value.length != 0) {
        let myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = "\u274C";
        list.appendChild(listItem);

        listBtn.addEventListener('click', function(e) {
          list.removeChild(listItem);
        })

        input.focus();
    }

})