const btn = document.querySelector("#btn");
let voice = document.querySelector("#voice");
 //convert text to voice
 function speak(text){
        const abc =new SpeechSynthesisUtterance(text);
        abc.rate =1;
        abc.pitch=5;
        abc.volume =1;
        abc.lang = 'en-IN';
        window.speechSynthesis.speak(abc);
    }
    window.onload = ()=>{
        //speak("Hello User");
       wishme();
    }

    const wishme = () =>{
        let date = new Date();
        let hours = date.getHours();
       if(hours>=0 && hours<12){
        speak("good morning , how can i help you?");
       }
       else if(hours<=12 && hours<16){
        speak("good afternoon , how can i help you?");
    }
    else {
       speak("good evening , how can i help you?");
    }
}

  const startVoiceInput = () =>{
    if('webkitSpeechRecognition' in window){
        let recognition = new webkitSpeechRecognition();
        recognition.lang ='en-US'
        recognition.onresult = (e)=>{
          let spokenText = e.results[0][0].transcript;
          handleCommands(spokenText.toLowerCase());
        }
        recognition.start();
    }else{
        alert("Your browser does't support voice input !")
    }
  
  }
  btn.onclick = () => {
    startVoiceInput();
    btn.style.display ="none";
    voice.style.display ="block";
  }

 const handleCommands =(command)=>{
  btn.style.display ="flex";
  voice.style.display ="none";
    console.log(command);
  
  if(command.includes("hello") || command.includes("hey ") || command.includes("hi") || command.includes("namaste")){
   
    speak( "hi ,what can i do for you?");
  }
  else  if(command.includes("who are you") || command.includes("developed") || command.includes("give your intoduction")){
    speak("My name is Jenny..i am a virtual assistant,developed by JAYA ");
  }else  if(command.includes("open youtube") ){
    speak("Opening Youtube");
    window.open("https://www.youtube.com", "_blank");
 }else  if(command.includes("open facebook") ){
    speak("Opening facebook");
    window.open("https://www.facebook.com", "_blank");
}else  if(command.includes("open instagram") ){
    speak("Opening instagram");
    window.open("https://www.instagram.com", "_blank");

 }else  if(command.includes("open calculator") ){
    speak("ok,Opening calculator");
        window.open("calculator://", "_blank");
        }else  if(command.includes("open whatsapp") ){
          speak("Ok, iam Opening whatsapp");
              window.open("whatsapp://", "_blank");
        }else  if(command.includes("time") ){
          let time = new Date().toLocaleString(undefined,{hour: "numeric", minute: "numeric"});
          speak(time)
        }else  if(command.includes("date") ){
          let date = new Date().toLocaleString(undefined,{day: "numeric", month: "short"});
          speak(date)
        }

 else{
  let finalText = "this is what i found on internet regarding" + command.replace("jenny","") 
    speak(finalText);
    window.open(`https://www.google.com/search?q=${ command.replace("jenny" ,"")}`, "_blank")
 }
        }
     