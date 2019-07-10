const inputs = document.querySelectorAll('.controls input');

function changeUpdate() {
    const suffix = this.dataset.sizing || ''; // dataset will take all data-* properties

    console.log(document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix));


}
inputs.forEach(input => input.addEventListener('change', changeUpdate));
inputs.forEach(input => input.addEventListener('mousemove', changeUpdate)); // it fires properly when console (DT) is closed