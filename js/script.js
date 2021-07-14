$(document).ready(function () {
  $(" .filter-buttons #red").click(function () {
    $(".card").filter(".right").css("border", "4px solid #dc3545");
    console.log("done");
  });
  $(" .filter-buttons #blue").click(function () {
    $(".card").filter(".left").css("border", " 4px solid #17a2b8");
    console.log("done");
  });
  $(" .filter-buttons #yellow").click(function () {
    $(".card").filter(".center").css("border", "4px solid #ffc107");
    console.log("done");
  });
});

$("#text").on("input", function () {
  let math = this.value.length;
  //   let remaining = $("#text").attr("maxlength") - this.value.length;
  $("#count").html(math + "/" + "100");
});
