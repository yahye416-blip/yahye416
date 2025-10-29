


  let count= 0; 
 

    const intervalid = setInterval(() => { 
     count ++;
     if(count >1){
      console.log(count + " burgers")
     } else {
       console.log(count + " burger");
     }
     if (count === 10){
     clearInterval(intervalid);
     console.log("thats enough bro damn")
     }
    }, 2000);
     // This runs every 2 second (2000ms)

