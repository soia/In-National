(function ($) {
  "use strict";

  window.nationalPay = $.extend({}, {
    winWidth: $(window).width(),
    winHeight: $(window).height(),
    winScroll: $(window).scrollTop(),
    preloader: $(".preloader"),
    modalWindow: $(".modal"),

    init: function () {
      nationalPay.initHeader();
      nationalPay.initLeftHeader();
      nationalPay.initTableDropdown();
      nationalPay.initSupportInfo();
      nationalPay.initUploadPhoto();
      nationalPay.initUploadPhotoSecond();
      nationalPay.initUploadPhotoThird();
      nationalPay.initUploadPhotoFourth();
      // nationalPay.initremoveAvatar();
      nationalPay.initCustomSelect();
      nationalPay.initImageDownload();
      nationalPay.initImagePreview();
      nationalPay.initImagePreviewSecond();
      nationalPay.initImagePreviewThird();
    },
    initHeader: function () {
      let main = $("main"),
        mainHeader = $("#mainHeader"),
        openAside = $("#openHeaderAside"),
        closeAside = $("#closeHeaderAside");

      if (nationalPay.winWidth < 500) {
        mainHeader.removeClass("aside_visible");
        main.removeClass("aside_visible");
      }
      openAside.on("click", function () {
        mainHeader.addClass("aside_visible");
        main.addClass("aside_visible");
      });
      closeAside.on("click", function () {
        mainHeader.removeClass("aside_visible");
        main.removeClass("aside_visible");
      });
    },
    initLeftHeader: function () {
      let main = $("#main_header__left"),
        mainHeader = $("#main_header__left"),
        openAside = $("#openHeaderAside"),
        closeAside = $("#closeHeaderAside");

      if (nationalPay.winWidth < 500) {
        mainHeader.removeClass("aside_visible");
        main.removeClass("aside_visible");
      }
      openAside.on("click", function () {
        mainHeader.addClass("aside_visible");
        main.addClass("aside_visible");
      });
      closeAside.on("click", function () {
        mainHeader.removeClass("aside_visible");
        main.removeClass("aside_visible");
      });
    },
    initTableDropdown: function () {
      if (!$(".openSortDropdown").length) return false;

      let openDropdown = $(".openSortDropdown");
      openDropdown.each(function () {
        $(this).on("click", function () {
          $(this).toggleClass("drop_opened");
          $(this)
            .parent("th")
            .toggleClass("drop_opened");
        });
      });
    },
    initSupportInfo: function () {
      if (!$(".showInfo").length) return false;
      let showInfo = $(".showInfo"),
        hideInfo = $(".hideInfo");
      showInfo.each(function () {
        $(this).on("click", function () {
          $(this).addClass("showInfo__visible");
          $(this).removeClass("transparent");
        });
      });
      hideInfo.each(function (e) {
        $(this).on("click", function (e) {
          $(this)
            .closest(showInfo)
            .removeClass("showInfo__visible");
          $(this)
            .closest(showInfo)
            .addClass("transparent");
          e.stopPropagation();
        });
      });
    },
    initUploadPhoto: function (e) {
      if (!$("#uploadPhoto").length) return false;
      let uploadPhoto = $("#uploadPhoto"),
        hiddenInput = $("#upload");
      $(document).on("click", '#uploadPhoto', function () {
        document.querySelector("input#upload").click();
      });
    },
    initUploadPhotoSecond: function (e) {
      if (!$("#uploadPhotoSecond").length) return false;
      let uploadPhoto = $("#uploadPhotoSecond"),
        hiddenInput = $("#uploadSecond");
      $(document).on("click", '#uploadPhotoSecond', function () {
        document.querySelector("input#uploadSecond").click();
      });
    },
    initUploadPhotoThird: function (e) {
      if (!$("#uploadPhotoThird").length) return false;
      let uploadPhoto = $("#uploadPhotoThird"),
        hiddenInput = $("#uploadThird");
      $(document).on("click", '#uploadPhotoThird', function () {
        document.querySelector("input#uploadThird").click();
      });
    },
    initUploadPhotoFourth: function (e) {
      if (!$(".uploadPhotoFourth").length) return false;
      let uploadPhoto = $(".uploadPhotoFourth"),
        hiddenInput = $(".uploadFourth");
      $(document).on("click", '.uploadPhotoFourth', function () {
        document.querySelector("input.uploadFourth").click();
      });
    },
    initCustomSelect: function () {
      if (!$(".custom_select").length) return false;
      let toggleSelect = $(".toggleSelect"),
        selectOption = $(".selectOption"),
        showOptions = $(".showOptions"),
        hideOptions = $(".hideOptions");

      toggleSelect.each(function () {
        $(this).on("click", function () {
          $(this)
            .closest(".custom_select")
            .toggleClass("opened");
        });
      });
      selectOption.each(function () {
        $(this).on("click", function () {
          let newCurrency = $(this).attr("data-currency"),
            prevCurrency = $(this)
            .closest(".custom_select")
            .find(".custom_select__choosen")
            .attr("data-choosen");

          $(this)
            .closest(".custom_select")
            .find(".custom_select__choosen")
            .attr("data-choosen", newCurrency);
          $(this).attr("data-currency", prevCurrency);
          $(this)
            .closest(".custom_select")
            .toggleClass("opened");
          refreshItemData($(".custom_select__choosen"));
          refreshItemData($(this));
        });
      });

      function refreshItemData(item) {
        item.each(function () {
          if ($(this).attr("data-choosen")) {
            let data = $(this).attr("data-choosen");
            $(this)
              .find("span")
              .html($(this).attr("data-choosen"));
          } else {
            let data = $(this).attr("data-currency");
            $(this)
              .find("span")
              .html($(this).attr("data-currency"));
          }
        });
      }
    },
    initImagePreview() {
      if (!$("#upload").length) return false;

      $("#upload").change(function () {
        readURL(this);
        $("#uploadPhoto")
          .find("svg")
          .hide();
        $("#uploadPhoto")
          .find("span")
          .hide();
      });

      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $("#uploadedImage").attr("src", e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
    },
    initImagePreviewSecond() {
      if (!$("#uploadSecond").length) return false;

      $("#uploadSecond").change(function () {
        readURL(this);
        $("#uploadPhotoSecond")
          .find("svg")
          .hide();
        $("#uploadPhotoSecond")
          .find("span")
          .hide();
      });

      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $("#uploadedImageSecond").attr("src", e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
    },
    initImagePreviewThird() {
      if (!$("#uploadThird").length) return false;

      $("#uploadThird").change(function () {
        readURL(this);
      });

      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $("#uploadedImageThird").attr("src", e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
    },

    // initremoveAvatar() {
    //   const defaultImgSrc = $(".jsAvatar").data("standart-image");
    //   let removeAva = $("#remove-avatar");
    //   let checked = document.getElementById("remove-avatar");
    //   checked.onclick = function () {
    //     document.getElementById("avatarCheckbox").checked = !0;
    //   };

    //   removeAva.on("click", function () {
    //     $("#uploadedImageThird").attr("src", defaultImgSrc);
    //   });
    // }
    initImageDownload() {
      if (!$(".uploadFourth").length) return false;

      $(".uploadFourth").change(function (event) {
        $(".uploadPhotoFourth")
          .find(".download-svg")
          .hide();
        $(".uploadPhotoFourth")
          .find(".done-svg")
          .show();
      });
    }
  });
  $(document).ready(function () {
    nationalPay.init();
  });
})(jQuery);

//

function showPopup(obj) {
  let el = obj.type,
    msg = obj.message,
    textEl = el.querySelector(".popup__text");

  textEl.innerHTML = msg;
  el.classList.add("visible");
  setTimeout(() => {
    el.classList.remove("visible");
  }, 5000);
}

// slick slider
$(document).ready(function () {
  $(".autoplay").each(function (index, item) {
    var slidesToShow = 5;
    var childElements = $(item).children().length;
    console.log(childElements);
    if (slidesToShow > childElements) {
      slidesToShow = childElements;
    }

    $(item).slick({
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1366,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1022,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  $(".mobile-table-slick").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
      breakpoint: 480,
      settings: {
        dots: true
      }
    }]
  });

  $(function () {
    $('.textareaField').keyup(function () {
      var maxLength = $(this).attr('maxlength');
      var curLength = $(this).val().length;
      $(this).val($(this).val().substr(0, maxLength));
      var remaning = maxLength - curLength;
      if (remaning < 0) remaning = 0;
      $('.textareaFeedback').html('Cимволы ' + remaning + ' /1024');
      if (remaning < 10) {
        $('.textareaFeedback').addClass('wrapper-speaker__warning')
      } else {
        $('.textareaFeedback').removeClass('wrapper-speaker__warning')
      }
    });
  });
});

//clip board
document.getElementById("copyButton").addEventListener("click", function () {
  copyToClipboard(document.getElementById("copyTarget"));
});

function copyToClipboard(elem) {
  // create hidden text element, if it doesn't already exist
  var targetId = "_hiddenCopyText_";
  var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
  var origSelectionStart, origSelectionEnd;
  if (isInput) {
    // can just use the original source element for the selection and copy
    target = elem;
    origSelectionStart = elem.selectionStart;
    origSelectionEnd = elem.selectionEnd;
  } else {
    // must use a temporary form element for the selection and copy
    target = document.getElementById(targetId);
    if (!target) {
      var target = document.createElement("textarea");
      target.style.position = "absolute";
      target.style.left = "-9999px";
      target.style.top = "0";
      target.id = targetId;
      document.body.appendChild(target);
    }
    target.textContent = elem.textContent;
  }
  // select the content
  var currentFocus = document.activeElement;
  target.focus();
  target.setSelectionRange(0, target.value.length);

  // copy the selection
  var succeed;
  try {
    succeed = document.execCommand("copy");
  } catch (e) {
    succeed = false;
  }
  // restore original focus
  if (currentFocus && typeof currentFocus.focus === "function") {
    currentFocus.focus();
  }

  if (isInput) {
    // restore prior selection
    elem.setSelectionRange(origSelectionStart, origSelectionEnd);
  } else {
    // clear temporary content
    target.textContent = "";
  }
  return succeed;
}
