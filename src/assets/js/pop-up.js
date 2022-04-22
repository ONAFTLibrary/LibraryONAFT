function showPopUp() {
  let el = document.getElementById('n2k-popup');
  el.classList.remove('display-n');
  el.classList.add('display-b');
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, "", {
        expires: -1
    })
}

window.onload = function() {
  'use strict'

  let closeBtn = document.getElementById('n2k-close');
  let popUp = document.getElementById('n2k-popup');
  let noShow = document.getElementById('noshow');
  
  closeBtn.addEventListener('click', function () {
    popUp.classList.remove('display-b');
    popUp.classList.add('display-n');
  });

  noShow.addEventListener('click', function () {
    if (getCookie('messageHide') == undefined) {
      setCookie('messageHide', true, 3600);
    } else {
      deleteCookie('messageHide');
    }
  });

  if (getCookie('messageHide') == undefined) {
    setTimeout(showPopUp, 3000);
  }
  console.log(getCookie('messageHide'));
}