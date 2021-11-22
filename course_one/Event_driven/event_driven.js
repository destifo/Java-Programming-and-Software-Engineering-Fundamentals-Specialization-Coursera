function dochange(){
    alert('Yes master from js function');
}

function confirmclick(){
    var choice; 
    choice = confirm();
    if (choice == true){
        var message = 'You pressed OK';
    }
    else{
        var message = 'Are you sure you want to cancel?';
    }
    alert(message);
}

function changetext(){
    var dd1 = document.getElementById('d1');
    var dd2 = document.getElementById('d2');

    dd1.innerText = 'Ohayo';
    dd2.innerText = 'Sayonara';
}

function changecolor(){
    var dd1 = document.getElementById('d1');
    var dd2 = document.getElementById('d2');
    //var prevcolor1 = dd1.id
    //var prevcolor2 = dd2.id

    dd1.className = "orangeback";
    dd2.className = "fuchsiaback";
}