const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {

    //Get Autocomplete general div
    const autocomplete = root;

    //Select the input
    const input = document.querySelector('input');

    const onInput = async (event) => {
        const items = await fetchData(event.target.value);

        if (!items.length) {
            autocomplete.classList.remove('d-block')
            autocomplete.innerHTML = '';
            return;
        }

        autocomplete.innerHTML = '';
        autocomplete.classList.add('d-block')

        for (const item of items) {
            const option = document.createElement('li');
            option.classList.add('d-flex');
            option.classList.add('align-items-center');

            option.innerHTML = renderOption(item);
            option.addEventListener('click', () => {
                autocomplete.classList.remove('d-block')
                input.value = inputValue(item)
                onOptionSelect(item);
            })
            autocomplete.appendChild(option)
        }

    };

    input.addEventListener('input', debounce(onInput, 1000))

    document.addEventListener('click', (event) => {
        if (!autocomplete.contains(event.target) && !input.contains(event.target)) {
            autocomplete.classList.remove('d-block')
        }
    })
}