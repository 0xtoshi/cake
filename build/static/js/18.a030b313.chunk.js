(this.webpackJsonptai=this.webpackJsonptai||[]).push([[18],{1143:function(e,t,i){"use strict";var r=function(e,t){return Number(e.slice(0,-1*t.length))},s=function(e){return e.endsWith("px")?{value:e,type:"px",numeric:r(e,"px")}:e.endsWith("fr")?{value:e,type:"fr",numeric:r(e,"fr")}:e.endsWith("%")?{value:e,type:"%",numeric:r(e,"%")}:"auto"===e?{value:e,type:"auto"}:null},n=function(e){return e.split(" ").map(s)},a=function(e,t,i){return t.concat(i).map((function(t){return t.style[e]})).filter((function(e){return void 0!==e&&""!==e}))},o=function(e){for(var t=0;t<e.length;t++)if(e[t].numeric>0)return t;return null},l=function(){return!1},h=function(e,t,i){e.style[t]=i},u=function(e,t,i){var r=e[t];return void 0!==r?r:i};function c(e){var t;return(t=[]).concat.apply(t,Array.from(e.ownerDocument.styleSheets).map((function(e){var t=[];try{t=Array.from(e.cssRules||[])}catch(i){}return t}))).filter((function(t){var i=!1;try{i=e.matches(t.selectorText)}catch(r){}return i}))}var d=function(e,t,i){this.direction=e,this.element=t.element,this.track=t.track,"column"===e?(this.gridTemplateProp="grid-template-columns",this.gridGapProp="grid-column-gap",this.cursor=u(i,"columnCursor",u(i,"cursor","col-resize")),this.snapOffset=u(i,"columnSnapOffset",u(i,"snapOffset",30)),this.dragInterval=u(i,"columnDragInterval",u(i,"dragInterval",1)),this.clientAxis="clientX",this.optionStyle=u(i,"gridTemplateColumns")):"row"===e&&(this.gridTemplateProp="grid-template-rows",this.gridGapProp="grid-row-gap",this.cursor=u(i,"rowCursor",u(i,"cursor","row-resize")),this.snapOffset=u(i,"rowSnapOffset",u(i,"snapOffset",30)),this.dragInterval=u(i,"rowDragInterval",u(i,"dragInterval",1)),this.clientAxis="clientY",this.optionStyle=u(i,"gridTemplateRows")),this.onDragStart=u(i,"onDragStart",l),this.onDragEnd=u(i,"onDragEnd",l),this.onDrag=u(i,"onDrag",l),this.writeStyle=u(i,"writeStyle",h),this.startDragging=this.startDragging.bind(this),this.stopDragging=this.stopDragging.bind(this),this.drag=this.drag.bind(this),this.minSizeStart=t.minSizeStart,this.minSizeEnd=t.minSizeEnd,t.element&&(this.element.addEventListener("mousedown",this.startDragging),this.element.addEventListener("touchstart",this.startDragging))};d.prototype.getDimensions=function(){var e=this.grid.getBoundingClientRect(),t=e.width,i=e.height,r=e.top,s=e.bottom,n=e.left,a=e.right;"column"===this.direction?(this.start=r,this.end=s,this.size=i):"row"===this.direction&&(this.start=n,this.end=a,this.size=t)},d.prototype.getSizeAtTrack=function(e,t){return function(e,t,i,r){void 0===i&&(i=0),void 0===r&&(r=!1);var s=r?e+1:e;return t.slice(0,s).reduce((function(e,t){return e+t.numeric}),0)+(i?e*i:0)}(e,this.computedPixels,this.computedGapPixels,t)},d.prototype.getSizeOfTrack=function(e){return this.computedPixels[e].numeric},d.prototype.getRawTracks=function(){var e=a(this.gridTemplateProp,[this.grid],c(this.grid));if(!e.length){if(this.optionStyle)return this.optionStyle;throw Error("Unable to determine grid template tracks from styles.")}return e[0]},d.prototype.getGap=function(){var e=a(this.gridGapProp,[this.grid],c(this.grid));return e.length?e[0]:null},d.prototype.getRawComputedTracks=function(){return window.getComputedStyle(this.grid)[this.gridTemplateProp]},d.prototype.getRawComputedGap=function(){return window.getComputedStyle(this.grid)[this.gridGapProp]},d.prototype.setTracks=function(e){this.tracks=e.split(" "),this.trackValues=n(e)},d.prototype.setComputedTracks=function(e){this.computedTracks=e.split(" "),this.computedPixels=n(e)},d.prototype.setGap=function(e){this.gap=e},d.prototype.setComputedGap=function(e){var t,i;this.computedGap=e,this.computedGapPixels=(t="px",((i=this.computedGap).endsWith(t)?Number(i.slice(0,-1*t.length)):null)||0)},d.prototype.getMousePosition=function(e){return"touches"in e?e.touches[0][this.clientAxis]:e[this.clientAxis]},d.prototype.startDragging=function(e){if(!("button"in e)||0===e.button){e.preventDefault(),this.element?this.grid=this.element.parentNode:this.grid=e.target.parentNode,this.getDimensions(),this.setTracks(this.getRawTracks()),this.setComputedTracks(this.getRawComputedTracks()),this.setGap(this.getGap()),this.setComputedGap(this.getRawComputedGap());var t=this.trackValues.filter((function(e){return"%"===e.type})),i=this.trackValues.filter((function(e){return"fr"===e.type}));if(this.totalFrs=i.length,this.totalFrs){var r=o(i);null!==r&&(this.frToPixels=this.computedPixels[r].numeric/i[r].numeric)}if(t.length){var s=o(t);null!==s&&(this.percentageToPixels=this.computedPixels[s].numeric/t[s].numeric)}var n=this.getSizeAtTrack(this.track,!1)+this.start;if(this.dragStartOffset=this.getMousePosition(e)-n,this.aTrack=this.track-1,!(this.track<this.tracks.length-1))throw Error("Invalid track index: "+this.track+". Track must be between two other tracks and only "+this.tracks.length+" tracks were found.");this.bTrack=this.track+1,this.aTrackStart=this.getSizeAtTrack(this.aTrack,!1)+this.start,this.bTrackEnd=this.getSizeAtTrack(this.bTrack,!0)+this.start,this.dragging=!0,window.addEventListener("mouseup",this.stopDragging),window.addEventListener("touchend",this.stopDragging),window.addEventListener("touchcancel",this.stopDragging),window.addEventListener("mousemove",this.drag),window.addEventListener("touchmove",this.drag),this.grid.addEventListener("selectstart",l),this.grid.addEventListener("dragstart",l),this.grid.style.userSelect="none",this.grid.style.webkitUserSelect="none",this.grid.style.MozUserSelect="none",this.grid.style.pointerEvents="none",this.grid.style.cursor=this.cursor,window.document.body.style.cursor=this.cursor,this.onDragStart(this.direction,this.track)}},d.prototype.stopDragging=function(){this.dragging=!1,this.cleanup(),this.onDragEnd(this.direction,this.track),this.needsDestroy&&(this.element&&(this.element.removeEventListener("mousedown",this.startDragging),this.element.removeEventListener("touchstart",this.startDragging)),this.destroyCb(),this.needsDestroy=!1,this.destroyCb=null)},d.prototype.drag=function(e){var t=this.getMousePosition(e),i=this.getSizeOfTrack(this.track),r=this.aTrackStart+this.minSizeStart+this.dragStartOffset+this.computedGapPixels,s=this.bTrackEnd-this.minSizeEnd-this.computedGapPixels-(i-this.dragStartOffset);t<r+this.snapOffset&&(t=r),t>s-this.snapOffset&&(t=s),t<r?t=r:t>s&&(t=s);var n=t-this.aTrackStart-this.dragStartOffset-this.computedGapPixels,a=this.bTrackEnd-t+this.dragStartOffset-i-this.computedGapPixels;if(this.dragInterval>1){var o=Math.round(n/this.dragInterval)*this.dragInterval;a-=o-n,n=o}if(n<this.minSizeStart&&(n=this.minSizeStart),a<this.minSizeEnd&&(a=this.minSizeEnd),"px"===this.trackValues[this.aTrack].type)this.tracks[this.aTrack]=n+"px";else if("fr"===this.trackValues[this.aTrack].type)if(1===this.totalFrs)this.tracks[this.aTrack]="1fr";else{var l=n/this.frToPixels;this.tracks[this.aTrack]=l+"fr"}else if("%"===this.trackValues[this.aTrack].type){var h=n/this.percentageToPixels;this.tracks[this.aTrack]=h+"%"}if("px"===this.trackValues[this.bTrack].type)this.tracks[this.bTrack]=a+"px";else if("fr"===this.trackValues[this.bTrack].type)if(1===this.totalFrs)this.tracks[this.bTrack]="1fr";else{var u=a/this.frToPixels;this.tracks[this.bTrack]=u+"fr"}else if("%"===this.trackValues[this.bTrack].type){var c=a/this.percentageToPixels;this.tracks[this.bTrack]=c+"%"}var d=this.tracks.join(" ");this.writeStyle(this.grid,this.gridTemplateProp,d),this.onDrag(this.direction,this.track,d)},d.prototype.cleanup=function(){window.removeEventListener("mouseup",this.stopDragging),window.removeEventListener("touchend",this.stopDragging),window.removeEventListener("touchcancel",this.stopDragging),window.removeEventListener("mousemove",this.drag),window.removeEventListener("touchmove",this.drag),this.grid&&(this.grid.removeEventListener("selectstart",l),this.grid.removeEventListener("dragstart",l),this.grid.style.userSelect="",this.grid.style.webkitUserSelect="",this.grid.style.MozUserSelect="",this.grid.style.pointerEvents="",this.grid.style.cursor=""),window.document.body.style.cursor=""},d.prototype.destroy=function(e,t){void 0===e&&(e=!0),e||!1===this.dragging?(this.cleanup(),this.element&&(this.element.removeEventListener("mousedown",this.startDragging),this.element.removeEventListener("touchstart",this.startDragging)),t&&t()):(this.needsDestroy=!0,t&&(this.destroyCb=t))};var m=function(e,t,i){return t in e?e[t]:i},p=function(e,t){return function(i){if(i.track<1)throw Error("Invalid track index: "+i.track+". Track must be between two other tracks.");var r="column"===e?t.columnMinSizes||{}:t.rowMinSizes||{},s="column"===e?"columnMinSize":"rowMinSize";return new d(e,Object.assign({},{minSizeStart:m(r,i.track-1,u(t,s,u(t,"minSize",0))),minSizeEnd:m(r,i.track+1,u(t,s,u(t,"minSize",0)))},i),t)}},f=function(e){var t=this;this.columnGutters={},this.rowGutters={},this.options=Object.assign({},{columnGutters:e.columnGutters||[],rowGutters:e.rowGutters||[],columnMinSizes:e.columnMinSizes||{},rowMinSizes:e.rowMinSizes||{}},e),this.options.columnGutters.forEach((function(e){t.columnGutters[e.track]=p("column",t.options)(e)})),this.options.rowGutters.forEach((function(e){t.rowGutters[e.track]=p("row",t.options)(e)}))};f.prototype.addColumnGutter=function(e,t){this.columnGutters[t]&&this.columnGutters[t].destroy(),this.columnGutters[t]=p("column",this.options)({element:e,track:t})},f.prototype.addRowGutter=function(e,t){this.rowGutters[t]&&this.rowGutters[t].destroy(),this.rowGutters[t]=p("row",this.options)({element:e,track:t})},f.prototype.removeColumnGutter=function(e,t){var i=this;void 0===t&&(t=!0),this.columnGutters[e]&&this.columnGutters[e].destroy(t,(function(){delete i.columnGutters[e]}))},f.prototype.removeRowGutter=function(e,t){var i=this;void 0===t&&(t=!0),this.rowGutters[e]&&this.rowGutters[e].destroy(t,(function(){delete i.rowGutters[e]}))},f.prototype.handleDragStart=function(e,t,i){"column"===t?(this.columnGutters[i]&&this.columnGutters[i].destroy(),this.columnGutters[i]=p("column",this.options)({track:i}),this.columnGutters[i].startDragging(e)):"row"===t&&(this.rowGutters[i]&&this.rowGutters[i].destroy(),this.rowGutters[i]=p("row",this.options)({track:i}),this.rowGutters[i].startDragging(e))},f.prototype.destroy=function(e){var t=this;void 0===e&&(e=!0),Object.keys(this.columnGutters).forEach((function(i){return t.columnGutters[i].destroy(e,(function(){delete t.columnGutters[i]}))})),Object.keys(this.rowGutters).forEach((function(i){return t.rowGutters[i].destroy(e,(function(){delete t.rowGutters[i]}))}))},t.a=function(e){return new f(e)}},1144:function(e,t,i){var r=i(1145),s=i(511),n=i(392),a=s((function(e,t,i){return r(e,n(t)||0,i)}));e.exports=a},1145:function(e,t){e.exports=function(e,t,i){if("function"!=typeof e)throw new TypeError("Expected a function");return setTimeout((function(){e.apply(void 0,i)}),t)}},1146:function(e,t,i){},1532:function(e,t,i){"use strict";var r=i(798),s=i(818),n=i(799);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}var o={handle:function(e){var t=this;if(t.enabled){var i=Object(r.b)(),s=Object(r.a)(),n=t.rtlTranslate,a=e;a.originalEvent&&(a=a.originalEvent);var o=a.keyCode||a.charCode,l=t.params.keyboard.pageUpDown,h=l&&33===o,u=l&&34===o,c=37===o,d=39===o,m=38===o,p=40===o;if(!t.allowSlideNext&&(t.isHorizontal()&&d||t.isVertical()&&p||u))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&c||t.isVertical()&&m||h))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)&&(!s.activeElement||!s.activeElement.nodeName||"input"!==s.activeElement.nodeName.toLowerCase()&&"textarea"!==s.activeElement.nodeName.toLowerCase())){if(t.params.keyboard.onlyInViewport&&(h||u||c||d||m||p)){var f=!1;if(t.$el.parents("."+t.params.slideClass).length>0&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var g=t.$el,v=g[0].clientWidth,w=g[0].clientHeight,y=i.innerWidth,b=i.innerHeight,k=t.$el.offset();n&&(k.left-=t.$el[0].scrollLeft);for(var T=[[k.left,k.top],[k.left+v,k.top],[k.left,k.top+w],[k.left+v,k.top+w]],S=0;S<T.length;S+=1){var E=T[S];if(E[0]>=0&&E[0]<=y&&E[1]>=0&&E[1]<=b){if(0===E[0]&&0===E[1])continue;f=!0}}if(!f)return}t.isHorizontal()?((h||u||c||d)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((u||d)&&!n||(h||c)&&n)&&t.slideNext(),((h||c)&&!n||(u||d)&&n)&&t.slidePrev()):((h||u||m||p)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(u||p)&&t.slideNext(),(h||m)&&t.slidePrev()),t.emit("keyPress",o)}}},enable:function(){var e=this,t=Object(r.a)();e.keyboard.enabled||(Object(s.a)(t).on("keydown",e.keyboard.handle),e.keyboard.enabled=!0)},disable:function(){var e=this,t=Object(r.a)();e.keyboard.enabled&&(Object(s.a)(t).off("keydown",e.keyboard.handle),e.keyboard.enabled=!1)}};t.a={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function(){Object(n.a)(this,{keyboard:a({enabled:!1},o)})},on:{init:function(e){e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(e){e.keyboard.enabled&&e.keyboard.disable()}}}},1533:function(e,t,i){"use strict";var r=i(798),s=i(818),n=i(799);var a={lastScrollTime:Object(n.f)(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return Object(r.b)().navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e=Object(r.a)(),t="onwheel",i=t in e;if(!i){var s=e.createElement("div");s.setAttribute(t,"return;"),i="function"===typeof s.onwheel}return!i&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(i=e.implementation.hasFeature("Events.wheel","3.0")),i}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,r=0,s=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),r=10*t,s=10*i,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(r=e.deltaX),e.shiftKey&&!r&&(r=s,s=0),(r||s)&&e.deltaMode&&(1===e.deltaMode?(r*=40,s*=40):(r*=800,s*=800)),r&&!t&&(t=r<1?-1:1),s&&!i&&(i=s<1?-1:1),{spinX:t,spinY:i,pixelX:r,pixelY:s}},handleMouseEnter:function(){this.enabled&&(this.mouseEntered=!0)},handleMouseLeave:function(){this.enabled&&(this.mouseEntered=!1)},handle:function(e){var t=e,i=this;if(i.enabled){var r=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var o=i.$el;if("container"!==i.params.mousewheel.eventsTarget&&(o=Object(s.a)(i.params.mousewheel.eventsTarget)),!i.mouseEntered&&!o[0].contains(t.target)&&!r.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var l=0,h=i.rtlTranslate?-1:1,u=a.normalize(t);if(r.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(u.pixelX)>Math.abs(u.pixelY)))return!0;l=-u.pixelX*h}else{if(!(Math.abs(u.pixelY)>Math.abs(u.pixelX)))return!0;l=-u.pixelY}else l=Math.abs(u.pixelX)>Math.abs(u.pixelY)?-u.pixelX*h:-u.pixelY;if(0===l)return!0;r.invert&&(l=-l);var c=i.getTranslate()+l*r.sensitivity;if(c>=i.minTranslate()&&(c=i.minTranslate()),c<=i.maxTranslate()&&(c=i.maxTranslate()),(!!i.params.loop||!(c===i.minTranslate()||c===i.maxTranslate()))&&i.params.nested&&t.stopPropagation(),i.params.freeMode){var d={time:Object(n.f)(),delta:Math.abs(l),direction:Math.sign(l)},m=i.mousewheel.lastEventBeforeSnap,p=m&&d.time<m.time+500&&d.delta<=m.delta&&d.direction===m.direction;if(!p){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var f=i.getTranslate()+l*r.sensitivity,g=i.isBeginning,v=i.isEnd;if(f>=i.minTranslate()&&(f=i.minTranslate()),f<=i.maxTranslate()&&(f=i.maxTranslate()),i.setTransition(0),i.setTranslate(f),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!g&&i.isBeginning||!v&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var w=i.mousewheel.recentWheelEvents;w.length>=15&&w.shift();var y=w.length?w[w.length-1]:void 0,b=w[0];if(w.push(d),y&&(d.delta>y.delta||d.direction!==y.direction))w.splice(0);else if(w.length>=15&&d.time-b.time<500&&b.delta-d.delta>=1&&d.delta<=6){var k=l>0?.8:.2;i.mousewheel.lastEventBeforeSnap=d,w.splice(0),i.mousewheel.timeout=Object(n.e)((function(){i.slideToClosest(i.params.speed,!0,void 0,k)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=Object(n.e)((function(){i.mousewheel.lastEventBeforeSnap=d,w.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(p||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),f===i.minTranslate()||f===i.maxTranslate())return!0}}else{var T={time:Object(n.f)(),delta:Math.abs(l),direction:Math.sign(l),raw:e},S=i.mousewheel.recentWheelEvents;S.length>=2&&S.shift();var E=S.length?S[S.length-1]:void 0;if(S.push(T),E?(T.direction!==E.direction||T.delta>E.delta||T.time>E.time+150)&&i.mousewheel.animateSlider(T):i.mousewheel.animateSlider(T),i.mousewheel.releaseScroll(T))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1}},animateSlider:function(e){var t=this,i=Object(r.b)();return!(this.params.mousewheel.thresholdDelta&&e.delta<this.params.mousewheel.thresholdDelta)&&(!(this.params.mousewheel.thresholdTime&&Object(n.f)()-t.mousewheel.lastScrollTime<this.params.mousewheel.thresholdTime)&&(e.delta>=6&&Object(n.f)()-t.mousewheel.lastScrollTime<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),t.emit("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),t.emit("scroll",e.raw)),t.mousewheel.lastScrollTime=(new i.Date).getTime(),!1)))},releaseScroll:function(e){var t=this,i=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&i.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&i.releaseOnEdges)return!0;return!1},enable:function(){var e=this,t=a.event();if(e.params.cssMode)return e.wrapperEl.removeEventListener(t,e.mousewheel.handle),!0;if(!t)return!1;if(e.mousewheel.enabled)return!1;var i=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(i=Object(s.a)(e.params.mousewheel.eventsTarget)),i.on("mouseenter",e.mousewheel.handleMouseEnter),i.on("mouseleave",e.mousewheel.handleMouseLeave),i.on(t,e.mousewheel.handle),e.mousewheel.enabled=!0,!0},disable:function(){var e=this,t=a.event();if(e.params.cssMode)return e.wrapperEl.addEventListener(t,e.mousewheel.handle),!0;if(!t)return!1;if(!e.mousewheel.enabled)return!1;var i=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(i=Object(s.a)(e.params.mousewheel.eventsTarget)),i.off(t,e.mousewheel.handle),e.mousewheel.enabled=!1,!0}};t.a={name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:function(){Object(n.a)(this,{mousewheel:{enabled:!1,lastScrollTime:Object(n.f)(),lastEventBeforeSnap:void 0,recentWheelEvents:[],enable:a.enable,disable:a.disable,handle:a.handle,handleMouseEnter:a.handleMouseEnter,handleMouseLeave:a.handleMouseLeave,animateSlider:a.animateSlider,releaseScroll:a.releaseScroll}})},on:{init:function(e){!e.params.mousewheel.enabled&&e.params.cssMode&&e.mousewheel.disable(),e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(e){e.params.cssMode&&e.mousewheel.enable(),e.mousewheel.enabled&&e.mousewheel.disable()}}}},915:function(e,t,i){var r=i(503);e.exports=function(e){return(null==e?0:e.length)?r(e,1):[]}}}]);
//# sourceMappingURL=18.a030b313.chunk.js.map