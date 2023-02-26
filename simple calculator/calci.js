
    let screen = document.querySelector('.screen');
    let buttons= document.querySelectorAll('.btn');
    let clear= document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            // console.log(value);
            screen.value+=value;
            // console.log(screen.value);
        })
    });
    

    equal.addEventListener('click', function(e){
        if (screen.value === ''){
            screen.value = "Please enter a value";
        }
        else {
           let answer = eval(screen.value);
        //    console.log(answer);
           screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = '';
    })
 
