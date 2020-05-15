var f=24;
function clockfunction(format){
    if(format!=undefined)
        f=format;
    
    if(document.getElementById("india").selected==true){
    var currentdate= new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }).split("/")
    .join(",").split(":").join(",").split(" ").join(",").split(",");
    console.log(currentdate);
}
    else if(document.getElementById("america").selected==true){
        var currentdate= new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }).split("/")
        .join(",").split(":").join(",").split(" ").join(",").split(",");
        console.log(currentdate);
    }
    else if(document.getElementById("asia").selected==true){
        var currentdate= new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }).split("/")
        .join(",").split(":").join(",").split(" ").join(",").split(",");
        console.log(currentdate);
    }
    else if(document.getElementById("Australia").selected==true){
        var currentdate= new Date().toLocaleString('en-US', { timeZone: 'Australia/Brisbane' }).split("/")
        .join(",").split(":").join(",").split(" ").join(",").split(",");
        console.log(currentdate);
    }
       
    mlist = ["0", "January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December" ];
    var curr_day=currentdate[1];
    var curr_month=mlist[currentdate[0]];
    var curr_year=currentdate[2];
    document.getElementById("date").innerHTML=curr_day+" "+ curr_month+" " + curr_year;
    
    var curr_hour=currentdate[4];
    var curr_min=currentdate[5];
    var curr_sec=currentdate[6];
    var curr_ampm=currentdate[7];
    if(f==12){
    document.getElementById("hours").innerHTML=curr_hour;
    document.getElementById("minutes").innerHTML=curr_min;
    document.getElementById("seconds").innerHTML=curr_sec;
    document.getElementById('ampm').innerHTML=curr_ampm;}
    if(f==24){
        if(curr_ampm=="PM"){
            curr_hour=12+parseInt(curr_hour);
            curr_hour=curr_hour.toString();
            
        }
        if(curr_ampm=="AM"){
            if(curr_hour=="12")curr_hour="00";
        }
        document.getElementById("hours").innerHTML=curr_hour;
    document.getElementById("minutes").innerHTML=curr_min;
    document.getElementById("seconds").innerHTML=curr_sec;
    document.getElementById('ampm').innerHTML="--";
    }
            setTimeout(clockfunction,1000);
}


