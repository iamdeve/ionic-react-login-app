(this["webpackJsonpionic-react-login-app"]=this["webpackJsonpionic-react-login-app"]||[]).push([[29],{131:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_reorder",(function(){return a})),n.d(e,"ion_reorder_group",(function(){return c}));var r=n(1),i=n(17),o=n(14),s=n(164),a=function(){function t(t){Object(i.l)(this,t)}return t.prototype.onClick=function(t){t.preventDefault(),t.stopImmediatePropagation()},t.prototype.render=function(){var t=Object(o.b)(this),e="ios"===t?"reorder-three-outline":"reorder-two-sharp";return Object(i.j)(i.b,{class:t},Object(i.j)("slot",null,Object(i.j)("ion-icon",{name:e,lazy:!1,class:"reorder-icon",part:"icon"})))},t}();a.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var c=function(){function t(t){Object(i.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(i.f)(this,"ionItemReorder",7)}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.enable(!this.disabled)},t.prototype.connectedCallback=function(){return Object(r.a)(this,void 0,void 0,(function(){var t,e,i,o=this;return Object(r.c)(this,(function(r){switch(r.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):[3,2];case 1:e.scrollEl=r.sent(),r.label=2;case 2:return i=this,[4,Promise.resolve().then(n.bind(null,37))];case 3:return i.gesture=r.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return o.canStart(t)},onStart:function(t){return o.onStart(t)},onMove:function(t){return o.onMove(t)},onEnd:function(){return o.onEnd()}}),this.disabledChanged(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))},t.prototype.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var n=h(e,this.el);return!!n&&(t.data=n,!0)},t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,n=this.cachedHeights;n.length=0;var r=this.el,i=r.children;if(i&&0!==i.length){for(var o=0,a=0;a<i.length;a++){var c=i[a];o+=c.offsetHeight,n.push(o),c.$ionIndex=a}var h=r.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){var u=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=u.top+d,this.scrollElBottom=u.bottom-d}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(p),Object(s.b)()}},t.prototype.onMove=function(t){var e=this.selectedItemEl;if(e){var n=this.autoscroll(t.currentY),r=this.containerTop-n,i=this.containerBottom-n,o=Math.max(r,Math.min(t.currentY,i)),a=n+o-t.startY,c=o-r,h=this.itemIndexForTop(c);if(h!==this.lastToIndex){var d=l(e);this.lastToIndex=h,Object(s.c)(),this.reorderMove(d,h)}e.style.transform="translateY("+a+"px)"}},t.prototype.onEnd=function(){var t=this.selectedItemEl;if(this.state=2,t){var e=this.lastToIndex,n=l(t);e===n?this.completeSync():this.ionItemReorder.emit({from:n,to:e,complete:this.completeSync.bind(this)}),Object(s.d)()}else this.state=0},t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var n=this.el.children,r=n.length,i=this.lastToIndex,o=l(e);if(i!==o&&(!t||!0===t)){var s=o<i?n[i+1]:n[i];this.el.insertBefore(e,s)}Array.isArray(t)&&(t=f(t,o,i));for(var a=0;a<r;a++)n[a].style.transform="";e.style.transition="",e.classList.remove(p),this.selectedItemEl=void 0,this.state=0}return t},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,n=0;for(n=0;n<e.length&&!(e[n]>t);n++);return n},t.prototype.reorderMove=function(t,e){for(var n=this.selectedItemHeight,r=this.el.children,i=0;i<r.length;i++){var o="";i>t&&i<=e?o="translateY("+-n+"px)":i<t&&i>=e&&(o="translateY("+n+"px)"),r[i].style.transform=o}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-u:t>this.scrollElBottom&&(e=u),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.render=function(){var t,e=Object(o.b)(this);return Object(i.j)(i.b,{class:(t={},t[e]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),t}(),l=function(t){return t.$ionIndex},h=function(t,e){for(var n;t;){if((n=t.parentElement)===e)return t;t=n}},d=60,u=10,p="reorder-selected",f=function(t,e,n){var r=t[e];return t.splice(e,1),t.splice(n,0,r),t.slice()};c.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"},164:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},i=function(){r.selection()},o=function(){r.selectionStart()},s=function(){r.selectionChanged()},a=function(){r.selectionEnd()},c=function(t){r.impact(t)}}}]);
//# sourceMappingURL=29.9ff7630d.chunk.js.map