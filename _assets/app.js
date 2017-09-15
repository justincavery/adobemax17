"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function closeAllAccordions(clickedAccordion) {
    $(".accordion").not(clickedAccordion).each(function() {
        var $accordion = $(this),
            $openSections = $accordion.find(".accordion-item.is-active .accordion-content");
        $openSections.each(function(i, section) {
            $accordion.foundation("up", $(section))
        })
    })
}(function() {
    window.Attendease = {
        Views: {},
        Helpers: {}
    }, window.CoverallCrew = {}
}).call(this), ! function(global, factory) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w)
    } : factory(global)
}("undefined" != typeof window ? window : this, function(window, noGlobal) {
    function DOMEval(code, doc) {
        doc = doc || document;
        var script = doc.createElement("script");
        script.text = code, doc.head.appendChild(script).parentNode.removeChild(script)
    }

    function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length,
            type = jQuery.type(obj);
        return "function" !== type && !jQuery.isWindow(obj) && ("array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj)
    }

    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
    }

    function winnow(elements, qualifier, not) {
        return jQuery.isFunction(qualifier) ? jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not
        }) : qualifier.nodeType ? jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not
        }) : "string" != typeof qualifier ? jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not
        }) : risSimple.test(qualifier) ? jQuery.filter(qualifier, elements, not) : (qualifier = jQuery.filter(qualifier, elements), jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not && 1 === elem.nodeType
        }))
    }

    function sibling(cur, dir) {
        for (;
            (cur = cur[dir]) && 1 !== cur.nodeType;);
        return cur
    }

    function createOptions(options) {
        var object = {};
        return jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = !0
        }), object
    }

    function Identity(v) {
        return v
    }

    function Thrower(ex) {
        throw ex
    }

    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            value && jQuery.isFunction(method = value.promise) ? method.call(value).done(resolve).fail(reject) : value && jQuery.isFunction(method = value.then) ? method.call(value, resolve, reject) : resolve.apply(void 0, [value].slice(noValue))
        } catch (value) {
            reject.apply(void 0, [value])
        }
    }

    function completed() {
        document.removeEventListener("DOMContentLoaded", completed), window.removeEventListener("load", completed), jQuery.ready()
    }

    function Data() {
        this.expando = jQuery.expando + Data.uid++
    }

    function getData(data) {
        return "true" === data || "false" !== data && ("null" === data ? null : data === +data + "" ? +data : rbrace.test(data) ? JSON.parse(data) : data)
    }

    function dataAttr(elem, key, data) {
        var name;
        if (void 0 === data && 1 === elem.nodeType)
            if (name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase(), data = elem.getAttribute(name), "string" == typeof data) {
                try {
                    data = getData(data)
                } catch (e) {}
                dataUser.set(elem, key, data)
            } else data = void 0;
        return data
    }

    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale = 1,
            maxIterations = 20,
            currentValue = tween ? function() {
                return tween.cur()
            } : function() {
                return jQuery.css(elem, prop, "")
            },
            initial = currentValue(),
            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
            initialInUnit = (jQuery.cssNumber[prop] || "px" !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            unit = unit || initialInUnit[3], valueParts = valueParts || [], initialInUnit = +initial || 1;
            do scale = scale || ".5", initialInUnit /= scale, jQuery.style(elem, prop, initialInUnit + unit); while (scale !== (scale = currentValue() / initial) && 1 !== scale && --maxIterations)
        }
        return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted
    }

    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[nodeName];
        return display ? display : (temp = doc.body.appendChild(doc.createElement(nodeName)), display = jQuery.css(temp, "display"), temp.parentNode.removeChild(temp), "none" === display && (display = "block"), defaultDisplayMap[nodeName] = display, display)
    }

    function showHide(elements, show) {
        for (var display, elem, values = [], index = 0, length = elements.length; index < length; index++) elem = elements[index], elem.style && (display = elem.style.display, show ? ("none" === display && (values[index] = dataPriv.get(elem, "display") || null, values[index] || (elem.style.display = "")), "" === elem.style.display && isHiddenWithinTree(elem) && (values[index] = getDefaultDisplay(elem))) : "none" !== display && (values[index] = "none", dataPriv.set(elem, "display", display)));
        for (index = 0; index < length; index++) null != values[index] && (elements[index].style.display = values[index]);
        return elements
    }

    function getAll(context, tag) {
        var ret;
        return ret = "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : "undefined" != typeof context.querySelectorAll ? context.querySelectorAll(tag || "*") : [], void 0 === tag || tag && nodeName(context, tag) ? jQuery.merge([context], ret) : ret
    }

    function setGlobalEval(elems, refElements) {
        for (var i = 0, l = elems.length; i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"))
    }

    function buildFragment(elems, context, scripts, selection, ignored) {
        for (var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; i < l; i++)
            if (elem = elems[i], elem || 0 === elem)
                if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                else if (rhtml.test(elem)) {
            for (tmp = tmp || fragment.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2], j = wrap[0]; j--;) tmp = tmp.lastChild;
            jQuery.merge(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = ""
        } else nodes.push(context.createTextNode(elem));
        for (fragment.textContent = "", i = 0; elem = nodes[i++];)
            if (selection && jQuery.inArray(elem, selection) > -1) ignored && ignored.push(elem);
            else if (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp), scripts)
            for (j = 0; elem = tmp[j++];) rscriptType.test(elem.type || "") && scripts.push(elem);
        return fragment
    }

    function returnTrue() {
        return !0
    }

    function returnFalse() {
        return !1
    }

    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (err) {}
    }

    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if ("object" == typeof types) {
            "string" != typeof selector && (data = data || selector, selector = void 0);
            for (type in types) on(elem, type, selector, data, types[type], one);
            return elem
        }
        if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), fn === !1) fn = returnFalse;
        else if (!fn) return elem;
        return 1 === one && (origFn = fn, fn = function(event) {
            return jQuery().off(event), origFn.apply(this, arguments)
        }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector)
        })
    }

    function manipulationTarget(elem, content) {
        return nodeName(elem, "table") && nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? jQuery(">tbody", elem)[0] || elem : elem
    }

    function disableScript(elem) {
        return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem
    }

    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        return match ? elem.type = match[1] : elem.removeAttribute("type"), elem
    }

    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (1 === dest.nodeType) {
            if (dataPriv.hasData(src) && (pdataOld = dataPriv.access(src), pdataCur = dataPriv.set(dest, pdataOld), events = pdataOld.events)) {
                delete pdataCur.handle, pdataCur.events = {};
                for (type in events)
                    for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i])
            }
            dataUser.hasData(src) && (udataOld = dataUser.access(src), udataCur = jQuery.extend({}, udataOld), dataUser.set(dest, udataCur))
        }
    }

    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        "input" === nodeName && rcheckableType.test(src.type) ? dest.checked = src.checked : "input" !== nodeName && "textarea" !== nodeName || (dest.defaultValue = src.defaultValue)
    }

    function domManip(collection, args, callback, ignored) {
        args = concat.apply([], args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            isFunction = jQuery.isFunction(value);
        if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            isFunction && (args[0] = value.call(this, index, self.html())), domManip(self, args, callback, ignored)
        });
        if (l && (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
            for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; i < l; i++) node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(collection[i], node, i);
            if (hasScripts)
                for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++) node = scripts[i], rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : DOMEval(node.textContent.replace(rcleanScript, ""), doc))
        }
        return collection
    }

    function remove(elem, selector, keepData) {
        for (var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0; null != (node = nodes[i]); i++) keepData || 1 !== node.nodeType || jQuery.cleanData(getAll(node)), node.parentNode && (keepData && jQuery.contains(node.ownerDocument, node) && setGlobalEval(getAll(node, "script")), node.parentNode.removeChild(node));
        return elem
    }

    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        return computed = computed || getStyles(elem), computed && (ret = computed.getPropertyValue(name) || computed[name], "" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), !support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), void 0 !== ret ? ret + "" : ret
    }

    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function() {
                return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments)
            }
        }
    }

    function vendorPropName(name) {
        if (name in emptyStyle) return name;
        for (var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length; i--;)
            if (name = cssPrefixes[i] + capName, name in emptyStyle) return name
    }

    function finalPropName(name) {
        var ret = jQuery.cssProps[name];
        return ret || (ret = jQuery.cssProps[name] = vendorPropName(name) || name), ret
    }

    function setPositiveNumber(elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value
    }

    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i, val = 0;
        for (i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0; i < 4; i += 2) "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
        return val
    }

    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox, styles = getStyles(elem),
            val = curCSS(elem, name, styles),
            isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
        return rnumnonpx.test(val) ? val : (valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), "auto" === val && (val = elem["offset" + name[0].toUpperCase() + name.slice(1)]), val = parseFloat(val) || 0, val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px")
    }

    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing)
    }

    function schedule() {
        inProgress && (document.hidden === !1 && window.requestAnimationFrame ? window.requestAnimationFrame(schedule) : window.setTimeout(schedule, jQuery.fx.interval), jQuery.fx.tick())
    }

    function createFxNow() {
        return window.setTimeout(function() {
            fxNow = void 0
        }), fxNow = jQuery.now()
    }

    function genFx(type, includeWidth) {
        var which, i = 0,
            attrs = {
                height: type
            };
        for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth) which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
        return includeWidth && (attrs.opacity = attrs.width = type), attrs
    }

    function createTween(value, prop, animation) {
        for (var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length; index < length; index++)
            if (tween = collection[index].call(animation, prop, value)) return tween
    }

    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree(elem),
            dataShow = dataPriv.get(elem, "fxshow");
        opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), null == hooks.unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
            hooks.unqueued || oldfire()
        }), hooks.unqueued++, anim.always(function() {
            anim.always(function() {
                hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire()
            })
        }));
        for (prop in props)
            if (value = props[prop], rfxtypes.test(value)) {
                if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
                    if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
                    hidden = !0
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
            }
        if (propTween = !jQuery.isEmptyObject(props), propTween || !jQuery.isEmptyObject(orig)) {
            isBox && 1 === elem.nodeType && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], restoreDisplay = dataShow && dataShow.display, null == restoreDisplay && (restoreDisplay = dataPriv.get(elem, "display")), display = jQuery.css(elem, "display"), "none" === display && (restoreDisplay ? display = restoreDisplay : (showHide([elem], !0), restoreDisplay = elem.style.display || restoreDisplay, display = jQuery.css(elem, "display"), showHide([elem]))), ("inline" === display || "inline-block" === display && null != restoreDisplay) && "none" === jQuery.css(elem, "float") && (propTween || (anim.done(function() {
                style.display = restoreDisplay
            }), null == restoreDisplay && (display = style.display, restoreDisplay = "none" === display ? "" : display)), style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", anim.always(function() {
                style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2]
            })), propTween = !1;
            for (prop in orig) propTween || (dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = dataPriv.access(elem, "fxshow", {
                display: restoreDisplay
            }), toggle && (dataShow.hidden = !hidden), hidden && showHide([elem], !0), anim.done(function() {
                hidden || showHide([elem]), dataPriv.remove(elem, "fxshow");
                for (prop in orig) jQuery.style(elem, prop, orig[prop])
            })), propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = propTween.start, hidden && (propTween.end = propTween.start, propTween.start = 0))
        }
    }

    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props)
            if (name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], Array.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
                value = hooks.expand(value), delete props[name];
                for (index in value) index in props || (props[index] = value[index], specialEasing[index] = easing)
            } else specialEasing[name] = easing
    }

    function Animation(elem, properties, options) {
        var result, stopped, index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function() {
                delete tick.elem
            }),
            tick = function() {
                if (stopped) return !1;
                for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; index < length; index++) animation.tweens[index].run(percent);
                return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (length || deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation]), !1)
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(!0, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function(prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    return animation.tweens.push(tween), tween
                },
                stop: function(gotoEnd) {
                    var index = 0,
                        length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) return this;
                    for (stopped = !0; index < length; index++) animation.tweens[index].run(1);
                    return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]), this
                }
            }),
            props = animation.props;
        for (propFilter(props, animation.opts.specialEasing); index < length; index++)
            if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) return jQuery.isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)), result;
        return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always), jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        })), animation
    }

    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ")
    }

    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || ""
    }

    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) jQuery.each(obj, function(i, v) {
            traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v && null != v ? i : "") + "]", v, traditional, add)
        });
        else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj);
        else
            for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
    }

    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");
            var dataType, i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (jQuery.isFunction(func))
                for (; dataType = dataTypes[i++];) "+" === dataType[0] ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func)
        }
    }

    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        function inspect(dataType) {
            var selected;
            return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1)
            }), selected
        }
        var inspected = {},
            seekingTransport = structure === transports;
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
    }

    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
        return deep && jQuery.extend(!0, target, deep), target
    }

    function ajaxHandleResponses(s, jqXHR, responses) {
        for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
            "*" === dataTypes[0];) dataTypes.shift(), void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
        if (ct)
            for (type in contents)
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break
                }
        if (dataTypes[0] in responses) finalDataType = dataTypes[0];
        else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break
                }
                firstDataType || (firstDataType = type)
            }
            finalDataType = finalDataType || firstDataType
        }
        if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]
    }

    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {},
            dataTypes = s.dataTypes.slice();
        if (dataTypes[1])
            for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
        for (current = dataTypes.shift(); current;)
            if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift())
                if ("*" === current) current = prev;
                else if ("*" !== prev && prev !== current) {
            if (conv = converters[prev + " " + current] || converters["* " + current], !conv)
                for (conv2 in converters)
                    if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                        conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], dataTypes.unshift(tmp[1]));
                        break
                    }
            if (conv !== !0)
                if (conv && s["throws"]) response = conv(response);
                else try {
                    response = conv(response)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                    }
                }
        }
        return {
            state: "success",
            data: response
        }
    }
    var arr = [],
        document = window.document,
        getProto = Object.getPrototypeOf,
        slice = arr.slice,
        concat = arr.concat,
        push = arr.push,
        indexOf = arr.indexOf,
        class2type = {},
        toString = class2type.toString,
        hasOwn = class2type.hasOwnProperty,
        fnToString = hasOwn.toString,
        ObjectFunctionString = fnToString.call(Object),
        support = {},
        version = "3.2.1",
        jQuery = function(selector, context) {
            return new jQuery.fn.init(selector, context)
        },
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g,
        fcamelCase = function(all, letter) {
            return letter.toUpperCase()
        };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        length: 0,
        toArray: function() {
            return slice.call(this)
        },
        get: function(num) {
            return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num]
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            return ret.prevObject = this, ret
        },
        each: function(callback) {
            return jQuery.each(this, callback)
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem)
            }))
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(i) {
            var len = this.length,
                j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    }, jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = !1;
        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, i++), "object" == typeof target || jQuery.isFunction(target) || (target = {}), i === length && (target = this, i--); i < length; i++)
            if (null != (options = arguments[i]))
                for (name in options) src = target[name], copy = options[name], target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && Array.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
        return target
    }, jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(msg) {
            throw new Error(msg)
        },
        noop: function() {},
        isFunction: function(obj) {
            return "function" === jQuery.type(obj)
        },
        isWindow: function(obj) {
            return null != obj && obj === obj.window
        },
        isNumeric: function(obj) {
            var type = jQuery.type(obj);
            return ("number" === type || "string" === type) && !isNaN(obj - parseFloat(obj))
        },
        isPlainObject: function(obj) {
            var proto, Ctor;
            return !(!obj || "[object Object]" !== toString.call(obj) || (proto = getProto(obj)) && (Ctor = hasOwn.call(proto, "constructor") && proto.constructor, "function" != typeof Ctor || fnToString.call(Ctor) !== ObjectFunctionString))
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) return !1;
            return !0
        },
        type: function(obj) {
            return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj
        },
        globalEval: function(code) {
            DOMEval(code)
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj))
                for (length = obj.length; i < length && callback.call(obj[i], i, obj[i]) !== !1; i++);
            else
                for (i in obj)
                    if (callback.call(obj[i], i, obj[i]) === !1) break;
            return obj
        },
        trim: function(text) {
            return null == text ? "" : (text + "").replace(rtrim, "")
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret
        },
        inArray: function(elem, arr, i) {
            return null == arr ? -1 : indexOf.call(arr, elem, i)
        },
        merge: function(first, second) {
            for (var len = +second.length, j = 0, i = first.length; j < len; j++) first[i++] = second[j];
            return first.length = i, first
        },
        grep: function(elems, callback, invert) {
            for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++) callbackInverse = !callback(elems[i], i), callbackInverse !== callbackExpect && matches.push(elems[i]);
            return matches
        },
        map: function(elems, callback, arg) {
            var length, value, i = 0,
                ret = [];
            if (isArrayLike(elems))
                for (length = elems.length; i < length; i++) value = callback(elems[i], i, arg), null != value && ret.push(value);
            else
                for (i in elems) value = callback(elems[i], i, arg), null != value && ret.push(value);
            return concat.apply([], ret)
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            if ("string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn)) return args = slice.call(arguments, 2), proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)))
            }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy
        },
        now: Date.now,
        support: support
    }), "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]), jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase()
    });
    var Sizzle = function(window) {
        function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument,
                nodeType = context ? context.nodeType : 9;
            if (results = results || [], "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
            if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, documentIsHTML)) {
                if (11 !== nodeType && (match = rquickExpr.exec(selector)))
                    if (m = match[1]) {
                        if (9 === nodeType) {
                            if (!(elem = context.getElementById(m))) return results;
                            if (elem.id === m) return results.push(elem), results
                        } else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results
                    } else {
                        if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results;
                        if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results
                    }
                if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    if (1 !== nodeType) newContext = context, newSelector = selector;
                    else if ("object" !== context.nodeName.toLowerCase()) {
                        for ((nid = context.getAttribute("id")) ? nid = nid.replace(rcssescape, fcssescape) : context.setAttribute("id", nid = expando), groups = tokenize(selector), i = groups.length; i--;) groups[i] = "#" + nid + " " + toSelector(groups[i]);
                        newSelector = groups.join(","), newContext = rsibling.test(selector) && testContext(context.parentNode) || context
                    }
                    if (newSelector) try {
                        return push.apply(results, newContext.querySelectorAll(newSelector)), results
                    } catch (qsaError) {} finally {
                        nid === expando && context.removeAttribute("id")
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed)
        }

        function createCache() {
            function cache(key, value) {
                return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value
            }
            var keys = [];
            return cache
        }

        function markFunction(fn) {
            return fn[expando] = !0, fn
        }

        function assert(fn) {
            var el = document.createElement("fieldset");
            try {
                return !!fn(el)
            } catch (e) {
                return !1
            } finally {
                el.parentNode && el.parentNode.removeChild(el), el = null
            }
        }

        function addHandle(attrs, handler) {
            for (var arr = attrs.split("|"), i = arr.length; i--;) Expr.attrHandle[arr[i]] = handler
        }

        function siblingCheck(a, b) {
            var cur = b && a,
                diff = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (diff) return diff;
            if (cur)
                for (; cur = cur.nextSibling;)
                    if (cur === b) return -1;
            return a ? 1 : -1
        }

        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return "input" === name && elem.type === type
            }
        }

        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return ("input" === name || "button" === name) && elem.type === type
            }
        }

        function createDisabledPseudo(disabled) {
            return function(elem) {
                return "form" in elem ? elem.parentNode && elem.disabled === !1 ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled : elem.disabled === disabled : "label" in elem && elem.disabled === disabled
            }
        }

        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                return argument = +argument, markFunction(function(seed, matches) {
                    for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--;) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]))
                })
            })
        }

        function testContext(context) {
            return context && "undefined" != typeof context.getElementsByTagName && context
        }

        function setFilters() {}

        function toSelector(tokens) {
            for (var i = 0, len = tokens.length, selector = ""; i < len; i++) selector += tokens[i].value;
            return selector
        }

        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir,
                skip = combinator.next,
                key = skip || dir,
                checkNonElements = base && "parentNode" === key,
                doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                for (; elem = elem[dir];)
                    if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
                return !1
            } : function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                    for (; elem = elem[dir];)
                        if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0
                } else
                    for (; elem = elem[dir];)
                        if (1 === elem.nodeType || checkNonElements)
                            if (outerCache = elem[expando] || (elem[expando] = {}), uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem;
                            else {
                                if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
                                if (uniqueCache[key] = newCache, newCache[2] = matcher(elem, context, xml)) return !0
                            }
                return !1
            }
        }

        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                for (var i = matchers.length; i--;)
                    if (!matchers[i](elem, context, xml)) return !1;
                return !0
            } : matchers[0]
        }

        function multipleContexts(selector, contexts, results) {
            for (var i = 0, len = contexts.length; i < len; i++) Sizzle(selector, contexts[i], results);
            return results
        }

        function condense(unmatched, map, filter, context, xml) {
            for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; i < len; i++)(elem = unmatched[i]) && (filter && !filter(elem, context, xml) || (newUnmatched.push(elem), mapped && map.push(i)));
            return newUnmatched
        }

        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [],
                    postMap = [],
                    preexisting = results.length,
                    elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                    matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml),
                    matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter)
                    for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--;)(elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            for (temp = [], i = matcherOut.length; i--;)(elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml)
                        }
                        for (i = matcherOut.length; i--;)(elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem))
                    }
                } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut)
            })
        }

        function matcherFromTokens(tokens) {
            for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                    return elem === checkContext
                }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                    return indexOf(checkContext, elem) > -1
                }, implicitRelative, !0), matchers = [function(elem, context, xml) {
                    var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    return checkContext = null, ret
                }]; i < len; i++)
                if (matcher = Expr.relative[tokens[i].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)];
                else {
                    if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
                        for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++);
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                            value: " " === tokens[i - 2].type ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                    }
                    matchers.push(matcher)
                }
            return elementMatcher(matchers)
        }

        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0,
                byElement = elementMatchers.length > 0,
                superMatcher = function(seed, context, xml, results, outermost) {
                    var elem, j, matcher, matchedCount = 0,
                        i = "0",
                        unmatched = seed && [],
                        setMatched = [],
                        contextBackup = outermostContext,
                        elems = seed || byElement && Expr.find.TAG("*", outermost),
                        dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1,
                        len = elems.length;
                    for (outermost && (outermostContext = context === document || context || outermost); i !== len && null != (elem = elems[i]); i++) {
                        if (byElement && elem) {
                            for (j = 0, context || elem.ownerDocument === document || (setDocument(elem), xml = !documentIsHTML); matcher = elementMatchers[j++];)
                                if (matcher(elem, context || document, xml)) {
                                    results.push(elem);
                                    break
                                }
                            outermost && (dirruns = dirrunsUnique)
                        }
                        bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem))
                    }
                    if (matchedCount += i, bySet && i !== matchedCount) {
                        for (j = 0; matcher = setMatchers[j++];) matcher(unmatched, setMatched, context, xml);
                        if (seed) {
                            if (matchedCount > 0)
                                for (; i--;) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                            setMatched = condense(setMatched)
                        }
                        push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results)
                    }
                    return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched
                };
            return bySet ? markFunction(superMatcher) : superMatcher
        }
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date,
            preferredDoc = window.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            sortOrder = function(a, b) {
                return a === b && (hasDuplicate = !0), 0
            },
            hasOwn = {}.hasOwnProperty,
            arr = [],
            pop = arr.pop,
            push_native = arr.push,
            push = arr.push,
            slice = arr.slice,
            indexOf = function(list, elem) {
                for (var i = 0, len = list.length; i < len; i++)
                    if (list[i] === elem) return i;
                return -1
            },
            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            whitespace = "[\\x20\\t\\r\\n\\f]",
            identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
            pseudos = ":(" + identifier + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)",
            rwhitespace = new RegExp(whitespace + "+", "g"),
            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
            rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
            rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp("^" + identifier + "$"),
            matchExpr = {
                ID: new RegExp("^#(" + identifier + ")"),
                CLASS: new RegExp("^\\.(" + identifier + ")"),
                TAG: new RegExp("^(" + identifier + "|[*])"),
                ATTR: new RegExp("^" + attributes),
                PSEUDO: new RegExp("^" + pseudos),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + booleans + ")$", "i"),
                needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            },
            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,
            rnative = /^[^{]+\{\s*\[native \w/,
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            rsibling = /[+~]/,
            runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
            funescape = function(_, escaped, escapedWhitespace) {
                var high = "0x" + escaped - 65536;
                return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320)
            },
            rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            fcssescape = function(ch, asCodePoint) {
                return asCodePoint ? "\0" === ch ? "�" : ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " " : "\\" + ch
            },
            unloadHandler = function() {
                setDocument()
            },
            disabledAncestor = addCombinator(function(elem) {
                return elem.disabled === !0 && ("form" in elem || "label" in elem)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els))
                } : function(target, els) {
                    for (var j = target.length, i = 0; target[j++] = els[i++];);
                    target.length = j - 1
                }
            }
        }
        support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return !!documentElement && "HTML" !== documentElement.nodeName
        }, setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = document.documentElement, documentIsHTML = !isXML(document), preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow && (subWindow.addEventListener ? subWindow.addEventListener("unload", unloadHandler, !1) : subWindow.attachEvent && subWindow.attachEvent("onunload", unloadHandler)), support.attributes = assert(function(el) {
                return el.className = "i", !el.getAttribute("className")
            }), support.getElementsByTagName = assert(function(el) {
                return el.appendChild(document.createComment("")), !el.getElementsByTagName("*").length
            }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), support.getById = assert(function(el) {
                return docElem.appendChild(el).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length
            }), support.getById ? (Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    return elem.getAttribute("id") === attrId
                }
            }, Expr.find.ID = function(id, context) {
                if ("undefined" != typeof context.getElementById && documentIsHTML) {
                    var elem = context.getElementById(id);
                    return elem ? [elem] : []
                }
            }) : (Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    var node = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
                    return node && node.value === attrId
                }
            }, Expr.find.ID = function(id, context) {
                if ("undefined" != typeof context.getElementById && documentIsHTML) {
                    var node, i, elems, elem = context.getElementById(id);
                    if (elem) {
                        if (node = elem.getAttributeNode("id"), node && node.value === id) return [elem];
                        for (elems = context.getElementsByName(id), i = 0; elem = elems[i++];)
                            if (node = elem.getAttributeNode("id"), node && node.value === id) return [elem]
                    }
                    return []
                }
            }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                return "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0
            } : function(tag, context) {
                var elem, tmp = [],
                    i = 0,
                    results = context.getElementsByTagName(tag);
                if ("*" === tag) {
                    for (; elem = results[i++];) 1 === elem.nodeType && tmp.push(elem);
                    return tmp
                }
                return results
            }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                if ("undefined" != typeof context.getElementsByClassName && documentIsHTML) return context.getElementsByClassName(className)
            }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(el) {
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>", el.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), el.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), el.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), el.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), el.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]")
            }), assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document.createElement("input");
                input.setAttribute("type", "hidden"), el.appendChild(input).setAttribute("name", "D"), el.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), 2 !== el.querySelectorAll(":enabled").length && rbuggyQSA.push(":enabled", ":disabled"), docElem.appendChild(el).disabled = !0, 2 !== el.querySelectorAll(":disabled").length && rbuggyQSA.push(":enabled", ":disabled"), el.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:")
            })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
                support.disconnectedMatch = matches.call(el, "*"), matches.call(el, "[s!='']:x"), rbuggyMatches.push("!=", pseudos)
            }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = 9 === a.nodeType ? a.documentElement : a,
                    bup = b && b.parentNode;
                return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, sortOrder = hasCompare ? function(a, b) {
                if (a === b) return hasDuplicate = !0, 0;
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1)
            } : function(a, b) {
                if (a === b) return hasDuplicate = !0, 0;
                var cur, i = 0,
                    aup = a.parentNode,
                    bup = b.parentNode,
                    ap = [a],
                    bp = [b];
                if (!aup || !bup) return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                if (aup === bup) return siblingCheck(a, b);
                for (cur = a; cur = cur.parentNode;) ap.unshift(cur);
                for (cur = b; cur = cur.parentNode;) bp.unshift(cur);
                for (; ap[i] === bp[i];) i++;
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
            }, document) : document
        }, Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements)
        }, Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret
            } catch (e) {}
            return Sizzle(expr, document, null, [elem]).length > 0
        }, Sizzle.contains = function(context, elem) {
            return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem)
        }, Sizzle.attr = function(elem, name) {
            (elem.ownerDocument || elem) !== document && setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()],
                val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
        }, Sizzle.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape)
        }, Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg)
        }, Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [],
                j = 0,
                i = 0;
            if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
                for (; elem = results[i++];) elem === results[i] && (j = duplicates.push(i));
                for (; j--;) results.splice(duplicates[j], 1)
            }
            return sortInput = null, results
        }, getText = Sizzle.getText = function(elem) {
            var node, ret = "",
                i = 0,
                nodeType = elem.nodeType;
            if (nodeType) {
                if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                    if ("string" == typeof elem.textContent) return elem.textContent;
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem)
                } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue
            } else
                for (; node = elem[i++];) ret += getText(node);
            return ret
        }, Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4)
                },
                CHILD: function(match) {
                    return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3))
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return "*" === nodeNameSelector ? function() {
                        return !0
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                    }
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test("string" == typeof elem.className && elem.className || "undefined" != typeof elem.getAttribute && elem.getAttribute("class") || "")
                    })
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        return null == result ? "!=" === operator : !operator || (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator && (result === check || result.slice(0, check.length + 1) === check + "-"))
                    }
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = "nth" !== type.slice(0, 3),
                        forward = "last" !== type.slice(-4),
                        ofType = "of-type" === what;
                    return 1 === first && 0 === last ? function(elem) {
                        return !!elem.parentNode
                    } : function(elem, context, xml) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                            parent = elem.parentNode,
                            name = ofType && elem.nodeName.toLowerCase(),
                            useCache = !xml && !ofType,
                            diff = !1;
                        if (parent) {
                            if (simple) {
                                for (; dir;) {
                                    for (node = elem; node = node[dir];)
                                        if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                    start = dir = "only" === type && !start && "nextSibling"
                                }
                                return !0
                            }
                            if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                                for (node = parent, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();)
                                    if (1 === node.nodeType && ++diff && node === elem) {
                                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                                        break
                                    }
                            } else if (useCache && (node = elem, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), diff === !1)
                                for (;
                                    (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && (outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), uniqueCache[type] = [dirruns, diff]), node !== elem)););
                            return diff -= last, diff === first || diff % first === 0 && diff / first >= 0
                        }
                    }
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                        for (var idx, matched = fn(seed, argument), i = matched.length; i--;) idx = indexOf(seed, matched[i]), seed[idx] = !(matches[idx] = matched[i])
                    }) : function(elem) {
                        return fn(elem, 0, args)
                    }) : fn
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [],
                        results = [],
                        matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--;)(elem = unmatched[i]) && (seed[i] = !(matches[i] = elem))
                    }) : function(elem, context, xml) {
                        return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop()
                    }
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0
                    }
                }),
                contains: markFunction(function(text) {
                    return text = text.replace(runescape, funescape),
                        function(elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                        }
                }),
                lang: markFunction(function(lang) {
                    return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(),
                        function(elem) {
                            var elemLang;
                            do
                                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-");
                            while ((elem = elem.parentNode) && 1 === elem.nodeType);
                            return !1
                        }
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id
                },
                root: function(elem) {
                    return elem === docElem
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                },
                enabled: createDisabledPseudo(!1),
                disabled: createDisabledPseudo(!0),
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected
                },
                selected: function(elem) {
                    return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                        if (elem.nodeType < 6) return !1;
                    return !0
                },
                parent: function(elem) {
                    return !Expr.pseudos.empty(elem)
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName)
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName)
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return "input" === name && "button" === elem.type || "button" === name
                },
                text: function(elem) {
                    var attr;
                    return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase())
                },
                first: createPositionalPseudo(function() {
                    return [0]
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [length - 1]
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [argument < 0 ? argument + length : argument]
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    for (var i = 0; i < length; i += 2) matchIndexes.push(i);
                    return matchIndexes
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    for (var i = 1; i < length; i += 2) matchIndexes.push(i);
                    return matchIndexes
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    for (var i = argument < 0 ? argument + length : argument; --i >= 0;) matchIndexes.push(i);
                    return matchIndexes
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    for (var i = argument < 0 ? argument + length : argument; ++i < length;) matchIndexes.push(i);
                    return matchIndexes
                })
            }
        }, Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) Expr.pseudos[i] = createInputPseudo(i);
        for (i in {
                submit: !0,
                reset: !0
            }) Expr.pseudos[i] = createButtonPseudo(i);
        return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) {
                matched && !(match = rcomma.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({
                    value: matched,
                    type: match[0].replace(rtrim, " ")
                }), soFar = soFar.slice(matched.length));
                for (type in Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), tokens.push({
                    value: matched,
                    type: type,
                    matches: match
                }), soFar = soFar.slice(matched.length));
                if (!matched) break
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
        }, compile = Sizzle.compile = function(selector, match) {
            var i, setMatchers = [],
                elementMatchers = [],
                cached = compilerCache[selector + " "];
            if (!cached) {
                for (match || (match = tokenize(selector)), i = match.length; i--;) cached = matcherFromTokens(match[i]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), cached.selector = selector
            }
            return cached
        }, select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = "function" == typeof selector && selector,
                match = !seed && tokenize(selector = compiled.selector || selector);
            if (results = results || [], 1 === match.length) {
                if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                    if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], !context) return results;
                    compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length)
                }
                for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], !Expr.relative[type = token.type]);)
                    if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                        if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) return push.apply(results, seed), results;
                        break
                    }
            }
            return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context), results
        }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function(el) {
            return 1 & el.compareDocumentPosition(document.createElement("fieldset"))
        }), assert(function(el) {
            return el.innerHTML = "<a href='#'></a>", "#" === el.firstChild.getAttribute("href")
        }) || addHandle("type|href|height|width", function(elem, name, isXML) {
            if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2)
        }), support.attributes && assert(function(el) {
            return el.innerHTML = "<input/>", el.firstChild.setAttribute("value", ""), "" === el.firstChild.getAttribute("value")
        }) || addHandle("value", function(elem, name, isXML) {
            if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue
        }), assert(function(el) {
            return null == el.getAttribute("disabled")
        }) || addHandle(booleans, function(elem, name, isXML) {
            var val;
            if (!isXML) return elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
        }), Sizzle
    }(window);
    jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains, jQuery.escapeSelector = Sizzle.escape;
    var dir = function(elem, dir, until) {
            for (var matched = [], truncate = void 0 !== until;
                (elem = elem[dir]) && 9 !== elem.nodeType;)
                if (1 === elem.nodeType) {
                    if (truncate && jQuery(elem).is(until)) break;
                    matched.push(elem)
                }
            return matched
        },
        siblings = function(n, elem) {
            for (var matched = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && matched.push(n);
            return matched
        },
        rneedsContext = jQuery.expr.match.needsContext,
        rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        risSimple = /^.[^:#\[\.,]*$/;
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return 1 === elem.nodeType
        }))
    }, jQuery.fn.extend({
        find: function(selector) {
            var i, ret, len = this.length,
                self = this;
            if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++)
                    if (jQuery.contains(self[i], this)) return !0
            }));
            for (ret = this.pushStack([]), i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
            return len > 1 ? jQuery.uniqueSort(ret) : ret
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], !1))
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], !0))
        },
        is: function(selector) {
            return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        init = jQuery.fn.init = function(selector, context, root) {
            var match, elem;
            if (!selector) return this;
            if (root = root || rootjQuery, "string" == typeof selector) {
                if (match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : rquickExpr.exec(selector), !match || !match[1] && context) return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
                if (match[1]) {
                    if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
                        for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                    return this
                }
                return elem = document.getElementById(match[2]), elem && (this[0] = elem, this.length = 1), this
            }
            return selector.nodeType ? (this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? void 0 !== root.ready ? root.ready(selector) : selector(jQuery) : jQuery.makeArray(selector, this)
        };
    init.prototype = jQuery.fn, rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
        guaranteedUnique = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this),
                l = targets.length;
            return this.filter(function() {
                for (var i = 0; i < l; i++)
                    if (jQuery.contains(this, targets[i])) return !0
            })
        },
        closest: function(selectors, context) {
            var cur, i = 0,
                l = this.length,
                matched = [],
                targets = "string" != typeof selectors && jQuery(selectors);
            if (!rneedsContext.test(selectors))
                for (; i < l; i++)
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
                        if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break
                        }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched)
        },
        index: function(elem) {
            return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))))
        },
        addBack: function(selector) {
            return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
        }
    }), jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && 11 !== parent.nodeType ? parent : null
        },
        parents: function(elem) {
            return dir(elem, "parentNode")
        },
        parentsUntil: function(elem, i, until) {
            return dir(elem, "parentNode", until)
        },
        next: function(elem) {
            return sibling(elem, "nextSibling")
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling")
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling")
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling")
        },
        nextUntil: function(elem, i, until) {
            return dir(elem, "nextSibling", until)
        },
        prevUntil: function(elem, i, until) {
            return dir(elem, "previousSibling", until)
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem)
        },
        children: function(elem) {
            return siblings(elem.firstChild)
        },
        contents: function(elem) {
            return nodeName(elem, "iframe") ? elem.contentDocument : (nodeName(elem, "template") && (elem = elem.content || elem), jQuery.merge([], elem.childNodes))
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (matched = jQuery.filter(selector, matched)), this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(matched), rparentsprev.test(name) && matched.reverse()), this.pushStack(matched)
        }
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    jQuery.Callbacks = function(options) {
        options = "string" == typeof options ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [],
            queue = [],
            firingIndex = -1,
            fire = function() {
                for (locked = locked || options.once, fired = firing = !0; queue.length; firingIndex = -1)
                    for (memory = queue.shift(); ++firingIndex < list.length;) list[firingIndex].apply(memory[0], memory[1]) === !1 && options.stopOnFalse && (firingIndex = list.length, memory = !1);
                options.memory || (memory = !1), firing = !1, locked && (list = memory ? [] : "")
            },
            self = {
                add: function() {
                    return list && (memory && !firing && (firingIndex = list.length - 1, queue.push(memory)), function add(args) {
                        jQuery.each(args, function(_, arg) {
                            jQuery.isFunction(arg) ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== jQuery.type(arg) && add(arg)
                        })
                    }(arguments), memory && !firing && fire()), this
                },
                remove: function() {
                    return jQuery.each(arguments, function(_, arg) {
                        for (var index;
                            (index = jQuery.inArray(arg, list, index)) > -1;) list.splice(index, 1), index <= firingIndex && firingIndex--
                    }), this
                },
                has: function(fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0
                },
                empty: function() {
                    return list && (list = []), this
                },
                disable: function() {
                    return locked = queue = [], list = memory = "", this
                },
                disabled: function() {
                    return !list
                },
                lock: function() {
                    return locked = queue = [], memory || firing || (list = memory = ""), this
                },
                locked: function() {
                    return !!locked
                },
                fireWith: function(context, args) {
                    return locked || (args = args || [], args = [context, args.slice ? args.slice() : args], queue.push(args), firing || fire()), this
                },
                fire: function() {
                    return self.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!fired
                }
            };
        return self
    }, jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                    ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
                    ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]
                ],
                state = "pending",
                promise = {
                    state: function() {
                        return state
                    },
                    always: function() {
                        return deferred.done(arguments).fail(arguments), this
                    },
                    "catch": function(fn) {
                        return promise.then(null, fn)
                    },
                    pipe: function() {
                        var fns = arguments;
                        return jQuery.Deferred(function(newDefer) {
                            jQuery.each(tuples, function(i, tuple) {
                                var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                deferred[tuple[1]](function() {
                                    var returned = fn && fn.apply(this, arguments);
                                    returned && jQuery.isFunction(returned.promise) ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject) : newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments)
                                })
                            }), fns = null
                        }).promise()
                    },
                    then: function(onFulfilled, onRejected, onProgress) {
                        function resolve(depth, deferred, handler, special) {
                            return function() {
                                var that = this,
                                    args = arguments,
                                    mightThrow = function() {
                                        var returned, then;
                                        if (!(depth < maxDepth)) {
                                            if (returned = handler.apply(that, args), returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                            then = returned && ("object" == typeof returned || "function" == typeof returned) && returned.then, jQuery.isFunction(then) ? special ? then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)) : (maxDepth++, then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith))) : (handler !== Identity && (that = void 0, args = [returned]), (special || deferred.resolveWith)(that, args))
                                        }
                                    },
                                    process = special ? mightThrow : function() {
                                        try {
                                            mightThrow()
                                        } catch (e) {
                                            jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(e, process.stackTrace), depth + 1 >= maxDepth && (handler !== Thrower && (that = void 0, args = [e]), deferred.rejectWith(that, args))
                                        }
                                    };
                                depth ? process() : (jQuery.Deferred.getStackHook && (process.stackTrace = jQuery.Deferred.getStackHook()), window.setTimeout(process))
                            }
                        }
                        var maxDepth = 0;
                        return jQuery.Deferred(function(newDefer) {
                            tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)), tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity)), tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower))
                        }).promise()
                    },
                    promise: function(obj) {
                        return null != obj ? jQuery.extend(obj, promise) : promise
                    }
                },
                deferred = {};
            return jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2],
                    stateString = tuple[5];
                promise[tuple[1]] = list.add, stateString && list.add(function() {
                    state = stateString
                }, tuples[3 - i][2].disable, tuples[0][2].lock), list.add(tuple[3].fire), deferred[tuple[0]] = function() {
                    return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), this
                }, deferred[tuple[0] + "With"] = list.fireWith
            }), promise.promise(deferred), func && func.call(deferred, deferred), deferred
        },
        when: function(singleValue) {
            var remaining = arguments.length,
                i = remaining,
                resolveContexts = Array(i),
                resolveValues = slice.call(arguments),
                master = jQuery.Deferred(),
                updateFunc = function(i) {
                    return function(value) {
                        resolveContexts[i] = this, resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value, --remaining || master.resolveWith(resolveContexts, resolveValues)
                    }
                };
            if (remaining <= 1 && (adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining), "pending" === master.state() || jQuery.isFunction(resolveValues[i] && resolveValues[i].then))) return master.then();
            for (; i--;) adoptValue(resolveValues[i], updateFunc(i), master.reject);
            return master.promise()
        }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error, stack) {
        window.console && window.console.warn && error && rerrorNames.test(error.name) && window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack)
    }, jQuery.readyException = function(error) {
        window.setTimeout(function() {
            throw error
        })
    };
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
        return readyList.then(fn)["catch"](function(error) {
            jQuery.readyException(error)
        }), this
    }, jQuery.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(wait) {
            (wait === !0 ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, wait !== !0 && --jQuery.readyWait > 0 || readyList.resolveWith(document, [jQuery]))
        }
    }), jQuery.ready.then = readyList.then, "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed), window.addEventListener("load", completed));
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0,
                len = elems.length,
                bulk = null == key;
            if ("object" === jQuery.type(key)) {
                chainable = !0;
                for (i in key) access(elems, fn, i, key[i], !0, emptyGet, raw)
            } else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, key, value) {
                    return bulk.call(jQuery(elem), value)
                })), fn))
                for (; i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet
        },
        acceptData = function(owner) {
            return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType
        };
    Data.uid = 1, Data.prototype = {
        cache: function(owner) {
            var value = owner[this.expando];
            return value || (value = {}, acceptData(owner) && (owner.nodeType ? owner[this.expando] = value : Object.defineProperty(owner, this.expando, {
                value: value,
                configurable: !0
            }))), value
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if ("string" == typeof data) cache[jQuery.camelCase(data)] = value;
            else
                for (prop in data) cache[jQuery.camelCase(prop)] = data[prop];
            return cache
        },
        get: function(owner, key) {
            return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][jQuery.camelCase(key)]
        },
        access: function(owner, key, value) {
            return void 0 === key || key && "string" == typeof key && void 0 === value ? this.get(owner, key) : (this.set(owner, key, value), void 0 !== value ? value : key)
        },
        remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (void 0 !== cache) {
                if (void 0 !== key) {
                    Array.isArray(key) ? key = key.map(jQuery.camelCase) : (key = jQuery.camelCase(key), key = key in cache ? [key] : key.match(rnothtmlwhite) || []), i = key.length;
                    for (; i--;) delete cache[key[i]]
                }(void 0 === key || jQuery.isEmptyObject(cache)) && (owner.nodeType ? owner[this.expando] = void 0 : delete owner[this.expando])
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return void 0 !== cache && !jQuery.isEmptyObject(cache)
        }
    };
    var dataPriv = new Data,
        dataUser = new Data,
        rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem)
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data)
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name)
        },
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data)
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name)
        }
    }), jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0],
                attrs = elem && elem.attributes;
            if (void 0 === key) {
                if (this.length && (data = dataUser.get(elem), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
                    for (i = attrs.length; i--;) attrs[i] && (name = attrs[i].name, 0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)), dataAttr(elem, name, data[name])));
                    dataPriv.set(elem, "hasDataAttrs", !0)
                }
                return data
            }
            return "object" == typeof key ? this.each(function() {
                dataUser.set(this, key)
            }) : access(this, function(value) {
                var data;
                if (elem && void 0 === value) {
                    if (data = dataUser.get(elem, key), void 0 !== data) return data;
                    if (data = dataAttr(elem, key), void 0 !== data) return data
                } else this.each(function() {
                    dataUser.set(this, key, value)
                })
            }, null, value, arguments.length > 1, null, !0)
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key)
            })
        }
    }), jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) return type = (type || "fx") + "queue", queue = dataPriv.get(elem, type), data && (!queue || Array.isArray(data) ? queue = dataPriv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || []
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type),
                next = function() {
                    jQuery.dequeue(elem, type)
                };
            "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire()
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [type + "queue", key])
                })
            })
        }
    }), jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type)
            })
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type)
            })
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", [])
        },
        promise: function(type, obj) {
            var tmp, count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function() {
                    --count || defer.resolveWith(elements, [elements])
                };
            for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--;) tmp = dataPriv.get(elements[i], type + "queueHooks"), tmp && tmp.empty && (count++, tmp.empty.add(resolve));
            return resolve(), defer.promise(obj)
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
        cssExpand = ["Top", "Right", "Bottom", "Left"],
        isHiddenWithinTree = function(elem, el) {
            return elem = el || elem, "none" === elem.style.display || "" === elem.style.display && jQuery.contains(elem.ownerDocument, elem) && "none" === jQuery.css(elem, "display")
        },
        swap = function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
            ret = callback.apply(elem, args || []);
            for (name in options) elem.style[name] = old[name];
            return ret
        },
        defaultDisplayMap = {};
    jQuery.fn.extend({
        show: function() {
            return showHide(this, !0)
        },
        hide: function() {
            return showHide(this)
        },
        toggle: function(state) {
            return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
                isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide()
            })
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i,
        rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        rscriptType = /^$|\/(?:java|ecma)script/i,
        wrapMap = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td;
    var rhtml = /<|&#?\w+;/;
    ! function() {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild(document.createElement("div")),
            input = document.createElement("input");
        input.setAttribute("type", "radio"), input.setAttribute("checked", "checked"), input.setAttribute("name", "t"), div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue
    }();
    var documentElement = document.documentElement,
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (elemData)
                for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), selector && jQuery.find.matchesSelector(documentElement, selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
                        return "undefined" != typeof jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0
                    }), types = (types || "").match(rnothtmlwhite) || [""], t = types.length; t--;) tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, special.setup && special.setup.call(elem, data, namespaces, eventHandle) !== !1 || elem.addEventListener && elem.addEventListener(type, eventHandle)), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0)
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (elemData && (events = elemData.events)) {
                for (types = (types || "").match(rnothtmlwhite) || [""], t = types.length; t--;)
                    if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
                        for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--;) handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                        origCount && !handlers.length && (special.teardown && special.teardown.call(elem, namespaces, elemData.handle) !== !1 || jQuery.removeEvent(elem, type, elemData.handle), delete events[type])
                    } else
                        for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                jQuery.isEmptyObject(events) && dataPriv.remove(elem, "handle events")
            }
        },
        dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, event = jQuery.event.fix(nativeEvent),
                args = new Array(arguments.length),
                handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                special = jQuery.event.special[event.type] || {};
            for (args[0] = event, i = 1; i < arguments.length; i++) args[i] = arguments[i];
            if (event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== !1) {
                for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0;
                    (matched = handlerQueue[i++]) && !event.isPropagationStopped();)
                    for (event.currentTarget = matched.elem, j = 0;
                        (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) event.rnamespace && !event.rnamespace.test(handleObj.namespace) || (event.handleObj = handleObj, event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), void 0 !== ret && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
                return special.postDispatch && special.postDispatch.call(this, event), event.result
            }
        },
        handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;
            if (delegateCount && cur.nodeType && !("click" === event.type && event.button >= 1))
                for (; cur !== this; cur = cur.parentNode || this)
                    if (1 === cur.nodeType && ("click" !== event.type || cur.disabled !== !0)) {
                        for (matchedHandlers = [], matchedSelectors = {}, i = 0; i < delegateCount; i++) handleObj = handlers[i], sel = handleObj.selector + " ", void 0 === matchedSelectors[sel] && (matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length), matchedSelectors[sel] && matchedHandlers.push(handleObj);
                        matchedHandlers.length && handlerQueue.push({
                            elem: cur,
                            handlers: matchedHandlers
                        })
                    }
            return cur = this, delegateCount < handlers.length && handlerQueue.push({
                elem: cur,
                handlers: handlers.slice(delegateCount)
            }), handlerQueue
        },
        addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: !0,
                configurable: !0,
                get: jQuery.isFunction(hook) ? function() {
                    if (this.originalEvent) return hook(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[name]
                },
                set: function(value) {
                    Object.defineProperty(this, name, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: value
                    })
                }
            })
        },
        fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && nodeName(this, "input")) return this.click(), !1
                },
                _default: function(event) {
                    return nodeName(event.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result)
                }
            }
        }
    }, jQuery.removeEvent = function(elem, type, handle) {
        elem.removeEventListener && elem.removeEventListener(type, handle)
    }, jQuery.Event = function(src, props) {
        return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === !1 ? returnTrue : returnFalse, this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target, this.currentTarget = src.currentTarget, this.relatedTarget = src.relatedTarget) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), void(this[jQuery.expando] = !0)) : new jQuery.Event(src, props)
    }, jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, jQuery.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(event) {
            var button = event.button;
            return null == event.which && rkeyEvent.test(event.type) ? null != event.charCode ? event.charCode : event.keyCode : !event.which && void 0 !== button && rmouseEvent.test(event.type) ? 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0 : event.which
        }
    }, jQuery.event.addProp), jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;
                return related && (related === target || jQuery.contains(target, related)) || (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret
            }
        }
    }), jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn)
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1)
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
            if ("object" == typeof types) {
                for (type in types) this.off(type, selector, types[type]);
                return this
            }
            return selector !== !1 && "function" != typeof selector || (fn = selector, selector = void 0), fn === !1 && (fn = returnFalse), this.each(function() {
                jQuery.event.remove(this, types, fn, selector)
            })
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        rnoInnerhtml = /<script|<style|<link/i,
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html.replace(rxhtmlTag, "<$1></$2>")
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(!0),
                inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem)))
                for (destElements = getAll(clone), srcElements = getAll(elem), i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
            if (dataAndEvents)
                if (deepDataAndEvents)
                    for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
                else cloneCopyEvent(elem, clone);
            return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone
        },
        cleanData: function(elems) {
            for (var data, elem, type, special = jQuery.event.special, i = 0; void 0 !== (elem = elems[i]); i++)
                if (acceptData(elem)) {
                    if (data = elem[dataPriv.expando]) {
                        if (data.events)
                            for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                        elem[dataPriv.expando] = void 0
                    }
                    elem[dataUser.expando] && (elem[dataUser.expando] = void 0)
                }
        }
    }), jQuery.fn.extend({
        detach: function(selector) {
            return remove(this, selector, !0)
        },
        remove: function(selector) {
            return remove(this, selector)
        },
        text: function(value) {
            return access(this, function(value) {
                return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = value)
                })
            }, null, value, arguments.length)
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem)
                }
            })
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild)
                }
            })
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this)
            })
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling)
            })
        },
        empty: function() {
            for (var elem, i = 0; null != (elem = this[i]); i++) 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.textContent = "");
            return this
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            return dataAndEvents = null != dataAndEvents && dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
            })
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;
                if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                if ("string" == typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (; i < l; i++) elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
                        elem = 0
                    } catch (e) {}
                }
                elem && this.empty().append(value)
            }, null, value, arguments.length)
        },
        replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                jQuery.inArray(this, ignored) < 0 && (jQuery.cleanData(getAll(this)), parent && parent.replaceChild(elem, this))
            }, ignored)
        }
    }), jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; i <= last; i++) elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
            return this.pushStack(ret)
        }
    });
    var rmargin = /^margin/,
        rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
        getStyles = function(elem) {
            var view = elem.ownerDocument.defaultView;
            return view && view.opener || (view = window), view.getComputedStyle(elem)
        };
    ! function() {
        function computeStyleTests() {
            if (div) {
                div.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", div.innerHTML = "", documentElement.appendChild(container);
                var divStyle = window.getComputedStyle(div);
                pixelPositionVal = "1%" !== divStyle.top, reliableMarginLeftVal = "2px" === divStyle.marginLeft, boxSizingReliableVal = "4px" === divStyle.width, div.style.marginRight = "50%", pixelMarginRightVal = "4px" === divStyle.marginRight, documentElement.removeChild(container), div = null
            }
        }
        var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"),
            div = document.createElement("div");
        div.style && (div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = "content-box" === div.style.backgroundClip, container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", container.appendChild(div), jQuery.extend(support, {
            pixelPosition: function() {
                return computeStyleTests(), pixelPositionVal
            },
            boxSizingReliable: function() {
                return computeStyleTests(), boxSizingReliableVal
            },
            pixelMarginRight: function() {
                return computeStyleTests(), pixelMarginRightVal
            },
            reliableMarginLeft: function() {
                return computeStyleTests(), reliableMarginLeftVal
            }
        }))
    }();
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rcustomProp = /^--/,
        cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        cssPrefixes = ["Webkit", "Moz", "ms"],
        emptyStyle = document.createElement("div").style;
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return "" === ret ? "1" : ret
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(elem, name, value, extra) {
            if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                var ret, type, hooks, origName = jQuery.camelCase(name),
                    isCustomProp = rcustomProp.test(name),
                    style = elem.style;
                return isCustomProp || (name = finalPropName(origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value ? hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name] : (type = typeof value, "string" === type && (ret = rcssNum.exec(value)) && ret[1] && (value = adjustCSS(elem, name, ret), type = "number"), void(null != value && value === value && ("number" === type && (value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")), support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)) || (isCustomProp ? style.setProperty(name, value) : style[name] = value))))
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name),
                isCustomProp = rcustomProp.test(name);
            return isCustomProp || (name = finalPropName(origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (num = parseFloat(val), extra === !0 || isFinite(num) ? num || 0 : val) : val
        }
    }), jQuery.each(["height", "width"], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? getWidthOrHeight(elem, name, extra) : swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, name, extra)
                })
            },
            set: function(elem, value, extra) {
                var matches, styles = extra && getStyles(elem),
                    subtract = extra && augmentWidthOrHeight(elem, name, extra, "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles);
                return subtract && (matches = rcssNum.exec(value)) && "px" !== (matches[3] || "px") && (elem.style[name] = value, value = jQuery.css(elem, name)), setPositiveNumber(elem, value, subtract)
            }
        }
    }), jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left
        })) + "px"
    }), jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded
            }
        }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber)
    }), jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {},
                    i = 0;
                if (Array.isArray(name)) {
                    for (styles = getStyles(elem), len = name.length; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                    return map
                }
                return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
            }, name, value, arguments.length > 1)
        }
    }), jQuery.Tween = Tween, Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem, this.prop = prop, this.easing = easing || jQuery.easing._default, this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this
        }
    }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                return 1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop] ? tween.elem[tween.prop] : (result = jQuery.css(tween.elem, tween.prop, ""), result && "auto" !== result ? result : 0)
            },
            set: function(tween) {
                jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : 1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop] ? tween.elem[tween.prop] = tween.now : jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
            }
        }
    }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now)
        }
    }, jQuery.easing = {
        linear: function(p) {
            return p
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2
        },
        _default: "swing"
    }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;
    jQuery.Animation = jQuery.extend(Animation, {
            tweeners: {
                "*": [function(prop, value) {
                    var tween = this.createTween(prop, value);
                    return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween), tween
                }]
            },
            tweener: function(props, callback) {
                jQuery.isFunction(props) ? (callback = props, props = ["*"]) : props = props.match(rnothtmlwhite);
                for (var prop, index = 0, length = props.length; index < length; index++) prop = props[index], Animation.tweeners[prop] = Animation.tweeners[prop] || [], Animation.tweeners[prop].unshift(callback)
            },
            prefilters: [defaultPrefilter],
            prefilter: function(callback, prepend) {
                prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback)
            }
        }), jQuery.speed = function(speed, easing, fn) {
            var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
            };
            return jQuery.fx.off ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), null != opt.queue && opt.queue !== !0 || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
                jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue)
            }, opt
        }, jQuery.fn.extend({
            fadeTo: function(speed, to, easing, callback) {
                return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                    opacity: to
                }, speed, easing, callback)
            },
            animate: function(prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop),
                    optall = jQuery.speed(speed, easing, callback),
                    doAnimation = function() {
                        var anim = Animation(this, jQuery.extend({}, prop), optall);
                        (empty || dataPriv.get(this, "finish")) && anim.stop(!0)
                    };
                return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
            },
            stop: function(type, clearQueue, gotoEnd) {
                var stopQueue = function(hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop, stop(gotoEnd)
                };
                return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && type !== !1 && this.queue(type || "fx", []), this.each(function() {
                    var dequeue = !0,
                        index = null != type && type + "queueHooks",
                        timers = jQuery.timers,
                        data = dataPriv.get(this);
                    if (index) data[index] && data[index].stop && stopQueue(data[index]);
                    else
                        for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                    for (index = timers.length; index--;) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));
                    !dequeue && gotoEnd || jQuery.dequeue(this, type)
                })
            },
            finish: function(type) {
                return type !== !1 && (type = type || "fx"), this.each(function() {
                    var index, data = dataPriv.get(this),
                        queue = data[type + "queue"],
                        hooks = data[type + "queueHooks"],
                        timers = jQuery.timers,
                        length = queue ? queue.length : 0;
                    for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--;) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
                    for (index = 0; index < length; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                    delete data.finish
                })
            }
        }), jQuery.each(["toggle", "show", "hide"], function(i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function(speed, easing, callback) {
                return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
            }
        }), jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(name, props) {
            jQuery.fn[name] = function(speed, easing, callback) {
                return this.animate(props, speed, easing, callback)
            }
        }), jQuery.timers = [], jQuery.fx.tick = function() {
            var timer, i = 0,
                timers = jQuery.timers;
            for (fxNow = jQuery.now(); i < timers.length; i++) timer = timers[i], timer() || timers[i] !== timer || timers.splice(i--, 1);
            timers.length || jQuery.fx.stop(), fxNow = void 0
        }, jQuery.fx.timer = function(timer) {
            jQuery.timers.push(timer), jQuery.fx.start()
        }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
            inProgress || (inProgress = !0, schedule())
        }, jQuery.fx.stop = function() {
            inProgress = null
        }, jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, jQuery.fn.delay = function(time, type) {
            return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(next, hooks) {
                var timeout = window.setTimeout(next, time);
                hooks.stop = function() {
                    window.clearTimeout(timeout)
                }
            })
        },
        function() {
            var input = document.createElement("input"),
                select = document.createElement("select"),
                opt = select.appendChild(document.createElement("option"));
            input.type = "checkbox", support.checkOn = "" !== input.value, support.optSelected = opt.selected, input = document.createElement("input"), input.value = "t", input.type = "radio", support.radioValue = "t" === input.value
        }();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1)
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name)
            })
        }
    }), jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (3 !== nType && 8 !== nType && 2 !== nType) return "undefined" == typeof elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret))
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && "radio" === value && nodeName(elem, "input")) {
                        var val = elem.value;
                        return elem.setAttribute("type", value), val && (elem.value = val), value
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, i = 0,
                attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && 1 === elem.nodeType)
                for (; name = attrNames[i++];) elem.removeAttribute(name)
        }
    }), boolHook = {
        set: function(elem, value, name) {
            return value === !1 ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name
        }
    }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            return isXML || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, ret = null != getter(elem, name, isXML) ? lowercaseName : null, attrHandle[lowercaseName] = handle), ret
        }
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1)
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name]
            })
        }
    }), jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (3 !== nType && 8 !== nType && 2 !== nType) return 1 === nType && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name]
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), support.optSelected || (jQuery.propHooks.selected = {
        get: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.parentNode && parent.parentNode.selectedIndex, null
        },
        set: function(elem) {
            var parent = elem.parentNode;
            parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex)
        }
    }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this
    }), jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)))
            });
            if ("string" == typeof value && value)
                for (classes = value.match(rnothtmlwhite) || []; elem = this[i++];)
                    if (curValue = getClass(elem), cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " ") {
                        for (j = 0; clazz = classes[j++];) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                        finalValue = stripAndCollapse(cur), curValue !== finalValue && elem.setAttribute("class", finalValue)
                    }
            return this
        },
        removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof value && value)
                for (classes = value.match(rnothtmlwhite) || []; elem = this[i++];)
                    if (curValue = getClass(elem), cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " ") {
                        for (j = 0; clazz = classes[j++];)
                            for (; cur.indexOf(" " + clazz + " ") > -1;) cur = cur.replace(" " + clazz + " ", " ");
                        finalValue = stripAndCollapse(cur), curValue !== finalValue && elem.setAttribute("class", finalValue)
                    }
            return this
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal)
            }) : this.each(function() {
                var className, i, self, classNames;
                if ("string" === type)
                    for (i = 0, self = jQuery(this), classNames = value.match(rnothtmlwhite) || []; className = classNames[i++];) self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
                else void 0 !== value && "boolean" !== type || (className = getClass(this), className && dataPriv.set(this, "__className__", className), this.setAttribute && this.setAttribute("class", className || value === !1 ? "" : dataPriv.get(this, "__className__") || ""))
            })
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            for (className = " " + selector + " "; elem = this[i++];)
                if (1 === elem.nodeType && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return !0;
            return !1
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            return arguments.length ? (isFunction = jQuery.isFunction(value), this.each(function(i) {
                var val;
                1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, null == val ? val = "" : "number" == typeof val ? val += "" : Array.isArray(val) && (val = jQuery.map(val, function(value) {
                    return null == value ? "" : value + ""
                })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], hooks && "set" in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val))
            })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value, "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret)) : void 0
        }
    }), jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return null != val ? val : stripAndCollapse(jQuery.text(elem))
                }
            },
            select: {
                get: function(elem) {
                    var value, option, i, options = elem.options,
                        index = elem.selectedIndex,
                        one = "select-one" === elem.type,
                        values = one ? null : [],
                        max = one ? index + 1 : options.length;
                    for (i = index < 0 ? max : one ? index : 0; i < max; i++)
                        if (option = options[i], (option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                            if (value = jQuery(option).val(), one) return value;
                            values.push(value)
                        }
                    return values
                },
                set: function(elem, value) {
                    for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--;) option = options[i], (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) && (optionSet = !0);
                    return optionSet || (elem.selectedIndex = -1), values
                }
            }
        }
    }), jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1
            }
        }, support.checkOn || (jQuery.valHooks[this].get = function(elem) {
            return null === elem.getAttribute("value") ? "on" : elem.value
        })
    });
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document],
                type = hasOwn.call(event, "type") ? event.type : event,
                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, data) !== !1)) {
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), tmp = cur;
                    tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                }
                for (i = 0;
                    (cur = eventPath[i++]) && !event.isPropagationStopped();) event.type = i > 1 ? bubbleType : special.bindType || type, handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle"), handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && acceptData(cur) && (event.result = handle.apply(cur, data), event.result === !1 && event.preventDefault());
                return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && special._default.apply(eventPath.pop(), data) !== !1 || !acceptData(elem) || ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)), event.result
            }
        },
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event, event, {
                type: type,
                isSimulated: !0
            });
            jQuery.event.trigger(e, null, elem)
        }
    }), jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this)
            })
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, !0)
        }
    }), jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
        }
    }), jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
        }
    }), support.focusin = "onfocusin" in window, support.focusin || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(orig, fix) {
        var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event))
        };
        jQuery.event.special[fix] = {
            setup: function() {
                var doc = this.ownerDocument || this,
                    attaches = dataPriv.access(doc, fix);
                attaches || doc.addEventListener(orig, handler, !0), dataPriv.access(doc, fix, (attaches || 0) + 1)
            },
            teardown: function() {
                var doc = this.ownerDocument || this,
                    attaches = dataPriv.access(doc, fix) - 1;
                attaches ? dataPriv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), dataPriv.remove(doc, fix))
            }
        }
    });
    var location = window.location,
        nonce = jQuery.now(),
        rquery = /\?/;
    jQuery.parseXML = function(data) {
        var xml;
        if (!data || "string" != typeof data) return null;
        try {
            xml = (new window.DOMParser).parseFromString(data, "text/xml")
        } catch (e) {
            xml = void 0
        }
        return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml
    };
    var rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function(a, traditional) {
        var prefix, s = [],
            add = function(key, valueOrFunction) {
                var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(null == value ? "" : value)
            };
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
            add(this.name, this.value)
        });
        else
            for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
        return s.join("&")
    }, jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return null == val ? null : Array.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    }
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                }
            }).get()
        }
    });
    var r20 = /%20/g,
        rhash = /#.*$/,
        rantiCache = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        prefilters = {},
        transports = {},
        allTypes = "*/".concat("*"),
        originAnchor = document.createElement("a");
    originAnchor.href = location.href, jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                completed || (completed = !0, timeoutTimer && window.clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && status < 300 || 304 === status, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), modified && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, !status && statusText || (statusText = "error", status < 0 && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
            }
            "object" == typeof url && (options = url, url = void 0), options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options),
                callbackContext = s.context || s,
                globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),
                statusCode = s.statusCode || {},
                requestHeaders = {},
                requestHeadersNames = {},
                strAbort = "canceled",
                jqXHR = {
                    readyState: 0,
                    getResponseHeader: function(key) {
                        var match;
                        if (completed) {
                            if (!responseHeaders)
                                for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);) responseHeaders[match[1].toLowerCase()] = match[2];
                            match = responseHeaders[key.toLowerCase()]
                        }
                        return null == match ? null : match
                    },
                    getAllResponseHeaders: function() {
                        return completed ? responseHeadersString : null
                    },
                    setRequestHeader: function(name, value) {
                        return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, requestHeaders[name] = value), this
                    },
                    overrideMimeType: function(type) {
                        return null == completed && (s.mimeType = type), this
                    },
                    statusCode: function(map) {
                        var code;
                        if (map)
                            if (completed) jqXHR.always(map[jqXHR.status]);
                            else
                                for (code in map) statusCode[code] = [statusCode[code], map[code]];
                        return this
                    },
                    abort: function(statusText) {
                        var finalText = statusText || strAbort;
                        return transport && transport.abort(finalText), done(0, finalText), this
                    }
                };
            if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""], null == s.crossDomain) {
                urlAnchor = document.createElement("a");
                try {
                    urlAnchor.href = s.url, urlAnchor.href = urlAnchor.href, s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host
                } catch (e) {
                    s.crossDomain = !0
                }
            }
            if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), completed) return jqXHR;
            fireGlobals = jQuery.event && s.global, fireGlobals && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url.replace(rhash, ""), s.hasContent ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(r20, "+")) : (uncached = s.url.slice(cacheURL.length), s.data && (cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), s.cache === !1 && (cacheURL = cacheURL.replace(rantiCache, "$1"), uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached), s.url = cacheURL + uncached), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || completed)) return jqXHR.abort();
            if (strAbort = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                if (jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), completed) return jqXHR;
                s.async && s.timeout > 0 && (timeoutTimer = window.setTimeout(function() {
                    jqXHR.abort("timeout")
                }, s.timeout));
                try {
                    completed = !1, transport.send(requestHeaders, done)
                } catch (e) {
                    if (completed) throw e;
                    done(-1, e)
                }
            } else done(-1, "No Transport");
            return jqXHR
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json")
        },
        getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script")
        }
    }), jQuery.each(["get", "post"], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url))
        }
    }), jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            return this[0] && (jQuery.isFunction(html) && (html = html.call(this[0])), wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() {
                for (var elem = this; elem.firstElementChild;) elem = elem.firstElementChild;
                return elem
            }).append(this)), this
        },
        wrapInner: function(html) {
            return jQuery.isFunction(html) ? this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i))
            }) : this.each(function() {
                var self = jQuery(this),
                    contents = self.contents();
                contents.length ? contents.wrapAll(html) : self.append(html)
            })
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
            })
        },
        unwrap: function(selector) {
            return this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes)
            }), this
        }
    }), jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem)
    }, jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
    }, jQuery.ajaxSettings.xhr = function() {
        try {
            return new window.XMLHttpRequest
        } catch (e) {}
    };
    var xhrSuccessStatus = {
            0: 200,
            1223: 204
        },
        xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i, xhr = options.xhr();
                if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields)
                    for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
                for (i in headers) xhr.setRequestHeader(i, headers[i]);
                callback = function(type) {
                    return function() {
                        callback && (callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null, "abort" === type ? xhr.abort() : "error" === type ? "number" != typeof xhr.status ? complete(0, "error") : complete(xhr.status, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                            binary: xhr.response
                        } : {
                            text: xhr.responseText
                        }, xhr.getAllResponseHeaders()))
                    }
                }, xhr.onload = callback(), errorCallback = xhr.onerror = callback("error"), void 0 !== xhr.onabort ? xhr.onabort = errorCallback : xhr.onreadystatechange = function() {
                    4 === xhr.readyState && window.setTimeout(function() {
                        callback && errorCallback()
                    })
                }, callback = callback("abort");
                try {
                    xhr.send(options.hasContent && options.data || null)
                } catch (e) {
                    if (callback) throw e
                }
            },
            abort: function() {
                callback && callback()
            }
        }
    }), jQuery.ajaxPrefilter(function(s) {
        s.crossDomain && (s.contents.script = !1)
    }), jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                return jQuery.globalEval(text), text
            }
        }
    }), jQuery.ajaxPrefilter("script", function(s) {
        void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET")
    }), jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove(), callback = null, evt && complete("error" === evt.type ? 404 : 200, evt.type)
                    }), document.head.appendChild(script[0])
                },
                abort: function() {
                    callback && callback()
                }
            }
        }
    });
    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                return this[callback] = !0, callback
            }
        }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
            if (jsonProp || "jsonp" === s.dataTypes[0]) return callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
                return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0]
            }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
                responseContainer = arguments
            }, jqXHR.always(function() {
                void 0 === overwritten ? jQuery(window).removeProp(callbackName) : window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0
            }), "script"
        }), support.createHTMLDocument = function() {
            var body = document.implementation.createHTMLDocument("").body;
            return body.innerHTML = "<form></form><form></form>", 2 === body.childNodes.length
        }(), jQuery.parseHTML = function(data, context, keepScripts) {
            if ("string" != typeof data) return [];
            "boolean" == typeof context && (keepScripts = context, context = !1);
            var base, parsed, scripts;
            return context || (support.createHTMLDocument ? (context = document.implementation.createHTMLDocument(""), base = context.createElement("base"), base.href = document.location.href, context.head.appendChild(base)) : context = document), parsed = rsingleTag.exec(data), scripts = !keepScripts && [], parsed ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes))
        }, jQuery.fn.load = function(url, params, callback) {
            var selector, type, response, self = this,
                off = url.indexOf(" ");
            return off > -1 && (selector = stripAndCollapse(url.slice(off)), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = void 0) : params && "object" == typeof params && (type = "POST"), self.length > 0 && jQuery.ajax({
                url: url,
                type: type || "GET",
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
            }).always(callback && function(jqXHR, status) {
                self.each(function() {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR])
                })
            }), this
        }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
            jQuery.fn[type] = function(fn) {
                return this.on(type, fn)
            }
        }),
        jQuery.expr.pseudos.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem
            }).length
        }, jQuery.offset = {
            setOffset: function(elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                    curElem = jQuery(elem),
                    props = {};
                "static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem, i, jQuery.extend({}, curOffset))), null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props)
            }
        }, jQuery.fn.extend({
            offset: function(options) {
                if (arguments.length) return void 0 === options ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i)
                });
                var doc, docElem, rect, win, elem = this[0];
                return elem ? elem.getClientRects().length ? (rect = elem.getBoundingClientRect(), doc = elem.ownerDocument, docElem = doc.documentElement, win = doc.defaultView, {
                    top: rect.top + win.pageYOffset - docElem.clientTop,
                    left: rect.left + win.pageXOffset - docElem.clientLeft
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var offsetParent, offset, elem = this[0],
                        parentOffset = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset = {
                        top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", !0),
                        left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", !0)
                    }), {
                        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var offsetParent = this.offsetParent; offsetParent && "static" === jQuery.css(offsetParent, "position");) offsetParent = offsetParent.offsetParent;
                    return offsetParent || documentElement
                })
            }
        }), jQuery.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(method, prop) {
            var top = "pageYOffset" === prop;
            jQuery.fn[method] = function(val) {
                return access(this, function(elem, method, val) {
                    var win;
                    return jQuery.isWindow(elem) ? win = elem : 9 === elem.nodeType && (win = elem.defaultView), void 0 === val ? win ? win[prop] : elem[method] : void(win ? win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset) : elem[method] = val)
                }, method, val, arguments.length)
            }
        }), jQuery.each(["top", "left"], function(i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                if (computed) return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
            })
        }), jQuery.each({
            Height: "height",
            Width: "width"
        }, function(name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin),
                        extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
                    return access(this, function(elem, type, value) {
                        var doc;
                        return jQuery.isWindow(elem) ? 0 === funcName.indexOf("outer") ? elem["inner" + name] : elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                    }, type, chainable ? margin : void 0, chainable)
                }
            })
        }), jQuery.fn.extend({
            bind: function(types, data, fn) {
                return this.on(types, null, data, fn)
            },
            unbind: function(types, fn) {
                return this.off(types, null, fn)
            },
            delegate: function(selector, types, data, fn) {
                return this.on(types, selector, data, fn)
            },
            undelegate: function(selector, types, fn) {
                return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn)
            }
        }), jQuery.holdReady = function(hold) {
            hold ? jQuery.readyWait++ : jQuery.ready(!0)
        }, jQuery.isArray = Array.isArray, jQuery.parseJSON = JSON.parse, jQuery.nodeName = nodeName, "function" == typeof define && define.amd && define("jquery", [], function() {
            return jQuery
        });
    var _jQuery = window.jQuery,
        _$ = window.$;
    return jQuery.noConflict = function(deep) {
        return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
    }, noGlobal || (window.jQuery = window.$ = jQuery), jQuery
}), ! function($) {
    function functionName(fn) {
        if (void 0 === Function.prototype.name) {
            var funcNameRegex = /function\s([^(]{1,})\(/,
                results = funcNameRegex.exec(fn.toString());
            return results && results.length > 1 ? results[1].trim() : ""
        }
        return void 0 === fn.prototype ? fn.constructor.name : fn.prototype.constructor.name
    }

    function parseValue(str) {
        return "true" === str || "false" !== str && (isNaN(1 * str) ? str : parseFloat(str))
    }

    function hyphenate(str) {
        return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    var FOUNDATION_VERSION = "6.3.1",
        Foundation = {
            version: FOUNDATION_VERSION,
            _plugins: {},
            _uuids: [],
            rtl: function() {
                return "rtl" === $("html").attr("dir")
            },
            plugin: function(plugin, name) {
                var className = name || functionName(plugin),
                    attrName = hyphenate(className);
                this._plugins[attrName] = this[className] = plugin
            },
            registerPlugin: function(plugin, name) {
                var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
                plugin.uuid = this.GetYoDigits(6, pluginName), plugin.$element.attr("data-" + pluginName) || plugin.$element.attr("data-" + pluginName, plugin.uuid), plugin.$element.data("zfPlugin") || plugin.$element.data("zfPlugin", plugin), plugin.$element.trigger("init.zf." + pluginName), this._uuids.push(plugin.uuid)
            },
            unregisterPlugin: function(plugin) {
                var pluginName = hyphenate(functionName(plugin.$element.data("zfPlugin").constructor));
                this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1), plugin.$element.removeAttr("data-" + pluginName).removeData("zfPlugin").trigger("destroyed.zf." + pluginName);
                for (var prop in plugin) plugin[prop] = null
            },
            reInit: function(plugins) {
                var isJQ = plugins instanceof $;
                try {
                    if (isJQ) plugins.each(function() {
                        $(this).data("zfPlugin")._init()
                    });
                    else {
                        var type = typeof plugins,
                            _this = this,
                            fns = {
                                object: function(plgs) {
                                    plgs.forEach(function(p) {
                                        p = hyphenate(p), $("[data-" + p + "]").foundation("_init")
                                    })
                                },
                                string: function() {
                                    plugins = hyphenate(plugins), $("[data-" + plugins + "]").foundation("_init")
                                },
                                undefined: function() {
                                    this.object(Object.keys(_this._plugins))
                                }
                            };
                        fns[type](plugins)
                    }
                } catch (err) {
                    console.error(err)
                } finally {
                    return plugins
                }
            },
            GetYoDigits: function(length, namespace) {
                return length = length || 6, Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? "-" + namespace : "")
            },
            reflow: function(elem, plugins) {
                "undefined" == typeof plugins ? plugins = Object.keys(this._plugins) : "string" == typeof plugins && (plugins = [plugins]);
                var _this = this;
                $.each(plugins, function(i, name) {
                    var plugin = _this._plugins[name],
                        $elem = $(elem).find("[data-" + name + "]").addBack("[data-" + name + "]");
                    $elem.each(function() {
                        var $el = $(this),
                            opts = {};
                        if ($el.data("zfPlugin")) return void console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
                        $el.attr("data-options") && $el.attr("data-options").split(";").forEach(function(e, i) {
                            var opt = e.split(":").map(function(el) {
                                return el.trim()
                            });
                            opt[0] && (opts[opt[0]] = parseValue(opt[1]))
                        });
                        try {
                            $el.data("zfPlugin", new plugin($(this), opts))
                        } catch (er) {
                            console.error(er)
                        } finally {
                            return
                        }
                    })
                })
            },
            getFnName: functionName,
            transitionend: function($elem) {
                var end, transitions = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "otransitionend"
                    },
                    elem = document.createElement("div");
                for (var t in transitions) "undefined" != typeof elem.style[t] && (end = transitions[t]);
                return end ? end : (end = setTimeout(function() {
                    $elem.triggerHandler("transitionend", [$elem])
                }, 1), "transitionend")
            }
        };
    Foundation.util = {
        throttle: function(func, delay) {
            var timer = null;
            return function() {
                var context = this,
                    args = arguments;
                null === timer && (timer = setTimeout(function() {
                    func.apply(context, args), timer = null
                }, delay))
            }
        }
    };
    var foundation = function(method) {
        var type = typeof method,
            $meta = $("meta.foundation-mq"),
            $noJS = $(".no-js");
        if ($meta.length || $('<meta class="foundation-mq">').appendTo(document.head), $noJS.length && $noJS.removeClass("no-js"), "undefined" === type) Foundation.MediaQuery._init(), Foundation.reflow(this);
        else {
            if ("string" !== type) throw new TypeError("We're sorry, " + type + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var args = Array.prototype.slice.call(arguments, 1),
                plugClass = this.data("zfPlugin");
            if (void 0 === plugClass || void 0 === plugClass[method]) throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : "this element") + ".");
            1 === this.length ? plugClass[method].apply(plugClass, args) : this.each(function(i, el) {
                plugClass[method].apply($(el).data("zfPlugin"), args)
            })
        }
        return this
    };
    window.Foundation = Foundation, $.fn.foundation = foundation,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var vendors = ["webkit", "moz"], i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
                var vp = vendors[i];
                window.requestAnimationFrame = window[vp + "RequestAnimationFrame"], window.cancelAnimationFrame = window[vp + "CancelAnimationFrame"] || window[vp + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var lastTime = 0;
                window.requestAnimationFrame = function(callback) {
                    var now = Date.now(),
                        nextTime = Math.max(lastTime + 16, now);
                    return setTimeout(function() {
                        callback(lastTime = nextTime)
                    }, nextTime - now)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(oThis) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var aArgs = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP = function() {},
                fBound = function() {
                    return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)))
                };
            return this.prototype && (fNOP.prototype = this.prototype), fBound.prototype = new fNOP, fBound
        })
}(jQuery);
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
    }
}();
! function($) {
    var DropdownMenu = function() {
        function DropdownMenu(element, options) {
            _classCallCheck(this, DropdownMenu), this.$element = element, this.options = $.extend({}, DropdownMenu.defaults, this.$element.data(), options), Foundation.Nest.Feather(this.$element, "dropdown"), this._init(), Foundation.registerPlugin(this, "DropdownMenu"), Foundation.Keyboard.register("DropdownMenu", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close"
            })
        }
        return _createClass(DropdownMenu, [{
            key: "_init",
            value: function() {
                var subs = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), this.$element.hasClass(this.options.rightClass) || "right" === this.options.alignment || Foundation.rtl() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", subs.addClass("opens-left")) : subs.addClass("opens-right"), this.changed = !1, this._events()
            }
        }, {
            key: "_isVertical",
            value: function() {
                return "block" === this.$tabs.css("display")
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this,
                    hasTouch = "ontouchstart" in window || "undefined" != typeof window.ontouchstart,
                    parClass = "is-dropdown-submenu-parent",
                    handleClickFn = function(e) {
                        var $elem = $(e.target).parentsUntil("ul", "." + parClass),
                            hasSub = $elem.hasClass(parClass),
                            hasClicked = "true" === $elem.attr("data-is-click"),
                            $sub = $elem.children(".is-dropdown-submenu");
                        if (hasSub)
                            if (hasClicked) {
                                if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) return;
                                e.stopImmediatePropagation(), e.preventDefault(), _this._hide($elem)
                            } else e.preventDefault(), e.stopImmediatePropagation(), _this._show($sub), $elem.add($elem.parentsUntil(_this.$element, "." + parClass)).attr("data-is-click", !0)
                    };
                (this.options.clickOpen || hasTouch) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", handleClickFn), _this.options.closeOnClickInside && this.$menuItems.on("click.zf.dropdownmenu", function(e) {
                    var $elem = $(this),
                        hasSub = $elem.hasClass(parClass);
                    hasSub || _this._hide()
                }), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function(e) {
                    var $elem = $(this),
                        hasSub = $elem.hasClass(parClass);
                    hasSub && (clearTimeout($elem.data("_delay")), $elem.data("_delay", setTimeout(function() {
                        _this._show($elem.children(".is-dropdown-submenu"))
                    }, _this.options.hoverDelay)))
                }).on("mouseleave.zf.dropdownmenu", function(e) {
                    var $elem = $(this),
                        hasSub = $elem.hasClass(parClass);
                    if (hasSub && _this.options.autoclose) {
                        if ("true" === $elem.attr("data-is-click") && _this.options.clickOpen) return !1;
                        clearTimeout($elem.data("_delay")), $elem.data("_delay", setTimeout(function() {
                            _this._hide($elem)
                        }, _this.options.closingTime))
                    }
                }), this.$menuItems.on("keydown.zf.dropdownmenu", function(e) {
                    var $prevElement, $nextElement, $element = $(e.target).parentsUntil("ul", '[role="menuitem"]'),
                        isTab = _this.$tabs.index($element) > -1,
                        $elements = isTab ? _this.$tabs : $element.siblings("li").add($element);
                    $elements.each(function(i) {
                        if ($(this).is($element)) return $prevElement = $elements.eq(i - 1), void($nextElement = $elements.eq(i + 1))
                    });
                    var nextSibling = function() {
                            $element.is(":last-child") || ($nextElement.children("a:first").focus(), e.preventDefault())
                        },
                        prevSibling = function() {
                            $prevElement.children("a:first").focus(), e.preventDefault()
                        },
                        openSub = function() {
                            var $sub = $element.children("ul.is-dropdown-submenu");
                            $sub.length && (_this._show($sub), $element.find("li > a:first").focus(), e.preventDefault())
                        },
                        closeSub = function() {
                            var close = $element.parent("ul").parent("li");
                            close.children("a:first").focus(), _this._hide(close), e.preventDefault()
                        },
                        functions = {
                            open: openSub,
                            close: function() {
                                _this._hide(_this.$element), _this.$menuItems.find("a:first").focus(), e.preventDefault()
                            },
                            handled: function() {
                                e.stopImmediatePropagation()
                            }
                        };
                    isTab ? _this._isVertical() ? Foundation.rtl() ? $.extend(functions, {
                        down: nextSibling,
                        up: prevSibling,
                        next: closeSub,
                        previous: openSub
                    }) : $.extend(functions, {
                        down: nextSibling,
                        up: prevSibling,
                        next: openSub,
                        previous: closeSub
                    }) : Foundation.rtl() ? $.extend(functions, {
                        next: prevSibling,
                        previous: nextSibling,
                        down: openSub,
                        up: closeSub
                    }) : $.extend(functions, {
                        next: nextSibling,
                        previous: prevSibling,
                        down: openSub,
                        up: closeSub
                    }) : Foundation.rtl() ? $.extend(functions, {
                        next: closeSub,
                        previous: openSub,
                        down: nextSibling,
                        up: prevSibling
                    }) : $.extend(functions, {
                        next: openSub,
                        previous: closeSub,
                        down: nextSibling,
                        up: prevSibling
                    }), Foundation.Keyboard.handleKey(e, "DropdownMenu", functions)
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var $body = $(document.body),
                    _this = this;
                $body.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(e) {
                    var $link = _this.$element.find(e.target);
                    $link.length || (_this._hide(), $body.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                })
            }
        }, {
            key: "_show",
            value: function($sub) {
                var idx = this.$tabs.index(this.$tabs.filter(function(i, el) {
                        return $(el).find($sub).length > 0
                    })),
                    $sibs = $sub.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide($sibs, idx), $sub.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
                var clear = Foundation.Box.ImNotTouchingYou($sub, null, !0);
                if (!clear) {
                    var oldClass = "left" === this.options.alignment ? "-right" : "-left",
                        $parentLi = $sub.parent(".is-dropdown-submenu-parent");
                    $parentLi.removeClass("opens" + oldClass).addClass("opens-" + this.options.alignment), clear = Foundation.Box.ImNotTouchingYou($sub, null, !0), clear || $parentLi.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), this.changed = !0
                }
                $sub.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [$sub])
            }
        }, {
            key: "_hide",
            value: function($elem, idx) {
                var $toClose;
                $toClose = $elem && $elem.length ? $elem : void 0 !== idx ? this.$tabs.not(function(i, el) {
                    return i === idx
                }) : this.$element;
                var somethingToClose = $toClose.hasClass("is-active") || $toClose.find(".is-active").length > 0;
                if (somethingToClose) {
                    if ($toClose.find("li.is-active").add($toClose).attr({
                            "data-is-click": !1
                        }).removeClass("is-active"), $toClose.find("ul.js-dropdown-active").removeClass("js-dropdown-active"), this.changed || $toClose.find("opens-inner").length) {
                        var oldClass = "left" === this.options.alignment ? "right" : "left";
                        $toClose.find("li.is-dropdown-submenu-parent").add($toClose).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + oldClass), this.changed = !1
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [$toClose])
                }
            }
        }, {
            key: "destroy",
            value: function() {
                this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), $(document.body).off(".zf.dropdownmenu"), Foundation.Nest.Burn(this.$element, "dropdown"), Foundation.unregisterPlugin(this)
            }
        }]), DropdownMenu
    }();
    DropdownMenu.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "left",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    }, Foundation.plugin(DropdownMenu, "DropdownMenu")
}(jQuery);
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
    }
}();
! function($) {
    var Abide = function() {
        function Abide(element) {
            var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _classCallCheck(this, Abide), this.$element = element, this.options = $.extend({}, Abide.defaults, this.$element.data(), options), this._init(), Foundation.registerPlugin(this, "Abide")
        }
        return _createClass(Abide, [{
            key: "_init",
            value: function() {
                this.$inputs = this.$element.find("input, textarea, select"), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var _this2 = this;
                this.$element.off(".abide").on("reset.zf.abide", function() {
                    _this2.resetForm()
                }).on("submit.zf.abide", function() {
                    return _this2.validateForm()
                }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(e) {
                    _this2.validateInput($(e.target))
                }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(e) {
                    _this2.validateInput($(e.target))
                }), this.options.validateOnBlur && this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(e) {
                    _this2.validateInput($(e.target))
                })
            }
        }, {
            key: "_reflow",
            value: function() {
                this._init()
            }
        }, {
            key: "requiredCheck",
            value: function($el) {
                if (!$el.attr("required")) return !0;
                var isGood = !0;
                switch ($el[0].type) {
                    case "checkbox":
                        isGood = $el[0].checked;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        var opt = $el.find("option:selected");
                        opt.length && opt.val() || (isGood = !1);
                        break;
                    default:
                        $el.val() && $el.val().length || (isGood = !1)
                }
                return isGood
            }
        }, {
            key: "findFormError",
            value: function($el) {
                var $error = $el.siblings(this.options.formErrorSelector);
                return $error.length || ($error = $el.parent().find(this.options.formErrorSelector)), $error
            }
        }, {
            key: "findLabel",
            value: function($el) {
                var id = $el[0].id,
                    $label = this.$element.find('label[for="' + id + '"]');
                return $label.length ? $label : $el.closest("label")
            }
        }, {
            key: "findRadioLabels",
            value: function($els) {
                var _this3 = this,
                    labels = $els.map(function(i, el) {
                        var id = el.id,
                            $label = _this3.$element.find('label[for="' + id + '"]');
                        return $label.length || ($label = $(el).closest("label")), $label[0]
                    });
                return $(labels)
            }
        }, {
            key: "addErrorClasses",
            value: function($el) {
                var $label = this.findLabel($el),
                    $formError = this.findFormError($el);
                $label.length && $label.addClass(this.options.labelErrorClass), $formError.length && $formError.addClass(this.options.formErrorClass), $el.addClass(this.options.inputErrorClass).attr("data-invalid", "")
            }
        }, {
            key: "removeRadioErrorClasses",
            value: function(groupName) {
                var $els = this.$element.find(':radio[name="' + groupName + '"]'),
                    $labels = this.findRadioLabels($els),
                    $formErrors = this.findFormError($els);
                $labels.length && $labels.removeClass(this.options.labelErrorClass), $formErrors.length && $formErrors.removeClass(this.options.formErrorClass), $els.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "removeErrorClasses",
            value: function($el) {
                if ("radio" == $el[0].type) return this.removeRadioErrorClasses($el.attr("name"));
                var $label = this.findLabel($el),
                    $formError = this.findFormError($el);
                $label.length && $label.removeClass(this.options.labelErrorClass), $formError.length && $formError.removeClass(this.options.formErrorClass), $el.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "validateInput",
            value: function($el) {
                var clearRequire = this.requiredCheck($el),
                    validated = !1,
                    customValidator = !0,
                    validator = $el.attr("data-validator"),
                    equalTo = !0;
                if ($el.is("[data-abide-ignore]") || $el.is('[type="hidden"]') || $el.is("[disabled]")) return !0;
                switch ($el[0].type) {
                    case "radio":
                        validated = this.validateRadio($el.attr("name"));
                        break;
                    case "checkbox":
                        validated = clearRequire;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        validated = clearRequire;
                        break;
                    default:
                        validated = this.validateText($el)
                }
                validator && (customValidator = this.matchValidation($el, validator, $el.attr("required"))), $el.attr("data-equalto") && (equalTo = this.options.validators.equalTo($el));
                var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(!1) === -1,
                    message = (goodToGo ? "valid" : "invalid") + ".zf.abide";
                if (goodToGo) {
                    var dependentElements = this.$element.find('[data-equalto="' + $el.attr("id") + '"]');
                    if (dependentElements.length) {
                        var _this = this;
                        dependentElements.each(function() {
                            $(this).val() && _this.validateInput($(this))
                        })
                    }
                }
                return this[goodToGo ? "removeErrorClasses" : "addErrorClasses"]($el), $el.trigger(message, [$el]), goodToGo
            }
        }, {
            key: "validateForm",
            value: function() {
                var acc = [],
                    _this = this;
                this.$inputs.each(function() {
                    acc.push(_this.validateInput($(this)))
                });
                var noError = acc.indexOf(!1) === -1;
                return this.$element.find("[data-abide-error]").css("display", noError ? "none" : "block"), this.$element.trigger((noError ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), noError
            }
        }, {
            key: "validateText",
            value: function($el, pattern) {
                pattern = pattern || $el.attr("pattern") || $el.attr("type");
                var inputText = $el.val(),
                    valid = !1;
                return inputText.length ? valid = this.options.patterns.hasOwnProperty(pattern) ? this.options.patterns[pattern].test(inputText) : pattern === $el.attr("type") || new RegExp(pattern).test(inputText) : $el.prop("required") || (valid = !0), valid
            }
        }, {
            key: "validateRadio",
            value: function(groupName) {
                var $group = this.$element.find(':radio[name="' + groupName + '"]'),
                    valid = !1,
                    required = !1;
                return $group.each(function(i, e) {
                    $(e).attr("required") && (required = !0)
                }), required || (valid = !0), valid || $group.each(function(i, e) {
                    $(e).prop("checked") && (valid = !0)
                }), valid
            }
        }, {
            key: "matchValidation",
            value: function($el, validators, required) {
                var _this4 = this;
                required = !!required;
                var clear = validators.split(" ").map(function(v) {
                    return _this4.options.validators[v]($el, required, $el.parent())
                });
                return clear.indexOf(!1) === -1
            }
        }, {
            key: "resetForm",
            value: function() {
                var $form = this.$element,
                    opts = this.options;
                $("." + opts.labelErrorClass, $form).not("small").removeClass(opts.labelErrorClass), $("." + opts.inputErrorClass, $form).not("small").removeClass(opts.inputErrorClass), $(opts.formErrorSelector + "." + opts.formErrorClass).removeClass(opts.formErrorClass), $form.find("[data-abide-error]").css("display", "none"), $(":input", $form).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"), $(":input:radio", $form).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), $(":input:checkbox", $form).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), $form.trigger("formreset.zf.abide", [$form])
            }
        }, {
            key: "destroy",
            value: function() {
                var _this = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                    _this.removeErrorClasses($(this))
                }), Foundation.unregisterPlugin(this)
            }
        }]), Abide
    }();
    Abide.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        validateOnBlur: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function(el, required, parent) {
                return $("#" + el.attr("data-equalto")).val() === el.val()
            }
        }
    }, Foundation.plugin(Abide, "Abide")
}(jQuery);
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
    }
}();
! function($) {
    var Accordion = function() {
        function Accordion(element, options) {
            _classCallCheck(this, Accordion), this.$element = element, this.options = $.extend({}, Accordion.defaults, this.$element.data(), options), this._init(), Foundation.registerPlugin(this, "Accordion"), Foundation.Keyboard.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
            })
        }
        return _createClass(Accordion, [{
            key: "_init",
            value: function() {
                this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("[data-accordion-item]"), this.$tabs.each(function(idx, el) {
                    var $el = $(el),
                        $content = $el.children("[data-tab-content]"),
                        id = $content[0].id || Foundation.GetYoDigits(6, "accordion"),
                        linkId = el.id || id + "-label";
                    $el.find("a:first").attr({
                        "aria-controls": id,
                        role: "tab",
                        id: linkId,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }), $content.attr({
                        role: "tabpanel",
                        "aria-labelledby": linkId,
                        "aria-hidden": !0,
                        id: id
                    })
                });
                var $initActive = this.$element.find(".is-active").children("[data-tab-content]");
                $initActive.length && this.down($initActive, !0), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                this.$tabs.each(function() {
                    var $elem = $(this),
                        $tabContent = $elem.children("[data-tab-content]");
                    $tabContent.length && $elem.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
                        e.preventDefault(), _this.toggle($tabContent)
                    }).on("keydown.zf.accordion", function(e) {
                        Foundation.Keyboard.handleKey(e, "Accordion", {
                            toggle: function() {
                                _this.toggle($tabContent)
                            },
                            next: function() {
                                var $a = $elem.next().find("a").focus();
                                _this.options.multiExpand || $a.trigger("click.zf.accordion")
                            },
                            previous: function() {
                                var $a = $elem.prev().find("a").focus();
                                _this.options.multiExpand || $a.trigger("click.zf.accordion")
                            },
                            handled: function() {
                                e.preventDefault(), e.stopPropagation()
                            }
                        })
                    })
                })
            }
        }, {
            key: "toggle",
            value: function($target) {
                $target.parent().hasClass("is-active") ? this.up($target) : this.down($target)
            }
        }, {
            key: "down",
            value: function($target, firstTime) {
                var _this2 = this;
                if ($target.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), !this.options.multiExpand && !firstTime) {
                    var $currentActive = this.$element.children(".is-active").children("[data-tab-content]");
                    $currentActive.length && this.up($currentActive.not($target))
                }
                $target.slideDown(this.options.slideSpeed, function() {
                    _this2.$element.trigger("down.zf.accordion", [$target])
                }), $("#" + $target.attr("aria-labelledby")).attr({
                    "aria-expanded": !0,
                    "aria-selected": !0
                })
            }
        }, {
            key: "up",
            value: function($target) {
                var $aunts = $target.parent().siblings(),
                    _this = this;
                (this.options.allowAllClosed || $aunts.hasClass("is-active")) && $target.parent().hasClass("is-active") && ($target.slideUp(_this.options.slideSpeed, function() {
                    _this.$element.trigger("up.zf.accordion", [$target])
                }), $target.attr("aria-hidden", !0).parent().removeClass("is-active"), $("#" + $target.attr("aria-labelledby")).attr({
                    "aria-expanded": !1,
                    "aria-selected": !1
                }))
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), Foundation.unregisterPlugin(this)
            }
        }]), Accordion
    }();
    Accordion.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1
    }, Foundation.plugin(Accordion, "Accordion")
}(jQuery);
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps),
            staticProps && defineProperties(Constructor, staticProps), Constructor
    }
}();
! function($) {
    function iPhoneSniff() {
        return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
    }

    function androidSniff() {
        return /Android/.test(window.navigator.userAgent)
    }

    function mobileSniff() {
        return iPhoneSniff() || androidSniff()
    }
    var Reveal = function() {
        function Reveal(element, options) {
            _classCallCheck(this, Reveal), this.$element = element, this.options = $.extend({}, Reveal.defaults, this.$element.data(), options), this._init(), Foundation.registerPlugin(this, "Reveal"), Foundation.Keyboard.register("Reveal", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close"
            })
        }
        return _createClass(Reveal, [{
            key: "_init",
            value: function() {
                this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                    mq: Foundation.MediaQuery.current
                }, this.isMobile = mobileSniff(), this.$anchor = $($('[data-open="' + this.id + '"]').length ? '[data-open="' + this.id + '"]' : '[data-toggle="' + this.id + '"]'), this.$anchor.attr({
                    "aria-controls": this.id,
                    "aria-haspopup": !0,
                    tabindex: 0
                }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo($(this.options.appendTo)), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && $(window).one("load.zf.reveal", this.open.bind(this))
            }
        }, {
            key: "_makeOverlay",
            value: function() {
                return $("<div></div>").addClass("reveal-overlay").appendTo(this.options.appendTo)
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var left, top, width = this.$element.outerWidth(),
                    outerWidth = $(window).width(),
                    height = this.$element.outerHeight(),
                    outerHeight = $(window).height();
                left = "auto" === this.options.hOffset ? parseInt((outerWidth - width) / 2, 10) : parseInt(this.options.hOffset, 10), top = "auto" === this.options.vOffset ? height > outerHeight ? parseInt(Math.min(100, outerHeight / 10), 10) : parseInt((outerHeight - height) / 4, 10) : parseInt(this.options.vOffset, 10), this.$element.css({
                    top: top + "px"
                }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                    left: left + "px"
                }), this.$element.css({
                    margin: "0px"
                }))
            }
        }, {
            key: "_events",
            value: function() {
                var _this2 = this,
                    _this = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": function(event, $element) {
                        if (event.target === _this.$element[0] || $(event.target).parents("[data-closable]")[0] === $element) return _this2.close.apply(_this2)
                    },
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": function() {
                        _this._updatePosition()
                    }
                }), this.$anchor.length && this.$anchor.on("keydown.zf.reveal", function(e) {
                    13 !== e.which && 32 !== e.which || (e.stopPropagation(), e.preventDefault(), _this.open())
                }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(e) {
                    e.target !== _this.$element[0] && !$.contains(_this.$element[0], e.target) && $.contains(document, e.target) && _this.close()
                }), this.options.deepLink && $(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
            }
        }, {
            key: "_handleState",
            value: function(e) {
                window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
            }
        }, {
            key: "open",
            value: function() {
                function addRevealOpenClasses() {
                    _this.isMobile ? (_this.originalScrollPos || (_this.originalScrollPos = window.pageYOffset), $("html, body").addClass("is-reveal-open")) : $("body").addClass("is-reveal-open")
                }
                var _this3 = this;
                if (this.options.deepLink) {
                    var hash = "#" + this.id;
                    window.history.pushState ? window.history.pushState(null, null, hash) : window.location.hash = hash
                }
                this.isActive = !0, this.$element.css({
                    visibility: "hidden"
                }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                    visibility: "hidden"
                }).show(), this._updatePosition(), this.$element.hide().css({
                    visibility: ""
                }), this.$overlay && (this.$overlay.css({
                    visibility: ""
                }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id);
                var _this = this;
                if (this.options.animationIn) {
                    var afterAnimation = function() {
                        _this.$element.attr({
                            "aria-hidden": !1,
                            tabindex: -1
                        }).focus(), addRevealOpenClasses(), Foundation.Keyboard.trapFocus(_this.$element)
                    };
                    this.options.overlay && Foundation.Motion.animateIn(this.$overlay, "fade-in"), Foundation.Motion.animateIn(this.$element, this.options.animationIn, function() {
                        _this3.$element && (_this3.focusableElements = Foundation.Keyboard.findFocusable(_this3.$element), afterAnimation())
                    })
                } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(), Foundation.Keyboard.trapFocus(this.$element), this.$element.trigger("open.zf.reveal"), addRevealOpenClasses(), setTimeout(function() {
                    _this3._extraHandlers()
                }, 0)
            }
        }, {
            key: "_extraHandlers",
            value: function() {
                var _this = this;
                this.$element && (this.focusableElements = Foundation.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || $("body").on("click.zf.reveal", function(e) {
                    e.target !== _this.$element[0] && !$.contains(_this.$element[0], e.target) && $.contains(document, e.target) && _this.close()
                }), this.options.closeOnEsc && $(window).on("keydown.zf.reveal", function(e) {
                    Foundation.Keyboard.handleKey(e, "Reveal", {
                        close: function() {
                            _this.options.closeOnEsc && (_this.close(), _this.$anchor.focus())
                        }
                    })
                }), this.$element.on("keydown.zf.reveal", function(e) {
                    var $target = $(this);
                    Foundation.Keyboard.handleKey(e, "Reveal", {
                        open: function() {
                            _this.$element.find(":focus").is(_this.$element.find("[data-close]")) ? setTimeout(function() {
                                _this.$anchor.focus()
                            }, 1) : $target.is(_this.focusableElements) && _this.open()
                        },
                        close: function() {
                            _this.options.closeOnEsc && (_this.close(), _this.$anchor.focus())
                        },
                        handled: function(preventDefault) {
                            preventDefault && e.preventDefault()
                        }
                    })
                }))
            }
        }, {
            key: "close",
            value: function() {
                function finishUp() {
                    _this.isMobile ? ($("html, body").removeClass("is-reveal-open"), _this.originalScrollPos && ($("body").scrollTop(_this.originalScrollPos), _this.originalScrollPos = null)) : $("body").removeClass("is-reveal-open"), Foundation.Keyboard.releaseFocus(_this.$element), _this.$element.attr("aria-hidden", !0), _this.$element.trigger("closed.zf.reveal")
                }
                if (!this.isActive || !this.$element.is(":visible")) return !1;
                var _this = this;
                this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", finishUp) : finishUp(), Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, finishUp) : finishUp(), this.$element.hide(this.options.hideDelay)), this.options.closeOnEsc && $(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && $("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, _this.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.href.replace("#" + this.id, "")) : window.location.hash = "")
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.close() : this.open()
            }
        }, {
            key: "destroy",
            value: function() {
                this.options.overlay && (this.$element.appendTo($(this.options.appendTo)), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), $(window).off(".zf.reveal:" + this.id), Foundation.unregisterPlugin(this)
            }
        }]), Reveal
    }();
    Reveal.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1,
        appendTo: "body"
    }, Foundation.plugin(Reveal, "Reveal")
}(jQuery);
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
    }
}();
! function($) {
    var Tabs = function() {
        function Tabs(element, options) {
            _classCallCheck(this, Tabs), this.$element = element, this.options = $.extend({}, Tabs.defaults, this.$element.data(), options), this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            })
        }
        return _createClass(Tabs, [{
            key: "_init",
            value: function() {
                var _this2 = this,
                    _this = this;
                if (this.$element.attr({
                        role: "tablist"
                    }), this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = $('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function() {
                        var $elem = $(this),
                            $link = $elem.find("a"),
                            isActive = $elem.hasClass("" + _this.options.linkActiveClass),
                            hash = $link[0].hash.slice(1),
                            linkId = $link[0].id ? $link[0].id : hash + "-label",
                            $tabContent = $("#" + hash);
                        $elem.attr({
                            role: "presentation"
                        }), $link.attr({
                            role: "tab",
                            "aria-controls": hash,
                            "aria-selected": isActive,
                            id: linkId
                        }), $tabContent.attr({
                            role: "tabpanel",
                            "aria-hidden": !isActive,
                            "aria-labelledby": linkId
                        }), isActive && _this.options.autoFocus && $(window).load(function() {
                            $("html, body").animate({
                                scrollTop: $elem.offset().top
                            }, _this.options.deepLinkSmudgeDelay, function() {
                                $link.focus()
                            })
                        })
                    }), this.options.matchHeight) {
                    var $images = this.$tabContent.find("img");
                    $images.length ? Foundation.onImagesLoaded($images, this._setHeight.bind(this)) : this._setHeight()
                }
                this._checkDeepLink = function() {
                    var anchor = window.location.hash;
                    if (anchor.length) {
                        var $link = _this2.$element.find('[href="' + anchor + '"]');
                        if ($link.length) {
                            if (_this2.selectTab($(anchor), !0), _this2.options.deepLinkSmudge) {
                                var offset = _this2.$element.offset();
                                $("html, body").animate({
                                    scrollTop: offset.top
                                }, _this2.options.deepLinkSmudgeDelay)
                            }
                            _this2.$element.trigger("deeplink.zf.tabs", [$link, $(anchor)])
                        }
                    }
                }, this.options.deepLink && this._checkDeepLink(), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), $(window).on("changed.zf.mediaquery", this._setHeightMqHandler)), this.options.deepLink && $(window).on("popstate", this._checkDeepLink)
            }
        }, {
            key: "_addClickHandler",
            value: function() {
                var _this = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(e) {
                    e.preventDefault(), e.stopPropagation(), _this._handleTabChange($(this))
                })
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                var _this = this;
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(e) {
                    if (9 !== e.which) {
                        var $prevElement, $nextElement, $element = $(this),
                            $elements = $element.parent("ul").children("li");
                        $elements.each(function(i) {
                            if ($(this).is($element)) return void(_this.options.wrapOnKeys ? ($prevElement = 0 === i ? $elements.last() : $elements.eq(i - 1), $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1)) : ($prevElement = $elements.eq(Math.max(0, i - 1)), $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1))))
                        }), Foundation.Keyboard.handleKey(e, "Tabs", {
                            open: function() {
                                $element.find('[role="tab"]').focus(), _this._handleTabChange($element)
                            },
                            previous: function() {
                                $prevElement.find('[role="tab"]').focus(), _this._handleTabChange($prevElement)
                            },
                            next: function() {
                                $nextElement.find('[role="tab"]').focus(), _this._handleTabChange($nextElement)
                            },
                            handled: function() {
                                e.stopPropagation(), e.preventDefault()
                            }
                        })
                    }
                })
            }
        }, {
            key: "_handleTabChange",
            value: function($target, historyHandled) {
                if ($target.hasClass("" + this.options.linkActiveClass)) return void(this.options.activeCollapse && (this._collapseTab($target), this.$element.trigger("collapse.zf.tabs", [$target])));
                var $oldTab = this.$element.find("." + this.options.linkClass + "." + this.options.linkActiveClass),
                    $tabLink = $target.find('[role="tab"]'),
                    hash = $tabLink[0].hash,
                    $targetContent = this.$tabContent.find(hash);
                if (this._collapseTab($oldTab), this._openTab($target), this.options.deepLink && !historyHandled) {
                    var anchor = $target.find("a").attr("href");
                    this.options.updateHistory ? history.pushState({}, "", anchor) : history.replaceState({}, "", anchor)
                }
                this.$element.trigger("change.zf.tabs", [$target, $targetContent]), $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }
        }, {
            key: "_openTab",
            value: function($target) {
                var $tabLink = $target.find('[role="tab"]'),
                    hash = $tabLink[0].hash,
                    $targetContent = this.$tabContent.find(hash);
                $target.addClass("" + this.options.linkActiveClass), $tabLink.attr({
                    "aria-selected": "true"
                }), $targetContent.addClass("" + this.options.panelActiveClass).attr({
                    "aria-hidden": "false"
                })
            }
        }, {
            key: "_collapseTab",
            value: function($target) {
                var $target_anchor = $target.removeClass("" + this.options.linkActiveClass).find('[role="tab"]').attr({
                    "aria-selected": "false"
                });
                $("#" + $target_anchor.attr("aria-controls")).removeClass("" + this.options.panelActiveClass).attr({
                    "aria-hidden": "true"
                })
            }
        }, {
            key: "selectTab",
            value: function(elem, historyHandled) {
                var idStr;
                idStr = "object" == typeof elem ? elem[0].id : elem, idStr.indexOf("#") < 0 && (idStr = "#" + idStr);
                var $target = this.$tabTitles.find('[href="' + idStr + '"]').parent("." + this.options.linkClass);
                this._handleTabChange($target, historyHandled)
            }
        }, {
            key: "_setHeight",
            value: function() {
                var max = 0,
                    _this = this;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                    var panel = $(this),
                        isActive = panel.hasClass("" + _this.options.panelActiveClass);
                    isActive || panel.css({
                        visibility: "hidden",
                        display: "block"
                    });
                    var temp = this.getBoundingClientRect().height;
                    isActive || panel.css({
                        visibility: "",
                        display: ""
                    }), max = temp > max ? temp : max
                }).css("height", max + "px")
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && null != this._setHeightMqHandler && $(window).off("changed.zf.mediaquery", this._setHeightMqHandler), this.options.deepLink && $(window).off("popstate", this._checkDeepLink), Foundation.unregisterPlugin(this)
            }
        }]), Tabs
    }();
    Tabs.defaults = {
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1,
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        activeCollapse: !1,
        linkClass: "tabs-title",
        linkActiveClass: "is-active",
        panelClass: "tabs-panel",
        panelActiveClass: "is-active"
    }, Foundation.plugin(Tabs, "Tabs")
}(jQuery);
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
    }
}();
! function($) {
    var Tooltip = function() {
        function Tooltip(element, options) {
            _classCallCheck(this, Tooltip), this.$element = element, this.options = $.extend({}, Tooltip.defaults, this.$element.data(), options), this.isActive = !1, this.isClick = !1, this._init(), Foundation.registerPlugin(this, "Tooltip")
        }
        return _createClass(Tooltip, [{
            key: "_init",
            value: function() {
                var elemId = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
                this.options.positionClass = this.options.positionClass || this._getPositionClass(this.$element), this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? $(this.options.template) : this._buildTemplate(elemId), this.options.allowHtml ? this.template.appendTo(document.body).html(this.options.tipText).hide() : this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                    title: "",
                    "aria-describedby": elemId,
                    "data-yeti-box": elemId,
                    "data-toggle": elemId,
                    "data-resize": elemId
                }).addClass(this.options.triggerClass), this.usedPositions = [], this.counter = 4, this.classChanged = !1, this._events()
            }
        }, {
            key: "_getPositionClass",
            value: function(element) {
                if (!element) return "";
                var position = element[0].className.match(/\b(top|left|right)\b/g);
                return position = position ? position[0] : ""
            }
        }, {
            key: "_buildTemplate",
            value: function(id) {
                var templateClasses = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim(),
                    $template = $("<div></div>").addClass(templateClasses).attr({
                        role: "tooltip",
                        "aria-hidden": !0,
                        "data-is-active": !1,
                        "data-is-focus": !1,
                        id: id
                    });
                return $template
            }
        }, {
            key: "_reposition",
            value: function(position) {
                this.usedPositions.push(position ? position : "bottom"), !position && this.usedPositions.indexOf("top") < 0 ? this.template.addClass("top") : "top" === position && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(position) : "left" === position && this.usedPositions.indexOf("right") < 0 ? this.template.removeClass(position).addClass("right") : "right" === position && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(position).addClass("left") : !position && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.addClass("left") : "top" === position && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(position).addClass("left") : "left" === position && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(position) : "right" === position && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(position) : this.template.removeClass(position), this.classChanged = !0, this.counter--
            }
        }, {
            key: "_setPosition",
            value: function() {
                var position = this._getPositionClass(this.template),
                    $tipDims = Foundation.Box.GetDimensions(this.template),
                    $anchorDims = Foundation.Box.GetDimensions(this.$element),
                    direction = "left" === position ? "left" : "right" === position ? "left" : "top",
                    param = "top" === direction ? "height" : "width";
                if ("height" === param ? this.options.vOffset : this.options.hOffset, $tipDims.width >= $tipDims.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template)) return this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: $anchorDims.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), !1;
                for (this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (position || "bottom"), this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.template) && this.counter;) this._reposition(position), this._setPosition()
            }
        }, {
            key: "show",
            value: function() {
                if ("all" !== this.options.showOn && !Foundation.MediaQuery.is(this.options.showOn)) return !1;
                var _this = this;
                this.template.css("visibility", "hidden").show(), this._setPosition(), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                }), _this.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), this.$element.trigger("show.zf.tooltip")
            }
        }, {
            key: "hide",
            value: function() {
                var _this = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, function() {
                    _this.isActive = !1, _this.isClick = !1, _this.classChanged && (_this.template.removeClass(_this._getPositionClass(_this.template)).addClass(_this.options.positionClass), _this.usedPositions = [], _this.counter = 4, _this.classChanged = !1)
                }), this.$element.trigger("hide.zf.tooltip")
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this,
                    isFocus = (this.template, !1);
                this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(e) {
                    _this.isActive || (_this.timeout = setTimeout(function() {
                        _this.show()
                    }, _this.options.hoverDelay))
                }).on("mouseleave.zf.tooltip", function(e) {
                    clearTimeout(_this.timeout), (!isFocus || _this.isClick && !_this.options.clickOpen) && _this.hide()
                }), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function(e) {
                    e.stopImmediatePropagation(), _this.isClick || (_this.isClick = !0, !_this.options.disableHover && _this.$element.attr("tabindex") || _this.isActive || _this.show())
                }) : this.$element.on("mousedown.zf.tooltip", function(e) {
                    e.stopImmediatePropagation(), _this.isClick = !0
                }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) {
                    _this.isActive ? _this.hide() : _this.show()
                }), this.$element.on({
                    "close.zf.trigger": this.hide.bind(this)
                }), this.$element.on("focus.zf.tooltip", function(e) {
                    return isFocus = !0, _this.isClick ? (_this.options.clickOpen || (isFocus = !1), !1) : void _this.show()
                }).on("focusout.zf.tooltip", function(e) {
                    isFocus = !1, _this.isClick = !1, _this.hide()
                }).on("resizeme.zf.trigger", function() {
                    _this.isActive && _this._setPosition()
                })
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.hide() : this.show()
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass("has-tip top right left").removeAttr("aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"), this.template.remove(), Foundation.unregisterPlugin(this)
            }
        }]), Tooltip
    }();
    Tooltip.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        vOffset: 10,
        hOffset: 12,
        allowHtml: !1
    }, Foundation.plugin(Tooltip, "Tooltip")
}(jQuery), ! function($) {
    function ImNotTouchingYou(element, parent, lrOnly, tbOnly) {
        var top, bottom, left, right, eleDims = GetDimensions(element);
        if (parent) {
            var parDims = GetDimensions(parent);
            bottom = eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top, top = eleDims.offset.top >= parDims.offset.top, left = eleDims.offset.left >= parDims.offset.left, right = eleDims.offset.left + eleDims.width <= parDims.width + parDims.offset.left
        } else bottom = eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top, top = eleDims.offset.top >= eleDims.windowDims.offset.top, left = eleDims.offset.left >= eleDims.windowDims.offset.left, right = eleDims.offset.left + eleDims.width <= eleDims.windowDims.width;
        var allDirs = [bottom, top, left, right];
        return lrOnly ? left === right == 1 : tbOnly ? top === bottom == 1 : allDirs.indexOf(!1) === -1
    }

    function GetDimensions(elem, test) {
        if (elem = elem.length ? elem[0] : elem, elem === window || elem === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var rect = elem.getBoundingClientRect(),
            parRect = elem.parentNode.getBoundingClientRect(),
            winRect = document.body.getBoundingClientRect(),
            winY = window.pageYOffset,
            winX = window.pageXOffset;
        return {
            width: rect.width,
            height: rect.height,
            offset: {
                top: rect.top + winY,
                left: rect.left + winX
            },
            parentDims: {
                width: parRect.width,
                height: parRect.height,
                offset: {
                    top: parRect.top + winY,
                    left: parRect.left + winX
                }
            },
            windowDims: {
                width: winRect.width,
                height: winRect.height,
                offset: {
                    top: winY,
                    left: winX
                }
            }
        }
    }

    function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
        var $eleDims = GetDimensions(element),
            $anchorDims = anchor ? GetDimensions(anchor) : null;
        switch (position) {
            case "top":
                return {
                    left: Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left,
                    top: $anchorDims.offset.top - ($eleDims.height + vOffset)
                };
            case "left":
                return {
                    left: $anchorDims.offset.left - ($eleDims.width + hOffset),
                    top: $anchorDims.offset.top
                };
            case "right":
                return {
                    left: $anchorDims.offset.left + $anchorDims.width + hOffset,
                    top: $anchorDims.offset.top
                };
            case "center top":
                return {
                    left: $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2,
                    top: $anchorDims.offset.top - ($eleDims.height + vOffset)
                };
            case "center bottom":
                return {
                    left: isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2,
                    top: $anchorDims.offset.top + $anchorDims.height + vOffset
                };
            case "center left":
                return {
                    left: $anchorDims.offset.left - ($eleDims.width + hOffset),
                    top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
                };
            case "center right":
                return {
                    left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
                    top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
                };
            case "center":
                return {
                    left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2,
                    top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - $eleDims.height / 2
                };
            case "reveal":
                return {
                    left: ($eleDims.windowDims.width - $eleDims.width) / 2,
                    top: $eleDims.windowDims.offset.top + vOffset
                };
            case "reveal full":
                return {
                    left: $eleDims.windowDims.offset.left,
                    top: $eleDims.windowDims.offset.top
                };
            case "left bottom":
                return {
                    left: $anchorDims.offset.left,
                    top: $anchorDims.offset.top + $anchorDims.height + vOffset
                };
            case "right bottom":
                return {
                    left: $anchorDims.offset.left + $anchorDims.width + hOffset - $eleDims.width,
                    top: $anchorDims.offset.top + $anchorDims.height + vOffset
                };
            default:
                return {
                    left: Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left + hOffset,
                    top: $anchorDims.offset.top + $anchorDims.height + vOffset
                }
        }
    }
    Foundation.Box = {
        ImNotTouchingYou: ImNotTouchingYou,
        GetDimensions: GetDimensions,
        GetOffsets: GetOffsets
    }
}(jQuery), ! function($) {
    function getKeyCodes(kcs) {
        var k = {};
        for (var kc in kcs) k[kcs[kc]] = kcs[kc];
        return k
    }
    var keyCodes = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN"
        },
        commands = {},
        Keyboard = {
            keys: getKeyCodes(keyCodes),
            parseKey: function(event) {
                var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
                return key = key.replace(/\W+/, ""), event.shiftKey && (key = "SHIFT_" + key), event.ctrlKey && (key = "CTRL_" + key), event.altKey && (key = "ALT_" + key), key = key.replace(/_$/, "")
            },
            handleKey: function(event, component, functions) {
                var cmds, command, fn, commandList = commands[component],
                    keyCode = this.parseKey(event);
                if (!commandList) return console.warn("Component not defined!");
                if (cmds = "undefined" == typeof commandList.ltr ? commandList : Foundation.rtl() ? $.extend({}, commandList.ltr, commandList.rtl) : $.extend({}, commandList.rtl, commandList.ltr), command = cmds[keyCode], fn = functions[command], fn && "function" == typeof fn) {
                    var returnValue = fn.apply();
                    (functions.handled || "function" == typeof functions.handled) && functions.handled(returnValue)
                } else(functions.unhandled || "function" == typeof functions.unhandled) && functions.unhandled()
            },
            findFocusable: function($element) {
                return !!$element && $element.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
                    return !(!$(this).is(":visible") || $(this).attr("tabindex") < 0)
                })
            },
            register: function(componentName, cmds) {
                commands[componentName] = cmds
            },
            trapFocus: function($element) {
                var $focusable = Foundation.Keyboard.findFocusable($element),
                    $firstFocusable = $focusable.eq(0),
                    $lastFocusable = $focusable.eq(-1);
                $element.on("keydown.zf.trapfocus", function(event) {
                    event.target === $lastFocusable[0] && "TAB" === Foundation.Keyboard.parseKey(event) ? (event.preventDefault(), $firstFocusable.focus()) : event.target === $firstFocusable[0] && "SHIFT_TAB" === Foundation.Keyboard.parseKey(event) && (event.preventDefault(), $lastFocusable.focus())
                })
            },
            releaseFocus: function($element) {
                $element.off("keydown.zf.trapfocus")
            }
        };
    Foundation.Keyboard = Keyboard
}(jQuery), ! function($) {
    function parseStyleToObject(str) {
        var styleObject = {};
        return "string" != typeof str ? styleObject : (str = str.trim().slice(1, -1)) ? styleObject = str.split("&").reduce(function(ret, param) {
            var parts = param.replace(/\+/g, " ").split("="),
                key = parts[0],
                val = parts[1];
            return key = decodeURIComponent(key), val = void 0 === val ? null : decodeURIComponent(val), ret.hasOwnProperty(key) ? Array.isArray(ret[key]) ? ret[key].push(val) : ret[key] = [ret[key], val] : ret[key] = val, ret
        }, {}) : styleObject
    }
    var MediaQuery = {
        queries: [],
        current: "",
        _init: function() {
            var namedQueries, self = this,
                extractedStyles = $(".foundation-mq").css("font-family");
            namedQueries = parseStyleToObject(extractedStyles);
            for (var key in namedQueries) namedQueries.hasOwnProperty(key) && self.queries.push({
                name: key,
                value: "only screen and (min-width: " + namedQueries[key] + ")"
            });
            this.current = this._getCurrentSize(), this._watcher()
        },
        atLeast: function(size) {
            var query = this.get(size);
            return !!query && window.matchMedia(query).matches
        },
        is: function(size) {
            return size = size.trim().split(" "), size.length > 1 && "only" === size[1] ? size[0] === this._getCurrentSize() : this.atLeast(size[0])
        },
        get: function(size) {
            for (var i in this.queries)
                if (this.queries.hasOwnProperty(i)) {
                    var query = this.queries[i];
                    if (size === query.name) return query.value
                }
            return null
        },
        _getCurrentSize: function() {
            for (var matched, i = 0; i < this.queries.length; i++) {
                var query = this.queries[i];
                window.matchMedia(query.value).matches && (matched = query)
            }
            return "object" == typeof matched ? matched.name : matched
        },
        _watcher: function() {
            var _this = this;
            $(window).on("resize.zf.mediaquery", function() {
                var newSize = _this._getCurrentSize(),
                    currentSize = _this.current;
                newSize !== currentSize && (_this.current = newSize, $(window).trigger("changed.zf.mediaquery", [newSize, currentSize]))
            })
        }
    };
    Foundation.MediaQuery = MediaQuery, window.matchMedia || (window.matchMedia = function() {
        var styleMedia = window.styleMedia || window.media;
        if (!styleMedia) {
            var style = document.createElement("style"),
                script = document.getElementsByTagName("script")[0],
                info = null;
            style.type = "text/css", style.id = "matchmediajs-test", script && script.parentNode && script.parentNode.insertBefore(style, script), info = "getComputedStyle" in window && window.getComputedStyle(style, null) || style.currentStyle, styleMedia = {
                matchMedium: function(media) {
                    var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
                    return style.styleSheet ? style.styleSheet.cssText = text : style.textContent = text, "1px" === info.width
                }
            }
        }
        return function(media) {
            return {
                matches: styleMedia.matchMedium(media || "all"),
                media: media || "all"
            }
        }
    }()), Foundation.MediaQuery = MediaQuery
}(jQuery), ! function($) {
    function Move(duration, elem, fn) {
        function move(ts) {
            start || (start = ts), prog = ts - start, fn.apply(elem), prog < duration ? anim = window.requestAnimationFrame(move, elem) : (window.cancelAnimationFrame(anim), elem.trigger("finished.zf.animate", [elem]).triggerHandler("finished.zf.animate", [elem]))
        }
        var anim, prog, start = null;
        return 0 === duration ? (fn.apply(elem), void elem.trigger("finished.zf.animate", [elem]).triggerHandler("finished.zf.animate", [elem])) : void(anim = window.requestAnimationFrame(move))
    }

    function animate(isIn, element, animation, cb) {
        function finish() {
            isIn || element.hide(), reset(), cb && cb.apply(element)
        }

        function reset() {
            element[0].style.transitionDuration = 0, element.removeClass(initClass + " " + activeClass + " " + animation)
        }
        if (element = $(element).eq(0), element.length) {
            var initClass = isIn ? initClasses[0] : initClasses[1],
                activeClass = isIn ? activeClasses[0] : activeClasses[1];
            reset(), element.addClass(animation).css("transition", "none"), requestAnimationFrame(function() {
                element.addClass(initClass), isIn && element.show()
            }), requestAnimationFrame(function() {
                element[0].offsetWidth, element.css("transition", "").addClass(activeClass)
            }), element.one(Foundation.transitionend(element), finish)
        }
    }
    var initClasses = ["mui-enter", "mui-leave"],
        activeClasses = ["mui-enter-active", "mui-leave-active"],
        Motion = {
            animateIn: function(element, animation, cb) {
                animate(!0, element, animation, cb)
            },
            animateOut: function(element, animation, cb) {
                animate(!1, element, animation, cb)
            }
        };
    Foundation.Move = Move, Foundation.Motion = Motion
}(jQuery), ! function($) {
    var Nest = {
        Feather: function(menu) {
            var type = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
            menu.attr("role", "menubar");
            var items = menu.find("li").attr({
                    role: "menuitem"
                }),
                subMenuClass = "is-" + type + "-submenu",
                subItemClass = subMenuClass + "-item",
                hasSubClass = "is-" + type + "-submenu-parent";
            items.each(function() {
                var $item = $(this),
                    $sub = $item.children("ul");
                $sub.length && ($item.addClass(hasSubClass).attr({
                    "aria-haspopup": !0,
                    "aria-label": $item.children("a:first").text()
                }), "drilldown" === type && $item.attr({
                    "aria-expanded": !1
                }), $sub.addClass("submenu " + subMenuClass).attr({
                    "data-submenu": "",
                    role: "menu"
                }), "drilldown" === type && $sub.attr({
                    "aria-hidden": !0
                })), $item.parent("[data-submenu]").length && $item.addClass("is-submenu-item " + subItemClass)
            })
        },
        Burn: function(menu, type) {
            var subMenuClass = "is-" + type + "-submenu",
                subItemClass = subMenuClass + "-item",
                hasSubClass = "is-" + type + "-submenu-parent";
            menu.find(">li, .menu, .menu > li").removeClass(subMenuClass + " " + subItemClass + " " + hasSubClass + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
        }
    };
    Foundation.Nest = Nest
}(jQuery), ! function($) {
    function Timer(elem, options, cb) {
        var start, timer, _this = this,
            duration = options.duration,
            nameSpace = Object.keys(elem.data())[0] || "timer",
            remain = -1;
        this.isPaused = !1, this.restart = function() {
            remain = -1, clearTimeout(timer), this.start()
        }, this.start = function() {
            this.isPaused = !1, clearTimeout(timer), remain = remain <= 0 ? duration : remain, elem.data("paused", !1), start = Date.now(), timer = setTimeout(function() {
                options.infinite && _this.restart(), cb && "function" == typeof cb && cb()
            }, remain), elem.trigger("timerstart.zf." + nameSpace)
        }, this.pause = function() {
            this.isPaused = !0, clearTimeout(timer), elem.data("paused", !0);
            var end = Date.now();
            remain -= end - start, elem.trigger("timerpaused.zf." + nameSpace)
        }
    }

    function onImagesLoaded(images, callback) {
        function singleImageLoaded() {
            unloaded--, 0 === unloaded && callback()
        }
        var unloaded = images.length;
        0 === unloaded && callback(), images.each(function() {
            if (this.complete || 4 === this.readyState || "complete" === this.readyState) singleImageLoaded();
            else {
                var src = $(this).attr("src");
                $(this).attr("src", src + (src.indexOf("?") >= 0 ? "&" : "?") + (new Date).getTime()), $(this).one("load", function() {
                    singleImageLoaded()
                })
            }
        })
    }
    Foundation.Timer = Timer, Foundation.onImagesLoaded = onImagesLoaded
}(jQuery), ! function($) {
    function checkListeners() {
        eventsListener(), resizeListener(), scrollListener(), mutateListener(), closemeListener()
    }

    function closemeListener(pluginName) {
        var yetiBoxes = $("[data-yeti-box]"),
            plugNames = ["dropdown", "tooltip", "reveal"];
        if (pluginName && ("string" == typeof pluginName ? plugNames.push(pluginName) : "object" == typeof pluginName && "string" == typeof pluginName[0] ? plugNames.concat(pluginName) : console.error("Plugin names must be strings")), yetiBoxes.length) {
            var listeners = plugNames.map(function(name) {
                return "closeme.zf." + name
            }).join(" ");
            $(window).off(listeners).on(listeners, function(e, pluginId) {
                var plugin = e.namespace.split(".")[0],
                    plugins = $("[data-" + plugin + "]").not('[data-yeti-box="' + pluginId + '"]');
                plugins.each(function() {
                    var _this = $(this);
                    _this.triggerHandler("close.zf.trigger", [_this])
                })
            })
        }
    }

    function resizeListener(debounce) {
        var timer = void 0,
            $nodes = $("[data-resize]");
        $nodes.length && $(window).off("resize.zf.trigger").on("resize.zf.trigger", function(e) {
            timer && clearTimeout(timer), timer = setTimeout(function() {
                MutationObserver || $nodes.each(function() {
                    $(this).triggerHandler("resizeme.zf.trigger")
                }), $nodes.attr("data-events", "resize")
            }, debounce || 10)
        })
    }

    function scrollListener(debounce) {
        var timer = void 0,
            $nodes = $("[data-scroll]");
        $nodes.length && $(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function(e) {
            timer && clearTimeout(timer), timer = setTimeout(function() {
                MutationObserver || $nodes.each(function() {
                    $(this).triggerHandler("scrollme.zf.trigger")
                }), $nodes.attr("data-events", "scroll")
            }, debounce || 10)
        })
    }

    function mutateListener(debounce) {
        var $nodes = $("[data-mutate]");
        $nodes.length && MutationObserver && $nodes.each(function() {
            $(this).triggerHandler("mutateme.zf.trigger")
        })
    }

    function eventsListener() {
        if (!MutationObserver) return !1;
        var nodes = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
            listeningElementsMutation = function(mutationRecordsList) {
                var $target = $(mutationRecordsList[0].target);
                switch (mutationRecordsList[0].type) {
                    case "attributes":
                        "scroll" === $target.attr("data-events") && "data-events" === mutationRecordsList[0].attributeName && $target.triggerHandler("scrollme.zf.trigger", [$target, window.pageYOffset]), "resize" === $target.attr("data-events") && "data-events" === mutationRecordsList[0].attributeName && $target.triggerHandler("resizeme.zf.trigger", [$target]), "style" === mutationRecordsList[0].attributeName && ($target.closest("[data-mutate]").attr("data-events", "mutate"), $target.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [$target.closest("[data-mutate]")]));
                        break;
                    case "childList":
                        $target.closest("[data-mutate]").attr("data-events", "mutate"), $target.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [$target.closest("[data-mutate]")]);
                        break;
                    default:
                        return !1
                }
            };
        if (nodes.length)
            for (var i = 0; i <= nodes.length - 1; i++) {
                var elementObserver = new MutationObserver(listeningElementsMutation);
                elementObserver.observe(nodes[i], {
                    attributes: !0,
                    childList: !0,
                    characterData: !1,
                    subtree: !0,
                    attributeFilter: ["data-events", "style"]
                })
            }
    }
    var MutationObserver = function() {
            for (var prefixes = ["WebKit", "Moz", "O", "Ms", ""], i = 0; i < prefixes.length; i++)
                if (prefixes[i] + "MutationObserver" in window) return window[prefixes[i] + "MutationObserver"];
            return !1
        }(),
        triggers = function(el, type) {
            el.data(type).split(" ").forEach(function(id) {
                $("#" + id)["close" === type ? "trigger" : "triggerHandler"](type + ".zf.trigger", [el])
            })
        };
    $(document).on("click.zf.trigger", "[data-open]", function() {
        triggers($(this), "open")
    }), $(document).on("click.zf.trigger", "[data-close]", function() {
        var id = $(this).data("close");
        id ? triggers($(this), "close") : $(this).trigger("close.zf.trigger")
    }), $(document).on("click.zf.trigger", "[data-toggle]", function() {
        var id = $(this).data("toggle");
        id ? triggers($(this), "toggle") : $(this).trigger("toggle.zf.trigger")
    }), $(document).on("close.zf.trigger", "[data-closable]", function(e) {
        e.stopPropagation();
        var animation = $(this).data("closable");
        "" !== animation ? Foundation.Motion.animateOut($(this), animation, function() {
            $(this).trigger("closed.zf")
        }) : $(this).fadeOut().trigger("closed.zf")
    }), $(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function() {
        var id = $(this).data("toggle-focus");
        $("#" + id).triggerHandler("toggle.zf.trigger", [$(this)])
    }), $(window).on("load", function() {
        checkListeners()
    }), Foundation.IHearYou = checkListeners
}(jQuery),
function() {
    var a;
    a = jQuery, a.fn.extend({
        emailProtector: function(b) {
            var c;
            return c = {
                "preserve-text": !1
            }, c = a.extend(c, b), this.each(function() {
                var b, d, e, f, g;
                return b = a(this), d = b.attr("data-email-protector").split("|"), e = b.attr("data-email-protector-preserve-text") ? "false" !== b.attr("data-email-protector-preserve-text") : c["preserve-text"], 2 === d.length ? ((g = d[1].match(/(\?.+)/)) && (f = g[1], d[1] = d[1].substring(0, d[1].indexOf("?"))), e || b.text(d[0] + "@" + d[1]), b.attr("href", "mailto:" + d[0] + "@" + d[1] + (null != f ? f : ""))) : b.text('Invalid format. eg. <a data-email-protector="foo|bar.com"></a> will become <a href="mailto:foo@bar.com"></a>.')
            })
        }
    })
}.call(this),
    function() {
        var root = this,
            previousUnderscore = root._,
            breaker = {},
            ArrayProto = Array.prototype,
            ObjProto = Object.prototype,
            FuncProto = Function.prototype,
            push = ArrayProto.push,
            slice = ArrayProto.slice,
            concat = ArrayProto.concat,
            toString = ObjProto.toString,
            hasOwnProperty = ObjProto.hasOwnProperty,
            nativeForEach = ArrayProto.forEach,
            nativeMap = ArrayProto.map,
            nativeReduce = ArrayProto.reduce,
            nativeReduceRight = ArrayProto.reduceRight,
            nativeFilter = ArrayProto.filter,
            nativeEvery = ArrayProto.every,
            nativeSome = ArrayProto.some,
            nativeIndexOf = ArrayProto.indexOf,
            nativeLastIndexOf = ArrayProto.lastIndexOf,
            nativeIsArray = Array.isArray,
            nativeKeys = Object.keys,
            nativeBind = FuncProto.bind,
            _ = function(obj) {
                return obj instanceof _ ? obj : this instanceof _ ? void(this._wrapped = obj) : new _(obj)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _), exports._ = _) : root._ = _, _.VERSION = "1.6.0";
        var each = _.each = _.forEach = function(obj, iterator, context) {
            if (null == obj) return obj;
            if (nativeForEach && obj.forEach === nativeForEach) obj.forEach(iterator, context);
            else if (obj.length === +obj.length) {
                for (var i = 0, length = obj.length; i < length; i++)
                    if (iterator.call(context, obj[i], i, obj) === breaker) return
            } else
                for (var keys = _.keys(obj), i = 0, length = keys.length; i < length; i++)
                    if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            return obj
        };
        _.map = _.collect = function(obj, iterator, context) {
            var results = [];
            return null == obj ? results : nativeMap && obj.map === nativeMap ? obj.map(iterator, context) : (each(obj, function(value, index, list) {
                results.push(iterator.call(context, value, index, list))
            }), results)
        };
        var reduceError = "Reduce of empty array with no initial value";
        _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
            var initial = arguments.length > 2;
            if (null == obj && (obj = []), nativeReduce && obj.reduce === nativeReduce) return context && (iterator = _.bind(iterator, context)), initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
            if (each(obj, function(value, index, list) {
                    initial ? memo = iterator.call(context, memo, value, index, list) : (memo = value, initial = !0)
                }), !initial) throw new TypeError(reduceError);
            return memo
        }, _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
            var initial = arguments.length > 2;
            if (null == obj && (obj = []), nativeReduceRight && obj.reduceRight === nativeReduceRight) return context && (iterator = _.bind(iterator, context)), initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
            var length = obj.length;
            if (length !== +length) {
                var keys = _.keys(obj);
                length = keys.length
            }
            if (each(obj, function(value, index, list) {
                    index = keys ? keys[--length] : --length, initial ? memo = iterator.call(context, memo, obj[index], index, list) : (memo = obj[index], initial = !0)
                }), !initial) throw new TypeError(reduceError);
            return memo
        }, _.find = _.detect = function(obj, predicate, context) {
            var result;
            return any(obj, function(value, index, list) {
                if (predicate.call(context, value, index, list)) return result = value, !0
            }), result
        }, _.filter = _.select = function(obj, predicate, context) {
            var results = [];
            return null == obj ? results : nativeFilter && obj.filter === nativeFilter ? obj.filter(predicate, context) : (each(obj, function(value, index, list) {
                predicate.call(context, value, index, list) && results.push(value)
            }), results)
        }, _.reject = function(obj, predicate, context) {
            return _.filter(obj, function(value, index, list) {
                return !predicate.call(context, value, index, list)
            }, context)
        }, _.every = _.all = function(obj, predicate, context) {
            predicate || (predicate = _.identity);
            var result = !0;
            return null == obj ? result : nativeEvery && obj.every === nativeEvery ? obj.every(predicate, context) : (each(obj, function(value, index, list) {
                if (!(result = result && predicate.call(context, value, index, list))) return breaker
            }), !!result)
        };
        var any = _.some = _.any = function(obj, predicate, context) {
            predicate || (predicate = _.identity);
            var result = !1;
            return null == obj ? result : nativeSome && obj.some === nativeSome ? obj.some(predicate, context) : (each(obj, function(value, index, list) {
                if (result || (result = predicate.call(context, value, index, list))) return breaker
            }), !!result)
        };
        _.contains = _.include = function(obj, target) {
            return null != obj && (nativeIndexOf && obj.indexOf === nativeIndexOf ? obj.indexOf(target) != -1 : any(obj, function(value) {
                return value === target
            }))
        }, _.invoke = function(obj, method) {
            var args = slice.call(arguments, 2),
                isFunc = _.isFunction(method);
            return _.map(obj, function(value) {
                return (isFunc ? method : value[method]).apply(value, args)
            })
        }, _.pluck = function(obj, key) {
            return _.map(obj, _.property(key))
        }, _.where = function(obj, attrs) {
            return _.filter(obj, _.matches(attrs))
        }, _.findWhere = function(obj, attrs) {
            return _.find(obj, _.matches(attrs))
        }, _.max = function(obj, iterator, context) {
            if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) return Math.max.apply(Math, obj);
            var result = -(1 / 0),
                lastComputed = -(1 / 0);
            return each(obj, function(value, index, list) {
                var computed = iterator ? iterator.call(context, value, index, list) : value;
                computed > lastComputed && (result = value, lastComputed = computed)
            }), result
        }, _.min = function(obj, iterator, context) {
            if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) return Math.min.apply(Math, obj);
            var result = 1 / 0,
                lastComputed = 1 / 0;
            return each(obj, function(value, index, list) {
                var computed = iterator ? iterator.call(context, value, index, list) : value;
                computed < lastComputed && (result = value, lastComputed = computed)
            }), result
        }, _.shuffle = function(obj) {
            var rand, index = 0,
                shuffled = [];
            return each(obj, function(value) {
                rand = _.random(index++), shuffled[index - 1] = shuffled[rand], shuffled[rand] = value
            }), shuffled
        }, _.sample = function(obj, n, guard) {
            return null == n || guard ? (obj.length !== +obj.length && (obj = _.values(obj)), obj[_.random(obj.length - 1)]) : _.shuffle(obj).slice(0, Math.max(0, n))
        };
        var lookupIterator = function(value) {
            return null == value ? _.identity : _.isFunction(value) ? value : _.property(value)
        };
        _.sortBy = function(obj, iterator, context) {
            return iterator = lookupIterator(iterator), _.pluck(_.map(obj, function(value, index, list) {
                return {
                    value: value,
                    index: index,
                    criteria: iterator.call(context, value, index, list)
                }
            }).sort(function(left, right) {
                var a = left.criteria,
                    b = right.criteria;
                if (a !== b) {
                    if (a > b || void 0 === a) return 1;
                    if (a < b || void 0 === b) return -1
                }
                return left.index - right.index
            }), "value")
        };
        var group = function(behavior) {
            return function(obj, iterator, context) {
                var result = {};
                return iterator = lookupIterator(iterator), each(obj, function(value, index) {
                    var key = iterator.call(context, value, index, obj);
                    behavior(result, key, value)
                }), result
            }
        };
        _.groupBy = group(function(result, key, value) {
            _.has(result, key) ? result[key].push(value) : result[key] = [value]
        }), _.indexBy = group(function(result, key, value) {
            result[key] = value
        }), _.countBy = group(function(result, key) {
            _.has(result, key) ? result[key]++ : result[key] = 1
        }), _.sortedIndex = function(array, obj, iterator, context) {
            iterator = lookupIterator(iterator);
            for (var value = iterator.call(context, obj), low = 0, high = array.length; low < high;) {
                var mid = low + high >>> 1;
                iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid
            }
            return low
        }, _.toArray = function(obj) {
            return obj ? _.isArray(obj) ? slice.call(obj) : obj.length === +obj.length ? _.map(obj, _.identity) : _.values(obj) : []
        }, _.size = function(obj) {
            return null == obj ? 0 : obj.length === +obj.length ? obj.length : _.keys(obj).length
        }, _.first = _.head = _.take = function(array, n, guard) {
            if (null != array) return null == n || guard ? array[0] : n < 0 ? [] : slice.call(array, 0, n)
        }, _.initial = function(array, n, guard) {
            return slice.call(array, 0, array.length - (null == n || guard ? 1 : n))
        }, _.last = function(array, n, guard) {
            if (null != array) return null == n || guard ? array[array.length - 1] : slice.call(array, Math.max(array.length - n, 0))
        }, _.rest = _.tail = _.drop = function(array, n, guard) {
            return slice.call(array, null == n || guard ? 1 : n)
        }, _.compact = function(array) {
            return _.filter(array, _.identity)
        };
        var flatten = function(input, shallow, output) {
            return shallow && _.every(input, _.isArray) ? concat.apply(output, input) : (each(input, function(value) {
                _.isArray(value) || _.isArguments(value) ? shallow ? push.apply(output, value) : flatten(value, shallow, output) : output.push(value)
            }), output)
        };
        _.flatten = function(array, shallow) {
            return flatten(array, shallow, [])
        }, _.without = function(array) {
            return _.difference(array, slice.call(arguments, 1))
        }, _.partition = function(array, predicate, context) {
            predicate = lookupIterator(predicate);
            var pass = [],
                fail = [];
            return each(array, function(elem) {
                (predicate.call(context, elem) ? pass : fail).push(elem)
            }), [pass, fail]
        }, _.uniq = _.unique = function(array, isSorted, iterator, context) {
            _.isFunction(isSorted) && (context = iterator, iterator = isSorted, isSorted = !1);
            var initial = iterator ? _.map(array, iterator, context) : array,
                results = [],
                seen = [];
            return each(initial, function(value, index) {
                (isSorted ? index && seen[seen.length - 1] === value : _.contains(seen, value)) || (seen.push(value), results.push(array[index]))
            }), results
        }, _.union = function() {
            return _.uniq(_.flatten(arguments, !0))
        }, _.intersection = function(array) {
            var rest = slice.call(arguments, 1);
            return _.filter(_.uniq(array), function(item) {
                return _.every(rest, function(other) {
                    return _.contains(other, item)
                })
            })
        }, _.difference = function(array) {
            var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
            return _.filter(array, function(value) {
                return !_.contains(rest, value)
            })
        }, _.zip = function() {
            for (var length = _.max(_.pluck(arguments, "length").concat(0)), results = new Array(length), i = 0; i < length; i++) results[i] = _.pluck(arguments, "" + i);
            return results
        }, _.object = function(list, values) {
            if (null == list) return {};
            for (var result = {}, i = 0, length = list.length; i < length; i++) values ? result[list[i]] = values[i] : result[list[i][0]] = list[i][1];
            return result
        }, _.indexOf = function(array, item, isSorted) {
            if (null == array) return -1;
            var i = 0,
                length = array.length;
            if (isSorted) {
                if ("number" != typeof isSorted) return i = _.sortedIndex(array, item), array[i] === item ? i : -1;
                i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted
            }
            if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
            for (; i < length; i++)
                if (array[i] === item) return i;
            return -1
        }, _.lastIndexOf = function(array, item, from) {
            if (null == array) return -1;
            var hasIndex = null != from;
            if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
            for (var i = hasIndex ? from : array.length; i--;)
                if (array[i] === item) return i;
            return -1
        }, _.range = function(start, stop, step) {
            arguments.length <= 1 && (stop = start || 0, start = 0), step = arguments[2] || 1;
            for (var length = Math.max(Math.ceil((stop - start) / step), 0), idx = 0, range = new Array(length); idx < length;) range[idx++] = start, start += step;
            return range
        };
        var ctor = function() {};
        _.bind = function(func, context) {
            var args, bound;
            if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
            if (!_.isFunction(func)) throw new TypeError;
            return args = slice.call(arguments, 2), bound = function() {
                if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
                ctor.prototype = func.prototype;
                var self = new ctor;
                ctor.prototype = null;
                var result = func.apply(self, args.concat(slice.call(arguments)));
                return Object(result) === result ? result : self
            }
        }, _.partial = function(func) {
            var boundArgs = slice.call(arguments, 1);
            return function() {
                for (var position = 0, args = boundArgs.slice(), i = 0, length = args.length; i < length; i++) args[i] === _ && (args[i] = arguments[position++]);
                for (; position < arguments.length;) args.push(arguments[position++]);
                return func.apply(this, args)
            }
        }, _.bindAll = function(obj) {
            var funcs = slice.call(arguments, 1);
            if (0 === funcs.length) throw new Error("bindAll must be passed function names");
            return each(funcs, function(f) {
                obj[f] = _.bind(obj[f], obj)
            }), obj
        }, _.memoize = function(func, hasher) {
            var memo = {};
            return hasher || (hasher = _.identity),
                function() {
                    var key = hasher.apply(this, arguments);
                    return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments)
                }
        }, _.delay = function(func, wait) {
            var args = slice.call(arguments, 2);
            return setTimeout(function() {
                return func.apply(null, args)
            }, wait)
        }, _.defer = function(func) {
            return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)))
        }, _.throttle = function(func, wait, options) {
            var context, args, result, timeout = null,
                previous = 0;
            options || (options = {});
            var later = function() {
                previous = options.leading === !1 ? 0 : _.now(), timeout = null, result = func.apply(context, args), context = args = null
            };
            return function() {
                var now = _.now();
                previous || options.leading !== !1 || (previous = now);
                var remaining = wait - (now - previous);
                return context = this, args = arguments, remaining <= 0 ? (clearTimeout(timeout), timeout = null, previous = now, result = func.apply(context, args), context = args = null) : timeout || options.trailing === !1 || (timeout = setTimeout(later, remaining)), result
            }
        }, _.debounce = function(func, wait, immediate) {
            var timeout, args, context, timestamp, result, later = function() {
                var last = _.now() - timestamp;
                last < wait ? timeout = setTimeout(later, wait - last) : (timeout = null, immediate || (result = func.apply(context, args), context = args = null))
            };
            return function() {
                context = this, args = arguments, timestamp = _.now();
                var callNow = immediate && !timeout;
                return timeout || (timeout = setTimeout(later, wait)), callNow && (result = func.apply(context, args), context = args = null), result
            }
        }, _.once = function(func) {
            var memo, ran = !1;
            return function() {
                return ran ? memo : (ran = !0, memo = func.apply(this, arguments), func = null, memo)
            }
        }, _.wrap = function(func, wrapper) {
            return _.partial(wrapper, func)
        }, _.compose = function() {
            var funcs = arguments;
            return function() {
                for (var args = arguments, i = funcs.length - 1; i >= 0; i--) args = [funcs[i].apply(this, args)];
                return args[0]
            }
        }, _.after = function(times, func) {
            return function() {
                if (--times < 1) return func.apply(this, arguments)
            }
        }, _.keys = function(obj) {
            if (!_.isObject(obj)) return [];
            if (nativeKeys) return nativeKeys(obj);
            var keys = [];
            for (var key in obj) _.has(obj, key) && keys.push(key);
            return keys
        }, _.values = function(obj) {
            for (var keys = _.keys(obj), length = keys.length, values = new Array(length), i = 0; i < length; i++) values[i] = obj[keys[i]];
            return values
        }, _.pairs = function(obj) {
            for (var keys = _.keys(obj), length = keys.length, pairs = new Array(length), i = 0; i < length; i++) pairs[i] = [keys[i], obj[keys[i]]];
            return pairs
        }, _.invert = function(obj) {
            for (var result = {}, keys = _.keys(obj), i = 0, length = keys.length; i < length; i++) result[obj[keys[i]]] = keys[i];
            return result
        }, _.functions = _.methods = function(obj) {
            var names = [];
            for (var key in obj) _.isFunction(obj[key]) && names.push(key);
            return names.sort()
        }, _.extend = function(obj) {
            return each(slice.call(arguments, 1), function(source) {
                if (source)
                    for (var prop in source) obj[prop] = source[prop]
            }), obj
        }, _.pick = function(obj) {
            var copy = {},
                keys = concat.apply(ArrayProto, slice.call(arguments, 1));
            return each(keys, function(key) {
                key in obj && (copy[key] = obj[key])
            }), copy
        }, _.omit = function(obj) {
            var copy = {},
                keys = concat.apply(ArrayProto, slice.call(arguments, 1));
            for (var key in obj) _.contains(keys, key) || (copy[key] = obj[key]);
            return copy
        }, _.defaults = function(obj) {
            return each(slice.call(arguments, 1), function(source) {
                if (source)
                    for (var prop in source) void 0 === obj[prop] && (obj[prop] = source[prop])
            }), obj
        }, _.clone = function(obj) {
            return _.isObject(obj) ? _.isArray(obj) ? obj.slice() : _.extend({}, obj) : obj
        }, _.tap = function(obj, interceptor) {
            return interceptor(obj), obj
        };
        var eq = function(a, b, aStack, bStack) {
            if (a === b) return 0 !== a || 1 / a == 1 / b;
            if (null == a || null == b) return a === b;
            a instanceof _ && (a = a._wrapped), b instanceof _ && (b = b._wrapped);
            var className = toString.call(a);
            if (className != toString.call(b)) return !1;
            switch (className) {
                case "[object String]":
                    return a == String(b);
                case "[object Number]":
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case "[object Date]":
                case "[object Boolean]":
                    return +a == +b;
                case "[object RegExp]":
                    return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
            }
            if ("object" != typeof a || "object" != typeof b) return !1;
            for (var length = aStack.length; length--;)
                if (aStack[length] == a) return bStack[length] == b;
            var aCtor = a.constructor,
                bCtor = b.constructor;
            if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) return !1;
            aStack.push(a), bStack.push(b);
            var size = 0,
                result = !0;
            if ("[object Array]" == className) {
                if (size = a.length, result = size == b.length)
                    for (; size-- && (result = eq(a[size], b[size], aStack, bStack)););
            } else {
                for (var key in a)
                    if (_.has(a, key) && (size++, !(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack)))) break;
                if (result) {
                    for (key in b)
                        if (_.has(b, key) && !size--) break;
                    result = !size
                }
            }
            return aStack.pop(), bStack.pop(), result
        };
        _.isEqual = function(a, b) {
            return eq(a, b, [], [])
        }, _.isEmpty = function(obj) {
            if (null == obj) return !0;
            if (_.isArray(obj) || _.isString(obj)) return 0 === obj.length;
            for (var key in obj)
                if (_.has(obj, key)) return !1;
            return !0
        }, _.isElement = function(obj) {
            return !(!obj || 1 !== obj.nodeType)
        }, _.isArray = nativeIsArray || function(obj) {
            return "[object Array]" == toString.call(obj)
        }, _.isObject = function(obj) {
            return obj === Object(obj)
        }, each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(name) {
            _["is" + name] = function(obj) {
                return toString.call(obj) == "[object " + name + "]"
            }
        }), _.isArguments(arguments) || (_.isArguments = function(obj) {
            return !(!obj || !_.has(obj, "callee"))
        }), "function" != typeof /./ && (_.isFunction = function(obj) {
            return "function" == typeof obj
        }), _.isFinite = function(obj) {
            return isFinite(obj) && !isNaN(parseFloat(obj))
        }, _.isNaN = function(obj) {
            return _.isNumber(obj) && obj != +obj
        }, _.isBoolean = function(obj) {
            return obj === !0 || obj === !1 || "[object Boolean]" == toString.call(obj)
        }, _.isNull = function(obj) {
            return null === obj
        }, _.isUndefined = function(obj) {
            return void 0 === obj
        }, _.has = function(obj, key) {
            return hasOwnProperty.call(obj, key)
        }, _.noConflict = function() {
            return root._ = previousUnderscore, this
        }, _.identity = function(value) {
            return value
        }, _.constant = function(value) {
            return function() {
                return value
            }
        }, _.property = function(key) {
            return function(obj) {
                return obj[key]
            }
        }, _.matches = function(attrs) {
            return function(obj) {
                if (obj === attrs) return !0;
                for (var key in attrs)
                    if (attrs[key] !== obj[key]) return !1;
                return !0
            }
        }, _.times = function(n, iterator, context) {
            for (var accum = Array(Math.max(0, n)), i = 0; i < n; i++) accum[i] = iterator.call(context, i);
            return accum
        }, _.random = function(min, max) {
            return null == max && (max = min, min = 0), min + Math.floor(Math.random() * (max - min + 1))
        }, _.now = Date.now || function() {
            return (new Date).getTime()
        };
        var entityMap = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        entityMap.unescape = _.invert(entityMap.escape);
        var entityRegexes = {
            escape: new RegExp("[" + _.keys(entityMap.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + _.keys(entityMap.unescape).join("|") + ")", "g")
        };
        _.each(["escape", "unescape"], function(method) {
            _[method] = function(string) {
                return null == string ? "" : ("" + string).replace(entityRegexes[method], function(match) {
                    return entityMap[method][match]
                })
            }
        }), _.result = function(object, property) {
            if (null != object) {
                var value = object[property];
                return _.isFunction(value) ? value.call(object) : value
            }
        }, _.mixin = function(obj) {
            each(_.functions(obj), function(name) {
                var func = _[name] = obj[name];
                _.prototype[name] = function() {
                    var args = [this._wrapped];
                    return push.apply(args, arguments), result.call(this, func.apply(_, args))
                }
            })
        };
        var idCounter = 0;
        _.uniqueId = function(prefix) {
            var id = ++idCounter + "";
            return prefix ? prefix + id : id
        }, _.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/,
            escapes = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\t": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        _.template = function(text, data, settings) {
            var render;
            settings = _.defaults({}, settings, _.templateSettings);
            var matcher = new RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g"),
                index = 0,
                source = "__p+='";
            text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
                return source += text.slice(index, offset).replace(escaper, function(match) {
                    return "\\" + escapes[match]
                }), escape && (source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'"), interpolate && (source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'"), evaluate && (source += "';\n" + evaluate + "\n__p+='"), index = offset + match.length, match
            }), source += "';\n", settings.variable || (source = "with(obj||{}){\n" + source + "}\n"), source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
            try {
                render = new Function(settings.variable || "obj", "_", source)
            } catch (e) {
                throw e.source = source, e
            }
            if (data) return render(data, _);
            var template = function(data) {
                return render.call(this, data, _)
            };
            return template.source = "function(" + (settings.variable || "obj") + "){\n" + source + "}", template
        }, _.chain = function(obj) {
            return _(obj).chain()
        };
        var result = function(obj) {
            return this._chain ? _(obj).chain() : obj
        };
        _.mixin(_), each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
            var method = ArrayProto[name];
            _.prototype[name] = function() {
                var obj = this._wrapped;
                return method.apply(obj, arguments), "shift" != name && "splice" != name || 0 !== obj.length || delete obj[0], result.call(this, obj)
            }
        }), each(["concat", "join", "slice"], function(name) {
            var method = ArrayProto[name];
            _.prototype[name] = function() {
                return result.call(this, method.apply(this._wrapped, arguments))
            }
        }), _.extend(_.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        }), "function" == typeof define && define.amd && define("underscore", [], function() {
            return _
        })
    }.call(this),
    function(root, factory) {
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(_, $, exports) {
            root.Backbone = factory(root, exports, _, $)
        });
        else if ("undefined" != typeof exports) {
            var _ = require("underscore");
            factory(root, exports, _)
        } else root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$)
    }(this, function(root, Backbone, _, $) {
        var previousBackbone = root.Backbone,
            array = [],
            slice = (array.push, array.slice);
        array.splice, Backbone.VERSION = "1.1.2", Backbone.$ = $, Backbone.noConflict = function() {
            return root.Backbone = previousBackbone, this
        }, Backbone.emulateHTTP = !1, Backbone.emulateJSON = !1;
        var Events = Backbone.Events = {
                on: function(name, callback, context) {
                    if (!eventsApi(this, "on", name, [callback, context]) || !callback) return this;
                    this._events || (this._events = {});
                    var events = this._events[name] || (this._events[name] = []);
                    return events.push({
                        callback: callback,
                        context: context,
                        ctx: context || this
                    }), this
                },
                once: function(name, callback, context) {
                    if (!eventsApi(this, "once", name, [callback, context]) || !callback) return this;
                    var self = this,
                        once = _.once(function() {
                            self.off(name, once), callback.apply(this, arguments)
                        });
                    return once._callback = callback, this.on(name, once, context)
                },
                off: function(name, callback, context) {
                    var retain, ev, events, names, i, l, j, k;
                    if (!this._events || !eventsApi(this, "off", name, [callback, context])) return this;
                    if (!name && !callback && !context) return this._events = void 0, this;
                    for (names = name ? [name] : _.keys(this._events), i = 0, l = names.length; i < l; i++)
                        if (name = names[i], events = this._events[name]) {
                            if (this._events[name] = retain = [], callback || context)
                                for (j = 0, k = events.length; j < k; j++) ev = events[j], (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) && retain.push(ev);
                            retain.length || delete this._events[name]
                        }
                    return this
                },
                trigger: function(name) {
                    if (!this._events) return this;
                    var args = slice.call(arguments, 1);
                    if (!eventsApi(this, "trigger", name, args)) return this;
                    var events = this._events[name],
                        allEvents = this._events.all;
                    return events && triggerEvents(events, args), allEvents && triggerEvents(allEvents, arguments), this
                },
                stopListening: function(obj, name, callback) {
                    var listeningTo = this._listeningTo;
                    if (!listeningTo) return this;
                    var remove = !name && !callback;
                    callback || "object" != typeof name || (callback = this), obj && ((listeningTo = {})[obj._listenId] = obj);
                    for (var id in listeningTo) obj = listeningTo[id], obj.off(name, callback, this), (remove || _.isEmpty(obj._events)) && delete this._listeningTo[id];
                    return this
                }
            },
            eventSplitter = /\s+/,
            eventsApi = function(obj, action, name, rest) {
                if (!name) return !0;
                if ("object" == typeof name) {
                    for (var key in name) obj[action].apply(obj, [key, name[key]].concat(rest));
                    return !1
                }
                if (eventSplitter.test(name)) {
                    for (var names = name.split(eventSplitter), i = 0, l = names.length; i < l; i++) obj[action].apply(obj, [names[i]].concat(rest));
                    return !1
                }
                return !0
            },
            triggerEvents = function(events, args) {
                var ev, i = -1,
                    l = events.length,
                    a1 = args[0],
                    a2 = args[1],
                    a3 = args[2];
                switch (args.length) {
                    case 0:
                        for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx);
                        return;
                    case 1:
                        for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1);
                        return;
                    case 2:
                        for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1, a2);
                        return;
                    case 3:
                        for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                        return;
                    default:
                        for (; ++i < l;)(ev = events[i]).callback.apply(ev.ctx, args);
                        return
                }
            },
            listenMethods = {
                listenTo: "on",
                listenToOnce: "once"
            };
        _.each(listenMethods, function(implementation, method) {
            Events[method] = function(obj, name, callback) {
                var listeningTo = this._listeningTo || (this._listeningTo = {}),
                    id = obj._listenId || (obj._listenId = _.uniqueId("l"));
                return listeningTo[id] = obj, callback || "object" != typeof name || (callback = this), obj[implementation](name, callback, this), this
            }
        }), Events.bind = Events.on, Events.unbind = Events.off, _.extend(Backbone, Events);
        var Model = Backbone.Model = function(attributes, options) {
            var attrs = attributes || {};
            options || (options = {}), this.cid = _.uniqueId("c"), this.attributes = {}, options.collection && (this.collection = options.collection), options.parse && (attrs = this.parse(attrs, options) || {}), attrs = _.defaults({}, attrs, _.result(this, "defaults")), this.set(attrs, options), this.changed = {}, this.initialize.apply(this, arguments)
        };
        _.extend(Model.prototype, Events, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(options) {
                return _.clone(this.attributes)
            },
            sync: function() {
                return Backbone.sync.apply(this, arguments)
            },
            get: function(attr) {
                return this.attributes[attr]
            },
            escape: function(attr) {
                return _.escape(this.get(attr))
            },
            has: function(attr) {
                return null != this.get(attr)
            },
            set: function(key, val, options) {
                var attr, attrs, unset, changes, silent, changing, prev, current;
                if (null == key) return this;
                if ("object" == typeof key ? (attrs = key, options = val) : (attrs = {})[key] = val, options || (options = {}), !this._validate(attrs, options)) return !1;
                unset = options.unset, silent = options.silent, changes = [], changing = this._changing, this._changing = !0, changing || (this._previousAttributes = _.clone(this.attributes), this.changed = {}), current = this.attributes, prev = this._previousAttributes, this.idAttribute in attrs && (this.id = attrs[this.idAttribute]);
                for (attr in attrs) val = attrs[attr],
                    _.isEqual(current[attr], val) || changes.push(attr), _.isEqual(prev[attr], val) ? delete this.changed[attr] : this.changed[attr] = val, unset ? delete current[attr] : current[attr] = val;
                if (!silent) {
                    changes.length && (this._pending = options);
                    for (var i = 0, l = changes.length; i < l; i++) this.trigger("change:" + changes[i], this, current[changes[i]], options)
                }
                if (changing) return this;
                if (!silent)
                    for (; this._pending;) options = this._pending, this._pending = !1, this.trigger("change", this, options);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(attr, options) {
                return this.set(attr, void 0, _.extend({}, options, {
                    unset: !0
                }))
            },
            clear: function(options) {
                var attrs = {};
                for (var key in this.attributes) attrs[key] = void 0;
                return this.set(attrs, _.extend({}, options, {
                    unset: !0
                }))
            },
            hasChanged: function(attr) {
                return null == attr ? !_.isEmpty(this.changed) : _.has(this.changed, attr)
            },
            changedAttributes: function(diff) {
                if (!diff) return !!this.hasChanged() && _.clone(this.changed);
                var val, changed = !1,
                    old = this._changing ? this._previousAttributes : this.attributes;
                for (var attr in diff) _.isEqual(old[attr], val = diff[attr]) || ((changed || (changed = {}))[attr] = val);
                return changed
            },
            previous: function(attr) {
                return null != attr && this._previousAttributes ? this._previousAttributes[attr] : null
            },
            previousAttributes: function() {
                return _.clone(this._previousAttributes)
            },
            fetch: function(options) {
                options = options ? _.clone(options) : {}, void 0 === options.parse && (options.parse = !0);
                var model = this,
                    success = options.success;
                return options.success = function(resp) {
                    return !!model.set(model.parse(resp, options), options) && (success && success(model, resp, options), void model.trigger("sync", model, resp, options))
                }, wrapError(this, options), this.sync("read", this, options)
            },
            save: function(key, val, options) {
                var attrs, method, xhr, attributes = this.attributes;
                if (null == key || "object" == typeof key ? (attrs = key, options = val) : (attrs = {})[key] = val, options = _.extend({
                        validate: !0
                    }, options), attrs && !options.wait) {
                    if (!this.set(attrs, options)) return !1
                } else if (!this._validate(attrs, options)) return !1;
                attrs && options.wait && (this.attributes = _.extend({}, attributes, attrs)), void 0 === options.parse && (options.parse = !0);
                var model = this,
                    success = options.success;
                return options.success = function(resp) {
                    model.attributes = attributes;
                    var serverAttrs = model.parse(resp, options);
                    return options.wait && (serverAttrs = _.extend(attrs || {}, serverAttrs)), !(_.isObject(serverAttrs) && !model.set(serverAttrs, options)) && (success && success(model, resp, options), void model.trigger("sync", model, resp, options))
                }, wrapError(this, options), method = this.isNew() ? "create" : options.patch ? "patch" : "update", "patch" === method && (options.attrs = attrs), xhr = this.sync(method, this, options), attrs && options.wait && (this.attributes = attributes), xhr
            },
            destroy: function(options) {
                options = options ? _.clone(options) : {};
                var model = this,
                    success = options.success,
                    destroy = function() {
                        model.trigger("destroy", model, model.collection, options)
                    };
                if (options.success = function(resp) {
                        (options.wait || model.isNew()) && destroy(), success && success(model, resp, options), model.isNew() || model.trigger("sync", model, resp, options)
                    }, this.isNew()) return options.success(), !1;
                wrapError(this, options);
                var xhr = this.sync("delete", this, options);
                return options.wait || destroy(), xhr
            },
            url: function() {
                var base = _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError();
                return this.isNew() ? base : base.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(resp, options) {
                return resp
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(options) {
                return this._validate({}, _.extend(options || {}, {
                    validate: !0
                }))
            },
            _validate: function(attrs, options) {
                if (!options.validate || !this.validate) return !0;
                attrs = _.extend({}, this.attributes, attrs);
                var error = this.validationError = this.validate(attrs, options) || null;
                return !error || (this.trigger("invalid", this, error, _.extend(options, {
                    validationError: error
                })), !1)
            }
        });
        var modelMethods = ["keys", "values", "pairs", "invert", "pick", "omit"];
        _.each(modelMethods, function(method) {
            Model.prototype[method] = function() {
                var args = slice.call(arguments);
                return args.unshift(this.attributes), _[method].apply(_, args)
            }
        });
        var Collection = Backbone.Collection = function(models, options) {
                options || (options = {}), options.model && (this.model = options.model), void 0 !== options.comparator && (this.comparator = options.comparator), this._reset(), this.initialize.apply(this, arguments), models && this.reset(models, _.extend({
                    silent: !0
                }, options))
            },
            setOptions = {
                add: !0,
                remove: !0,
                merge: !0
            },
            addOptions = {
                add: !0,
                remove: !1
            };
        _.extend(Collection.prototype, Events, {
            model: Model,
            initialize: function() {},
            toJSON: function(options) {
                return this.map(function(model) {
                    return model.toJSON(options)
                })
            },
            sync: function() {
                return Backbone.sync.apply(this, arguments)
            },
            add: function(models, options) {
                return this.set(models, _.extend({
                    merge: !1
                }, options, addOptions))
            },
            remove: function(models, options) {
                var singular = !_.isArray(models);
                models = singular ? [models] : _.clone(models), options || (options = {});
                var i, l, index, model;
                for (i = 0, l = models.length; i < l; i++) model = models[i] = this.get(models[i]), model && (delete this._byId[model.id], delete this._byId[model.cid], index = this.indexOf(model), this.models.splice(index, 1), this.length--, options.silent || (options.index = index, model.trigger("remove", model, this, options)), this._removeReference(model, options));
                return singular ? models[0] : models
            },
            set: function(models, options) {
                options = _.defaults({}, options, setOptions), options.parse && (models = this.parse(models, options));
                var singular = !_.isArray(models);
                models = singular ? models ? [models] : [] : _.clone(models);
                var i, l, id, model, attrs, existing, sort, at = options.at,
                    targetModel = this.model,
                    sortable = this.comparator && null == at && options.sort !== !1,
                    sortAttr = _.isString(this.comparator) ? this.comparator : null,
                    toAdd = [],
                    toRemove = [],
                    modelMap = {},
                    add = options.add,
                    merge = options.merge,
                    remove = options.remove,
                    order = !(sortable || !add || !remove) && [];
                for (i = 0, l = models.length; i < l; i++) {
                    if (attrs = models[i] || {}, id = attrs instanceof Model ? model = attrs : attrs[targetModel.prototype.idAttribute || "id"], existing = this.get(id)) remove && (modelMap[existing.cid] = !0), merge && (attrs = attrs === model ? model.attributes : attrs, options.parse && (attrs = existing.parse(attrs, options)), existing.set(attrs, options), sortable && !sort && existing.hasChanged(sortAttr) && (sort = !0)), models[i] = existing;
                    else if (add) {
                        if (model = models[i] = this._prepareModel(attrs, options), !model) continue;
                        toAdd.push(model), this._addReference(model, options)
                    }
                    model = existing || model, !order || !model.isNew() && modelMap[model.id] || order.push(model), modelMap[model.id] = !0
                }
                if (remove) {
                    for (i = 0, l = this.length; i < l; ++i) modelMap[(model = this.models[i]).cid] || toRemove.push(model);
                    toRemove.length && this.remove(toRemove, options)
                }
                if (toAdd.length || order && order.length)
                    if (sortable && (sort = !0), this.length += toAdd.length, null != at)
                        for (i = 0, l = toAdd.length; i < l; i++) this.models.splice(at + i, 0, toAdd[i]);
                    else {
                        order && (this.models.length = 0);
                        var orderedModels = order || toAdd;
                        for (i = 0, l = orderedModels.length; i < l; i++) this.models.push(orderedModels[i])
                    }
                if (sort && this.sort({
                        silent: !0
                    }), !options.silent) {
                    for (i = 0, l = toAdd.length; i < l; i++)(model = toAdd[i]).trigger("add", model, this, options);
                    (sort || order && order.length) && this.trigger("sort", this, options)
                }
                return singular ? models[0] : models
            },
            reset: function(models, options) {
                options || (options = {});
                for (var i = 0, l = this.models.length; i < l; i++) this._removeReference(this.models[i], options);
                return options.previousModels = this.models, this._reset(), models = this.add(models, _.extend({
                    silent: !0
                }, options)), options.silent || this.trigger("reset", this, options), models
            },
            push: function(model, options) {
                return this.add(model, _.extend({
                    at: this.length
                }, options))
            },
            pop: function(options) {
                var model = this.at(this.length - 1);
                return this.remove(model, options), model
            },
            unshift: function(model, options) {
                return this.add(model, _.extend({
                    at: 0
                }, options))
            },
            shift: function(options) {
                var model = this.at(0);
                return this.remove(model, options), model
            },
            slice: function() {
                return slice.apply(this.models, arguments)
            },
            get: function(obj) {
                if (null != obj) return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid]
            },
            at: function(index) {
                return this.models[index]
            },
            where: function(attrs, first) {
                return _.isEmpty(attrs) ? first ? void 0 : [] : this[first ? "find" : "filter"](function(model) {
                    for (var key in attrs)
                        if (attrs[key] !== model.get(key)) return !1;
                    return !0
                })
            },
            findWhere: function(attrs) {
                return this.where(attrs, !0)
            },
            sort: function(options) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return options || (options = {}), _.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(_.bind(this.comparator, this)), options.silent || this.trigger("sort", this, options), this
            },
            pluck: function(attr) {
                return _.invoke(this.models, "get", attr)
            },
            fetch: function(options) {
                options = options ? _.clone(options) : {}, void 0 === options.parse && (options.parse = !0);
                var success = options.success,
                    collection = this;
                return options.success = function(resp) {
                    var method = options.reset ? "reset" : "set";
                    collection[method](resp, options), success && success(collection, resp, options), collection.trigger("sync", collection, resp, options)
                }, wrapError(this, options), this.sync("read", this, options)
            },
            create: function(model, options) {
                if (options = options ? _.clone(options) : {}, !(model = this._prepareModel(model, options))) return !1;
                options.wait || this.add(model, options);
                var collection = this,
                    success = options.success;
                return options.success = function(model, resp) {
                    options.wait && collection.add(model, options), success && success(model, resp, options)
                }, model.save(null, options), model
            },
            parse: function(resp, options) {
                return resp
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(attrs, options) {
                if (attrs instanceof Model) return attrs;
                options = options ? _.clone(options) : {}, options.collection = this;
                var model = new this.model(attrs, options);
                return model.validationError ? (this.trigger("invalid", this, model.validationError, options), !1) : model
            },
            _addReference: function(model, options) {
                this._byId[model.cid] = model, null != model.id && (this._byId[model.id] = model), model.collection || (model.collection = this), model.on("all", this._onModelEvent, this)
            },
            _removeReference: function(model, options) {
                this === model.collection && delete model.collection, model.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(event, model, collection, options) {
                ("add" !== event && "remove" !== event || collection === this) && ("destroy" === event && this.remove(model, options), model && event === "change:" + model.idAttribute && (delete this._byId[model.previous(model.idAttribute)], null != model.id && (this._byId[model.id] = model)), this.trigger.apply(this, arguments))
            }
        });
        var methods = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        _.each(methods, function(method) {
            Collection.prototype[method] = function() {
                var args = slice.call(arguments);
                return args.unshift(this.models), _[method].apply(_, args)
            }
        });
        var attributeMethods = ["groupBy", "countBy", "sortBy", "indexBy"];
        _.each(attributeMethods, function(method) {
            Collection.prototype[method] = function(value, context) {
                var iterator = _.isFunction(value) ? value : function(model) {
                    return model.get(value)
                };
                return _[method](this.models, iterator, context)
            }
        });
        var View = Backbone.View = function(options) {
                this.cid = _.uniqueId("view"), options || (options = {}), _.extend(this, _.pick(options, viewOptions)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            delegateEventSplitter = /^(\S+)\s*(.*)$/,
            viewOptions = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        _.extend(View.prototype, Events, {
            tagName: "div",
            $: function(selector) {
                return this.$el.find(selector)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(element, delegate) {
                return this.$el && this.undelegateEvents(), this.$el = element instanceof Backbone.$ ? element : Backbone.$(element), this.el = this.$el[0], delegate !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(events) {
                if (!events && !(events = _.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var key in events) {
                    var method = events[key];
                    if (_.isFunction(method) || (method = this[events[key]]), method) {
                        var match = key.match(delegateEventSplitter),
                            eventName = match[1],
                            selector = match[2];
                        method = _.bind(method, this), eventName += ".delegateEvents" + this.cid, "" === selector ? this.$el.on(eventName, method) : this.$el.on(eventName, selector, method)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el) this.setElement(_.result(this, "el"), !1);
                else {
                    var attrs = _.extend({}, _.result(this, "attributes"));
                    this.id && (attrs.id = _.result(this, "id")), this.className && (attrs["class"] = _.result(this, "className"));
                    var $el = Backbone.$("<" + _.result(this, "tagName") + ">").attr(attrs);
                    this.setElement($el, !1)
                }
            }
        }), Backbone.sync = function(method, model, options) {
            var type = methodMap[method];
            _.defaults(options || (options = {}), {
                emulateHTTP: Backbone.emulateHTTP,
                emulateJSON: Backbone.emulateJSON
            });
            var params = {
                type: type,
                dataType: "json"
            };
            if (options.url || (params.url = _.result(model, "url") || urlError()), null != options.data || !model || "create" !== method && "update" !== method && "patch" !== method || (params.contentType = "application/json", params.data = JSON.stringify(options.attrs || model.toJSON(options))), options.emulateJSON && (params.contentType = "application/x-www-form-urlencoded", params.data = params.data ? {
                    model: params.data
                } : {}), options.emulateHTTP && ("PUT" === type || "DELETE" === type || "PATCH" === type)) {
                params.type = "POST", options.emulateJSON && (params.data._method = type);
                var beforeSend = options.beforeSend;
                options.beforeSend = function(xhr) {
                    if (xhr.setRequestHeader("X-HTTP-Method-Override", type), beforeSend) return beforeSend.apply(this, arguments)
                }
            }
            "GET" === params.type || options.emulateJSON || (params.processData = !1), "PATCH" === params.type && noXhrPatch && (params.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
            return model.trigger("request", model, xhr, options), xhr
        };
        var noXhrPatch = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            methodMap = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        Backbone.ajax = function() {
            return Backbone.$.ajax.apply(Backbone.$, arguments)
        };
        var Router = Backbone.Router = function(options) {
                options || (options = {}), options.routes && (this.routes = options.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            optionalParam = /\((.*?)\)/g,
            namedParam = /(\(\?)?:\w+/g,
            splatParam = /\*\w+/g,
            escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        _.extend(Router.prototype, Events, {
            initialize: function() {},
            route: function(route, name, callback) {
                _.isRegExp(route) || (route = this._routeToRegExp(route)), _.isFunction(name) && (callback = name, name = ""), callback || (callback = this[name]);
                var router = this;
                return Backbone.history.route(route, function(fragment) {
                    var args = router._extractParameters(route, fragment);
                    router.execute(callback, args), router.trigger.apply(router, ["route:" + name].concat(args)), router.trigger("route", name, args), Backbone.history.trigger("route", router, name, args)
                }), this
            },
            execute: function(callback, args) {
                callback && callback.apply(this, args)
            },
            navigate: function(fragment, options) {
                return Backbone.history.navigate(fragment, options), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = _.result(this, "routes");
                    for (var route, routes = _.keys(this.routes); null != (route = routes.pop());) this.route(route, this.routes[route])
                }
            },
            _routeToRegExp: function(route) {
                return route = route.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, function(match, optional) {
                    return optional ? match : "([^/?]+)"
                }).replace(splatParam, "([^?]*?)"), new RegExp("^" + route + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(route, fragment) {
                var params = route.exec(fragment).slice(1);
                return _.map(params, function(param, i) {
                    return i === params.length - 1 ? param || null : param ? decodeURIComponent(param) : null
                })
            }
        });
        var History = Backbone.History = function() {
                this.handlers = [], _.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            routeStripper = /^[#\/]|\s+$/g,
            rootStripper = /^\/+|\/+$/g,
            isExplorer = /msie [\w.]+/,
            trailingSlash = /\/$/,
            pathStripper = /#.*$/;
        History.started = !1, _.extend(History.prototype, Events, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(window) {
                var match = (window || this).location.href.match(/#(.*)$/);
                return match ? match[1] : ""
            },
            getFragment: function(fragment, forcePushState) {
                if (null == fragment)
                    if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                        fragment = decodeURI(this.location.pathname + this.location.search);
                        var root = this.root.replace(trailingSlash, "");
                        fragment.indexOf(root) || (fragment = fragment.slice(root.length))
                    } else fragment = this.getHash();
                return fragment.replace(routeStripper, "")
            },
            start: function(options) {
                if (History.started) throw new Error("Backbone.history has already been started");
                History.started = !0, this.options = _.extend({
                    root: "/"
                }, this.options, options), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var fragment = this.getFragment(),
                    docMode = document.documentMode,
                    oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7);
                if (this.root = ("/" + this.root + "/").replace(rootStripper, "/"), oldIE && this._wantsHashChange) {
                    var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = frame.hide().appendTo("body")[0].contentWindow, this.navigate(fragment)
                }
                this._hasPushState ? Backbone.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !oldIE ? Backbone.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = fragment;
                var loc = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && loc.hash && (this.fragment = this.getHash().replace(routeStripper, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                if (!this.options.silent) return this.loadUrl()
            },
            stop: function() {
                Backbone.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), History.started = !1
            },
            route: function(route, callback) {
                this.handlers.unshift({
                    route: route,
                    callback: callback
                })
            },
            checkUrl: function(e) {
                var current = this.getFragment();
                return current === this.fragment && this.iframe && (current = this.getFragment(this.getHash(this.iframe))), current !== this.fragment && (this.iframe && this.navigate(current), void this.loadUrl())
            },
            loadUrl: function(fragment) {
                return fragment = this.fragment = this.getFragment(fragment), _.any(this.handlers, function(handler) {
                    if (handler.route.test(fragment)) return handler.callback(fragment), !0
                })
            },
            navigate: function(fragment, options) {
                if (!History.started) return !1;
                options && options !== !0 || (options = {
                    trigger: !!options
                });
                var url = this.root + (fragment = this.getFragment(fragment || ""));
                if (fragment = fragment.replace(pathStripper, ""), this.fragment !== fragment) {
                    if (this.fragment = fragment, "" === fragment && "/" !== url && (url = url.slice(0, -1)), this._hasPushState) this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(url);
                        this._updateHash(this.location, fragment, options.replace), this.iframe && fragment !== this.getFragment(this.getHash(this.iframe)) && (options.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, fragment, options.replace))
                    }
                    return options.trigger ? this.loadUrl(fragment) : void 0
                }
            },
            _updateHash: function(location, fragment, replace) {
                if (replace) {
                    var href = location.href.replace(/(javascript:|#).*$/, "");
                    location.replace(href + "#" + fragment)
                } else location.hash = "#" + fragment
            }
        }), Backbone.history = new History;
        var extend = function(protoProps, staticProps) {
            var child, parent = this;
            child = protoProps && _.has(protoProps, "constructor") ? protoProps.constructor : function() {
                return parent.apply(this, arguments)
            }, _.extend(child, parent, staticProps);
            var Surrogate = function() {
                this.constructor = child
            };
            return Surrogate.prototype = parent.prototype, child.prototype = new Surrogate, protoProps && _.extend(child.prototype, protoProps), child.__super__ = parent.prototype, child
        };
        Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
        var urlError = function() {
                throw new Error('A "url" property or function must be specified')
            },
            wrapError = function(model, options) {
                var error = options.error;
                options.error = function(resp) {
                    error && error(model, resp, options), model.trigger("error", model, resp, options)
                }
            };
        return Backbone
    }),
    function(a) {
        function b() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function c(a, b) {
            return function(c) {
                return k(a.call(this, c), b)
            }
        }

        function d(a, b) {
            return function(c) {
                return this.lang().ordinal(a.call(this, c), b)
            }
        }

        function e() {}

        function f(a) {
            w(a), h(this, a)
        }

        function g(a) {
            var b = q(a),
                c = b.year || 0,
                d = b.month || 0,
                e = b.week || 0,
                f = b.day || 0,
                g = b.hour || 0,
                h = b.minute || 0,
                i = b.second || 0,
                j = b.millisecond || 0;
            this._milliseconds = +j + 1e3 * i + 6e4 * h + 36e5 * g, this._days = +f + 7 * e, this._months = +d + 12 * c, this._data = {}, this._bubble()
        }

        function h(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
        }

        function i(a) {
            var b, c = {};
            for (b in a) a.hasOwnProperty(b) && qb.hasOwnProperty(b) && (c[b] = a[b]);
            return c
        }

        function j(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        }

        function k(a, b, c) {
            for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
            return (e ? c ? "+" : "" : "-") + d
        }

        function l(a, b, c, d) {
            var e, f, g = b._milliseconds,
                h = b._days,
                i = b._months;
            g && a._d.setTime(+a._d + g * c), (h || i) && (e = a.minute(), f = a.hour()), h && a.date(a.date() + h * c), i && a.month(a.month() + i * c), g && !d && db.updateOffset(a), (h || i) && (a.minute(e), a.hour(f))
        }

        function m(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }

        function n(a) {
            return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
        }

        function o(a, b, c) {
            var d, e = Math.min(a.length, b.length),
                f = Math.abs(a.length - b.length),
                g = 0;
            for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && s(a[d]) !== s(b[d])) && g++;
            return g + f
        }

        function p(a) {
            if (a) {
                var b = a.toLowerCase().replace(/(.)s$/, "$1");
                a = Tb[a] || Ub[b] || b
            }
            return a
        }

        function q(a) {
            var b, c, d = {};
            for (c in a) a.hasOwnProperty(c) && (b = p(c), b && (d[b] = a[c]));
            return d
        }

        function r(b) {
            var c, d;
            if (0 === b.indexOf("week")) c = 7, d = "day";
            else {
                if (0 !== b.indexOf("month")) return;
                c = 12, d = "month"
            }
            db[b] = function(e, f) {
                var g, h, i = db.fn._lang[b],
                    j = [];
                if ("number" == typeof e && (f = e, e = a), h = function(a) {
                        var b = db().utc().set(d, a);
                        return i.call(db.fn._lang, b, e || "")
                    }, null != f) return h(f);
                for (g = 0; c > g; g++) j.push(h(g));
                return j
            }
        }

        function s(a) {
            var b = +a,
                c = 0;
            return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
        }

        function t(a, b) {
            return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
        }

        function u(a) {
            return v(a) ? 366 : 365
        }

        function v(a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        }

        function w(a) {
            var b;
            a._a && -2 === a._pf.overflow && (b = a._a[jb] < 0 || a._a[jb] > 11 ? jb : a._a[kb] < 1 || a._a[kb] > t(a._a[ib], a._a[jb]) ? kb : a._a[lb] < 0 || a._a[lb] > 23 ? lb : a._a[mb] < 0 || a._a[mb] > 59 ? mb : a._a[nb] < 0 || a._a[nb] > 59 ? nb : a._a[ob] < 0 || a._a[ob] > 999 ? ob : -1, a._pf._overflowDayOfYear && (ib > b || b > kb) && (b = kb), a._pf.overflow = b)
        }

        function x(a) {
            return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
        }

        function y(a) {
            return a ? a.toLowerCase().replace("_", "-") : a
        }

        function z(a, b) {
            return b._isUTC ? db(a).zone(b._offset || 0) : db(a).local()
        }

        function A(a, b) {
            return b.abbr = a, pb[a] || (pb[a] = new e), pb[a].set(b), pb[a]
        }

        function B(a) {
            delete pb[a]
        }

        function C(a) {
            var b, c, d, e, f = 0,
                g = function(a) {
                    if (!pb[a] && rb) try {
                        require("./lang/" + a)
                    } catch (b) {}
                    return pb[a]
                };
            if (!a) return db.fn._lang;
            if (!m(a)) {
                if (c = g(a)) return c;
                a = [a]
            }
            for (; f < a.length;) {
                for (e = y(a[f]).split("-"), b = e.length, d = y(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
                    if (c = g(e.slice(0, b).join("-"))) return c;
                    if (d && d.length >= b && o(e, d, !0) >= b - 1) break;
                    b--
                }
                f++
            }
            return db.fn._lang
        }

        function D(a) {
            return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
        }

        function E(a) {
            var b, c, d = a.match(vb);
            for (b = 0, c = d.length; c > b; b++) d[b] = Yb[d[b]] ? Yb[d[b]] : D(d[b]);
            return function(e) {
                var f = "";
                for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                return f
            }
        }

        function F(a, b) {
            return a.isValid() ? (b = G(b, a.lang()), Vb[b] || (Vb[b] = E(b)), Vb[b](a)) : a.lang().invalidDate()
        }

        function G(a, b) {
            function c(a) {
                return b.longDateFormat(a) || a
            }
            var d = 5;
            for (wb.lastIndex = 0; d >= 0 && wb.test(a);) a = a.replace(wb, c), wb.lastIndex = 0, d -= 1;
            return a
        }

        function H(a, b) {
            var c, d = b._strict;
            switch (a) {
                case "DDDD":
                    return Ib;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return d ? Jb : zb;
                case "Y":
                case "G":
                case "g":
                    return Lb;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return d ? Kb : Ab;
                case "S":
                    if (d) return Gb;
                case "SS":
                    if (d) return Hb;
                case "SSS":
                    if (d) return Ib;
                case "DDD":
                    return yb;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Cb;
                case "a":
                case "A":
                    return C(b._l)._meridiemParse;
                case "X":
                    return Fb;
                case "Z":
                case "ZZ":
                    return Db;
                case "T":
                    return Eb;
                case "SSSS":
                    return Bb;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return d ? Hb : xb;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return xb;
                default:
                    return c = new RegExp(P(O(a.replace("\\", "")), "i"))
            }
        }

        function I(a) {
            a = a || "";
            var b = a.match(Db) || [],
                c = b[b.length - 1] || [],
                d = (c + "").match(Qb) || ["-", 0, 0],
                e = +(60 * d[1]) + s(d[2]);
            return "+" === d[0] ? -e : e
        }

        function J(a, b, c) {
            var d, e = c._a;
            switch (a) {
                case "M":
                case "MM":
                    null != b && (e[jb] = s(b) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    d = C(c._l).monthsParse(b), null != d ? e[jb] = d : c._pf.invalidMonth = b;
                    break;
                case "D":
                case "DD":
                    null != b && (e[kb] = s(b));
                    break;
                case "DDD":
                case "DDDD":
                    null != b && (c._dayOfYear = s(b));
                    break;
                case "YY":
                    e[ib] = s(b) + (s(b) > 68 ? 1900 : 2e3);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    e[ib] = s(b);
                    break;
                case "a":
                case "A":
                    c._isPm = C(c._l).isPM(b);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    e[lb] = s(b);
                    break;
                case "m":
                case "mm":
                    e[mb] = s(b);
                    break;
                case "s":
                case "ss":
                    e[nb] = s(b);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    e[ob] = s(1e3 * ("0." + b));
                    break;
                case "X":
                    c._d = new Date(1e3 * parseFloat(b));
                    break;
                case "Z":
                case "ZZ":
                    c._useUTC = !0, c._tzm = I(b);
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "dd":
                case "ddd":
                case "dddd":
                case "e":
                case "E":
                    a = a.substr(0, 1);
                case "gg":
                case "gggg":
                case "GG":
                case "GGGG":
                case "GGGGG":
                    a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b)
            }
        }

        function K(a) {
            var b, c, d, e, f, g, h, i, j, k, l = [];
            if (!a._d) {
                for (d = M(a), a._w && null == a._a[kb] && null == a._a[jb] && (f = function(b) {
                        var c = parseInt(b, 10);
                        return b ? b.length < 3 ? c > 68 ? 1900 + c : 2e3 + c : c : null == a._a[ib] ? db().weekYear() : a._a[ib]
                    }, g = a._w, null != g.GG || null != g.W || null != g.E ? h = Z(f(g.GG), g.W || 1, g.E, 4, 1) : (i = C(a._l), j = null != g.d ? V(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = Z(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[ib] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[ib] ? d[ib] : a._a[ib], a._dayOfYear > u(e) && (a._pf._overflowDayOfYear = !0), c = U(e, 0, a._dayOfYear), a._a[jb] = c.getUTCMonth(), a._a[kb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = l[b] = d[b];
                for (; 7 > b; b++) a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
                l[lb] += s((a._tzm || 0) / 60), l[mb] += s((a._tzm || 0) % 60), a._d = (a._useUTC ? U : T).apply(null, l)
            }
        }

        function L(a) {
            var b;
            a._d || (b = q(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], K(a))
        }

        function M(a) {
            var b = new Date;
            return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
        }

        function N(a) {
            a._a = [], a._pf.empty = !0;
            var b, c, d, e, f, g = C(a._l),
                h = "" + a._i,
                i = h.length,
                j = 0;
            for (d = G(a._f, g).match(vb) || [], b = 0; b < d.length; b++) e = d[b], c = (h.match(H(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), Yb[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), J(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
            a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[lb] < 12 && (a._a[lb] += 12), a._isPm === !1 && 12 === a._a[lb] && (a._a[lb] = 0), K(a), w(a)
        }

        function O(a) {
            return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
                return b || c || d || e
            })
        }

        function P(a) {
            return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function Q(a) {
            var c, d, e, f, g;
            if (0 === a._f.length) return a._pf.invalidFormat = !0, void(a._d = new Date(NaN));
            for (f = 0; f < a._f.length; f++) g = 0, c = h({}, a), c._pf = b(), c._f = a._f[f], N(c), x(c) && (g += c._pf.charsLeftOver, g += 10 * c._pf.unusedTokens.length, c._pf.score = g, (null == e || e > g) && (e = g, d = c));
            h(a, d || c)
        }

        function R(a) {
            var b, c, d = a._i,
                e = Mb.exec(d);
            if (e) {
                for (a._pf.iso = !0, b = 0, c = Ob.length; c > b; b++)
                    if (Ob[b][1].exec(d)) {
                        a._f = Ob[b][0] + (e[6] || " ");
                        break
                    }
                for (b = 0, c = Pb.length; c > b; b++)
                    if (Pb[b][1].exec(d)) {
                        a._f += Pb[b][0];
                        break
                    }
                d.match(Db) && (a._f += "Z"), N(a)
            } else a._d = new Date(d)
        }

        function S(b) {
            var c = b._i,
                d = sb.exec(c);
            c === a ? b._d = new Date : d ? b._d = new Date((+d[1])) : "string" == typeof c ? R(b) : m(c) ? (b._a = c.slice(0), K(b)) : n(c) ? b._d = new Date((+c)) : "object" == typeof c ? L(b) : b._d = new Date(c)
        }

        function T(a, b, c, d, e, f, g) {
            var h = new Date(a, b, c, d, e, f, g);
            return 1970 > a && h.setFullYear(a), h
        }

        function U(a) {
            var b = new Date(Date.UTC.apply(null, arguments));
            return 1970 > a && b.setUTCFullYear(a), b
        }

        function V(a, b) {
            if ("string" == typeof a)
                if (isNaN(a)) {
                    if (a = b.weekdaysParse(a), "number" != typeof a) return null
                } else a = parseInt(a, 10);
            return a
        }

        function W(a, b, c, d, e) {
            return e.relativeTime(b || 1, !!c, a, d)
        }

        function X(a, b, c) {
            var d = hb(Math.abs(a) / 1e3),
                e = hb(d / 60),
                f = hb(e / 60),
                g = hb(f / 24),
                h = hb(g / 365),
                i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", hb(g / 30)] || 1 === h && ["y"] || ["yy", h];
            return i[2] = b, i[3] = a > 0, i[4] = c, W.apply({}, i)
        }

        function Y(a, b, c) {
            var d, e = c - b,
                f = c - a.day();
            return f > e && (f -= 7), e - 7 > f && (f += 7), d = db(a).add("d", f), {
                week: Math.ceil(d.dayOfYear() / 7),
                year: d.year()
            }
        }

        function Z(a, b, c, d, e) {
            var f, g, h = U(a, 0, 1).getUTCDay();
            return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
                year: g > 0 ? a : a - 1,
                dayOfYear: g > 0 ? g : u(a - 1) + g
            }
        }

        function $(a) {
            var b = a._i,
                c = a._f;
            return null === b ? db.invalid({
                nullInput: !0
            }) : ("string" == typeof b && (a._i = b = C().preparse(b)), db.isMoment(b) ? (a = i(b), a._d = new Date((+b._d))) : c ? m(c) ? Q(a) : N(a) : S(a), new f(a))
        }

        function _(a, b) {
            db.fn[a] = db.fn[a + "s"] = function(a) {
                var c = this._isUTC ? "UTC" : "";
                return null != a ? (this._d["set" + c + b](a), db.updateOffset(this), this) : this._d["get" + c + b]()
            }
        }

        function ab(a) {
            db.duration.fn[a] = function() {
                return this._data[a]
            }
        }

        function bb(a, b) {
            db.duration.fn["as" + a] = function() {
                return +this / b
            }
        }

        function cb(a) {
            var b = !1,
                c = db;
            "undefined" == typeof ender && (a ? (gb.moment = function() {
                return !b && console && console.warn && (b = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), c.apply(null, arguments)
            }, h(gb.moment, c)) : gb.moment = db)
        }
        for (var db, eb, fb = "2.5.1", gb = this, hb = Math.round, ib = 0, jb = 1, kb = 2, lb = 3, mb = 4, nb = 5, ob = 6, pb = {}, qb = {
                _isAMomentObject: null,
                _i: null,
                _f: null,
                _l: null,
                _strict: null,
                _isUTC: null,
                _offset: null,
                _pf: null,
                _lang: null
            }, rb = "undefined" != typeof module && module.exports && "undefined" != typeof require, sb = /^\/?Date\((\-?\d+)/i, tb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, ub = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, vb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, wb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, xb = /\d\d?/, yb = /\d{1,3}/, zb = /\d{1,4}/, Ab = /[+\-]?\d{1,6}/, Bb = /\d+/, Cb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Db = /Z|[\+\-]\d\d:?\d\d/gi, Eb = /T/i, Fb = /[\+\-]?\d+(\.\d{1,3})?/, Gb = /\d/, Hb = /\d\d/, Ib = /\d{3}/, Jb = /\d{4}/, Kb = /[+-]?\d{6}/, Lb = /[+-]?\d+/, Mb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Nb = "YYYY-MM-DDTHH:mm:ssZ", Ob = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ], Pb = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ], Qb = /([\+\-]|\d\d)/gi, Rb = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Sb = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }, Tb = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, Ub = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, Vb = {}, Wb = "DDD w W M D d".split(" "), Xb = "M D H h m s w W".split(" "), Yb = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(a) {
                    return this.lang().monthsShort(this, a)
                },
                MMMM: function(a) {
                    return this.lang().months(this, a)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(a) {
                    return this.lang().weekdaysMin(this, a)
                },
                ddd: function(a) {
                    return this.lang().weekdaysShort(this, a)
                },
                dddd: function(a) {
                    return this.lang().weekdays(this, a)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return k(this.year() % 100, 2)
                },
                YYYY: function() {
                    return k(this.year(), 4)
                },
                YYYYY: function() {
                    return k(this.year(), 5)
                },
                YYYYYY: function() {
                    var a = this.year(),
                        b = a >= 0 ? "+" : "-";
                    return b + k(Math.abs(a), 6)
                },
                gg: function() {
                    return k(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return k(this.weekYear(), 4)
                },
                ggggg: function() {
                    return k(this.weekYear(), 5)
                },
                GG: function() {
                    return k(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return k(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return k(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return s(this.milliseconds() / 100)
                },
                SS: function() {
                    return k(s(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return k(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return k(this.milliseconds(), 3)
                },
                Z: function() {
                    var a = -this.zone(),
                        b = "+";
                    return 0 > a && (a = -a, b = "-"), b + k(s(a / 60), 2) + ":" + k(s(a) % 60, 2)
                },
                ZZ: function() {
                    var a = -this.zone(),
                        b = "+";
                    return 0 > a && (a = -a, b = "-"), b + k(s(a / 60), 2) + k(s(a) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, Zb = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Wb.length;) eb = Wb.pop(), Yb[eb + "o"] = d(Yb[eb], eb);
        for (; Xb.length;) eb = Xb.pop(), Yb[eb + eb] = c(Yb[eb], 2);
        for (Yb.DDDD = c(Yb.DDD, 3), h(e.prototype, {
                set: function(a) {
                    var b, c;
                    for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
                },
                _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                months: function(a) {
                    return this._months[a.month()]
                },
                _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                monthsShort: function(a) {
                    return this._monthsShort[a.month()]
                },
                monthsParse: function(a) {
                    var b, c, d;
                    for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)
                        if (this._monthsParse[b] || (c = db.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
                },
                _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdays: function(a) {
                    return this._weekdays[a.day()]
                },
                _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysShort: function(a) {
                    return this._weekdaysShort[a.day()]
                },
                _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                weekdaysMin: function(a) {
                    return this._weekdaysMin[a.day()]
                },
                weekdaysParse: function(a) {
                    var b, c, d;
                    for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
                        if (this._weekdaysParse[b] || (c = db([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
                },
                _longDateFormat: {
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D YYYY",
                    LLL: "MMMM D YYYY LT",
                    LLLL: "dddd, MMMM D YYYY LT"
                },
                longDateFormat: function(a) {
                    var b = this._longDateFormat[a];
                    return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                        return a.slice(1)
                    }), this._longDateFormat[a] = b), b
                },
                isPM: function(a) {
                    return "p" === (a + "").toLowerCase().charAt(0)
                },
                _meridiemParse: /[ap]\.?m?\.?/i,
                meridiem: function(a, b, c) {
                    return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
                },
                _calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                calendar: function(a, b) {
                    var c = this._calendar[a];
                    return "function" == typeof c ? c.apply(b) : c
                },
                _relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                relativeTime: function(a, b, c, d) {
                    var e = this._relativeTime[c];
                    return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
                },
                pastFuture: function(a, b) {
                    var c = this._relativeTime[a > 0 ? "future" : "past"];
                    return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
                },
                ordinal: function(a) {
                    return this._ordinal.replace("%d", a)
                },
                _ordinal: "%d",
                preparse: function(a) {
                    return a
                },
                postformat: function(a) {
                    return a
                },
                week: function(a) {
                    return Y(a, this._week.dow, this._week.doy).week
                },
                _week: {
                    dow: 0,
                    doy: 6
                },
                _invalidDate: "Invalid date",
                invalidDate: function() {
                    return this._invalidDate
                }
            }), db = function(c, d, e, f) {
                var g;
                return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = c, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = b(), $(g)
            }, db.utc = function(c, d, e, f) {
                var g;
                return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = c, g._f = d, g._strict = f, g._pf = b(), $(g).utc()
            }, db.unix = function(a) {
                return db(1e3 * a)
            }, db.duration = function(a, b) {
                var c, d, e, f = a,
                    h = null;
                return db.isDuration(a) ? f = {
                    ms: a._milliseconds,
                    d: a._days,
                    M: a._months
                } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = tb.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
                    y: 0,
                    d: s(h[kb]) * c,
                    h: s(h[lb]) * c,
                    m: s(h[mb]) * c,
                    s: s(h[nb]) * c,
                    ms: s(h[ob]) * c
                }) : (h = ub.exec(a)) && (c = "-" === h[1] ? -1 : 1, e = function(a) {
                    var b = a && parseFloat(a.replace(",", "."));
                    return (isNaN(b) ? 0 : b) * c
                }, f = {
                    y: e(h[2]),
                    M: e(h[3]),
                    d: e(h[4]),
                    h: e(h[5]),
                    m: e(h[6]),
                    s: e(h[7]),
                    w: e(h[8])
                }), d = new g(f), db.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
            }, db.version = fb, db.defaultFormat = Nb, db.updateOffset = function() {}, db.lang = function(a, b) {
                var c;
                return a ? (b ? A(y(a), b) : null === b ? (B(a), a = "en") : pb[a] || C(a), c = db.duration.fn._lang = db.fn._lang = C(a), c._abbr) : db.fn._lang._abbr
            }, db.langData = function(a) {
                return a && a._lang && a._lang._abbr && (a = a._lang._abbr), C(a)
            }, db.isMoment = function(a) {
                return a instanceof f || null != a && a.hasOwnProperty("_isAMomentObject")
            }, db.isDuration = function(a) {
                return a instanceof g
            }, eb = Zb.length - 1; eb >= 0; --eb) r(Zb[eb]);
        for (db.normalizeUnits = function(a) {
                return p(a)
            }, db.invalid = function(a) {
                var b = db.utc(NaN);
                return null != a ? h(b._pf, a) : b._pf.userInvalidated = !0, b
            }, db.parseZone = function(a) {
                return db(a).parseZone()
            }, h(db.fn = f.prototype, {
                clone: function() {
                    return db(this)
                },
                valueOf: function() {
                    return +this._d + 6e4 * (this._offset || 0)
                },
                unix: function() {
                    return Math.floor(+this / 1e3)
                },
                toString: function() {
                    return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                toDate: function() {
                    return this._offset ? new Date((+this)) : this._d
                },
                toISOString: function() {
                    var a = db(this).utc();
                    return 0 < a.year() && a.year() <= 9999 ? F(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : F(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                },
                toArray: function() {
                    var a = this;
                    return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
                },
                isValid: function() {
                    return x(this)
                },
                isDSTShifted: function() {
                    return !!this._a && this.isValid() && o(this._a, (this._isUTC ? db.utc(this._a) : db(this._a)).toArray()) > 0
                },
                parsingFlags: function() {
                    return h({}, this._pf)
                },
                invalidAt: function() {
                    return this._pf.overflow
                },
                utc: function() {
                    return this.zone(0)
                },
                local: function() {
                    return this.zone(0), this._isUTC = !1, this
                },
                format: function(a) {
                    var b = F(this, a || db.defaultFormat);
                    return this.lang().postformat(b)
                },
                add: function(a, b) {
                    var c;
                    return c = "string" == typeof a ? db.duration(+b, a) : db.duration(a, b), l(this, c, 1), this
                },
                subtract: function(a, b) {
                    var c;
                    return c = "string" == typeof a ? db.duration(+b, a) : db.duration(a, b), l(this, c, -1), this
                },
                diff: function(a, b, c) {
                    var d, e, f = z(a, this),
                        g = 6e4 * (this.zone() - f.zone());
                    return b = p(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - db(this).startOf("month") - (f - db(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - db(this).startOf("month").zone() - (f.zone() - db(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : j(e)
                },
                from: function(a, b) {
                    return db.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
                },
                fromNow: function(a) {
                    return this.from(db(), a)
                },
                calendar: function() {
                    var a = z(db(), this).startOf("day"),
                        b = this.diff(a, "days", !0),
                        c = -6 > b ? "sameElse" : -1 > b ? "lastWeek" : 0 > b ? "lastDay" : 1 > b ? "sameDay" : 2 > b ? "nextDay" : 7 > b ? "nextWeek" : "sameElse";
                    return this.format(this.lang().calendar(c, this))
                },
                isLeapYear: function() {
                    return v(this.year())
                },
                isDST: function() {
                    return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
                },
                day: function(a) {
                    var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != a ? (a = V(a, this.lang()), this.add({
                        d: a - b
                    })) : b
                },
                month: function(a) {
                    var b, c = this._isUTC ? "UTC" : "";
                    return null != a ? "string" == typeof a && (a = this.lang().monthsParse(a), "number" != typeof a) ? this : (b = this.date(), this.date(1), this._d["set" + c + "Month"](a), this.date(Math.min(b, this.daysInMonth())), db.updateOffset(this), this) : this._d["get" + c + "Month"]()
                },
                startOf: function(a) {
                    switch (a = p(a)) {
                        case "year":
                            this.month(0);
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), this
                },
                endOf: function(a) {
                    return a = p(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
                },
                isAfter: function(a, b) {
                    return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +db(a).startOf(b)
                },
                isBefore: function(a, b) {
                    return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +db(a).startOf(b)
                },
                isSame: function(a, b) {
                    return b = b || "ms", +this.clone().startOf(b) === +z(a, this).startOf(b)
                },
                min: function(a) {
                    return a = db.apply(null, arguments), this > a ? this : a
                },
                max: function(a) {
                    return a = db.apply(null, arguments), a > this ? this : a
                },
                zone: function(a) {
                    var b = this._offset || 0;
                    return null == a ? this._isUTC ? b : this._d.getTimezoneOffset() : ("string" == typeof a && (a = I(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, b !== a && l(this, db.duration(b - a, "m"), 1, !0), this)
                },
                zoneAbbr: function() {
                    return this._isUTC ? "UTC" : ""
                },
                zoneName: function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                },
                parseZone: function() {
                    return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
                },
                hasAlignedHourOffset: function(a) {
                    return a = a ? db(a).zone() : 0, (this.zone() - a) % 60 === 0
                },
                daysInMonth: function() {
                    return t(this.year(), this.month())
                },
                dayOfYear: function(a) {
                    var b = hb((db(this).startOf("day") - db(this).startOf("year")) / 864e5) + 1;
                    return null == a ? b : this.add("d", a - b)
                },
                quarter: function() {
                    return Math.ceil((this.month() + 1) / 3)
                },
                weekYear: function(a) {
                    var b = Y(this, this.lang()._week.dow, this.lang()._week.doy).year;
                    return null == a ? b : this.add("y", a - b)
                },
                isoWeekYear: function(a) {
                    var b = Y(this, 1, 4).year;
                    return null == a ? b : this.add("y", a - b)
                },
                week: function(a) {
                    var b = this.lang().week(this);
                    return null == a ? b : this.add("d", 7 * (a - b))
                },
                isoWeek: function(a) {
                    var b = Y(this, 1, 4).week;
                    return null == a ? b : this.add("d", 7 * (a - b))
                },
                weekday: function(a) {
                    var b = (this.day() + 7 - this.lang()._week.dow) % 7;
                    return null == a ? b : this.add("d", a - b)
                },
                isoWeekday: function(a) {
                    return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
                },
                get: function(a) {
                    return a = p(a), this[a]()
                },
                set: function(a, b) {
                    return a = p(a), "function" == typeof this[a] && this[a](b), this
                },
                lang: function(b) {
                    return b === a ? this._lang : (this._lang = C(b), this)
                }
            }), eb = 0; eb < Rb.length; eb++) _(Rb[eb].toLowerCase().replace(/s$/, ""), Rb[eb]);
        _("year", "FullYear"), db.fn.days = db.fn.day, db.fn.months = db.fn.month, db.fn.weeks = db.fn.week, db.fn.isoWeeks = db.fn.isoWeek, db.fn.toJSON = db.fn.toISOString, h(db.duration.fn = g.prototype, {
            _bubble: function() {
                var a, b, c, d, e = this._milliseconds,
                    f = this._days,
                    g = this._months,
                    h = this._data;
                h.milliseconds = e % 1e3, a = j(e / 1e3), h.seconds = a % 60, b = j(a / 60), h.minutes = b % 60, c = j(b / 60), h.hours = c % 24, f += j(c / 24), h.days = f % 30, g += j(f / 30), h.months = g % 12, d = j(g / 12), h.years = d
            },
            weeks: function() {
                return j(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * s(this._months / 12)
            },
            humanize: function(a) {
                var b = +this,
                    c = X(b, !a, this.lang());
                return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
            },
            add: function(a, b) {
                var c = db.duration(a, b);
                return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
            },
            subtract: function(a, b) {
                var c = db.duration(a, b);
                return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
            },
            get: function(a) {
                return a = p(a), this[a.toLowerCase() + "s"]()
            },
            as: function(a) {
                return a = p(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
            },
            lang: db.fn.lang,
            toIsoString: function() {
                var a = Math.abs(this.years()),
                    b = Math.abs(this.months()),
                    c = Math.abs(this.days()),
                    d = Math.abs(this.hours()),
                    e = Math.abs(this.minutes()),
                    f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
            }
        });
        for (eb in Sb) Sb.hasOwnProperty(eb) && (bb(eb, Sb[eb]), ab(eb.toLowerCase()));
        bb("Weeks", 6048e5), db.duration.fn.asMonths = function() {
            return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
        }, db.lang("en", {
            ordinal: function(a) {
                var b = a % 10,
                    c = 1 === s(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }), rb ? (module.exports = db, cb(!0)) : "function" == typeof define && define.amd ? define("moment", function(b, c, d) {
            return d.config && d.config() && d.config().noGlobal !== !0 && cb(d.config().noGlobal === a), db
        }) : cb()
    }.call(this), ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        var b = window.Slick || {};
        b = function() {
            function c(c, d) {
                var f, e = this;
                e.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(c),
                    appendDots: a(c),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(b, c) {
                        return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, e.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
            }
            var b = 0;
            return c
        }(), b.prototype.activateADA = function() {
            var a = this;
            a.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null;
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b)
            }), e.$slidesCache = e.$slides, e.reinit()
        }, b.prototype.animateHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({
                    height: b
                }, a.options.speed)
            }
        }, b.prototype.animateSlide = function(b, c) {
            var d = {},
                e = this;
            e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function(a) {
                    a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function() {
                    c && c.call()
                }
            })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
                e.disableTransition(), c.call()
            }, e.options.speed))
        }, b.prototype.getNavTarget = function() {
            var b = this,
                c = b.options.asNavFor;
            return c && null !== c && (c = a(c).not(b.$slider)), c
        }, b.prototype.asNavFor = function(b) {
            var c = this,
                d = c.getNavTarget();
            null !== d && "object" == typeof d && d.each(function() {
                var c = a(this).slick("getSlick");
                c.unslicked || c.slideHandler(b, !0)
            })
        }, b.prototype.applyTransition = function(a) {
            var b = this,
                c = {};
            b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.autoPlay = function() {
            var a = this;
            a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
        }, b.prototype.autoPlayClear = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer)
        }, b.prototype.autoPlayIterator = function() {
            var a = this,
                b = a.currentSlide + a.options.slidesToScroll;
            a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
        }, b.prototype.buildArrows = function() {
            var b = this;
            b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, b.prototype.buildDots = function() {
            var c, d, b = this;
            if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
                for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
                b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, b.prototype.buildOut = function() {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
            }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
        }, b.prototype.buildRows = function() {
            var b, c, d, e, f, g, h, a = this;
            if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
                for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                    var i = document.createElement("div");
                    for (c = 0; c < a.options.rows; c++) {
                        var j = document.createElement("div");
                        for (d = 0; d < a.options.slidesPerRow; d++) {
                            var k = b * h + (c * a.options.slidesPerRow + d);
                            g.get(k) && j.appendChild(g.get(k))
                        }
                        i.appendChild(j)
                    }
                    e.appendChild(i)
                }
                a.$slider.empty().append(e), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, b.prototype.checkResponsive = function(b, c) {
            var e, f, g, d = this,
                h = !1,
                i = d.$slider.width(),
                j = window.innerWidth || a(window).width();
            if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
                f = null;
                for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
                null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
            }
        }, b.prototype.changeSlide = function(b, c) {
            var f, g, h, d = this,
                e = a(b.currentTarget);
            switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
                case "previous":
                    g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                    break;
                case "next":
                    g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                    break;
                case "index":
                    var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                    d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, b.prototype.checkNavigable = function(a) {
            var c, d, b = this;
            if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
            else
                for (var e in c) {
                    if (a < c[e]) {
                        a = d;
                        break
                    }
                    d = c[e]
                }
            return a
        }, b.prototype.cleanUpEvents = function() {
            var b = this;
            b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.cleanUpSlideEvents = function() {
            var b = this;
            b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
        }, b.prototype.cleanUpRows = function() {
            var b, a = this;
            a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
        }, b.prototype.clickHandler = function(a) {
            var b = this;
            b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
        }, b.prototype.destroy = function(b) {
            var c = this;
            c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                a(this).attr("style", a(this).data("originalStyling"))
            }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
        }, b.prototype.disableTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.fadeSlide = function(a, b) {
            var c = this;
            c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                zIndex: c.options.zIndex
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: c.options.zIndex
            }), b && setTimeout(function() {
                c.disableTransition(a), b.call()
            }, c.options.speed))
        }, b.prototype.fadeSlideOut = function(a) {
            var b = this;
            b.cssTransitions === !1 ? b.$slides.eq(a).animate({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }))
        }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
            var b = this;
            null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
        }, b.prototype.focusHandler = function() {
            var b = this;
            b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
                c.stopImmediatePropagation();
                var d = a(this);
                setTimeout(function() {
                    b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
                }, 0)
            })
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
            var a = this;
            return a.currentSlide
        }, b.prototype.getDotCount = function() {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (a.options.infinite === !0)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else if (a.options.centerMode === !0) d = a.slideCount;
            else if (a.options.asNavFor)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
            return d - 1
        }, b.prototype.getLeft = function(a) {
            var c, d, f, b = this,
                e = 0;
            return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
        }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
            var b = this;
            return b.options[a]
        }, b.prototype.getNavigableIndexes = function() {
            var e, a = this,
                b = 0,
                c = 0,
                d = [];
            for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            return d
        }, b.prototype.getSlick = function() {
            return this
        }, b.prototype.getSlideCount = function() {
            var c, d, e, b = this;
            return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
                return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
            }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
        }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
            var c = this;
            c.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b)
        }, b.prototype.init = function(b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
        }, b.prototype.initADA = function() {
            var b = this;
            b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
                a(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + b.instanceUid + c
                })
            }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
                a(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + b.instanceUid + c,
                    id: "slick-slide" + b.instanceUid + c
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
        }, b.prototype.initArrowEvents = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, a.changeSlide))
        }, b.prototype.initDotEvents = function() {
            var b = this;
            b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
        }, b.prototype.initSlideEvents = function() {
            var b = this;
            b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
        }, b.prototype.initializeEvents = function() {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.initUI = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
        }, b.prototype.keyHandler = function(a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
                data: {
                    message: b.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
                data: {
                    message: b.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, b.prototype.lazyLoad = function() {
            function g(c) {
                a("img[data-lazy]", c).each(function() {
                    var c = a(this),
                        d = a(this).attr("data-lazy"),
                        e = document.createElement("img");
                    e.onload = function() {
                        c.animate({
                            opacity: 0
                        }, 100, function() {
                            c.attr("src", d).animate({
                                opacity: 1
                            }, 200, function() {
                                c.removeAttr("data-lazy").removeClass("slick-loading")
                            }), b.$slider.trigger("lazyLoaded", [b, c, d])
                        })
                    }, e.onerror = function() {
                        c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                    }, e.src = d
                })
            }
            var c, d, e, f, b = this;
            b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
        }, b.prototype.loadSlider = function() {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
        }, b.prototype.next = b.prototype.slickNext = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.orientationChange = function() {
            var a = this;
            a.checkResponsive(), a.setPosition()
        }, b.prototype.pause = b.prototype.slickPause = function() {
            var a = this;
            a.autoPlayClear(), a.paused = !0
        }, b.prototype.play = b.prototype.slickPlay = function() {
            var a = this;
            a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
        }, b.prototype.postSlide = function(a) {
            var b = this;
            b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
        }, b.prototype.prev = b.prototype.slickPrev = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, b.prototype.preventDefault = function(a) {
            a.preventDefault()
        }, b.prototype.progressiveLazyLoad = function(b) {
            b = b || 1;
            var e, f, g, c = this,
                d = a("img[data-lazy]", c.$slider);
            d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() {
                e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
            }, g.onerror = function() {
                3 > b ? setTimeout(function() {
                    c.progressiveLazyLoad(b + 1)
                }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
            }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
        }, b.prototype.refresh = function(b) {
            var d, e, c = this;
            e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
                currentSlide: d
            }), c.init(), b || c.changeSlide({
                data: {
                    message: "index",
                    index: d
                }
            }, !1)
        }, b.prototype.registerBreakpoints = function() {
            var c, d, e, b = this,
                f = b.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                b.respondTo = b.options.respondTo || "window";
                for (c in f)
                    if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                        for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                        b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                    }
                b.breakpoints.sort(function(a, c) {
                    return b.options.mobileFirst ? a - c : c - a
                })
            }
        }, b.prototype.reinit = function() {
            var b = this;
            b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
        }, b.prototype.resize = function() {
            var b = this;
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
            }, 50))
        }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
            var d = this;
            return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, !(d.slideCount < 1 || 0 > a || a > d.slideCount - 1) && (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
        }, b.prototype.setCSS = function(a) {
            var d, e, b = this,
                c = {};
            b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
        }, b.prototype.setDimensions = function() {
            var a = this;
            a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
                padding: "0px " + a.options.centerPadding
            }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
                padding: a.options.centerPadding + " 0px"
            })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
        }, b.prototype.setFade = function() {
            var c, b = this;
            b.$slides.each(function(d, e) {
                c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                    position: "relative",
                    right: c,
                    top: 0,
                    zIndex: b.options.zIndex - 2,
                    opacity: 0
                }) : a(e).css({
                    position: "relative",
                    left: c,
                    top: 0,
                    zIndex: b.options.zIndex - 2,
                    opacity: 0
                })
            }), b.$slides.eq(b.currentSlide).css({
                zIndex: b.options.zIndex - 1,
                opacity: 1
            })
        }, b.prototype.setHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b)
            }
        }, b.prototype.setOption = b.prototype.slickSetOption = function() {
            var c, d, e, f, h, b = this,
                g = !1;
            if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
            else if ("multiple" === h) a.each(e, function(a, c) {
                b.options[a] = c
            });
            else if ("responsive" === h)
                for (d in f)
                    if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                    else {
                        for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                        b.options.responsive.push(f[d])
                    }
            g && (b.unload(), b.reinit())
        }, b.prototype.setPosition = function() {
            var a = this;
            a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
        }, b.prototype.setProps = function() {
            var a = this,
                b = document.body.style;
            a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
        }, b.prototype.setSlideClasses = function(a) {
            var c, d, e, f, b = this;
            d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
        }, b.prototype.setupInfinite = function() {
            var c, d, e, b = this;
            if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
                for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
                for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
                b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "")
                })
            }
        }, b.prototype.interrupt = function(a) {
            var b = this;
            a || b.autoPlay(), b.interrupted = a
        }, b.prototype.selectHandler = function(b) {
            var c = this,
                d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                e = parseInt(d.attr("data-slick-index"));
            return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
        }, b.prototype.slideHandler = function(a, b, c) {
            var d, e, f, g, j, h = null,
                i = this;
            return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
                i.postSlide(d)
            }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
                i.postSlide(d)
            }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
                i.postSlide(e)
            })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
                i.postSlide(e)
            }) : i.postSlide(e))))
        }, b.prototype.startLoad = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
        }, b.prototype.swipeDirection = function() {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
        }, b.prototype.swipeEnd = function(a) {
            var c, d, b = this;
            if (b.dragging = !1, b.interrupted = !1, b.shouldClick = !(b.touchObject.swipeLength > 10), void 0 === b.touchObject.curX) return !1;
            if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
                switch (d = b.swipeDirection()) {
                    case "left":
                    case "down":
                        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
                }
                "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
            } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
        }, b.prototype.swipeHandler = function(a) {
            var b = this;
            if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
                case "start":
                    b.swipeStart(a);
                    break;
                case "move":
                    b.swipeMove(a);
                    break;
                case "end":
                    b.swipeEnd(a)
            }
        }, b.prototype.swipeMove = function(a) {
            var d, e, f, g, h, b = this;
            return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!b.dragging || h && 1 !== h.length) && (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade !== !0 && b.options.touchMove !== !1 && (b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft))) : void 0)
        }, b.prototype.swipeStart = function(a) {
            var c, b = this;
            return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
        }, b.prototype.unload = function() {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, b.prototype.unslick = function(a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy()
        }, b.prototype.updateArrows = function() {
            var b, a = this;
            b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, b.prototype.updateDots = function() {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, b.prototype.visibility = function() {
            var a = this;
            a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
        }, a.fn.slick = function() {
            var f, g, a = this,
                c = arguments[0],
                d = Array.prototype.slice.call(arguments, 1),
                e = a.length;
            for (f = 0; e > f; f++)
                if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
            return a
        }
    }), $(function() {
        CoverallCrew.blogPosts = new CoverallCrew.BlogEntries, CoverallCrew.blogPosts.url = "/adobemax.json", $.when(CoverallCrew.blogPosts.fetch()).then(function() {
            window.location.pathname.split("/").splice(0, 4).join("/"), CoverallCrew.blogApp = new window.CoverallCrew.BlogRouter, Backbone.history.start()
        })
    }),
    function() {
        var extend = function(child, parent) {
                function ctor() {
                    this.constructor = child
                }
                for (var key in parent) hasProp.call(parent, key) && (child[key] = parent[key]);
                return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
            },
            hasProp = {}.hasOwnProperty;
        CoverallCrew.BlogRouter = function(superClass) {
            function BlogRouter() {
                return BlogRouter.__super__.constructor.apply(this, arguments)
            }
            return extend(BlogRouter, superClass), BlogRouter.prototype.routes = {
                latest: "latest",
                "posts/:id": "post",
                "archive/:slug": "archive",
                "search/:search": "search",
                "*splat": "latest"
            }, BlogRouter.prototype.initialize = function() {
                return this.view = new CoverallCrew.BlogPostsView({
                    el: $("#blog-container"),
                    collection: CoverallCrew.blogPosts
                })
            }, BlogRouter.prototype.index = function() {
                return this.view.renderItem()
            }, BlogRouter.prototype.latest = function() {
                return this.view.renderLatest({
                    collection: CoverallCrew.blogPosts
                })
            }, BlogRouter.prototype.post = function(id) {
                return this.view.renderItem(CoverallCrew.blogPosts.get(id))
            }, BlogRouter.prototype.archive = function(slug) {
                var items, title;
                return items = CoverallCrew.blogPosts.where({
                    month_slug: slug
                }), title = items.length ? "Archive posts from " + items[0].get("month") : "No posts found.", this.view.renderSummary(items, title)
            }, BlogRouter.prototype.search = function(search) {
                return this.view._search(search)
            }, BlogRouter
        }(Backbone.Router)
    }.call(this), $("document").ready(function() {
        if ("small" == Foundation.MediaQuery.current) {
            if (window.location.href.indexOf("tracks/#") > -1) var link_tab = window.location.hash.substr(1);
            link_tab && ($("[data-accordion]").find($("[data-deeplink=" + link_tab + "]")).trigger("click"), console.log($("#tracks-mobile").offset().top), $("html,body").animate({
                scrollTop: $("#tracks-mobile").offset().top
            }))
        }
    }), $(document).foundation(), Foundation.Abide.defaults.validators.leave_blank = function($el, required) {
        return !$el.val()
    }, $("[data-watch-video]").on("click", function() {
        var videoElement = "#" + $(this).attr("data-watch-video");
        $(videoElement).removeClass("hide"), $(videoElement)[0].currentTime = 0, $(videoElement)[0].play(), $(videoElement).bind("webkitendfullscreen", function() {
            $(videoElement).addClass("hide")
        })
    });
var $videoiframe = $("#videoiframe").clone();
$("[data-open]").on("click", function() {
    $("#videoiframe").attr("src", $(this).attr("data-src")), $(this).attr("href", function() {
        return ~this.href.indexOf($(this).attr("data-id")) ? this.href : this.href + "#" + $(this).attr("data-id")
    })
}), $(document).on("closed.zf.reveal", "[data-reveal]", function() {
    $(this).hasClass("video-reveal") && $("#videoiframe").replaceWith($videoiframe.clone())
}), $(".accordion-item").on("click", function(e) {}), $(".slick-carousel.autoplay").slick({
    autoplay: !0,
    autoplaySpeed: 5e3
}), $(".slick-carousel.basic").slick(), $(".slick-visible-nearby").slick({
    centerMode: !0,
    slidesToShow: 1,
    arrows: !1,
    centerPadding: "50px",
    adaptiveHeight: !0
}), $(".slick-carousel").on("beforeChange", function(e, s, c, n) {
    console.log(n), $(".keynote-nav-button.active").removeClass("active"), $("#k-" + n).addClass("active")
});
var slideTo = function(i) {
    $(".slick-carousel").slick("slickGoTo", i)
};
$(".mobile-nav-icon").on("click", function() {
    $("body").toggleClass("mobile-nav-active")
}), $(".reveal-close-icon").on("click", function() {
    $(this).parent(".reveal").foundation("close")
}), $("[show-hide]").on("click", function(e) {
    e.preventDefault();
    var content = $(this).nextAll(".show-hide");
    if ($(".show-hide").height(0), !$(content).hasClass("show")) {
        $("[show-hide]").removeClass("show"), $(".show-hide").removeClass("show");
        var innerHeight = content.find(".show-hide-inner").innerHeight();
        $(content).height(innerHeight)
    }
    $(content).toggleClass("show"), $(this).toggleClass("show")
}), $("a[data-email-protector]").emailProtector(), $("a[data-email-protector-preserve-text]").emailProtector(), $("[data-watch-video]").on("click", function() {
    var videoElement = "#" + $(this).attr("data-watch-video");
    $(videoElement).removeClass("hide"), $(videoElement)[0].currentTime = 0, $(videoElement)[0].play(), $(videoElement).bind("webkitendfullscreen", function() {
        $(videoElement).addClass("hide")
    })
});
var $videoiframe = $("#videoiframe").clone();
$("[data-open]").on("click", function() {
    $("#videoiframe").attr("src", $(this).attr("data-src")), $("#video-modal-heading").html(jQuery.parseHTML($(this).attr("data-title"))), $("#video-modal-description").html(jQuery.parseHTML($(this).attr("data-description"))), $(this).attr("href", function() {
        return ~this.href.indexOf($(this).attr("data-id")) ? this.href : this.href + "#" + $(this).attr("data-id")
    })
}), $(document).on("closed.zf.reveal", "[data-reveal]", function() {
    $(this).hasClass("video-reveal") && $("#videoiframe").replaceWith($videoiframe.clone())
}), $(document).ready(function() {
    createPaginator(), refreshVideoFeed(null, Foundation.MediaQuery.current), new Foundation.DropdownMenu($(".dropdown.menu"), {}), $(".dropdown.menu").removeClass("is-loading")
}), $(document).on("change.zf.tabs", function() {
    createPaginator()
});
var createPaginator = function() {
        var numberOfVideos = $(".is-active > .video-row > .video-page").length,
            numberOfPages = Math.ceil(numberOfVideos / 9),
            paginatorLink = $(".paginator-page").first().clone();
        $(".paginator-page").remove();
        for (var i = 0; i < numberOfPages; i++) paginatorLink.text(i + 1), paginatorLink.attr("href", "javascript:goToVideoPage(" + i + ");"), paginatorLink.attr("id", "page-" + (i + 1)), $(".paginator").append(paginatorLink.clone());
        numberOfPages > 1 ? $(".paginator").show() : $(".paginator").hide(), goToVideoPage(0)
    },
    goToVideoPage = function(page) {
        $(".paginator-page").removeClass("active"), $(".sessions-row > .video-page").hide(), $(".video-page-" + page).show(), $("#page-" + (page + 1)).addClass("active")
    },
    streamIframe;
$(window).on("changed.zf.mediaquery", function(event, newSize, oldSize) {
    refreshVideoFeed(newSize, oldSize)
});
var refreshVideoFeed = function(newSize, oldSize) {
    $("#video-container").hasClass("hide-for-small-only") && ("small" == newSize ? (streamIframe = $(".stream-container > iframe").clone(), $(".stream-container > iframe").remove()) : "small" != oldSize || "medium" != newSize && "large" != newSize && "xlarge" != newSize && "xxlarge" != newSize || $(".stream-container").html(streamIframe))
};
window.JST || (window.JST = {}), window.JST.archive_item = function(__obj) {
        __obj || (__obj = {});
        var __safe, __out = [],
            __sanitize = function(value) {
                return value && value.ecoSafe ? value : "undefined" != typeof value && null != value ? __escape(value) : ""
            },
            __objSafe = __obj.safe,
            __escape = __obj.escape;
        return __safe = __obj.safe = function(value) {
                if (value && value.ecoSafe) return value;
                "undefined" != typeof value && null != value || (value = "");
                var result = new String(value);
                return result.ecoSafe = !0, result
            }, __escape || (__escape = __obj.escape = function(value) {
                return ("" + value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            }),
            function() {
                (function() {
                    __out.push('<li><a class="archive-month" data-slug="'), __out.push(__sanitize(this.month.slug)), __out.push('">'), __out.push(__sanitize(this.month.month)), __out.push("</a></li>\n")
                }).call(this)
            }.call(__obj), __obj.safe = __objSafe, __obj.escape = __escape, __out.join("")
    }, window.JST || (window.JST = {}), window.JST.blog_link = function(__obj) {
        __obj || (__obj = {});
        var __safe, __out = [],
            __sanitize = function(value) {
                return value && value.ecoSafe ? value : "undefined" != typeof value && null != value ? __escape(value) : ""
            },
            __objSafe = __obj.safe,
            __escape = __obj.escape;
        return __safe = __obj.safe = function(value) {
                if (value && value.ecoSafe) return value;
                "undefined" != typeof value && null != value || (value = "");
                var result = new String(value);
                return result.ecoSafe = !0, result
            }, __escape || (__escape = __obj.escape = function(value) {
                return ("" + value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            }),
            function() {
                (function() {
                    __out.push('<p><a class="blog-link" data-id="'), __out.push(__sanitize(this.model.id)), __out.push('">'), __out.push(this.label), __out.push("</a></p>\n\n")
                }).call(this)
            }.call(__obj), __obj.safe = __objSafe, __obj.escape = __escape, __out.join("")
    }, window.JST || (window.JST = {}), window.JST.blog_post = function(__obj) {
        __obj || (__obj = {});
        var __safe, __out = [],
            __sanitize = function(value) {
                return value && value.ecoSafe ? value : "undefined" != typeof value && null != value ? __escape(value) : ""
            },
            __objSafe = __obj.safe,
            __escape = __obj.escape;
        return __safe = __obj.safe = function(value) {
                if (value && value.ecoSafe) return value;
                "undefined" != typeof value && null != value || (value = "");
                var result = new String(value);
                return result.ecoSafe = !0, result
            }, __escape || (__escape = __obj.escape = function(value) {
                return ("" + value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            }),
            function() {
                (function() {
                    __out.push('<h3 class="post-title">'), __out.push(__sanitize(this.model.get("title"))), __out.push('</h3>\n<div class="post-date">'), __out.push(__sanitize(moment(this.model.get("date"), "YYYY-MM-DD HH:mm:ss ZZ").format("MMMM D, YYYY"))), __out.push("</div>\n"), __out.push(this.model.get("content")), __out.push("\n")
                }).call(this)
            }.call(__obj), __obj.safe = __objSafe, __obj.escape = __escape, __out.join("")
    }, window.JST || (window.JST = {}), window.JST.blog_post_item = function(__obj) {
        __obj || (__obj = {});
        var __safe, __out = [],
            __sanitize = function(value) {
                return value && value.ecoSafe ? value : "undefined" != typeof value && null != value ? __escape(value) : ""
            },
            __objSafe = __obj.safe,
            __escape = __obj.escape;
        return __safe = __obj.safe = function(value) {
                if (value && value.ecoSafe) return value;
                "undefined" != typeof value && null != value || (value = "");
                var result = new String(value);
                return result.ecoSafe = !0, result
            }, __escape || (__escape = __obj.escape = function(value) {
                return ("" + value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            }),
            function() {
                (function() {
                    __out.push('<li><a class="recent-post" data-id="'), __out.push(__sanitize(this.model.id)), __out.push('">'), __out.push(__sanitize(this.model.get("title"))), __out.push("</a></li>\n")
                }).call(this)
            }.call(__obj), __obj.safe = __objSafe, __obj.escape = __escape, __out.join("")
    }, window.JST || (window.JST = {}), window.JST.blog_post_summary = function(__obj) {
        __obj || (__obj = {});
        var __safe, __out = [],
            __sanitize = function(value) {
                return value && value.ecoSafe ? value : "undefined" != typeof value && null != value ? __escape(value) : ""
            },
            __objSafe = __obj.safe,
            __escape = __obj.escape;
        return __safe = __obj.safe = function(value) {
                if (value && value.ecoSafe) return value;
                "undefined" != typeof value && null != value || (value = "");
                var result = new String(value);
                return result.ecoSafe = !0, result
            }, __escape || (__escape = __obj.escape = function(value) {
                return ("" + value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            }),
            function() {
                (function() {
                    __out.push('<div class="large-6 medium-6 small-12 columns synopsis">\n  <div class="summary-image">\n    '), __out.push(this.model.get("summary")), __out.push('\n  </div>\n  <a class="summary-title title" data-id="'), __out.push(__sanitize(this.model.id)), __out.push('">'), __out.push(__sanitize(this.model.get("title"))), __out.push('</a>\n  <div class="date">'), __out.push(__sanitize(moment(this.model.get("date"), "YYYY-MM-DD HH:mm:ss ZZ").format("MMMM D, YYYY"))), __out.push('</div>\n  <div class="summary">'), __out.push(this.model.get("summary")), __out.push('</div>\n  <a class="summary-title read-more" data-id="'), __out.push(__sanitize(this.model.id)), __out.push('">Read more</a>\n</div>\n')
                }).call(this)
            }.call(__obj), __obj.safe = __objSafe, __obj.escape = __escape, __out.join("")
    },
    function() {
        var extend = function(child, parent) {
                function ctor() {
                    this.constructor = child
                }
                for (var key in parent) hasProp.call(parent, key) && (child[key] = parent[key]);
                return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
            },
            hasProp = {}.hasOwnProperty;
        CoverallCrew.BlogEntry = function(superClass) {
            function BlogEntry() {
                return BlogEntry.__super__.constructor.apply(this, arguments)
            }
            return extend(BlogEntry, superClass), BlogEntry.prototype.parse = function(response, options) {
                return response.month_slug = response.month.toLowerCase().replace(new RegExp(" ", "g"), "-").replace(/[^a-z0-9-]+/, "", "g"), response
            }, BlogEntry
        }(Backbone.Model), CoverallCrew.BlogEntries = function(superClass) {
            function BlogEntries() {
                return BlogEntries.__super__.constructor.apply(this, arguments)
            }
            return extend(BlogEntries, superClass), BlogEntries.prototype.model = CoverallCrew.BlogEntry, BlogEntries.prototype.months = function() {
                return _.uniq(this.map(function(m) {
                    return {
                        slug: m.get("month_slug"),
                        month: m.get("month")
                    }
                }), !0, function(i) {
                    return i.month
                })
            }, BlogEntries.prototype.dates = function() {
                return this.map(function(m) {
                    return m.get("published")
                })
            }, BlogEntries
        }(Backbone.Collection)
    }.call(this),
    function() {
        var bind = function(fn, me) {
                return function() {
                    return fn.apply(me, arguments)
                }
            },
            extend = function(child, parent) {
                function ctor() {
                    this.constructor = child
                }
                for (var key in parent) hasProp.call(parent, key) && (child[key] = parent[key]);
                return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
            },
            hasProp = {}.hasOwnProperty;
        CoverallCrew.BlogPostsView = function(superClass) {
            function BlogPostsView() {
                return this._search = bind(this._search, this), this.search = bind(this.search, this), this.archiveMonth = bind(this.archiveMonth, this), this.renderPost = bind(this.renderPost, this), BlogPostsView.__super__.constructor.apply(this, arguments)
            }
            return extend(BlogPostsView, superClass), BlogPostsView.prototype.events = {
                "click .recent-post": "renderPost",
                "click .summary-title": "renderPost",
                "click .featured-image": "renderPost",
                "click .blog-link": "renderPost",
                "click .archive-month": "archiveMonth",
                "keyup #search": "search"
            }, BlogPostsView.prototype.initialize = function(options) {
                return this.current = options.collection.models[0]
            }, BlogPostsView.prototype.render = function() {
                var archiveList, i, j, k, len, month, recentList, ref;
                for (this.renderItem(this.current), recentList = this.$el.find("#recent-posts ul").html(""), i = j = 0; j <= 9; i = ++j) i < this.collection.models.length && recentList.append(JST.blog_post_item({
                    model: this.collection.models[i]
                }));
                for (archiveList = this.$el.find("#archive ul").html(""), ref = this.collection.months(), k = 0, len = ref.length; k < len; k++) month = ref[k], archiveList.append(JST.archive_item({
                    month: month
                }));
                return this.updateSocialMediaShareIcons()
            }, BlogPostsView.prototype.renderLatest = function(items) {
                var collectionSize, container, i, j, x;
                for (container = this.$el.find("#rss-feed").html(""), container.addClass("row multiple-posts-list"), container.removeClass("medium-10 medium-offset-1"), $("#blog-footer").show(), $(".blog-aside").hide(), $(".feature-image").hide(), $(".blogs").hide(), i = j = 0; j < 35; i = ++j) i < this.collection.models.length && container.append(JST.blog_post_summary({
                    model: this.collection.models[i]
                }));
                return this.$(".summary img").parent().remove(), this.$(".summary-image").contents().filter(function() {
                    return 3 === this.nodeType
                }).remove(), this.$(".summary-image img").unwrap().unwrap().addClass("featured-image"), $(".synopsis").each(function() {
                    var imgsrc, location, ref, ref1, ref2;
                    return imgsrc = null != (ref = $(this).find(".featured-image")) && null != (ref1 = ref.attr("srcset")) && null != (ref2 = ref1.split(" ")) ? ref2.slice(-4)[0] : void 0, $(this).find(".featured-image").attr("src", imgsrc).attr("srcset", ""), location = $(this).find(".summary-title.title").data("id"), $(this).find(".featured-image").attr("data-id", location)
                }), collectionSize = this.collection.models.length, x = 6, $(".synopsis:lt('" + x + "')").fadeIn("slow"), $(".seeMore").click(function() {
                    if (x = x + 2 <= collectionSize ? x + 2 : collectionSize, $(".synopsis:lt(" + x + ")").fadeIn("slow"), x === collectionSize) return $(".seeMore").fadeOut("slow")
                })
            }, BlogPostsView.prototype.renderItem = function(model) {
                var featureUrl;
                return null == model && (model = this.current), this.model = model, this.$el.find("#rss-feed").removeClass("row multiple-posts-list").html(JST.blog_post({
                    model: model
                })), $("#blog-footer").hide(), $(".blog-aside").show(), $(".blogs").show(), featureUrl = $(".wp-post-image").attr("srcset").split(" ").slice(-4)[0], $(".wp-post-image").parent().remove(), $("<div class='feature-image' style='background-image: url(" + featureUrl + ")'></div>").insertBefore("#rss-feed"), $("#rss-feed").addClass("medium-10 medium-offset-1"), this.updateSocialMediaShareIcons()
            }, BlogPostsView.prototype.renderSummary = function(items, note) {
                var container, item, j, len;
                for (null == note && (note = null), container = this.$el.find("#rss-feed"), container.addClass("multiple-posts-list"), note ? container.html(note + "<hr />") : container.html(""), j = 0, len = items.length; j < len; j++) item = items[j], container.append(JST.blog_post_summary({
                    model: item
                }));
                return this.updateSocialMediaShareIcons()
            }, BlogPostsView.prototype.updateSocialMediaShareIcons = function() {
                return $(".blog-socialmedia").show(), $("#blog-facebook-share").attr("href", "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href)), $("#blog-twitter-share").attr("href", "http://twitter.com/home?status=" + encodeURIComponent(window.location.href))
            }, BlogPostsView.prototype.renderPost = function(e) {
                return CoverallCrew.blogApp.navigate("posts/" + $(e.currentTarget).data("id"), {
                    trigger: !0
                }), window.scrollTo(0, 0)
            }, BlogPostsView.prototype.archiveMonth = function(e) {
                return CoverallCrew.blogApp.navigate("archive/" + $(e.currentTarget).data("slug"), {
                    trigger: !0
                }), window.scrollTo(0, 0)
            }, BlogPostsView.prototype.search = function(e) {
                var source;
                if (source = $(e.currentTarget), 13 !== e.keyCode) return this.timer && clearTimeout(this.timer), this.timer = setTimeout(function(_this) {
                    return function() {
                        return _this._search(source.val().toLowerCase())
                    }
                }(this), 300), !1
            }, BlogPostsView.prototype._search = function(search) {
                var items;
                return items = this.collection.filter(function(item) {
                    var match;
                    return match = !1, _.each(["title", "content", "categories"], function(prop) {
                        var test;
                        if (test = item.get(prop), test instanceof Array && (test = test.join(" ")), test.toLowerCase().indexOf(search) !== -1) return match = !0
                    }), match
                }), this.renderSummary(items, "Search results for '" + search + "'"), CoverallCrew.blogApp.navigate("search/" + search)
            }, BlogPostsView
        }(Backbone.View)
    }.call(this), $(document).ready(function() {
        $(".marquee-video video source").attr("src", marqueeItem[2]), $(".marquee-video video").get(0).load(), $(".marquee-video video").attr("poster", marqueeItem[3])
    }), $(function() {
        "" === window.location.hash && ($("#panel-graphicDesignIllustration-label").parent().click(), $(".speaker.false").find(".accordion-content").remove())
    });