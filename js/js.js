$("#open").click(function(){
    $("#open").animate({left:"270"},500)
      $(".side-nav").show(500)
})

$("#cross").click(function(){
    $("#open").animate({left:"0"},500)
    $(".side-nav").hide(500)
})

$("#details h3").eq(0).click(function(){
    $(".Text-1").toggle(500)
})
$("#details h3").eq(1).click(function(){
    $(".text-2").toggle(500)
})

$("#details h3").eq(2).click(function(){
    $(".text-3").toggle(500)
})

$("#details h3").eq(3).click(function(){
    $(".text-4").toggle(500)
})


$('#clock').countdown("2020/01/01", function(event) {
    $(this).text(
      event.strftime('%D days %H:%M:%S')
    );
  });

$(".texting p").eq(1).css("color","rgb(214, 46, 51)")

var myMsg = document.getElementById('my-msg');
var regex = /^[a-z A-Z]{0,100}$/;

function validation()
{
    var myMsg = document.getElementById('my-msg');
var regex = /^[a-z A-Z]{0,100}$/;

    if(regex.test(myMsg.value) == true)
        {
            myMsg.className="form-control is-valid"
        }
    else
    {
            myMsg.className="form-control is-invalid"

    }
}

function remaining() {
    var remaining = 100 - $('#my-msg').val().length;
    $('.charRem').text(remaining);
}
   remaining();
    $('#my-msg').change(remaining);
    $('#my-msg').keyup(remaining);


$("a").click(function()
            {
    var hr = $(this).attr("href");
   var aOff = $( hr).offset().top;
    $("body").animate({scrollTop:aOff},1000)
})