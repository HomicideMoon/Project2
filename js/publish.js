$(function () {
    //Judge if it is an integer or 0
    function IntegerNotLessThanZero(s) {
        var zz = /^(0|[1-9][0-9]*)$/;
        return (zz.test(s))
    }

    function PositiveInteger(s) {
        var zz = /^[1-9][0-9]*$/;
        return (zz.test(s))
    }

    function IsChineseCharctar(s) {
        var zz = /^[\u4e00-\u9fa5]+$/;
        return (zz.test(s))
    }

    function isContains(str, substr) {
        return new RegExp(substr).test(str);
    }

    function PositiveFloat(s) {
        var zz = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
        return (zz.test(s))
    }
    //Expand choices of more cities
    $(".DivCitySelect").on('click', function () {
        if ($(".DivCitySelect").hasClass("h")) {
            $(".DivCitySelect").removeClass("h");
            $(".DivCitySelectExtend").fadeIn(1000);
        } else {
            $(".DivCitySelect").addClass("h");
            $(".DivCitySelectExtend").fadeOut(1000);
        }
    })

    //When choose a new city,change the info within the cityname-display area
    $(".DivCitySelectExtend .inner .cities").on('click', function () {
        $(".DivCitySelect #city-select").text($(this).text());
    })

    //Switch the three coattail bars
    $(".bar-with-coattail").on('click', function () {
        $(this).addClass("h").siblings(".bar-with-coattail").removeClass("h");
    })

    //List expends or retracts its second level sub-menus
    $(".menu1").on('click', function () {
        if ($(this).hasClass("h")) {
            $(this).removeClass("h");
            $(this).children(".menu2").slideDown();
        } else {
            $(this).addClass("h");
            $(this).children(".menu2").slideUp();
        }
    })

    var comname = ['世茂滨江新城', '百合华府', '汤臣一品', '广州塔', '熙龙山院', '陆家嘴广场', '绿地广场', '世贸中心'];
    var chosen;

    $(".line1 .Divinput input").on('input change', function () {
        if (IsChineseCharctar($("#Community-Name").val())) {
            $(".line1 .judge").html("&#xe7b9;");
        } else {
            $(".line1 .judge").html("&#xe644;");
        }
        $(".line1 .Results").html("");
        if ($("#Community-Name").val() !== chosen && $("#Community-Name").val() !== "") {
            for (var i = 0; i < comname.length; i++) {
                if (isContains(comname[i], $("#Community-Name").val())) {
                    $(".line1 .Results").append('<div class="Result">' + comname[i] + '</div>');
                }
            }
        }
        $(".line1 .Results .Result").on('click', function () {
            $("#Community-Name").val($(this).text());
            chosen = $(this).text();
            console.log(chosen);
            $(".line1 .Results").html("");


        })
    })



    $(".line3 .Divinput input").on('input change', function () {
        if (IntegerNotLessThanZero($("#Room").val()) && IntegerNotLessThanZero($("#Living-room").val()) && IntegerNotLessThanZero($("#Bathroom").val()) && IntegerNotLessThanZero($("#Balcony").val())) {
            if ($("#Room").val() + $("#Living-room").val() + $("#Bathroom").val() + $("#Balcony").val() !== '0000') {
                $(".line3 .judge").html("&#xe7b9;")
            } else {
                $(".line3 .judge").html("&#xe644;");
            }
        } else {
            $(".line3 .judge").html("&#xe644;");
        }
    })

    $(".line5 .Divinput input").on('input change', function () {
        if (PositiveInteger($("#area").val())) {
            $(".line5 .judge").html("&#xe7b9;")
        } else {
            $(".line5 .judge").html("&#xe644;");
        }
    })

    $(".line6 .Divinput input").on('input change', function () {
        if (PositiveInteger($("#rental").val())) {
            $(".line6 .judge").html("&#xe7b9;")
        } else {
            $(".line6 .judge").html("&#xe644;");
        }
    })

    //Controlling the choices of Payment method and time
    //when "all above" were chosen,the other checkmarks disappear
    $(".boxgroup2").on('click', function () {
        if ($(".boxgroup2").attr("checked")) {
            $(".boxgroup1").removeAttr("checked");
        }
    })

    //when any normal way were chosen ,"all above"'s checkmark diappear
    $(".boxgroup1").on('click', function () {
        if ($(this).attr("checked")) {
            $(".boxgroup2").removeAttr("checked");
        }
    })



})
