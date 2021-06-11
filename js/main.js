$(function () {


  // Дата в .header-top

  function zero_first_format(value) {
    if (value < 10) {
      value = '0' + value;
    }
    return value;
  }

  function date_time() {
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth() + 1);
    var year = current_datetime.getFullYear();
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());
    var seconds = zero_first_format(current_datetime.getSeconds());

    return day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
  }

  document.getElementById('current_date_time_block').innerHTML = date_time();


  // Липкий .header

  window.onscroll = function () {
    myFunction()
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }


  // document.addEventListener("DOMContentLoaded", function() {
  //   var lazyLoadVideos = [].slice.call(document.querySelectorAll("video.lazy-video"));
  //    if ("IntersectionObserver" in window) {
  //     var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
  //      entries.forEach(function(video) {
  //       if (video.isIntersecting) {
  //        for (var source in video.target.children) {
  //         var videoSource = video.target.children[source];
  //         if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
  //          videoSource.src = videoSource.dataset.src;
  //         }
  //        }
  //        video.target.load();
  //        video.target.classList.remove("lazy-video");
  //        lazyVideoObserver.unobserve(video.target);
  //       }
  //      });
  //     });
  //     lazyLoadVideos.forEach(function(lazyVideo) {
  //      lazyVideoObserver.observe(lazyVideo);
  //     });
  //    }
  //  });
});