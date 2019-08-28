//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
// @prepros-prepend flipclock.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}
$(document).ready(function () {
    /* Якорь */
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    //  Модуль 1
    (function ($) {
        jQuery.fn.lightTabs = function (options) {

            var createTabs = function () {
                let tabs = this,
                    i = 0,

                    showPage = function (i) {
                        $(tabs).children("div").children("div").hide();
                        $(tabs).children("div").children("div").eq(i).show();
                        $(tabs).children("ul").children("li").removeClass("active");
                        $(tabs).children("ul").children("li").eq(i).addClass("active");
                    };

                showPage(0);

                $(tabs).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page", i);
                    i++;
                });

                $(tabs).children("ul").children("li").click(function () {
                    showPage(parseInt($(this).attr("data-page")));
                });
            };
            return this.each(createTabs);
        };
    })(jQuery);

    $(".module-1").lightTabs();


    // Модуль 2
    (function ($) {
        jQuery.fn.lightTabs2 = function (options) {

            var createTabs2 = function () {
                let tabs2 = this,
                    i = 0,
                    showPage2 = function (i) {
                        $(tabs2).children("div").children("div").hide();
                        $(tabs2).children("div").children("div").eq(i).show();
                        $(tabs2).children("ul").children("li").removeClass("active-2");
                        $(tabs2).children("ul").children("li").eq(i).addClass("active-2");
                    };
                showPage2(0);

                $(tabs2).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page2", i);
                    i++;
                });

                $(tabs2).children("ul").children("li").click(function () {
                    showPage2(parseInt($(this).attr("data-page2")));
                });
            };
            return this.each(createTabs2);
        };
    })(jQuery);

    $(".module-2").lightTabs2();

    // Записи
    (function ($) {
        jQuery.fn.lightTabs3 = function (options) {

            var createTabs3 = function () {
                let tabs3 = this,
                    i = 0,

                    showPage3 = function (i) {
                        $(tabs3).children("div").children("div").hide();
                        $(tabs3).children("div").children("div").eq(i).show();
                        $(tabs3).children("ul").children("li").removeClass("active-3");
                        $(tabs3).children("ul").children("li").eq(i).addClass("active-3");
                    };

                showPage3(0);

                $(tabs3).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page3", i);
                    i++;
                });

                $(tabs3).children("ul").children("li").click(function () {
                    showPage3(parseInt($(this).attr("data-page3")));
                });
            };
            return this.each(createTabs3);
        };
    })(jQuery);

    $("	.recs-container").lightTabs3();

    /* Таймер */
    var clock;
    var futureDate = new Date("September 6, 2019 00:00 AM UTC+3");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.clock').addClass('twoDayDigits');
    } else {
        $('.clock').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
        $('#sale-1').text('1 000р.');
        $('#sale-2').text('2 000р.');
        $('#today-1').text('3 900р.');
        $('#today-2').text('11 900р.');
        $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3756&clean=true&lg=ru');
        $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3759&clean=true&lg=ru');
    }
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'HourlyCounter',
        countdown: true,
        language: 'ru',
        callbacks: {
            stop: function () {
                $('#sale-1').text('1 000р.');
                $('#sale-2').text('2 000р.');
                $('#today-1').text('3 900р.');
                $('#today-2').text('11 900р.');
                $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3756&clean=true&lg=ru');
                $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3759&clean=true&lg=ru');
            }
        },
    });
    /*Конец документа*/
});