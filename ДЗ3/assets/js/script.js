

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

    document.getElementById("IMT").innerHTML = 'ИМТ = ' + IMT;

}