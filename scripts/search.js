document.getElementById('search').addEventListener('input', function(){
    var input = this.value.trim().toUpperCase();

    let boxes = document.getElementsByClassName('pokemon-box')
    for(let i = 0; i < boxes.length; i++){
        let name = boxes[i].querySelector('p').textContent.toUpperCase();
        if(name.includes(input)){
            boxes[i].style.display = 'block';
        }else{
            boxes[i].style.display = 'none';
        }
    }
    
})