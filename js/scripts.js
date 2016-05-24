$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow Meow</li>");
  });
  $("button#bark").click(function () {
    $("ul#dog").prepend("<li>Bark Bark</li>");
  });
  $("button#all").click(function () {
    $("ul#dog").append("<li>Growl Growl</li>");
    $("ul#cat").append("<li>Hiss Hiss</li>");
    $("ul#cat").children("li").first().click(function() {
      $("#fight").show();
    });
    $("ul#dog").children("li").first().click(function() {
      $("#fight").hide();
    });
  });

  $("#madlib").submit(function(event) {
    var nameInput = $("input#name").val();
    var adjectiveInput = $("input#adjective").val();
    var animalInput = $("input#animal").val();

    $(".name").text(nameInput);
    $(".adjective").text(adjectiveInput);
    $(".animal").text(animalInput);

    $(".story").show();

    event.preventDefault();
  });
  $("#ordering").submit(function(event) {
    var fullInput = $("input#full").val();
    var addressInput = $("input#address").val();
    var itemInput = $("input#item").val();

    $(".full").text(fullInput);
    $(".address").text(addressInput);
    $(".item").text(itemInput);

    $(".receipt").show();
    $("#ordering").hide();

    event.preventDefault();
  });
});
