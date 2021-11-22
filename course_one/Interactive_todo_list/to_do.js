function addTask(){
    let input = document.getElementById('input');
    let newTask = input.value;
    if (newTask !=""){
        let item = document.createElement('li');
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" />'
                        + ' <input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" />'
                        +' <input type="button" id="padg" class="flag" onclick="flag(this.parentNode)" value=" ! " />'
                        + newTask;
        document.getElementById('Tasks').appendChild(item);
    }
    input.value = "";
    input.placeholder = "enter next task";
}

function markDone(item){
    item.className = 'finished';
}

function remove(item){
    if (item.className == 'finished'){
        item.remove();
    }
    else{
        alert('The task is not done');
    }
}

function flag(item){
    if (item.className != 'flag'){
        item.className = 'flag';
    }
    else{
        item.className = "";
    }
     
}

function doAbout(){
    let aboutdiv = document.getElementById('divabout');
    let aboutpar = document.createElement('p');
    aboutpar.innerText = 'The author is destifo';
    aboutdiv.appendChild(aboutpar);
    aboutdiv.className = 'aboutcolor';
}

function clearAbout(){
    let aboutdiv = document.getElementById('divabout');
    aboutdiv.innerHTML = "";
}