function changebackgroundColor(color) {
     let section = document.getElementById('button');
    section.style.backgroundColor = color;
}

document.getElementById('button').addEventListener('click', () => changebackgroundColor("#2CA02C"));
