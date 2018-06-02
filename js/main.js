function onLoad(){
  console.log("Hola");


  $(".sort-down").each(function(){
    setListener($(this));
  } );
}

function setListener(elem){
  elem.on("click", function(){
    console.log(elem.siblings("ul").attr("hidden"));
  });
}
