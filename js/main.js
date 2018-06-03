function onLoad(){
  console.log("Hola");


  $(".sort-down").each(function(){
    setListener($(this));
  });

  $(".option-name>span").each(function(){
    setListener($(this));
  });
}

function setListener(elem){
  elem.on("click", function(){
    elem.siblings("ul").attr("hidden", !elem.siblings("ul").attr("hidden"));
  });
}
