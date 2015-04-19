// this file will be used to create front end dynamic site
var ourTeam = new XMLHttpRequest();
ourTeam.onreadystatechange = function (){
    if(ourTeam.onreadystatechange === 4){
        document.getElementById('MainContent').innerHTML= ourTeam.responseText;

    }

};
  ourTeam.open('GET','ourTeam.html');
    function sendTeamPage(){

        ourTeam.send();
       // document.getElementById('ourTeam').style.display ="none";
    };

