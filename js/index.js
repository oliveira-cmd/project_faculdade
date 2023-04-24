function generateCurriculum(){

    var link = "https://github.com/oliveira-cmd?tab=repositories";
    var proxy = "https://cors-anywhere.herokuapp.com/";

    scrapper = function(link){
        let x = new XMLHttpRequest();
        x.onreadystatechange = function(){
            if(this.readyState==4 && this.status == 200){
                let response = this.responseText;
                document.body.innerHTML = response;
            }    
        }

        x.open("GET",link);
        x.send();
    }

    scrapper(proxy+link);

}