var utils = {

  style: function(node, styleProp) {
    var value;

    if (node.currentStyle) {

      value = node.currentStyle[styleProp];

    } else if (window.getComputedStyle) {

      value = document.defaultView.getComputedStyle(node, null).getPropertyValue(styleProp);

    }

    return value;
    
  },

  position: (function() {

    function getOffX(o) {

      // http://www.xs4all.nl/~ppk/js/findpos.html
      var curleft = 0;

      if (o.offsetParent) {

        while (o.offsetParent) {

          curleft += o.offsetLeft;
          o = o.offsetParent;

        }

      } else if (o.x) {

          curleft += o.x;

      }

      return curleft;

    }

    function getOffY(o) {

      // http://www.xs4all.nl/~ppk/js/findpos.html
      var curtop = 0;

      if (o.offsetParent) {

        while (o.offsetParent) {

          curtop += o.offsetTop;
          o = o.offsetParent;

        }

      } else if (o.y) {

          curtop += o.y;

      }

      return curtop;

    }

    return {
      getOffX: getOffX,
      getOffY: getOffY
    };

    }()),

  getTime: function(msec, useString) {

      // convert milliseconds to hh:mm:ss, return as object literal or string

      var nSec = Math.floor(msec/1000),
        hh = Math.floor(nSec/3600),
        min = Math.floor(nSec/60) - Math.floor(hh * 60),
        sec = Math.floor(nSec -(hh*3600) -(min*60));

      // if (min === 0 && sec === 0) return null; // return 0:00 as null

      return (useString ? ((hh ? hh + ':' : '') + (hh && min < 10 ? '0' + min : min) + ':' + ( sec < 10 ? '0' + sec : sec ) ) : { 'min': min, 'sec': sec });
  },

  getSoundPosition: function(sound) {
    return (sound.position) ? sound.position : 0;
  },
  
  getSoundDuration: function(sound) {
    return (sound.duration) ? sound.duration : 1;
  }
}

module.exports = utils;