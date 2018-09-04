(function ($) {
  "use strict";

  window.nationalPay = $.extend(
    {},
    {
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
        nationalPay.initCustomSelect();
        nationalPay.initImagePreview();
        nationalPay.initImagePreviewSecond();
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
        uploadPhoto.on("click", function () {
          document.querySelector("input#upload").click();
        });
      },
      initUploadPhotoSecond: function (e) {
        if (!$("#uploadPhotoSecond").length) return false;
        let uploadPhoto = $("#uploadPhotoSecond"),
          hiddenInput = $("#uploadSecond");
        uploadPhoto.on("click", function () {
          document.querySelector("input#uploadSecond").click();
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
          $("#uploadPhotosecond")
            .find("svg")
            .hide();
          $("#uploadPhotosecond")
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
    }
  );
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

var PhotoUploader;

(function (PhotoUploader) {
  PhotoUploader.openFileDialog = function ($fileInput) {
    $fileInput.click();
  };

  PhotoUploader.upload = function (formID, type, success, fail) {
    var $form = $('#' + formID)[0];
    console.log($form);
  };
  return PhotoUploader;
})(PhotoUploader || (PhotoUploader = {}));

var $fileInput = $('#file-input');

$('.photo-change').on('click', function (e) {
  console.log('Photo change event');
  PhotoUploader.openFileDialog($fileInput);
  e.preventDefault();
});

$fileInput.on('change', function (e) {
  e.preventDefault();

  PhotoUploader.upload('file-form', 1, function (response) {
    console.log('Uploaded');
    console.log(response);
    PhotoUploader.displayPreview('avatar-preview', '/uploads/' + response['url']);
    $fileInput.val('');
  }, function () {
    console.log('Fail');
  });
});

$('.remove-avatar').on('click', function (e) {
  e.preventDefault();
  console.log('remove avatar');
  PhotoUploader.removeAvatar(function (response) {
    PhotoUploader.displayPreview('avatar-preview', '/img/none_photo.png');
  });
});

// slick slider
$(document).ready(function () {
  $('.autoplay').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
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

$(document).ready(function () {
  $('.mobile-table-slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true
        }
      }
    ]
  });
});