let dni = ['Воскресение','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
let day = new Date()
let days = day.getDay()

switch (days) {
    case 1:
        console.log(dni[days]);
        break;
    case 2:
        console.log(dni[days]);
        break;
    case 3:
        console.log(dni[days]);
        break;
    case 4:
        console.log(dni[days]);
        break;
    case 5:
        console.log(dni[days]);
        break;
    case 6:
        console.log(dni[days]);
        break;
default:
    console.log(dni[0]);
    break;
}


for(let item of dni){
    if (days == 1){
        console.log(dni[1]);
    }
    else if (days == 2){
        console.log(dni[2]);
    }
    else if (days == 3){
        console.log(dni[3]);
    }
    else if (days == 4){
        console.log(dni[4]);
    }
    else if (days == 5){
        console.log(dni[5]);
    }
    else if (days == 6){
        console.log(dni[6]);
    }else{
            console.log(dni[0]);
        
    }
}
let r =  dni[day.getDay()]
console.log(r);