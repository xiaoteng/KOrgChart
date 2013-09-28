/**
 * @fileoverview 
 * @author 腾骁<panfei.pf@taobao.com>
 * @module KOrgChart
 **/

KISSY.add(function () {
    /*
    ****Jquery to Kissy 适配层
    */
    (function (window, undefined) {
        var S = KISSY;
        var win = S.Env.host,
            EXPANDO = S.now(); //每个对象的cache的唯一标示
        var jQuery = (function () {
            // ====构建jQuery对象
            var jQuery = function (selector, context) {
                return new jQuery.fn.init(selector, context);
            }

            // ====jQuery对象原型
            jQuery.fn = jQuery.prototype = {
                constructor: jQuery,
                init: function (selector, context) {
                    if (S.isFunction(selector)) {
                        S.ready(selector);
                        return;
                    }
                    return S.mix(this, S.isObject(selector) ? S.one(selector) : S.all(selector));
                }
            };

            //==== jQuery.fn.init 的原型指向 jQuery.fn
            jQuery.fn.init.prototype = jQuery.fn;
            jQuery.fn.kMix = jQuery.kMix = function (j, k) {
                return S.mix(j, k);
            }

            //====扩展对象
            jQuery.kMix(jQuery, S);
            //====覆盖KIssy的原有函数
            jQuery.fn.extend = jQuery.extend = function () {
                var o = {},
                    l = arguments.length;
                for (var i = 0; i < l; i++) {
                    S.mix(o, arguments[i]);
                }
                return o;
            }
            //====缓存数据，相当于data函数
            jQuery.fn.cache = jQuery.cache = function (name, value) {
                var self = this;
                var cache = win[self.attr("key")],
                    key = '__ks_data_' + (EXPANDO++);
                if (!cache) self.attr("key", EXPANDO);

                if (value !== undefined) {
                    cache = win[EXPANDO] = win[EXPANDO] || {};
                    cache[name] = value;
                } else {
                    if (name !== undefined) {
                        return cache && cache[name];
                    } else {
                        cache = self[EXPANDO] = self[EXPANDO] || {};
                        return cache;
                    }
                }
                return this;
            }
            jQuery.fn.bind = function (e, f) {
                this.on(e, f);
            }

            //====按需要自行扩展
            jQuery.fn.is = function (selector) {
                return typeof selector === "string" ?
                    this[0].nodeName.toLowerCase() === selector.toLowerCase() : false;
            }
            jQuery.fn.find = function (selector) {
                var r = selector.indexOf(":first") > -1 ?
                    this.first(selector.replace(":first", "")) : selector.indexOf(":last") > -1 ?
                    this.last(selector.replace(":last", "")) : this.all(selector);
                return $(r);
            }
            jQuery.fn.nextAll = function () {
                var i = 0, matched = [], obj = this.next();
                while (obj) {
                    matched[i++] = obj[0];
                    obj = obj.next();
                }
                return $(matched);
            }
            return jQuery;
        })();
        window.jQuery = window.$ = jQuery;
    })(window);
}, { requires: ["node,dom"] });


