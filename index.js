function addingEventListener() {
    const input = document.getElementById('input');
    let clickAlert = () => alert('I was clicked!');
    input.addEventListener('click', clickAlert);
}   
