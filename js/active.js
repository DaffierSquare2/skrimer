jQuery(function ($) {
    $("#active").viewportChecker({
        callbackFunction: function () {
            // skrimAcrive();
            window.location.href = 'secound.html';
        }
    });
});

function skrimAcrive() {
    var element = document.getElementById("skrimID");
    element.classList.add("skrim");

    var element2 = document.getElementById("myBody");
    element2.classList.add("no-scroll");
}


(function ($) {
    $.fn.uncomment = function () {
        for (var i = 0, l = this.length; i < l; i++) {
            for (var j = 0, len = this[i].childNodes.length; j < len; j++) {
                if (this[i].childNodes[j].nodeType === 8) {
                    var content = this[i].childNodes[j].nodeValue;
                    $(this[i].childNodes[j]).replaceWith(content);
                }
            }
        }
    };
})(jQuery);