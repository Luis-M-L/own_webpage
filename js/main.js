function onLoad(){
  console.log("Hola");


  $(".sort-down").siblings("ul").each(function(){
    setListener($(this));
  } );
}

function setListener(elem){
  //console.log("setListener");
  console.log(elem);
}
