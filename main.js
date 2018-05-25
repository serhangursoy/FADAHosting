$(function() {
  $('a[href*=#]').on('click', function(e) {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  $("#teacher").ionRangeSlider({
    hide_min_max: true,
    min: 1987,
    max: 2018,
    from: 1993,
    to: 2018,
    type: 'double',
    from_fixed: true,
    to_fixed: true,
    prettify_enabled: false
  });
  $("#teacher2").ionRangeSlider({
    hide_min_max: true,
    min: 1987,
    max: 2018,
    from: 2013,
    to: 2018,
    type: 'double',
    from_fixed: true,
    to_fixed: true,
    prettify_enabled: false
  });
  $("#teacher3").ionRangeSlider({
    hide_min_max: true,
    min: 1987,
    max: 2018,
    from: 2012,
    to: 2018,
    type: 'double',
    from_fixed: true,
    to_fixed: true,
    prettify_enabled: false
  });
  $("#teacher4").ionRangeSlider({
    hide_min_max: true,
    min: 1987,
    max: 2018,
    from: 2007,
    to: 2018,
    type: 'double',
    from_fixed: true,
    to_fixed: true,
    prettify_enabled: false
  });
  $("#teacher5").ionRangeSlider({
    hide_min_max: true,
    min: 1987,
    max: 2018,
    from: 2006,
    to: 2018,
    type: 'double',
    from_fixed: true,
    to_fixed: true,
    prettify_enabled: false
  });
  $("#teacher5").ionRangeSlider({
    hide_min_max: true,
    min: 1987,
    max: 2018,
    from: 2012,
    to: 2018,
    type: 'double',
    from_fixed: true,
    to_fixed: true,
    prettify_enabled: false
  });
  $("#teacher6").ionRangeSlider({
    hide_min_max: true,
    min: 1987,
    max: 2018,
    from: 1994,
    to: 2018,
    type: 'double',
    from_fixed: true,
    to_fixed: true,
    prettify_enabled: false
  });
  $("#teacher7").ionRangeSlider({
    hide_min_max: true,
    min: 1987,
    max: 2018,
    from: 1994,
    to: 2018,
    type: 'double',
    from_fixed: true,
    to_fixed: true,
    prettify_enabled: false
  });
  $("#teacher8").ionRangeSlider({
    hide_min_max: true,
    min: 1987,
    max: 2018,
    from: 1991,
    to: 2018,
    type: 'double',
    from_fixed: true,
    to_fixed: true,
    prettify_enabled: false
  });
  $("#teacher9").ionRangeSlider({
    hide_min_max: true,
    min: 1987,
    max: 2018,
    from: 1991,
    to: 2018,
    type: 'double',
    from_fixed: true,
    to_fixed: true,
    prettify_enabled: false
  });


  var values = [3, 10, 4, 6, 3, 9, 6, 9, 8, 7, 16, 13, 18, 11, 12, 9, 8, 8, 7, 11, 16, 17, 14, 10, 6, 6, 4, 5];
  var valuesFemale = [1, 10, 1, 5, 2, 1, 3, 2, 8, 7, 1, 3, 8, 11, 2, 19, 3, 8, 7, 1, 6, 7, 4, 0, 2, 4, 4, 5];
  var years = [21, 121, 11, 1, 5, 0, 4, 5, 7, 85, 24, 363];
  var maxHeight = window.innerHeight / 1.618;
  var maxValue = values.reduce(function(m, c) {
    return Math.max(m, c);
  }, 0);
  var el = document.getElementById('chart');
  var markup = valuesFemale.map(function(value, index) {
    return '<li style="height: ' + maxHeight / (maxValue * 2 / value) + 'px"\n       class="chart__columnFemale">\n   <span class=\'chart__column-yFemale\'>\n      ' + value + '\n    </span>\n  <span class=\'chart__column-xFemale\'>\n      ' + (1990 + index) + '\n    </span>\n </li>';
  }).join('');

  el.innerHTML = markup;

  el = document.getElementById('chart2');
  markup = values.map(function(value, index) {
    return '<li style="height: ' + maxHeight / (maxValue * 2 / value) + 'px"\n       class="chart__column">\n    <span class=\'chart__column-y\'>\n      ' + value + '\n    </span>\n    <span class=\'chart__column-x\'>\n      ' + (1990 + index) + '\n    </span>\n  </li>';
  }).join('');

  el.innerHTML = markup;

  function rnd(max = 1, min = 0, pow = 1) {
    const rnd = (pow === 1) ?
      Math.random() :
      Math.pow(Math.random(), pow);

    return (max - min) * rnd + min;
  }

  const variation = 20 * Math.PI / 180;


});


$(function() {
  $("#doughnutChart").drawDoughnutChart([{
      title: "Academics",
      value: 90,
      color: "#2C3E50"
    },
    {
      title: "Informatics",
      value: 32,
      color: "#FC4349"
    },
    {
      title: "Public",
      value: 9,
      color: "#6DBCDB"
    },
    {
      title: "Media",
      value: 20,
      color: "#c3f73a"
    },
    {
      title: "Advertising & Design",
      value: 226,
      color: "#afa2ff"
    },
    {
      title: "Not Specified",
      value: 402,
      color: "#FFD23F"
    }
  ]);
});
/*!
 * jquery.drawDoughnutChart.js
 * Version: 0.4.1(Beta)
 * Inspired by Chart.js(http://www.chartjs.org/)
 *
 * Copyright 2014 hiro
 * https://github.com/githiro/drawDoughnutChart
 * Released under the MIT license.
 *
 */
(function($, undefined) {
  $.fn.drawDoughnutChart = function(data, options) {
    var $this = this,
      W = $this.width(),
      H = $this.height(),
      centerX = W / 2,
      centerY = H / 2,
      cos = Math.cos,
      sin = Math.sin,
      PI = Math.PI,
      settings = $.extend({
        segmentShowStroke: true,
        segmentStrokeColor: "#0C1013",
        segmentStrokeWidth: 1,
        baseColor: "rgba(0,0,0,0.5)",
        baseOffset: 4,
        edgeOffset: 10, //offset from edge of $this
        percentageInnerCutout: 75,
        animation: true,
        animationSteps: 90,
        animationEasing: "easeInOutExpo",
        animateRotate: true,
        tipOffsetX: -8,
        tipOffsetY: -45,
        tipClass: "doughnutTip",
        summaryClass: "doughnutSummary",
        summaryTitle: "TOTAL:",
        summaryTitleClass: "doughnutSummaryTitle",
        summaryNumberClass: "doughnutSummaryNumber",
        beforeDraw: function() {},
        afterDrawed: function() {},
        onPathEnter: function(e, data) {},
        onPathLeave: function(e, data) {}
      }, options),
      animationOptions = {
        linear: function(t) {
          return t;
        },
        easeInOutExpo: function(t) {
          var v = t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
          return (v > 1) ? 1 : v;
        }
      },
      requestAnimFrame = function() {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
      }();

    settings.beforeDraw.call($this);

    var $svg = $('<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>').appendTo($this),
      $paths = [],
      easingFunction = animationOptions[settings.animationEasing],
      doughnutRadius = Min([H / 2, W / 2]) - settings.edgeOffset,
      cutoutRadius = doughnutRadius * (settings.percentageInnerCutout / 100),
      segmentTotal = 0;

    //Draw base doughnut
    var baseDoughnutRadius = doughnutRadius + settings.baseOffset,
      baseCutoutRadius = cutoutRadius - settings.baseOffset;
    $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
      .attr({
        "d": getHollowCirclePath(baseDoughnutRadius, baseCutoutRadius),
        "fill": settings.baseColor
      })
      .appendTo($svg);

    //Set up pie segments wrapper
    var $pathGroup = $(document.createElementNS('http://www.w3.org/2000/svg', 'g'));
    $pathGroup.attr({
      opacity: 0
    }).appendTo($svg);

    //Set up tooltip
    var $tip = $('<div class="' + settings.tipClass + '" />').appendTo('body').hide(),
      tipW = $tip.width(),
      tipH = $tip.height();

    //Set up center text area
    var summarySize = (cutoutRadius - (doughnutRadius - cutoutRadius)) * 2,
      $summary = $('<div class="' + settings.summaryClass + '" />')
      .appendTo($this)
      .css({
        width: summarySize + "px",
        height: summarySize + "px",
        "margin-left": -(summarySize / 2) + "px",
        "margin-top": -(summarySize / 2) + "px"
      });
    var $summaryTitle = $('<p class="' + settings.summaryTitleClass + '">' + settings.summaryTitle + '</p>').appendTo($summary);
    var $summaryNumber = $('<p class="' + settings.summaryNumberClass + '"></p>').appendTo($summary).css({
      opacity: 0
    });

    for (var i = 0, len = data.length; i < len; i++) {
      segmentTotal += data[i].value;
      $paths[i] = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
        .attr({
          "stroke-width": settings.segmentStrokeWidth,
          "stroke": settings.segmentStrokeColor,
          "fill": data[i].color,
          "data-order": i
        })
        .appendTo($pathGroup)
        .on("mouseenter", pathMouseEnter)
        .on("mouseleave", pathMouseLeave)
        .on("mousemove", pathMouseMove);
    }

    //Animation start
    animationLoop(drawPieSegments);

    //Functions
    function getHollowCirclePath(doughnutRadius, cutoutRadius) {
      //Calculate values for the path.
      //We needn't calculate startRadius, segmentAngle and endRadius, because base doughnut doesn't animate.
      var startRadius = -1.570, // -Math.PI/2
        segmentAngle = 6.2831, // 1 * ((99.9999/100) * (PI*2)),
        endRadius = 4.7131, // startRadius + segmentAngle
        startX = centerX + cos(startRadius) * doughnutRadius,
        startY = centerY + sin(startRadius) * doughnutRadius,
        endX2 = centerX + cos(startRadius) * cutoutRadius,
        endY2 = centerY + sin(startRadius) * cutoutRadius,
        endX = centerX + cos(endRadius) * doughnutRadius,
        endY = centerY + sin(endRadius) * doughnutRadius,
        startX2 = centerX + cos(endRadius) * cutoutRadius,
        startY2 = centerY + sin(endRadius) * cutoutRadius;
      var cmd = [
        'M', startX, startY,
        'A', doughnutRadius, doughnutRadius, 0, 1, 1, endX, endY, //Draw outer circle
        'Z', //Close path
        'M', startX2, startY2, //Move pointer
        'A', cutoutRadius, cutoutRadius, 0, 1, 0, endX2, endY2, //Draw inner circle
        'Z'
      ];
      cmd = cmd.join(' ');
      return cmd;
    };

    function pathMouseEnter(e) {
      var order = $(this).data().order;
      $tip.text(data[order].title + ": " + data[order].value)
        .fadeIn(200);
      settings.onPathEnter.apply($(this), [e, data]);
    }

    function pathMouseLeave(e) {
      $tip.hide();
      settings.onPathLeave.apply($(this), [e, data]);
    }

    function pathMouseMove(e) {
      $tip.css({
        top: e.pageY + settings.tipOffsetY,
        left: e.pageX - $tip.width() / 2 + settings.tipOffsetX
      });
    }

    function drawPieSegments(animationDecimal) {
      var startRadius = -PI / 2, //-90 degree
        rotateAnimation = 1;
      if (settings.animation && settings.animateRotate) rotateAnimation = animationDecimal; //count up between0~1

      drawDoughnutText(animationDecimal, segmentTotal);

      $pathGroup.attr("opacity", animationDecimal);

      //If data have only one value, we draw hollow circle(#1).
      if (data.length === 1 && (4.7122 < (rotateAnimation * ((data[0].value / segmentTotal) * (PI * 2)) + startRadius))) {
        $paths[0].attr("d", getHollowCirclePath(doughnutRadius, cutoutRadius));
        return;
      }
      for (var i = 0, len = data.length; i < len; i++) {
        var segmentAngle = rotateAnimation * ((data[i].value / segmentTotal) * (PI * 2)),
          endRadius = startRadius + segmentAngle,
          largeArc = ((endRadius - startRadius) % (PI * 2)) > PI ? 1 : 0,
          startX = centerX + cos(startRadius) * doughnutRadius,
          startY = centerY + sin(startRadius) * doughnutRadius,
          endX2 = centerX + cos(startRadius) * cutoutRadius,
          endY2 = centerY + sin(startRadius) * cutoutRadius,
          endX = centerX + cos(endRadius) * doughnutRadius,
          endY = centerY + sin(endRadius) * doughnutRadius,
          startX2 = centerX + cos(endRadius) * cutoutRadius,
          startY2 = centerY + sin(endRadius) * cutoutRadius;
        var cmd = [
          'M', startX, startY, //Move pointer
          'A', doughnutRadius, doughnutRadius, 0, largeArc, 1, endX, endY, //Draw outer arc path
          'L', startX2, startY2, //Draw line path(this line connects outer and innner arc paths)
          'A', cutoutRadius, cutoutRadius, 0, largeArc, 0, endX2, endY2, //Draw inner arc path
          'Z' //Cloth path
        ];
        $paths[i].attr("d", cmd.join(' '));
        startRadius += segmentAngle;
      }
    }

    function drawDoughnutText(animationDecimal, segmentTotal) {
      $summaryNumber
        .css({
          opacity: animationDecimal
        })
        .text((segmentTotal * animationDecimal).toFixed(1));
    }

    function animateFrame(cnt, drawData) {
      var easeAdjustedAnimationPercent = (settings.animation) ? CapValue(easingFunction(cnt), null, 0) : 1;
      drawData(easeAdjustedAnimationPercent);
    }

    function animationLoop(drawData) {
      var animFrameAmount = (settings.animation) ? 1 / CapValue(settings.animationSteps, Number.MAX_VALUE, 1) : 1,
        cnt = (settings.animation) ? 0 : 1;
      requestAnimFrame(function() {
        cnt += animFrameAmount;
        animateFrame(cnt, drawData);
        if (cnt <= 1) {
          requestAnimFrame(arguments.callee);
        } else {
          settings.afterDrawed.call($this);
        }
      });
    }

    function Max(arr) {
      return Math.max.apply(null, arr);
    }

    function Min(arr) {
      return Math.min.apply(null, arr);
    }

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function CapValue(valueToCap, maxValue, minValue) {
      if (isNumber(maxValue) && valueToCap > maxValue) return maxValue;
      if (isNumber(minValue) && valueToCap < minValue) return minValue;
      return valueToCap;
    }
    return $this;
  };
})(jQuery);


$(function() {
  $("#doughnutChart2").drawDoughnutChart([{
      title: "Female",
      value: 453,
      color: "#EE4266"
    },
    {
      title: "Male",
      value: 326,
      color: "#00FFF0"
    }
  ]);
});
/*!
 * jquery.drawDoughnutChart.js
 * Version: 0.4.1(Beta)
 * Inspired by Chart.js(http://www.chartjs.org/)
 *
 * Copyright 2014 hiro
 * https://github.com/githiro/drawDoughnutChart
 * Released under the MIT license.
 *
 */
;
(function($, undefined) {
  $.fn.drawDoughnutChart = function(data, options) {
    var $this = this,
      W = $this.width(),
      H = $this.height(),
      centerX = W / 2,
      centerY = H / 2,
      cos = Math.cos,
      sin = Math.sin,
      PI = Math.PI,
      settings = $.extend({
        segmentShowStroke: true,
        segmentStrokeColor: "#0C1013",
        segmentStrokeWidth: 1,
        baseColor: "rgba(0,0,0,0.5)",
        baseOffset: 4,
        edgeOffset: 10, //offset from edge of $this
        percentageInnerCutout: 75,
        animation: true,
        animationSteps: 90,
        animationEasing: "easeInOutExpo",
        animateRotate: true,
        tipOffsetX: -8,
        tipOffsetY: -45,
        tipClass: "doughnutTip",
        summaryClass: "doughnutSummary",
        summaryTitle: "TOTAL:",
        summaryTitleClass: "doughnutSummaryTitle",
        summaryNumberClass: "doughnutSummaryNumber",
        beforeDraw: function() {},
        afterDrawed: function() {},
        onPathEnter: function(e, data) {},
        onPathLeave: function(e, data) {}
      }, options),
      animationOptions = {
        linear: function(t) {
          return t;
        },
        easeInOutExpo: function(t) {
          var v = t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
          return (v > 1) ? 1 : v;
        }
      },
      requestAnimFrame = function() {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
      }();

    settings.beforeDraw.call($this);

    var $svg = $('<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>').appendTo($this),
      $paths = [],
      easingFunction = animationOptions[settings.animationEasing],
      doughnutRadius = Min([H / 2, W / 2]) - settings.edgeOffset,
      cutoutRadius = doughnutRadius * (settings.percentageInnerCutout / 100),
      segmentTotal = 0;

    //Draw base doughnut
    var baseDoughnutRadius = doughnutRadius + settings.baseOffset,
      baseCutoutRadius = cutoutRadius - settings.baseOffset;
    $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
      .attr({
        "d": getHollowCirclePath(baseDoughnutRadius, baseCutoutRadius),
        "fill": settings.baseColor
      })
      .appendTo($svg);

    //Set up pie segments wrapper
    var $pathGroup = $(document.createElementNS('http://www.w3.org/2000/svg', 'g'));
    $pathGroup.attr({
      opacity: 0
    }).appendTo($svg);

    //Set up tooltip
    var $tip = $('<div class="' + settings.tipClass + '" />').appendTo('body').hide(),
      tipW = $tip.width(),
      tipH = $tip.height();

    //Set up center text area
    var summarySize = (cutoutRadius - (doughnutRadius - cutoutRadius)) * 2,
      $summary = $('<div class="' + settings.summaryClass + '" />')
      .appendTo($this)
      .css({
        width: summarySize + "px",
        height: summarySize + "px",
        "margin-left": -(summarySize / 2) + "px",
        "margin-top": -(summarySize / 2) + "px"
      });
    var $summaryTitle = $('<p class="' + settings.summaryTitleClass + '">' + settings.summaryTitle + '</p>').appendTo($summary);
    var $summaryNumber = $('<p class="' + settings.summaryNumberClass + '"></p>').appendTo($summary).css({
      opacity: 0
    });

    for (var i = 0, len = data.length; i < len; i++) {
      segmentTotal += data[i].value;
      $paths[i] = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
        .attr({
          "stroke-width": settings.segmentStrokeWidth,
          "stroke": settings.segmentStrokeColor,
          "fill": data[i].color,
          "data-order": i
        })
        .appendTo($pathGroup)
        .on("mouseenter", pathMouseEnter)
        .on("mouseleave", pathMouseLeave)
        .on("mousemove", pathMouseMove);
    }

    //Animation start
    animationLoop(drawPieSegments);

    //Functions
    function getHollowCirclePath(doughnutRadius, cutoutRadius) {
      //Calculate values for the path.
      //We needn't calculate startRadius, segmentAngle and endRadius, because base doughnut doesn't animate.
      var startRadius = -1.570, // -Math.PI/2
        segmentAngle = 6.2831, // 1 * ((99.9999/100) * (PI*2)),
        endRadius = 4.7131, // startRadius + segmentAngle
        startX = centerX + cos(startRadius) * doughnutRadius,
        startY = centerY + sin(startRadius) * doughnutRadius,
        endX2 = centerX + cos(startRadius) * cutoutRadius,
        endY2 = centerY + sin(startRadius) * cutoutRadius,
        endX = centerX + cos(endRadius) * doughnutRadius,
        endY = centerY + sin(endRadius) * doughnutRadius,
        startX2 = centerX + cos(endRadius) * cutoutRadius,
        startY2 = centerY + sin(endRadius) * cutoutRadius;
      var cmd = [
        'M', startX, startY,
        'A', doughnutRadius, doughnutRadius, 0, 1, 1, endX, endY, //Draw outer circle
        'Z', //Close path
        'M', startX2, startY2, //Move pointer
        'A', cutoutRadius, cutoutRadius, 0, 1, 0, endX2, endY2, //Draw inner circle
        'Z'
      ];
      cmd = cmd.join(' ');
      return cmd;
    };

    function pathMouseEnter(e) {
      var order = $(this).data().order;
      $tip.text(data[order].title + ": " + data[order].value)
        .fadeIn(200);
      settings.onPathEnter.apply($(this), [e, data]);
    }

    function pathMouseLeave(e) {
      $tip.hide();
      settings.onPathLeave.apply($(this), [e, data]);
    }

    function pathMouseMove(e) {
      $tip.css({
        top: e.pageY + settings.tipOffsetY,
        left: e.pageX - $tip.width() / 2 + settings.tipOffsetX
      });
    }

    function drawPieSegments(animationDecimal) {
      var startRadius = -PI / 2, //-90 degree
        rotateAnimation = 1;
      if (settings.animation && settings.animateRotate) rotateAnimation = animationDecimal; //count up between0~1

      drawDoughnutText(animationDecimal, segmentTotal);

      $pathGroup.attr("opacity", animationDecimal);

      //If data have only one value, we draw hollow circle(#1).
      if (data.length === 1 && (4.7122 < (rotateAnimation * ((data[0].value / segmentTotal) * (PI * 2)) + startRadius))) {
        $paths[0].attr("d", getHollowCirclePath(doughnutRadius, cutoutRadius));
        return;
      }
      for (var i = 0, len = data.length; i < len; i++) {
        var segmentAngle = rotateAnimation * ((data[i].value / segmentTotal) * (PI * 2)),
          endRadius = startRadius + segmentAngle,
          largeArc = ((endRadius - startRadius) % (PI * 2)) > PI ? 1 : 0,
          startX = centerX + cos(startRadius) * doughnutRadius,
          startY = centerY + sin(startRadius) * doughnutRadius,
          endX2 = centerX + cos(startRadius) * cutoutRadius,
          endY2 = centerY + sin(startRadius) * cutoutRadius,
          endX = centerX + cos(endRadius) * doughnutRadius,
          endY = centerY + sin(endRadius) * doughnutRadius,
          startX2 = centerX + cos(endRadius) * cutoutRadius,
          startY2 = centerY + sin(endRadius) * cutoutRadius;
        var cmd = [
          'M', startX, startY, //Move pointer
          'A', doughnutRadius, doughnutRadius, 0, largeArc, 1, endX, endY, //Draw outer arc path
          'L', startX2, startY2, //Draw line path(this line connects outer and innner arc paths)
          'A', cutoutRadius, cutoutRadius, 0, largeArc, 0, endX2, endY2, //Draw inner arc path
          'Z' //Cloth path
        ];
        $paths[i].attr("d", cmd.join(' '));
        startRadius += segmentAngle;
      }
    }

    function drawDoughnutText(animationDecimal, segmentTotal) {
      $summaryNumber
        .css({
          opacity: animationDecimal
        })
        .text((segmentTotal * animationDecimal).toFixed(1));
    }

    function animateFrame(cnt, drawData) {
      var easeAdjustedAnimationPercent = (settings.animation) ? CapValue(easingFunction(cnt), null, 0) : 1;
      drawData(easeAdjustedAnimationPercent);
    }

    function animationLoop(drawData) {
      var animFrameAmount = (settings.animation) ? 1 / CapValue(settings.animationSteps, Number.MAX_VALUE, 1) : 1,
        cnt = (settings.animation) ? 0 : 1;
      requestAnimFrame(function() {
        cnt += animFrameAmount;
        animateFrame(cnt, drawData);
        if (cnt <= 1) {
          requestAnimFrame(arguments.callee);
        } else {
          settings.afterDrawed.call($this);
        }
      });
    }

    function Max(arr) {
      return Math.max.apply(null, arr);
    }

    function Min(arr) {
      return Math.min.apply(null, arr);
    }

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function CapValue(valueToCap, maxValue, minValue) {
      if (isNumber(maxValue) && valueToCap > maxValue) return maxValue;
      if (isNumber(minValue) && valueToCap < minValue) return minValue;
      return valueToCap;
    }
    return $this;
  };
})(jQuery);


$(function() {
  "use strict";

  var canvas = document.getElementById("canvasBack"),
    ctx = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight),
    hue = 217,
    stars = [],
    count = 0,
    maxStars = 1400;

  // Thanks @jackrugile for the performance tip! https://codepen.io/jackrugile/pen/BjBGoM
  // Cache gradient
  var canvas2 = document.createElement("canvas"),
    ctx2 = canvas2.getContext("2d");
  canvas2.width = 100;
  canvas2.height = 100;
  var half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  gradient2.addColorStop(0.025, "#fff");
  gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
  gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
  gradient2.addColorStop(1, "transparent");

  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();

  // End cache

  function random(min, max) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }

    if (min > max) {
      var hold = max;
      max = min;
      min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function maxOrbit(x, y) {
    var max = Math.max(x, y),
      diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
  }

  var Star = function() {
    this.orbitRadius = random(maxOrbit(w, h));
    this.radius = random(60, this.orbitRadius) / 12;
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / 200000;
    this.alpha = random(2, 10) / 10;

    count++;
    stars[count] = this;
  };

  Star.prototype.draw = function() {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(
      canvas2,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    );
    this.timePassed += this.speed;
  };

  for (var i = 0; i < maxStars; i++) {
    new Star();
  }

  function animation() {
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 1)";
    ctx.fillRect(0, 0, w, h);

    ctx.globalCompositeOperation = "lighter";
    for (var i = 1, l = stars.length; i < l; i++) {
      stars[i].draw();
    }

    window.requestAnimationFrame(animation);
  }

  animation();

});