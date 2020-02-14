setTimeout(function(){
  console.log("First Task Done!");
  setTimeout(function(){
    console.log("SECOND TASK HERE!");
    setTimeout(function(){
      console.log("Third TASK SUCKS!");
    }, 2000);
  }, 2000);
}, 2000);



