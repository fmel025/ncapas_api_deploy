import {
  require_checkPropTypes,
  require_object_assign
} from "./chunk-CT4V4BTJ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-JEXKZRFY.js";

// node_modules/@iconscout/react-unicons-monochrome/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/@iconscout/react-unicons-monochrome/node_modules/react/cjs/react.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var _assign = require_object_assign();
        var checkPropTypes = require_checkPropTypes();
        var ReactVersion = "16.14.0";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          suspense: null
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
        function describeComponentFrame(name, source, ownerName) {
          var sourceInfo = "";
          if (source) {
            var path = source.fileName;
            var fileName = path.replace(BEFORE_SLASH_RE, "");
            {
              if (/^index\./.test(fileName)) {
                var match = path.match(BEFORE_SLASH_RE);
                if (match) {
                  var pathBeforeSlash = match[1];
                  if (pathBeforeSlash) {
                    var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                    fileName = folderName + "/" + fileName;
                  }
                }
              }
            }
            sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
          } else if (ownerName) {
            sourceInfo = " (created by " + ownerName + ")";
          }
          return "\n    in " + (name || "Unknown") + sourceInfo;
        }
        var Resolved = 1;
        function refineResolvedLazyComponent(lazyComponent) {
          return lazyComponent._status === Resolved ? lazyComponent._result : null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                return "Context.Consumer";
              case REACT_PROVIDER_TYPE:
                return "Context.Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type.render);
              case REACT_LAZY_TYPE: {
                var thenable = type;
                var resolvedThenable = refineResolvedLazyComponent(thenable);
                if (resolvedThenable) {
                  return getComponentName(resolvedThenable);
                }
                break;
              }
            }
          }
          return null;
        }
        var ReactDebugCurrentFrame = {};
        var currentlyValidatingElement = null;
        function setCurrentlyValidatingElement(element) {
          {
            currentlyValidatingElement = element;
          }
        }
        {
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentlyValidatingElement) {
              var name = getComponentName(currentlyValidatingElement.type);
              var owner = currentlyValidatingElement._owner;
              stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          // Used by renderers to avoid bundling object-assign twice in UMD bundles:
          assign: _assign
        };
        {
          _assign(ReactSharedInternals, {
            // These should not be included in production.
            ReactDebugCurrentFrame,
            // Shim for React DOM 16.0.0 which still destructured (but not used) this.
            // TODO: remove in React 17.0.
            ReactComponentTreeHook: {}
          });
        }
        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === "string" && args[args.length - 1].indexOf("\n    in") === 0;
            if (!hasExistingStack) {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
            try {
              var argIndex = 0;
              var message = "Warning: " + format.replace(/%s/g, function() {
                return args[argIndex++];
              });
              throw new Error(message);
            } catch (x) {
            }
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement293(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (!!(element === null || element === void 0)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }
          var propName;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = ("" + key).replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
        }
        var POOL_SIZE = 10;
        var traverseContextPool = [];
        function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
          if (traverseContextPool.length) {
            var traverseContext = traverseContextPool.pop();
            traverseContext.result = mapResult;
            traverseContext.keyPrefix = keyPrefix;
            traverseContext.func = mapFunction;
            traverseContext.context = mapContext;
            traverseContext.count = 0;
            return traverseContext;
          } else {
            return {
              result: mapResult,
              keyPrefix,
              func: mapFunction,
              context: mapContext,
              count: 0
            };
          }
        }
        function releaseTraverseContext(traverseContext) {
          traverseContext.result = null;
          traverseContext.keyPrefix = null;
          traverseContext.func = null;
          traverseContext.context = null;
          traverseContext.count = 0;
          if (traverseContextPool.length < POOL_SIZE) {
            traverseContextPool.push(traverseContext);
          }
        }
        function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            callback(
              traverseContext,
              children,
              // If it's the only child, treat the name as if it was wrapped in an array
              // so that it's consistent if the number of children grows.
              nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
            );
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getComponentKey(child, i);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              {
                if (iteratorFn === children.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(children);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getComponentKey(child, ii++);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else if (type === "object") {
              var addendum = "";
              {
                addendum = " If you meant to render a collection of children, use an array instead." + ReactDebugCurrentFrame.getStackAddendum();
              }
              var childrenString = "" + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + ")." + addendum);
                }
              }
            }
          }
          return subtreeCount;
        }
        function traverseAllChildren(children, callback, traverseContext) {
          if (children == null) {
            return 0;
          }
          return traverseAllChildrenImpl(children, "", callback, traverseContext);
        }
        function getComponentKey(component, index) {
          if (typeof component === "object" && component !== null && component.key != null) {
            return escape(component.key);
          }
          return index.toString(36);
        }
        function forEachSingleChild(bookKeeping, child, name) {
          var func = bookKeeping.func, context = bookKeeping.context;
          func.call(context, child, bookKeeping.count++);
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          if (children == null) {
            return children;
          }
          var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
          traverseAllChildren(children, forEachSingleChild, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        function mapSingleChildIntoContext(bookKeeping, child, childKey) {
          var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context;
          var mappedChild = func.call(context, child, bookKeeping.count++);
          if (Array.isArray(mappedChild)) {
            mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function(c) {
              return c;
            });
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              mappedChild = cloneAndReplaceKey(
                mappedChild,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + "/" : "") + childKey
              );
            }
            result.push(mappedChild);
          }
        }
        function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
          var escapedPrefix = "";
          if (prefix != null) {
            escapedPrefix = escapeUserProvidedKey(prefix) + "/";
          }
          var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
          traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, func, context);
          return result;
        }
        function countChildren(children) {
          return traverseAllChildren(children, function() {
            return null;
          }, null);
        }
        function toArray(children) {
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, function(child) {
            return child;
          });
          return result;
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }
          return children;
        }
        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        function lazy(ctor) {
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _ctor: ctor,
            // React uses these fields to store the result.
            _status: -1,
            _result: null
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          return {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
        }
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          return {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : "");
            }
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement(element);
          {
            error('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
          }
          setCurrentlyValidatingElement(null);
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var name = getComponentName(type);
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              setCurrentlyValidatingElement(element);
              checkPropTypes(propTypes, element.props, "prop", name, ReactDebugCurrentFrame.getStackAddendum);
              setCurrentlyValidatingElement(null);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            setCurrentlyValidatingElement(fragment);
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                break;
              }
            }
            if (fragment.ref !== null) {
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
            }
            setCurrentlyValidatingElement(null);
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (Array.isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement293.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            var testMap = /* @__PURE__ */ new Map([[frozenObject, null]]);
            var testSet = /* @__PURE__ */ new Set([frozenObject]);
            testMap.set(0, 0);
            testSet.add(0);
          } catch (e) {
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/@iconscout/react-unicons-monochrome/node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/@iconscout/react-unicons-monochrome/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-500px.js
var React = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function Uim500px(props) {
  return React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React.createElement("path", {
    opacity: 1,
    d: "m19.705 19.266-.067.067a8.826 8.826 0 0 1-2.89 1.953 9.136 9.136 0 0 1-3.539.714 9.044 9.044 0 0 1-6.428-2.667 8.972 8.972 0 0 1-2.556-4.99q-.045-.312.536-.401.569-.09.625.223a.065.065 0 0 1 .01.045 9.896 9.896 0 0 0 .514 1.774 7.543 7.543 0 0 0 1.697 2.523 7.916 7.916 0 0 0 8.683 1.696 7.961 7.961 0 0 0 2.51-1.696l.068-.067a.27.27 0 0 1 .279-.067 1.023 1.023 0 0 1 .368.245q.402.413.19.648Zm-5.268-6.864-.737.736.704.704q.234.234-.079.546a.532.532 0 0 1-.357.19.287.287 0 0 1-.212-.111l-.692-.681-.736.736a.227.227 0 0 1-.168.056.506.506 0 0 1-.346-.178l-.022-.023a.452.452 0 0 1-.201-.323.33.33 0 0 1 .09-.19l.736-.726-.737-.736q-.178-.179.157-.502a.55.55 0 0 1 .346-.201.255.255 0 0 1 .145.055l.725.737.726-.725q.2-.19.535.145.302.301.123.49Zm5.257.636a6.48 6.48 0 0 1-1.92 4.62 6.615 6.615 0 0 1-2.087 1.407 6.563 6.563 0 0 1-5.09 0 6.615 6.615 0 0 1-2.086-1.407 6.34 6.34 0 0 1-1.395-2.075 1.631 1.631 0 0 1-.168-.447h-.01q-.101-.301.479-.49.558-.18.67.133a5.91 5.91 0 0 0 1.082 1.864h.011v-3.806a3.592 3.592 0 0 1 1.139-2.59 3.886 3.886 0 0 1 2.823-1.149 3.836 3.836 0 0 1 2.802 1.15 3.768 3.768 0 0 1 1.16 2.779 3.973 3.973 0 0 1-3.962 3.962 4.377 4.377 0 0 1-1.25-.179q-.312-.123-.145-.68.179-.57.491-.48l.157.033q.156.033.362.067a2.207 2.207 0 0 0 .34.033 2.682 2.682 0 0 0 1.965-.798 2.64 2.64 0 0 0 .804-1.947 2.56 2.56 0 0 0-.804-1.909 2.654 2.654 0 0 0-1.953-.792 2.545 2.545 0 0 0-1.987.893 2.625 2.625 0 0 0-.714 1.786v4.609a5.093 5.093 0 0 0 2.7.748 5.39 5.39 0 0 0 2.066-.408 5.328 5.328 0 0 0 3.303-4.927 5.354 5.354 0 0 0-5.357-5.346 5.166 5.166 0 0 0-3.795 1.563 8.098 8.098 0 0 0-.859.97l-.022.023a1.183 1.183 0 0 1-.145.173.704.704 0 0 1-.24.106.677.677 0 0 1-.43-.034 1.104 1.104 0 0 1-.407-.184.366.366 0 0 1-.173-.296V2.424a.426.426 0 0 1 .117-.296A.396.396 0 0 1 7.473 2h9.788q.335 0 .335.614t-.335.614H8.209v5.39h.012a6.958 6.958 0 0 1 1.138-.937A7.006 7.006 0 0 1 10.564 7a6.563 6.563 0 0 1 2.578-.513A6.374 6.374 0 0 1 15.687 7a6.524 6.524 0 0 1 4.007 6.038Zm-.346-6.484a.264.264 0 0 1 .1.2.346.346 0 0 1-.061.201q-.062.09-.184.235-.29.29-.436.29a.246.246 0 0 1-.178-.078 8.79 8.79 0 0 0-2.31-1.485 7.6 7.6 0 0 0-3.08-.625 8.175 8.175 0 0 0-2.925.547q-.301.112-.502-.413a1.125 1.125 0 0 1-.09-.424.26.26 0 0 1 .18-.223 8.24 8.24 0 0 1 3.336-.636 9 9 0 0 1 3.527.714 8.57 8.57 0 0 1 2.623 1.697Z",
    "data-name": "Brand Logos"
  }));
}
var uim_500px_default = Uim500px;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-adobe.js
var React2 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAdobe(props) {
  return React2.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React2.createElement("path", {
    opacity: 1,
    d: "M2 22.041a.998.998 0 0 1-1-1V2.959a1 1 0 0 1 1-1h7.425a1 1 0 0 1 .925 1.38L2.925 21.42a1 1 0 0 1-.925.62Zm14.244 0H13.63a1 1 0 0 1-.891-.546l-1.522-2.99H8.963a1 1 0 0 1-.928-1.372L11.094 9.5a1 1 0 0 1 .928-.628h.01a1 1 0 0 1 .926.646l4.221 11.168a1 1 0 0 1-.935 1.354ZM22 21.809a.999.999 0 0 1-.921-.613L13.56 3.346a1 1 0 0 1 .921-1.387H22a1 1 0 0 1 1 1v17.85a1 1 0 0 1-.802.98 1.049 1.049 0 0 1-.198.02Z",
    "data-name": "Brand Logos"
  }));
}
var uim_adobe_default = UimAdobe;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-adobe-alt.js
var React3 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAdobeAlt(props) {
  return React3.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React3.createElement("path", {
    opacity: 1,
    d: "M14.483 2.959 22 20.809V2.959ZM2 2.959V21.04L9.425 2.96Zm7.069 14.324h2.784l1.748 3.433h2.537l-4.1-10.843Z",
    "data-name": "Brand Logos"
  }));
}
var uim_adobe_alt_default = UimAdobeAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-airplay.js
var React4 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAirplay(props) {
  return React4.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React4.createElement("rect", {
    width: 20,
    height: 15,
    x: 2,
    y: 3,
    opacity: 0.5,
    rx: 3
  }), React4.createElement("path", {
    opacity: 1,
    d: "M16 21H8a1 1 0 0 1-.832-1.555l4-6a1.038 1.038 0 0 1 1.664 0l4 6A1 1 0 0 1 16 21Z"
  }));
}
var uim_airplay_default = UimAirplay;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-align.js
var React5 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAlign(props) {
  return React5.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React5.createElement("path", {
    opacity: 0.5,
    d: "M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm8 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8-4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }), React5.createElement("path", {
    opacity: 1,
    d: "M19 14.666a1 1 0 0 1-1-1v-3.333a1 1 0 0 1 1.64-.768l2 1.667a1 1 0 0 1 0 1.536l-2 1.667a.999.999 0 0 1-.64.231Z"
  }));
}
var uim_align_default = UimAlign;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-align-alt.js
var React6 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAlignAlt(props) {
  return React6.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React6.createElement("path", {
    opacity: 1,
    d: "M10 5H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 5h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm-4 4h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"
  }));
}
var uim_align_alt_default = UimAlignAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-align-center.js
var React7 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAlignCenter(props) {
  return React7.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React7.createElement("path", {
    opacity: 1,
    d: "M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-4 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm4 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-4 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }));
}
var uim_align_center_default = UimAlignCenter;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-align-center-justify.js
var React8 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAlignCenterJustify(props) {
  return React8.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React8.createElement("path", {
    opacity: 1,
    d: "M21 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-4 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }));
}
var uim_align_center_justify_default = UimAlignCenterJustify;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-align-justify.js
var React9 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAlignJustify(props) {
  return React9.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React9.createElement("path", {
    opacity: 1,
    d: "M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
  }));
}
var uim_align_justify_default = UimAlignJustify;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-align-left.js
var React10 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAlignLeft(props) {
  return React10.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React10.createElement("path", {
    opacity: 1,
    d: "M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-4 4H3a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm4 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-4 4H3a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"
  }));
}
var uim_align_left_default = UimAlignLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-align-left-justify.js
var React11 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAlignLeftJustify(props) {
  return React11.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React11.createElement("path", {
    opacity: 1,
    d: "M21 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-6 4H3a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"
  }));
}
var uim_align_left_justify_default = UimAlignLeftJustify;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-align-letter-right.js
var React12 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAlignLetterRight(props) {
  return React12.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React12.createElement("path", {
    opacity: 1,
    d: "M21 4H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 6H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
  }));
}
var uim_align_letter_right_default = UimAlignLetterRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-align-right.js
var React13 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAlignRight(props) {
  return React13.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React13.createElement("path", {
    opacity: 1,
    d: "M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"
  }));
}
var uim_align_right_default = UimAlignRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-align-right-justify.js
var React14 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAlignRightJustify(props) {
  return React14.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React14.createElement("path", {
    opacity: 1,
    d: "M21 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }));
}
var uim_align_right_justify_default = UimAlignRightJustify;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-amazon.js
var React15 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAmazon(props) {
  return React15.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React15.createElement("path", {
    opacity: 1,
    d: "M1.04 17.52q.1-.16.32-.02a21.308 21.308 0 0 0 10.88 2.9 21.524 21.524 0 0 0 7.74-1.46q.1-.04.29-.12t.27-.12a.356.356 0 0 1 .47.12q.17.24-.11.44-.36.26-.92.6a14.99 14.99 0 0 1-3.84 1.58A16.175 16.175 0 0 1 12 22a16.017 16.017 0 0 1-5.9-1.09 16.246 16.246 0 0 1-4.98-3.07.273.273 0 0 1-.12-.2.215.215 0 0 1 .04-.12Zm6.02-5.7a4.036 4.036 0 0 1 .68-2.36A4.197 4.197 0 0 1 9.6 7.98a10.063 10.063 0 0 1 2.66-.66q.54-.06 1.76-.16v-.34a3.562 3.562 0 0 0-.28-1.72 1.5 1.5 0 0 0-1.32-.6h-.16a2.189 2.189 0 0 0-1.14.42 1.64 1.64 0 0 0-.62 1 .508.508 0 0 1-.4.46L7.8 6.1q-.34-.08-.34-.36a.587.587 0 0 1 .02-.14 3.834 3.834 0 0 1 1.67-2.64A6.268 6.268 0 0 1 12.26 2h.5a5.054 5.054 0 0 1 3.56 1.18 3.81 3.81 0 0 1 .37.43 3.875 3.875 0 0 1 .27.41 2.098 2.098 0 0 1 .18.52q.08.34.12.47a2.856 2.856 0 0 1 .06.56q.02.43.02.51v4.84a2.868 2.868 0 0 0 .15.95 2.475 2.475 0 0 0 .29.62q.14.19.46.61a.599.599 0 0 1 .12.32.346.346 0 0 1-.16.28q-1.66 1.44-1.8 1.56a.557.557 0 0 1-.58.04q-.28-.24-.49-.46t-.3-.32a4.466 4.466 0 0 1-.29-.39q-.2-.29-.28-.39a4.91 4.91 0 0 1-2.2 1.52 6.038 6.038 0 0 1-1.68.2 3.505 3.505 0 0 1-2.53-.95 3.553 3.553 0 0 1-.99-2.69Zm3.44-.4a1.895 1.895 0 0 0 .39 1.25 1.294 1.294 0 0 0 1.05.47 1.022 1.022 0 0 0 .17-.02 1.022 1.022 0 0 1 .15-.02 2.033 2.033 0 0 0 1.3-1.08 3.13 3.13 0 0 0 .33-.83 3.8 3.8 0 0 0 .12-.73q.01-.28.01-.92v-.5a7.287 7.287 0 0 0-1.76.16 2.144 2.144 0 0 0-1.76 2.22Zm8.4 6.44a.626.626 0 0 1 .12-.16 3.14 3.14 0 0 1 .96-.46 6.52 6.52 0 0 1 1.48-.22 1.195 1.195 0 0 1 .38.02q.9.08 1.08.3a.655.655 0 0 1 .08.36v.14a4.56 4.56 0 0 1-.38 1.65 3.84 3.84 0 0 1-1.06 1.53.302.302 0 0 1-.18.08.177.177 0 0 1-.08-.02q-.12-.06-.06-.22a7.632 7.632 0 0 0 .74-2.42.513.513 0 0 0-.08-.32q-.2-.24-1.12-.24-.34 0-.8.04-.5.06-.92.12a.232.232 0 0 1-.16-.04.065.065 0 0 1-.02-.08.153.153 0 0 1 .02-.06Z"
  }));
}
var uim_amazon_default = UimAmazon;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-analysis.js
var React16 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAnalysis(props) {
  return React16.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React16.createElement("path", {
    opacity: 1,
    d: "M14 16a1 1 0 0 1-.707-1.707l7-7A.99989.99989 0 0 1 21.707 8.707l-7 7A.99676.99676 0 0 1 14 16zM3 17a1 1 0 0 1-.707-1.707l6-6A.99989.99989 0 0 1 9.707 10.707l-6 6A.99676.99676 0 0 1 3 17z"
  }), React16.createElement("path", {
    opacity: 1,
    d: "M14,16a.99676.99676,0,0,1-.707-.293l-5-5A.99989.99989,0,0,1,9.707,9.293l5,5A1,1,0,0,1,14,16Z"
  }));
}
var uim_analysis_default = UimAnalysis;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-analytics.js
var React17 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAnalytics(props) {
  return React17.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React17.createElement("path", {
    opacity: 1,
    d: "M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z"
  }));
}
var uim_analytics_default = UimAnalytics;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-anchor.js
var React18 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAnchor(props) {
  return React18.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React18.createElement("path", {
    opacity: 1,
    d: "M12 22a8.01 8.01 0 0 1-8-8 1 1 0 0 1 2 0 6 6 0 0 0 12 0 1 1 0 0 1 2 0 8.01 8.01 0 0 1-8 8Z"
  }), React18.createElement("path", {
    opacity: 1,
    d: "M12 22a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v14a1 1 0 0 1-1 1zm-5-7H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm12 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"
  }), React18.createElement("path", {
    opacity: 1,
    d: "M14 11h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm-2-3a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1z"
  }));
}
var uim_anchor_default = UimAnchor;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-android.js
var React19 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAndroid(props) {
  return React19.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React19.createElement("path", {
    opacity: 1,
    d: "m14.975 3.019.96-1.732a.193.193 0 0 0-.338-.187l-.97 1.75a6.541 6.541 0 0 0-5.253 0l-.97-1.75a.193.193 0 0 0-.34.187l.96 1.732a5.546 5.546 0 0 0-3.092 4.876h12.137a5.546 5.546 0 0 0-3.094-4.876ZM5.931 17.17A1.467 1.467 0 0 0 7.4 18.64h.973v3a1.36 1.36 0 1 0 2.721 0v-3h1.814v3a1.36 1.36 0 1 0 2.72 0v-3h.974a1.467 1.467 0 0 0 1.468-1.468V8.375H5.93Zm-1.867-9.03a1.362 1.362 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.362 1.362 0 0 0-1.36-1.36Zm15.872 0a1.362 1.362 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.362 1.362 0 0 0-1.36-1.36Z"
  }), React19.createElement("circle", {
    cx: 9.199,
    cy: 5.168,
    r: 0.507,
    opacity: 0.5
  }), React19.createElement("circle", {
    cx: 14.801,
    cy: 5.168,
    r: 0.507,
    opacity: 0.5
  }));
}
var uim_android_default = UimAndroid;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-android-alt.js
var React20 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAndroidAlt(props) {
  return React20.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React20.createElement("path", {
    opacity: 1,
    d: "m16.2 4.7.7-1.2c.2-.5.1-1.1-.4-1.4-.5-.2-1.1-.1-1.4.4l-.6 1.1c.6.2 1.2.6 1.7 1.1zM7.8 4.7c.5-.5 1-.8 1.7-1.1l-.6-1.1c-.3-.5-.9-.6-1.4-.4s-.6.9-.4 1.4l.7 1.2zM6 9h12v2H6z"
  }), React20.createElement("path", {
    opacity: 0.5,
    d: "M12 3C8.7 3 6 5.7 6 9h12c0-3.3-2.7-6-6-6zM21 9c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zM3 9c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zM6 17c0 .6.4 1 1 1h2v3c0 .6.4 1 1 1s1-.4 1-1v-3h2v3c0 .6.4 1 1 1s1-.4 1-1v-3h2c.6 0 1-.4 1-1v-6H6v6z"
  }));
}
var uim_android_alt_default = UimAndroidAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-angle-double-down.js
var React21 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAngleDoubleDown(props) {
  return React21.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React21.createElement("path", {
    opacity: 1,
    d: "M12 11.75a.997.997 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 9.336l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a.997.997 0 0 1-.707.293zm0 5.5a.997.997 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 14.836l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a.997.997 0 0 1-.707.293z"
  }));
}
var uim_angle_double_down_default = UimAngleDoubleDown;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-angle-double-left.js
var React22 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAngleDoubleLeft(props) {
  return React22.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React22.createElement("path", {
    opacity: 1,
    d: "M16.25 16a.99676.99676 0 0 1-.707-.293l-3-3a.99962.99962 0 0 1 0-1.41406l3-3A.99989.99989 0 0 1 16.957 9.707L14.66406 12l2.293 2.293A1 1 0 0 1 16.25 16zM10.75 16a.99676.99676 0 0 1-.707-.293l-3-3a.99962.99962 0 0 1 0-1.41406l3-3A.99989.99989 0 0 1 11.457 9.707L9.16406 12l2.293 2.293A1 1 0 0 1 10.75 16z"
  }));
}
var uim_angle_double_left_default = UimAngleDoubleLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-angle-double-right.js
var React23 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAngleDoubleRight(props) {
  return React23.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React23.createElement("path", {
    opacity: 1,
    d: "M7.75 16a1 1 0 0 1-.707-1.707L9.336 12 7.043 9.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A.997.997 0 0 1 7.75 16zm5.5 0a1 1 0 0 1-.707-1.707L14.836 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.997.997 0 0 1-.707.293z"
  }));
}
var uim_angle_double_right_default = UimAngleDoubleRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-angle-double-up.js
var React24 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAngleDoubleUp(props) {
  return React24.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React24.createElement("path", {
    opacity: 1,
    d: "M15 17.25a.997.997 0 0 1-.707-.293L12 14.664l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 17.25zm0-5.5a.997.997 0 0 1-.707-.293L12 9.164l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 11.75z"
  }));
}
var uim_angle_double_up_default = UimAngleDoubleUp;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-angle-down.js
var React25 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAngleDown(props) {
  return React25.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React25.createElement("path", {
    opacity: 1,
    d: "M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293Z"
  }));
}
var uim_angle_down_default = UimAngleDown;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-angle-left.js
var React26 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAngleLeft(props) {
  return React26.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React26.createElement("path", {
    opacity: 1,
    d: "M14.121 17.243a.997.997 0 0 1-.707-.293l-4.242-4.243a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 1.414L11.293 12l3.535 3.536a1 1 0 0 1-.707 1.707Z"
  }));
}
var uim_angle_left_default = UimAngleLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-angle-right.js
var React27 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAngleRight(props) {
  return React27.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React27.createElement("path", {
    opacity: 1,
    d: "M9.879 17.243a1 1 0 0 1-.707-1.707L12.707 12 9.172 8.464a1 1 0 0 1 1.414-1.414l4.242 4.243a1 1 0 0 1 0 1.414l-4.242 4.243a.997.997 0 0 1-.707.293Z"
  }));
}
var uim_angle_right_default = UimAngleRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-angle-right-b.js
var React28 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAngleRightB(props) {
  return React28.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React28.createElement("path", {
    opacity: 1,
    d: "M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a.997.997 0 0 1-.707.293Z"
  }));
}
var uim_angle_right_b_default = UimAngleRightB;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-angle-up.js
var React29 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAngleUp(props) {
  return React29.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React29.createElement("path", {
    opacity: 1,
    d: "M16.243 15.121a.997.997 0 0 1-.707-.293L12 11.293l-3.536 3.535a1 1 0 0 1-1.414-1.414l4.243-4.242a1 1 0 0 1 1.414 0l4.243 4.242a1 1 0 0 1-.707 1.707Z"
  }));
}
var uim_angle_up_default = UimAngleUp;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-apple.js
var React30 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimApple(props) {
  return React30.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React30.createElement("path", {
    opacity: 1,
    d: "M17.458 12.625A4.523 4.523 0 0 1 19.62 8.82a4.672 4.672 0 0 0-3.658-1.984c-1.558-.158-3.04.917-3.829.917-.79 0-2.009-.894-3.3-.87a4.896 4.896 0 0 0-4.14 2.508c-1.762 3.06-.449 7.593 1.268 10.076.84 1.214 1.843 2.581 3.158 2.532 1.268-.05 1.746-.82 3.277-.82 1.531 0 1.962.82 3.3.795 1.364-.025 2.229-1.239 3.062-2.457a10.946 10.946 0 0 0 1.385-2.845 4.42 4.42 0 0 1-2.685-4.047Zm-2.517-7.432A4.405 4.405 0 0 0 15.981 2a4.483 4.483 0 0 0-2.945 1.516 4.186 4.186 0 0 0-1.061 3.093 3.71 3.71 0 0 0 2.966-1.416Z",
    "data-name": "Brand Logos"
  }));
}
var uim_apple_default = UimApple;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-apple-alt.js
var React31 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAppleAlt(props) {
  return React31.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React31.createElement("g", {
    opacity: 1,
    "data-name": "Brand Logos"
  }, React31.createElement("path", {
    d: "M17.594 12.625a4.523 4.523 0 0 1 2.162-3.805 4.672 4.672 0 0 0-3.658-1.984c-1.558-.158-3.04.917-3.83.917-.789 0-2.008-.894-3.3-.87A4.896 4.896 0 0 0 4.83 9.392c-1.763 3.06-.45 7.593 1.267 10.076.84 1.214 1.843 2.581 3.158 2.532 1.268-.05 1.746-.82 3.277-.82 1.53 0 1.961.82 3.3.795 1.364-.025 2.229-1.239 3.062-2.457a10.946 10.946 0 0 0 1.384-2.845 4.42 4.42 0 0 1-2.684-4.047Z"
  }), React31.createElement("path", {
    d: "M15.216 5.04A5.56 5.56 0 0 0 16.536 1a5.672 5.672 0 0 0-3.73 1.92l-.02.047a5.56 5.56 0 0 0-1.32 4.04 5.672 5.672 0 0 0 3.73-1.92Z"
  })));
}
var uim_apple_alt_default = UimAppleAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-apps.js
var React32 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimApps(props) {
  return React32.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React32.createElement("rect", {
    width: 9,
    height: 9,
    x: 2,
    y: 2,
    opacity: 1,
    rx: 1
  }), React32.createElement("rect", {
    width: 9,
    height: 9,
    x: 2,
    y: 13,
    opacity: 0.5,
    rx: 1
  }), React32.createElement("rect", {
    width: 9,
    height: 9,
    x: 13,
    y: 2,
    opacity: 0.5,
    rx: 1
  }), React32.createElement("rect", {
    width: 9,
    height: 9,
    x: 13,
    y: 13,
    opacity: 0.5,
    rx: 1
  }));
}
var uim_apps_default = UimApps;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-arrow-circle-down.js
var React33 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimArrowCircleDown(props) {
  return React33.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React33.createElement("path", {
    opacity: 1,
    d: "m7.293 12.707 4 4a1.004 1.004 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 13.586V8a1 1 0 0 0-2 0v5.586l-2.293-2.293a1 1 0 0 0-1.414 1.414Z"
  }), React33.createElement("path", {
    opacity: 0.5,
    d: "M12 22A10 10 0 1 0 2 12a10.011 10.011 0 0 0 10 10ZM7.293 11.293a1 1 0 0 1 1.414 0L11 13.586V8a1 1 0 0 1 2 0v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1.004 1.004 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
  }));
}
var uim_arrow_circle_down_default = UimArrowCircleDown;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-arrow-circle-left.js
var React34 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimArrowCircleLeft(props) {
  return React34.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React34.createElement("path", {
    opacity: 1,
    d: "m11.293 7.293-4 4a1.004 1.004 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 0 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414Z"
  }), React34.createElement("path", {
    opacity: 0.5,
    d: "M2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm10.707-4.707a1 1 0 0 1 0 1.414L10.414 11H16a1 1 0 0 1 0 2h-5.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1.004 1.004 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
  }));
}
var uim_arrow_circle_left_default = UimArrowCircleLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-arrow-circle-right.js
var React35 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimArrowCircleRight(props) {
  return React35.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React35.createElement("path", {
    opacity: 1,
    d: "m12.707 16.707 4-4a1.004 1.004 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L13.586 11H8a1 1 0 0 0 0 2h5.586l-2.293 2.293a1 1 0 0 0 1.414 1.414Z"
  }), React35.createElement("path", {
    opacity: 0.5,
    d: "M22 12a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-10.707 4.707a1 1 0 0 1 0-1.414L13.586 13H8a1 1 0 0 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1.004 1.004 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
  }));
}
var uim_arrow_circle_right_default = UimArrowCircleRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-arrow-circle-up.js
var React36 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimArrowCircleUp(props) {
  return React36.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React36.createElement("path", {
    opacity: 1,
    d: "m16.707 11.293-4-4a1.004 1.004 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 10.414V16a1 1 0 0 0 2 0v-5.586l2.293 2.293a1 1 0 0 0 1.414-1.414Z"
  }), React36.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.707 10.707a1 1 0 0 1-1.414 0L13 10.414V16a1 1 0 0 1-2 0v-5.586l-2.293 2.293a1 1 0 0 1-1.414-1.414l4-4a1.004 1.004 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414Z"
  }));
}
var uim_arrow_circle_up_default = UimArrowCircleUp;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-arrow-down-left.js
var React37 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimArrowDownLeft(props) {
  return React37.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React37.createElement("path", {
    opacity: 1,
    d: "M17 18H7a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v9h9a1 1 0 0 1 0 2Z"
  }), React37.createElement("path", {
    opacity: 1,
    d: "M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A.997.997 0 0 1 7 18Z"
  }));
}
var uim_arrow_down_left_default = UimArrowDownLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-arrow-down-right.js
var React38 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimArrowDownRight(props) {
  return React38.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React38.createElement("path", {
    opacity: 1,
    d: "M17 18H7a1 1 0 0 1 0-2h9V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1Z"
  }), React38.createElement("path", {
    opacity: 1,
    d: "M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18Z"
  }));
}
var uim_arrow_down_right_default = UimArrowDownRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-arrow-up-left.js
var React39 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimArrowUpLeft(props) {
  return React39.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React39.createElement("path", {
    opacity: 1,
    d: "M7 18a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H8v9a1 1 0 0 1-1 1Z"
  }), React39.createElement("path", {
    opacity: 1,
    d: "M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18Z"
  }));
}
var uim_arrow_up_left_default = UimArrowUpLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-arrow-up-right.js
var React40 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimArrowUpRight(props) {
  return React40.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React40.createElement("path", {
    opacity: 1,
    d: "M17 18a1 1 0 0 1-1-1V8H7a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1Z"
  }), React40.createElement("path", {
    opacity: 1,
    d: "M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A.997.997 0 0 1 7 18Z"
  }));
}
var uim_arrow_up_right_default = UimArrowUpRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-at.js
var React41 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimAt(props) {
  return React41.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React41.createElement("path", {
    opacity: 1,
    d: "M12 16.5a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1-4.5 4.5Zm0-7a2.5 2.5 0 1 0 2.5 2.5A2.503 2.503 0 0 0 12 9.5Z"
  }), React41.createElement("path", {
    opacity: 1,
    d: "M12 22a10 10 0 1 1 10-10v.75a3.75 3.75 0 0 1-7.5 0V8.5a1 1 0 0 1 2 0v4.25a1.75 1.75 0 0 0 3.5 0V12a8 8 0 1 0-4 6.928 1 1 0 1 1 1 1.733A10.02 10.02 0 0 1 12 22Z"
  }));
}
var uim_at_default = UimAt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-bag.js
var React42 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBag(props) {
  return React42.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React42.createElement("path", {
    opacity: 0.5,
    d: "M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3z"
  }), React42.createElement("path", {
    opacity: 1,
    d: "M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1h2zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14H8.837z"
  }));
}
var uim_bag_default = UimBag;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-bars.js
var React43 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBars(props) {
  return React43.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React43.createElement("path", {
    opacity: 1,
    d: "M21 13H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0-10H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
  }));
}
var uim_bars_default = UimBars;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-battery-bolt.js
var React44 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBatteryBolt(props) {
  return React44.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React44.createElement("path", {
    opacity: 1,
    d: "M13.988 12.059A1.023 1.023 0 0 0 13 11H9.732l1.444-2.5a1 1 0 1 0-1.733-1l-2.31 4A1.022 1.022 0 0 0 8 13h3.268l-1.444 2.5a1 1 0 0 0 1.733 1l2.31-4a1.267 1.267 0 0 0 .121-.441Z"
  }), React44.createElement("path", {
    opacity: 0.5,
    d: "M17 7H4a2.002 2.002 0 0 0-2 2v6a2.002 2.002 0 0 0 2 2h6.69a1 1 0 0 1-.866-1.5l1.444-2.5H8a1.022 1.022 0 0 1-.866-1.5l2.31-4a1 1 0 1 1 1.732 1L9.732 11H13a1.023 1.023 0 0 1 .988 1.059 1.268 1.268 0 0 1-.122.441l-2.31 4a1 1 0 0 1-.867.5H17a2.002 2.002 0 0 0 2-2V9a2.002 2.002 0 0 0-2-2zm4 7a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1z"
  }));
}
var uim_battery_bolt_default = UimBatteryBolt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-battery-empty.js
var React45 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBatteryEmpty(props) {
  return React45.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React45.createElement("path", {
    opacity: 1,
    d: "M21 14a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm-4 3H4a2.002 2.002 0 0 1-2-2V9a2.002 2.002 0 0 1 2-2h13a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2z"
  }));
}
var uim_battery_empty_default = UimBatteryEmpty;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-behance.js
var React46 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBehance(props) {
  return React46.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React46.createElement("path", {
    opacity: 1,
    d: "M10.396 11.519h-.108l.24-.132a2.333 2.333 0 0 0 1.095-1.203 3.464 3.464 0 0 0 .145-1.697 2.815 2.815 0 0 0-1.732-2.297 4.728 4.728 0 0 0-1.925-.385H2v12.354h5.582a9.448 9.448 0 0 0 1.587-.132 3.465 3.465 0 0 0 2.659-1.973 3.741 3.741 0 0 0 .3-2.406 2.694 2.694 0 0 0-1.732-2.13ZM4.9 7.959h2.406a4.67 4.67 0 0 1 1.203.156 1.035 1.035 0 0 1 .794.926 1.9 1.9 0 0 1 0 .746.999.999 0 0 1-.517.65 2.478 2.478 0 0 1-1.203.264H4.875Zm4.655 6.904a1.395 1.395 0 0 1-1.202 1.13 4.363 4.363 0 0 1-.794.085H4.875v-3.272h2.863a2.72 2.72 0 0 1 .902.156 1.311 1.311 0 0 1 .914 1.203 2.549 2.549 0 0 1 0 .698Zm12.439-.806c.012-.024.012-.048-.024-.024v-1.335a4.379 4.379 0 0 0-.41-1.769 3.729 3.729 0 0 0-1.924-1.852 5.137 5.137 0 0 0-2.947-.289 3.886 3.886 0 0 0-3.212 2.815 6.7 6.7 0 0 0-.144 3.465 3.5 3.5 0 0 0 .866 1.732 4.523 4.523 0 0 0 2.069 1.203 5.45 5.45 0 0 0 2.321.12 4.006 4.006 0 0 0 2.515-1.323 3.165 3.165 0 0 0 .71-1.203.523.523 0 0 0 .084-.349h-2.358a.12.12 0 0 0-.12.072 1.708 1.708 0 0 1-1.203.902 2.681 2.681 0 0 1-1.083 0 1.9 1.9 0 0 1-1.432-1.058 2.406 2.406 0 0 1-.204-.722v-.385Zm-6.352-1.732a4.515 4.515 0 0 1 .193-.566 1.732 1.732 0 0 1 1.576-1.082 2.287 2.287 0 0 1 1.046.144 1.78 1.78 0 0 1 1.13 1.444v.252l-3.945.036a2.099 2.099 0 0 1 0-.228Zm4.415-6.015h-5.004v1.444l5.004-.012Z",
    "data-name": "Brand Logos"
  }));
}
var uim_behance_default = UimBehance;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-behance-alt.js
var React47 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBehanceAlt(props) {
  return React47.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React47.createElement("g", {
    opacity: 1,
    "data-name": "Brand Logos"
  }, React47.createElement("path", {
    d: "M7.5 20H2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h5.5a4.5 4.5 0 0 1 0 9ZM3 18h4.5a2.5 2.5 0 0 0 0-5H3Z"
  }), React47.createElement("path", {
    d: "M7 13H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5a4 4 0 0 1 0 8zm-4-2h4a2 2 0 0 0 0-4H3zm17-4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm2 7h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), React47.createElement("path", {
    d: "M18 20a5.006 5.006 0 0 1-5-5v-2a5 5 0 1 1 10 0 1 1 0 0 1-2 0 3 3 0 0 0-6 0v2a2.998 2.998 0 0 0 5.9.754 1 1 0 0 1 1.94.492A4.985 4.985 0 0 1 18 20Z"
  })));
}
var uim_behance_alt_default = UimBehanceAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-bing.js
var React48 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBing(props) {
  return React48.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React48.createElement("polygon", {
    opacity: 0.7,
    style: {
      isolation: "isolate"
    },
    points: "10.129 8.596 11.864 12.924 14.634 14.214 14.634 14.214 19 16.247 19 11.7 10.129 8.596"
  }), React48.createElement("polygon", {
    opacity: 1,
    points: "14.634 14.214 14.634 14.214 9 17.457 9 3.4 5 2 5 19.76 9 22 19 16.247 19 11.7 14.634 14.214"
  }));
}
var uim_bing_default = UimBing;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-bitcoin.js
var React49 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBitcoin(props) {
  return React49.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React49.createElement("path", {
    opacity: 0.5,
    d: "M16.358 10.575c.197-1.33-.805-2.046-2.175-2.523l.445-1.802-1.085-.274-.433 1.755c-.285-.072-.578-.14-.869-.207l.436-1.766-1.085-.274-.444 1.802a36.28 36.28 0 0 1-.693-.164l.001-.006-1.496-.378-.288 1.172s.804.187.788.198c.313.04.537.324.505.638l-1.217 4.938a.394.394 0 0 1-.498.26c.011.017-.788-.198-.788-.198l-.539 1.256 1.412.356c.263.066.52.136.773.201l-.449 1.824 1.084.273.445-1.804c.296.082.583.157.864.227l-.443 1.795 1.085.274.449-1.82c1.85.354 3.241.211 3.827-1.48a1.933 1.933 0 0 0-.997-2.662 1.743 1.743 0 0 0 1.385-1.61zm-2.479 3.516c-.335 1.362-2.603.626-3.339.44l.596-2.414c.735.185 3.094.553 2.743 1.974zm.336-3.535c-.306 1.239-2.194.61-2.806.455l.54-2.19c.612.154 2.584.442 2.266 1.735z"
  }), React49.createElement("path", {
    opacity: 1,
    d: "m11.949 8.82-.54 2.191c.612.154 2.5.784 2.806-.455.318-1.293-1.654-1.581-2.266-1.736zM11.136 12.117l-.596 2.415c.736.185 3.004.921 3.34-.441.35-1.421-2.009-1.789-2.744-1.974z"
  }), React49.createElement("path", {
    opacity: 1,
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.358 8.575a1.743 1.743 0 0 1-1.385 1.611 1.933 1.933 0 0 1 .997 2.66c-.586 1.693-1.977 1.836-3.827 1.482l-.449 1.82-1.085-.274.443-1.795c-.28-.07-.568-.145-.864-.227l-.445 1.804-1.084-.273.45-1.824c-.254-.065-.511-.135-.774-.201l-1.412-.356.539-1.256s.8.215.788.199l.005.001a.394.394 0 0 0 .493-.262l1.217-4.938a.583.583 0 0 0-.505-.638c.016-.011-.788-.198-.788-.198l.288-1.172 1.496.378-.001.006c.225.056.457.11.693.164l.444-1.802 1.085.274-.436 1.766c.291.068.584.135.87.207l.432-1.755 1.085.274-.445 1.802c1.37.477 2.372 1.193 2.175 2.523z"
  }));
}
var uim_bitcoin_default = UimBitcoin;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-bitcoin-alt.js
var React50 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBitcoinAlt(props) {
  return React50.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React50.createElement("path", {
    opacity: 1,
    d: "M16.313 11.24A3.998 3.998 0 0 0 13 5V4a1 1 0 0 0-2 0v1H9V4a1 1 0 0 0-2 0v1H6a1 1 0 0 0 0 2h1v10H6a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2a3.99 3.99 0 0 0 1.313-7.76ZM15 9a2.002 2.002 0 0 1-2 2H9V7h4a2.002 2.002 0 0 1 2 2Zm0 8H9v-4h6a2 2 0 0 1 0 4Z"
  }));
}
var uim_bitcoin_alt_default = UimBitcoinAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-blackberry.js
var React51 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBlackberry(props) {
  return React51.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React51.createElement("path", {
    opacity: 0.5,
    d: "M7.188 13.352H5.27l.523-2.415h1.838c1.195 0 1.48.586 1.48 1.05 0 .657-.428 1.365-1.923 1.365zm.661-3.637H5.936l.52-2.416h1.84c1.194 0 1.479.587 1.479 1.051 0 .657-.428 1.365-1.926 1.365zm3.754 7.425H9.685l.522-2.418h1.84c1.193 0 1.476.589 1.476 1.054 0 .658-.425 1.364-1.92 1.364zm.708-3.788h-1.914l.521-2.415h1.84c1.193 0 1.476.586 1.476 1.05 0 .657-.425 1.365-1.923 1.365zm.664-3.637h-1.914l.523-2.416h1.836c1.196 0 1.48.587 1.48 1.051 0 .657-.427 1.365-1.925 1.365zm3.747 5.605h-1.915l.522-2.418h1.838c1.194 0 1.478.59 1.478 1.053 0 .657-.425 1.365-1.923 1.365zm.713-3.443H15.52l.522-2.416h1.84c1.194 0 1.476.587 1.476 1.052 0 .657-.425 1.364-1.923 1.364z"
  }), React51.createElement("path", {
    opacity: 1,
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.188 13.352H5.27l.523-2.415h1.838c1.195 0 1.48.586 1.48 1.05 0 .657-.428 1.365-1.923 1.365zm.661-3.637H5.936l.52-2.416h1.84c1.194 0 1.479.587 1.479 1.051 0 .657-.428 1.365-1.926 1.365zm3.754 7.425H9.685l.522-2.418h1.84c1.193 0 1.476.589 1.476 1.054 0 .658-.425 1.364-1.92 1.364zm.708-3.788h-1.914l.521-2.415h1.84c1.193 0 1.476.586 1.476 1.05 0 .657-.425 1.365-1.923 1.365zm.664-3.637h-1.914l.523-2.416h1.836c1.196 0 1.48.587 1.48 1.051 0 .657-.427 1.365-1.925 1.365zm3.747 5.605h-1.915l.522-2.418h1.838c1.194 0 1.478.59 1.478 1.053 0 .657-.425 1.365-1.923 1.365zm.713-3.443H15.52l.522-2.416h1.84c1.194 0 1.476.587 1.476 1.052 0 .657-.425 1.364-1.923 1.364z"
  }));
}
var uim_blackberry_default = UimBlackberry;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-blogger.js
var React52 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBlogger(props) {
  return React52.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React52.createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    d: "m18.333 10.922-.11-.222-.178-.14c-.235-.184-1.423.011-1.742-.278-.228-.208-.263-.584-.33-1.09a3.154 3.154 0 0 0-.362-1.367 4.46 4.46 0 0 0-3.12-2.2H9.667a4.053 4.053 0 0 0-4.042 4.03v4.695a4.05 4.05 0 0 0 4.042 4.025h4.639a4.052 4.052 0 0 0 4.038-4.022l.02-2.675.005-.579-.036-.177zM9.718 8.917h2.24a.77.77 0 0 1 0 1.541h-2.24a.77.77 0 0 1 0-1.541zm4.55 6.125h-4.55a.75.75 0 1 1 0-1.5h4.55a.75.75 0 1 1 0 1.5z",
    clipRule: "evenodd"
  }), React52.createElement("path", {
    opacity: 1,
    d: "M14.267 13.542H9.673a.75.75 0 0 0 .045 1.5h4.587a.75.75 0 0 0-.038-1.5zM9.718 10.458h2.24a.77.77 0 1 0 0-1.541h-2.24a.77.77 0 1 0 0 1.541z"
  }), React52.createElement("path", {
    opacity: 1,
    d: "M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2zm-1.136 9.678-.02 2.675a4.051 4.051 0 0 1-4.038 4.022h-4.64a4.05 4.05 0 0 1-4.041-4.025V9.656a4.053 4.053 0 0 1 4.042-4.031h2.824a4.46 4.46 0 0 1 3.12 2.2c.222.422.346.89.362 1.367.067.506.102.882.33 1.09.32.29 1.507.094 1.742.278l.179.14.109.222.036.177-.005.579z"
  }));
}
var uim_blogger_default = UimBlogger;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-blogger-alt.js
var React53 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBloggerAlt(props) {
  return React53.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React53.createElement("path", {
    opacity: 0.5,
    d: "M20 23H4a3.003 3.003 0 0 1-3-3V4a3.003 3.003 0 0 1 3-3h16a3.003 3.003 0 0 1 3 3v16a3.003 3.003 0 0 1-3 3z"
  }), React53.createElement("path", {
    opacity: 1,
    d: "M16.003 10.002H16V9a4.004 4.004 0 0 0-4-4h-2a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h4a5.006 5.006 0 0 0 5-5v-1a3 3 0 0 0-2.997-2.998zM10 9h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zm4 6h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"
  }));
}
var uim_blogger_alt_default = UimBloggerAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-bookmark.js
var React54 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBookmark(props) {
  return React54.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React54.createElement("path", {
    opacity: 1,
    d: "M18 22a1 1 0 0 1-.5-.134L12 18.694l-5.5 3.172A1 1 0 0 1 5 21V5a3.003 3.003 0 0 1 3-3h8a3.003 3.003 0 0 1 3 3v16a1 1 0 0 1-1 1Z"
  }));
}
var uim_bookmark_default = UimBookmark;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-border-alt.js
var React55 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBorderAlt(props) {
  return React55.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React55.createElement("path", {
    opacity: 1,
    d: "M3.5 20.5a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-15v15a1 1 0 0 1-1 1Z"
  }), React55.createElement("circle", {
    cx: 19.5,
    cy: 11.5,
    r: 1,
    opacity: 0.5
  }), React55.createElement("circle", {
    cx: 19.5,
    cy: 7.5,
    r: 1,
    opacity: 0.5
  }), React55.createElement("circle", {
    cx: 19.5,
    cy: 15.5,
    r: 1,
    opacity: 0.5
  }), React55.createElement("circle", {
    cx: 7.5,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }), React55.createElement("circle", {
    cx: 11.5,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }), React55.createElement("circle", {
    cx: 15.5,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }), React55.createElement("circle", {
    cx: 19.5,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }));
}
var uim_border_alt_default = UimBorderAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-border-bottom.js
var React56 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBorderBottom(props) {
  return React56.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React56.createElement("path", {
    opacity: 1,
    d: "M20 21.5H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Z"
  }), React56.createElement("circle", {
    cx: 12,
    cy: 16.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 12,
    cy: 12.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 12,
    cy: 8.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 12,
    cy: 4.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 4,
    cy: 16.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 4,
    cy: 12.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 4,
    cy: 8.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 4,
    cy: 4.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 8,
    cy: 4.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 16,
    cy: 4.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 8,
    cy: 12.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 16,
    cy: 12.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 20,
    cy: 16.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 20,
    cy: 12.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 20,
    cy: 8.5,
    r: 1,
    opacity: 0.5
  }), React56.createElement("circle", {
    cx: 20,
    cy: 4.5,
    r: 1,
    opacity: 0.5
  }));
}
var uim_border_bottom_default = UimBorderBottom;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-border-clear.js
var React57 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBorderClear(props) {
  return React57.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React57.createElement("circle", {
    cx: 12,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 12,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 12,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 12,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 4,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 4,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 4,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 4,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 8,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 16,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 8,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 16,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 8,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 16,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 20,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 20,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 20,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 4,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 20,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React57.createElement("circle", {
    cx: 20,
    cy: 4,
    r: 1,
    opacity: 0.5
  }));
}
var uim_border_clear_default = UimBorderClear;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-border-horizontal.js
var React58 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBorderHorizontal(props) {
  return React58.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React58.createElement("path", {
    opacity: 1,
    d: "M20 13H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Z"
  }), React58.createElement("circle", {
    cx: 12,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 12,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 12,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 12,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 4,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 4,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 4,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 4,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 8,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 16,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 8,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 16,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 20,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 20,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 20,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React58.createElement("circle", {
    cx: 20,
    cy: 4,
    r: 1,
    opacity: 0.5
  }));
}
var uim_border_horizontal_default = UimBorderHorizontal;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-border-inner.js
var React59 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBorderInner(props) {
  return React59.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React59.createElement("path", {
    opacity: 1,
    d: "M19.965 13h-16a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Z"
  }), React59.createElement("path", {
    opacity: 1,
    d: "M11.965 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1Z"
  }), React59.createElement("circle", {
    cx: 3.964,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 3.964,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 3.964,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 3.964,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 7.964,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 15.964,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 7.964,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 15.964,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 19.964,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 19.964,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 19.964,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React59.createElement("circle", {
    cx: 19.964,
    cy: 4,
    r: 1,
    opacity: 0.5
  }));
}
var uim_border_inner_default = UimBorderInner;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-border-left.js
var React60 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBorderLeft(props) {
  return React60.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React60.createElement("path", {
    opacity: 1,
    d: "M3.5 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1Z"
  }), React60.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 11.5,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 15.5,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 19.5,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 7.5,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 11.5,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 15.5,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 19.5,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 19.5,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 19.5,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 11.5,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 11.5,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 7.5,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 11.5,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 15.5,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React60.createElement("circle", {
    cx: 19.5,
    cy: 20,
    r: 1,
    opacity: 0.5
  }));
}
var uim_border_left_default = UimBorderLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-border-out.js
var React61 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBorderOut(props) {
  return React61.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React61.createElement("path", {
    opacity: 1,
    d: "M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM5 19h14V5H5Z"
  }), React61.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React61.createElement("circle", {
    cx: 12,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React61.createElement("circle", {
    cx: 12,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React61.createElement("circle", {
    cx: 8,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React61.createElement("circle", {
    cx: 16,
    cy: 12,
    r: 1,
    opacity: 0.5
  }));
}
var uim_border_out_default = UimBorderOut;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-border-right.js
var React62 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBorderRight(props) {
  return React62.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React62.createElement("path", {
    opacity: 1,
    d: "M20.5 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1Z"
  }), React62.createElement("circle", {
    cx: 16.5,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 12.5,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 8.5,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 4.5,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 16.5,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 12.5,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 8.5,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 4.5,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 4.5,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 4.5,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 12.5,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 12.5,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 16.5,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 12.5,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 8.5,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React62.createElement("circle", {
    cx: 4.5,
    cy: 4,
    r: 1,
    opacity: 0.5
  }));
}
var uim_border_right_default = UimBorderRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-border-top.js
var React63 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBorderTop(props) {
  return React63.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React63.createElement("path", {
    opacity: 1,
    d: "M20 4.5H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Z"
  }), React63.createElement("circle", {
    cx: 12,
    cy: 7.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 12,
    cy: 11.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 12,
    cy: 15.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 12,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 20,
    cy: 7.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 20,
    cy: 11.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 20,
    cy: 15.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 20,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 16,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 8,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 16,
    cy: 11.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 8,
    cy: 11.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 4,
    cy: 7.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 4,
    cy: 11.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 4,
    cy: 15.5,
    r: 1,
    opacity: 0.5
  }), React63.createElement("circle", {
    cx: 4,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }));
}
var uim_border_top_default = UimBorderTop;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-border-vertical.js
var React64 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBorderVertical(props) {
  return React64.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React64.createElement("path", {
    opacity: 1,
    d: "M11 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1Z"
  }), React64.createElement("circle", {
    cx: 7,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 3,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 15,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 19,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 7,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 3,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 15,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 19,
    cy: 4,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 19,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 19,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 3,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 3,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 7,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 3,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 15,
    cy: 20,
    r: 1,
    opacity: 0.5
  }), React64.createElement("circle", {
    cx: 19,
    cy: 20,
    r: 1,
    opacity: 0.5
  }));
}
var uim_border_vertical_default = UimBorderVertical;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-box.js
var React65 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBox(props) {
  return React65.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React65.createElement("path", {
    opacity: 0.25,
    d: "M20.23 7.24 12 12 3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z"
  }), React65.createElement("path", {
    opacity: 0.5,
    d: "M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z"
  }), React65.createElement("path", {
    opacity: 1,
    d: "M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z"
  }));
}
var uim_box_default = UimBox;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-briefcase.js
var React66 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimBriefcase(props) {
  return React66.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React66.createElement("path", {
    opacity: 1,
    d: "M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1h2z"
  }), React66.createElement("path", {
    opacity: 0.25,
    d: "M9 15a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1z"
  }), React66.createElement("path", {
    opacity: 0.5,
    d: "M20 6H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4v-1a1 1 0 1 1 2 0v1h4v-1a1 1 0 1 1 2 0v1h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
  }), React66.createElement("path", {
    opacity: 1,
    d: "M20 13h-4v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H4a2 2 0 0 1-2-2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 1-2 2z"
  }));
}
var uim_briefcase_default = UimBriefcase;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-calender.js
var React67 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCalender(props) {
  return React67.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React67.createElement("path", {
    opacity: 0.5,
    d: "M22 10H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9zM7 8a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z"
  }), React67.createElement("path", {
    opacity: 1,
    d: "M19 4h-1v3a1 1 0 0 1-2 0V4H8v3a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v3h20V7a3 3 0 0 0-3-3z"
  }));
}
var uim_calender_default = UimCalender;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-chart.js
var React68 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimChart(props) {
  return React68.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React68.createElement("path", {
    opacity: 1,
    d: "M7 18a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1z"
  }), React68.createElement("path", {
    opacity: 0.5,
    d: "M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM8 17a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm5 0a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm5 0a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Z"
  }));
}
var uim_chart_default = UimChart;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-chart-pie.js
var React69 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimChartPie(props) {
  return React69.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React69.createElement("path", {
    opacity: 0.25,
    d: "M12 12V2c5.523 0 10 4.477 10 10H12z"
  }), React69.createElement("path", {
    opacity: 0.5,
    d: "m12 12 5 8.66A10.01 10.01 0 0 0 22 12H12z"
  }), React69.createElement("path", {
    opacity: 1,
    d: "M17 20.66 12 12V2c-5.523.002-9.999 4.48-9.997 10.003.002 5.523 4.48 9.999 10.004 9.997A10 10 0 0 0 17 20.662l.003-.005-.004.003z"
  }));
}
var uim_chart_pie_default = UimChartPie;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-check.js
var React70 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCheck(props) {
  return React70.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React70.createElement("path", {
    opacity: 1,
    d: "M9.84 17.08a.997.997 0 0 1-.707-.293l-3.84-3.84a1 1 0 1 1 1.414-1.414l3.133 3.133 7.453-7.453a1 1 0 0 1 1.414 1.414l-8.16 8.16a.997.997 0 0 1-.707.293Z"
  }));
}
var uim_check_default = UimCheck;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-check-circle.js
var React71 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCheckCircle(props) {
  return React71.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React71.createElement("path", {
    opacity: 0.99,
    d: "M10.313 16.094a.997.997 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a.997.997 0 0 1-.707.293Z"
  }), React71.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5.207 7.613-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413Z"
  }));
}
var uim_check_circle_default = UimCheckCircle;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-check-square.js
var React72 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCheckSquare(props) {
  return React72.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React72.createElement("path", {
    opacity: 1,
    d: "M10.2 16.4a.997.997 0 0 1-.707-.293l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.093-6.093a1 1 0 0 1 1.414 1.414l-6.8 6.8a.997.997 0 0 1-.707.293Z"
  }), React72.createElement("path", {
    opacity: 0.5,
    d: "M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-3.293 7.307-6.8 6.8a1 1 0 0 1-1.414 0l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.093-6.093a1 1 0 0 1 1.414 1.414Z"
  }));
}
var uim_check_square_default = UimCheckSquare;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-circle.js
var React73 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCircle(props) {
  return React73.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React73.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    opacity: 1
  }));
}
var uim_circle_default = UimCircle;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-circle-layer.js
var React74 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCircleLayer(props) {
  return React74.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React74.createElement("path", {
    opacity: 0.25,
    d: "M15 2a6.998 6.998 0 0 0-6.88 5.737 6 6 0 0 1 8.143 8.143A6.997 6.997 0 0 0 15 2z"
  }), React74.createElement("circle", {
    cx: 7,
    cy: 17,
    r: 5,
    opacity: 1
  }), React74.createElement("path", {
    opacity: 0.5,
    d: "M11 7a6 6 0 0 0-5.97 5.406 4.997 4.997 0 0 1 6.564 6.564A6 6 0 0 0 11 7z"
  }));
}
var uim_circle_layer_default = UimCircleLayer;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-clinic-medical.js
var React75 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimClinicMedical(props) {
  return React75.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React75.createElement("path", {
    opacity: 0.5,
    d: "M21 12a.996.996 0 0 1-.664-.252L12 4.338l-8.336 7.41a1 1 0 0 1-1.328-1.496l9-8a.999.999 0 0 1 1.328 0l9 8A1 1 0 0 1 21 12Z"
  }), React75.createElement("path", {
    opacity: 1,
    d: "M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z"
  }), React75.createElement("path", {
    opacity: 0.25,
    d: "m12 4.338-8 7.111V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.551ZM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"
  }));
}
var uim_clinic_medical_default = UimClinicMedical;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-clock.js
var React76 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimClock(props) {
  return React76.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React76.createElement("path", {
    opacity: 1,
    d: "M12 6a1 1 0 0 1 1 1v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1.005 1.005 0 0 1 11 12V7a1 1 0 0 1 1-1Z"
  }), React76.createElement("path", {
    opacity: 0.5,
    d: "M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12Zm9-5a1 1 0 0 1 2 0v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1.005 1.005 0 0 1 11 12Z"
  }));
}
var uim_clock_default = UimClock;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-clock-eight.js
var React77 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimClockEight(props) {
  return React77.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React77.createElement("path", {
    opacity: 1,
    d: "M12 6a1 1 0 0 0-1 1v4.422l-2.098 1.212a1 1 0 0 0 1 1.732l2.598-1.5A1.005 1.005 0 0 0 13 12V7a1 1 0 0 0-1-1Z"
  }), React77.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 10a1.005 1.005 0 0 1-.5.866l-2.598 1.5a1 1 0 0 1-1-1.732L11 11.422V7a1 1 0 0 1 2 0Z"
  }));
}
var uim_clock_eight_default = UimClockEight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-clock-five.js
var React78 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimClockFive(props) {
  return React78.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React78.createElement("path", {
    opacity: 1,
    d: "M12 6a1.003 1.003 0 0 1 1 1v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A.999.999 0 0 1 11 12V7a1.003 1.003 0 0 1 1-1Z"
  }), React78.createElement("path", {
    opacity: 0.5,
    d: "M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12Zm9-5a1 1 0 0 1 2 0v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A.999.999 0 0 1 11 12Z"
  }));
}
var uim_clock_five_default = UimClockFive;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-clock-nine.js
var React79 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimClockNine(props) {
  return React79.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React79.createElement("path", {
    opacity: 1,
    d: "M12 6a1 1 0 0 0-1 1v4H9a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
  }), React79.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 10a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h2V7a1 1 0 0 1 2 0Z"
  }));
}
var uim_clock_nine_default = UimClockNine;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-clock-seven.js
var React80 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimClockSeven(props) {
  return React80.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React80.createElement("path", {
    opacity: 1,
    d: "M12 6a1.003 1.003 0 0 0-1 1v4.73L9.4 14.5a1 1 0 1 0 1.73 1l1.69-2.93A.999.999 0 0 0 13 12V7a1.003 1.003 0 0 0-1-1Z"
  }), React80.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 10a.999.999 0 0 1-.18.57l-1.69 2.93a1 1 0 1 1-1.73-1l1.6-2.77V7a1 1 0 0 1 2 0Z"
  }));
}
var uim_clock_seven_default = UimClockSeven;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-clock-ten.js
var React81 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimClockTen(props) {
  return React81.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React81.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    opacity: 0.5
  }), React81.createElement("path", {
    opacity: 1,
    d: "M13 7a1 1 0 0 0-2 0v3.268l-1.098-.634a1 1 0 0 0-1 1.732l2.598 1.5A1.014 1.014 0 0 0 13 12Z"
  }));
}
var uim_clock_ten_default = UimClockTen;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-clock-three.js
var React82 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimClockThree(props) {
  return React82.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React82.createElement("path", {
    opacity: 1,
    d: "M12 6a1 1 0 0 1 1 1v4h2a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
  }), React82.createElement("path", {
    opacity: 0.5,
    d: "M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12Zm9-5a1 1 0 0 1 2 0v4h2a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1Z"
  }));
}
var uim_clock_three_default = UimClockThree;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-clock-two.js
var React83 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimClockTwo(props) {
  return React83.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React83.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    opacity: 0.5
  }), React83.createElement("path", {
    opacity: 1,
    d: "M11 7a1 1 0 0 1 2 0v3.268l1.098-.634a1 1 0 0 1 1 1.732l-2.598 1.5A1.014 1.014 0 0 1 11 12Z"
  }));
}
var uim_clock_two_default = UimClockTwo;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-columns.js
var React84 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimColumns(props) {
  return React84.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React84.createElement("path", {
    opacity: 0.25,
    d: "M11 2h2v20h-2z"
  }), React84.createElement("path", {
    opacity: 1,
    d: "M3 2h8v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
  }), React84.createElement("path", {
    opacity: 0.5,
    d: "M13 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-8V2z"
  }));
}
var uim_columns_default = UimColumns;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-comment.js
var React85 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimComment(props) {
  return React85.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React85.createElement("path", {
    opacity: 0.5,
    d: "M12 22H3a1 1 0 0 1-.707-1.707l1.964-1.964A10 10 0 1 1 12 22Z"
  }));
}
var uim_comment_default = UimComment;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-comment-alt.js
var React86 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCommentAlt(props) {
  return React86.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React86.createElement("path", {
    opacity: 0.5,
    d: "M21 22a.999.999 0 0 1-.707-.293L16.586 18H5a3.003 3.003 0 0 1-3-3V5a3.003 3.003 0 0 1 3-3h14a3.003 3.003 0 0 1 3 3v16a1 1 0 0 1-1 1Z"
  }));
}
var uim_comment_alt_default = UimCommentAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-comment-alt-dots.js
var React87 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCommentAltDots(props) {
  return React87.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React87.createElement("path", {
    opacity: 0.5,
    d: "M19 2H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h11.586l3.707 3.707A1 1 0 0 0 22 21V5a3.003 3.003 0 0 0-3-3ZM8 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"
  }), React87.createElement("circle", {
    cx: 8,
    cy: 10,
    r: 1,
    opacity: 1
  }), React87.createElement("circle", {
    cx: 12,
    cy: 10,
    r: 1,
    opacity: 1
  }), React87.createElement("circle", {
    cx: 16,
    cy: 10,
    r: 1,
    opacity: 1
  }));
}
var uim_comment_alt_dots_default = UimCommentAltDots;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-comment-alt-message.js
var React88 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCommentAltMessage(props) {
  return React88.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React88.createElement("path", {
    opacity: 1,
    d: "M17 9H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm0 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }), React88.createElement("path", {
    opacity: 0.5,
    d: "M19 2H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h11.586l3.707 3.707A1 1 0 0 0 22 21V5a3.003 3.003 0 0 0-3-3Zm-2 11H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm0-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"
  }));
}
var uim_comment_alt_message_default = UimCommentAltMessage;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-comment-alt-plus.js
var React89 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCommentAltPlus(props) {
  return React89.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React89.createElement("path", {
    opacity: 1,
    d: "M15 9h-2V7a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z"
  }), React89.createElement("path", {
    opacity: 0.5,
    d: "M19 2H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h11.586l3.707 3.707A1 1 0 0 0 22 21V5a3.003 3.003 0 0 0-3-3Zm-4 9h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V7a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2Z"
  }));
}
var uim_comment_alt_plus_default = UimCommentAltPlus;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-comment-dots.js
var React90 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCommentDots(props) {
  return React90.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React90.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1,
    opacity: 1
  }), React90.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20ZM8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"
  }), React90.createElement("circle", {
    cx: 8,
    cy: 12,
    r: 1,
    opacity: 1
  }), React90.createElement("circle", {
    cx: 16,
    cy: 12,
    r: 1,
    opacity: 1
  }));
}
var uim_comment_dots_default = UimCommentDots;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-comment-message.js
var React91 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCommentMessage(props) {
  return React91.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React91.createElement("path", {
    opacity: 1,
    d: "M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"
  }), React91.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20ZM9 7h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm6 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm2-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"
  }), React91.createElement("path", {
    opacity: 1,
    d: "M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-8H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
  }));
}
var uim_comment_message_default = UimCommentMessage;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-comment-plus.js
var React92 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCommentPlus(props) {
  return React92.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React92.createElement("path", {
    opacity: 1,
    d: "M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z"
  }), React92.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2Z"
  }));
}
var uim_comment_plus_default = UimCommentPlus;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-compress.js
var React93 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCompress(props) {
  return React93.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React93.createElement("path", {
    opacity: 1,
    d: "M8 22a1 1 0 0 1-1-1v-4H3a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zM8 9H3a1 1 0 0 1 0-2h4V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1zm13 0h-5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2zm-5 13a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-1 1z"
  }));
}
var uim_compress_default = UimCompress;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-corner-down-left.js
var React94 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCornerDownLeft(props) {
  return React94.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React94.createElement("path", {
    opacity: 1,
    d: "M9.942 22a.997.997 0 0 1-.707-.293l-4.628-4.628a1 1 0 0 1 0-1.414l4.628-4.63a1 1 0 0 1 1.414 1.415l-3.92 3.922 3.92 3.921A1 1 0 0 1 9.942 22Z"
  }), React94.createElement("path", {
    opacity: 1,
    d: "M15.686 17.372H5.314a1 1 0 0 1 0-2h10.372a2.002 2.002 0 0 0 2-2V3a1 1 0 0 1 2 0v10.372a4.004 4.004 0 0 1-4 4Z"
  }));
}
var uim_corner_down_left_default = UimCornerDownLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-corner-down-right.js
var React95 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCornerDownRight(props) {
  return React95.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React95.createElement("path", {
    opacity: 1,
    d: "M14.058 22a1 1 0 0 1-.707-1.707l3.92-3.921-3.92-3.922a1 1 0 1 1 1.414-1.414l4.628 4.629a1 1 0 0 1 0 1.414l-4.628 4.628a.997.997 0 0 1-.707.293Z"
  }), React95.createElement("path", {
    opacity: 1,
    d: "M18.686 17.372H9.314a5.006 5.006 0 0 1-5-5V3a1 1 0 0 1 2 0v9.372a3.003 3.003 0 0 0 3 3h9.372a1 1 0 0 1 0 2Z"
  }));
}
var uim_corner_down_right_default = UimCornerDownRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-corner-left-down.js
var React96 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCornerLeftDown(props) {
  return React96.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React96.createElement("path", {
    opacity: 1,
    d: "M21 4.314h-9.372a5.006 5.006 0 0 0-5 5v6.957l-2.921-2.92a1 1 0 0 0-1.414 1.413l4.628 4.628a1.003 1.003 0 0 0 1.415 0l4.628-4.628a1 1 0 0 0-1.414-1.414l-2.922 2.922V9.314a3.003 3.003 0 0 1 3-3H21a1 1 0 0 0 0-2Z"
  }));
}
var uim_corner_left_down_default = UimCornerLeftDown;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-corner-right-down.js
var React97 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCornerRightDown(props) {
  return React97.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React97.createElement("path", {
    opacity: 1,
    d: "M21.707 13.35a1 1 0 0 0-1.414 0l-2.921 2.921V8.314a4.005 4.005 0 0 0-4-4H3a1 1 0 0 0 0 2h10.372a2.002 2.002 0 0 1 2 2v7.958L12.45 13.35a1 1 0 0 0-1.414 1.414l4.628 4.628a1.004 1.004 0 0 0 1.415 0l4.628-4.628a1 1 0 0 0 0-1.414Z"
  }));
}
var uim_corner_right_down_default = UimCornerRightDown;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-corner-up-left.js
var React98 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCornerUpLeft(props) {
  return React98.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React98.createElement("path", {
    opacity: 1,
    d: "M14.686 6.628H7.729l2.92-2.921a1 1 0 0 0-1.413-1.414L4.608 6.921a1.003 1.003 0 0 0 0 1.415l4.628 4.628a1 1 0 0 0 1.414-1.414L7.728 8.628h6.958a3.003 3.003 0 0 1 3 3V21a1 1 0 0 0 2 0v-9.372a5.006 5.006 0 0 0-5-5Z"
  }));
}
var uim_corner_up_left_default = UimCornerUpLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-corner-up-right.js
var React99 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCornerUpRight(props) {
  return React99.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React99.createElement("path", {
    opacity: 1,
    d: "M19.608 8.01a1.004 1.004 0 0 0-.216-1.089l-4.628-4.628a1 1 0 0 0-1.414 1.414l2.921 2.921H8.314a4.005 4.005 0 0 0-4 4V21a1 1 0 0 0 2 0V10.628a2.002 2.002 0 0 1 2-2h7.958L13.35 11.55a1 1 0 1 0 1.414 1.414l4.628-4.628a1 1 0 0 0 .216-.325Z"
  }));
}
var uim_corner_up_right_default = UimCornerUpRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-coronavirus.js
var React100 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCoronavirus(props) {
  return React100.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React100.createElement("circle", {
    cx: 9.5,
    cy: 10.5,
    r: 1.5,
    opacity: 0.7
  }), React100.createElement("circle", {
    cx: 9,
    cy: 15,
    r: 1,
    opacity: 1
  }), React100.createElement("circle", {
    cx: 14.5,
    cy: 13.5,
    r: 1.5,
    opacity: 0.7
  }), React100.createElement("circle", {
    cx: 15,
    cy: 9,
    r: 1,
    opacity: 1
  }), React100.createElement("path", {
    opacity: 0.25,
    d: "M12 8a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1zm0 15a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1zm10-10h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM6 13H2a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"
  }), React100.createElement("path", {
    opacity: 0.5,
    d: "M18 13a1 1 0 0 1 0-2h2.941A9.013 9.013 0 0 0 13 3.059V7a1 1 0 0 1-2 0V3.059A9.013 9.013 0 0 0 3.059 11H6a1 1 0 0 1 0 2H3.059A9.013 9.013 0 0 0 11 20.941V17a1 1 0 0 1 2 0v3.941A9.013 9.013 0 0 0 20.941 13Zm-9 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm.5-4a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 9.5 12Zm5 3a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm.5-5a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"
  }), React100.createElement("path", {
    opacity: 1,
    d: "M4.979 6.393a9.063 9.063 0 0 1 1.414-1.414l-.757-.757a1 1 0 0 0-1.414 1.414zm0 11.214-.757.757a1 1 0 1 0 1.414 1.414l.757-.757a9.063 9.063 0 0 1-1.414-1.414zm14.042 0a9.063 9.063 0 0 1-1.414 1.414l.757.757a1 1 0 0 0 1.414-1.414zm0-11.214.757-.757a1 1 0 0 0-1.414-1.414l-.757.757a9.063 9.063 0 0 1 1.414 1.414z"
  }));
}
var uim_coronavirus_default = UimCoronavirus;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-css3.js
var React101 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCss3(props) {
  return React101.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React101.createElement("path", {
    opacity: 1,
    d: "M9.883,21.09528l9.09812-3.01977L22,3.00012H4.95836l-.6482,3.36375H17.96734l-.42523,2.14766H3.86422l-.66891,3.36375H16.85336l-.75016,3.85031L10.59172,17.5284,5.82961,15.72559l.325-1.68187H2.79086L2,18.07551l7.883,3.01977"
  }));
}
var uim_css3_default = UimCss3;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-css3-simple.js
var React102 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCss3Simple(props) {
  return React102.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React102.createElement("path", {
    opacity: 1,
    d: "M20.772,3.36426A1.00062,1.00062,0,0,0,20,3H6A1,1,0,0,0,6,5H18.78613l-.78094,4H5a1,1,0,0,0,0,2H17.61475l-1.1626,5.95508-6.32324,1.99658L4.71875,17.25244l.20361-1.06494a1.00015,1.00015,0,0,0-1.96484-.375L2.5874,17.75244A1.00059,1.00059,0,0,0,3.27,18.894L9.83008,20.9541a1.00175,1.00175,0,0,0,.60107-.00049l7.18994-2.27a1.00064,1.00064,0,0,0,.68018-.7622l2.68018-13.73A1.00008,1.00008,0,0,0,20.772,3.36426Z"
  }));
}
var uim_css3_simple_default = UimCss3Simple;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-cube.js
var React103 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimCube(props) {
  return React103.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React103.createElement("path", {
    opacity: 1,
    d: "M12 12.3 3.5 7.05 12 1.8l8.5 5.25z"
  }), React103.createElement("path", {
    opacity: 0.25,
    d: "M12 22.2v-9.9l8.5-5.25v9.9z"
  }), React103.createElement("path", {
    opacity: 0.5,
    d: "m12 22.2-8.5-5.25v-9.9L12 12.3z"
  }));
}
var uim_cube_default = UimCube;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-dialpad.js
var React104 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDialpad(props) {
  return React104.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React104.createElement("circle", {
    cx: 12,
    cy: 9,
    r: 2,
    opacity: 0.5
  }), React104.createElement("circle", {
    cx: 12,
    cy: 3,
    r: 2,
    opacity: 0.5
  }), React104.createElement("circle", {
    cx: 12,
    cy: 15,
    r: 2,
    opacity: 0.5
  }), React104.createElement("circle", {
    cx: 6,
    cy: 9,
    r: 2,
    opacity: 0.5
  }), React104.createElement("circle", {
    cx: 6,
    cy: 3,
    r: 2,
    opacity: 0.5
  }), React104.createElement("circle", {
    cx: 6,
    cy: 15,
    r: 2,
    opacity: 0.5
  }), React104.createElement("circle", {
    cx: 18,
    cy: 9,
    r: 2,
    opacity: 0.5
  }), React104.createElement("circle", {
    cx: 18,
    cy: 3,
    r: 2,
    opacity: 0.5
  }), React104.createElement("circle", {
    cx: 18,
    cy: 15,
    r: 2,
    opacity: 0.5
  }), React104.createElement("circle", {
    cx: 12,
    cy: 21,
    r: 2,
    opacity: 0.5
  }));
}
var uim_dialpad_default = UimDialpad;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-dialpad-alt.js
var React105 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDialpadAlt(props) {
  return React105.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React105.createElement("rect", {
    width: 4,
    height: 4,
    x: 10,
    y: 6.955,
    opacity: 1,
    rx: 0.545
  }), React105.createElement("rect", {
    width: 4,
    height: 4,
    x: 10,
    y: 0.955,
    opacity: 1,
    rx: 0.545
  }), React105.createElement("rect", {
    width: 4,
    height: 4,
    x: 10,
    y: 13.045,
    opacity: 1,
    rx: 0.545
  }), React105.createElement("rect", {
    width: 4,
    height: 4,
    x: 4,
    y: 6.955,
    opacity: 1,
    rx: 0.545
  }), React105.createElement("rect", {
    width: 4,
    height: 4,
    x: 4,
    y: 0.955,
    opacity: 1,
    rx: 0.545
  }), React105.createElement("rect", {
    width: 4,
    height: 4,
    x: 4,
    y: 13.045,
    opacity: 1,
    rx: 0.545
  }), React105.createElement("rect", {
    width: 4,
    height: 4,
    x: 16,
    y: 6.955,
    opacity: 1,
    rx: 0.545
  }), React105.createElement("rect", {
    width: 4,
    height: 4,
    x: 16,
    y: 0.955,
    opacity: 1,
    rx: 0.545
  }), React105.createElement("rect", {
    width: 4,
    height: 4,
    x: 16,
    y: 13.045,
    opacity: 1,
    rx: 0.545
  }), React105.createElement("rect", {
    width: 4,
    height: 4,
    x: 10,
    y: 19,
    opacity: 1,
    rx: 0.545
  }));
}
var uim_dialpad_alt_default = UimDialpadAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-direction.js
var React106 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDirection(props) {
  return React106.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React106.createElement("path", {
    opacity: 1,
    d: "M12 19.5a.997.997 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 17.086l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A.997.997 0 0 1 12 19.5zm3-9a.997.997 0 0 1-.707-.293L12 7.914l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 10.5z"
  }));
}
var uim_direction_default = UimDirection;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-discord.js
var React107 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDiscord(props) {
  return React107.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React107.createElement("path", {
    opacity: 1,
    d: "M18.8914,2H5.10867A2.11371,2.11371,0,0,0,3,4.11887V18.02513A2.11365,2.11365,0,0,0,5.1086,20.144h11.664l-.5452-1.90287,1.3166,1.224,1.24453,1.152L21,22.5714V4.11887A2.11365,2.11365,0,0,0,18.8914,2ZM14.92113,15.4332s-.37026-.44233-.67886-.8332A3.24572,3.24572,0,0,0,16.104,13.376a5.87911,5.87911,0,0,1-1.18287.6068,6.76855,6.76855,0,0,1-1.4914.44233,7.20545,7.20545,0,0,1-2.664-.01026,8.64138,8.64138,0,0,1-1.512-.44227,6.0347,6.0347,0,0,1-.75093-.34973c-.0308-.0206-.06167-.03087-.09253-.05147a.14216.14216,0,0,1-.04114-.0308c-.18513-.10286-.288-.17486-.288-.17486a3.19892,3.19892,0,0,0,1.8,1.21366c-.30853.39094-.68913.85373-.68913.85373a3.72917,3.72917,0,0,1-3.13713-1.56339A13.77448,13.77448,0,0,1,7.536,7.87313a5.08623,5.08623,0,0,1,2.89027-1.08l.10286.12347A6.93739,6.93739,0,0,0,7.824,8.264s.22627-.1234.6068-.29827a7.72409,7.72409,0,0,1,2.33493-.648,1.00858,1.00858,0,0,1,.17487-.0206,8.70335,8.70335,0,0,1,2.07774-.02053,8.38443,8.38443,0,0,1,3.09593.9874,6.84531,6.84531,0,0,0-2.56114-1.30626l.144-.16454a5.0856,5.0856,0,0,1,2.89027,1.08,13.77354,13.77354,0,0,1,1.4812,5.99654,3.76,3.76,0,0,1-3.14747,1.56339Zm-4.78286-4.80347a1.05285,1.05285,0,1,0,.00007,0m3.75426,0a1.14579,1.14579,0,1,0,1.04906,1.14167,1.09584,1.09584,0,0,0-1.04906-1.14167"
  }), React107.createElement("path", {
    opacity: 0.25,
    d: "M14.92113,15.4332s-.37026-.44233-.67886-.8332A3.24572,3.24572,0,0,0,16.104,13.376a5.87911,5.87911,0,0,1-1.18287.6068,6.76855,6.76855,0,0,1-1.4914.44233,7.20545,7.20545,0,0,1-2.664-.01026,8.64138,8.64138,0,0,1-1.512-.44227,6.0347,6.0347,0,0,1-.75093-.34973c-.0308-.0206-.06167-.03087-.09253-.05147a.14216.14216,0,0,1-.04114-.0308c-.18513-.10286-.288-.17486-.288-.17486a3.19892,3.19892,0,0,0,1.8,1.21366c-.30853.39094-.68913.85373-.68913.85373a3.72917,3.72917,0,0,1-3.13713-1.56339A13.77448,13.77448,0,0,1,7.536,7.87313a5.08623,5.08623,0,0,1,2.89027-1.08l.10286.12347A6.93739,6.93739,0,0,0,7.824,8.264s.22627-.1234.6068-.29827a7.72409,7.72409,0,0,1,2.33493-.648,1.00858,1.00858,0,0,1,.17487-.0206,8.70335,8.70335,0,0,1,2.07774-.02053,8.38443,8.38443,0,0,1,3.09593.9874,6.84531,6.84531,0,0,0-2.56114-1.30626l.144-.16454a5.0856,5.0856,0,0,1,2.89027,1.08,13.77354,13.77354,0,0,1,1.4812,5.99654,3.76,3.76,0,0,1-3.14747,1.56339Zm-4.78286-4.80347a1.05285,1.05285,0,1,0,.00007,0m3.75426,0a1.14579,1.14579,0,1,0,1.04906,1.14167,1.09584,1.09584,0,0,0-1.04906-1.14167"
  }));
}
var uim_discord_default = UimDiscord;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-docker.js
var React108 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDocker(props) {
  return React108.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React108.createElement("path", {
    opacity: 1,
    d: "M21.80521,10.07661a2.62688,2.62688,0,0,0-1.63256-.42669,5.18884,5.18884,0,0,0-.8441.0742,3.18021,3.18021,0,0,0-1.42849-2.14273l-.28755-.167-.18552.269a3.96681,3.96681,0,0,0-.51017,1.18731,2.81866,2.81866,0,0,0,.33393,2.21694,3.93556,3.93556,0,0,1-1.45631.35248H2.62269a.62152.62152,0,0,0-.62148.62148,9.38612,9.38612,0,0,0,.57511,3.3857A5.07767,5.07767,0,0,0,4.5799,18.05386,8.86828,8.86828,0,0,0,8.97667,19a13.4856,13.4856,0,0,0,2.43956-.22262,10.06816,10.06816,0,0,0,3.1909-1.15949,8.73384,8.73384,0,0,0,2.17055-1.781,11.80949,11.80949,0,0,0,2.12418-3.664h.18552a3.052,3.052,0,0,0,2.23548-.8441,2.47036,2.47036,0,0,0,.59366-.87193L22,10.21574Z"
  }), React108.createElement("path", {
    opacity: 0.25,
    d: "M3.84711,11.05985H5.60952a.15635.15635,0,0,0,.15769-.1577V9.32526a.15635.15635,0,0,0-.15769-.1577H3.84711a.15635.15635,0,0,0-.15769.1577v1.57689A.16235.16235,0,0,0,3.84711,11.05985Zm2.43028,0H8.0398a.15635.15635,0,0,0,.15769-.1577V9.32526a.15635.15635,0,0,0-.15769-.1577H6.27739a.15635.15635,0,0,0-.15769.1577v1.57689a.16235.16235,0,0,0,.15769.1577m2.47665,0h1.76242a.15635.15635,0,0,0,.15769-.1577V9.32526a.15635.15635,0,0,0-.15769-.1577H8.754a.15635.15635,0,0,0-.15769.1577v1.57689A.151.151,0,0,0,8.754,11.05985Zm2.43956,0H12.956a.15635.15635,0,0,0,.15769-.1577V9.32526a.15635.15635,0,0,0-.15769-.1577H11.1936a.15635.15635,0,0,0-.15769.1577v1.57689A.15635.15635,0,0,0,11.1936,11.05985Zm-4.91621-2.254H8.0398a.16255.16255,0,0,0,.15769-.15769V7.07122a.15634.15634,0,0,0-.15769-.15769H6.27739a.15634.15634,0,0,0-.15769.15769v1.5769a.16952.16952,0,0,0,.15769.15769m2.47665,0h1.76242a.16255.16255,0,0,0,.15769-.15769V7.07122a.15634.15634,0,0,0-.15769-.15769H8.754a.15634.15634,0,0,0-.15769.15769v1.5769a.15635.15635,0,0,0,.15769.15769m2.43956,0H12.956a.16255.16255,0,0,0,.15769-.15769V7.07122a.16255.16255,0,0,0-.15769-.15769H11.1936a.15634.15634,0,0,0-.15769.15769v1.5769a.16255.16255,0,0,0,.15769.15769m0-2.26331H12.956a.15635.15635,0,0,0,.15769-.1577V4.80791a.16255.16255,0,0,0-.15769-.15769H11.1936a.15634.15634,0,0,0-.15769.15769V6.3848a.16255.16255,0,0,0,.15769.1577m2.45811,4.51735h1.76241a.15634.15634,0,0,0,.15769-.15769V9.32526a.15634.15634,0,0,0-.15769-.15769H13.65171a.15634.15634,0,0,0-.15769.15769v1.5769a.16235.16235,0,0,0,.15769.15769"
  }));
}
var uim_docker_default = UimDocker;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-document-layout-center.js
var React109 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDocumentLayoutCenter(props) {
  return React109.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React109.createElement("path", {
    opacity: 0.5,
    d: "M21 8h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm0 4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM5 8H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"
  }), React109.createElement("rect", {
    width: 8,
    height: 8,
    x: 8,
    y: 4,
    opacity: 1,
    rx: 1
  }), React109.createElement("path", {
    opacity: 0.5,
    d: "M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }));
}
var uim_document_layout_center_default = UimDocumentLayoutCenter;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-document-layout-left.js
var React110 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDocumentLayoutLeft(props) {
  return React110.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React110.createElement("path", {
    opacity: 0.5,
    d: "M21 8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0 4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), React110.createElement("rect", {
    width: 8,
    height: 8,
    x: 2,
    y: 4,
    opacity: 1,
    rx: 1
  }), React110.createElement("path", {
    opacity: 0.5,
    d: "M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }));
}
var uim_document_layout_left_default = UimDocumentLayoutLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-document-layout-right.js
var React111 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDocumentLayoutRight(props) {
  return React111.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React111.createElement("path", {
    opacity: 0.5,
    d: "M11 8H3a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), React111.createElement("rect", {
    width: 8,
    height: 8,
    x: 14,
    y: 4,
    opacity: 1,
    rx: 1
  }), React111.createElement("path", {
    opacity: 0.5,
    d: "M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }));
}
var uim_document_layout_right_default = UimDocumentLayoutRight;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-download-alt.js
var React112 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDownloadAlt(props) {
  return React112.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React112.createElement("path", {
    opacity: 1,
    d: "M15.707 13.293a1 1 0 0 0-1.414 0L13 14.586V3a1 1 0 0 0-2 0v11.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414Z"
  }), React112.createElement("path", {
    opacity: 0.5,
    d: "M18 9h-5v5.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L11 14.586V9H6a3.003 3.003 0 0 0-3 3v7a3.003 3.003 0 0 0 3 3h12a3.003 3.003 0 0 0 3-3v-7a3.003 3.003 0 0 0-3-3Z"
  }));
}
var uim_download_alt_default = UimDownloadAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-dribbble.js
var React113 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDribbble(props) {
  return React113.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React113.createElement("circle", {
    cx: 11.97,
    cy: 11.97,
    r: 9,
    opacity: 0.5
  }), React113.createElement("path", {
    opacity: 1,
    d: "M2 12a9.796 9.796 0 0 1 1.34-5.02 9.93 9.93 0 0 1 3.64-3.64A9.796 9.796 0 0 1 12 2a9.796 9.796 0 0 1 5.02 1.34 9.929 9.929 0 0 1 3.64 3.64A9.796 9.796 0 0 1 22 12a9.796 9.796 0 0 1-1.34 5.02 9.929 9.929 0 0 1-3.64 3.64A9.796 9.796 0 0 1 12 22a9.796 9.796 0 0 1-5.02-1.34 9.93 9.93 0 0 1-3.64-3.64A9.796 9.796 0 0 1 2 12zm1.66 0a8.064 8.064 0 0 0 2.1 5.5c.755-1.39 1.79-2.61 3.04-3.58a9.942 9.942 0 0 1 4.06-2.14c-.2-.467-.393-.887-.58-1.26a24.3 24.3 0 0 1-7.44 1.1c-.52 0-.907-.007-1.16-.02 0 .053-.003.12-.01.2s-.01.147-.01.2zm.26-2.06c.293.027.727.04 1.3.04a21.95 21.95 0 0 0 6.34-.9 20.251 20.251 0 0 0-3.34-4.5A8.12 8.12 0 0 0 5.51 6.8a8.539 8.539 0 0 0-1.59 3.14zm2.98 8.64a8.173 8.173 0 0 0 8.04 1.2 29.368 29.368 0 0 0-1.56-6.62 8.53 8.53 0 0 0-3.71 2.02 11.345 11.345 0 0 0-2.77 3.4zM9.96 3.94a21.254 21.254 0 0 1 3.26 4.54 9.96 9.96 0 0 0 4.1-2.9A8.107 8.107 0 0 0 12 3.66a7.677 7.677 0 0 0-2.04.28zm3.98 5.96c.2.427.427.967.68 1.62.987-.093 2.06-.14 3.22-.14.827 0 1.647.02 2.46.06a8.03 8.03 0 0 0-1.96-4.84 9.896 9.896 0 0 1-4.4 3.3zm1.18 3.02c.68 1.97 1.142 4.01 1.38 6.08a8.345 8.345 0 0 0 2.58-2.62 8.078 8.078 0 0 0 1.2-3.46c-.973-.067-1.86-.1-2.66-.1-.733 0-1.567.033-2.5.1z"
  }));
}
var uim_dribbble_default = UimDribbble;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-dropbox.js
var React114 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimDropbox(props) {
  return React114.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React114.createElement("path", {
    opacity: 1,
    fillRule: "evenodd",
    d: "M16.53 10.091 21 12.939l-4.502 2.868L12 12.941l-4.498 2.866L3 12.939l4.47-2.848L3 7.243l4.502-2.868L12 7.241l4.498-2.866L21 7.243z",
    clipRule: "evenodd"
  }), React114.createElement("path", {
    opacity: 0.25,
    fillRule: "evenodd",
    d: "M16.467 10.091 12 7.245l-4.467 2.846L12 12.936z",
    clipRule: "evenodd"
  }), React114.createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    d: "m7.531 16.757-.029-.95L12 12.941l4.498 2.866.036.95-4.502 2.868z",
    clipRule: "evenodd"
  }));
}
var uim_dropbox_default = UimDropbox;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-ellipsis-h.js
var React115 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimEllipsisH(props) {
  return React115.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React115.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 2,
    opacity: 1
  }), React115.createElement("circle", {
    cx: 5,
    cy: 12,
    r: 2,
    opacity: 1
  }), React115.createElement("circle", {
    cx: 19,
    cy: 12,
    r: 2,
    opacity: 1
  }));
}
var uim_ellipsis_h_default = UimEllipsisH;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-ellipsis-v.js
var React116 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimEllipsisV(props) {
  return React116.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React116.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 2,
    opacity: 1
  }), React116.createElement("circle", {
    cx: 12,
    cy: 5,
    r: 2,
    opacity: 1
  }), React116.createElement("circle", {
    cx: 12,
    cy: 19,
    r: 2,
    opacity: 1
  }));
}
var uim_ellipsis_v_default = UimEllipsisV;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-exclamation-circle.js
var React117 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimExclamationCircle(props) {
  return React117.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React117.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    opacity: 0.5
  }), React117.createElement("circle", {
    cx: 12,
    cy: 16,
    r: 1,
    opacity: 1
  }), React117.createElement("path", {
    opacity: 1,
    d: "M12 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"
  }));
}
var uim_exclamation_circle_default = UimExclamationCircle;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-exclamation-octagon.js
var React118 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimExclamationOctagon(props) {
  return React118.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React118.createElement("path", {
    opacity: 0.5,
    d: "M15.728 22H8.272a1 1 0 0 1-.707-.293l-5.272-5.272A1 1 0 0 1 2 15.728V8.272a1 1 0 0 1 .293-.707l5.272-5.272A1 1 0 0 1 8.272 2h7.456a1 1 0 0 1 .707.293l5.272 5.272a1 1 0 0 1 .293.707v7.456a1 1 0 0 1-.293.707l-5.272 5.272a1 1 0 0 1-.707.293Z"
  }), React118.createElement("circle", {
    cx: 12,
    cy: 16,
    r: 1,
    opacity: 1
  }), React118.createElement("path", {
    opacity: 1,
    d: "M12 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"
  }));
}
var uim_exclamation_octagon_default = UimExclamationOctagon;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-exclamation-triangle.js
var React119 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimExclamationTriangle(props) {
  return React119.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React119.createElement("path", {
    opacity: 0.5,
    d: "M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22Z"
  }), React119.createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1,
    opacity: 1
  }), React119.createElement("path", {
    opacity: 1,
    d: "M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"
  }));
}
var uim_exclamation_triangle_default = UimExclamationTriangle;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-facebook.js
var React120 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimFacebook(props) {
  return React120.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React120.createElement("path", {
    opacity: 0.5,
    d: "M12.683 22v-7.745h-2.607v-3.018h2.607V9.01a3.637 3.637 0 0 1 3.882-3.99c.778-.003 1.555.037 2.329.119v2.7h-1.599c-1.253 0-1.495.596-1.495 1.47v1.927h2.989l-.39 3.018h-2.6V22h-3.116z"
  }), React120.createElement("path", {
    opacity: 1,
    d: "M20.999 2H2.998a1 1 0 0 0-1 1v18.001a1 1 0 0 0 1 1h18.001a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-2.105 5.84h-1.599c-1.253 0-1.495.596-1.495 1.47v1.926h2.989l-.39 3.019h-2.6V22h-3.116v-7.745h-2.607v-3.019h2.607V9.01a3.637 3.637 0 0 1 3.882-3.99 21.37 21.37 0 0 1 2.329.12v2.7z"
  }));
}
var uim_facebook_default = UimFacebook;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-facebook-f.js
var React121 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimFacebookF(props) {
  return React121.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React121.createElement("path", {
    opacity: 1,
    d: "M13.355 22v-9.123h3.062l.459-3.555h-3.52v-2.27c0-1.03.285-1.731 1.761-1.731L17 5.32V2.14A25.233 25.233 0 0 0 14.257 2c-2.715 0-4.573 1.657-4.573 4.7v2.622h-3.07v3.555h3.07V22h3.671Z",
    "data-name": "Brand Logos"
  }));
}
var uim_facebook_f_default = UimFacebookF;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-facebook-messenger.js
var React122 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimFacebookMessenger(props) {
  return React122.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React122.createElement("path", {
    opacity: 0.5,
    d: "m18.004 9.465-2.936 4.658a1.501 1.501 0 0 1-2.169.4l-2.336-1.752a.6.6 0 0 0-.722.002l-3.157 2.396a.475.475 0 0 1-.688-.632l2.938-4.66a1.501 1.501 0 0 1 2.169-.4l2.336 1.753a.6.6 0 0 0 .722-.002l3.155-2.395a.475.475 0 0 1 .688.632z"
  }), React122.createElement("path", {
    opacity: 1,
    d: "M12.59 2A9.725 9.725 0 0 0 12 2c-5.327-.193-9.801 3.969-9.994 9.295-.005.135-.007.27-.006.405a9.49 9.49 0 0 0 3.14 7.175c.164.146.261.351.27.57l.055 1.779a.801.801 0 0 0 1.122.708l1.984-.875a.798.798 0 0 1 .534-.04c.943.257 1.917.386 2.895.384 5.357.163 9.833-4.048 9.996-9.405.163-5.358-4.048-9.833-9.405-9.996zm5.414 7.465-2.936 4.658a1.501 1.501 0 0 1-2.169.4l-2.336-1.752a.6.6 0 0 0-.722.002l-3.157 2.396a.475.475 0 0 1-.688-.632l2.938-4.66a1.501 1.501 0 0 1 2.169-.4l2.336 1.752a.6.6 0 0 0 .722-.001l3.155-2.395a.475.475 0 0 1 .688.632z"
  }));
}
var uim_facebook_messenger_default = UimFacebookMessenger;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-facebook-messenger-alt.js
var React123 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimFacebookMessengerAlt(props) {
  return React123.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React123.createElement("g", {
    "data-name": "Brand Logos"
  }, React123.createElement("path", {
    opacity: 0.5,
    d: "M12 2a9.651 9.651 0 0 0-10 9.7 9.49 9.49 0 0 0 3.14 7.175.806.806 0 0 1 .27.57l.055 1.779a.801.801 0 0 0 1.122.708l1.984-.875a.798.798 0 0 1 .534-.04A10.876 10.876 0 0 0 12 21.4 9.705 9.705 0 1 0 12 2Z"
  }), React123.createElement("path", {
    opacity: 1,
    d: "M6.499 14.772a1 1 0 0 1-.765-1.642l3.052-3.636a.996.996 0 0 1 1.29-.21l3.346 2.056 2.312-2.755a1 1 0 1 1 1.532 1.285l-2.867 3.416a1 1 0 0 1-1.289.21L9.764 11.44l-2.498 2.975a.994.994 0 0 1-.767.357Z"
  })));
}
var uim_facebook_messenger_alt_default = UimFacebookMessengerAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-favorite.js
var React124 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimFavorite(props) {
  return React124.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React124.createElement("path", {
    opacity: 1,
    d: "M17.562 21.56a1 1 0 0 1-.465-.116L12 18.764l-5.097 2.68a1 1 0 0 1-1.45-1.053l.973-5.676-4.124-4.02a1 1 0 0 1 .554-1.705l5.699-.828 2.549-5.164a1.04 1.04 0 0 1 1.793 0l2.548 5.164 5.699.828a1 1 0 0 1 .554 1.705l-4.124 4.02.974 5.676a1 1 0 0 1-.985 1.169Z"
  }));
}
var uim_favorite_default = UimFavorite;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-flip-h.js
var React125 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimFlipH(props) {
  return React125.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React125.createElement("path", {
    opacity: 0.25,
    d: "M21 13H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2Z"
  }), React125.createElement("path", {
    opacity: 1,
    d: "m12 21 5-5H7l5 5z"
  }), React125.createElement("path", {
    opacity: 1,
    d: "M12 22a.997.997 0 0 1-.707-.293l-5-5A1 1 0 0 1 7 15h10a1 1 0 0 1 .707 1.707l-5 5A.997.997 0 0 1 12 22Zm-2.586-5L12 19.586 14.586 17Z"
  }), React125.createElement("path", {
    opacity: 0.5,
    d: "M12 4a.99.99 0 0 1-.92-1.38 1.03 1.03 0 0 1 .21-.33.998.998 0 0 1 1.09-.21 1.034 1.034 0 0 1 .33.21A1.052 1.052 0 0 1 13 3a.838.838 0 0 1-.08.38 1.171 1.171 0 0 1-.21.33A.992.992 0 0 1 12 4zM8.79 6.21a1.008 1.008 0 0 1 0-1.42 1.007 1.007 0 0 1 1.42 0 1.008 1.008 0 0 1 0 1.42 1.027 1.027 0 0 1-.71.29 1.026 1.026 0 0 1-.71-.29zM7 9a.99.99 0 0 1-1-1 1 1 0 0 1 1.71-.71A1.052 1.052 0 0 1 8 8a.99.99 0 0 1-1 1zm5.67-1a.997.997 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 .997.997 0 0 1-1-1zM9.33 8a1.003 1.003 0 0 1 1-1 .997.997 0 0 1 1 1 .997.997 0 0 1-1 1 1.003 1.003 0 0 1-1-1zM17 9a.99.99 0 0 1-1-1 1 1 0 1 1 2 0 .99.99 0 0 1-1 1zm-3.21-2.79a1.008 1.008 0 0 1 0-1.42 1.007 1.007 0 0 1 1.42 0 1.008 1.008 0 0 1 0 1.42 1.027 1.027 0 0 1-.71.29 1.026 1.026 0 0 1-.71-.29z"
  }));
}
var uim_flip_h_default = UimFlipH;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-flip-h-alt.js
var React126 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimFlipHAlt(props) {
  return React126.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React126.createElement("path", {
    opacity: 0.5,
    d: "M20 11a.99.99 0 0 1-.71-.29 1.16 1.16 0 0 1-.21-.33.941.941 0 0 1 0-.76 1.029 1.029 0 0 1 .21-.33 1.047 1.047 0 0 1 1.42 0 1.147 1.147 0 0 1 .21.33.941.941 0 0 1 0 .76 1.16 1.16 0 0 1-.21.33.993.993 0 0 1-.71.29zm-1-4.5a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1zM20 4a.99.99 0 0 1-.92-1.38 1.029 1.029 0 0 1 .21-.33 1.047 1.047 0 0 1 1.42 0 1.029 1.029 0 0 1 .21.33.99.99 0 0 1-.21 1.09 1.16 1.16 0 0 1-.33.21A1 1 0 0 1 20 4zM7.03 6.24a.994.994 0 0 1 .73-1.21.99.99 0 0 1 1.21.73.999.999 0 0 1-.73 1.21A.965.965 0 0 1 8 7a.991.991 0 0 1-.97-.76zm4-1a.994.994 0 0 1 .73-1.21.99.99 0 0 1 1.21.73.999.999 0 0 1-.73 1.21A.965.965 0 0 1 12 6a1.003 1.003 0 0 1-.97-.76zm4-1a.998.998 0 0 1 .73-1.21 1.003 1.003 0 0 1 1.21.73.999.999 0 0 1-.73 1.21A.965.965 0 0 1 16 5a.991.991 0 0 1-.97-.76zM4 8a.99.99 0 0 1-1-1 .832.832 0 0 1 .08-.38 1.029 1.029 0 0 1 .21-.33 1.047 1.047 0 0 1 1.42 0 1.029 1.029 0 0 1 .21.33A.99.99 0 0 1 4 8zm0 3a.99.99 0 0 1-.71-.29 1.16 1.16 0 0 1-.21-.33.941.941 0 0 1 0-.76 1.147 1.147 0 0 1 .21-.33 1.047 1.047 0 0 1 1.42 0 1.147 1.147 0 0 1 .21.33.941.941 0 0 1 0 .76 1.16 1.16 0 0 1-.21.33A.993.993 0 0 1 4 11zm11-1a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1zm-4 0a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1zm-4 0a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1z"
  }), React126.createElement("path", {
    opacity: 1,
    d: "M20 14v7L4 17v-3h16z"
  }), React126.createElement("path", {
    opacity: 1,
    d: "M20 22a.974.974 0 0 1-.242-.03l-16-4A1 1 0 0 1 3 17v-3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1ZM5 16.219l14 3.5V15H5Z"
  }));
}
var uim_flip_h_alt_default = UimFlipHAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-flip-v.js
var React127 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimFlipV(props) {
  return React127.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React127.createElement("path", {
    opacity: 0.25,
    d: "M12 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1Z"
  }), React127.createElement("path", {
    opacity: 1,
    d: "m21 12-5-5v10l5-5z"
  }), React127.createElement("path", {
    opacity: 1,
    d: "M16 18a1 1 0 0 1-1-1V7a1 1 0 0 1 1.707-.707l5 5a1 1 0 0 1 0 1.414l-5 5A.999.999 0 0 1 16 18Zm1-8.586v5.172L19.586 12Z"
  }), React127.createElement("path", {
    opacity: 0.5,
    d: "M3 13a.99.99 0 0 1-.92-1.38 1.149 1.149 0 0 1 .21-.33 1.047 1.047 0 0 1 1.42 0 1.037 1.037 0 0 1 .21.33A.838.838 0 0 1 4 12a.99.99 0 0 1-1 1zm1.79 2.21a1.008 1.008 0 0 1 0-1.42 1.007 1.007 0 0 1 1.42 0 1.008 1.008 0 0 1 0 1.42 1.027 1.027 0 0 1-.71.29 1.026 1.026 0 0 1-.71-.29zM8 18a.992.992 0 0 1-.71-.29 1.162 1.162 0 0 1-.21-.33A1 1 0 0 1 7 17a1.05 1.05 0 0 1 .29-.71 1.039 1.039 0 0 1 1.09-.21 1.154 1.154 0 0 1 .33.21A1.052 1.052 0 0 1 9 17a1 1 0 0 1-.08.38 1.171 1.171 0 0 1-.21.33A.992.992 0 0 1 8 18zm-1-4.33a.996.996 0 0 1 1-1 .996.996 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1zm0-3.34a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 .997.997 0 0 1-1 1 .997.997 0 0 1-1-1zM8 8a.99.99 0 0 1-.92-1.38 1.03 1.03 0 0 1 .21-.33.985.985 0 0 1 1.63.33A.99.99 0 0 1 8 8zm-3.21 2.21a1.008 1.008 0 0 1 0-1.42 1.007 1.007 0 0 1 1.42 0 1.008 1.008 0 0 1 0 1.42 1.027 1.027 0 0 1-.71.29 1.026 1.026 0 0 1-.71-.29z"
  }));
}
var uim_flip_v_default = UimFlipV;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-flip-v-alt.js
var React128 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimFlipVAlt(props) {
  return React128.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React128.createElement("path", {
    opacity: 0.5,
    d: "M10 21a.99.99 0 0 1-.71-.29 1.16 1.16 0 0 1-.21-.33A.832.832 0 0 1 9 20a1 1 0 1 1 2 0 .99.99 0 0 1-1 1zm-4.5-1a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1zM3 21a.99.99 0 0 1-.71-.29 1.16 1.16 0 0 1-.21-.33A1 1 0 0 1 2 20a1.048 1.048 0 0 1 .29-.71 1.047 1.047 0 0 1 1.42 0A1.052 1.052 0 0 1 4 20a1 1 0 0 1-.08.38 1.16 1.16 0 0 1-.21.33A.993.993 0 0 1 3 21zm.76-4.03a.998.998 0 0 1-.73-1.21.994.994 0 0 1 1.21-.73.999.999 0 0 1 .73 1.21A.992.992 0 0 1 4 17a.965.965 0 0 1-.24-.03zm.99-4a.992.992 0 0 1-.72-1.21.998.998 0 0 1 1.21-.73.999.999 0 0 1 .73 1.21A1 1 0 0 1 5 13a1.104 1.104 0 0 1-.25-.03zm1.01-4a.998.998 0 0 1-.73-1.21.994.994 0 0 1 1.21-.73.999.999 0 0 1 .73 1.21A.992.992 0 0 1 6 9a.965.965 0 0 1-.24-.03zM7 5a.99.99 0 0 1-1-1 1.048 1.048 0 0 1 .29-.71 1.034 1.034 0 0 1 1.41 0A1.018 1.018 0 0 1 8 4a1.007 1.007 0 0 1-1 1zm3 0a.99.99 0 0 1-1-1 1.048 1.048 0 0 1 .29-.71 1.047 1.047 0 0 1 1.42 0A1.052 1.052 0 0 1 11 4a.99.99 0 0 1-1 1zM9 16a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1zm0-4a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1zm0-4a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1z"
  }), React128.createElement("path", {
    opacity: 1,
    d: "M14 20h7L17 4h-3v16z"
  }), React128.createElement("path", {
    opacity: 1,
    d: "M21 21h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3a1 1 0 0 1 .97.758l4 16A1 1 0 0 1 21 21Zm-6-2h4.719l-3.5-14H15Z"
  }));
}
var uim_flip_v_alt_default = UimFlipVAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-github.js
var React129 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGithub(props) {
  return React129.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React129.createElement("path", {
    opacity: 0.5,
    d: "M8.854 21.57a9.91 9.91 0 0 0 6.29.001.493.493 0 0 1-.644-.475c0-.338.013-1.413.013-2.75a2.368 2.368 0 0 0-.675-1.85c2.225-.25 4.562-1.1 4.562-4.938a3.87 3.87 0 0 0-1.025-2.687 3.594 3.594 0 0 0-.1-2.65s-.838-.275-2.75 1.025a9.427 9.427 0 0 0-5 0C7.612 5.958 6.775 6.22 6.775 6.22a3.593 3.593 0 0 0-.1 2.65 3.892 3.892 0 0 0-1.025 2.687c0 3.825 2.325 4.688 4.55 4.938-.368.354-.594.829-.638 1.337a2.137 2.137 0 0 1-2.91-.82l-.002-.005a2.001 2.001 0 0 0-1.538-1.025c-.837.013-.337.475.013.663.451.38.803.865 1.025 1.412.2.563.85 1.638 3.362 1.175 0 .838.013 1.625.013 1.863 0 .259-.185.551-.67.475z"
  }), React129.createElement("path", {
    opacity: 1,
    d: "M12 2.083c-5.523 0-10 4.477-10 10 0 4.423 2.875 8.169 6.855 9.488.485.075.67-.216.67-.475 0-.238-.012-1.025-.012-1.863-2.513.463-3.163-.612-3.363-1.175a3.637 3.637 0 0 0-1.025-1.412c-.35-.188-.85-.65-.013-.663.65.07 1.223.453 1.538 1.025l.003.006a2.137 2.137 0 0 0 2.91.82c.043-.51.27-.984.637-1.338-2.225-.25-4.55-1.113-4.55-4.938a3.892 3.892 0 0 1 1.025-2.687 3.594 3.594 0 0 1 .1-2.65s.837-.263 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025.37.838.406 1.786.1 2.65a3.87 3.87 0 0 1 1.025 2.687c0 3.838-2.338 4.688-4.562 4.938.482.49.729 1.164.675 1.85 0 1.337-.013 2.412-.013 2.75a.493.493 0 0 0 .643.476C19.124 20.253 22 16.507 22 12.083c0-5.523-4.477-10-10-10z"
  }));
}
var uim_github_default = UimGithub;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-github-alt.js
var React130 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGithubAlt(props) {
  return React130.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React130.createElement("path", {
    opacity: 1,
    d: "M20.116 5.901a3.883 3.883 0 0 0-.26-.31 4.413 4.413 0 0 0 .21-.76 5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45 12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77 4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3 7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39 4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413 1.179 1.179 0 0 1-.17-.112 1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098.004.268a1 1 0 0 0 1 1H15.026a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85 5.23 5.23 0 0 0-1.11-3.3Z",
    "data-name": "Brand Logos"
  }));
}
var uim_github_alt_default = UimGithubAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-gitlab.js
var React131 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGitlab(props) {
  return React131.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React131.createElement("path", {
    opacity: 1,
    d: "m21.94 12.865-1.066-3.28.001.005v-.005L18.76 3.076a.833.833 0 0 0-.799-.57.822.822 0 0 0-.788.575l-2.007 6.178H8.834L6.824 3.08a.822.822 0 0 0-.788-.575H6.03a.839.839 0 0 0-.796.575L3.127 9.584l-.002.006.001-.005-1.068 3.28a1.195 1.195 0 0 0 .434 1.34l9.229 6.705.004.003.012.008-.011-.008.002.001.001.001a.475.475 0 0 0 .045.028l.006.004.004.002.003.001h.002l.006.003.024.01.023.01h.001l.004.002.005.002h.002l.007.002h.002c.011.004.023.006.034.009l.013.003h.002l.005.002.007.001h.007a.465.465 0 0 0 .066.006h.001a.467.467 0 0 0 .067-.005h.007l.007-.002.004-.001h.002l.014-.004.034-.008h.002l.007-.003h.002l.005-.002.003-.001h.001l.025-.011.023-.01.005-.002h.002l.003-.002.004-.002.007-.004a.478.478 0 0 0 .044-.027l.004-.003.005-.003 9.23-6.706a1.195 1.195 0 0 0 .434-1.339Zm-3.973-9.18 1.81 5.574h-3.62Zm1.493 6.516-.738.947-5.448 6.98 2.577-7.927Zm-7.91 10.474.001.004Zm-.827-2.546L4.54 10.2h3.61ZM6.03 3.686l1.813 5.573h-3.62Zm-2.984 9.756a.255.255 0 0 1-.092-.285l.794-2.438 5.822 7.464Zm8.659 7.456-.006-.005-.011-.01-.02-.018.002.001.002.002a.478.478 0 0 0 .042.037l.003.002Zm.293-1.894-1.514-4.665-1.343-4.138h5.719Zm.31 1.88-.01.008-.002.001-.005.005-.012.009.002-.002a.46.46 0 0 0 .043-.036l.001-.002.002-.002Zm8.643-7.442-6.523 4.74 5.824-7.463.791 2.437a.255.255 0 0 1-.092.286Z",
    "data-name": "logo art"
  }));
}
var uim_gitlab_default = UimGitlab;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-gitlab-alt.js
var React132 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGitlabAlt(props) {
  return React132.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React132.createElement("g", {
    "data-name": "logo art"
  }, React132.createElement("path", {
    opacity: 1,
    d: "m12 21.42 3.684-11.333H8.32L12 21.421Z"
  }), React132.createElement("path", {
    opacity: 0.25,
    d: "m3.16 10.087-1.123 3.444a.763.763 0 0 0 .277.852l9.685 7.038-8.84-11.334Z"
  }), React132.createElement("path", {
    opacity: 1,
    d: "M3.16 10.087h5.16L6.1 3.262a.383.383 0 0 0-.728 0L3.16 10.087Z"
  }), React132.createElement("path", {
    opacity: 0.25,
    d: "m20.845 10.087 1.118 3.444a.763.763 0 0 1-.276.852l-9.688 7.038 8.846-11.334Z"
  }), React132.createElement("path", {
    opacity: 1,
    d: "M20.845 10.087h-5.161L17.9 3.262a.383.383 0 0 1 .727 0l2.217 6.825Z"
  }), React132.createElement("path", {
    opacity: 0.5,
    d: "m11.999 21.421 3.685-11.334h5.161l-8.846 11.334z"
  }), React132.createElement("path", {
    opacity: 0.5,
    d: "m11.999 21.421-8.84-11.334H8.32l3.679 11.334z"
  })));
}
var uim_gitlab_alt_default = UimGitlabAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-google.js
var React133 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGoogle(props) {
  return React133.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React133.createElement("path", {
    opacity: 0.7,
    d: "M12.22182,5.97728c1.42137-0.02391,2.79488,0.51341,3.82273,1.49545l2.86819-2.86818c-1.81006-1.7-4.20788-2.63339-6.69092-2.60455C8.44087,1.99855,4.98265,4.13047,3.28544,7.5091L6.62636,10.1C7.41416,7.66784,9.66545,6.00909,12.22182,5.97728z"
  }), React133.createElement("path", {
    opacity: 1,
    d: "M3.28547,7.50908c-1.41819,2.82599-1.41819,6.15582,0,8.98181L6.62634,13.9c-0.41812-1.23216-0.41812-2.56784,0-3.8L3.28547,7.50908z"
  }), React133.createElement("path", {
    opacity: 0.5,
    d: "M15.60822,17.06822c-2.80401,1.79981-6.53614,0.98574-8.33595-1.81827c-0.2705-0.42143-0.48748-0.8749-0.64593-1.34995l-3.34087,2.59089C4.98265,19.86954,8.44089,22.00147,12.22185,22c2.43429,0.06602,4.8018-0.80065,6.61815-2.42269L15.60822,17.06822z"
  }), React133.createElement("path", {
    opacity: 0.25,
    d: "M21.64001,10.18182h-9.41815v3.86816h5.38177c-0.22498,1.23639-0.94592,2.3269-1.99542,3.01819c-0.00317,0.00208-0.00647,0.0036-0.00964,0.00562c0.00317-0.00201,0.00647-0.00354,0.00964-0.00555l3.23175,2.50909l0.00006-0.00006c1.9903-1.91693,3.07397-4.5882,2.98181-7.34998C21.82239,11.54138,21.76154,10.85687,21.64001,10.18182z"
  }));
}
var uim_google_default = UimGoogle;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-google-drive.js
var React134 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGoogleDrive(props) {
  return React134.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React134.createElement("path", {
    opacity: 0.25,
    d: "M15.334 14.887H22l-6.666-11.55H8.667l6.667 11.55z"
  }), React134.createElement("path", {
    opacity: 1,
    d: "M8.667 3.338 2 14.888l3.334 5.774L12 9.112z"
  }), React134.createElement("path", {
    opacity: 0.5,
    d: "m8.667 14.887-3.333 5.775h13.333L22 14.887z"
  }));
}
var uim_google_drive_default = UimGoogleDrive;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-google-drive-alt.js
var React135 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGoogleDriveAlt(props) {
  return React135.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React135.createElement("path", {
    opacity: 1,
    d: "m6 19.796 3-5.197h12l-3 5.197H6z"
  }), React135.createElement("path", {
    opacity: 0.25,
    d: "M15 14.599h6L15 4.204H9L15 14.6z"
  }), React135.createElement("path", {
    opacity: 0.5,
    d: "m3 14.599 3 5.197L12 9.4 9 4.204 3 14.6z"
  }));
}
var uim_google_drive_alt_default = UimGoogleDriveAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-google-hangouts.js
var React136 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGoogleHangouts(props) {
  return React136.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React136.createElement("path", {
    opacity: 0.5,
    d: "M9.818 14.313a3.795 3.795 0 0 1-.447.085.21.21 0 0 1-.235-.152v-.968c.006-.095-.032-.197.044-.28a.266.266 0 0 1 .138-.085c.173-.032.34-.088.495-.169.273-.158.468-.423.538-.731l.035-.151-2.041-.004a.65.65 0 0 1-.175-.018.413.413 0 0 1-.306-.385c-.001-1.029 0-2.058.001-3.087a.467.467 0 0 1 .139-.436c.07-.064.16-.1.256-.102h3.002a.416.416 0 0 1 .4.527c.015.05.02.102.016.153 0 1.122.006 2.243-.002 3.364.001.718-.305 1.401-.84 1.878-.029.026-.056.054-.084.08-.277.22-.594.384-.934.481zm5.536-.071-.038.01-.022.013c-.193.056-.39.099-.589.129a.216.216 0 0 1-.27-.217l-.002-.322.005-.578-.002-.127c0-.147.057-.21.24-.252.235-.04.454-.142.634-.297.206-.197.339-.457.378-.74l-1.886-.003h-.205a.419.419 0 0 1-.433-.44c0-1.016.001-2.033.003-3.049l-.002-.03a.435.435 0 0 1 .204-.45.39.39 0 0 1 .212-.06h2.982a.416.416 0 0 1 .4.528c.015.05.02.101.016.153v3.37a2.557 2.557 0 0 1-1.557 2.327c-.023.01-.045.023-.068.035z"
  }), React136.createElement("path", {
    opacity: 1,
    d: "M20.866 9.055a8.505 8.505 0 0 0-2.173-4.334 8.565 8.565 0 0 0-5.263-2.667A4.157 4.157 0 0 1 12.95 2h-1.135c-.013.029-.039.018-.06.02a8.818 8.818 0 0 0-.87.114 8.453 8.453 0 0 0-5.177 3.104 8.358 8.358 0 0 0-1.84 4.709 8.59 8.59 0 0 0 .185 2.529c.138.618.347 1.22.624 1.79l.074.146a8.601 8.601 0 0 0 1.783 2.396 8.53 8.53 0 0 0 5.763 2.333c.1.001.128.026.127.128-.005.874-.003 1.747-.002 2.621 0 .034.002.068.004.11l.063-.026a17.99 17.99 0 0 0 4.49-2.966c.268-.243.524-.497.77-.763l.315-.341c.163-.175.304-.37.457-.553.178-.212.337-.437.494-.663.35-.499.657-1.025.919-1.575.132-.279.257-.56.369-.847a.097.097 0 0 0 .01-.016c.3-.786.502-1.605.601-2.44a12.1 12.1 0 0 0 .075-.877 8.142 8.142 0 0 0-.123-1.878zm-9.19 2.82c.001.717-.305 1.4-.84 1.877-.029.026-.056.054-.084.08-.277.22-.594.384-.934.481a3.791 3.791 0 0 1-.447.085.21.21 0 0 1-.235-.152v-.968c.006-.095-.032-.197.044-.28a.265.265 0 0 1 .138-.085c.173-.032.339-.088.495-.169.273-.158.468-.423.538-.731l.035-.151c-.68-.001-1.36-.003-2.041-.003a.65.65 0 0 1-.175-.019.413.413 0 0 1-.306-.385 870.3 870.3 0 0 1 .001-3.087.467.467 0 0 1 .139-.436c.07-.064.161-.1.256-.102h3.002a.416.416 0 0 1 .4.527c.015.05.02.102.016.153 0 1.122.006 2.243-.002 3.364zm5.303.004a2.557 2.557 0 0 1-1.557 2.328c-.023.01-.045.023-.068.035l-.038.01-.022.013c-.193.056-.39.099-.589.129a.216.216 0 0 1-.27-.217l-.002-.322.005-.578-.002-.127c0-.147.057-.21.24-.252.235-.04.454-.142.634-.297.206-.197.339-.457.378-.74l-1.886-.003h-.205a.419.419 0 0 1-.433-.44c0-1.016.001-2.033.003-3.049l-.002-.03a.435.435 0 0 1 .204-.45.39.39 0 0 1 .212-.06h2.982a.416.416 0 0 1 .4.528c.015.05.02.101.016.153v3.37z"
  }));
}
var uim_google_hangouts_default = UimGoogleHangouts;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-google-hangouts-alt.js
var React137 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGoogleHangoutsAlt(props) {
  return React137.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React137.createElement("path", {
    opacity: 0.5,
    d: "M12 23a1 1 0 0 1-1-1v-1.477a9.842 9.842 0 1 1 10.705-8.527 12.531 12.531 0 0 1-9.466 10.975A.997.997 0 0 1 12 23Z"
  }), React137.createElement("path", {
    opacity: 1,
    d: "M9 11.689a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2Z"
  }), React137.createElement("path", {
    opacity: 1,
    d: "M8.515 14.688a1 1 0 0 1 0-2 .501.501 0 0 0 .5-.5v-2.5a1 1 0 0 1 2 0v2.5a2.502 2.502 0 0 1-2.5 2.5zm6.485-3a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2z"
  }), React137.createElement("path", {
    opacity: 1,
    d: "M14.515 14.688a1 1 0 0 1 0-2 .501.501 0 0 0 .5-.5v-2.5a1 1 0 0 1 2 0v2.5a2.502 2.502 0 0 1-2.5 2.5Z"
  }));
}
var uim_google_hangouts_alt_default = UimGoogleHangoutsAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-google-play.js
var React138 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGooglePlay(props) {
  return React138.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React138.createElement("path", {
    opacity: 0.5,
    d: "m14.556 12.895 2.573 2.554 3.785-2.186c.506-.253.83-.766.842-1.332a1.474 1.474 0 0 0-.837-1.275c-.315-.17-3.01-1.734-4.023-2.323l-.002-.002L4.639 1.256a1.644 1.644 0 0 0-1.657-.06c-.05.034-.097.071-.142.111l11.716 11.588z"
  }), React138.createElement("path", {
    opacity: 0.7,
    d: "M20.919 10.656c-.294-.159-2.657-1.53-3.791-2.188l-2.597 2.577L2.785 22.698c.048.044.1.084.153.12.21.12.446.182.687.181.292-.004.578-.084.83-.232.389-.226 12.439-7.182 12.439-7.182l4.02-2.322c.506-.253.83-.766.842-1.332a1.474 1.474 0 0 0-.837-1.275z"
  }), React138.createElement("path", {
    opacity: 0.25,
    d: "M13.61 11.96 2.84 1.309a1.509 1.509 0 0 0-.597 1.252v18.985c-.013.452.197.871.543 1.15L13.61 11.96z"
  }), React138.createElement("path", {
    opacity: 1,
    d: "M20.919 10.656c-.744-.4-3.37-1.944-3.791-2.188l-2.597 2.577-.921.914.946.936 2.573 2.554 3.785-2.186c.506-.253.83-.766.842-1.332a1.474 1.474 0 0 0-.837-1.275z"
  }));
}
var uim_google_play_default = UimGooglePlay;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-graph-bar.js
var React139 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGraphBar(props) {
  return React139.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React139.createElement("path", {
    opacity: 0.25,
    d: "M6 23H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1Z"
  }), React139.createElement("path", {
    opacity: 1,
    d: "M14 23h-4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1Z"
  }), React139.createElement("path", {
    opacity: 0.5,
    d: "M22 23h-4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z"
  }));
}
var uim_graph_bar_default = UimGraphBar;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-grid.js
var React140 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGrid(props) {
  return React140.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React140.createElement("path", {
    opacity: 1,
    d: "M22,6H2V3c0-0.55228,0.44772-1,1-1h18c0.55228,0,1,0.44772,1,1V6z"
  }), React140.createElement("rect", {
    width: 9,
    height: 6,
    x: 2,
    y: 8,
    opacity: 0.5
  }), React140.createElement("path", {
    opacity: 0.5,
    d: "M2,16h9l0,0v6l0,0H3c-0.55228,0-1-0.44772-1-1V16L2,16z"
  }), React140.createElement("rect", {
    width: 9,
    height: 6,
    x: 13,
    y: 8,
    opacity: 0.5
  }), React140.createElement("path", {
    opacity: 0.5,
    d: "M21,22h-8l0,0v-6l0,0h9l0,0v5C22,21.55228,21.55228,22,21,22z"
  }), React140.createElement("polygon", {
    opacity: 0.25,
    points: "22 8 22 6 2 6 2 8 11 8 11 14 2 14 2 16 11 16 11 22 13 22 13 16 22 16 22 14 13 14 13 8"
  }));
}
var uim_grid_default = UimGrid;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-grids.js
var React141 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGrids(props) {
  return React141.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React141.createElement("path", {
    opacity: 0.5,
    d: "M23 21V3a1 1 0 0 0-1-1h-5v20h5a1 1 0 0 0 1-1Z"
  }), React141.createElement("path", {
    opacity: 1,
    d: "M1 3v18a1 1 0 0 0 1 1h5V2H2a1 1 0 0 0-1 1Z"
  }), React141.createElement("path", {
    opacity: 0.5,
    d: "M9 2h6v20H9z"
  }), React141.createElement("path", {
    opacity: 0.25,
    d: "M7 2h2v20H7zM15 2h2v20h-2z"
  }));
}
var uim_grids_default = UimGrids;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-grip-horizontal-line.js
var React142 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimGripHorizontalLine(props) {
  return React142.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React142.createElement("path", {
    opacity: 1,
    d: "M21 11H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
  }));
}
var uim_grip_horizontal_line_default = UimGripHorizontalLine;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-head-side.js
var React143 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHeadSide(props) {
  return React143.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React143.createElement("path", {
    opacity: 0.5,
    d: "M18.5 22h-9a1 1 0 0 1-1-1v-2h-1a2.002 2.002 0 0 1-2-2v-2h-1a1 1 0 0 1-.904-1.426L5.5 9.53V9.5a7.44 7.44 0 0 1 2.277-5.383 7.365 7.365 0 0 1 5.453-2.114 7.698 7.698 0 0 1 7.27 7.77V10a1.031 1.031 0 0 1-.033.256l-1.93 7.266.924 3.2A1 1 0 0 1 18.5 22Z"
  }));
}
var uim_head_side_default = UimHeadSide;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-head-side-cough.js
var React144 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHeadSideCough(props) {
  return React144.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React144.createElement("circle", {
    cx: 6,
    cy: 16.999,
    r: 1,
    opacity: 1
  }), React144.createElement("circle", {
    cx: 2,
    cy: 18,
    r: 1,
    opacity: 1
  }), React144.createElement("circle", {
    cx: 5,
    cy: 21,
    r: 1,
    opacity: 1
  }), React144.createElement("path", {
    opacity: 0.5,
    d: "M21.13 21h-8.463a1 1 0 0 1-1-1v-2H10.8a1.935 1.935 0 0 1-1.934-1.934v-1.8H8a1 1 0 0 1-.904-1.426l1.77-3.758v-.016a7.067 7.067 0 0 1 7.284-7.063A7.252 7.252 0 0 1 23 9.321v.212a1.031 1.031 0 0 1-.033.257l-1.796 6.767.919 3.164A1 1 0 0 1 21.13 21Z"
  }));
}
var uim_head_side_cough_default = UimHeadSideCough;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-head-side-mask.js
var React145 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHeadSideMask(props) {
  return React145.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React145.createElement("path", {
    opacity: 1,
    d: "M20.476 9.287 12.337 12H4.5a1 1 0 0 0-.938 1.348l1.448 3.895c.012.034.027.067.043.099A2.984 2.984 0 0 0 7.736 19H12.5a1 1 0 0 0 .32-.052l5.864-1.978.616-2.319-5.8 1.956v-2.886l6.634-2.211.333-1.254A1.031 1.031 0 0 0 20.5 10v-.228c0-.163-.014-.324-.024-.485Z"
  }), React145.createElement("path", {
    opacity: 0.5,
    d: "M3.508 12.894v.03-.03zm.17-.465A1.001 1.001 0 0 1 4.5 12h7.837l8.14-2.713a7.676 7.676 0 0 0-7.247-7.284 7.359 7.359 0 0 0-5.453 2.114A7.441 7.441 0 0 0 5.5 9.465l-1.852 3.011c-.005.009-.004.02-.01.03.015-.026.024-.053.04-.077zM13.5 13.721v2.886l5.8-1.956 1.167-4.395-.333 1.254-6.634 2.211zM18.537 17.522l.2-.754-.053.202-5.865 1.978A1 1 0 0 1 12.5 19h-4v2a1 1 0 0 0 1 1h9a1 1 0 0 0 .96-1.277Z"
  }));
}
var uim_head_side_mask_default = UimHeadSideMask;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-hipchat.js
var React146 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHipchat(props) {
  return React146.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React146.createElement("path", {
    opacity: 0.25,
    d: "M17.544 19.985a.192.192 0 0 1 .048.116c0 .058-.055.098-.124.098a7.539 7.539 0 0 1-2.857-1.518.538.538 0 0 0-.488-.08 9.98 9.98 0 0 1-2.123.227c-4.597 0-8.323-3.076-8.323-6.873 0-3.794 3.726-6.87 8.323-6.87s8.323 3.076 8.323 6.87a6.566 6.566 0 0 1-3.374 5.526.546.546 0 0 0-.282.438 4.667 4.667 0 0 0 .877 2.066Z"
  }), React146.createElement("path", {
    opacity: 1,
    d: "M17.462 13.869a.4.4 0 0 0-.399-.398.392.392 0 0 0-.263.101 7.32 7.32 0 0 1-4.796 1.711h-.008a7.623 7.623 0 0 1-4.796-1.71.497.497 0 0 0-.272-.094.405.405 0 0 0-.39.44.932.932 0 0 0 .228.481 6.445 6.445 0 0 0 5.212 2.408h.044a6.445 6.445 0 0 0 5.212-2.408 1.09 1.09 0 0 0 .228-.531"
  }), React146.createElement("path", {
    opacity: 1,
    d: "M17.544 19.985a.192.192 0 0 1 .048.116c0 .058-.055.098-.124.098a7.539 7.539 0 0 1-2.857-1.518.538.538 0 0 0-.488-.08 9.98 9.98 0 0 1-2.123.227c-4.597 0-8.323-3.076-8.323-6.873 0-3.794 3.726-6.87 8.323-6.87s8.323 3.076 8.323 6.87a6.566 6.566 0 0 1-3.374 5.526.546.546 0 0 0-.282.438 4.667 4.667 0 0 0 .877 2.066Zm2.676.839a3.672 3.672 0 0 1-1.684-2.015.369.369 0 0 1 .134-.44A8.144 8.144 0 0 0 22 11.941c0-4.765-4.477-8.627-10-8.627S2 7.176 2 11.941c0 4.767 4.477 8.63 10 8.63a11.567 11.567 0 0 0 2.104-.192.565.565 0 0 1 .412.077A10.758 10.758 0 0 0 19.71 22a.703.703 0 0 0 .798-.698.54.54 0 0 0-.288-.478Z"
  }));
}
var uim_hipchat_default = UimHipchat;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-history.js
var React147 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHistory(props) {
  return React147.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React147.createElement("path", {
    opacity: 1,
    d: "M12 2a10.017 10.017 0 0 0-6.994 2.872V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.218A7.98 7.98 0 1 1 4 12a1 1 0 0 0-2 0A10 10 0 1 0 12 2Z"
  }), React147.createElement("path", {
    opacity: 1,
    d: "M14 13h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2Z"
  }), React147.createElement("path", {
    opacity: 0.5,
    d: "M12 4a8.008 8.008 0 0 0-5.782 2.5h2.288a1 1 0 0 1 0 2h-4.5a.99.99 0 0 1-.978-.889A9.922 9.922 0 0 0 2 12a1 1 0 0 1 2 0 8 8 0 1 0 8-8Zm2 9h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2Z"
  }));
}
var uim_history_default = UimHistory;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-history-alt.js
var React148 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHistoryAlt(props) {
  return React148.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React148.createElement("path", {
    opacity: 1,
    d: "M12,2A10.01687,10.01687,0,0,0,5,4.87714V3A1,1,0,0,0,3,3V7.5a.99974.99974,0,0,0,1,1H8.5a1,1,0,0,0,0-2H6.21844A7.99161,7.99161,0,1,1,12,20a1,1,0,0,0,0,2A10,10,0,0,0,12,2Z"
  }), React148.createElement("path", {
    opacity: 1,
    d: "M14,13H12a.99974.99974,0,0,1-1-1V9a1,1,0,0,1,2,0v2h1a1,1,0,0,1,0,2Z"
  }), React148.createElement("path", {
    opacity: 0.5,
    d: "M12,4A8.00807,8.00807,0,0,0,6.21844,6.5H8.5a1,1,0,0,1,0,2H4a.98882.98882,0,0,1-.97583-.88013A9.977,9.977,0,0,0,12,22a1,1,0,0,1,0-2A8,8,0,0,0,12,4Zm2,9H12a.99974.99974,0,0,1-1-1V9a1,1,0,0,1,2,0v2h1a1,1,0,0,1,0,2Z"
  }));
}
var uim_history_alt_default = UimHistoryAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-horizontal-align-left.js
var React149 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHorizontalAlignLeft(props) {
  return React149.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React149.createElement("path", {
    opacity: 0.5,
    d: "M16 10H4V6h11a1 1 0 0 1 1 1v3z"
  }), React149.createElement("path", {
    opacity: 1,
    d: "M21 18H4v-8h17a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
  }), React149.createElement("path", {
    opacity: 0.25,
    d: "M3 22a1 1 0 0 1-1-.999V3a1 1 0 0 1 2 0v18a1 1 0 0 1-.999 1H3z"
  }));
}
var uim_horizontal_align_left_default = UimHorizontalAlignLeft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-hospital.js
var React150 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHospital(props) {
  return React150.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React150.createElement("path", {
    opacity: 0.5,
    d: "M12.5 14.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-5-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm10-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
  }), React150.createElement("path", {
    opacity: 1,
    d: "M13.5 7H13v-.5a1 1 0 0 0-2 0V7h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V9h.5a1 1 0 0 0 0-2Z"
  }), React150.createElement("path", {
    opacity: 0.25,
    d: "M21.5 6.5h-3v-4a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v4h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1Zm-14 12h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm5 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm1-5.5H13v.5a1 1 0 0 1-2 0V9h-.5a1 1 0 0 1 0-2h.5v-.5a1 1 0 0 1 2 0V7h.5a1 1 0 0 1 0 2Zm4 9.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Z"
  }));
}
var uim_hospital_default = UimHospital;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-hospital-square-sign.js
var React151 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHospitalSquareSign(props) {
  return React151.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React151.createElement("path", {
    opacity: 1,
    d: "M15 6a1 1 0 0 0-1 1v4h-4V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-4h4v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Z"
  }), React151.createElement("path", {
    opacity: 0.5,
    d: "M19 2H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm-3 15a1 1 0 0 1-2 0v-4h-4v4a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0v4h4V7a1 1 0 0 1 2 0Z"
  }));
}
var uim_hospital_square_sign_default = UimHospitalSquareSign;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-hospital-symbol.js
var React152 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHospitalSymbol(props) {
  return React152.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React152.createElement("path", {
    opacity: 1,
    d: "M15 7a1 1 0 0 0-1 1v3h-4V8a1 1 0 0 0-2 0v8a1 1 0 0 0 2 0v-3h4v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Z"
  }), React152.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4 14a1 1 0 0 1-2 0v-3h-4v3a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v3h4V8a1 1 0 0 1 2 0Z"
  }));
}
var uim_hospital_symbol_default = UimHospitalSymbol;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-house-user.js
var React153 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHouseUser(props) {
  return React153.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React153.createElement("path", {
    opacity: 0.5,
    d: "M12 18a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 12 18Z"
  }), React153.createElement("path", {
    opacity: 1,
    d: "M14.64 16.772a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 7 21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.988 4.988 0 0 0-2.36-4.228Z"
  }), React153.createElement("path", {
    opacity: 0.5,
    d: "M21 12a.996.996 0 0 1-.664-.252L12 4.338l-8.336 7.41a1 1 0 0 1-1.328-1.496l9-8a.999.999 0 0 1 1.328 0l9 8A1 1 0 0 1 21 12Z"
  }), React153.createElement("path", {
    opacity: 0.25,
    d: "m12 4.338-8 7.111V21a1 1 0 0 0 1 1h3a1 1 0 0 1-1-1 4.988 4.988 0 0 1 2.36-4.228A3.469 3.469 0 0 1 8.5 14.5a3.5 3.5 0 0 1 7 0 3.469 3.469 0 0 1-.86 2.272A4.988 4.988 0 0 1 17 21a1 1 0 0 1-1 1h3a1 1 0 0 0 1-1v-9.551Z"
  }));
}
var uim_house_user_default = UimHouseUser;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-html3.js
var React154 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHtml3(props) {
  return React154.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React154.createElement("path", {
    opacity: 0.5,
    d: "m17.476 6.123-.534 5.994.002.033-.002.074v-.001l-.38 4.192-.041.372L12 18.037v.001l-.004.003-4.512-1.258-.306-3.465h2.213l.157 1.762 2.453.665-.001.001 2.461-.675.261-2.869H9.576l-.044-.485-.101-1.136-.052-.611h5.538l.202-2.231H6.682l-.044-.485-.1-1.137-.053-.61h11.044z"
  }), React154.createElement("path", {
    opacity: 1,
    d: "m3.195 2 1.602 17.994L11.989 22l7.212-2.013L20.805 2H3.195zm14.281 4.123-.534 5.994.002.033-.002.074v-.001l-.38 4.192-.041.372L12 18.037v.001l-.004.003-4.512-1.258-.306-3.465h2.213l.157 1.762 2.453.665-.001.001 2.461-.675.261-2.869H9.576l-.044-.485-.101-1.136-.052-.611h5.538l.202-2.231H6.682l-.044-.485-.1-1.137-.053-.61h11.044l-.053.616z"
  }));
}
var uim_html3_default = UimHtml3;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-html3-alt.js
var React155 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHtml3Alt(props) {
  return React155.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React155.createElement("path", {
    opacity: 0.5,
    d: "M11.99 22a1.001 1.001 0 0 1-.268-.037l-6.473-1.805a1 1 0 0 1-.728-.874L3.08 3.09A1 1 0 0 1 4.075 2h15.85a1 1 0 0 1 .996 1.089l-1.443 16.188a.999.999 0 0 1-.728.874l-6.491 1.812a1.001 1.001 0 0 1-.269.037Z"
  }), React155.createElement("path", {
    opacity: 1,
    d: "M16.777 6.325A1 1 0 0 0 16.04 6H7.96a1 1 0 1 0 0 2h6.987l-.177 2H10a1 1 0 0 0 0 2h4.592l-.264 2.977-2.328.528-2.328-.53-.096-1.064a1 1 0 0 0-1.992.178l.16 1.79a1.001 1.001 0 0 0 .775.887l3.26.74a1.019 1.019 0 0 0 .443 0l3.26-.74a1.001 1.001 0 0 0 .774-.887l.78-8.79a1.001 1.001 0 0 0-.259-.764Z"
  }));
}
var uim_html3_alt_default = UimHtml3Alt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-html5.js
var React156 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHtml5(props) {
  return React156.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React156.createElement("path", {
    opacity: 1,
    d: "M3.18249,2,4.78741,20.00071,11.98921,22l7.22171-2.00206L20.81751,2ZM17.32508,7.88728H8.87682L9.07861,10.148h8.04556l-.6059,6.778L12,18.17825v.0004l-.01015.00276L7.46747,16.92607l-.30926-3.46645h2.2162l.15718,1.76075,2.45873.66389.002-.00053v-.00015l2.46231-.6646.25632-2.86324H7.05953L6.46408,5.67957H17.52272Z"
  }), React156.createElement("path", {
    opacity: 0.25,
    d: "M17.32508,7.88728H8.87682L9.07861,10.148h8.04556l-.6059,6.778L12,18.17825v.0004l-.01015.00276L7.46747,16.92607l-.30926-3.46645h2.2162l.15718,1.76075,2.45873.66389.002-.00053v-.00015l2.46231-.6646.25632-2.86324H7.05953L6.46408,5.67957H17.52272Z"
  }));
}
var uim_html5_default = UimHtml5;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-html5-alt.js
var React157 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimHtml5Alt(props) {
  return React157.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React157.createElement("path", {
    opacity: 1,
    d: "M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Z"
  }), React157.createElement("path", {
    opacity: 0.25,
    d: "M7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z"
  }));
}
var uim_html5_alt_default = UimHtml5Alt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-image-v.js
var React158 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimImageV(props) {
  return React158.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React158.createElement("path", {
    opacity: 0.5,
    d: "M19 2H5a3.009 3.009 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887.888-.888a3.008 3.008 0 0 1 4.242 0L22 15.86V5a3.009 3.009 0 0 0-3-3z"
  }), React158.createElement("path", {
    opacity: 1,
    d: "M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.009 3.009 0 0 0 3 3h14c.815 0 1.595-.333 2.16-.92L10.12 9.98z"
  }), React158.createElement("path", {
    opacity: 0.25,
    d: "m22 15.858-3.879-3.879a3.008 3.008 0 0 0-4.242 0l-.888.888 8.165 8.209c.542-.555.845-1.3.844-2.076v-3.142z"
  }));
}
var uim_image_v_default = UimImageV;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-instagram.js
var React159 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimInstagram(props) {
  return React159.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React159.createElement("g", {
    "data-name": "Brand Logos"
  }, React159.createElement("path", {
    opacity: 1,
    d: "M12.00039,6.86511A5.13489,5.13489,0,1,0,17.13528,12,5.13479,5.13479,0,0,0,12.00039,6.86511Zm0,8.46846A3.3336,3.3336,0,1,1,15.334,12,3.33317,3.33317,0,0,1,12.00039,15.33357Z"
  }), React159.createElement("path", {
    opacity: 1,
    d: "M21.93985,7.87719a7.33258,7.33258,0,0,0-.46447-2.42726,4.918,4.918,0,0,0-1.15346-1.77146A4.89358,4.89358,0,0,0,18.55129,2.525,7.32278,7.32278,0,0,0,16.124,2.06054C15.05775,2.012,14.7169,2,12.00122,2s-3.05681.01126-4.12365.06054A7.33317,7.33317,0,0,0,5.45032,2.525,4.90522,4.90522,0,0,0,3.67886,3.67847a4.88551,4.88551,0,0,0-1.1534,1.77146A7.33341,7.33341,0,0,0,2.061,7.87719C2.01171,8.94341,2.00039,9.28432,2.00039,12s.01132,3.05653.06059,4.12276a7.33352,7.33352,0,0,0,.46448,2.42731,4.888,4.888,0,0,0,1.1534,1.77146,4.9169,4.9169,0,0,0,1.77146,1.1534,7.33849,7.33849,0,0,0,2.42725.46448C8.94441,21.9879,9.28471,22,12.00039,22s3.05658-.01132,4.12281-.06059a7.33339,7.33339,0,0,0,2.42726-.46448,5.11251,5.11251,0,0,0,2.92492-2.92486,7.316,7.316,0,0,0,.46447-2.42731c.0485-1.067.05976-1.40708.05976-4.12276S21.98835,8.94341,21.93985,7.87719Zm-1.799,8.16406a5.54872,5.54872,0,0,1-.344,1.85708,3.31133,3.31133,0,0,1-1.89825,1.89741,5.52231,5.52231,0,0,1-1.85708.344c-1.05408.04844-1.37068.05815-4.04119.05815s-2.98623-.00971-4.04-.05815a5.5263,5.5263,0,0,1-1.85708-.344,3.10771,3.10771,0,0,1-1.15024-.748,3.085,3.085,0,0,1-.748-1.1494,5.52134,5.52134,0,0,1-.344-1.85708c-.0485-1.05408-.05815-1.37068-.05815-4.04119s.01049-2.98623.05815-4.0412a5.56308,5.56308,0,0,1,.344-1.857,3.1074,3.1074,0,0,1,.748-1.15024,3.08175,3.08175,0,0,1,1.15024-.748,5.52271,5.52271,0,0,1,1.85708-.344c1.05407-.04849,1.37068-.05815,4.04-.05815s2.98623.01049,4.04119.05815a5.5635,5.5635,0,0,1,1.85708.344,3.30957,3.30957,0,0,1,1.89825,1.89825,5.52254,5.52254,0,0,1,.344,1.857c.04849,1.055.05815,1.37074.05815,4.0412S20.18936,14.98628,20.14087,16.04125Z"
  }), React159.createElement("path", {
    opacity: 1,
    d: "M17.339,5.462h-.00044a1.19979,1.19979,0,1,0,.00044,0Z"
  })));
}
var uim_instagram_default = UimInstagram;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-instagram-alt.js
var React160 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimInstagramAlt(props) {
  return React160.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React160.createElement("path", {
    opacity: 0.5,
    d: "M20.93633,7.56378C20.9285,6.86754,20.80075,6.17785,20.55868,5.525c-0.17592-0.47693-0.45653-0.90836-0.82117-1.26255c-0.35413-0.36469-0.78556-0.64529-1.26251-0.82113c-0.65302-0.24142-1.34258-0.36915-2.03874-0.37765C15.278,3.01176,14.93137,3,11.99973,3C9.06918,3,8.72146,3.01071,7.56378,3.06367C6.86754,3.0715,6.17785,3.19925,5.525,3.44132C5.04789,3.6169,4.61639,3.89755,4.26245,4.26249C3.89838,4.61735,3.61788,5.0488,3.44128,5.52554C3.1999,6.17858,3.07217,6.86815,3.06363,7.56432C3.01176,8.7225,3,9.06918,3,12.00077s0.01071,3.27881,0.06422,4.436c0.00784,0.69624,0.13559,1.38593,0.37765,2.03879c0.17551,0.47694,0.45616,0.90823,0.82113,1.26189c0.35439,0.3644,0.78576,0.64497,1.26255,0.82117c0.65282,0.24212,1.3425,0.36989,2.03873,0.37771C8.72146,20.98984,9.06918,21,11.99973,21c2.93164,0,3.27936-0.01071,4.43649-0.06367c0.69624-0.00782,1.38591-0.13559,2.03874-0.37771c0.95745-0.36916,1.71428-1.12577,2.08372-2.08311c0.2415-0.65301,0.36924-1.3426,0.37765-2.03879C20.98933,15.27854,21,14.93082,21,12.00027C21,9.06863,20.98929,8.722,20.93633,7.56378z"
  }), React160.createElement("path", {
    opacity: 1,
    d: "M17.79315,7.6178c-0.24975-0.64829-0.76212-1.16065-1.4104-1.4104c-0.442-0.16326-0.90867-0.24971-1.37982-0.25562c-0.78381-0.03564-1.01935-0.04333-3.00262-0.04333s-2.21857,0.0072-3.00177,0.04321c-0.4712,0.00529-0.93795,0.09176-1.37977,0.25562c-0.64831,0.24973-1.1607,0.7621-1.41046,1.4104c-0.16319,0.442-0.24962,0.90864-0.25555,1.37976c-0.03546,0.78387-0.04321,1.01849-0.04321,3.00268s0.0072,2.21942,0.04321,3.00263c0.00531,0.4712,0.09175,0.93797,0.25555,1.37982c0.2501,0.64794,0.7624,1.16,1.41046,1.40979c0.44186,0.16372,0.90859,0.25018,1.37977,0.25561v0.00013c0.78295,0.036,1.01757,0.04321,3.00177,0.04321s2.21942-0.0072,3.00262-0.04321c0.47121-0.00535,0.93797-0.09182,1.37982-0.25562c0.64804-0.24981,1.16031-0.76186,1.4104-1.40979c0.16342-0.44196,0.24988-0.90865,0.25562-1.37982c0.036-0.78388,0.04321-1.01843,0.04321-3.00263s-0.0072-2.21881-0.04321-3.00268C18.04342,8.52637,17.95695,8.05963,17.79315,7.6178z M12.00031,15.81525c-2.10705,0.00006-3.8152-1.708-3.81525-3.81505c0-0.00007,0-0.00013,0-0.0002h0.00006c0.00002-2.10709,1.70816-3.81521,3.81525-3.81519c2.10709,0.00002,3.81521,1.70816,3.81519,3.81525C15.81554,14.10715,14.1074,15.81527,12.00031,15.81525z M15.96631,8.92542c-0.49242-0.00181-0.89014-0.40246-0.88833-0.89488c0.0018-0.49,0.39869-0.88673,0.88869-0.88833H15.967c0.49242-0.00146,0.89279,0.39653,0.89426,0.88895c0.00146,0.49242-0.39653,0.89279-0.88895,0.89426c-0.00201,0.00001-0.00402,0-0.00603,0H15.96631z"
  }), React160.createElement("path", {
    opacity: 1,
    d: "M12.00031,9.52307c-1.36795-0.00002-2.47692,1.10891-2.47694,2.47686s1.10891,2.47692,2.47686,2.47694s2.47692-1.10891,2.47694-2.47686c0,0,0-0.00001,0-0.00001c0.00017-1.3678-1.10853-2.47676-2.47633-2.47693C12.00066,9.52307,12.00049,9.52307,12.00031,9.52307z"
  }), React160.createElement("path", {
    opacity: 1,
    d: "M21.92926,7.07086c-0.00871-0.77359-0.15066-1.53989-0.41962-2.26526c-0.19547-0.52993-0.50725-1.00929-0.91241-1.40283c-0.39348-0.40523-0.87286-0.71702-1.40283-0.91241c-0.72557-0.26825-1.49175-0.41017-2.26526-0.41962C15.64221,2.01306,15.25708,2,11.99969,2C8.74353,2,8.35718,2.0119,7.07086,2.07074C6.29727,2.07945,5.53097,2.2214,4.8056,2.49036C4.27548,2.68544,3.79604,2.99728,3.40277,3.40277C2.99825,3.79705,2.68658,4.27644,2.49036,4.80615c-0.26822,0.7256-0.41014,1.49179-0.41962,2.26532C2.01306,8.35834,2,8.74353,2,12.00085s0.0119,3.64313,0.07135,4.92884c0.00873,0.7736,0.15069,1.53992,0.41965,2.26531c0.19502,0.52995,0.50687,1.0092,0.91241,1.40216c0.39377,0.40488,0.87306,0.71662,1.40283,0.91241c0.72536,0.26902,1.49167,0.41099,2.26526,0.41968C8.35718,21.98871,8.74353,22,11.99969,22c3.25739,0,3.64374-0.0119,4.92945-0.07074c0.77359-0.00868,1.5399-0.15066,2.26526-0.41968c1.06383-0.41018,1.90476-1.25086,2.31524-2.31458c0.26835-0.72556,0.41028-1.49178,0.41962-2.26532C21.9881,15.64282,22,15.25647,22,12.00031C22,8.74292,21.9881,8.35779,21.92926,7.07086z M19.38538,15.06323c-0.0119,0.6164-0.1286,1.22628-0.3451,1.80353c-0.386,0.99815-1.17506,1.78723-2.17321,2.17324c-0.57731,0.21621-1.18712,0.33289-1.80347,0.34509c-0.79224,0.03662-1.04553,0.045-3.06329,0.045s-2.27063-0.009-3.0633-0.045C8.32067,19.37282,7.71087,19.25614,7.13354,19.04c-0.99818-0.38596-1.78725-1.17504-2.17321-2.17322c-0.21621-0.57733-0.3329-1.18716-0.3451-1.80353c-0.03662-0.79217-0.045-1.04547-0.045-3.06323s0.00842-2.27106,0.045-3.06329c0.01221-0.61635,0.12889-1.22616,0.3451-1.80347C5.34623,6.13504,6.13532,5.34592,7.13354,4.96C7.71085,4.74378,8.32065,4.62708,8.937,4.61487h0.00031c0.79266-0.03656,1.04638-0.045,3.06384-0.045s2.27069,0.00878,3.063,0.045c0.61639,0.01206,1.22624,0.12877,1.80353,0.34513c0.99786,0.38624,1.78665,1.17525,2.1726,2.17322c0.21625,0.5773,0.33294,1.18712,0.3451,1.80347c0.036,0.79223,0.04443,1.04553,0.04443,3.06329S19.42139,14.27045,19.38538,15.06323z"
  }));
}
var uim_instagram_alt_default = UimInstagramAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-intercom.js
var React161 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimIntercom(props) {
  return React161.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React161.createElement("path", {
    opacity: 0.5,
    d: "M19.33336,12.99594c-0.00401,0.3682-0.30575,0.66343-0.67395,0.65941C18.29688,13.6514,18.00395,13.35847,18,12.99594V7c0.00401-0.3682,0.30575-0.66343,0.67395-0.65941C19.03648,6.34454,19.32941,6.63747,19.33336,7V12.99594z M19.1007,17.16883c-2.05712,1.49713-4.55834,2.25818-7.1007,2.16054c-2.54233,0.09763-5.0435-0.66345-7.10055-2.16062c-0.27992-0.23921-0.31292-0.66004-0.07371-0.93996s0.66004-0.31292,0.93996-0.07371c1.82274,1.27506,4.01139,1.92132,6.23438,1.84086c2.22344,0.09006,4.41441-0.55657,6.23265-1.83946c0.27955-0.23969,0.70048-0.20738,0.94017,0.07218c0.23969,0.27955,0.20738,0.70048-0.07217,0.94017H19.1007z M4.66664,7c0.00403-0.3682,0.30577-0.66342,0.67397-0.65939C5.70313,6.34458,5.99604,6.63749,6,7v5.99594c-0.00404,0.3682-0.3058,0.66341-0.67399,0.65937c-0.3625-0.00398-0.65539-0.29687-0.65937-0.65937C4.66664,12.99594,4.66664,7,4.66664,7z M8.00008,5.66664c0.00571-0.36818,0.3088-0.66201,0.67698-0.6563c0.36013,0.00559,0.65071,0.29617,0.6563,0.6563V14.573c-0.00571,0.36817-0.3088,0.66201-0.67698,0.6563c-0.36013-0.00558-0.65071-0.29618-0.6563-0.6563V5.66664z M11.33336,5.3293c-0.00005-0.36813,0.29834-0.66659,0.66646-0.66664c0.00001,0,0.00001,0,0.00002,0H12c0.36813-0.00009,0.66663,0.29827,0.66672,0.6664v0v9.66688c-0.00404,0.3682-0.3058,0.66341-0.67399,0.65937c-0.3625-0.00398-0.65539-0.29687-0.65937-0.65937C11.33336,14.99594,11.33336,5.3293,11.33336,5.3293z M14.66672,5.66664c0.00571-0.36818,0.3088-0.66201,0.67698-0.6563C15.70382,5.01592,15.99441,5.30651,16,5.66664V14.573c-0.00571,0.36817-0.3088,0.66201-0.67698,0.6563c-0.36013-0.00558-0.65071-0.29618-0.6563-0.6563V5.66664z"
  }), React161.createElement("path", {
    opacity: 1,
    d: "M19.5,2h-15C3.11926,2,2,3.11926,2,4.5v15C2,20.88074,3.11926,22,4.5,22h15c1.38074,0,2.5-1.11926,2.5-2.5v-15C22,3.11926,20.88074,2,19.5,2z M14.66675,5.66663c0.00568-0.36816,0.30878-0.66199,0.67694-0.65631C15.7038,5.01593,15.99438,5.30652,16,5.66663V14.573c-0.00574,0.36816-0.30878,0.66199-0.677,0.65631c-0.36011-0.00562-0.6507-0.2962-0.65625-0.65631V5.66663z M11.33337,5.32928c-0.00006-0.3681,0.29834-0.66656,0.66644-0.66663H12c0.3681-0.00006,0.66663,0.29828,0.66675,0.66638v9.66687c-0.00409,0.36823-0.30585,0.66345-0.67401,0.65942c-0.36249-0.00403-0.6554-0.29688-0.65936-0.65942V5.32928z M8.00006,5.66663c0.00574-0.36816,0.30884-0.66199,0.677-0.65631c0.36011,0.00562,0.6507,0.2962,0.65631,0.65631V14.573c-0.00574,0.36816-0.30884,0.66199-0.677,0.65631c-0.36011-0.00562-0.6507-0.2962-0.65631-0.65631V5.66663z M4.66663,7c0.00403-0.36823,0.30579-0.66339,0.67401-0.65936C5.70312,6.3446,5.99603,6.63751,6,7v5.99591c-0.00403,0.36823-0.30579,0.66345-0.67401,0.65942c-0.36249-0.00403-0.6554-0.29688-0.65936-0.65942V7z M19.10071,17.16882C17.04358,18.66595,14.54236,19.427,12,19.32935c-2.5423,0.09766-5.04352-0.66345-7.10052-2.16058c-0.27997-0.2392-0.31293-0.66003-0.07373-0.94c0.2392-0.27991,0.66003-0.31287,0.93994-0.07367c1.82275,1.27502,4.01141,1.92133,6.23438,1.84082c2.22345,0.09009,4.41443-0.55652,6.23267-1.83942c0.27954-0.23969,0.7005-0.2074,0.94019,0.07214S19.38031,16.92914,19.10071,17.16882z M19.33337,12.99591c-0.00403,0.36823-0.30579,0.66345-0.67395,0.65942C18.29688,13.65137,18.00397,13.35846,18,12.99591V7c0.00403-0.36823,0.30573-0.66345,0.67395-0.65942C19.0365,6.34454,19.32941,6.63745,19.33337,7V12.99591z"
  }));
}
var uim_intercom_default = UimIntercom;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-intercom-alt.js
var React162 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimIntercomAlt(props) {
  return React162.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React162.createElement("g", {
    "data-name": "Brand Logos"
  }, React162.createElement("path", {
    opacity: 0.5,
    d: "M20 23H4a3.003 3.003 0 0 1-3-3V4a3.003 3.003 0 0 1 3-3h16a3.003 3.003 0 0 1 3 3v16a3.003 3.003 0 0 1-3 3Z"
  }), React162.createElement("path", {
    opacity: 1,
    d: "M12 19a10.8 10.8 0 0 1-6.644-2.06 1 1 0 0 1 1.288-1.532A8.987 8.987 0 0 0 12 17a8.995 8.995 0 0 0 5.361-1.595 1 1 0 0 1 1.282 1.535A10.795 10.795 0 0 1 12 19zm-6-6a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm4 2a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zm4 0a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zm4-2a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z"
  })));
}
var uim_intercom_alt_default = UimIntercomAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-java-script.js
var React163 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimJavaScript(props) {
  return React163.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React163.createElement("path", {
    opacity: 1,
    d: "M11.181 2.213a1.677 1.677 0 0 1 1.637 0l7.479 4.225a1.54 1.54 0 0 1 .778 1.325v8.475a1.556 1.556 0 0 1-.836 1.354l-7.452 4.204a1.63 1.63 0 0 1-1.655-.046l-2.236-1.292a1.316 1.316 0 0 1-.432-.311c.095-.128.265-.144.403-.2a5.22 5.22 0 0 0 .883-.412.206.206 0 0 1 .23.014c.636.365 1.267.741 1.907 1.103.136.079.274-.026.39-.09q3.658-2.068 7.317-4.13a.242.242 0 0 0 .133-.238q.003-4.193.001-8.387a.262.262 0 0 0-.156-.261q-3.714-2.092-7.426-4.186a.258.258 0 0 0-.292 0Q8.141 5.452 4.43 7.547a.259.259 0 0 0-.157.26v8.387a.237.237 0 0 0 .135.235q.99.562 1.983 1.12a1.532 1.532 0 0 0 1.24.166.94.94 0 0 0 .609-.883c.003-2.78-.002-5.56.002-8.338a.21.21 0 0 1 .228-.214c.318-.002.635-.004.953.001a.22.22 0 0 1 .207.254c-.001 2.797.003 5.594-.002 8.39a2.127 2.127 0 0 1-.995 1.922 3.064 3.064 0 0 1-2.738-.075c-.727-.363-1.42-.79-2.133-1.18a1.553 1.553 0 0 1-.835-1.354V7.763a1.542 1.542 0 0 1 .804-1.342q3.726-2.103 7.451-4.208Z"
  }), React163.createElement("path", {
    opacity: 1,
    d: "M13.348 8.083a5.88 5.88 0 0 1 3.218.493 2.434 2.434 0 0 1 1.187 2.106.228.228 0 0 1-.247.168c-.315 0-.629.004-.943-.002a.243.243 0 0 1-.228-.236 1.436 1.436 0 0 0-.687-.992 4.071 4.071 0 0 0-1.884-.27 2.558 2.558 0 0 0-1.349.336.855.855 0 0 0-.284.955c.101.24.378.317.605.388 1.306.342 2.69.308 3.97.757a1.87 1.87 0 0 1 1.23 1.095 2.338 2.338 0 0 1-.396 2.23 3.126 3.126 0 0 1-1.678.905 8.063 8.063 0 0 1-2.533.108 3.992 3.992 0 0 1-2.228-.839 2.338 2.338 0 0 1-.753-1.844.211.211 0 0 1 .231-.186c.317-.003.633-.004.95 0a.222.222 0 0 1 .226.22 1.439 1.439 0 0 0 .536 1.01 4.06 4.06 0 0 0 2.187.398 2.97 2.97 0 0 0 1.794-.439.99.99 0 0 0 .27-.946c-.078-.28-.37-.41-.621-.495-1.29-.408-2.688-.26-3.965-.72a1.93 1.93 0 0 1-1.218-1.063 2.175 2.175 0 0 1 .434-2.262 3.506 3.506 0 0 1 2.176-.875Z"
  }));
}
var uim_java_script_default = UimJavaScript;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-key-skeleton.js
var React164 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimKeySkeleton(props) {
  return React164.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React164.createElement("path", {
    opacity: 0.5,
    d: "M7,12.00049c-2.76142,0-5,2.23858-5,5s2.23858,5,5,5s5-2.23858,5-5S9.76142,12.00049,7,12.00049z M5.58527,19.4129c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1s1,0.44772,1,1C6.58461,18.96491,6.13728,19.41224,5.58527,19.4129z"
  }), React164.createElement("path", {
    opacity: 1,
    d: "M21.00146,4.4126L21.707,3.707c0.39398-0.38695,0.39968-1.02002,0.01273-1.414c-0.38695-0.39398-1.02002-0.39968-1.414-0.01273C20.30145,2.28448,20.2972,2.28872,20.293,2.293L9.754,12.83191c0.56146,0.37168,1.0424,0.85254,1.41418,1.41394l5.591-5.59094l2.11975,2.12048c0.39048,0.39048,1.02358,0.39049,1.41406,0.00001s0.39049-1.02358,0.00001-1.41406l-2.11978-2.12049l1.41418-1.41418l0.70557,0.70557c0.39177,0.38919,1.02486,0.38709,1.41405-0.00468C22.09439,6.1376,22.09438,5.5081,21.707,5.11816L21.00146,4.4126z"
  }));
}
var uim_key_skeleton_default = UimKeySkeleton;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-key-skeleton-alt.js
var React165 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimKeySkeletonAlt(props) {
  return React165.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React165.createElement("path", {
    opacity: 0.5,
    d: "M6.99927,12c-2.76142,0-5,2.23858-5,5s2.23858,5,5,5s5-2.23858,5-5l0,0C11.99927,14.23858,9.76069,12,6.99927,12z M5.58453,19.41241c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1s1,0.44772,1,1C6.5839,18.96444,6.13655,19.41178,5.58453,19.41241z"
  }), React165.createElement("path", {
    opacity: 1,
    d: "M21.708,6.53418l-1.41454-1.41455L21.70605,3.707c0.39311-0.38783,0.39739-1.02091,0.00956-1.41403s-1.02091-0.39739-1.41403-0.00956C20.29837,2.28659,20.29517,2.28978,20.292,2.293L9.75348,12.83148c0.56147,0.37168,1.04239,0.85256,1.41412,1.414l4.88318-4.88318l1.41406,1.41407c0.39114,0.38983,1.02424,0.38877,1.41407-0.00237c0.38891-0.39021,0.38891-1.02149,0-1.4117l-1.41407-1.41406l1.41455-1.41455L20.294,7.94824c0.39296,0.38799,1.02604,0.38396,1.41403-0.009C22.09254,7.5498,22.09253,6.9236,21.708,6.53418z"
  }));
}
var uim_key_skeleton_alt_default = UimKeySkeletonAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-keyhole-circle.js
var React166 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimKeyholeCircle(props) {
  return React166.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React166.createElement("path", {
    opacity: 1,
    d: "M14 10a2 2 0 1 0-3 1.723V15a1 1 0 0 0 2 0v-3.277A1.991 1.991 0 0 0 14 10Z"
  }), React166.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 9.723V15a1 1 0 0 1-2 0v-3.277a2 2 0 1 1 2 0Z"
  }));
}
var uim_keyhole_circle_default = UimKeyholeCircle;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-keyhole-square.js
var React167 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimKeyholeSquare(props) {
  return React167.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React167.createElement("path", {
    opacity: 1,
    d: "M14 10a2 2 0 1 0-3 1.723V15a1 1 0 0 0 2 0v-3.277A1.991 1.991 0 0 0 14 10Z"
  }), React167.createElement("path", {
    opacity: 0.5,
    d: "M19 2H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm-6 9.723V15a1 1 0 0 1-2 0v-3.277a2 2 0 1 1 2 0Z"
  }));
}
var uim_keyhole_square_default = UimKeyholeSquare;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-keyhole-square-full.js
var React168 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimKeyholeSquareFull(props) {
  return React168.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React168.createElement("path", {
    opacity: 1,
    d: "M14,10a2,2,0,1,0-3,1.7226V15a1,1,0,0,0,2,0V11.7226A1.99146,1.99146,0,0,0,14,10Z"
  }), React168.createElement("path", {
    opacity: 0.5,
    d: "M21,2H3A.99943.99943,0,0,0,2,3V21a.99943.99943,0,0,0,1,1H21a.99943.99943,0,0,0,1-1V3A.99943.99943,0,0,0,21,2Zm-8,9.7226V15a1,1,0,0,1-2,0V11.7226a2,2,0,1,1,2,0Z"
  }));
}
var uim_keyhole_square_full_default = UimKeyholeSquareFull;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-layer-group.js
var React169 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLayerGroup(props) {
  return React169.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React169.createElement("path", {
    opacity: 0.25,
    d: "M12,14.19531c-0.17551-0.00004-0.34793-0.04618-0.5-0.13379l-9-5.19726C2.02161,8.58794,1.85779,7.97612,2.13411,7.49773C2.22187,7.34579,2.34806,7.2196,2.5,7.13184l9-5.19336c0.30964-0.17774,0.69036-0.17774,1,0l9,5.19336c0.4784,0.27632,0.64221,0.88814,0.36589,1.36653C21.77813,8.65031,21.65194,8.7765,21.5,8.86426l-9,5.19726C12.34793,14.14913,12.17551,14.19527,12,14.19531z"
  }), React169.createElement("path", {
    opacity: 0.5,
    d: "M21.5,11.13184l-1.96411-1.13337L12.5,14.06152c-0.30947,0.17839-0.69053,0.17839-1,0L4.46411,9.99847L2.5,11.13184c-0.47839,0.27632-0.64221,0.88814-0.36589,1.36653C2.22187,12.65031,2.34806,12.7765,2.5,12.86426l9,5.19726c0.30947,0.17838,0.69053,0.17838,1,0l9-5.19726c0.4784-0.27632,0.64221-0.88814,0.36589-1.36653C21.77813,11.34579,21.65194,11.2196,21.5,11.13184z"
  }), React169.createElement("path", {
    opacity: 1,
    d: "M21.5,15.13184l-1.96411-1.13337L12.5,18.06152c-0.30947,0.17838-0.69053,0.17838-1,0l-7.03589-4.06305L2.5,15.13184c-0.47839,0.27632-0.64221,0.88814-0.36589,1.36653C2.22187,16.65031,2.34806,16.7765,2.5,16.86426l9,5.19726c0.30947,0.17838,0.69053,0.17838,1,0l9-5.19726c0.4784-0.27632,0.64221-0.88814,0.36589-1.36653C21.77813,15.34579,21.65194,15.2196,21.5,15.13184z"
  }));
}
var uim_layer_group_default = UimLayerGroup;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-layers-alt.js
var React170 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLayersAlt(props) {
  return React170.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React170.createElement("path", {
    opacity: 0.25,
    d: "M21 2H9a1 1 0 0 0-1 .999V7h8a1 1 0 0 1 1 .999V16h4a1 1 0 0 0 1-.999V3a1 1 0 0 0-.999-1H21z"
  }), React170.createElement("path", {
    opacity: 1,
    d: "M3 12h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"
  }), React170.createElement("path", {
    opacity: 0.5,
    d: "M16 7H6a1 1 0 0 0-1 .999V12h6a1 1 0 0 1 1 .999V19h4a1 1 0 0 0 1-.999V8a1 1 0 0 0-.999-1H16z"
  }));
}
var uim_layers_alt_default = UimLayersAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-left-indent.js
var React171 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLeftIndent(props) {
  return React171.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React171.createElement("path", {
    opacity: 0.5,
    d: "M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm8 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8-4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }), React171.createElement("path", {
    opacity: 1,
    d: "M21 14.666a.999.999 0 0 1-.64-.231l-2-1.667a1 1 0 0 1 0-1.536l2-1.667a1 1 0 0 1 1.64.769v3.333a1 1 0 0 1-1 1Z"
  }));
}
var uim_left_indent_default = UimLeftIndent;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-left-indent-alt.js
var React172 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLeftIndentAlt(props) {
  return React172.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React172.createElement("path", {
    opacity: 0.5,
    d: "M21 19h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0 4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), React172.createElement("path", {
    opacity: 1,
    d: "M9 19a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1zm-4-4.333a.999.999 0 0 1-.64-.231l-2-1.667a1 1 0 0 1 0-1.538l2-1.667a1 1 0 0 1 1.28 1.538L4.562 12l1.078.898A1 1 0 0 1 5 14.667z"
  }));
}
var uim_left_indent_alt_default = UimLeftIndentAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-line.js
var React173 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLine(props) {
  return React173.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React173.createElement("path", {
    opacity: 0.5,
    d: "M18.223 14.278c-.041.06-.087.116-.136.17l-.004.004a6.36 6.36 0 0 1-.798.796c-2.03 1.876-5.37 4.109-5.81 3.764-.383-.299.63-1.764-.54-2.007a9.241 9.241 0 0 1-.243-.031h-.002c-3.437-.489-6.047-2.893-6.047-5.785 0-3.245 3.285-5.876 7.338-5.876s7.337 2.63 7.337 5.876a5.021 5.021 0 0 1-1.095 3.089z"
  }), React173.createElement("path", {
    opacity: 1,
    d: "M17.907 2H6.093A4.093 4.093 0 0 0 2 6.093v11.814A4.093 4.093 0 0 0 6.093 22h11.814A4.093 4.093 0 0 0 22 17.907V6.093A4.093 4.093 0 0 0 17.907 2zm.316 12.278a1.53 1.53 0 0 1-.136.17l-.004.004a6.364 6.364 0 0 1-.798.796c-2.03 1.876-5.37 4.109-5.81 3.764-.383-.299.631-1.764-.54-2.007a9.284 9.284 0 0 1-.243-.031h-.002c-3.437-.489-6.047-2.893-6.047-5.785 0-3.245 3.285-5.876 7.338-5.876s7.337 2.63 7.337 5.876a5.022 5.022 0 0 1-1.095 3.089z"
  }), React173.createElement("path", {
    opacity: 1,
    d: "M9.203 12.265H8.138V9.842a.384.384 0 0 0-.383-.383h-.032a.384.384 0 0 0-.382.383v2.838c0 .211.171.382.382.383h1.48a.384.384 0 0 0 .383-.383v-.032a.384.384 0 0 0-.383-.383zm4.572-2.806h-.032a.384.384 0 0 0-.382.383v1.666l-1.383-1.855a.383.383 0 0 0-.333-.194h-.032a.384.384 0 0 0-.382.383v2.838c0 .211.171.382.382.383h.032a.384.384 0 0 0 .383-.383v-1.697l1.393 1.903a.401.401 0 0 0 .028.038.32.32 0 0 0 .15.11c.045.019.095.029.144.029h.032a.379.379 0 0 0 .18-.045.27.27 0 0 0 .092-.07.382.382 0 0 0 .111-.268V9.842a.384.384 0 0 0-.383-.383zm-3.498 0h.032c.212 0 .383.171.383.383v2.838a.383.383 0 0 1-.383.383h-.032a.383.383 0 0 1-.382-.383V9.842c0-.212.17-.383.382-.383zm6.234.007h-1.48a.384.384 0 0 0-.383.383v2.838c0 .21.172.382.383.382h1.48a.384.384 0 0 0 .382-.382v-.032a.384.384 0 0 0-.382-.383h-1.066v-.606h1.066a.384.384 0 0 0 .382-.382v-.032a.384.384 0 0 0-.382-.383h-1.066v-.606h1.066a.384.384 0 0 0 .382-.383V9.85a.384.384 0 0 0-.382-.383z"
  }));
}
var uim_line_default = UimLine;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-line-spacing.js
var React174 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLineSpacing(props) {
  return React174.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React174.createElement("path", {
    opacity: 0.5,
    d: "M21 8H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2zm0 5H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2z"
  }), React174.createElement("path", {
    opacity: 1,
    d: "M4.667 18.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 2 0v11a1 1 0 0 1-1 1Z"
  }), React174.createElement("path", {
    opacity: 0.5,
    d: "M21 18H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2Z"
  }), React174.createElement("path", {
    opacity: 1,
    d: "M6.334 9a.997.997 0 0 1-.77-.36l-.897-1.078-.898 1.079A1 1 0 0 1 2.23 7.359l1.667-2A1.002 1.002 0 0 1 4.667 5a1 1 0 0 1 .769.36l1.666 2A1 1 0 0 1 6.334 9zM4.667 19a1.002 1.002 0 0 1-.769-.36l-1.667-2a1 1 0 1 1 1.538-1.28l.898 1.078.897-1.078a1 1 0 0 1 1.538 1.28l-1.666 2a1 1 0 0 1-.769.36z"
  }));
}
var uim_line_spacing_default = UimLineSpacing;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-link-h.js
var React175 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLinkH(props) {
  return React175.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React175.createElement("path", {
    opacity: 1,
    d: "M10 17H7A5 5 0 0 1 7 7h3a1 1 0 0 1 0 2H7a3 3 0 0 0 0 6h3a1 1 0 0 1 0 2zm7 0h-3a1 1 0 0 1 0-2h3a3 3 0 0 0 0-6h-3a1 1 0 0 1 0-2h3a5 5 0 0 1 0 10z"
  }), React175.createElement("path", {
    opacity: 0.5,
    d: "M15 13H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z"
  }));
}
var uim_link_h_default = UimLinkH;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-linkedin.js
var React176 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLinkedin(props) {
  return React176.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React176.createElement("path", {
    opacity: 0.5,
    d: "M5.086 9.711h3.002v9.031H5.086zM6.587 8.478h-.02a1.565 1.565 0 1 1 .04-3.12 1.565 1.565 0 1 1-.02 3.12zm12.325 10.264H15.91v-4.83c0-1.215-.434-2.043-1.52-2.043a1.643 1.643 0 0 0-1.54 1.098c-.078.236-.111.484-.1.732v5.043H9.75c0-.003.04-8.184 0-9.03h3.002v1.28a2.978 2.978 0 0 1 2.705-1.493c1.975 0 3.456 1.291 3.456 4.065v5.178z"
  }), React176.createElement("path", {
    opacity: 1,
    d: "M20.468 2H3.532a1.452 1.452 0 0 0-1.47 1.433v17.135c.011.8.669 1.442 1.47 1.432h16.936a1.451 1.451 0 0 0 1.47-1.432V3.433A1.451 1.451 0 0 0 20.467 2zM8.088 18.742H5.086V9.711h3.002v9.031zM6.833 8.48a1.57 1.57 0 0 1-.246-.002h-.02a1.565 1.565 0 1 1 .04-3.12 1.565 1.565 0 0 1 .226 3.122zm12.079 10.262H15.91v-4.83c0-1.215-.434-2.043-1.52-2.043a1.643 1.643 0 0 0-1.54 1.098 2.06 2.06 0 0 0-.1.732v5.043H9.75c0-.003.04-8.184 0-9.03h3.002v1.28a2.978 2.978 0 0 1 2.705-1.493c1.975 0 3.456 1.291 3.456 4.065v5.178z"
  }));
}
var uim_linkedin_default = UimLinkedin;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-linkedin-alt.js
var React177 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLinkedinAlt(props) {
  return React177.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React177.createElement("path", {
    opacity: 1,
    d: "M5.004 7h-.029a2.235 2.235 0 1 1 .057-4.457A2.235 2.235 0 1 1 5.004 7ZM3.018 10h4v12h-4zM17.518 10a4.473 4.473 0 0 0-3.5 1.703V10h-4v12h4v-5.5a2 2 0 0 1 4 0V22h4v-7.5a4.5 4.5 0 0 0-4.5-4.5Z",
    "data-name": "Brand Logos"
  }));
}
var uim_linkedin_alt_default = UimLinkedinAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-linux.js
var React178 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLinux(props) {
  return React178.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React178.createElement("path", {
    opacity: 0.25,
    d: "M12.6 6.5c.1.1.2.1.4.2.1 0 .3.1.5.2h.1c.2-.3.3-.6.3-.9.1-.6-.4-1.2-1-1.2-.6.1-1 .7-1 1.3v.1c.2 0 .5.1.7.3zm4.5 8c-.3-.2-.6-.2-1-.3-.2-.9-.5-1.7-.9-2.5-.6-1.2-1.1-2.4-1.4-3.7-.2.3-.5.5-.9.6-.1.1-.3.1-.4.2-.3.2-.7.4-1.1.4h-.1c-.4 0-.7-.2-.9-.4-.1-.1-.2-.2-.3-.2-.1 0-.1-.1-.2-.1-.1 1.5-1 3.2-1.5 4.3-.3.8-.5 1.6-.5 2.4-.8-1.2-.2-2.7.1-3.3.4-.8.4-.9.3-.8-.7 1.1-2.1 3.5-.1 4.8 2.1 1.3 2.2 2.6 1 2.5.1.2.3.4.4.5 1.2 1 2.9 1.1 4.2.3 0-.1.1-.3.1-.4.1-.3.2-.7.2-1 .1-1.1.1-2.2.9-2.6.5-.2 1.2-.1 1.6.2.1.1.2.1.3.2.2.1.4.1.5.1h.6c.3-.4-.1-.8-.9-1.2zm-6.9-7.7.1-.1c.2-.3.5-.4.8-.5V6c0-.6-.4-1.1-.8-1.1-.3.1-.6.6-.6 1.2 0 .3.1.6.3.8.1 0 .2-.1.2-.1z"
  }), React178.createElement("path", {
    opacity: 0.25,
    d: "M8.5 17.4s0 .1 0 0c-.1-.1-.1-.3-.2-.4.1.2.1.3.2.4z"
  }), React178.createElement("path", {
    opacity: 0.5,
    d: "M15.4 22h-.2c-.6-.1-1.1-.4-1.3-1-.2-.7-.2-1.5.2-2.2.1-.3.2-.7.2-1 .1-1.1.1-2.2.9-2.6.5-.2 1.2-.1 1.6.2.1.1.2.1.3.2.2.1.4.1.5.1.4-.1.8 0 1.1.3.3.3.4.6.5 1 0 .2.1.5.2.6.5.5.7 1 .6 1.3-.1.5-.6.7-1.1 1-.5.2-1 .5-1.4.9-.5.7-1.3 1.1-2.1 1.2z"
  }), React178.createElement("path", {
    opacity: 1,
    d: "M17.9 15.9c-.4.5-1 .8-1.6.8-.6-.1-.8-.9-.7-1.5.1-.7.7-.7 1.5-.4.8.3 1.1.7.8 1.1zm-5.3-9.3c.1.1.3.1.4.2.2-.2.2-.4.2-.6 0-.4-.2-.7-.4-.7s-.5.3-.5.7v.3c.1.1.2.1.3.1zm-2.2.2.3-.3v-.3c0-.3-.2-.6-.4-.5-.2 0-.3.3-.3.6.1.3.3.5.4.5z"
  }), React178.createElement("path", {
    opacity: 1,
    d: "M17.3 10.8c-.8-1.3-2-2.1-2-3.7 0-1.9.2-5.4-3.3-5.1-3.5.3-2.5 4-2.6 5.3 0 1.1-.5 2.2-1.3 3.1-.1.1-.2.3-.3.4-.9 1.3-1.9 3-1.8 4.6.2-.1.4-.1.5-.1.8.1 1.2.9 1.7 1.8.1.1.1.3.2.4l.6.9.1.1c1.2.1 1.2-1.2-1-2.5-2-1.3-.6-3.7.1-4.8.1-.1.1 0-.3.8-.3.6-.9 2.1-.1 3.2 0-.8.2-1.6.5-2.4.5-1 1.4-2.8 1.5-4.3-.1-.2-.3-.5-.3-.8 0-.2.1-.4.3-.6.1 0 .2-.1.3-.2-.2-.2-.4-.5-.4-.8 0-.6.3-1.1.7-1.1.4 0 .7.4.8 1.1v.2c.2-.1.5-.1.7 0v-.1c-.1-.6.3-1.2 1-1.3.6.1 1.1.6 1 1.2 0 .3-.1.6-.3.9.3.1.5.4.5.7 0 .2-.1.3-.2.5.4 1.3.8 2.5 1.4 3.7.4.8.7 1.6.9 2.5.3 0 .7.1 1 .3.3.2.6.3.8.5.1.1.1.2.2.2 0 0 0 .1.1.1v.3c.1 0 .3.1.4.2.5-2-.5-3.9-1.4-5.2z"
  }), React178.createElement("path", {
    opacity: 0.7,
    d: "M11.4 8.5c-.5 0-1-.3-1.4-.7l-.1-.1c-.1 0-.1 0-.1-.1s.1-.1.1-.1c.1 0 .1.1.3.2.3.4.7.6 1.2.6.5-.1 1-.2 1.4-.5.2-.1.4-.2.7-.3.1 0 .1 0 .1.1s0 .1-.1.1c-.2.1-.4.1-.6.3-.5.3-1 .5-1.5.5z"
  }), React178.createElement("path", {
    opacity: 0.5,
    d: "M13.5 6.9c-.2-.1-.3-.1-.5-.2-.1 0-.3-.1-.4-.2-.6-.6-1.7-.5-2.3.2l-.1.1s-.2.2-.4.3c-.2.2-.3.4-.3.6.1.4.3.7.7.9.1.1.2.2.3.2.2.3.6.4.9.4h.1c.4 0 .8-.1 1.1-.4.1-.1.2-.2.4-.2.5-.1 1-.5 1.1-1.1 0-.2-.3-.5-.6-.6zm-.1.8c-.2.1-.4.1-.6.3-.4.3-.9.5-1.5.6-.5 0-1-.3-1.4-.7l-.1-.1c-.1 0-.1 0-.1-.1s.1-.1.1-.1c.1 0 .1.1.3.2.3.4.7.6 1.2.6.5-.1 1-.2 1.4-.5.2-.1.4-.2.7-.3.1-.1.1-.1 0 .1.1-.1.1 0 0 0zm-5 14.1c-.6 0-1.2-.2-1.7-.5-.5-.2-1-.4-1.6-.4-.7-.1-1.2-.1-1.5-.6-.2-.4-.2-1 0-1.4v-.7c-.1-.4-.1-.7.1-1.1.2-.3.5-.6.9-.7.2 0 .4-.1.5-.3.1-.1.2-.2.2-.3.2-.5.8-.8 1.3-.8.9.1 1.4 1.1 1.9 2.2l.6.9c.5.7 1.1 1.3 1 2 0 .5-.3 1-.8 1.2-.2.4-.6.5-.9.5z"
  }), React178.createElement("path", {
    opacity: 1,
    d: "M13.8 19.4c-1.3.7-3 .6-4.2-.4.1.2.2.3.3.5v.1c.1.3.2.5.2.8 0 .2-.1.3-.1.5.5 0 1.1-.2 2-.3.5 0 1.1.1 1.8.2-.1-.5-.1-1 0-1.4z"
  }));
}
var uim_linux_default = UimLinux;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-list-ui-alt.js
var React179 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimListUiAlt(props) {
  return React179.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React179.createElement("path", {
    opacity: 1,
    d: "M21.5 8h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 5h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm0 5h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
  }), React179.createElement("circle", {
    cx: 3.5,
    cy: 7,
    r: 1,
    opacity: 1
  }), React179.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 1,
    opacity: 1
  }), React179.createElement("circle", {
    cx: 11.5,
    cy: 17,
    r: 1,
    opacity: 1
  }));
}
var uim_list_ui_alt_default = UimListUiAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-list-ul.js
var React180 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimListUl(props) {
  return React180.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React180.createElement("path", {
    opacity: 1,
    d: "M21 8H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 5H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 5H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zM3 8a1 1 0 0 1-.38-.08 1.151 1.151 0 0 1-.33-.21 1.162 1.162 0 0 1-.21-.33.946.946 0 0 1 0-.76 1.149 1.149 0 0 1 .21-.33.998.998 0 0 1 1.09-.21 1.034 1.034 0 0 1 .33.21 1.158 1.158 0 0 1 .21.33.941.941 0 0 1 0 .76 1.171 1.171 0 0 1-.21.33A.992.992 0 0 1 3 8zm0 5a1 1 0 0 1-.38-.08 1.151 1.151 0 0 1-.33-.21 1.162 1.162 0 0 1-.21-.33.946.946 0 0 1 0-.76 1.03 1.03 0 0 1 .21-.33 1.151 1.151 0 0 1 .33-.21.999.999 0 0 1 1.09.21 1.037 1.037 0 0 1 .21.33.941.941 0 0 1 0 .76 1.171 1.171 0 0 1-.21.33 1.154 1.154 0 0 1-.33.21A1 1 0 0 1 3 13zm0 5a1 1 0 0 1-.38-.08 1.151 1.151 0 0 1-.33-.21.991.991 0 0 1-.21-1.09 1.03 1.03 0 0 1 .21-.33 1.027 1.027 0 0 1 .33-.21.995.995 0 0 1 .76 0 1.034 1.034 0 0 1 .33.21 1.037 1.037 0 0 1 .21.33.99.99 0 0 1-.21 1.09 1.154 1.154 0 0 1-.33.21A1 1 0 0 1 3 18z"
  }));
}
var uim_list_ul_default = UimListUl;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-lock.js
var React181 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLock(props) {
  return React181.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React181.createElement("path", {
    opacity: 0.5,
    d: "M16 11H8a1 1 0 0 1-1-1V7a5 5 0 0 1 10 0v3a1 1 0 0 1-1 1ZM9 9h6V7a3 3 0 0 0-6 0Z"
  }), React181.createElement("rect", {
    width: 16,
    height: 13,
    x: 4,
    y: 9,
    opacity: 1,
    rx: 3
  }));
}
var uim_lock_default = UimLock;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-lock-access.js
var React182 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLockAccess(props) {
  return React182.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React182.createElement("path", {
    opacity: 1,
    d: "M21 10c-.6 0-1-.4-1-1V4h-5c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1zM3 10c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1H4v5c0 .6-.4 1-1 1zm6 12H3c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1v5h5c.6 0 1 .4 1 1s-.4 1-1 1zm12 0h-6c-.6 0-1-.4-1-1s.4-1 1-1h5v-5c0-.6.4-1 1-1s1 .4 1 1v6c0 .6-.4 1-1 1z"
  }), React182.createElement("path", {
    opacity: 0.5,
    d: "M9 10h6c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM11 9c0-.6.4-1 1-1s1 .4 1 1v1h2V9c0-1.7-1.3-3-3-3S9 7.3 9 9v1h2V9z"
  }));
}
var uim_lock_access_default = UimLockAccess;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-lock-alt.js
var React183 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLockAlt(props) {
  return React183.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React183.createElement("path", {
    opacity: 0.5,
    d: "M9 7a3 3 0 1 1 6 0v2h2V7A5 5 0 0 0 7 7v2h2V7zM12 18a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1z"
  }), React183.createElement("path", {
    opacity: 1,
    d: "M17 9H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm-4 8a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0v3z"
  }));
}
var uim_lock_alt_default = UimLockAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-lock-open-alt.js
var React184 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLockOpenAlt(props) {
  return React184.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React184.createElement("path", {
    opacity: 0.5,
    d: "M8 11a1 1 0 0 1-1-.999V7a5.002 5.002 0 0 1 8.532-3.542 5.078 5.078 0 0 1 1.307 2.293 1 1 0 1 1-1.937.501v-.003a3.057 3.057 0 0 0-.786-1.379A3.002 3.002 0 0 0 9 7v3a1 1 0 0 1-.999 1H8zM13.5 14.5a1.5 1.5 0 1 0-3 0c0 .443.195.836.5 1.11V17.002A1 1 0 0 0 12 18h.001A1 1 0 0 0 13 17v-1.39c.305-.274.5-.667.5-1.11z"
  }), React184.createElement("path", {
    opacity: 1,
    d: "M17 9H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm-4 6.61V17a1 1 0 0 1-.999 1H12a1 1 0 0 1-1-.999V15.61a1.49 1.49 0 0 1-.5-1.11 1.5 1.5 0 1 1 3 0c0 .443-.195.836-.5 1.11z"
  }));
}
var uim_lock_open_alt_default = UimLockOpenAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-lottiefiles.js
var React185 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimLottiefiles(props) {
  return React185.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React185.createElement("path", {
    opacity: 0.5,
    d: "M7 18a1 1 0 0 1 0-2c1.66 0 2.856-2.177 4.124-4.482C12.616 8.805 14.159 6 17 6a1 1 0 0 1 0 2c-1.66 0-2.856 2.177-4.124 4.482C11.384 15.195 9.841 18 7 18Z"
  }), React185.createElement("path", {
    opacity: 1,
    d: "M19 2H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm-2 6c-1.66 0-2.856 2.177-4.124 4.482C11.384 15.195 9.841 18 7 18a1 1 0 0 1 0-2c1.66 0 2.856-2.177 4.124-4.482C12.616 8.805 14.159 6 17 6a1 1 0 0 1 0 2Z"
  }));
}
var uim_lottiefiles_default = UimLottiefiles;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-master-card.js
var React186 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimMasterCard(props) {
  return React186.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React186.createElement("path", {
    opacity: 0.5,
    d: "M15.273 18.728A6.728 6.728 0 1 1 22 11.999V12a6.735 6.735 0 0 1-6.727 6.728z"
  }), React186.createElement("path", {
    opacity: 1,
    d: "M8.727 18.728A6.728 6.728 0 1 1 15.455 12a6.735 6.735 0 0 1-6.728 6.728z"
  }));
}
var uim_master_card_default = UimMasterCard;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-medium-m.js
var React187 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimMediumM(props) {
  return React187.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React187.createElement("path", {
    opacity: 1,
    d: "M22,6.41668h-.791a.89762.89762,0,0,0-.709.69479v9.83021a.83938.83938,0,0,0,.709.64164H22V19.9167H14.83334V17.58332h1.50008V7.25h-.07353L12.75706,19.9167H10.04512L6.58751,7.25H6.5V17.58332H8V19.9167H2V17.58332h.76835A.841.841,0,0,0,3.5,16.94168V7.11139a.89588.89588,0,0,0-.73166-.69479H2V4.0833H9.50266L11.96593,13.25h.068L14.51976,4.0833H22V6.41668",
    "data-name": "Brand Logos"
  }));
}
var uim_medium_m_default = UimMediumM;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-microscope.js
var React188 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimMicroscope(props) {
  return React188.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React188.createElement("path", {
    opacity: 0.25,
    d: "M11.441 13.604a1 1 0 0 1-.707-.293L7.198 9.772a1 1 0 0 1 0-1.414l6.363-6.363a.997.997 0 0 1 .39-.242l2.121-.707a1 1 0 0 1 1.024.242l2.122 2.121a1 1 0 0 1 .241 1.024l-.708 2.122a.991.991 0 0 1-.241.39l-6.362 6.366a1 1 0 0 1-.707.293Zm6.362-7.366Z"
  }), React188.createElement("path", {
    opacity: 0.5,
    d: "m7.198 9.772-1.416 1.415a1 1 0 0 0 0 1.415l2.122 2.12a1 1 0 0 0 1.414 0l1.414-1.413Z"
  }), React188.createElement("path", {
    opacity: 1,
    d: "M8 18.005H4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Z"
  }), React188.createElement("path", {
    opacity: 0.5,
    d: "M20 23.005H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Z"
  }), React188.createElement("path", {
    opacity: 0.25,
    d: "M14.816 21.005a2.965 2.965 0 0 0 .184-1 3 3 0 0 0-6 0 2.965 2.965 0 0 0 .184 1Z"
  }), React188.createElement("path", {
    opacity: 0.5,
    d: "m17.873 7.583-1.415 1.415A5.955 5.955 0 0 1 18 13.005a6.048 6.048 0 0 1-3.455 5.431 2.971 2.971 0 0 1 .455 1.57 2.645 2.645 0 0 1-.04.407A8.044 8.044 0 0 0 20 13.005a7.945 7.945 0 0 0-2.127-5.422zM9.42 18.499a7.036 7.036 0 0 1-1.095-.56.983.983 0 0 1-.326.066H5.326a8.873 8.873 0 0 0 3.72 2.472A2.69 2.69 0 0 1 9 20.005a2.966 2.966 0 0 1 .42-1.506z"
  }));
}
var uim_microscope_default = UimMicroscope;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-microsoft.js
var React189 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimMicrosoft(props) {
  return React189.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React189.createElement("rect", {
    width: 9.503,
    height: 9.503,
    x: 2,
    y: 2,
    opacity: 1
  }), React189.createElement("rect", {
    width: 9.503,
    height: 9.503,
    x: 12.493,
    y: 2,
    opacity: 1
  }), React189.createElement("rect", {
    width: 9.503,
    height: 9.503,
    x: 2,
    y: 12.497,
    opacity: 1
  }), React189.createElement("rect", {
    width: 9.503,
    height: 9.503,
    x: 12.493,
    y: 12.497,
    opacity: 1
  }));
}
var uim_microsoft_default = UimMicrosoft;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-minus-square-full.js
var React190 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimMinusSquareFull(props) {
  return React190.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React190.createElement("path", {
    opacity: 1,
    d: "M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"
  }), React190.createElement("path", {
    opacity: 0.5,
    d: "M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-4 11H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"
  }));
}
var uim_minus_square_full_default = UimMinusSquareFull;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-multiply.js
var React191 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimMultiply(props) {
  return React191.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React191.createElement("path", {
    opacity: 1,
    d: "M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A.997.997 0 0 1 7 18Z"
  }), React191.createElement("path", {
    opacity: 1,
    d: "M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18Z"
  }));
}
var uim_multiply_default = UimMultiply;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-object-group.js
var React192 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimObjectGroup(props) {
  return React192.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React192.createElement("path", {
    opacity: 0.5,
    d: "M11 10h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z"
  }), React192.createElement("path", {
    opacity: 1,
    d: "M10 11a1 1 0 0 1 1-1h3V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2v-3zM4 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm16 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
  }), React192.createElement("path", {
    opacity: 0.25,
    d: "M18.278 5a1.936 1.936 0 0 1 0-2H5.722a1.936 1.936 0 0 1 0 2h12.556zM20 18c.352.002.697.098 1 .278V5.722a1.936 1.936 0 0 1-2 0v12.556c.303-.18.648-.276 1-.278zM4 18c.352.002.697.098 1 .278V5.722a1.936 1.936 0 0 1-2 0v12.556c.303-.18.648-.276 1-.278zm14.278 1H5.722a1.936 1.936 0 0 1 0 2h12.556a1.936 1.936 0 0 1 0-2z"
  }));
}
var uim_object_group_default = UimObjectGroup;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-object-ungroup.js
var React193 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimObjectUngroup(props) {
  return React193.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React193.createElement("path", {
    opacity: 0.5,
    d: "M4 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002zM14 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002zM14 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002z"
  }), React193.createElement("path", {
    opacity: 1,
    d: "M10 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002zM10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002zM20 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002zM20 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002z"
  }), React193.createElement("path", {
    opacity: 0.25,
    d: "M12.278 5a1.936 1.936 0 0 1 0-2H5.722a1.936 1.936 0 0 1 0 2h6.556zM4 12c.352.002.697.098 1 .278V5.722a1.936 1.936 0 0 1-2 0v6.556c.303-.18.648-.276 1-.278z"
  }), React193.createElement("path", {
    opacity: 0.5,
    d: "M20 18c.352.002.697.098 1 .278v-6.556a1.936 1.936 0 0 1-2 0v6.556c.303-.18.648-.276 1-.278zm-10 0c.352.002.697.098 1 .278v-6.556a1.936 1.936 0 0 1-2 0v6.556c.303-.18.648-.276 1-.278z"
  }), React193.createElement("path", {
    opacity: 0.25,
    d: "M12.278 13H11v2h1.278a1.936 1.936 0 0 1 0-2zM9 15v-2H5.722a1.936 1.936 0 0 1 0 2H9z"
  }), React193.createElement("path", {
    opacity: 0.5,
    d: "M18.278 19h-6.556a1.936 1.936 0 0 1 0 2h6.556a1.936 1.936 0 0 1 0-2zm0-8a1.936 1.936 0 0 1 0-2h-6.556a1.936 1.936 0 0 1 0 2h6.556z"
  }), React193.createElement("path", {
    opacity: 0.25,
    d: "M15 9V5.722a1.936 1.936 0 0 1-2 0V9h2zm-2 2v1.278a1.936 1.936 0 0 1 2 0V11h-2z"
  }));
}
var uim_object_ungroup_default = UimObjectUngroup;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-okta.js
var React194 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimOkta(props) {
  return React194.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React194.createElement("path", {
    opacity: 1,
    d: "M11.998 2a10 10 0 1 0 10 10 9.995 9.995 0 0 0-10-10Zm0 15.01a5.01 5.01 0 1 1 5.01-5.01 5.014 5.014 0 0 1-5.01 5.01Z"
  }));
}
var uim_okta_default = UimOkta;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-opera.js
var React195 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimOpera(props) {
  return React195.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React195.createElement("path", {
    opacity: 1,
    d: "M11.996 2c-5.462 0-9.278 3.958-9.278 9.899C2.718 17.189 6.43 22 12.004 22c5.567 0 9.278-4.819 9.278-10.101 0-5.94-3.824-9.899-9.286-9.899Zm0 18.384c-3.397 0-3.77-5.013-3.77-8.71V11.6c0-3.996.598-8.23 3.748-8.23s3.786 4.361 3.786 8.357c0 3.696-.367 8.657-3.764 8.657Z"
  }));
}
var uim_opera_default = UimOpera;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-opera-alt.js
var React196 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimOperaAlt(props) {
  return React196.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React196.createElement("path", {
    opacity: 1,
    d: "M11.996 2c-5.462 0-9.278 3.958-9.278 9.899C2.718 17.189 6.43 22 12.004 22c5.567 0 9.278-4.819 9.278-10.101 0-5.94-3.824-9.899-9.286-9.899Zm0 16c-2.397 0-2.66-3.536-2.66-6.143v-.052C9.336 8.987 9.758 6 11.979 6s2.67 3.076 2.67 5.894c0 2.607-.258 6.106-2.654 6.106Z"
  }));
}
var uim_opera_alt_default = UimOperaAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-padlock.js
var React197 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimPadlock(props) {
  return React197.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React197.createElement("path", {
    opacity: 0.5,
    d: "M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2h2V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2h2V7zM13.5 14.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .4.2.8.5 1.1V17c0 .6.4 1 1 1s1-.4 1-1v-1.4c.3-.3.5-.7.5-1.1z"
  }), React197.createElement("path", {
    opacity: 1,
    d: "M17 9H7c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zm-4 6.6V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.4c-.3-.3-.5-.7-.5-1.1 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .4-.2.8-.5 1.1z"
  }));
}
var uim_padlock_default = UimPadlock;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-pagelines.js
var React198 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimPagelines(props) {
  return React198.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React198.createElement("path", {
    opacity: 1,
    d: "M15.1 14.006a10.743 10.743 0 0 1-.895 2.275 3.538 3.538 0 0 1 1.36-.456c1.957-.21 3.75 1.543 3.75 1.543s-1.38 2.092-3.34 2.299a4.954 4.954 0 0 1-3.337-1.194A10.786 10.786 0 0 1 4.67 22a.672.672 0 0 1 0-1.344 9.419 9.419 0 0 0 5.845-2.032 3.745 3.745 0 0 1-1.735-.243c-1.816-.76-2.536-3.162-2.536-3.162s2.215-1.167 4.028-.404a4.394 4.394 0 0 1 2.012 1.98 9.432 9.432 0 0 0 1.458-2.9 4.72 4.72 0 0 1-3.258-.076c-1.773-.852-2.376-3.284-2.376-3.284s2.275-1.056 4.049-.203a4.396 4.396 0 0 1 1.9 2.058 9.323 9.323 0 0 0 .076-1.01 6.819 6.819 0 0 1-2.518-4.03C11.268 4.582 13.71 2 13.71 2s3.002 1.901 3.346 4.664a6.993 6.993 0 0 1-1.583 4.726 8.957 8.957 0 0 1-.06.99 4.206 4.206 0 0 1 1.7-1.822c1.75-.905 4.054.085 4.054.085s-.532 2.449-2.282 3.35a5.154 5.154 0 0 1-3.786.013Zm0 0"
  }));
}
var uim_pagelines_default = UimPagelines;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-pagerduty.js
var React199 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimPagerduty(props) {
  return React199.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React199.createElement("rect", {
    width: 2.93,
    height: 5.327,
    x: 6,
    y: 16.673,
    opacity: 1
  }), React199.createElement("path", {
    opacity: 1,
    d: "M17.03363,2.9765C15.461,2.13947,14.3703,2,11.79584,2H6V14.12427h5.77045c2.29547,0,4.00763-.13953,5.51678-1.14142A5.769,5.769,0,0,0,19.78564,7.986,5.48737,5.48737,0,0,0,17.03363,2.9765Zm-4.591,8.61133h-3.513v-6.988l3.31006-.02539c3.01837-.038,4.52758,1.02729,4.52758,3.43695C16.76727,10.59857,14.903,11.58783,12.44263,11.58783Z"
  }));
}
var uim_pagerduty_default = UimPagerduty;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-paperclip.js
var React200 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimPaperclip(props) {
  return React200.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React200.createElement("path", {
    opacity: 1,
    d: "M8.892 21.854a6.25 6.25 0 0 1-4.42-10.67l7.955-7.955a4.5 4.5 0 0 1 6.364 6.364l-6.895 6.894a2.816 2.816 0 0 1-3.89 0 2.75 2.75 0 0 1 .002-3.888l5.126-5.127a1 1 0 1 1 1.414 1.414l-5.126 5.127a.75.75 0 0 0 0 1.06.768.768 0 0 0 1.06 0l6.895-6.894a2.503 2.503 0 0 0 0-3.535 2.56 2.56 0 0 0-3.536 0l-7.955 7.955a4.25 4.25 0 1 0 6.01 6.01l6.188-6.187a1 1 0 1 1 1.414 1.414l-6.187 6.186a6.206 6.206 0 0 1-4.42 1.832Z"
  }));
}
var uim_paperclip_default = UimPaperclip;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-paragraph.js
var React201 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimParagraph(props) {
  return React201.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React201.createElement("path", {
    opacity: 1,
    d: "M13 15.5H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm8-5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
  }));
}
var uim_paragraph_default = UimParagraph;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-paypal.js
var React202 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimPaypal(props) {
  return React202.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React202.createElement("path", {
    opacity: 0.5,
    d: "M8.88188,19.94c-0.07709,0.48569-0.49587,0.84325-0.98764,0.84325H4.06249c-0.84674,0.00182-1.53463-0.68312-1.53646-1.52986c-0.00018-0.08553,0.00679-0.17093,0.02085-0.25529L5.13672,2.5918C5.28397,1.67638,6.07281,1.00247,7,1h6.21387c2.56054,0,4.4082,0.62012,5.49218,1.84277c1.04665,1.20585,1.44867,2.8419,1.08008,4.39551c-0.02148,0.13477-0.043,0.27051-0.07519,0.418c-0.82324,4.21777-3.65528,6.457-8.18555,6.457H9.80664L8.88188,19.94z M4.52246,19.31157l-0.00195,0.00684L4.52246,19.31157z M7.11328,2.89657l-0.001,0.002L7.11328,2.89657z"
  }), React202.createElement("path", {
    opacity: 1,
    d: "M20.43652,7.10449c-0.16614-0.18597-0.34869-0.35577-0.54498-0.508c-0.02191,0.2146-0.05493,0.42896-0.10541,0.64178c-0.02148,0.13477-0.04303,0.27051-0.0752,0.41797c-0.82324,4.21777-3.65527,6.45703-8.18555,6.45703H9.80664L8.8819,19.94c-0.07709,0.48572-0.49591,0.84326-0.98767,0.84326H6.72656l-0.08203,0.52045c-0.01196,0.07568-0.01801,0.15222-0.01807,0.22888C6.62616,22.34271,7.28265,22.99969,8.09277,23h3.23438c0.86566,0.00732,1.60815-0.61591,1.75104-1.46973l0.64062-4.03125l0.01074-0.05463h0.29883c4.03223,0,6.55078-1.99323,7.28516-5.76276C21.76788,10.10339,21.44214,8.40308,20.43652,7.10449z"
  }));
}
var uim_paypal_default = UimPaypal;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-pentagon.js
var React203 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimPentagon(props) {
  return React203.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React203.createElement("path", {
    opacity: 1,
    d: "M17.56249,21.55957H6.43749a1,1,0,0,1-.95116-.69141L2.04883,10.28809A.99881.99881,0,0,1,2.41211,9.1709l9-6.53906a.99648.99648,0,0,1,1.17578,0l9,6.53906a.99881.99881,0,0,1,.36328,1.11719l-3.4375,10.58007A1,1,0,0,1,17.56249,21.55957Z"
  }));
}
var uim_pentagon_default = UimPentagon;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-plus-square.js
var React204 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimPlusSquare(props) {
  return React204.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React204.createElement("path", {
    opacity: 1,
    d: "M17 11h-4V7a1 1 0 0 0-2 0v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z"
  }), React204.createElement("path", {
    opacity: 0.5,
    d: "M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-4 11h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2Z"
  }));
}
var uim_plus_square_default = UimPlusSquare;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-polygon.js
var React205 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimPolygon(props) {
  return React205.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React205.createElement("path", {
    opacity: 1,
    d: "M16.5,20.794h-9a.99983.99983,0,0,1-.86621-.5L2.13379,12.5a1.002,1.002,0,0,1,0-1l4.5-7.79395a.99983.99983,0,0,1,.86621-.5h9a.99987.99987,0,0,1,.86621.5l4.5,7.794a1.002,1.002,0,0,1,0,1l-4.5,7.79395A.99987.99987,0,0,1,16.5,20.794Z"
  }));
}
var uim_polygon_default = UimPolygon;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-previous.js
var React206 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimPrevious(props) {
  return React206.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React206.createElement("path", {
    opacity: 1,
    d: "M16 17a.99676.99676 0 0 1-.707-.293l-4-4a.99962.99962 0 0 1 0-1.41406l4-4A.99989.99989 0 0 1 16.707 8.707L13.41406 12l3.293 3.293A1 1 0 0 1 16 17zM8 17a1 1 0 0 1-1-1V8A1 1 0 0 1 9 8v8A1 1 0 0 1 8 17z"
  }));
}
var uim_previous_default = UimPrevious;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-process.js
var React207 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimProcess(props) {
  return React207.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React207.createElement("path", {
    opacity: 1,
    d: "M8.625 8.5h-4.5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v3.5h3.5a1 1 0 0 1 0 2Z"
  }), React207.createElement("path", {
    opacity: 1,
    d: "M21 13a1 1 0 0 1-1-1A7.995 7.995 0 0 0 5.08 8.001a1 1 0 0 1-1.731-1.002A9.995 9.995 0 0 1 22 12a1 1 0 0 1-1 1zm-1.125 9a1 1 0 0 1-1-1v-3.5h-3.5a1 1 0 0 1 0-2h4.5a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1z"
  }), React207.createElement("path", {
    opacity: 1,
    d: "M12 22A10.012 10.012 0 0 1 2 12a1 1 0 0 1 2 0 7.995 7.995 0 0 0 14.92 3.999 1 1 0 0 1 1.731 1.002A10.032 10.032 0 0 1 12 22Z"
  }));
}
var uim_process_default = UimProcess;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-react.js
var React208 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimReact(props) {
  return React208.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React208.createElement("path", {
    opacity: 1,
    d: "M19.108 12.376q-.176-.201-.371-.403.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571-1.465 1.698-2.057 3.376-1.457 4.415.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179 0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094 1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7 20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613-.508-.292-1.027-.563c.593-.249 1.176-.462 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97 20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665 19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333 1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01 20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324c-.569-.176-1.16-.393-1.762-.646q.509-.267 1.025-.565.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854-.79-.455-1.544-.969-.07-.91-.07-1.822 0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851.79.454 1.55.959.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688 20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188 18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188 0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682 19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238 1.766 1.766 0 0 1 .054 1.403Zm-8.819-6.141a1.786 1.786 0 1 0 2.44.654 1.786 1.786 0 0 0-2.44-.654Z"
  }));
}
var uim_react_default = UimReact;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-record-audio.js
var React209 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimRecordAudio(props) {
  return React209.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React209.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 6,
    opacity: 0.5
  }), React209.createElement("path", {
    opacity: 1,
    d: "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 16a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z"
  }));
}
var uim_record_audio_default = UimRecordAudio;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-reddit-alien-alt.js
var React210 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimRedditAlienAlt(props) {
  return React210.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React210.createElement("path", {
    opacity: 0.5,
    d: "M18.893 7a3.014 3.014 0 0 1-3-3.022 3 3 0 0 1 6-.023v.023a3.014 3.014 0 0 1-3 3.022zM11.8 23c-6.168 0-11-3.075-11-7s4.832-7 11-7 11 3.075 11 7-4.832 7-11 7z"
  }), React210.createElement("path", {
    opacity: 0.25,
    d: "M20.499 8.292a3.772 3.772 0 0 0-4.497 1.223c2.952.756 5.224 2.295 6.228 4.234.1-.161.194-.326.269-.5a3.779 3.779 0 0 0-2-4.957zM11.8 9c.39 0 .776.013 1.156.037l.856-5.705 2.087.71c0-.022-.006-.042-.006-.064a2.972 2.972 0 0 1 .653-1.828l-3.224-1.096a.999.999 0 0 0-1.312.798l-1.076 7.175c.287-.014.573-.027.866-.027zM7.592 9.516c-.088-.117-.172-.238-.273-.344a3.777 3.777 0 0 0-5.952 4.582c1.002-1.94 3.273-3.48 6.225-4.238z"
  }), React210.createElement("path", {
    opacity: 1,
    d: "M11.842 19.5a5.11 5.11 0 0 1-3.781-1.218 1 1 0 0 1 1.416-1.414c.68.5 1.525.726 2.365.632a3.375 3.375 0 0 0 2.368-.633 1 1 0 1 1 1.414 1.416 5.12 5.12 0 0 1-3.782 1.217zM10 14.002a1 1 0 1 0-1 1c.552-.001 1-.448 1-1zm6 0a1 1 0 1 0-1 1c.552-.001 1-.448 1-1z"
  }));
}
var uim_reddit_alien_alt_default = UimRedditAlienAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-redo.js
var React211 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimRedo(props) {
  return React211.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React211.createElement("path", {
    opacity: 1,
    d: "M19.875 8.5h-4.5a1 1 0 0 1 0-2h3.5V3a1 1 0 0 1 2 0v4.5a1 1 0 0 1-1 1Z"
  }), React211.createElement("path", {
    opacity: 1,
    d: "M12 22a10 10 0 1 1 8.651-15.001 1 1 0 0 1-1.73 1.002A7.99 7.99 0 1 0 20 12a1 1 0 0 1 2 0 10.011 10.011 0 0 1-10 10Z"
  }));
}
var uim_redo_default = UimRedo;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-refresh.js
var React212 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimRefresh(props) {
  return React212.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React212.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 3,
    opacity: 1
  }), React212.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10.016 10.016 0 0 0-7 2.877V3a1 1 0 1 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.218A7.98 7.98 0 0 1 20 12a1 1 0 0 0 2 0A10.012 10.012 0 0 0 12 2zm7.989 13.5h-4.5a1 1 0 0 0 0 2h2.293A7.98 7.98 0 0 1 4 12a1 1 0 0 0-2 0 9.986 9.986 0 0 0 16.989 7.133V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-1-1z"
  }));
}
var uim_refresh_default = UimRefresh;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-repeat.js
var React213 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimRepeat(props) {
  return React213.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React213.createElement("path", {
    opacity: 0.5,
    d: "M11.498 22a.997.997 0 0 1-.707-.293l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 1.414L10.412 18.5l1.793 1.793A1 1 0 0 1 11.498 22z"
  }), React213.createElement("path", {
    opacity: 0.5,
    d: "M21 4.5h-2a1 1 0 0 0 0 2h1v11h-8.588l-1 1 1 1H21a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1z"
  }), React213.createElement("path", {
    opacity: 1,
    d: "M12.5 2c.265 0 .52.105.707.293l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414L13.586 5.5l-1.793-1.793A1 1 0 0 1 12.5 2z"
  }), React213.createElement("path", {
    opacity: 1,
    d: "M5 17.5H4v-11h8.586l1-1-1-1H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2z"
  }));
}
var uim_repeat_default = UimRepeat;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-right-indent-alt.js
var React214 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimRightIndentAlt(props) {
  return React214.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React214.createElement("path", {
    opacity: 0.5,
    d: "M21 19h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0 4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), React214.createElement("path", {
    opacity: 1,
    d: "M9 19a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1zm-6-4.333a1 1 0 0 1-.64-1.769L3.438 12l-1.078-.898a1 1 0 0 1 1.28-1.538l2 1.667a1 1 0 0 1 0 1.538l-2 1.667a.999.999 0 0 1-.64.231z"
  }));
}
var uim_right_indent_alt_default = UimRightIndentAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-rocket.js
var React215 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimRocket(props) {
  return React215.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React215.createElement("path", {
    opacity: 1,
    d: "m17.737 14.622-2.426 2.23a11.603 11.603 0 0 1-4.299 2.37l.644 3.004a1 1 0 0 0 1.469.661l3.905-2.202a3.035 3.035 0 0 0 1.375-3.304zM7.266 8.776l2.088-2.48-2.604-.628a2.777 2.777 0 0 0-3.387 1.357l-2.2 3.9a1 1 0 0 0 .661 1.469l3.073.659a12.887 12.887 0 0 1 2.369-4.277zm9.468.04a1.5 1.5 0 1 0-1.5-1.5 1.5 1.5 0 0 0 1.5 1.5z"
  }), React215.createElement("path", {
    opacity: 0.5,
    d: "M22.601 2.062a1 1 0 0 0-.713-.713A11.249 11.249 0 0 0 10.47 4.972L7.266 8.776a12.936 12.936 0 0 0-2.924 6.71 1 1 0 0 0 .284.837l3.1 3.1a1 1 0 0 0 .708.293c.028 0 .057-.001.086-.004a11.847 11.847 0 0 0 6.79-2.86l3.664-3.368A11.204 11.204 0 0 0 22.6 2.062Zm-5.867 6.754a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Z"
  }));
}
var uim_rocket_default = UimRocket;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-ruler.js
var React216 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimRuler(props) {
  return React216.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React216.createElement("path", {
    opacity: 1,
    d: "M10.586 20.485 7.05 16.95a1 1 0 0 1 0-1.414 1 1 0 0 1 1.415 0L12 19.07zm2.828-2.828-2.121-2.121a1 1 0 0 1 0-1.415 1 1 0 0 1 1.414 0l2.122 2.122zm2.829-2.828-3.536-3.536a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l3.536 3.535zM19.07 12 16.95 9.88a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l2.121 2.12z"
  }), React216.createElement("path", {
    opacity: 0.5,
    d: "M22.606 7.05 16.95 1.395a1 1 0 0 0-1.414 0L1.394 15.535a1 1 0 0 0 0 1.414l5.656 5.657a1 1 0 0 0 1.414 0l2.122-2.12L7.05 16.95a1 1 0 1 1 1.415-1.414L12 19.07l1.414-1.414-2.121-2.121a1 1 0 0 1 1.414-1.415l2.121 2.122 1.415-1.415-3.536-3.535a1 1 0 0 1 1.414-1.414l3.536 3.535L19.07 12 16.95 9.88a1 1 0 0 1 1.414-1.414l2.121 2.12 2.121-2.12a1 1 0 0 0 0-1.414Z"
  }));
}
var uim_ruler_default = UimRuler;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-ruler-combined.js
var React217 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimRulerCombined(props) {
  return React217.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React217.createElement("path", {
    opacity: 1,
    d: "M14 10h-2V7a1 1 0 0 1 1-1 1 1 0 0 1 1 1zM9 6a1 1 0 0 0-1 1v1H7a1 1 0 0 0 0 2h3V7a1 1 0 0 0-1-1zm1 6v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1z"
  }), React217.createElement("path", {
    opacity: 1,
    d: "M10 12v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1Z"
  }), React217.createElement("path", {
    opacity: 0.5,
    d: "M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
  }), React217.createElement("path", {
    opacity: 1,
    d: "M10 16v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm8-6h-2V7a1 1 0 0 1 1-1 1 1 0 0 1 1 1z"
  }));
}
var uim_ruler_combined_default = UimRulerCombined;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-sanitizer.js
var React218 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSanitizer(props) {
  return React218.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React218.createElement("path", {
    opacity: 1,
    d: "M5 5a1 1 0 0 1-.707-1.707l.829-.829A4.967 4.967 0 0 1 8.657 1H17a1 1 0 0 1 0 2H8.657a3.022 3.022 0 0 0-2.121.878l-.829.829A.997.997 0 0 1 5 5Z"
  }), React218.createElement("path", {
    opacity: 0.5,
    d: "M10 3v2.5l.4-.3A1 1 0 0 1 11 5h4a1 1 0 0 1 .6.2l.4.3V3Z"
  }), React218.createElement("circle", {
    cx: 13,
    cy: 15,
    r: 2,
    opacity: 1
  }), React218.createElement("path", {
    opacity: 1,
    d: "M13 18a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Z"
  }), React218.createElement("path", {
    opacity: 0.25,
    d: "m18.8 7.6-3.2-2.4A1 1 0 0 0 15 5h-4a1 1 0 0 0-.6.2L7.2 7.6A3.016 3.016 0 0 0 6 10v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10a3.015 3.015 0 0 0-1.2-2.4ZM13 18a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Z"
  }));
}
var uim_sanitizer_default = UimSanitizer;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-sanitizer-alt.js
var React219 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSanitizerAlt(props) {
  return React219.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React219.createElement("path", {
    opacity: 0.5,
    d: "M12 3v1h2V3h1a1 1 0 0 0 0-2h-4.764a4.593 4.593 0 0 0-4.13 2.553 1 1 0 0 0 1.789.894A2.603 2.603 0 0 1 10.235 3Z"
  }), React219.createElement("path", {
    opacity: 1,
    d: "M16 5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h6zm-2 12h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"
  }), React219.createElement("path", {
    opacity: 0.25,
    d: "M16 8h-6a3.003 3.003 0 0 0-3 3v9a3.003 3.003 0 0 0 3 3h6a3.003 3.003 0 0 0 3-3v-9a3.003 3.003 0 0 0-3-3Zm-2 9h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
  }));
}
var uim_sanitizer_alt_default = UimSanitizerAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-scenery.js
var React220 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimScenery(props) {
  return React220.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React220.createElement("path", {
    opacity: 0.25,
    d: "M13.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  }), React220.createElement("path", {
    opacity: 0.5,
    d: "M19 2H5a3.009 3.009 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887.888-.888a3.008 3.008 0 0 1 4.242 0L22 15.86V5a3.009 3.009 0 0 0-3-3zm-5.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  }), React220.createElement("path", {
    opacity: 1,
    d: "M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.009 3.009 0 0 0 3 3h14c.815 0 1.595-.333 2.16-.92L10.12 9.98z"
  }), React220.createElement("path", {
    opacity: 0.25,
    d: "m22 15.858-3.879-3.879a3.008 3.008 0 0 0-4.242 0l-.888.888 8.165 8.209c.542-.555.845-1.3.844-2.076v-3.142z"
  }));
}
var uim_scenery_default = UimScenery;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-schedule.js
var React221 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSchedule(props) {
  return React221.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React221.createElement("path", {
    opacity: 0.5,
    d: "M7 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1H7zm10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1H17z"
  }), React221.createElement("path", {
    opacity: 1,
    d: "M19 4h-1v1a1 1 0 0 1-2 0V4H8v1a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v2h20V7a3 3 0 0 0-3-3z"
  }), React221.createElement("circle", {
    cx: 7,
    cy: 13,
    r: 1,
    opacity: 1
  }), React221.createElement("circle", {
    cx: 7,
    cy: 17,
    r: 1,
    opacity: 1
  }), React221.createElement("circle", {
    cx: 12,
    cy: 13,
    r: 1,
    opacity: 1
  }), React221.createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1,
    opacity: 1
  }), React221.createElement("circle", {
    cx: 17,
    cy: 13,
    r: 1,
    opacity: 1
  }), React221.createElement("circle", {
    cx: 17,
    cy: 17,
    r: 1,
    opacity: 1
  }), React221.createElement("path", {
    opacity: 0.5,
    d: "M2 9v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9H2zm5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
}
var uim_schedule_default = UimSchedule;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-shield-plus.js
var React222 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimShieldPlus(props) {
  return React222.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React222.createElement("path", {
    opacity: 1,
    d: "M14 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z"
  }), React222.createElement("path", {
    opacity: 0.5,
    d: "M19.63 3.65a1.002 1.002 0 0 0-.835-.203 7.985 7.985 0 0 1-6.223-1.267.999.999 0 0 0-1.144 0 7.98 7.98 0 0 1-6.223 1.267A1 1 0 0 0 4 4.427v7.456a9.019 9.019 0 0 0 3.769 7.324l3.65 2.607a1 1 0 0 0 1.162 0l3.65-2.607A9.017 9.017 0 0 0 20 11.883V4.426a1.001 1.001 0 0 0-.37-.776ZM14 13h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"
  }));
}
var uim_shield_plus_default = UimShieldPlus;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-sign-in-alt.js
var React223 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSignInAlt(props) {
  return React223.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React223.createElement("path", {
    opacity: 1,
    d: "M21 12c0-.34-.02-.67-.05-1H12.5V9.5a1 1 0 0 0-1.707-.707l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5A1 1 0 0 0 12.5 14.5V13h8.45c.03-.33.05-.66.05-1Z"
  }), React223.createElement("path", {
    opacity: 0.5,
    d: "M12.5 13v1.5a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5A1 1 0 0 1 12.5 9.5V11h8.45a10 10 0 1 0 0 2Z"
  }));
}
var uim_sign_in_alt_default = UimSignInAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-sign-out-alt.js
var React224 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSignOutAlt(props) {
  return React224.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React224.createElement("path", {
    opacity: 1,
    d: "m15.707 11.293-4-4a1 1 0 0 0-1.414 1.414L12.586 11H2.05c-.03.33-.05.66-.05 1s.02.67.05 1h10.536l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414Z"
  }), React224.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 0 0-9.95 9h10.536l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 13H2.05A10 10 0 1 0 12 2Z"
  }));
}
var uim_sign_out_alt_default = UimSignOutAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-signal-alt.js
var React225 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSignalAlt(props) {
  return React225.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React225.createElement("path", {
    opacity: 1,
    d: "M5 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1V10a1 1 0 0 1 2 0v11a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"
  }));
}
var uim_signal_alt_default = UimSignalAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-signal-alt-3.js
var React226 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSignalAlt3(props) {
  return React226.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React226.createElement("path", {
    opacity: 0.25,
    d: "M6 23H2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Z"
  }), React226.createElement("path", {
    opacity: 0.5,
    d: "M14 23h-4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z"
  }), React226.createElement("path", {
    opacity: 1,
    d: "M22 23h-4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1Z"
  }));
}
var uim_signal_alt_3_default = UimSignalAlt3;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-signin.js
var React227 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSignin(props) {
  return React227.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React227.createElement("path", {
    opacity: 1,
    d: "M19 11h-5.586l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L13.414 13H19a1 1 0 0 0 0-2Z"
  }), React227.createElement("path", {
    opacity: 0.5,
    d: "m13.414 13 1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L13.414 11H18V5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h8a3.003 3.003 0 0 0 3-3v-6Z"
  }));
}
var uim_signin_default = UimSignin;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-signout.js
var React228 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSignout(props) {
  return React228.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React228.createElement("path", {
    opacity: 1,
    d: "m21.207 11.293-3-3a1 1 0 1 0-1.414 1.415L18.086 11H12.5a1 1 0 0 0 0 2h5.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.415Z"
  }), React228.createElement("path", {
    opacity: 0.5,
    d: "M12.5 13a1 1 0 0 1 0-2h4V5a3.003 3.003 0 0 0-3-3h-8a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h8a3.003 3.003 0 0 0 3-3v-6Z"
  }));
}
var uim_signout_default = UimSignout;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-skype.js
var React229 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSkype(props) {
  return React229.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React229.createElement("path", {
    opacity: 0.5,
    d: "M16.44 15.993c-.414.555-.978.98-1.625 1.225a6.34 6.34 0 0 1-2.52.447 6.217 6.217 0 0 1-2.898-.612 3.733 3.733 0 0 1-1.32-1.178 2.574 2.574 0 0 1-.494-1.413.88.88 0 0 1 .307-.684 1.09 1.09 0 0 1 .776-.282.944.944 0 0 1 .637.212c.197.184.35.409.447.659.121.314.288.608.495.873.19.248.441.443.73.564.395.167.82.247 1.249.236a2.922 2.922 0 0 0 1.72-.447c.402-.236.652-.665.66-1.131a1.135 1.135 0 0 0-.354-.871 2.185 2.185 0 0 0-.92-.52c-.376-.117-.895-.235-1.53-.376a13.99 13.99 0 0 1-2.144-.636 3.348 3.348 0 0 1-1.366-1.013 2.474 2.474 0 0 1-.495-1.578c0-.579.19-1.142.542-1.602.399-.497.93-.873 1.53-1.084a6.652 6.652 0 0 1 2.38-.376 6.403 6.403 0 0 1 1.885.258c.476.138.923.362 1.318.66.316.235.58.532.778.872.151.265.232.565.236.87 0 .269-.11.525-.307.708a.991.991 0 0 1-.753.306.973.973 0 0 1-.636-.189 2.382 2.382 0 0 1-.471-.611 2.937 2.937 0 0 0-.778-.967 2.376 2.376 0 0 0-1.46-.353 2.703 2.703 0 0 0-1.508.377 1.076 1.076 0 0 0-.565.896.958.958 0 0 0 .188.565c.146.175.332.312.542.4.215.117.445.204.683.26.236.07.613.164 1.154.282.66.142 1.273.306 1.815.471.49.145.958.36 1.389.636.367.24.673.563.895.942.227.428.34.906.33 1.39a2.89 2.89 0 0 1-.542 1.814z"
  }), React229.createElement("path", {
    opacity: 1,
    d: "M21.435 14.156a9.589 9.589 0 0 0 .211-2.027 9.477 9.477 0 0 0-9.53-9.422h-.01a9.117 9.117 0 0 0-1.625.141A5.536 5.536 0 0 0 2 7.466c0 .97.26 1.921.753 2.756-.122.62-.185 1.252-.189 1.884a9.339 9.339 0 0 0 9.54 9.258 8.567 8.567 0 0 0 1.743-.166 5.58 5.58 0 0 0 2.616.802 5.433 5.433 0 0 0 4.97-7.844zm-4.995 1.837c-.414.555-.978.98-1.625 1.225a6.34 6.34 0 0 1-2.52.447 6.217 6.217 0 0 1-2.898-.612 3.732 3.732 0 0 1-1.32-1.178 2.574 2.574 0 0 1-.494-1.413.88.88 0 0 1 .307-.684 1.09 1.09 0 0 1 .776-.282.944.944 0 0 1 .637.212c.197.184.35.409.447.659.121.314.288.608.495.873.19.248.441.443.73.564.395.167.82.247 1.249.236a2.922 2.922 0 0 0 1.72-.447c.402-.236.653-.665.66-1.131a1.135 1.135 0 0 0-.354-.871 2.184 2.184 0 0 0-.92-.52c-.376-.117-.895-.235-1.53-.376a13.992 13.992 0 0 1-2.144-.636 3.348 3.348 0 0 1-1.366-1.013 2.474 2.474 0 0 1-.495-1.578c0-.579.19-1.142.542-1.602.399-.497.93-.873 1.53-1.084a6.65 6.65 0 0 1 2.38-.376 6.402 6.402 0 0 1 1.885.258c.476.138.923.362 1.319.66.315.235.58.532.777.872.151.265.232.565.236.871 0 .268-.11.524-.307.707a.991.991 0 0 1-.753.306.974.974 0 0 1-.636-.189 2.383 2.383 0 0 1-.471-.611 2.937 2.937 0 0 0-.778-.967 2.376 2.376 0 0 0-1.46-.353 2.703 2.703 0 0 0-1.508.377 1.075 1.075 0 0 0-.565.896.958.958 0 0 0 .188.565c.146.175.332.312.542.4.215.117.445.204.683.26.236.07.613.164 1.154.282.66.142 1.273.306 1.815.471.49.145.958.36 1.389.636.367.24.673.563.895.942.227.428.34.906.33 1.39a2.89 2.89 0 0 1-.542 1.814z"
  }));
}
var uim_skype_default = UimSkype;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-skype-alt.js
var React230 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSkypeAlt(props) {
  return React230.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React230.createElement("path", {
    opacity: 0.5,
    d: "M16.5 23a6.501 6.501 0 0 1-2.809-.639A10.491 10.491 0 0 1 1.64 10.31a6.499 6.499 0 0 1 8.67-8.67A10.491 10.491 0 0 1 22.36 13.69 6.499 6.499 0 0 1 16.5 23Z"
  }), React230.createElement("path", {
    opacity: 1,
    d: "M16.136 12.865a3.165 3.165 0 0 0-.997-1.052 5.076 5.076 0 0 0-1.29-.593c-.28-.085-.59-.168-.911-.247-.28-.078-.612-.158-1.022-.248a9.315 9.315 0 0 1-1.436-.424 1.496 1.496 0 0 1-.616-.447.843.843 0 0 1-.16-.566.967.967 0 0 1 .205-.597 1.598 1.598 0 0 1 .7-.475A4.012 4.012 0 0 1 12.031 8a3.787 3.787 0 0 1 1.106.146 2.083 2.083 0 0 1 .663.322 1.235 1.235 0 0 1 .325.343 1 1 0 1 0 1.761-.948 3.147 3.147 0 0 0-.837-.958 4.006 4.006 0 0 0-1.319-.669A5.768 5.768 0 0 0 12.032 6a5.963 5.963 0 0 0-2.145.35A3.552 3.552 0 0 0 8.31 7.492a2.977 2.977 0 0 0-.604 1.797 2.839 2.839 0 0 0 .58 1.792 3.5 3.5 0 0 0 1.438 1.072 10.582 10.582 0 0 0 1.307.408l1.531.378c.248.064.487.129.706.196a3.023 3.023 0 0 1 .763.344 1.127 1.127 0 0 1 .363.368 1.201 1.201 0 0 1 .118.585 1.152 1.152 0 0 1-.214.732 1.763 1.763 0 0 1-.802.585 3.787 3.787 0 0 1-1.487.252 3.689 3.689 0 0 1-1.703-.344 1.756 1.756 0 0 1-.616-.547 1.016 1.016 0 0 1-.202-.503 1 1 0 0 0-2 0 2.94 2.94 0 0 0 .556 1.64 3.774 3.774 0 0 0 1.342 1.187 5.621 5.621 0 0 0 2.623.567 5.708 5.708 0 0 0 2.254-.405 3.71 3.71 0 0 0 1.665-1.273 3.146 3.146 0 0 0 .584-1.926 3.09 3.09 0 0 0-.375-1.53Z"
  }));
}
var uim_skype_alt_default = UimSkypeAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-slack.js
var React231 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSlack(props) {
  return React231.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React231.createElement("g", {
    "data-name": "Brand Logos"
  }, React231.createElement("path", {
    opacity: 1,
    d: "M9.33823,2A1.99959,1.99959,0,0,0,9.339,5.99918h1.99633V4.00041A1.99944,1.99944,0,0,0,9.33823,2h0m0,5.33333H4.01631a2,2,0,0,0-.00082,4H9.33823a2,2,0,0,0,0-4Z"
  }), React231.createElement("path", {
    opacity: 0.25,
    d: "M21.98,9.33293a1.99633,1.99633,0,1,0-3.99266,0v2.0004h1.99633A1.99824,1.99824,0,0,0,21.98,9.33293Zm-5.32273,0V3.99959a1.99593,1.99593,0,1,0-3.99185,0V9.33293a1.99593,1.99593,0,1,0,3.99185,0Z"
  }), React231.createElement("path", {
    opacity: 0.7,
    d: "M14.661,22a1.99959,1.99959,0,0,0,0-3.99918H12.66463v1.99959A1.9991,1.9991,0,0,0,14.661,22Zm0-5.33415h5.32273a2,2,0,0,0,.00082-4H14.66177a2,2,0,0,0-.00081,4Z"
  }), React231.createElement("path", {
    opacity: 0.5,
    d: "M2.02,14.66626a1.99633,1.99633,0,1,0,3.99266,0V12.66667H4.01631A1.99806,1.99806,0,0,0,2.02,14.66626Zm5.32273,0v5.33333a1.99593,1.99593,0,1,0,3.99185.00082V14.66789a1.99593,1.99593,0,1,0-3.99185-.00163h0"
  })));
}
var uim_slack_default = UimSlack;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-slack-alt.js
var React232 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSlackAlt(props) {
  return React232.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React232.createElement("path", {
    opacity: 0.25,
    d: "M9.34 2a2 2 0 0 0 0 4h2V4a2 2 0 0 0-2-2m0 5.33H4a2 2 0 1 0 0 4h5.34a2 2 0 0 0 0-4"
  }), React232.createElement("path", {
    opacity: 0.5,
    d: "M22 9.33a2 2 0 1 0-4 0v2h2a2 2 0 0 0 2-2m-5.32 0V4a2 2 0 1 0-4 0v5.33a2 2 0 1 0 4 0"
  }), React232.createElement("path", {
    opacity: 0.7,
    d: "M14.66 22a2 2 0 0 0 0-4h-2v2a2 2 0 0 0 2 2m0-5.33H20a2 2 0 0 0 0-4h-5.34a2 2 0 0 0 0 4"
  }), React232.createElement("path", {
    opacity: 1,
    d: "M2 14.67a2 2 0 1 0 4 0v-2H4a2 2 0 0 0-2 2m5.32 0V20a2 2 0 1 0 4 0v-5.33a2 2 0 1 0-4 0"
  }));
}
var uim_slack_alt_default = UimSlackAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-snapchat-alt.js
var React233 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSnapchatAlt(props) {
  return React233.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React233.createElement("path", {
    opacity: 1,
    d: "M3.808 11.651a1 1 0 0 0 1.06-.49 3.12 3.12 0 0 0 1.27.34 1.81 1.81 0 0 0 1.28-.5 1 1 0 0 0 .3-.77v-.62a9.82 9.82 0 0 1 .15-3.55 4.27 4.27 0 0 1 4-2.55h.4a4.26 4.26 0 0 1 4 2.55 10.18 10.18 0 0 1 .15 3.63v.54a1 1 0 0 0 .31.78 1.78 1.78 0 0 0 1.25.5 3.21 3.21 0 0 0 1.24-.37 1 1 0 0 0 .92.6 1 1 0 0 0 1-1 1.63 1.63 0 0 0-1.19-1.45 1.92 1.92 0 0 0-1.47 0 9.49 9.49 0 0 0-.36-4 6.23 6.23 0 0 0-5.93-3.79h-.4a6.22 6.22 0 0 0-5.79 3.73 9.43 9.43 0 0 0-.35 4.1l-.11-.05a1.9 1.9 0 0 0-2.54 1.2 1 1 0 0 0 .81 1.17zM21.998 16.111a4.67 4.67 0 0 1-3-2.17 1.001 1.001 0 1 0-1.66 1.12 7.66 7.66 0 0 0 2.4 2.33 4.121 4.121 0 0 1-.45.08 1.37 1.37 0 0 0-1.06 1.21 6 6 0 0 0-2 0 4.58 4.58 0 0 0-2 1 3.5 3.5 0 0 1-2.11.87h-.26a3.5 3.5 0 0 1-2.11-.87 4.49 4.49 0 0 0-1.93-.95 6.27 6.27 0 0 0-2 0 1.39 1.39 0 0 0-1.07-1.21l-.45-.12a6.78 6.78 0 0 0 2.43-2.4 1 1 0 1 0-1.73-1 5.54 5.54 0 0 1-.45.62 4.24 4.24 0 0 1-2.55 1.49 1.23 1.23 0 0 0-1 1.24c0 .183.037.363.11.53.32.72 1.16 1.17 2.79 1.48v.12c0 .12.06.25.09.35a1.3 1.3 0 0 0 1.28 1 2.22 2.22 0 0 0 .6-.09 4.57 4.57 0 0 1 1.59 0 3 3 0 0 1 1.12.61 5.44 5.44 0 0 0 3.42 1.15h.16a5.43 5.43 0 0 0 3.28-1.25 3 3 0 0 1 1.12-.61 4.08 4.08 0 0 1 1.58.06c.205.036.412.056.62.06a1.25 1.25 0 0 0 1.24-.92c0-.12.07-.24.1-.36v-.12c1.63-.31 2.47-.75 2.76-1.42a1.31 1.31 0 0 0 .14-.51 1.25 1.25 0 0 0-1-1.32z"
  }));
}
var uim_snapchat_alt_default = UimSnapchatAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-snapchat-ghost.js
var React234 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSnapchatGhost(props) {
  return React234.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React234.createElement("path", {
    opacity: 1,
    d: "M21.798 16.987c-2.867-.472-4.151-3.401-4.204-3.526l-.006-.011a1.07 1.07 0 0 1-.102-.898c.192-.454.83-.656 1.251-.79.106-.033.205-.065.283-.096.763-.3.918-.613.914-.822a.662.662 0 0 0-.5-.543l-.007-.002a.946.946 0 0 0-.356-.069.755.755 0 0 0-.313.063 2.54 2.54 0 0 1-.955.266.821.821 0 0 1-.53-.178l.032-.53.004-.065a10.102 10.102 0 0 0-.24-4.035 5.248 5.248 0 0 0-4.874-3.14l-.402.005a5.24 5.24 0 0 0-4.864 3.137 10.09 10.09 0 0 0-.242 4.031q.02.299.036.598a.848.848 0 0 1-.584.178 2.453 2.453 0 0 1-1.014-.268.575.575 0 0 0-.245-.049.834.834 0 0 0-.81.533c-.082.43.532.743.906.89.08.032.178.063.283.096.422.134 1.06.336 1.252.79a1.072 1.072 0 0 1-.102.898l-.006.011a7.028 7.028 0 0 1-1.069 1.663A5.215 5.215 0 0 1 2.2 16.987a.24.24 0 0 0-.2.25.38.38 0 0 0 .03.13c.177.411 1.059.75 2.553.981.14.022.198.25.28.622.032.15.066.305.113.465a.293.293 0 0 0 .32.228 2.485 2.485 0 0 0 .424-.06 5.53 5.53 0 0 1 1.12-.127 4.954 4.954 0 0 1 .809.068 3.877 3.877 0 0 1 1.535.784 4.443 4.443 0 0 0 2.69 1.06c.033 0 .067-.001.1-.004.04.002.095.004.151.004a4.448 4.448 0 0 0 2.692-1.06 3.873 3.873 0 0 1 1.533-.784 4.973 4.973 0 0 1 .808-.068 5.593 5.593 0 0 1 1.12.119 2.391 2.391 0 0 0 .425.053h.024a.279.279 0 0 0 .295-.22 6.52 6.52 0 0 0 .114-.462c.081-.371.14-.598.28-.62 1.494-.23 2.377-.57 2.551-.978a.385.385 0 0 0 .032-.13.24.24 0 0 0-.2-.25Z",
    "data-name": "Brand Logos"
  }));
}
var uim_snapchat_ghost_default = UimSnapchatGhost;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-snapchat-square.js
var React235 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSnapchatSquare(props) {
  return React235.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React235.createElement("path", {
    opacity: 0.5,
    d: "M19.174 15.652a4.522 4.522 0 0 1-3.079-2.582l-.004-.009a.784.784 0 0 1-.074-.657c.14-.332.607-.48.916-.578.077-.024.15-.048.207-.07.559-.22.672-.45.67-.602a.485.485 0 0 0-.368-.398l-.004-.002a.694.694 0 0 0-.26-.05.552.552 0 0 0-.23.046 1.86 1.86 0 0 1-.7.195.602.602 0 0 1-.387-.13l.023-.389.003-.047c.141-.987.081-1.992-.176-2.955a3.843 3.843 0 0 0-3.568-2.298l-.295.002a3.837 3.837 0 0 0-3.562 2.298 7.388 7.388 0 0 0-.177 2.951l.027.438a.621.621 0 0 1-.428.13 1.796 1.796 0 0 1-.742-.195.42.42 0 0 0-.18-.036.61.61 0 0 0-.593.39c-.06.315.39.544.664.652.057.023.13.046.207.07.309.098.775.246.916.578.073.22.046.46-.075.658l-.004.008c-.202.44-.465.85-.782 1.217a3.818 3.818 0 0 1-2.296 1.365.176.176 0 0 0-.147.183c.002.033.01.065.023.095.129.301.775.55 1.869.718.102.016.145.183.205.456.024.11.048.223.083.34.023.107.124.18.234.167a1.82 1.82 0 0 0 .31-.044c.27-.06.545-.09.821-.093.198 0 .396.017.592.05.413.105.797.3 1.124.574a3.253 3.253 0 0 0 1.97.776c.024 0 .048 0 .072-.003.03.002.07.003.112.003a3.257 3.257 0 0 0 1.97-.776c.327-.273.71-.47 1.123-.574.196-.033.393-.05.592-.05.275.001.55.03.82.087.102.022.207.035.311.04h.017a.204.204 0 0 0 .217-.163c.034-.115.059-.225.083-.337.06-.272.103-.438.205-.454 1.094-.169 1.74-.417 1.868-.716a.28.28 0 0 0 .023-.096.176.176 0 0 0-.146-.183z"
  }), React235.createElement("path", {
    opacity: 1,
    d: "M17.508 2h-11a4.5 4.5 0 0 0-4.5 4.5v11a4.5 4.5 0 0 0 4.5 4.5h11a4.5 4.5 0 0 0 4.5-4.5v-11a4.5 4.5 0 0 0-4.5-4.5zm1.79 13.93c-.129.3-.775.548-1.869.717-.102.016-.146.182-.205.454-.024.112-.05.222-.083.337a.204.204 0 0 1-.217.162h-.017a1.751 1.751 0 0 1-.31-.04 4.094 4.094 0 0 0-.821-.086c-.199 0-.396.017-.592.05-.413.105-.796.3-1.123.574a3.257 3.257 0 0 1-1.97.776c-.042 0-.082-.001-.112-.003a.85.85 0 0 1-.073.003 3.253 3.253 0 0 1-1.97-.776 2.84 2.84 0 0 0-1.123-.574 3.63 3.63 0 0 0-.592-.05c-.276.003-.55.034-.82.093a1.822 1.822 0 0 1-.311.044.214.214 0 0 1-.234-.167 4.753 4.753 0 0 1-.083-.34c-.06-.273-.103-.44-.205-.456-1.094-.168-1.74-.417-1.869-.718a.279.279 0 0 1-.023-.095.176.176 0 0 1 .147-.183 3.818 3.818 0 0 0 2.296-1.365c.317-.367.58-.776.783-1.217l.003-.008a.785.785 0 0 0 .075-.658c-.14-.332-.607-.48-.916-.578-.077-.024-.15-.047-.207-.07-.274-.108-.724-.337-.664-.652a.61.61 0 0 1 .593-.39.42.42 0 0 1 .18.036c.23.118.484.185.742.196a.622.622 0 0 0 .428-.131 47.507 47.507 0 0 0-.027-.438c-.14-.985-.08-1.99.177-2.951a3.837 3.837 0 0 1 3.562-2.298l.295-.002a3.843 3.843 0 0 1 3.568 2.298 7.4 7.4 0 0 1 .176 2.955l-.003.047-.023.389c.11.087.247.133.388.13a1.86 1.86 0 0 0 .7-.195.552.552 0 0 1 .228-.046c.09 0 .178.017.261.05l.004.002a.485.485 0 0 1 .367.398c.003.153-.11.381-.669.602-.057.022-.13.046-.207.07-.31.098-.776.246-.916.578a.784.784 0 0 0 .074.657l.004.009a4.522 4.522 0 0 0 3.079 2.582.176.176 0 0 1 .146.183.281.281 0 0 1-.023.096z"
  }));
}
var uim_snapchat_square_default = UimSnapchatSquare;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-social-distancing.js
var React236 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSocialDistancing(props) {
  return React236.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React236.createElement("path", {
    opacity: 0.25,
    d: "M6 11a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 6 11Z"
  }), React236.createElement("path", {
    opacity: 0.5,
    d: "M8.64 9.772a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 1 14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.988 4.988 0 0 0-2.36-4.228zM18 11a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 18 11z"
  }), React236.createElement("path", {
    opacity: 0.7,
    d: "M20.64 9.772a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 13 14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.988 4.988 0 0 0-2.36-4.228Z"
  }), React236.createElement("path", {
    opacity: 1,
    d: "m21.207 18.293-2-2a1 1 0 0 0-1.414 1.414l.293.293H15.5a1 1 0 0 0 0 2h2.586l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414zM8.5 18H5.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L5.914 20H8.5a1 1 0 0 0 0-2z"
  }));
}
var uim_social_distancing_default = UimSocialDistancing;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-sorting.js
var React237 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSorting(props) {
  return React237.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React237.createElement("path", {
    opacity: 1,
    d: "M15 19.5a.997.997 0 0 1-.707-.293L12 16.914l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 19.5zm-3-9a.997.997 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 8.086l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A.997.997 0 0 1 12 10.5z"
  }));
}
var uim_sorting_default = UimSorting;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-space-key.js
var React238 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSpaceKey(props) {
  return React238.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React238.createElement("path", {
    opacity: 1,
    d: "M21 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h16v-3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"
  }));
}
var uim_space_key_default = UimSpaceKey;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-square.js
var React239 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSquare(props) {
  return React239.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React239.createElement("rect", {
    width: 20,
    height: 20,
    x: 2,
    y: 2,
    opacity: 1,
    rx: 1
  }));
}
var uim_square_default = UimSquare;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-square-full.js
var React240 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSquareFull(props) {
  return React240.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React240.createElement("path", {
    opacity: 1,
    d: "M21 22H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1ZM4 20h16V4H4Z"
  }));
}
var uim_square_full_default = UimSquareFull;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-squre-shape.js
var React241 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSqureShape(props) {
  return React241.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React241.createElement("rect", {
    width: 20,
    height: 20,
    x: 2,
    y: 2,
    opacity: 1,
    rx: 5
  }));
}
var uim_squre_shape_default = UimSqureShape;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-star.js
var React242 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimStar(props) {
  return React242.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React242.createElement("path", {
    opacity: 1,
    d: "M17.56248,21.55957a1.00275,1.00275,0,0,1-.46531-.11475L12,18.76514,6.90283,21.44482a1.00019,1.00019,0,0,1-1.45117-1.0542l.97363-5.67578-4.12353-4.019a1.00033,1.00033,0,0,1,.5542-1.706l5.69873-.82813L11.103,2.99805a1.04173,1.04173,0,0,1,1.79394,0l2.54834,5.16357,5.69873.82813a1.00033,1.00033,0,0,1,.5542,1.706l-4.12353,4.019.97363,5.67578a1,1,0,0,1-.98586,1.169Z"
  }));
}
var uim_star_default = UimStar;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-star-half-alt.js
var React243 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimStarHalfAlt(props) {
  return React243.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React243.createElement("path", {
    opacity: 0.5,
    d: "M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828-2.548-5.164A.978.978 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676 4.123-4.02a1 1 0 0 0 .253-1.025z"
  }), React243.createElement("path", {
    opacity: 1,
    d: "M11.103 2.998 8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503c-.356.001-.703.167-.897.495z"
  }));
}
var uim_star_half_alt_default = UimStarHalfAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-step-forward.js
var React244 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimStepForward(props) {
  return React244.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React244.createElement("path", {
    opacity: 1,
    d: "M8 17a1 1 0 0 1-.707-1.707L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4A.997.997 0 0 1 8 17zm8 0a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"
  }));
}
var uim_step_forward_default = UimStepForward;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-stethoscope.js
var React245 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimStethoscope(props) {
  return React245.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React245.createElement("path", {
    opacity: 0.5,
    d: "M19 14a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zM8 15a6.007 6.007 0 0 1-6-6V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v5a4 4 0 0 0 8 0V4h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v6a6.007 6.007 0 0 1-6 6z"
  }), React245.createElement("path", {
    opacity: 1,
    d: "M19 14a2.965 2.965 0 0 1-1-.184V15.5a4.5 4.5 0 0 1-9 0v-.59a5.58 5.58 0 0 1-2 0v.59a6.5 6.5 0 0 0 13 0v-1.684A2.965 2.965 0 0 1 19 14Z"
  }));
}
var uim_stethoscope_default = UimStethoscope;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-stethoscope-alt.js
var React246 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimStethoscopeAlt(props) {
  return React246.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React246.createElement("path", {
    opacity: 0.5,
    d: "M8 15a.998.998 0 0 1-.625-.22l-3.499-2.798A4.975 4.975 0 0 1 2 8.078V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v4.078a2.985 2.985 0 0 0 1.126 2.342L8 12.72l2.875-2.3A2.986 2.986 0 0 0 12 8.078V4h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v5.078a4.976 4.976 0 0 1-1.876 3.904l-3.5 2.799A.998.998 0 0 1 8 15zm11-1a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3z"
  }), React246.createElement("path", {
    opacity: 1,
    d: "M19 14a2.965 2.965 0 0 1-1-.184V15.5a4.5 4.5 0 0 1-9 0v-1.02l-.375.3a1 1 0 0 1-1.25 0L7 14.48v1.02a6.5 6.5 0 0 0 13 0v-1.684A2.965 2.965 0 0 1 19 14Z"
  }));
}
var uim_stethoscope_alt_default = UimStethoscopeAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-store-slash.js
var React247 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimStoreSlash(props) {
  return React247.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React247.createElement("path", {
    opacity: 0.25,
    d: "M20 18.586v-7.143a3.947 3.947 0 0 1-5-.8 3.957 3.957 0 0 1-1.789 1.154Z"
  }), React247.createElement("path", {
    opacity: 1,
    d: "M22 23a.997.997 0 0 1-.707-.293l-20-20a1 1 0 0 1 1.414-1.414l20 20A1 1 0 0 1 22 23Z"
  }), React247.createElement("path", {
    opacity: 0.7,
    d: "M12.586 14H10a1 1 0 0 0-1 1v7h6v-5.586Z"
  }), React247.createElement("path", {
    opacity: 0.25,
    d: "M10 14h2.586l-2.49-2.49A3.84 3.84 0 0 1 9 10.642a3.998 3.998 0 0 1-5 .82v9.538A1 1 0 0 0 5 22h4v-7a1 1 0 0 1 1-1zm5 2.414V22h4a.993.993 0 0 0 .93-.655z"
  }), React247.createElement("path", {
    opacity: 0.5,
    d: "M13.211 11.797A3.957 3.957 0 0 0 15 10.643 3.998 3.998 0 0 0 22 8a1.006 1.006 0 0 0-.071-.371l-2-5A1 1 0 0 0 19 2H5a1 1 0 0 0-.929.629l-.008.02zM3.255 4.669 2.071 7.63A1.006 1.006 0 0 0 2 8a3.998 3.998 0 0 0 7 2.643 3.84 3.84 0 0 0 1.095.866z"
  }));
}
var uim_store_slash_default = UimStoreSlash;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-subject.js
var React248 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSubject(props) {
  return React248.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React248.createElement("path", {
    opacity: 1,
    d: "M21 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 10H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm8-5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
  }));
}
var uim_subject_default = UimSubject;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-swiggy.js
var React249 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSwiggy(props) {
  return React249.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React249.createElement("path", {
    opacity: 1,
    d: "M10.047 14.693c-.654 0-1.308-.012-1.961.004a1.342 1.342 0 0 1-1.33-.748A11.188 11.188 0 0 1 5.23 8.432a6.272 6.272 0 0 1 1.847-4.285 6.718 6.718 0 0 1 2.694-1.752 6.608 6.608 0 0 1 3.648-.243 6.831 6.831 0 0 1 5.343 5.711.507.507 0 0 1-.344.603 4.95 4.95 0 0 1-1.573.374 14.831 14.831 0 0 1-3.148.045c-.42-.052-.496-.135-.5-.569-.004-.592-.001-1.184-.002-1.777l-.003-.276a.297.297 0 0 0-.314-.335c-.235-.008-.339.125-.34.34-.003 1.012-.002 2.023-.001 3.034 0 .288.182.358.427.358.909-.001 1.818-.004 2.727.002a6.945 6.945 0 0 1 1.67.162 1.203 1.203 0 0 1 1.012 1.635 14.17 14.17 0 0 1-1.494 3.871 34.228 34.228 0 0 1-3.577 5.26c-.345.43-.711.842-1.06 1.268-.158.193-.277.189-.43-.01a43.866 43.866 0 0 1-3.427-4.956c-.127-.22-.226-.457-.333-.688-.103-.222-.02-.368.193-.467a2.596 2.596 0 0 1 .8-.195 7.704 7.704 0 0 1 2.348.02c.45.082.524.188.523.639 0 .347-.005.694 0 1.042.003.22.066.431.33.43.262-.003.324-.215.326-.435.004-.725-.002-1.45.003-2.176.002-.312-.195-.371-.445-.372q-1.041-.002-2.083 0Z",
    "data-name": "Brand Logos"
  }));
}
var uim_swiggy_default = UimSwiggy;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-sync-exclamation.js
var React250 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSyncExclamation(props) {
  return React250.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React250.createElement("path", {
    opacity: 1,
    d: "M12 13a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1zm0 3a.99.99 0 0 1-1-1 1.05 1.05 0 0 1 .29-.71 1.027 1.027 0 0 1 .33-.21 1.002 1.002 0 0 1 1.09.21A1.052 1.052 0 0 1 13 15a.99.99 0 0 1-1 1z"
  }), React250.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10.017 10.017 0 0 0-7 2.877V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.218A7.98 7.98 0 0 1 20 12a1 1 0 0 0 2 0A10.011 10.011 0 0 0 12 2zm8 13.5h-4.5a1 1 0 0 0 0 2h2.282A7.98 7.98 0 0 1 4 12a1 1 0 0 0-2 0 9.987 9.987 0 0 0 17 7.123V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-1-1z"
  }));
}
var uim_sync_exclamation_default = UimSyncExclamation;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-sync-slash.js
var React251 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimSyncSlash(props) {
  return React251.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React251.createElement("path", {
    opacity: 0.5,
    d: "M12 2C9.4 2 6.9 3 5 4.9V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2c3-3.2 8.1-3.3 11.3-.3C19.1 7.7 20 9.8 20 12c0 .6.4 1 1 1s1-.4 1-1c0-5.5-4.5-10-10-10zm8 13.5h-4.5c-.6 0-1 .4-1 1s.4 1 1 1h2.3c-3 3.2-8.1 3.3-11.3.3C4.9 16.3 4 14.2 4 12c0-.6-.4-1-1-1s-1 .4-1 1c0 5.5 4.5 10 10 10 2.6 0 5.2-1 7-2.9V21c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.6-.4-1-1-1z"
  }), React251.createElement("path", {
    opacity: 1,
    d: "M3 22c-.6 0-1-.4-1-1 0-.3.1-.5.3-.7l18-18c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-18 18c-.2.2-.4.3-.7.3z"
  }));
}
var uim_sync_slash_default = UimSyncSlash;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-table.js
var React252 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimTable(props) {
  return React252.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React252.createElement("path", {
    opacity: 1,
    d: "M21,22H3a.99974.99974,0,0,1-1-1V3A.99974.99974,0,0,1,3,2H21a.99974.99974,0,0,1,1,1V21A.99974.99974,0,0,1,21,22ZM4,20H20V4H4Z"
  }), React252.createElement("path", {
    opacity: 1,
    d: "M9 22a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 9 22zM15 22a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 15 22z"
  }), React252.createElement("path", {
    opacity: 1,
    d: "M21 10H3A1 1 0 0 1 3 8H21a1 1 0 0 1 0 2zM21 16H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
  }));
}
var uim_table_default = UimTable;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-telegram.js
var React253 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimTelegram(props) {
  return React253.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React253.createElement("path", {
    opacity: 0.5,
    d: "M15.174 17.152a.705.705 0 0 1-1.002.352l-2.715-2.11-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989.01.009.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23.012-.23-.361 0-.361 0l-6.473 4.164-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258l-1.908 9.746z"
  }), React253.createElement("path", {
    opacity: 1,
    d: "M11.994 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm3.18 15.152a.705.705 0 0 1-1.002.352l-2.715-2.11-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989.01.009.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23.012-.23-.361 0-.361 0l-6.473 4.164-2.695-.918s-.414-.149-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258l-1.908 9.746z"
  }));
}
var uim_telegram_default = UimTelegram;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-telegram-alt.js
var React254 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimTelegramAlt(props) {
  return React254.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React254.createElement("path", {
    opacity: 0.5,
    d: "M17.688 21.744a2.02 2.02 0 0 1-1.242-.427l-4.03-3.122-2.702 2.983a1 1 0 0 1-1.698-.383l-2.02-6.682-3.626-1.26a2.042 2.042 0 0 1-.103-3.818L20.187 1.8a2.042 2.042 0 0 1 2.771 2.295L19.695 20.11a2.054 2.054 0 0 1-2.008 1.633Z"
  }), React254.createElement("path", {
    opacity: 1,
    d: "M8.973 21.506a1 1 0 0 1-.957-.71l-2.168-7.16a.999.999 0 0 1 .495-1.176L16.91 6.958a1 1 0 0 1 1.17 1.594l-7.084 7.083-1.044 5.072a1 1 0 0 1-.933.798h-.046Z"
  }));
}
var uim_telegram_alt_default = UimTelegramAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-th-large.js
var React255 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimThLarge(props) {
  return React255.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React255.createElement("path", {
    opacity: 1,
    d: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-9 16H5v-6h6Zm0-8H5V5h6Zm8 8h-6v-6h6Zm0-8h-6V5h6Z"
  }));
}
var uim_th_large_default = UimThLarge;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-times-circle.js
var React256 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimTimesCircle(props) {
  return React256.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React256.createElement("path", {
    opacity: 1,
    d: "m13.414 12 3.293-3.293a1 1 0 0 0-1.414-1.414L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 0 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414Z"
  }), React256.createElement("path", {
    opacity: 0.5,
    d: "M19.07 4.93A10 10 0 1 0 4.93 19.07 10 10 0 1 0 19.07 4.93Zm-2.363 10.363a1 1 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414L13.414 12Z"
  }));
}
var uim_times_circle_default = UimTimesCircle;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-toggle-off.js
var React257 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimToggleOff(props) {
  return React257.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React257.createElement("path", {
    opacity: 0.5,
    d: "M16.5 17.5h-9a5.5 5.5 0 1 1 0-11h9a5.5 5.5 0 1 1 0 11z"
  }), React257.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 2.5,
    opacity: 1
  }));
}
var uim_toggle_off_default = UimToggleOff;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-toggle-on.js
var React258 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimToggleOn(props) {
  return React258.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React258.createElement("circle", {
    cx: 16.5,
    cy: 12,
    r: 2.5,
    opacity: 0.5
  }), React258.createElement("path", {
    opacity: 1,
    d: "M16.5 6.5h-9a5.5 5.5 0 0 0 0 11h9a5.5 5.5 0 0 0 0-11zm0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
  }));
}
var uim_toggle_on_default = UimToggleOn;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-toilet-paper.js
var React259 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimToiletPaper(props) {
  return React259.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React259.createElement("ellipse", {
    cx: 7,
    cy: 7.993,
    opacity: 1,
    rx: 1,
    ry: 1.25
  }), React259.createElement("path", {
    opacity: 0.5,
    d: "M7 2C4.243 2 2 4.691 2 8s2.243 6 5 6 5-2.691 5-6-2.243-6-5-6Zm0 7.243a1.146 1.146 0 0 1-1-1.25 1.146 1.146 0 0 1 1-1.25 1.146 1.146 0 0 1 1 1.25 1.146 1.146 0 0 1-1 1.25Z"
  }), React259.createElement("path", {
    opacity: 0.25,
    d: "M22.76 20.35A7.504 7.504 0 0 1 21 15.459V8c0-3.309-2.243-6-5-6H7c2.757 0 5 2.691 5 6v7.459a9.507 9.507 0 0 0 2.24 6.191A1.001 1.001 0 0 0 15 22h7a1 1 0 0 0 .76-1.65Z"
  }), React259.createElement("path", {
    opacity: 1,
    d: "M12 8c0 3.309-2.243 6-5 6h5Z"
  }));
}
var uim_toilet_paper_default = UimToiletPaper;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-triangle.js
var React260 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimTriangle(props) {
  return React260.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React260.createElement("path", {
    opacity: 1,
    d: "M21,20.794H3a1,1,0,0,1-.86621-1.5l9-15.5879a1.04009,1.04009,0,0,1,1.73242,0l9,15.5879A1,1,0,0,1,21,20.794Z"
  }));
}
var uim_triangle_default = UimTriangle;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-tumblr.js
var React261 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimTumblr(props) {
  return React261.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React261.createElement("path", {
    opacity: 1,
    d: "M16.785 17.974a4.729 4.729 0 0 1-1.614.346 1.755 1.755 0 0 1-1.925-1.972v-6.226h4.017V7.095H13.26V2h-2.93a.157.157 0 0 0-.143.15 6.12 6.12 0 0 1-3.935 5.389v2.583h2.024v6.536c0 2.236 1.65 5.415 6.007 5.34a5.337 5.337 0 0 0 3.463-1.17l-.962-2.854",
    "data-name": "Brand Logos"
  }));
}
var uim_tumblr_default = UimTumblr;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-tumblr-alt.js
var React262 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimTumblrAlt(props) {
  return React262.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React262.createElement("path", {
    opacity: 1,
    d: "M16.785 17.974a4.729 4.729 0 0 1-1.614.346 1.755 1.755 0 0 1-1.925-1.972V11h4.017V7.095H13.26V2h-2.93a.157.157 0 0 0-.143.15 6.12 6.12 0 0 1-3.935 5.389v3.583h2.024v5.536c0 2.236 1.65 5.415 6.007 5.34a5.337 5.337 0 0 0 3.463-1.17l-.962-2.854",
    "data-name": "Brand Logos"
  }));
}
var uim_tumblr_alt_default = UimTumblrAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-tumblr-square.js
var React263 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimTumblrSquare(props) {
  return React263.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React263.createElement("path", {
    opacity: 0.5,
    d: "M13.571 17.85a3.396 3.396 0 0 1-3.747-3.332v-4.076H8.562v-1.61a3.817 3.817 0 0 0 2.454-3.363.099.099 0 0 1 .09-.093h1.827v3.178h2.496v1.888h-2.505v3.884a1.094 1.094 0 0 0 1.2 1.229 2.936 2.936 0 0 0 1.007-.215l.6 1.779c-.611.49-1.376.75-2.16.73z"
  }), React263.createElement("path", {
    opacity: 1,
    d: "M2.019 2v20h19.963V2H2.019zm11.552 15.85a3.396 3.396 0 0 1-3.747-3.332v-4.076H8.562v-1.61a3.817 3.817 0 0 0 2.454-3.363.099.099 0 0 1 .09-.093h1.827v3.178h2.496v1.888h-2.505v3.884a1.094 1.094 0 0 0 1.2 1.229 2.936 2.936 0 0 0 1.007-.215l.6 1.779c-.611.49-1.376.75-2.16.73z"
  }));
}
var uim_tumblr_square_default = UimTumblrSquare;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-twitter.js
var React264 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimTwitter(props) {
  return React264.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React264.createElement("path", {
    opacity: 1,
    d: "M22 5.796a8.192 8.192 0 0 1-2.357.646 4.115 4.115 0 0 0 1.805-2.27 8.197 8.197 0 0 1-2.606.996 4.105 4.105 0 0 0-7.097 2.808 4.15 4.15 0 0 0 .105.935 11.65 11.65 0 0 1-8.456-4.287 4.107 4.107 0 0 0 1.27 5.478 4.084 4.084 0 0 1-1.86-.513v.052a4.105 4.105 0 0 0 3.292 4.023 4.082 4.082 0 0 1-1.081.143 4.165 4.165 0 0 1-.773-.072 4.108 4.108 0 0 0 3.832 2.85A8.261 8.261 0 0 1 2 18.282a11.611 11.611 0 0 0 6.29 1.844A11.594 11.594 0 0 0 19.962 8.453q0-.267-.013-.53A8.36 8.36 0 0 0 22 5.796Z",
    "data-name": "Brand Logos"
  }));
}
var uim_twitter_default = UimTwitter;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-twitter-alt.js
var React265 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimTwitterAlt(props) {
  return React265.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React265.createElement("path", {
    opacity: 1,
    d: "M20.475 7.805c.01.185.01.37.01.545a11.885 11.885 0 0 1-.493 3.362A11.729 11.729 0 0 1 8.485 20.36a11.9 11.9 0 0 1-6.467-1.902 8.152 8.152 0 0 0 1.007.061 8.45 8.45 0 0 0 5.234-1.81 4.223 4.223 0 0 1-3.938-2.92 5.04 5.04 0 0 0 .792.072 4.04 4.04 0 0 0 1.12-.154 4.2 4.2 0 0 1-3.372-3.815 1.66 1.66 0 0 1-.02-.319v-.051a4.167 4.167 0 0 0 1.912.524A4.202 4.202 0 0 1 2.88 6.54a4.273 4.273 0 0 1 .566-2.129 11.968 11.968 0 0 0 8.7 4.412 4.219 4.219 0 0 1 7.187-3.846 8.443 8.443 0 0 0 2.684-1.028 4.978 4.978 0 0 1-1.543 3.856Z",
    "data-name": "Brand Logos"
  }));
}
var uim_twitter_alt_default = UimTwitterAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-unlock.js
var React266 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimUnlock(props) {
  return React266.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React266.createElement("path", {
    opacity: 1,
    d: "M7 9h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3z"
  }), React266.createElement("path", {
    opacity: 0.5,
    d: "M9 7a3.002 3.002 0 0 1 5.116-2.13c.378.383.65.858.786 1.379l.002.007a1 1 0 0 0 1.934-.505 5.09 5.09 0 0 0-1.306-2.293A5.002 5.002 0 0 0 7 7v2h2V7z"
  }));
}
var uim_unlock_default = UimUnlock;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-unlock-alt.js
var React267 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimUnlockAlt(props) {
  return React267.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React267.createElement("path", {
    opacity: 0.5,
    d: "M8 11a1 1 0 0 1-1-1V7a5.002 5.002 0 0 1 8.532-3.542 5.09 5.09 0 0 1 1.306 2.293 1 1 0 0 1-1.934.505l-.002-.007a3.072 3.072 0 0 0-.786-1.379A3.002 3.002 0 0 0 9 7v3a1 1 0 0 1-1 1zM12 18a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1z"
  }), React267.createElement("path", {
    opacity: 1,
    d: "M17 9H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm-4 8a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0v3z"
  }));
}
var uim_unlock_alt_default = UimUnlockAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-upload-alt.js
var React268 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimUploadAlt(props) {
  return React268.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React268.createElement("path", {
    opacity: 1,
    d: "m15.707 5.293-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L11 5.414V17a1 1 0 0 0 2 0V5.414l1.293 1.293a1 1 0 0 0 1.414-1.414Z"
  }), React268.createElement("path", {
    opacity: 0.5,
    d: "M18 9h-5v8a1 1 0 0 1-2 0V9H6a3.003 3.003 0 0 0-3 3v7a3.003 3.003 0 0 0 3 3h12a3.003 3.003 0 0 0 3-3v-7a3.003 3.003 0 0 0-3-3Z"
  }));
}
var uim_upload_alt_default = UimUploadAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-user-arrows.js
var React269 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimUserArrows(props) {
  return React269.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React269.createElement("path", {
    opacity: 0.25,
    d: "M6 16.5A3.5 3.5 0 1 1 9.5 13 3.504 3.504 0 0 1 6 16.5Z"
  }), React269.createElement("path", {
    opacity: 0.5,
    d: "M8.64 15.272a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 1 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.988 4.988 0 0 0-2.36-4.228zM18 16.5a3.5 3.5 0 1 1 3.5-3.5 3.504 3.504 0 0 1-3.5 3.5z"
  }), React269.createElement("path", {
    opacity: 0.7,
    d: "M20.64 15.272a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 13 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.988 4.988 0 0 0-2.36-4.228Z"
  }), React269.createElement("path", {
    opacity: 1,
    d: "m17.207 5.793-2-2a1 1 0 0 0-1.414 1.414l.293.293H9.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L9.914 7.5h4.172l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414Z"
  }));
}
var uim_user_arrows_default = UimUserArrows;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-user-md.js
var React270 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimUserMd(props) {
  return React270.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React270.createElement("path", {
    opacity: 1,
    d: "M17.998 8.064 6.003 8.11l-.277-3.325A3 3 0 0 1 8.17 1.482l.789-.143a17.031 17.031 0 0 1 6.086 0l.786.143a3 3 0 0 1 2.443 3.302Z"
  }), React270.createElement("path", {
    opacity: 0.25,
    d: "M6.009 8.109a5.994 5.994 0 0 0 11.984-.045Z"
  }), React270.createElement("path", {
    opacity: 1,
    d: "m17.198 13.385-4.49 4.49a1 1 0 0 1-1.415 0l-4.491-4.49a9.945 9.945 0 0 0-4.736 7.44 1 1 0 0 0 .994 1.108h17.88a1 1 0 0 0 .994-1.108 9.945 9.945 0 0 0-4.736-7.44Z"
  }), React270.createElement("path", {
    opacity: 0.5,
    d: "M15.69 12.654a6.012 6.012 0 0 1-7.381 0 10.004 10.004 0 0 0-1.507.73l4.491 4.492a1 1 0 0 0 1.414 0l4.491-4.491a10.005 10.005 0 0 0-1.507-.731Z"
  }));
}
var uim_user_md_default = UimUserMd;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-user-nurse.js
var React271 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimUserNurse(props) {
  return React271.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React271.createElement("path", {
    opacity: 0.5,
    d: "M20.94 22H3.06a1 1 0 0 1-.994-1.108 9.995 9.995 0 0 1 19.868 0A1 1 0 0 1 20.94 22Z"
  }), React271.createElement("path", {
    opacity: 0.25,
    d: "m12.708 18.307 4.706-4.715a10.001 10.001 0 0 0-10.833.003l4.712 4.712A1 1 0 0 0 12 18.6a1.002 1.002 0 0 0 .708-.293Z"
  }), React271.createElement("path", {
    opacity: 0.25,
    d: "M11.995 14a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z"
  }), React271.createElement("path", {
    opacity: 1,
    d: "M6.09 9a5.993 5.993 0 0 0 11.82 0Z"
  }));
}
var uim_user_nurse_default = UimUserNurse;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-vector-square.js
var React272 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimVectorSquare(props) {
  return React272.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React272.createElement("path", {
    opacity: 1,
    d: "M5 8a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1zm14 4a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1zM5 22a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1zm14 4a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1z"
  }), React272.createElement("path", {
    opacity: 0.5,
    d: "M16.184 20a2.805 2.805 0 0 1 0-2H7.816a2.806 2.806 0 0 1 0 2zM19 8a2.965 2.965 0 0 1-1-.184v8.368a2.806 2.806 0 0 1 2 0V7.816A2.965 2.965 0 0 1 19 8zM7.816 4A2.965 2.965 0 0 1 8 5a2.965 2.965 0 0 1-.184 1h8.368A2.965 2.965 0 0 1 16 5a2.965 2.965 0 0 1 .184-1zM5 16a2.965 2.965 0 0 1 1 .184V7.816A2.965 2.965 0 0 1 5 8a2.965 2.965 0 0 1-1-.184v8.368A2.965 2.965 0 0 1 5 16z"
  }));
}
var uim_vector_square_default = UimVectorSquare;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-vector-square-alt.js
var React273 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimVectorSquareAlt(props) {
  return React273.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React273.createElement("path", {
    opacity: 1,
    d: "M4 22a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002zM4 6a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002zM20 6a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002zM20 22a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002z"
  }), React273.createElement("rect", {
    width: 10,
    height: 10,
    x: 7,
    y: 7,
    opacity: 0.5,
    rx: 1
  }), React273.createElement("path", {
    opacity: 0.25,
    d: "M18.278 5a1.936 1.936 0 0 1 0-2H5.722a1.936 1.936 0 0 1 0 2zM20 18a1.976 1.976 0 0 1 1 .278V5.722a1.936 1.936 0 0 1-2 0v12.556A1.976 1.976 0 0 1 20 18zM4 18a1.976 1.976 0 0 1 1 .278V5.722a1.936 1.936 0 0 1-2 0v12.556A1.976 1.976 0 0 1 4 18zm14.278 1H5.722a1.936 1.936 0 0 1 0 2h12.556a1.936 1.936 0 0 1 0-2z"
  }));
}
var uim_vector_square_alt_default = UimVectorSquareAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-virus-slash.js
var React274 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimVirusSlash(props) {
  return React274.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React274.createElement("circle", {
    cx: 9,
    cy: 15,
    r: 1,
    opacity: 1
  }), React274.createElement("circle", {
    cx: 15,
    cy: 9,
    r: 1,
    opacity: 1
  }), React274.createElement("path", {
    opacity: 0.25,
    d: "M12 8a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1zm0 15a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1zm10-10h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"
  }), React274.createElement("path", {
    opacity: 1,
    d: "m4.98 17.607-.758.757a1 1 0 1 0 1.414 1.414l.758-.757a9.06 9.06 0 0 1-1.415-1.414zM19.02 6.394l.758-.758a1 1 0 0 0-1.414-1.414l-.757.757a9.06 9.06 0 0 1 1.414 1.415z"
  }), React274.createElement("path", {
    opacity: 0.25,
    d: "M6 13H2a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Z"
  }), React274.createElement("path", {
    opacity: 1,
    d: "M22 23.002a.997.997 0 0 1-.707-.293l-20-20a1 1 0 0 1 1.414-1.414l20 20A1 1 0 0 1 22 23.002Z"
  }), React274.createElement("path", {
    opacity: 0.7,
    d: "M15.746 14.334a1.5 1.5 0 0 0-2.08-2.08zM8.252 9.668a1.5 1.5 0 0 0 2.08 2.08z"
  }), React274.createElement("path", {
    opacity: 0.5,
    d: "m17.606 19.022-7.274-7.274a1.5 1.5 0 0 1-2.08-2.08L4.978 6.394A8.943 8.943 0 0 0 3.06 11H6a1 1 0 0 1 0 2H3.059A9.012 9.012 0 0 0 11 20.94V17a1 1 0 0 1 2 0v3.941a8.949 8.949 0 0 0 4.606-1.919zM9 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM6.392 4.98l7.274 7.274a1.5 1.5 0 0 1 2.08 2.08l3.275 3.274A8.949 8.949 0 0 0 20.94 13H18a1 1 0 0 1 0-2h2.94A9.012 9.012 0 0 0 13 3.059V7a1 1 0 0 1-2 0V3.06a8.953 8.953 0 0 0-4.608 1.92zM15 8a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
  }));
}
var uim_virus_slash_default = UimVirusSlash;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-visual-studio.js
var React275 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimVisualStudio(props) {
  return React275.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React275.createElement("path", {
    opacity: 1,
    d: "M9.13313,14.2416,4.19906,18.08677,2.04679,17.01489V6.99362L4.19056,5.91323l4.9,3.85368L16.849,2l5.10421,2.03318V19.93279L16.87452,22Zm7.56275,1.35261V8.40579L12.051,12.00425l4.64484,3.59ZM4.3692,14.30115l2.44152-2.22033L4.3692,9.64781Z"
  }));
}
var uim_visual_studio_default = UimVisualStudio;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-vk.js
var React276 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimVk(props) {
  return React276.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React276.createElement("path", {
    opacity: 0.5,
    d: "M18.146 16.27h-1.459c-.552 0-.718-.447-1.708-1.437-.864-.833-1.229-.937-1.448-.937-.302 0-.385.083-.385.5v1.312c0 .355-.115.563-1.042.563a5.692 5.692 0 0 1-4.448-2.667 11.626 11.626 0 0 1-2.302-4.833c0-.219.083-.417.5-.417h1.458c.375 0 .51.167.657.552.708 2.084 1.916 3.896 2.406 3.896.187 0 .27-.083.27-.552v-2.146c-.062-.979-.583-1.062-.583-1.416a.36.36 0 0 1 .375-.334h2.292c.313 0 .417.156.417.531v2.896c0 .313.135.417.229.417.187 0 .333-.104.677-.448.739-.9 1.342-1.904 1.792-2.98a.628.628 0 0 1 .635-.416h1.458c.438 0 .532.219.438.531a18.205 18.205 0 0 1-1.958 3.365c-.157.24-.22.365 0 .646.145.219.656.646 1 1.052.5.499.915 1.076 1.229 1.708.125.406-.084.615-.5.615z"
  }), React276.createElement("path", {
    opacity: 1,
    d: "M15.073 2H8.937C3.333 2 2 3.333 2 8.927v6.136C2 20.666 3.323 22 8.927 22h6.136C20.666 22 22 20.677 22 15.073V8.937C22 3.333 20.677 2 15.073 2zm3.073 14.27h-1.459c-.552 0-.718-.447-1.708-1.437-.864-.833-1.229-.937-1.448-.937-.302 0-.385.083-.385.5v1.312c0 .355-.115.563-1.042.563a5.692 5.692 0 0 1-4.448-2.667 11.626 11.626 0 0 1-2.302-4.833c0-.219.083-.417.5-.417h1.458c.375 0 .51.167.657.552.708 2.084 1.916 3.896 2.406 3.896.188 0 .27-.083.27-.552v-2.146c-.062-.979-.582-1.062-.582-1.416a.36.36 0 0 1 .374-.334h2.292c.313 0 .417.156.417.531v2.896c0 .313.135.417.229.417.188 0 .333-.104.677-.448a12 12 0 0 0 1.792-2.98.628.628 0 0 1 .635-.416h1.459c.437 0 .53.219.437.531a18.205 18.205 0 0 1-1.958 3.365c-.157.24-.22.365 0 .646.146.219.656.646 1 1.052.5.499.915 1.076 1.229 1.708.125.406-.084.615-.5.615z"
  }));
}
var uim_vk_default = UimVk;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-vk-alt.js
var React277 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimVkAlt(props) {
  return React277.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React277.createElement("path", {
    opacity: 0.5,
    d: "M15.063 23H8.927C2.777 23 1 21.22 1 15.062V8.928C1 2.778 2.78 1 8.938 1h6.135C21.223 1 23 2.78 23 8.938v6.135C23 21.222 21.22 23 15.062 23z"
  }), React277.createElement("path", {
    opacity: 1,
    d: "M11.654 17.002c-.21 0-.415-.066-.586-.19a13.334 13.334 0 0 1-5.4-8.643 1 1 0 0 1 1.972-.334 11.307 11.307 0 0 0 3.014 5.99V8.001a1 1 0 1 1 2 0v8a1 1 0 0 1-.999 1z"
  }), React277.createElement("path", {
    opacity: 1,
    d: "M16.655 17.002a.998.998 0 0 1-.738-.324L14.27 14.88a3.552 3.552 0 0 0-1.615-1.005v2.126a1 1 0 1 1-2 0v-3.27a1 1 0 0 1 .999-1 5.562 5.562 0 0 1 4.09 1.797l1.647 1.797a1 1 0 0 1-.736 1.676z"
  }), React277.createElement("path", {
    opacity: 1,
    d: "M11.65 14.96a1 1 0 0 1-1-1V8.04a1 1 0 1 1 2 0v5.92a1 1 0 0 1-1 1z"
  }), React277.createElement("path", {
    opacity: 1,
    d: "M12.57 13.83a1 1 0 0 1-.38-1.926 5.86 5.86 0 0 0 3.485-4.126 1 1 0 1 1 1.95.444 7.865 7.865 0 0 1-4.676 5.534.996.996 0 0 1-.379.074zm-.916-4.828h-.003L10.997 9A1 1 0 0 1 10 7.997 1.03 1.03 0 0 1 11.003 7l.654.002a1 1 0 0 1-.003 2z"
  }));
}
var uim_vk_alt_default = UimVkAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-vuejs.js
var React278 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimVuejs(props) {
  return React278.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React278.createElement("path", {
    opacity: 1,
    d: "m6.976 3.433 3.646.002 1.384 1.956 1.374-1.956 3.643-.001-5 8.406-5.047-8.407z"
  }), React278.createElement("path", {
    opacity: 1,
    d: "M14.6 2.43a1 1 0 0 0-.819.425L12 5.39l-1.791-2.537a1 1 0 0 0-.817-.423H6.38l3.55 5.92 2.1 3.5 2.07-3.5 3.52-5.92H14.6z"
  }), React278.createElement("path", {
    opacity: 0.5,
    d: "m22.001 2.438-4.384-.003L14.1 8.35l-2.07 3.5-2.1-3.5-3.546-5.913-4.39.024a1 1 0 0 0-.857 1.506l10.02 17.105a1 1 0 0 0 1.727-.002l9.98-17.128a1 1 0 0 0-.863-1.504z"
  }));
}
var uim_vuejs_default = UimVuejs;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-vuejs-alt.js
var React279 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimVuejsAlt(props) {
  return React279.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React279.createElement("path", {
    opacity: 0.5,
    d: "M12.018 19.151 4.315 6h2.823l4.886 8.407L16.871 6h2.809z"
  }), React279.createElement("path", {
    opacity: 1,
    d: "m14.38 4.001-2.374 3.956-2.384-3.956H.825L12.02 23.115 23.161 4H14.38zm-2.362 15.15L4.315 6h2.823l4.886 8.407L16.871 6h2.809l-7.662 13.151z"
  }));
}
var uim_vuejs_alt_default = UimVuejsAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-web-grid.js
var React280 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWebGrid(props) {
  return React280.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React280.createElement("polygon", {
    opacity: 0.25,
    points: "2 13 14 13 14 22 16 22 16 13 16 13 16 11 16 11 16 2 14 2 14 11 2 11"
  }), React280.createElement("path", {
    opacity: 1,
    d: "M21,22h-5l0,0V2l0,0h5c0.55228,0,1,0.44772,1,1v18C22,21.55228,21.55228,22,21,22z"
  }), React280.createElement("path", {
    opacity: 0.5,
    d: "M14 22H3c-.55229 0-1-.44772-1-1v-8l0 0h12l0 0V22L14 22zM14 11H2l0 0V3c0-.55229.44771-1 1-1h11l0 0V11L14 11z"
  }));
}
var uim_web_grid_default = UimWebGrid;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-web-grid-alt.js
var React281 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWebGridAlt(props) {
  return React281.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React281.createElement("polygon", {
    opacity: 0.25,
    points: "22 8 2 8 2 10 11 10 11 22 13 22 13 10 22 10"
  }), React281.createElement("path", {
    opacity: 1,
    d: "M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z"
  }), React281.createElement("path", {
    opacity: 0.5,
    d: "M2,10h9l0,0v12l0,0H3c-0.55228,0-1-0.44772-1-1V10L2,10z M13,10h9l0,0v11c0,0.55228-0.44772,1-1,1h-8l0,0V10L13,10z"
  }));
}
var uim_web_grid_alt_default = UimWebGridAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-web-section.js
var React282 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWebSection(props) {
  return React282.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React282.createElement("rect", {
    width: 2,
    height: 20,
    x: 14,
    y: 2,
    opacity: 0.25
  }), React282.createElement("path", {
    opacity: 0.5,
    d: "M3,2h11l0,0v20l0,0H3c-0.55228,0-1-0.44772-1-1V3C2,2.44772,2.44772,2,3,2z"
  }), React282.createElement("path", {
    opacity: 1,
    d: "M16,2h5c0.55228,0,1,0.44772,1,1v18c0,0.55228-0.44772,1-1,1h-5l0,0V2L16,2z"
  }));
}
var uim_web_section_default = UimWebSection;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-web-section-alt.js
var React283 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWebSectionAlt(props) {
  return React283.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React283.createElement("path", {
    opacity: 0.25,
    d: "M9.9,2H8.1C8.00154,2.32358,7.96757,2.66333,8,3v18c-0.03243,0.33667,0.00154,0.67642,0.1,1h1.8c0.09846-0.32358,0.13243-0.66333,0.1-1V3C10.03243,2.66333,9.99846,2.32358,9.9,2z"
  }), React283.createElement("path", {
    opacity: 1,
    d: "M3,2h5l0,0v20l0,0H3c-0.55228,0-1-0.44772-1-1V3C2,2.44772,2.44772,2,3,2z"
  }), React283.createElement("path", {
    opacity: 0.5,
    d: "M10,2h11c0.55228,0,1,0.44772,1,1v18c0,0.55228-0.44772,1-1,1H10l0,0V2L10,2z"
  }));
}
var uim_web_section_alt_default = UimWebSectionAlt;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-whatsapp.js
var React284 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWhatsapp(props) {
  return React284.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React284.createElement("path", {
    opacity: 1,
    d: "M21.99 6.547a10.59 10.59 0 0 0-.103-1.282 4.312 4.312 0 0 0-.363-1.09A3.853 3.853 0 0 0 19.83 2.48a4.299 4.299 0 0 0-1.083-.362 10.523 10.523 0 0 0-1.292-.105c-.183-.007-.42-.01-.53-.01L7.077 2c-.11 0-.347.003-.53.01a10.565 10.565 0 0 0-1.282.103 4.312 4.312 0 0 0-1.09.363A3.854 3.854 0 0 0 2.48 4.17a4.303 4.303 0 0 0-.362 1.083 10.545 10.545 0 0 0-.106 1.292c-.006.183-.01.42-.01.53L2 16.923c0 .11.003.347.01.53a10.565 10.565 0 0 0 .103 1.282 4.313 4.313 0 0 0 .363 1.09A3.854 3.854 0 0 0 4.17 21.52a4.305 4.305 0 0 0 1.083.362 10.52 10.52 0 0 0 1.292.105c.183.007.42.01.53.01l9.848.002c.11 0 .347-.003.53-.01a10.578 10.578 0 0 0 1.282-.103 4.316 4.316 0 0 0 1.09-.363 3.854 3.854 0 0 0 1.696-1.694 4.301 4.301 0 0 0 .362-1.083 10.533 10.533 0 0 0 .106-1.292c.006-.183.01-.42.01-.53L22 7.077c0-.11-.003-.347-.01-.53Zm-9.773 12.41h-.003a7.126 7.126 0 0 1-3.407-.868l-3.78.991 1.012-3.693a7.13 7.13 0 1 1 6.178 3.57Z"
  }), React284.createElement("path", {
    opacity: 1,
    d: "M12.22 5.901a5.927 5.927 0 0 0-5.023 9.076l.141.224-.599 2.186 2.243-.588.216.128a5.918 5.918 0 0 0 3.016.826h.003A5.926 5.926 0 0 0 12.219 5.9Zm3.484 8.47a1.834 1.834 0 0 1-1.202.847 2.443 2.443 0 0 1-1.122-.07 10.276 10.276 0 0 1-1.015-.376 7.94 7.94 0 0 1-3.043-2.689 3.463 3.463 0 0 1-.728-1.842 1.997 1.997 0 0 1 .624-1.485.655.655 0 0 1 .475-.223c.118 0 .237 0 .341.006.11.005.256-.042.4.306.15.356.506 1.233.55 1.322a.328.328 0 0 1 .015.312 1.216 1.216 0 0 1-.178.297c-.09.104-.187.232-.267.312-.09.089-.182.185-.079.363a5.366 5.366 0 0 0 .991 1.234 4.863 4.863 0 0 0 1.433.884c.178.09.282.074.386-.045s.445-.52.564-.698.237-.148.4-.089 1.04.49 1.218.58.297.133.341.207a1.488 1.488 0 0 1-.104.847Z"
  }));
}
var uim_whatsapp_default = UimWhatsapp;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-window-grid.js
var React285 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWindowGrid(props) {
  return React285.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React285.createElement("polygon", {
    opacity: 0.25,
    points: "22 11 10 11 10 2 8 2 8 11 8 11 8 13 8 13 8 22 10 22 10 13 22 13"
  }), React285.createElement("path", {
    opacity: 1,
    d: "M3,2h5l0,0v20l0,0H3c-0.55228,0-1-0.44772-1-1V3C2,2.44772,2.44772,2,3,2z"
  }), React285.createElement("path", {
    opacity: 0.5,
    d: "M10,2h11c0.55228,0,1,0.44772,1,1v8l0,0H10l0,0V2L10,2z M10,13h12l0,0v8c0,0.55228-0.44772,1-1,1H10l0,0V13L10,13z"
  }));
}
var uim_window_grid_default = UimWindowGrid;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-window-maximize.js
var React286 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWindowMaximize(props) {
  return React286.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React286.createElement("rect", {
    width: 20,
    height: 2,
    x: 2,
    y: 8,
    opacity: 0.25
  }), React286.createElement("path", {
    opacity: 1,
    d: "M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z"
  }), React286.createElement("path", {
    opacity: 0.5,
    d: "M2,10h20l0,0v11c0,0.55228-0.44772,1-1,1H3c-0.55228,0-1-0.44772-1-1V10L2,10z"
  }));
}
var uim_window_maximize_default = UimWindowMaximize;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-window-section.js
var React287 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWindowSection(props) {
  return React287.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React287.createElement("rect", {
    width: 6,
    height: 12,
    x: 9,
    y: 10,
    opacity: 0.5
  }), React287.createElement("path", {
    opacity: 0.5,
    d: "M2,10v11c0,0.55228,0.44772,1,1,1h4V10H2z"
  }), React287.createElement("polygon", {
    opacity: 0.25,
    points: "22 8 2 8 2 10 7 10 7 22 9 22 9 10 15 10 15 22 17 22 17 10 22 10"
  }), React287.createElement("path", {
    opacity: 0.5,
    d: "M17,10v12h4c0.55228,0,1-0.44772,1-1V10H17z"
  }), React287.createElement("path", {
    opacity: 1,
    d: "M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z"
  }));
}
var uim_window_section_default = UimWindowSection;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-windows.js
var React288 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWindows(props) {
  return React288.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React288.createElement("path", {
    opacity: 1,
    d: "M2.0292,4.83164,10.17746,3.722l.00351,7.85962L2.0366,11.628,2.0292,4.83172Zm8.14437,7.65549.00623,7.86647L2.03551,19.23386,2.03505,12.4344l8.13844.05273Zm.98773-8.91036L21.9651,2v9.48164l-10.8038.08567V3.57677Zm10.8063,8.98435L21.965,22,11.16122,20.47518l-.01511-7.93174Z"
  }));
}
var uim_windows_default = UimWindows;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-wordpress.js
var React289 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWordpress(props) {
  return React289.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React289.createElement("path", {
    opacity: 0.25,
    d: "M12,2.6A9.4,9.4,0,1,0,21.4,12,9.4,9.4,0,0,0,12,2.6Z"
  }), React289.createElement("path", {
    opacity: 1,
    d: "M12.14648 12.72858L9.64575 19.99377a8.33685 8.33685 0 0 0 5.12171-.13293.74428.74428 0 0 1-.0597-.11487zM3.66675 11.99963a8.33374 8.33374 0 0 0 4.69678 7.4997L4.38818 8.60834A8.30011 8.30011 0 0 0 3.66675 11.99963z"
  }), React289.createElement("path", {
    opacity: 1,
    d: "M17.62573,11.57941a4.38889,4.38889,0,0,0-.687-2.29816,3.90279,3.90279,0,0,1-.8186-1.95453,1.4429,1.4429,0,0,1,1.39941-1.47894c.037,0,.072.00445.10791.00671A8.3314,8.3314,0,0,0,5.03735,7.42255c.19556.00622.37989.01013.53626.01013.87146,0,2.22107-.106,2.22107-.106a.34448.34448,0,0,1,.05322.68677s-.45166.05286-.95361.07916l3.03442,9.02649,1.824-5.4693L10.45435,8.09265c-.449-.0263-.874-.07916-.874-.07916a.34447.34447,0,0,1,.053-.68677s1.37586.106,2.19458.106c.87146,0,2.22131-.106,2.22131-.106a.34447.34447,0,0,1,.0531.68677s-.452.05286-.95361.07916l3.01148,8.95777.85962-2.72407A9.60383,9.60383,0,0,0,17.62573,11.57941Z"
  }), React289.createElement("path", {
    opacity: 1,
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm7.79492,15.25519a9.4271,9.4271,0,0,1-4.13623,3.40631A9.38753,9.38753,0,0,1,6.74475,19.795a9.432,9.432,0,0,1-3.40637-4.13629,9.38577,9.38577,0,0,1,.8667-8.91394A9.4271,9.4271,0,0,1,8.34131,3.33844a9.38753,9.38753,0,0,1,8.91394.86652,9.432,9.432,0,0,1,3.40637,4.13629,9.38577,9.38577,0,0,1-.8667,8.91394Z"
  }), React289.createElement("path", {
    opacity: 1,
    d: "M19.36877,8.85876a7.86528,7.86528,0,0,1-.63391,2.98475L16.1897,19.20239A8.33428,8.33428,0,0,0,19.31274,8.002,6.38147,6.38147,0,0,1,19.36877,8.85876Z"
  }));
}
var uim_wordpress_default = UimWordpress;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-wordpress-simple.js
var React290 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWordpressSimple(props) {
  return React290.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React290.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    opacity: 0.25
  }), React290.createElement("path", {
    opacity: 1,
    d: "M12,1.99991a10.00009,10.00009,0,1,0,10,9.99975A10.01117,10.01117,0,0,0,12,1.99991ZM3.00928,11.99966a8.95545,8.95545,0,0,1,.77844-3.659L8.07654,20.09122A8.99125,8.99125,0,0,1,3.00928,11.99966ZM12,20.99112a8.98762,8.98762,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84324.84324,0,0,0,.06446.1239A8.97139,8.97139,0,0,1,12,20.99112ZM13.239,7.78427c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90088L6.49133,7.78427c.54163-.02844,1.02893-.08539,1.02893-.08539a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00416-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36948c-.0387-.00238-.07654-.00721-.11634-.00721A1.5567,1.5567,0,0,0,16.445,6.95792a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.7709l2.74609-7.93969a8.489,8.489,0,0,0,.68372-3.22028,6.9105,6.9105,0,0,0-.06043-.92456A8.99223,8.99223,0,0,1,16.52,19.7709Z"
  }));
}
var uim_wordpress_simple_default = UimWordpressSimple;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-wrap-text.js
var React291 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimWrapText(props) {
  return React291.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React291.createElement("path", {
    opacity: 0.5,
    d: "M21 7.167H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-12 10H3a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2z"
  }), React291.createElement("path", {
    opacity: 1,
    d: "M18.5 17.167H15a1 1 0 0 1 0-2h3.5a1.5 1.5 0 0 0 0-3H3a1 1 0 0 1 0-2h15.5a3.5 3.5 0 1 1 0 7Z"
  }), React291.createElement("path", {
    opacity: 1,
    d: "M14.999 18.833a.995.995 0 0 1-.639-.231l-2-1.666a1 1 0 0 1 0-1.538l2-1.667a1 1 0 0 1 1.28 1.538l-1.078.898 1.078.897a1 1 0 0 1-.641 1.769Z"
  }));
}
var uim_wrap_text_default = UimWrapText;

// node_modules/@iconscout/react-unicons-monochrome/icons/uim-youtube.js
var React292 = __toESM(require_react());
import "C:/Users/samue/proyecto-final-grupo-de-trabajo-06/Client/node_modules/@iconscout/react-unicons-monochrome/utils/style.css";
function UimYoutube(props) {
  return React292.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || "1em",
    height: props.size || "1em",
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ""}`
  }), React292.createElement("path", {
    opacity: 0.5,
    d: "M15.663 11.775c-2.017-1.078-3.948-2.078-5.922-3.112v6.19c2.077-1.13 4.267-2.164 5.931-3.087l-.009.009z"
  }), React292.createElement("path", {
    opacity: 1,
    d: "M22.974 9.715a8.539 8.539 0 0 0-.914-4.13 2.868 2.868 0 0 0-1.715-1.017 81.07 81.07 0 0 0-8.337-.293 80.928 80.928 0 0 0-8.336.293c-.55.102-1.058.36-1.466.741-.895.83-.96 2.251-1.095 3.449a47.52 47.52 0 0 0 0 6.482c.025.676.126 1.347.302 2 .12.506.362.974.707 1.363.408.402.928.672 1.491.775 2.156.267 4.329.377 6.5.328 3.495.056 6.573-.003 10.199-.276.58-.1 1.115-.373 1.534-.784.273-.272.48-.602.604-.966.362-1.095.54-2.243.526-3.396.034-.595.034-3.974 0-4.57zm-7.31 2.06-.004-.002c-.83.46-1.788.946-2.798 1.459-1.016.515-2.082 1.056-3.121 1.62v-6.19c.987.518 1.963 1.027 2.945 1.54.98.514 1.967 1.033 2.974 1.57l.012-.006-.008.009z"
  }));
}
var uim_youtube_default = UimYoutube;
export {
  uim_500px_default as Uim500px,
  uim_adobe_default as UimAdobe,
  uim_adobe_alt_default as UimAdobeAlt,
  uim_airplay_default as UimAirplay,
  uim_align_default as UimAlign,
  uim_align_alt_default as UimAlignAlt,
  uim_align_center_default as UimAlignCenter,
  uim_align_center_justify_default as UimAlignCenterJustify,
  uim_align_justify_default as UimAlignJustify,
  uim_align_left_default as UimAlignLeft,
  uim_align_left_justify_default as UimAlignLeftJustify,
  uim_align_letter_right_default as UimAlignLetterRight,
  uim_align_right_default as UimAlignRight,
  uim_align_right_justify_default as UimAlignRightJustify,
  uim_amazon_default as UimAmazon,
  uim_analysis_default as UimAnalysis,
  uim_analytics_default as UimAnalytics,
  uim_anchor_default as UimAnchor,
  uim_android_default as UimAndroid,
  uim_android_alt_default as UimAndroidAlt,
  uim_angle_double_down_default as UimAngleDoubleDown,
  uim_angle_double_left_default as UimAngleDoubleLeft,
  uim_angle_double_right_default as UimAngleDoubleRight,
  uim_angle_double_up_default as UimAngleDoubleUp,
  uim_angle_down_default as UimAngleDown,
  uim_angle_left_default as UimAngleLeft,
  uim_angle_right_default as UimAngleRight,
  uim_angle_right_b_default as UimAngleRightB,
  uim_angle_up_default as UimAngleUp,
  uim_apple_default as UimApple,
  uim_apple_alt_default as UimAppleAlt,
  uim_apps_default as UimApps,
  uim_arrow_circle_down_default as UimArrowCircleDown,
  uim_arrow_circle_left_default as UimArrowCircleLeft,
  uim_arrow_circle_right_default as UimArrowCircleRight,
  uim_arrow_circle_up_default as UimArrowCircleUp,
  uim_arrow_down_left_default as UimArrowDownLeft,
  uim_arrow_down_right_default as UimArrowDownRight,
  uim_arrow_up_left_default as UimArrowUpLeft,
  uim_arrow_up_right_default as UimArrowUpRight,
  uim_at_default as UimAt,
  uim_bag_default as UimBag,
  uim_bars_default as UimBars,
  uim_battery_bolt_default as UimBatteryBolt,
  uim_battery_empty_default as UimBatteryEmpty,
  uim_behance_default as UimBehance,
  uim_behance_alt_default as UimBehanceAlt,
  uim_bing_default as UimBing,
  uim_bitcoin_default as UimBitcoin,
  uim_bitcoin_alt_default as UimBitcoinAlt,
  uim_blackberry_default as UimBlackberry,
  uim_blogger_default as UimBlogger,
  uim_blogger_alt_default as UimBloggerAlt,
  uim_bookmark_default as UimBookmark,
  uim_border_alt_default as UimBorderAlt,
  uim_border_bottom_default as UimBorderBottom,
  uim_border_clear_default as UimBorderClear,
  uim_border_horizontal_default as UimBorderHorizontal,
  uim_border_inner_default as UimBorderInner,
  uim_border_left_default as UimBorderLeft,
  uim_border_out_default as UimBorderOut,
  uim_border_right_default as UimBorderRight,
  uim_border_top_default as UimBorderTop,
  uim_border_vertical_default as UimBorderVertical,
  uim_box_default as UimBox,
  uim_briefcase_default as UimBriefcase,
  uim_calender_default as UimCalender,
  uim_chart_default as UimChart,
  uim_chart_pie_default as UimChartPie,
  uim_check_default as UimCheck,
  uim_check_circle_default as UimCheckCircle,
  uim_check_square_default as UimCheckSquare,
  uim_circle_default as UimCircle,
  uim_circle_layer_default as UimCircleLayer,
  uim_clinic_medical_default as UimClinicMedical,
  uim_clock_default as UimClock,
  uim_clock_eight_default as UimClockEight,
  uim_clock_five_default as UimClockFive,
  uim_clock_nine_default as UimClockNine,
  uim_clock_seven_default as UimClockSeven,
  uim_clock_ten_default as UimClockTen,
  uim_clock_three_default as UimClockThree,
  uim_clock_two_default as UimClockTwo,
  uim_columns_default as UimColumns,
  uim_comment_default as UimComment,
  uim_comment_alt_default as UimCommentAlt,
  uim_comment_alt_dots_default as UimCommentAltDots,
  uim_comment_alt_message_default as UimCommentAltMessage,
  uim_comment_alt_plus_default as UimCommentAltPlus,
  uim_comment_dots_default as UimCommentDots,
  uim_comment_message_default as UimCommentMessage,
  uim_comment_plus_default as UimCommentPlus,
  uim_compress_default as UimCompress,
  uim_corner_down_left_default as UimCornerDownLeft,
  uim_corner_down_right_default as UimCornerDownRight,
  uim_corner_left_down_default as UimCornerLeftDown,
  uim_corner_right_down_default as UimCornerRightDown,
  uim_corner_up_left_default as UimCornerUpLeft,
  uim_corner_up_right_default as UimCornerUpRight,
  uim_coronavirus_default as UimCoronavirus,
  uim_css3_default as UimCss3,
  uim_css3_simple_default as UimCss3Simple,
  uim_cube_default as UimCube,
  uim_dialpad_default as UimDialpad,
  uim_dialpad_alt_default as UimDialpadAlt,
  uim_direction_default as UimDirection,
  uim_discord_default as UimDiscord,
  uim_docker_default as UimDocker,
  uim_document_layout_center_default as UimDocumentLayoutCenter,
  uim_document_layout_left_default as UimDocumentLayoutLeft,
  uim_document_layout_right_default as UimDocumentLayoutRight,
  uim_download_alt_default as UimDownloadAlt,
  uim_dribbble_default as UimDribbble,
  uim_dropbox_default as UimDropbox,
  uim_ellipsis_h_default as UimEllipsisH,
  uim_ellipsis_v_default as UimEllipsisV,
  uim_exclamation_circle_default as UimExclamationCircle,
  uim_exclamation_octagon_default as UimExclamationOctagon,
  uim_exclamation_triangle_default as UimExclamationTriangle,
  uim_facebook_default as UimFacebook,
  uim_facebook_f_default as UimFacebookF,
  uim_facebook_messenger_default as UimFacebookMessenger,
  uim_facebook_messenger_alt_default as UimFacebookMessengerAlt,
  uim_favorite_default as UimFavorite,
  uim_flip_h_default as UimFlipH,
  uim_flip_h_alt_default as UimFlipHAlt,
  uim_flip_v_default as UimFlipV,
  uim_flip_v_alt_default as UimFlipVAlt,
  uim_github_default as UimGithub,
  uim_github_alt_default as UimGithubAlt,
  uim_gitlab_default as UimGitlab,
  uim_gitlab_alt_default as UimGitlabAlt,
  uim_google_default as UimGoogle,
  uim_google_drive_default as UimGoogleDrive,
  uim_google_drive_alt_default as UimGoogleDriveAlt,
  uim_google_hangouts_default as UimGoogleHangouts,
  uim_google_hangouts_alt_default as UimGoogleHangoutsAlt,
  uim_google_play_default as UimGooglePlay,
  uim_graph_bar_default as UimGraphBar,
  uim_grid_default as UimGrid,
  uim_grids_default as UimGrids,
  uim_grip_horizontal_line_default as UimGripHorizontalLine,
  uim_head_side_default as UimHeadSide,
  uim_head_side_cough_default as UimHeadSideCough,
  uim_head_side_mask_default as UimHeadSideMask,
  uim_hipchat_default as UimHipchat,
  uim_history_default as UimHistory,
  uim_history_alt_default as UimHistoryAlt,
  uim_horizontal_align_left_default as UimHorizontalAlignLeft,
  uim_hospital_default as UimHospital,
  uim_hospital_square_sign_default as UimHospitalSquareSign,
  uim_hospital_symbol_default as UimHospitalSymbol,
  uim_house_user_default as UimHouseUser,
  uim_html3_default as UimHtml3,
  uim_html3_alt_default as UimHtml3Alt,
  uim_html5_default as UimHtml5,
  uim_html5_alt_default as UimHtml5Alt,
  uim_image_v_default as UimImageV,
  uim_instagram_default as UimInstagram,
  uim_instagram_alt_default as UimInstagramAlt,
  uim_intercom_default as UimIntercom,
  uim_intercom_alt_default as UimIntercomAlt,
  uim_java_script_default as UimJavaScript,
  uim_key_skeleton_default as UimKeySkeleton,
  uim_key_skeleton_alt_default as UimKeySkeletonAlt,
  uim_keyhole_circle_default as UimKeyholeCircle,
  uim_keyhole_square_default as UimKeyholeSquare,
  uim_keyhole_square_full_default as UimKeyholeSquareFull,
  uim_layer_group_default as UimLayerGroup,
  uim_layers_alt_default as UimLayersAlt,
  uim_left_indent_default as UimLeftIndent,
  uim_left_indent_alt_default as UimLeftIndentAlt,
  uim_line_default as UimLine,
  uim_line_spacing_default as UimLineSpacing,
  uim_link_h_default as UimLinkH,
  uim_linkedin_default as UimLinkedin,
  uim_linkedin_alt_default as UimLinkedinAlt,
  uim_linux_default as UimLinux,
  uim_list_ui_alt_default as UimListUiAlt,
  uim_list_ul_default as UimListUl,
  uim_lock_default as UimLock,
  uim_lock_access_default as UimLockAccess,
  uim_lock_alt_default as UimLockAlt,
  uim_lock_open_alt_default as UimLockOpenAlt,
  uim_lottiefiles_default as UimLottiefiles,
  uim_master_card_default as UimMasterCard,
  uim_medium_m_default as UimMediumM,
  uim_microscope_default as UimMicroscope,
  uim_microsoft_default as UimMicrosoft,
  uim_minus_square_full_default as UimMinusSquareFull,
  uim_multiply_default as UimMultiply,
  uim_object_group_default as UimObjectGroup,
  uim_object_ungroup_default as UimObjectUngroup,
  uim_okta_default as UimOkta,
  uim_opera_default as UimOpera,
  uim_opera_alt_default as UimOperaAlt,
  uim_padlock_default as UimPadlock,
  uim_pagelines_default as UimPagelines,
  uim_pagerduty_default as UimPagerduty,
  uim_paperclip_default as UimPaperclip,
  uim_paragraph_default as UimParagraph,
  uim_paypal_default as UimPaypal,
  uim_pentagon_default as UimPentagon,
  uim_plus_square_default as UimPlusSquare,
  uim_polygon_default as UimPolygon,
  uim_previous_default as UimPrevious,
  uim_process_default as UimProcess,
  uim_react_default as UimReact,
  uim_record_audio_default as UimRecordAudio,
  uim_reddit_alien_alt_default as UimRedditAlienAlt,
  uim_redo_default as UimRedo,
  uim_refresh_default as UimRefresh,
  uim_repeat_default as UimRepeat,
  uim_right_indent_alt_default as UimRightIndentAlt,
  uim_rocket_default as UimRocket,
  uim_ruler_default as UimRuler,
  uim_ruler_combined_default as UimRulerCombined,
  uim_sanitizer_default as UimSanitizer,
  uim_sanitizer_alt_default as UimSanitizerAlt,
  uim_scenery_default as UimScenery,
  uim_schedule_default as UimSchedule,
  uim_shield_plus_default as UimShieldPlus,
  uim_sign_in_alt_default as UimSignInAlt,
  uim_sign_out_alt_default as UimSignOutAlt,
  uim_signal_alt_default as UimSignalAlt,
  uim_signal_alt_3_default as UimSignalAlt3,
  uim_signin_default as UimSignin,
  uim_signout_default as UimSignout,
  uim_skype_default as UimSkype,
  uim_skype_alt_default as UimSkypeAlt,
  uim_slack_default as UimSlack,
  uim_slack_alt_default as UimSlackAlt,
  uim_snapchat_alt_default as UimSnapchatAlt,
  uim_snapchat_ghost_default as UimSnapchatGhost,
  uim_snapchat_square_default as UimSnapchatSquare,
  uim_social_distancing_default as UimSocialDistancing,
  uim_sorting_default as UimSorting,
  uim_space_key_default as UimSpaceKey,
  uim_square_default as UimSquare,
  uim_square_full_default as UimSquareFull,
  uim_squre_shape_default as UimSqureShape,
  uim_star_default as UimStar,
  uim_star_half_alt_default as UimStarHalfAlt,
  uim_step_forward_default as UimStepForward,
  uim_stethoscope_default as UimStethoscope,
  uim_stethoscope_alt_default as UimStethoscopeAlt,
  uim_store_slash_default as UimStoreSlash,
  uim_subject_default as UimSubject,
  uim_swiggy_default as UimSwiggy,
  uim_sync_exclamation_default as UimSyncExclamation,
  uim_sync_slash_default as UimSyncSlash,
  uim_table_default as UimTable,
  uim_telegram_default as UimTelegram,
  uim_telegram_alt_default as UimTelegramAlt,
  uim_th_large_default as UimThLarge,
  uim_times_circle_default as UimTimesCircle,
  uim_toggle_off_default as UimToggleOff,
  uim_toggle_on_default as UimToggleOn,
  uim_toilet_paper_default as UimToiletPaper,
  uim_triangle_default as UimTriangle,
  uim_tumblr_default as UimTumblr,
  uim_tumblr_alt_default as UimTumblrAlt,
  uim_tumblr_square_default as UimTumblrSquare,
  uim_twitter_default as UimTwitter,
  uim_twitter_alt_default as UimTwitterAlt,
  uim_unlock_default as UimUnlock,
  uim_unlock_alt_default as UimUnlockAlt,
  uim_upload_alt_default as UimUploadAlt,
  uim_user_arrows_default as UimUserArrows,
  uim_user_md_default as UimUserMd,
  uim_user_nurse_default as UimUserNurse,
  uim_vector_square_default as UimVectorSquare,
  uim_vector_square_alt_default as UimVectorSquareAlt,
  uim_virus_slash_default as UimVirusSlash,
  uim_visual_studio_default as UimVisualStudio,
  uim_vk_default as UimVk,
  uim_vk_alt_default as UimVkAlt,
  uim_vuejs_default as UimVuejs,
  uim_vuejs_alt_default as UimVuejsAlt,
  uim_web_grid_default as UimWebGrid,
  uim_web_grid_alt_default as UimWebGridAlt,
  uim_web_section_default as UimWebSection,
  uim_web_section_alt_default as UimWebSectionAlt,
  uim_whatsapp_default as UimWhatsapp,
  uim_window_grid_default as UimWindowGrid,
  uim_window_maximize_default as UimWindowMaximize,
  uim_window_section_default as UimWindowSection,
  uim_windows_default as UimWindows,
  uim_wordpress_default as UimWordpress,
  uim_wordpress_simple_default as UimWordpressSimple,
  uim_wrap_text_default as UimWrapText,
  uim_youtube_default as UimYoutube
};
/*! Bundled license information:

react/cjs/react.development.js:
  (** @license React v16.14.0
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@iconscout_react-unicons-monochrome.js.map
