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
});
