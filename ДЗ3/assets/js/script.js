

function HelloName(){
    let name = document.getElementById("name").value;
    alert("Привет, " + name);

    let name1 =  prompt("Второй вариант: Введите имя","Имя");

    alert("Вывод второго варианта - Привет, " + name1);
    
}

function SendMessage(){
    let user = document.getElementById("user").value;
    let message = document.getElementById("message").value;

    let messages = document.getElementById("messages").innerHTML;
    let messageSend = '<p><b>' + user + '</b>' + ' : ' + message + '</p>';
    let messageConsole = user + ' : ' + message;
    
    console.log(messageConsole);

    messages += messageSend;

    document.getElementById("messages").innerHTML = messages;
}

function IMT(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value/100;

    let IMT = weight / (height*height);
    let status;
    switch(true)
    {
        case (IMT < 16):
        status = "Значительный дефицит массы тела";
        break;

        case (IMT > 16 && IMT < 18.5):
        status = "Недостаток массы тела";
        break;

        case (IMT > 18.5 && IMT < 25):
        status = "Норма веса";
        break;

        case (IMT > 25 && IMT < 30):
        status = "Излишек массы тела";
        break;
        case (IMT > 30 && IMT < 35):
        status = "Начальная степень ожирения";
        break;
        case (IMT > 35 && IMT < 40):
        status = "Средняя степень ожирения";
        break;
        case (IMT > 40):
        status = "Ожирение высокой степени";
        break;
    }


    document.getElementById("IMT").innerHTML = 'ИМТ = ' + IMT + ' (' + status + ')';

}