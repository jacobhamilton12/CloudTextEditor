function createFileBox(){
    input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => { 
        file = e.target.files[0]; 
    }

    input.click();
}