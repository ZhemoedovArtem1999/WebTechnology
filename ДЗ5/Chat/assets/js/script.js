ReadMessagesFromJSON()

var userMessage = {
  user:"",
  message:""
}

var dataFile = "data.json";

function SendMessage(){
    userMessage.user = document.getElementById("user").value;
    userMessage.message = document.getElementById("message").value;
    WriteMessagesInJSON(userMessage);
}


function ReadMessagesFromJSON(){
  $.ajax(
    {
      type:'GET',
      url:'chat.php',
      dataType: 'json',
      success: function(data){
        if (data.status == 1){
          let messages = "";
          data.messages.forEach(element => {
            messages += '<b>' + element.user + '</b> : ' + element.message + '<br>';
          });
          document.getElementById("messages").innerHTML = messages;
        }
      }
    }
    );
}

function WriteMessagesInJSON(message){
  $.ajax(
    {
      type:'POST',
      url:'chat.php',
      data: {sendmessage: message},
      dataType: 'json',
      success: function(data){
        
      }
    }
  );
  ReadMessagesFromJSON();
}
