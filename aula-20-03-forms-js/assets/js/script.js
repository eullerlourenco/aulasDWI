const form = document.getElementById('formTarefa');
const input = document.getElementById('inputTarefa');
const lista = document.getElementById('listaTarefas');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const textoTarefa = input.value.trim();

    if(textoTarefa != '') {
        const li =  document.createElement('li');
        li.textContent = textoTarefa;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.classList.add('remover');

        btnRemover.addEventListener('click',  function() {
            lista.removeChild(li);
        });

        li.appendChild(btnRemover);
        lista.appendChild(li);

        input.value = '';
    }
});