function myFunction() {
    let name = document.getElementById("id1").value;
    let age = document.getElementById("id2").value;
    let wt = document.getElementById("id3").value;
    if(age >=5 && age <=7){
        if(wt < 15){
        Text="less than the recommended value of 15kg";
    }
    else if(wt>20){
        text=("greater than the recommended value of 20kg")
    }
    else {
        text = "perfect";
    }
}
else if(age >=8 && age <=10){
    if(wt < 21){
        text="less than the recommended value of 21kg";
    }
    else if(wt >25){
        text="greater than the recommended value of 25kg";
    }
    else{
        text="perfect";
    }
}
else if(age >=11 && age <=15){
    if(wt < 26){
        text="less than the recommended value of 26kg";
    }
    else if(wt >30){
        text="greater than the recommended value of 30kg";
    }
    else{
        text="perfect";
    }
}
else if(age>=16 && age <=20){
    if(wt < 31){
        text="less than the recommended value of 31kg";
    }
    else if(wt >40){
        text="greater than the recommended value of 40kg";
    }
    else{
        text=" perfect ";
    }
}
document.getElementById("demo").innerHTML="Hello"+name + "!!!" + "your weight is"+ text +" at an age of "+ age;
}