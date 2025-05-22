$("h1").addClass("big-title margin-20");


//$("h1");
$("button").html("<em>&nbsp;clickn't&nbsp;</em>");
//$("a").attr("href","https://yahoo.com");

$("button").click(function() {
  $("#rldpg").addClass("bottomspacewhenhidden");
  $("h1").slideUp().delay(1000).slideDown().delay(1000).animate({opacity: 0.5});
});

$("input").keypress(function(event) {
  $("h1").addClass("fpurple");
  $("h1").append(event.key);
  $("input").append(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").addClass("forange");
});

$("h1").on("click", function() {
  $("h1").addClass("fviolet");
});

$("#rldpg").click(function(event) {
  event.preventDefault();
  location.reload();
});

//$("h1").before("<button>NewButtonBefore</button>");
//$("h1").after("<button>NewButtonAfter</button>");
//$("h1").prepend("<button>NewButtonPrepend</button>");
//$("h1").append("<button>NewButtonAppend</button>");
