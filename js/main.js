function onLoad(){
  console.log("Hola");


  $(".option-name").each(function(){
    setListener($(this));
  } );
}

function setListener(elem){
  elem.on("click", function(){
    elem.children("ul").attr("hidden", !elem.children("ul").attr("hidden"));
  });
}
