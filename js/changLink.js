// Call back function example
// $('body').hide().fadeIn(4000, function(){alert("Done");});
/* How jquery event works */
$("h1").click(function(){
    $(this).text("Hide the image");
    $("img").hide();
    $("body").children('p').slideToggle();
});

// Play with Jquery .each function

// Update the image link
$("img").each(function(){
    var path = $(this).attr("src");
    var newpath = "img/" + path;
    $(this).attr("src", newpath);
    console.log(newpath);


});

// Update the anchor link --- all links go to google.com
$("a").each(function(){
    var anc = $(this).attr("href");
    var newanc = "href = 'https://www.google.com/'" + anc;
    $(this).attr("href", newanc)

});

// CSS Style
$("a").each(function(){
    $(this).css("text-decoration", "line-through");

});