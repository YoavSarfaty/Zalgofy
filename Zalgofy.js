// insertion-query v1.0.3 (2016-01-20)
// license:MIT
// Zbyszek Tenerowicz <naugtur@gmail.com> (http://naugtur.pl/)
var insertionQ = function () {
  "use strict";

  function a(a, b) {
    var d, e = "insQ_" + g++,
      f = function (a) {
        (a.animationName === e || a[i] === e) && (c(a.target) || b(a.target))
      };
    d = document.createElement("style"), d.innerHTML = "@" + j + "keyframes " + e + " {  from {  outline: 1px solid transparent  } to {  outline: 0px solid transparent }  }\n" + a + " { animation-duration: 0.001s; animation-name: " + e + "; " + j + "animation-duration: 0.001s; " + j + "animation-name: " + e + ";  } ", document.head.appendChild(d);
    var h = setTimeout(function () {
      document.addEventListener("animationstart", f, !1), document.addEventListener("MSAnimationStart", f, !1), document.addEventListener("webkitAnimationStart", f, !1)
    }, n.timeout);
    return {
      destroy: function () {
        clearTimeout(h), d && (document.head.removeChild(d), d = null), document.removeEventListener("animationstart", f), document.removeEventListener("MSAnimationStart", f), document.removeEventListener("webkitAnimationStart", f)
      }
    }
  }

  function b(a) {
    a.QinsQ = !0
  }

  function c(a) {
    return n.strictlyNew && a.QinsQ === !0
  }

  function d(a) {
    return c(a.parentNode) ? a : d(a.parentNode)
  }

  function e(a) {
    for (b(a), a = a.firstChild; a; a = a.nextSibling) void 0 !== a && 1 === a.nodeType && e(a)
  }

  function f(f, g) {
    var h = [],
      i = function () {
        var a;
        return function () {
          clearTimeout(a), a = setTimeout(function () {
            h.forEach(e), g(h), h = []
          }, 10)
        }
      }();
    return a(f, function (a) {
      if (!c(a)) {
        b(a);
        var e = d(a);
        h.indexOf(e) < 0 && h.push(e), i()
      }
    })
  }
  var g = 100,
    h = !1,
    i = "animationName",
    j = "",
    k = "Webkit Moz O ms Khtml".split(" "),
    l = "",
    m = document.createElement("div"),
    n = {
      strictlyNew: !0,
      timeout: 20
    };
  if (m.style.animationName && (h = !0), h === !1)
    for (var o = 0; o < k.length; o++)
      if (void 0 !== m.style[k[o] + "AnimationName"]) {
        l = k[o], i = l + "AnimationName", j = "-" + l.toLowerCase() + "-", h = !0;
        break
      } var p = function (b) {
    return h && b.match(/[^{}]/) ? (n.strictlyNew && e(document.body), {
      every: function (c) {
        return a(b, c)
      },
      summary: function (a) {
        return f(b, a)
      }
    }) : !1
  };
  return p.config = function (a) {
    for (var b in a) a.hasOwnProperty(b) && (n[b] = a[b])
  }, p
}();
"undefined" != typeof module && "undefined" != typeof module.exports && (module.exports = insertionQ);


// Zalgo code from https://github.com/Marak/zalgo.js
/*------------------------------------------------*/
var soul = {
  "up": [
    '̍', '̎', '̄', '̅',
    '̿', '̑', '̆', '̐',
    '͒', '͗', '͑', '̇',
    '̈', '̊', '͂', '̓',
    '̈', '͊', '͋', '͌',
    '̃', '̂', '̌', '͐',
    '̀', '́', '̋', '̏',
    '̒', '̓', '̔', '̽',
    '̉', 'ͣ', 'ͤ', 'ͥ',
    'ͦ', 'ͧ', 'ͨ', 'ͩ',
    'ͪ', 'ͫ', 'ͬ', 'ͭ',
    'ͮ', 'ͯ', '̾', '͛',
    '͆', '̚'
  ],
  "down": [
    '̖', '̗', '̘', '̙',
    '̜', '̝', '̞', '̟',
    '̠', '̤', '̥', '̦',
    '̩', '̪', '̫', '̬',
    '̭', '̮', '̯', '̰',
    '̱', '̲', '̳', '̹',
    '̺', '̻', '̼', 'ͅ',
    '͇', '͈', '͉', '͍',
    '͎', '͓', '͔', '͕',
    '͖', '͙', '͚', '̣'
  ],
  "mid": [
    '̕', '̛', '̀', '́',
    '͘', '̡', '̢', '̧',
    '̨', '̴', '̵', '̶',
    '͜', '͝', '͞',
    '͟', '͠', '͢', '̸',
    '̷', '͡'
  ]
};

var all = [].concat(soul.up, soul.down, soul.mid);

function randomNumber(range) {
  r = Math.floor(Math.random() * range);
  return r;
};

function is_char(character) {
  var bool = false;
  all.filter(function (i) {
    bool = (i == character);
  });
  return bool;
}

function heComes(text, options) {
  if (text.trim().length < 3) return text;
  result = '';

  var counts;
  text = text.split('');
  for (var l in text) {
    if (is_char(l)) continue;
    result = result + text[l];
    if (Math.random() < 0.5 || /\s/.test(text[l])) continue;
    counts = {
      "up": randomNumber(randomNumber(2)),
      "down": randomNumber(randomNumber(1)),
      "mid": randomNumber(randomNumber(2))
    };

    var arr = ["up", "mid", "down"];
    for (var d in arr) {
      var index = arr[d];
      for (var i = 0; i <= counts[index]; i++) {
        result = result + soul[index][randomNumber(soul[index].length)];
      }
    }
  }
  return result;
};
/*------------------------------------------------*/

function textNodesUnder(node) {
  var all = [];
  for (node = node.firstChild; node; node = node.nextSibling) {
    if (node.nodeType == 3) all.push(node);
    else all = all.concat(textNodesUnder(node));
  }
  return all;
}

function zalgo(a) {
  textNodesUnder(a).map(x => {
    if (x.parentElement.tagName == "STYLE" || x.parentElement.tagName == "SCRIPT" || x.zalgo) return;
    x.data = heComes(x.data);
    x.zalgo = true;
  });
}

window.addEventListener("load", function (event) {
  zalgo(document.body);
  let oldt;
  setInterval(() => {
    if (oldt != document.title) {
      document.title = heComes(document.title);
      oldt = document.title;
    }
  }, 100);
});

insertionQ('*').every(function (element) {
  zalgo(element);
});