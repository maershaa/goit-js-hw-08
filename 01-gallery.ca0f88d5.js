!function(){function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n,o,i,r,s,a,l,c,u,h,p,d,f,m,g,v,y,C,S,_,b,w,k,O,x,P,E,N,L,I,A,M,D,R,T,H,B,Y,j,X,F,$,U,W,q,z,V,G,K,Z,J,Q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},tt={},te={},tn=Q.parcelRequired7c6;null==tn&&((tn=function(t){if(t in tt)return tt[t].exports;if(t in te){var e=te[t];delete te[t];var n={id:t,exports:{}};return tt[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){te[t]=e},Q.parcelRequired7c6=tn),tn.register("hTBva",function(e,n){var o,i,r;t(e.exports,"SourceMapGenerator",function(){return o},function(t){return o=t}),t(e.exports,"SourceMapConsumer",function(){return i},function(t){return i=t}),t(e.exports,"SourceNode",function(){return r},function(t){return r=t}),o=tn("8JAU7").SourceMapGenerator,i=tn("4SEMF").SourceMapConsumer,r=tn("fLrsR").SourceNode}),tn.register("8JAU7",function(e,n){t(e.exports,"SourceMapGenerator",function(){return o},function(t){return o=t});var o,i=tn("1d7dz"),r=tn("cUiFn"),s=tn("ccQ4s").ArraySet,a=tn("66k9l").MappingList;/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */function l(t){t||(t={}),this._file=r.getArg(t,"file",null),this._sourceRoot=r.getArg(t,"sourceRoot",null),this._skipValidation=r.getArg(t,"skipValidation",!1),this._sources=new s,this._names=new s,this._mappings=new a,this._sourcesContents=null}l.prototype._version=3,/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */l.fromSourceMap=function(t){var e=t.sourceRoot,n=new l({file:t.file,sourceRoot:e});return t.eachMapping(function(t){var o={generated:{line:t.generatedLine,column:t.generatedColumn}};null!=t.source&&(o.source=t.source,null!=e&&(o.source=r.relative(e,o.source)),o.original={line:t.originalLine,column:t.originalColumn},null!=t.name&&(o.name=t.name)),n.addMapping(o)}),t.sources.forEach(function(o){var i=o;null!==e&&(i=r.relative(e,o)),n._sources.has(i)||n._sources.add(i);var s=t.sourceContentFor(o);null!=s&&n.setSourceContent(o,s)}),n},/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */l.prototype.addMapping=function(t){var e=r.getArg(t,"generated"),n=r.getArg(t,"original",null),o=r.getArg(t,"source",null),i=r.getArg(t,"name",null);this._skipValidation||this._validateMapping(e,n,o,i),null==o||(o=String(o),this._sources.has(o)||this._sources.add(o)),null==i||(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:e.line,generatedColumn:e.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:o,name:i})},/**
 * Set the source content for a source file.
 */l.prototype.setSourceContent=function(t,e){var n=t;null!=this._sourceRoot&&(n=r.relative(this._sourceRoot,n)),null!=e?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[r.toSetString(n)]=e):this._sourcesContents&&(// Remove the source file from the _sourcesContents map.
// If the _sourcesContents map is empty, set the property to null.
delete this._sourcesContents[r.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */l.prototype.applySourceMap=function(t,e,n){var o=e;// If aSourceFile is omitted, we will use the file property of the SourceMap
if(null==e){if(null==t.file)throw Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');o=t.file}var i=this._sourceRoot;null!=i&&(o=r.relative(i,o));// Applying the SourceMap can add and remove items from the sources and
// the names array.
var a=new s,l=new s;// Find mappings for the "sourceFile"
this._mappings.unsortedForEach(function(e){if(e.source===o&&null!=e.originalLine){// Check if it can be mapped by the source map, then update the mapping.
var s=t.originalPositionFor({line:e.originalLine,column:e.originalColumn});null!=s.source&&(// Copy mapping
e.source=s.source,null!=n&&(e.source=r.join(n,e.source)),null!=i&&(e.source=r.relative(i,e.source)),e.originalLine=s.line,e.originalColumn=s.column,null!=s.name&&(e.name=s.name))}var c=e.source;null==c||a.has(c)||a.add(c);var u=e.name;null==u||l.has(u)||l.add(u)},this),this._sources=a,this._names=l,// Copy sourcesContents of applied map.
t.sources.forEach(function(e){var o=t.sourceContentFor(e);null!=o&&(null!=n&&(e=r.join(n,e)),null!=i&&(e=r.relative(i,e)),this.setSourceContent(e,o))},this)},/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */l.prototype._validateMapping=function(t,e,n,o){// When aOriginal is truthy but has empty values for .line and .column,
// it is most likely a programmer error. In this case we throw a very
// specific error message to try to guide them the right way.
// For example: https://github.com/Polymer/polymer-bundler/pull/519
if(e&&"number"!=typeof e.line&&"number"!=typeof e.column)throw Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!t||!("line"in t)||!("column"in t)||!(t.line>0)||!(t.column>=0)||e||n||o)&&(!t||!("line"in t)||!("column"in t)||!e||!("line"in e)||!("column"in e)||!(t.line>0)||!(t.column>=0)||!(e.line>0)||!(e.column>=0)||!n))throw Error("Invalid mapping: "+JSON.stringify({generated:t,source:n,original:e,name:o}))},/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */l.prototype._serializeMappings=function(){for(var t,e,n,o,s=0,a=1,l=0,c=0,u=0,h=0,p="",d=this._mappings.toArray(),f=0,m=d.length;f<m;f++){if(e=d[f],t="",e.generatedLine!==a)for(s=0;e.generatedLine!==a;)t+=";",a++;else if(f>0){if(!r.compareByGeneratedPositionsInflated(e,d[f-1]))continue;t+=","}t+=i.encode(e.generatedColumn-s),s=e.generatedColumn,null!=e.source&&(o=this._sources.indexOf(e.source),t+=i.encode(o-h),h=o,// lines are stored 0-based in SourceMap spec version 3
t+=i.encode(e.originalLine-1-c),c=e.originalLine-1,t+=i.encode(e.originalColumn-l),l=e.originalColumn,null!=e.name&&(n=this._names.indexOf(e.name),t+=i.encode(n-u),u=n)),p+=t}return p},l.prototype._generateSourcesContent=function(t,e){return t.map(function(t){if(!this._sourcesContents)return null;null!=e&&(t=r.relative(e,t));var n=r.toSetString(t);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},/**
 * Externalize the source map.
 */l.prototype.toJSON=function(){var t={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(t.file=this._file),null!=this._sourceRoot&&(t.sourceRoot=this._sourceRoot),this._sourcesContents&&(t.sourcesContent=this._generateSourcesContent(t.sources,t.sourceRoot)),t},/**
 * Render the source map being generated to a string.
 */l.prototype.toString=function(){return JSON.stringify(this.toJSON())},o=l}),tn.register("1d7dz",function(e,n){t(e.exports,"encode",function(){return o},function(t){return o=t}),t(e.exports,"decode",function(){return i},function(t){return i=t});var o,i,r=tn("ahpWO");o=function(t){var e,n="",o=t<0?(-t<<1)+1:(t<<1)+0;do e=31&o,(o>>>=5)>0&&// continuation bit is marked.
(e|=32),n+=r.encode(e);while(o>0)return n},i=function(t,e,n){var o,i,s,a,l=t.length,c=0,u=0;do{if(e>=l)throw Error("Expected more digits in base 64 VLQ value.");if(-1===(a=r.decode(t.charCodeAt(e++))))throw Error("Invalid base64 digit: "+t.charAt(e-1));s=!!(32&a),a&=31,c+=a<<u,u+=5}while(s)n.value=(i=(o=c)>>1,(1&o)==1?-i:i),n.rest=e}}),tn.register("ahpWO",function(e,n){t(e.exports,"encode",function(){return o},function(t){return o=t}),t(e.exports,"decode",function(){return i},function(t){return i=t});var o,i,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");o=function(t){if(0<=t&&t<r.length)return r[t];throw TypeError("Must be between 0 and 63: "+t)},i=function(t){return(// 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
65<=t&&t<=90?t-65:97<=t&&t<=122?t-97+26:48<=t&&t<=57?t-48+52:43==t?62:47==t?63:-1)}}),tn.register("cUiFn",function(e,n){t(e.exports,"getArg",function(){return o},function(t){return o=t}),t(e.exports,"urlParse",function(){return i},function(t){return i=t}),t(e.exports,"isAbsolute",function(){return a},function(t){return a=t}),t(e.exports,"normalize",function(){return r},function(t){return r=t}),t(e.exports,"join",function(){return s},function(t){return s=t}),t(e.exports,"relative",function(){return l},function(t){return l=t}),t(e.exports,"toSetString",function(){return c},function(t){return c=t}),t(e.exports,"fromSetString",function(){return u},function(t){return u=t}),t(e.exports,"compareByOriginalPositions",function(){return h},function(t){return h=t}),t(e.exports,"compareByGeneratedPositionsDeflated",function(){return p},function(t){return p=t}),t(e.exports,"compareByGeneratedPositionsInflated",function(){return d},function(t){return d=t}),t(e.exports,"parseSourceMapInput",function(){return f},function(t){return f=t}),t(e.exports,"computeSourceURL",function(){return m},function(t){return m=t}),o=function(t,e,n){if(e in t)return t[e];if(3==arguments.length)return n;throw Error('"'+e+'" is a required argument.')};var o,i,r,s,a,l,c,u,h,p,d,f,m,g=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,v=/^data:.+\,.+$/;function y(t){var e=t.match(g);return e?{scheme:e[1],auth:e[2],host:e[3],port:e[4],path:e[5]}:null}function C(t){var e="";return t.scheme&&(e+=t.scheme+":"),e+="//",t.auth&&(e+=t.auth+"@"),t.host&&(e+=t.host),t.port&&(e+=":"+t.port),t.path&&(e+=t.path),e}/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */function S(t){var e=t,n=y(t);if(n){if(!n.path)return t;e=n.path}for(var o,i=a(e),r=e.split(/\/+/),s=0,l=r.length-1;l>=0;l--)"."===(o=r[l])?r.splice(l,1):".."===o?s++:s>0&&(""===o?(// The first part is blank if the path is absolute. Trying to go
// above the root is a no-op. Therefore we can remove all '..' parts
// directly after the root.
r.splice(l+1,s),s=0):(r.splice(l,2),s--));return(""===(e=r.join("/"))&&(e=i?"/":"."),n)?(n.path=e,C(n)):e}/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */function _(t,e){""===t&&(t="."),""===e&&(e=".");var n=y(e),o=y(t);// `join(foo, '//www.example.org')`
if(o&&(t=o.path||"/"),n&&!n.scheme)return o&&(n.scheme=o.scheme),C(n);if(n||e.match(v))return e;// `join('http://', 'www.example.com')`
if(o&&!o.host&&!o.path)return o.host=e,C(o);var i="/"===e.charAt(0)?e:S(t.replace(/\/+$/,"")+"/"+e);return o?(o.path=i,C(o)):i}i=y,r=S,s=_,a=function(t){return"/"===t.charAt(0)||g.test(t)},l=/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */function(t,e){""===t&&(t="."),t=t.replace(/\/$/,"");for(// It is possible for the path to be above the root. In this case, simply
// checking whether the root is a prefix of the path won't work. Instead, we
// need to remove components from the root one by one, until either we find
// a prefix that fits, or we run out of components to remove.
var n=0;0!==e.indexOf(t+"/");){var o=t.lastIndexOf("/");if(o<0||// If the only part of the root that is left is the scheme (i.e. http://,
// file:///, etc.), one or more slashes (/), or simply nothing at all, we
// have exhausted all components, so the path is not relative to the root.
(t=t.slice(0,o)).match(/^([^\/]+:\/)?\/*$/))return e;++n}// Make sure we add a "../" for each component we removed from the root.
return Array(n+1).join("../")+e.substr(t.length+1)};var b=!("__proto__"in Object.create(null));function w(t){return t}function k(t){if(!t)return!1;var e=t.length;if(e<9/* "__proto__".length */||95/* '_' */!==t.charCodeAt(e-1)||95/* '_' */!==t.charCodeAt(e-2)||111/* 'o' */!==t.charCodeAt(e-3)||116/* 't' */!==t.charCodeAt(e-4)||111/* 'o' */!==t.charCodeAt(e-5)||114/* 'r' */!==t.charCodeAt(e-6)||112/* 'p' */!==t.charCodeAt(e-7)||95/* '_' */!==t.charCodeAt(e-8)||95/* '_' */!==t.charCodeAt(e-9))return!1;for(var n=e-10;n>=0;n--)if(36/* '$' */!==t.charCodeAt(n))return!1;return!0}function O(t,e){return t===e?0:null===t?1:null===e?-1:t>e?1:-1}c=b?w:/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */function(t){return k(t)?"$"+t:t},u=b?w:function(t){return k(t)?t.slice(1):t},h=/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */function(t,e,n){var o=O(t.source,e.source);return 0!==o||0!=(o=t.originalLine-e.originalLine)||0!=(o=t.originalColumn-e.originalColumn)||n||0!=(o=t.generatedColumn-e.generatedColumn)||0!=(o=t.generatedLine-e.generatedLine)?o:O(t.name,e.name)},p=/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */function(t,e,n){var o=t.generatedLine-e.generatedLine;return 0!==o||0!=(o=t.generatedColumn-e.generatedColumn)||n||0!==(o=O(t.source,e.source))||0!=(o=t.originalLine-e.originalLine)||0!=(o=t.originalColumn-e.originalColumn)?o:O(t.name,e.name)},d=/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */function(t,e){var n=t.generatedLine-e.generatedLine;return 0!==n||0!=(n=t.generatedColumn-e.generatedColumn)||0!==(n=O(t.source,e.source))||0!=(n=t.originalLine-e.originalLine)||0!=(n=t.originalColumn-e.originalColumn)?n:O(t.name,e.name)},f=/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */function(t){return JSON.parse(t.replace(/^\)]}'[^\n]*\n/,""))},m=/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */function(t,e,n){// Historically, SourceMapConsumer did not take the sourceMapURL as
// a parameter.  This mode is still somewhat supported, which is why
// this code block is conditional.  However, it's preferable to pass
// the source map URL to SourceMapConsumer, so that this function
// can implement the source URL resolution algorithm as outlined in
// the spec.  This block is basically the equivalent of:
//    new URL(sourceURL, sourceMapURL).toString()
// ... except it avoids using URL, which wasn't available in the
// older releases of node still supported by this library.
//
// The spec says:
//   If the sources are not absolute URLs after prepending of the
//   “sourceRoot”, the sources are resolved relative to the
//   SourceMap (like resolving script src in a html document).
if(e=e||"",t&&("/"!==t[t.length-1]&&"/"!==e[0]&&(t+="/"),// The spec says:
//   Line 4: An optional source root, useful for relocating source
//   files on a server or removing repeated values in the
//   “sources” entry.  This value is prepended to the individual
//   entries in the “source” field.
e=t+e),n){var o=y(n);if(!o)throw Error("sourceMapURL could not be parsed");if(o.path){// Strip the last path component, but keep the "/".
var i=o.path.lastIndexOf("/");i>=0&&(o.path=o.path.substring(0,i+1))}e=_(C(o),e)}return S(e)}}),tn.register("ccQ4s",function(e,n){t(e.exports,"ArraySet",function(){return o},function(t){return o=t});var o,i=tn("cUiFn"),r=Object.prototype.hasOwnProperty,s="undefined"!=typeof Map;/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */function a(){this._array=[],this._set=s?new Map:Object.create(null)}/**
 * Static method for creating ArraySet instances from an existing array.
 */a.fromArray=function(t,e){for(var n=new a,o=0,i=t.length;o<i;o++)n.add(t[o],e);return n},/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */a.prototype.size=function(){return s?this._set.size:Object.getOwnPropertyNames(this._set).length},/**
 * Add the given string to this set.
 *
 * @param String aStr
 */a.prototype.add=function(t,e){var n=s?t:i.toSetString(t),o=s?this.has(t):r.call(this._set,n),a=this._array.length;(!o||e)&&this._array.push(t),o||(s?this._set.set(t,a):this._set[n]=a)},/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */a.prototype.has=function(t){if(s)return this._set.has(t);var e=i.toSetString(t);return r.call(this._set,e)},/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */a.prototype.indexOf=function(t){if(s){var e=this._set.get(t);if(e>=0)return e}else{var n=i.toSetString(t);if(r.call(this._set,n))return this._set[n]}throw Error('"'+t+'" is not in the set.')},/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */a.prototype.at=function(t){if(t>=0&&t<this._array.length)return this._array[t];throw Error("No element indexed by "+t)},/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */a.prototype.toArray=function(){return this._array.slice()},o=a}),tn.register("66k9l",function(e,n){t(e.exports,"MappingList",function(){return o},function(t){return o=t});var o,i=tn("cUiFn");/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */function r(){this._array=[],this._sorted=!0,// Serves as infimum
this._last={generatedLine:-1,generatedColumn:0}}/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */r.prototype.unsortedForEach=function(t,e){this._array.forEach(t,e)},/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */r.prototype.add=function(t){var e,n,o,r,s;(n=(e=this._last).generatedLine,o=t.generatedLine,r=e.generatedColumn,s=t.generatedColumn,o>n||o==n&&s>=r||0>=i.compareByGeneratedPositionsInflated(e,t))?this._last=t:this._sorted=!1,this._array.push(t)},/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */r.prototype.toArray=function(){return this._sorted||(this._array.sort(i.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},o=r}),tn.register("4SEMF",function(e,n){t(e.exports,"SourceMapConsumer",function(){return o},function(t){return o=t});var o,i=tn("cUiFn"),r=tn("k488Y"),s=tn("ccQ4s").ArraySet,a=tn("1d7dz"),l=tn("hkFn3").quickSort;function c(t,e){var n=t;return"string"==typeof t&&(n=i.parseSourceMapInput(t)),null!=n.sections?new p(n,e):new u(n,e)}/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */function u(t,e){var n=t;"string"==typeof t&&(n=i.parseSourceMapInput(t));var o=i.getArg(n,"version"),r=i.getArg(n,"sources"),a=i.getArg(n,"names",[]),l=i.getArg(n,"sourceRoot",null),c=i.getArg(n,"sourcesContent",null),u=i.getArg(n,"mappings"),h=i.getArg(n,"file",null);// Once again, Sass deviates from the spec and supplies the version as a
// string rather than a number, so we use loose equality checking here.
if(o!=this._version)throw Error("Unsupported version: "+o);l&&(l=i.normalize(l)),r=r.map(String)// Some source maps produce relative source paths like "./foo.js" instead of
// "foo.js".  Normalize these first so that future comparisons will succeed.
// See bugzil.la/1090768.
.map(i.normalize)// Always ensure that absolute sources are internally stored relative to
// the source root, if the source root is absolute. Not doing this would
// be particularly problematic when the source root is a prefix of the
// source (valid, but why??). See github issue #199 and bugzil.la/1188982.
.map(function(t){return l&&i.isAbsolute(l)&&i.isAbsolute(t)?i.relative(l,t):t}),// Pass `true` below to allow duplicate names and sources. While source maps
// are intended to be compressed and deduplicated, the TypeScript compiler
// sometimes generates source maps with duplicates in them. See Github issue
// #72 and bugzil.la/889492.
this._names=s.fromArray(a.map(String),!0),this._sources=s.fromArray(r,!0),this._absoluteSources=this._sources.toArray().map(function(t){return i.computeSourceURL(l,t,e)}),this.sourceRoot=l,this.sourcesContent=c,this._mappings=u,this._sourceMapURL=e,this.file=h}/**
 * Provide the JIT with a nice shape / hidden class.
 */function h(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */function p(t,e){var n=t;"string"==typeof t&&(n=i.parseSourceMapInput(t));var o=i.getArg(n,"version"),r=i.getArg(n,"sections");if(o!=this._version)throw Error("Unsupported version: "+o);this._sources=new s,this._names=new s;var a={line:-1,column:0};this._sections=r.map(function(t){if(t.url)// See https://github.com/mozilla/source-map/issues/16
throw Error("Support for url field in sections not implemented.");var n=i.getArg(t,"offset"),o=i.getArg(n,"line"),r=i.getArg(n,"column");if(o<a.line||o===a.line&&r<a.column)throw Error("Section offsets must be ordered and non-overlapping.");return a=n,{generatedOffset:{// The offset fields are 0-based, but we use 1-based indices when
// encoding/decoding from VLQ.
generatedLine:o+1,generatedColumn:r+1},consumer:new c(i.getArg(t,"map"),e)}})}c.fromSourceMap=function(t,e){return u.fromSourceMap(t,e)},/**
 * The version of the source mapping spec that we are consuming.
 */c.prototype._version=3,// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.
c.prototype.__generatedMappings=null,Object.defineProperty(c.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),c.prototype.__originalMappings=null,Object.defineProperty(c.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),c.prototype._charIsMappingSeparator=function(t,e){var n=t.charAt(e);return";"===n||","===n},/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */c.prototype._parseMappings=function(t,e){throw Error("Subclasses must implement _parseMappings")},c.GENERATED_ORDER=1,c.ORIGINAL_ORDER=2,c.GREATEST_LOWER_BOUND=1,c.LEAST_UPPER_BOUND=2,/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */c.prototype.eachMapping=function(t,e,n){var o,r=e||null;switch(n||c.GENERATED_ORDER){case c.GENERATED_ORDER:o=this._generatedMappings;break;case c.ORIGINAL_ORDER:o=this._originalMappings;break;default:throw Error("Unknown order of iteration.")}var s=this.sourceRoot;o.map(function(t){var e=null===t.source?null:this._sources.at(t.source);return{source:e=i.computeSourceURL(s,e,this._sourceMapURL),generatedLine:t.generatedLine,generatedColumn:t.generatedColumn,originalLine:t.originalLine,originalColumn:t.originalColumn,name:null===t.name?null:this._names.at(t.name)}},this).forEach(t,r)},/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */c.prototype.allGeneratedPositionsFor=function(t){var e=i.getArg(t,"line"),n={source:i.getArg(t,"source"),originalLine:e,originalColumn:i.getArg(t,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var o=[],s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,r.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(void 0===t.column)// Iterate until either we run out of mappings, or we run into
// a mapping for a different line than the one we found. Since
// mappings are sorted, this is guaranteed to find all mappings for
// the line we found.
for(var l=a.originalLine;a&&a.originalLine===l;)o.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else // Iterate until either we run out of mappings, or we run into
// a mapping for a different line than the one we were searching for.
// Since mappings are sorted, this is guaranteed to find all mappings for
// the line we are searching for.
for(var c=a.originalColumn;a&&a.originalLine===e&&a.originalColumn==c;)o.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return o},o=c,u.prototype=Object.create(c.prototype),u.prototype.consumer=c,/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */u.prototype._findSourceIndex=function(t){var e,n=t;if(null!=this.sourceRoot&&(n=i.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);for(e=0;e<this._absoluteSources.length;++e)if(this._absoluteSources[e]==t)return e;return -1},/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */u.fromSourceMap=function(t,e){var n=Object.create(u.prototype),o=n._names=s.fromArray(t._names.toArray(),!0),r=n._sources=s.fromArray(t._sources.toArray(),!0);n.sourceRoot=t._sourceRoot,n.sourcesContent=t._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=t._file,n._sourceMapURL=e,n._absoluteSources=n._sources.toArray().map(function(t){return i.computeSourceURL(n.sourceRoot,t,e)});for(var a=t._mappings.toArray().slice(),c=n.__generatedMappings=[],p=n.__originalMappings=[],d=0,f=a.length;d<f;d++){var m=a[d],g=new h;g.generatedLine=m.generatedLine,g.generatedColumn=m.generatedColumn,m.source&&(g.source=r.indexOf(m.source),g.originalLine=m.originalLine,g.originalColumn=m.originalColumn,m.name&&(g.name=o.indexOf(m.name)),p.push(g)),c.push(g)}return l(n.__originalMappings,i.compareByOriginalPositions),n},/**
 * The version of the source mapping spec that we are consuming.
 */u.prototype._version=3,/**
 * The list of original sources.
 */Object.defineProperty(u.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */u.prototype._parseMappings=function(t,e){for(var n,o,r,s,c,u=1,p=0,d=0,f=0,m=0,g=0,v=t.length,y=0,C={},S={},_=[],b=[];y<v;)if(";"===t.charAt(y))u++,y++,p=0;else if(","===t.charAt(y))y++;else{// Because each offset is encoded relative to the previous one,
// many segments often have the same encoding. We can exploit this
// fact by caching the parsed variable length fields of each segment,
// allowing us to avoid a second parse if we encounter the same
// segment again.
for((n=new h).generatedLine=u,s=y;s<v&&!this._charIsMappingSeparator(t,s);s++);if(r=C[o=t.slice(y,s)])y+=o.length;else{for(r=[];y<s;)a.decode(t,y,S),c=S.value,y=S.rest,r.push(c);if(2===r.length)throw Error("Found a source, but no line and column");if(3===r.length)throw Error("Found a source and line, but no column");C[o]=r}// Generated column.
n.generatedColumn=p+r[0],p=n.generatedColumn,r.length>1&&(// Original source.
n.source=m+r[1],m+=r[1],// Original line.
n.originalLine=d+r[2],d=n.originalLine,// Lines are stored 0-based
n.originalLine+=1,// Original column.
n.originalColumn=f+r[3],f=n.originalColumn,r.length>4&&(// Original name.
n.name=g+r[4],g+=r[4])),b.push(n),"number"==typeof n.originalLine&&_.push(n)}l(b,i.compareByGeneratedPositionsDeflated),this.__generatedMappings=b,l(_,i.compareByOriginalPositions),this.__originalMappings=_},/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */u.prototype._findMapping=function(t,e,n,o,i,s){// To return the position we are searching for, we must first find the
// mapping for the given position and then return the opposite position it
// points to. Because the mappings are sorted, we can use binary search to
// find the best mapping.
if(t[n]<=0)throw TypeError("Line must be greater than or equal to 1, got "+t[n]);if(t[o]<0)throw TypeError("Column must be greater than or equal to 0, got "+t[o]);return r.search(t,e,i,s)},/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */u.prototype.computeColumnSpans=function(){for(var t=0;t<this._generatedMappings.length;++t){var e=this._generatedMappings[t];// Mappings do not contain a field for the last generated columnt. We
// can come up with an optimistic estimate, however, by assuming that
// mappings are contiguous (i.e. given two consecutive mappings, the
// first mapping ends where the second one starts).
if(t+1<this._generatedMappings.length){var n=this._generatedMappings[t+1];if(e.generatedLine===n.generatedLine){e.lastGeneratedColumn=n.generatedColumn-1;continue}}// The last mapping for each line spans the entire line.
e.lastGeneratedColumn=1/0}},/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */u.prototype.originalPositionFor=function(t){var e={generatedLine:i.getArg(t,"line"),generatedColumn:i.getArg(t,"column")},n=this._findMapping(e,this._generatedMappings,"generatedLine","generatedColumn",i.compareByGeneratedPositionsDeflated,i.getArg(t,"bias",c.GREATEST_LOWER_BOUND));if(n>=0){var o=this._generatedMappings[n];if(o.generatedLine===e.generatedLine){var r=i.getArg(o,"source",null);null!==r&&(r=this._sources.at(r),r=i.computeSourceURL(this.sourceRoot,r,this._sourceMapURL));var s=i.getArg(o,"name",null);return null!==s&&(s=this._names.at(s)),{source:r,line:i.getArg(o,"originalLine",null),column:i.getArg(o,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */u.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(t){return null==t})},/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */u.prototype.sourceContentFor=function(t,e){if(!this.sourcesContent)return null;var n,o=this._findSourceIndex(t);if(o>=0)return this.sourcesContent[o];var r=t;if(null!=this.sourceRoot&&(r=i.relative(this.sourceRoot,r)),null!=this.sourceRoot&&(n=i.urlParse(this.sourceRoot))){// XXX: file:// URIs and absolute paths lead to unexpected behavior for
// many users. We can help them out when they expect file:// URIs to
// behave like it would if they were running a local HTTP server. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
var s=r.replace(/^file:\/\//,"");if("file"==n.scheme&&this._sources.has(s))return this.sourcesContent[this._sources.indexOf(s)];if((!n.path||"/"==n.path)&&this._sources.has("/"+r))return this.sourcesContent[this._sources.indexOf("/"+r)]}// This function is used recursively from
// IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
// don't want to throw if we can't find the source - we just want to
// return null, so we provide a flag to exit gracefully.
if(e)return null;throw Error('"'+r+'" is not in the SourceMap.')},/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */u.prototype.generatedPositionFor=function(t){var e=i.getArg(t,"source");if((e=this._findSourceIndex(e))<0)return{line:null,column:null,lastColumn:null};var n={source:e,originalLine:i.getArg(t,"line"),originalColumn:i.getArg(t,"column")},o=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,i.getArg(t,"bias",c.GREATEST_LOWER_BOUND));if(o>=0){var r=this._originalMappings[o];if(r.source===n.source)return{line:i.getArg(r,"generatedLine",null),column:i.getArg(r,"generatedColumn",null),lastColumn:i.getArg(r,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},p.prototype=Object.create(c.prototype),p.prototype.constructor=c,/**
 * The version of the source mapping spec that we are consuming.
 */p.prototype._version=3,/**
 * The list of original sources.
 */Object.defineProperty(p.prototype,"sources",{get:function(){for(var t=[],e=0;e<this._sections.length;e++)for(var n=0;n<this._sections[e].consumer.sources.length;n++)t.push(this._sections[e].consumer.sources[n]);return t}}),/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */p.prototype.originalPositionFor=function(t){var e={generatedLine:i.getArg(t,"line"),generatedColumn:i.getArg(t,"column")},n=r.search(e,this._sections,function(t,e){return t.generatedLine-e.generatedOffset.generatedLine||t.generatedColumn-e.generatedOffset.generatedColumn}),o=this._sections[n];return o?o.consumer.originalPositionFor({line:e.generatedLine-(o.generatedOffset.generatedLine-1),column:e.generatedColumn-(o.generatedOffset.generatedLine===e.generatedLine?o.generatedOffset.generatedColumn-1:0),bias:t.bias}):{source:null,line:null,column:null,name:null}},/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */p.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(t){return t.consumer.hasContentsOfAllSources()})},/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */p.prototype.sourceContentFor=function(t,e){for(var n=0;n<this._sections.length;n++){var o=this._sections[n].consumer.sourceContentFor(t,!0);if(o)return o}if(e)return null;throw Error('"'+t+'" is not in the SourceMap.')},/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */p.prototype.generatedPositionFor=function(t){for(var e=0;e<this._sections.length;e++){var n=this._sections[e];// Only consider this section if the requested source is in the list of
// sources of the consumer.
if(-1!==n.consumer._findSourceIndex(i.getArg(t,"source"))){var o=n.consumer.generatedPositionFor(t);if(o)return{line:o.line+(n.generatedOffset.generatedLine-1),column:o.column+(n.generatedOffset.generatedLine===o.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */p.prototype._parseMappings=function(t,e){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var o=this._sections[n],r=o.consumer._generatedMappings,s=0;s<r.length;s++){var a=r[s],c=o.consumer._sources.at(a.source);c=i.computeSourceURL(o.consumer.sourceRoot,c,this._sourceMapURL),this._sources.add(c),c=this._sources.indexOf(c);var u=null;a.name&&(u=o.consumer._names.at(a.name),this._names.add(u),u=this._names.indexOf(u));// The mappings coming from the consumer for the section have
// generated positions relative to the start of the section, so we
// need to offset them to be relative to the start of the concatenated
// generated file.
var h={source:c,generatedLine:a.generatedLine+(o.generatedOffset.generatedLine-1),generatedColumn:a.generatedColumn+(o.generatedOffset.generatedLine===a.generatedLine?o.generatedOffset.generatedColumn-1:0),originalLine:a.originalLine,originalColumn:a.originalColumn,name:u};this.__generatedMappings.push(h),"number"==typeof h.originalLine&&this.__originalMappings.push(h)}l(this.__generatedMappings,i.compareByGeneratedPositionsDeflated),l(this.__originalMappings,i.compareByOriginalPositions)}}),tn.register("k488Y",function(e,n){var o,i,r;t(e.exports,"GREATEST_LOWER_BOUND",function(){return o},function(t){return o=t}),t(e.exports,"LEAST_UPPER_BOUND",function(){return i},function(t){return i=t}),t(e.exports,"search",function(){return r},function(t){return r=t}),o=1,i=2,r=function(t,e,n,r){if(0===e.length)return -1;var s=/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */function t(e,n,o,r,s,a){// This function terminates when one of the following is true:
//
//   1. We find the exact element we are looking for.
//
//   2. We did not find the exact element, but we can return the index of
//      the next-closest element.
//
//   3. We did not find the exact element, and there is no next-closest
//      element than the one we are searching for, so we return -1.
var l=Math.floor((n-e)/2)+e,c=s(o,r[l],!0);return 0===c?l:c>0?// Our needle is greater than aHaystack[mid].
n-l>1?t(l,n,o,r,s,a):a==i?n<r.length?n:-1:l:// Our needle is less than aHaystack[mid].
l-e>1?t(e,l,o,r,s,a):a==i?l:e<0?-1:e}(-1,e.length,t,e,n,r||o);if(s<0)return -1;// We have found either the exact element, or the next-closest element than
// the one we are searching for. However, there may be more than one such
// element. Make sure we always return the smallest of these.
for(;s-1>=0&&0===n(e[s],e[s-1],!0);)--s;return s}}),tn.register("hkFn3",function(e,n){var o;function i(t,e,n){var o=t[e];t[e]=t[n],t[n]=o}t(e.exports,"quickSort",function(){return o},function(t){return o=t}),o=function(t,e){!/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */function t(e,n,o,r){// If our lower bound is less than our upper bound, we (1) partition the
// array into two pieces and (2) recurse on each half. If it is not, this is
// the empty array and our base case.
if(o<r){// (1) Partitioning.
//
// The partitioning chooses a pivot between `p` and `r` and moves all
// elements that are less than or equal to the pivot to the before it, and
// all the elements that are greater than it after it. The effect is that
// once partition is done, the pivot is in the exact place it will be when
// the array is put in sorted order, and it will not need to be moved
// again. This runs in O(n) time.
// Always choose a random pivot so that an input array which is reverse
// sorted does not cause O(n^2) running time.
var s=Math.round(o+Math.random()*(r-o)),a=o-1;i(e,s,r);// Immediately after `j` is incremented in this loop, the following hold
// true:
//
//   * Every element in `ary[p .. i]` is less than or equal to the pivot.
//
//   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
for(var l=e[r],c=o;c<r;c++)0>=n(e[c],l)&&i(e,a+=1,c);i(e,a+1,c);var u=a+1;// (2) Recurse on each half.
t(e,n,o,u-1),t(e,n,u+1,r)}}(t,e,0,t.length-1)}}),tn.register("fLrsR",function(e,n){t(e.exports,"SourceNode",function(){return o},function(t){return o=t});var o,i=tn("8JAU7").SourceMapGenerator,r=tn("cUiFn"),s=/(\r?\n)/,a="$$$isSourceNode$$$";/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */function l(t,e,n,o,i){this.children=[],this.sourceContents={},this.line=null==t?null:t,this.column=null==e?null:e,this.source=null==n?null:n,this.name=null==i?null:i,this[a]=!0,null!=o&&this.add(o)}/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */l.fromStringWithSourceMap=function(t,e,n){// The SourceNode we want to fill with the generated code
// and the SourceMap
var o=new l,i=t.split(s),a=0,c=function(){return t()+(t()||"");function t(){return a<i.length?i[a++]:void 0}},u=1,h=0,p=null;return e.eachMapping(function(t){if(null!==p){// We add the code from "lastMapping" to "mapping":
// First check if there is a new line in between.
if(u<t.generatedLine)// Associate first line with "lastMapping"
d(p,c()),u++,h=0;else{// There is no new line in between.
// Associate the code between "lastGeneratedColumn" and
// "mapping.generatedColumn" with "lastMapping"
var e=i[a]||"",n=e.substr(0,t.generatedColumn-h);i[a]=e.substr(t.generatedColumn-h),h=t.generatedColumn,d(p,n),// No more remaining code, continue
p=t;return}}// We add the generated code until the first mapping
// to the SourceNode without any mapping.
// Each line is added as separate string.
for(;u<t.generatedLine;)o.add(c()),u++;if(h<t.generatedColumn){var e=i[a]||"";o.add(e.substr(0,t.generatedColumn)),i[a]=e.substr(t.generatedColumn),h=t.generatedColumn}p=t},this),a<i.length&&(p&&d(p,c()),// and add the remaining lines without any mapping
o.add(i.splice(a).join(""))),// Copy sourcesContent into SourceNode
e.sources.forEach(function(t){var i=e.sourceContentFor(t);null!=i&&(null!=n&&(t=r.join(n,t)),o.setSourceContent(t,i))}),o;function d(t,e){if(null===t||void 0===t.source)o.add(e);else{var i=n?r.join(n,t.source):t.source;o.add(new l(t.originalLine,t.originalColumn,i,e,t.name))}}},/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */l.prototype.add=function(t){if(Array.isArray(t))t.forEach(function(t){this.add(t)},this);else if(t[a]||"string"==typeof t)t&&this.children.push(t);else throw TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+t);return this},/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */l.prototype.prepend=function(t){if(Array.isArray(t))for(var e=t.length-1;e>=0;e--)this.prepend(t[e]);else if(t[a]||"string"==typeof t)this.children.unshift(t);else throw TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+t);return this},/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */l.prototype.walk=function(t){for(var e,n=0,o=this.children.length;n<o;n++)(e=this.children[n])[a]?e.walk(t):""!==e&&t(e,{source:this.source,line:this.line,column:this.column,name:this.name})},/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */l.prototype.join=function(t){var e,n,o=this.children.length;if(o>0){for(n=0,e=[];n<o-1;n++)e.push(this.children[n]),e.push(t);e.push(this.children[n]),this.children=e}return this},/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */l.prototype.replaceRight=function(t,e){var n=this.children[this.children.length-1];return n[a]?n.replaceRight(t,e):"string"==typeof n?this.children[this.children.length-1]=n.replace(t,e):this.children.push("".replace(t,e)),this},/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */l.prototype.setSourceContent=function(t,e){this.sourceContents[r.toSetString(t)]=e},/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */l.prototype.walkSourceContents=function(t){for(var e=0,n=this.children.length;e<n;e++)this.children[e][a]&&this.children[e].walkSourceContents(t);for(var o=Object.keys(this.sourceContents),e=0,n=o.length;e<n;e++)t(r.fromSetString(o[e]),this.sourceContents[o[e]])},/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */l.prototype.toString=function(){var t="";return this.walk(function(e){t+=e}),t},/**
 * Returns the string representation of this source node along with a source
 * map.
 */l.prototype.toStringWithSourceMap=function(t){var e={code:"",line:1,column:0},n=new i(t),o=!1,r=null,s=null,a=null,l=null;return this.walk(function(t,i){e.code+=t,null!==i.source&&null!==i.line&&null!==i.column?((r!==i.source||s!==i.line||a!==i.column||l!==i.name)&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:e.line,column:e.column},name:i.name}),r=i.source,s=i.line,a=i.column,l=i.name,o=!0):o&&(n.addMapping({generated:{line:e.line,column:e.column}}),r=null,o=!1);for(var c=0,u=t.length;c<u;c++)10===t.charCodeAt(c)?(e.line++,e.column=0,c+1===u?(r=null,o=!1):o&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:e.line,column:e.column},name:i.name})):e.column++}),this.walkSourceContents(function(t,e){n.setSourceContent(t,e)}),{code:e.code,map:n}},o=l});// импорт шаблона handlebars см. папку templates с html разметкой файла для ВАРИАНТА 2 для генерации разметки для галереи из набора данных galleryItems => см строку 36
var to={};// istanbul ignore next
function ti(t){return t&&t.__esModule?t:{default:t}}to.__esModule=!0;var tr={};// istanbul ignore next
function ts(t){return t&&t.__esModule?t:{default:t}}// istanbul ignore next
function ta(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}tr.__esModule=!0;var tl={};// istanbul ignore next
function tc(t){return t&&t.__esModule?t:{default:t}}t(tl,"__esModule",function(){return p},function(t){return p=t}),t(tl,"HandlebarsEnvironment",function(){return d},function(t){return d=t}),t(tl,"VERSION",function(){return f},function(t){return f=t}),t(tl,"COMPILER_REVISION",function(){return m},function(t){return m=t}),t(tl,"LAST_COMPATIBLE_COMPILER_REVISION",function(){return g},function(t){return g=t}),t(tl,"REVISION_CHANGES",function(){return v},function(t){return v=t}),t(tl,"log",function(){return y},function(t){return y=t}),t(tl,"createFrame",function(){return C},function(t){return C=t}),t(tl,"logger",function(){return S},function(t){return S=t}),p=!0,d=tZ;var tu={};t(tu,"__esModule",function(){return _},function(t){return _=t}),t(tu,"extend",function(){return b},function(t){return b=t}),t(tu,"indexOf",function(){return w},function(t){return w=t}),t(tu,"escapeExpression",function(){return k},function(t){return k=t}),t(tu,"isEmpty",function(){return O},function(t){return O=t}),t(tu,"createFrame",function(){return x},function(t){return x=t}),t(tu,"blockParams",function(){return P},function(t){return P=t}),t(tu,"appendContextPath",function(){return E},function(t){return E=t}),t(tu,"toString",function(){return N},function(t){return N=t}),t(tu,"isFunction",function(){return L},function(t){return L=t}),t(tu,"isArray",function(){return I},function(t){return I=t}),_=!0,b=tm,w=// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function(t,e){for(var n=0,o=t.length;n<o;n++)if(t[n]===e)return n;return -1},k=function(t){if("string"!=typeof t){// don't escape SafeStrings, since they're already safe
if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";// Force a string conversion as this will be done by the append regardless and
// the regex test will do this transparently behind the scenes, causing issues if
// an object's to string has escaped characters in it.
t=""+t}return td.test(t)?t.replace(tp,tf):t},O=function(t){return!t&&0!==t||!!ty(t)&&0===t.length},x=function(t){var e=tm({},t);return e._parent=t,e},P=function(t,e){return t.path=e,t},E=function(t,e){return(t?t+".":"")+e};var th={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},tp=/[&<>"'`=]/g,td=/[&<>"'`=]/;function tf(t){return th[t]}function tm(t/* , ...source */){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var tg=Object.prototype.toString;N=tg;// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */var tv=function(t){return"function"==typeof t};tv(/x/)&&(L=tv=function(t){return"function"==typeof t&&"[object Function]"===tg.call(t)}),L=tv;/* eslint-enable func-style *//* istanbul ignore next */var ty=Array.isArray||function(t){return!!t&&"object"==typeof t&&"[object Array]"===tg.call(t)};I=ty;var tC={};tC.__esModule=!0;var tS=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function t_(t,e){var n=e&&e.loc,o=void 0,i=void 0,r=void 0,s=void 0;n&&(o=n.start.line,i=n.end.line,r=n.start.column,s=n.end.column,t+=" - "+o+":"+r);// Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
for(var a=Error.prototype.constructor.call(this,t),l=0;l<tS.length;l++)this[tS[l]]=a[tS[l]];Error.captureStackTrace&&Error.captureStackTrace(this,t_);try{n&&(this.lineNumber=o,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:r,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=r,this.endColumn=s))}catch(t){/* Ignore if the browser is very particular */}}t_.prototype=Error(),tC.default=t_;var tb=tc(tC=tC.default);// istanbul ignore next
function tw(t){return t&&t.__esModule?t:{default:t}}A=function(t,e,n){t.helpers[e]&&(t.hooks[e]=t.helpers[e],n||delete t.helpers[e])};var tk={};tk.__esModule=!0,tk.default=function(t){t.registerHelper("blockHelperMissing",function(e,n){var o=n.inverse,i=n.fn;if(!0===e)return i(this);if(!1===e||null==e)return o(this);if(I(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):o(this);if(n.data&&n.ids){var r=x(n.data);r.contextPath=E(n.data.contextPath,n.name),n={data:r}}return i(e,n)})};var tO=tw(tk=tk.default),tx={};tx.__esModule=!0;var tP=(n=tC)&&n.__esModule?n:{default:n};tx.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new tP.default("Must pass iterator to #each");var n=e.fn,o=e.inverse,i=0,r="",s=void 0,a=void 0;function l(e,o,i){s&&(s.key=e,s.index=o,s.first=0===o,s.last=!!i,a&&(s.contextPath=a+e)),r+=n(t[e],{data:s,blockParams:P([t[e],e],[a+e,null])})}if(e.data&&e.ids&&(a=E(e.data.contextPath,e.ids[0])+"."),L(t)&&(t=t.call(this)),e.data&&(s=x(e.data)),t&&"object"==typeof t){if(I(t))for(var c,u=t.length;i<u;i++)i in t&&l(i,i,i===t.length-1);else if("function"==typeof Symbol&&t[Symbol.iterator]){for(var h=[],p=t[Symbol.iterator](),d=p.next();!d.done;d=p.next())h.push(d.value);t=h;for(var u=t.length;i<u;i++)l(i,i,i===t.length-1)}else c=void 0,Object.keys(t).forEach(function(t){void 0!==c&&l(c,i-1),c=t,i++}),void 0!==c&&l(c,i-1,!0)}return 0===i&&(r=o(this)),r})};var tE=tw(tx=tx.default),tN={};tN.__esModule=!0;var tL=(o=tC)&&o.__esModule?o:{default:o};tN.default=function(t){t.registerHelper("helperMissing",function()/* [args, ]options */{if(1!=arguments.length)throw new tL.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})};var tI=tw(tN=tN.default),tA={};tA.__esModule=!0;var tM=(i=tC)&&i.__esModule?i:{default:i};tA.default=function(t){t.registerHelper("if",function(t,e){if(2!=arguments.length)throw new tM.default("#if requires exactly one argument");return(// Default behavior is to render the positive path if the value is truthy and not empty.
// The `includeZero` option may be set to treat the condtional as purely not empty based on the
// behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
(L(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||O(t))?e.inverse(this):e.fn(this))}),t.registerHelper("unless",function(e,n){if(2!=arguments.length)throw new tM.default("#unless requires exactly one argument");return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})};var tD=tw(tA=tA.default),tR={};tR.__esModule=!0,tR.default=function(t){t.registerHelper("log",function()/* message, options */{for(var e=[void 0],n=arguments[arguments.length-1],o=0;o<arguments.length-1;o++)e.push(arguments[o]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),e[0]=i,t.log.apply(t,e)})};var tT=tw(tR=tR.default),tH={};tH.__esModule=!0,tH.default=function(t){t.registerHelper("lookup",function(t,e,n){return t?n.lookupProperty(t,e):t})};var tB=tw(tH=tH.default),tY={};tY.__esModule=!0;var tj=(r=tC)&&r.__esModule?r:{default:r};tY.default=function(t){t.registerHelper("with",function(t,e){if(2!=arguments.length)throw new tj.default("#with requires exactly one argument");L(t)&&(t=t.call(this));var n=e.fn;if(O(t))return e.inverse(this);var o=e.data;return e.data&&e.ids&&((o=x(e.data)).contextPath=E(e.data.contextPath,e.ids[0])),n(t,{data:o,blockParams:P([t],[o&&o.contextPath])})})};var tX=tw(tY=tY.default),tF={};tF.__esModule=!0,tF.default=function(t){t.registerDecorator("inline",function(t,e,n,o){var i=t;return e.partials||(e.partials={},i=function(o,i){// Create a new partials stack frame prior to exec.
var r=n.partials;n.partials=b({},r,e.partials);var s=t(o,i);return n.partials=r,s}),e.partials[o.args[0]]=o.fn,i})};var t$=(s=tF=tF.default)&&s.__esModule?s:{default:s},tU={};tU.__esModule=!0;var tW={methodMap:["debug","info","warn","error"],level:"info",// Maps a given level value to the `methodMap` indexes above.
lookupLevel:function(t){if("string"==typeof t){var e=w(tW.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},// Can be overridden in the host environment
log:function(t){if(t=tW.lookupLevel(t),"undefined"!=typeof console&&tW.lookupLevel(tW.level)<=t){var e=tW.methodMap[t];console[e]||(e="log");for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];console[e].apply(console,o);// eslint-disable-line no-console
}}};tU.default=tW;var tq=tc(tU=tU.default);M=/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return b.apply(void 0,[Object.create(null)].concat(e))};var tz=(a=tU)&&a.__esModule?a:{default:a},tV=Object.create(null);function tG(t,e){return void 0!==t.whitelist[e]?!0===t.whitelist[e]:void 0!==t.defaultValue?t.defaultValue:(!0!==tV[e]&&(tV[e]=!0,tz.default.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details')),!1)}f="4.7.8",m=8,g=7,v={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var tK="[object Object]";function tZ(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},tO.default(this),tE.default(this),tI.default(this),tD.default(this),tT.default(this),tB.default(this),tX.default(this),t$.default(this)}tZ.prototype={constructor:tZ,logger:tq.default,log:tq.default.log,registerHelper:function(t,e){if(N.call(t)===tK){if(e)throw new tb.default("Arg not supported with multiple helpers");b(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if(N.call(t)===tK)b(this.partials,t);else{if(void 0===e)throw new tb.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if(N.call(t)===tK){if(e)throw new tb.default("Arg not supported with multiple decorators");b(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]},/**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */resetLoggedPropertyAccesses:function(){Object.keys(tV).forEach(function(t){delete tV[t]})}},y=tq.default.log,C=x,S=tq.default;var tJ=ta(tl),tQ={};function t2(t){this.string=t}tQ.__esModule=!0,t2.prototype.toString=t2.prototype.toHTML=function(){return""+this.string},tQ.default=t2;var t1=ts(tQ=tQ.default),t0=ts(tC),t3=ta(tu),t4={};t(t4,"__esModule",function(){return D},function(t){return D=t}),t(t4,"checkRevision",function(){return R},function(t){return R=t}),t(t4,"template",function(){return T},function(t){return T=t}),t(t4,"wrapProgram",function(){return H},function(t){return H=t}),t(t4,"resolvePartial",function(){return B},function(t){return B=t}),t(t4,"invokePartial",function(){return Y},function(t){return Y=t}),t(t4,"noop",function(){return j},function(t){return j=t}),D=!0,R=function(t){var e=t&&t[0]||1,n=m;if(!(e>=g)||!(e<=m)){if(e<g){var o=v[n],i=v[e];throw new t5.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+o+") or downgrade your runtime to an older version ("+i+").")}throw new t5.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},T=function(t,e){/* istanbul ignore next */if(!e)throw new t5.default("No environment passed to template");if(!t||!t.main)throw new t5.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,// Note: Using env.VM references rather than local var references throughout this section to allow
// for external users to override these as pseudo-supported APIs.
e.VM.checkRevision(t.compiler);// backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
var n=t.compiler&&7===t.compiler[0],o={strict:function(t,e,n){if(!t||!(e in t))throw new t5.default('"'+e+'" not defined in '+t,{loc:n});return o.lookupProperty(t,e)},lookupProperty:function(t,e){var n,i=t[e];if(null==i||Object.prototype.hasOwnProperty.call(t,e)||(n=o.protoAccessControl,"function"==typeof i?tG(n.methods,e):tG(n.properties,e)))return i},lookup:function(t,e){for(var n=t.length,i=0;i<n;i++)if(null!=(t[i]&&o.lookupProperty(t[i],e)))return t[i][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:t8.escapeExpression,invokePartial:function(n,o,i){i.hash&&(o=t8.extend({},o,i.hash),i.ids&&(i.ids[0]=!0)),n=e.VM.resolvePartial.call(this,n,o,i);var r=t8.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=e.VM.invokePartial.call(this,n,o,r);if(null==s&&e.compile&&(i.partials[i.name]=e.compile(n,t.compilerOptions,e),s=i.partials[i.name](o,r)),null!=s){if(i.indent){for(var a=s.split("\n"),l=0,c=a.length;l<c&&(a[l]||l+1!==c);l++)a[l]=i.indent+a[l];s=a.join("\n")}return s}throw new t5.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,o,i){var r=this.programs[t],s=this.fn(t);return e||i||o||n?r=t7(this,t,s,e,n,o,i):r||(r=this.programs[t]=t7(this,t,s)),r},data:function(t,e){for(;t&&e--;)t=t._parent;return t},mergeIfNeeded:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=t8.extend({},e,t)),n},// An empty object to use as replacement for null-contexts
nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function i(e){var n,r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=r.data;i._setup(r),!r.partial&&t.useData&&((n=s)&&"root"in n||((n=n?C(n):{}).root=e),s=n);var a=void 0,l=t.useBlockParams?[]:void 0;function c(e/*, options*/){return""+t.main(o,e,o.helpers,o.partials,s,l,a)}return t.useDepths&&(a=r.depths?e!=r.depths[0]?[e].concat(r.depths):r.depths:[e]),(c=t9(t.main,c,o,r.depths||[],s,l))(e,r)}return i.isTop=!0,i._setup=function(i){if(i.partial)o.protoAccessControl=i.protoAccessControl,o.helpers=i.helpers,o.partials=i.partials,o.decorators=i.decorators,o.hooks=i.hooks;else{var r,s,a=t8.extend({},e.helpers,i.helpers);(function(t,e){Object.keys(t).forEach(function(n){var o,i=t[n];t[n]=(o=e.lookupProperty,"function"!=typeof i?i:function()/* dynamic arguments */{var t,e=arguments[arguments.length-1];return arguments[arguments.length-1]=(t=e,t8.extend({lookupProperty:o},t)),i.apply(this,arguments)})})})(a,o),o.helpers=a,t.usePartial&&(o.partials=o.mergeIfNeeded(i.partials,e.partials)),(t.usePartial||t.useDecorators)&&(o.decorators=t8.extend({},e.decorators,i.decorators)),o.hooks={},o.protoAccessControl=((r=Object.create(null)).constructor=!1,r.__defineGetter__=!1,r.__defineSetter__=!1,r.__lookupGetter__=!1,// eslint-disable-next-line no-proto
(s=Object.create(null)).__proto__=!1,{properties:{whitelist:M(s,i.allowedProtoProperties),defaultValue:i.allowProtoPropertiesByDefault},methods:{whitelist:M(r,i.allowedProtoMethods),defaultValue:i.allowProtoMethodsByDefault}});var l=i.allowCallsToHelperMissing||n;A(o,"helperMissing",l),A(o,"blockHelperMissing",l)}},i._child=function(e,n,i,r){if(t.useBlockParams&&!i)throw new t5.default("must pass block params");if(t.useDepths&&!r)throw new t5.default("must pass parent depths");return t7(o,e,t[e],n,0,i,r)},i},H=t7,B=/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */function(t,e,n){return t?t.call||n.name||(// This is a dynamic partial that returned a string
n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],t},Y=function(t,e,n){// Use the current closure context to save the partial-block if this partial
var o,i=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var r=void 0;if(n.fn&&n.fn!==t6&&(n.data=C(n.data),o=n.fn,r=n.data["partial-block"]=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return(// Restore the partial-block from the closure for the execution of the block
// i.e. the part inside the block of the partial call.
e.data=C(e.data),e.data["partial-block"]=i,o(t,e))},o.partials&&(n.partials=t8.extend({},n.partials,o.partials))),void 0===t&&r&&(t=r),void 0===t)throw new t5.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},j=t6;var t8=// istanbul ignore next
function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(tu),t5=(l=tC)&&l.__esModule?l:{default:l};function t7(t,e,n,o,i,r,s){function a(e){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=s;return s&&e!=s[0]&&!(e===t.nullContext&&null===s[0])&&(a=[e].concat(s)),n(t,e,t.helpers,t.partials,i.data||o,r&&[i.blockParams].concat(r),a)}return(a=t9(n,a,t,s,o,r)).program=e,a.depth=s?s.length:0,a.blockParams=i||0,a}function t6(){return""}function t9(t,e,n,o,i,r){if(t.decorator){var s={};e=t.decorator(e,s,n,o&&o[0],i,r,o),t8.extend(e,s)}return e}var et=ta(t4),ee={};ee.__esModule=!0,ee.default=function(t){"object"!=typeof globalThis&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__);var e=globalThis.Handlebars;/* istanbul ignore next */t.noConflict=function(){return globalThis.Handlebars===t&&(globalThis.Handlebars=e),t}};var en=ts(ee=ee.default);// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function eo(){var t=new tJ.HandlebarsEnvironment;return t3.extend(t,tJ),t.SafeString=t1.default,t.Exception=t0.default,t.Utils=t3,t.escapeExpression=t3.escapeExpression,t.VM=et,t.template=function(e){return et.template(e,t)},t}var ei=eo();ei.create=eo,en.default(ei),ei.default=ei,tr.default=ei;var er=ti(tr=tr.default),es={};es.__esModule=!0;var ea={// Public API used to evaluate derived attributes regarding AST nodes
helpers:{// a mustache is definitely a helper if:
// * it is an eligible helper, and
// * it has at least one parameter or hash segment
helperExpression:function(t){return"SubExpression"===t.type||("MustacheStatement"===t.type||"BlockStatement"===t.type)&&!!(t.params&&t.params.length||t.hash)},scopedId:function(t){return/^\.|this\b/.test(t.original)},// an ID is simple if it only has one part, and that part is not
// `..` or `this`.
simpleId:function(t){return 1===t.parts.length&&!ea.helpers.scopedId(t)&&!t.depth}}};// Must be exported as an object rather than the root of the module as the jison lexer
// must modify the object to operate properly.
es.default=ea;var el=ti(es=es.default);// istanbul ignore next
function ec(t){return t&&t.__esModule?t:{default:t}}var eu={};eu.__esModule=!0;var eh=function(){var t,e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(t,e,n,o,i,r,s){var a=r.length-1;switch(i){case 1:return r[a-1];case 2:this.$=o.prepareProgram(r[a]);break;case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=r[a];break;case 9:this.$={type:"CommentStatement",value:o.stripComment(r[a]),strip:o.stripFlags(r[a],r[a]),loc:o.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:r[a],value:r[a],loc:o.locInfo(this._$)};break;case 11:this.$=o.prepareRawBlock(r[a-2],r[a-1],r[a],this._$);break;case 12:this.$={path:r[a-3],params:r[a-2],hash:r[a-1]};break;case 13:this.$=o.prepareBlock(r[a-3],r[a-2],r[a-1],r[a],!1,this._$);break;case 14:this.$=o.prepareBlock(r[a-3],r[a-2],r[a-1],r[a],!0,this._$);break;case 15:this.$={open:r[a-5],path:r[a-4],params:r[a-3],hash:r[a-2],blockParams:r[a-1],strip:o.stripFlags(r[a-5],r[a])};break;case 16:case 17:this.$={path:r[a-4],params:r[a-3],hash:r[a-2],blockParams:r[a-1],strip:o.stripFlags(r[a-5],r[a])};break;case 18:this.$={strip:o.stripFlags(r[a-1],r[a-1]),program:r[a]};break;case 19:var l=o.prepareBlock(r[a-2],r[a-1],r[a],r[a],!1,this._$),c=o.prepareProgram([l],r[a-1].loc);c.chained=!0,this.$={strip:r[a-2].strip,program:c,chain:!0};break;case 21:this.$={path:r[a-1],strip:o.stripFlags(r[a-2],r[a])};break;case 22:case 23:this.$=o.prepareMustache(r[a-3],r[a-2],r[a-1],r[a-4],o.stripFlags(r[a-4],r[a]),this._$);break;case 24:this.$={type:"PartialStatement",name:r[a-3],params:r[a-2],hash:r[a-1],indent:"",strip:o.stripFlags(r[a-4],r[a]),loc:o.locInfo(this._$)};break;case 25:this.$=o.preparePartialBlock(r[a-2],r[a-1],r[a],this._$);break;case 26:this.$={path:r[a-3],params:r[a-2],hash:r[a-1],strip:o.stripFlags(r[a-4],r[a])};break;case 29:this.$={type:"SubExpression",path:r[a-3],params:r[a-2],hash:r[a-1],loc:o.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:r[a],loc:o.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:o.id(r[a-2]),value:r[a],loc:o.locInfo(this._$)};break;case 32:this.$=o.id(r[a-1]);break;case 35:this.$={type:"StringLiteral",value:r[a],original:r[a],loc:o.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(r[a]),original:Number(r[a]),loc:o.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===r[a],original:"true"===r[a],loc:o.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:o.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:o.locInfo(this._$)};break;case 42:this.$=o.preparePath(!0,r[a],this._$);break;case 43:this.$=o.preparePath(!1,r[a],this._$);break;case 44:r[a-2].push({part:o.id(r[a]),original:r[a],separator:r[a-1]}),this.$=r[a-2];break;case 45:this.$=[{part:o.id(r[a]),original:r[a]}];break;case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[];break;case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:r[a-1].push(r[a]);break;case 98:case 100:this.$=[r[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(t,e){throw Error(t)},parse:function(t){var e=this,n=[0],o=[null],i=[],r=this.table,s="",a=0,l=0,c=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var u=this.lexer.yylloc;i.push(u);var h=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var p,d,f,m,g,v,y,C,S,_={};;){if(f=n[n.length-1],this.defaultActions[f]?m=this.defaultActions[f]:(null==p&&(p=function(){var t;return"number"!=typeof(t=e.lexer.lex()||1)&&(t=e.symbols_[t]||t),t}()),m=r[f]&&r[f][p]),void 0===m||!m.length||!m[0]){var b="";if(!c){for(v in S=[],r[f])this.terminals_[v]&&v>2&&S.push("'"+this.terminals_[v]+"'");b=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[p]||p)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==p?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(b,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:u,expected:S})}}if(m[0]instanceof Array&&m.length>1)throw Error("Parse Error: multiple actions possible at state: "+f+", token: "+p);switch(m[0]){case 1:n.push(p),o.push(this.lexer.yytext),i.push(this.lexer.yylloc),n.push(m[1]),p=null,d?(p=d,d=null):(l=this.lexer.yyleng,s=this.lexer.yytext,a=this.lexer.yylineno,u=this.lexer.yylloc,c>0&&c--);break;case 2:if(y=this.productions_[m[1]][1],_.$=o[o.length-y],_._$={first_line:i[i.length-(y||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(y||1)].first_column,last_column:i[i.length-1].last_column},h&&(_._$.range=[i[i.length-(y||1)].range[0],i[i.length-1].range[1]]),void 0!==(g=this.performAction.call(_,s,l,a,this.yy,m[1],o,i)))return g;y&&(n=n.slice(0,-1*y*2),o=o.slice(0,-1*y),i=i.slice(0,-1*y)),n.push(this.productions_[m[1]][0]),o.push(_.$),i.push(_._$),C=r[n[n.length-2]][n[n.length-1]],n.push(C);break;case 3:return!0}}return!0}},n=((t={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e-1),//this.yyleng -= len;
this.offset-=e;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===o.length?this.yylloc.first_column:0)+o[o.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-e]),this},more:function(){return this._more=!0,this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,n,o,i,r=this._currentRules(),s=0;s<r.length&&(!(n=this._input.match(this.rules[r[s]]))||e&&!(n[0].length>e[0].length)||(e=n,o=s,this.options.flex));s++);return e?((i=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],t=this.performAction.call(this,this.yy,this,r[o],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),t)?t:void 0:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return void 0!==t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}}).options={},t.performAction=function(t,e,n,o){function i(t,n){return e.yytext=e.yytext.substring(t,e.yyleng-n+t)}switch(n){case 0:if("\\\\"===e.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===e.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),e.yytext)return 15;break;case 1:case 5:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:// Should be using `this.topState()` below, but it currently
// returns the second top instead of the first top. Opened an
// issue about it at https://github.com/zaach/jison/issues/291
if(this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1])return 15;return i(5,9),"END_RAW_BLOCK";case 6:case 22:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:case 23:return 48;case 21:this.unput(e.yytext),this.popState(),this.begin("com");break;case 24:return 73;case 25:case 26:case 41:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return e.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return e.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 42:return e.yytext=e.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},t.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],t.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},t);function o(){this.yy={}}return e.lexer=n,o.prototype=e,e.Parser=o,new o}();eu.default=eh;var ep=ec(eu=eu.default),ed={};ed.__esModule=!0;var ef={};ef.__esModule=!0;var em=(c=tC)&&c.__esModule?c:{default:c};function eg(){this.parents=[]}function ev(t){this.acceptRequired(t,"path"),this.acceptArray(t.params),this.acceptKey(t,"hash")}function ey(t){ev.call(this,t),this.acceptKey(t,"program"),this.acceptKey(t,"inverse")}function eC(t){this.acceptRequired(t,"name"),this.acceptArray(t.params),this.acceptKey(t,"hash")}eg.prototype={constructor:eg,mutating:!1,// Visits a given value. If mutating, will replace the value if necessary.
acceptKey:function(t,e){var n=this.accept(t[e]);if(this.mutating){// Hacky sanity check: This may have a few false positives for type for the helper
// methods but will generally do the right thing without a lot of overhead.
if(n&&!eg.prototype[n.type])throw new em.default('Unexpected node type "'+n.type+'" found when accepting '+e+" on "+t.type);t[e]=n}},// Performs an accept operation with added sanity check to ensure
// required keys are not removed.
acceptRequired:function(t,e){if(this.acceptKey(t,e),!t[e])throw new em.default(t.type+" requires "+e)},// Traverses a given array. If mutating, empty respnses will be removed
// for child elements.
acceptArray:function(t){for(var e=0,n=t.length;e<n;e++)this.acceptKey(t,e),!t[e]&&(t.splice(e,1),e--,n--)},accept:function(t){if(t){/* istanbul ignore next: Sanity code */if(!this[t.type])throw new em.default("Unknown type: "+t.type,t);this.current&&this.parents.unshift(this.current),this.current=t;var e=this[t.type](t);if(this.current=this.parents.shift(),!this.mutating||e)return e;if(!1!==e)return t}},Program:function(t){this.acceptArray(t.body)},MustacheStatement:ev,Decorator:ev,BlockStatement:ey,DecoratorBlock:ey,PartialStatement:eC,PartialBlockStatement:function(t){eC.call(this,t),this.acceptKey(t,"program")},ContentStatement:function()/* content */{},CommentStatement:function()/* comment */{},SubExpression:ev,PathExpression:function()/* path */{},StringLiteral:function()/* string */{},NumberLiteral:function()/* number */{},BooleanLiteral:function()/* bool */{},UndefinedLiteral:function()/* literal */{},NullLiteral:function()/* literal */{},Hash:function(t){this.acceptArray(t.pairs)},HashPair:function(t){this.acceptRequired(t,"value")}},ef.default=eg;var eS=(u=ef=ef.default)&&u.__esModule?u:{default:u};function e_(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=t}function eb(t,e,n){void 0===e&&(e=t.length);// Nodes that end with newlines are considered whitespace (but are special
// cased for strip operations)
var o=t[e-1],i=t[e-2];return o?"ContentStatement"===o.type?(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(o.original):void 0:n}function ew(t,e,n){void 0===e&&(e=-1);var o=t[e+1],i=t[e+2];return o?"ContentStatement"===o.type?(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(o.original):void 0:n}// Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function ek(t,e,n){var o=t[null==e?0:e+1];if(o&&"ContentStatement"===o.type&&(n||!o.rightStripped)){var i=o.value;o.value=o.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),o.rightStripped=o.value!==i}}// Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function eO(t,e,n){var o=t[null==e?t.length-1:e-1];if(o&&"ContentStatement"===o.type&&(n||!o.leftStripped)){// We omit the last node if it's whitespace only and not preceded by a non-content node.
var i=o.value;return o.value=o.value.replace(n?/\s+$/:/[ \t]+$/,""),o.leftStripped=o.value!==i,o.leftStripped}}e_.prototype=new eS.default,e_.prototype.Program=function(t){var e=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var o=t.body,i=0,r=o.length;i<r;i++){var s=o[i],a=this.accept(s);if(a){var l=eb(o,i,n),c=ew(o,i,n),u=a.openStandalone&&l,h=a.closeStandalone&&c,p=a.inlineStandalone&&l&&c;a.close&&ek(o,i,!0),a.open&&eO(o,i,!0),e&&p&&(ek(o,i),eO(o,i)&&"PartialStatement"===s.type&&(s.indent=/([ \t]+$)/.exec(o[i-1].original)[1])),e&&u&&(ek((s.program||s.inverse).body),// Strip out the previous content node if it's whitespace only
eO(o,i)),e&&h&&(// Always strip the next node
ek(o,i),eO((s.inverse||s.program).body))}}return t},e_.prototype.BlockStatement=e_.prototype.DecoratorBlock=e_.prototype.PartialBlockStatement=function(t){this.accept(t.program),this.accept(t.inverse);// Find the inverse program that is involed with whitespace stripping.
var e=t.program||t.inverse,n=t.program&&t.inverse,o=n,i=n;if(n&&n.chained)// Walk the inverse chain to find the last inverse that is actually in the chain.
for(o=n.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var r={open:t.openStrip.open,close:t.closeStrip.close,// Determine the standalone candiacy. Basically flag our content as being possibly standalone
// so our parent can determine if we actually are standalone
openStandalone:ew(e.body),closeStandalone:eb((o||e).body)};if(t.openStrip.close&&ek(e.body,null,!0),n){var s=t.inverseStrip;s.open&&eO(e.body,null,!0),s.close&&ek(o.body,null,!0),t.closeStrip.open&&eO(i.body,null,!0),!this.options.ignoreStandalone&&eb(e.body)&&ew(o.body)&&(eO(e.body),ek(o.body))}else t.closeStrip.open&&eO(e.body,null,!0);return r},e_.prototype.Decorator=e_.prototype.MustacheStatement=function(t){return t.strip},e_.prototype.PartialStatement=e_.prototype.CommentStatement=function(t){/* istanbul ignore next */var e=t.strip||{};return{inlineStandalone:!0,open:e.open,close:e.close}},ed.default=e_;var ex=ec(ed=ed.default),eP={};t(eP,"__esModule",function(){return F},function(t){return F=t}),t(eP,"SourceLocation",function(){return $},function(t){return $=t}),t(eP,"id",function(){return U},function(t){return U=t}),t(eP,"stripFlags",function(){return W},function(t){return W=t}),t(eP,"stripComment",function(){return q},function(t){return q=t}),t(eP,"preparePath",function(){return z},function(t){return z=t}),t(eP,"prepareMustache",function(){return V},function(t){return V=t}),t(eP,"prepareRawBlock",function(){return G},function(t){return G=t}),t(eP,"prepareBlock",function(){return K},function(t){return K=t}),t(eP,"prepareProgram",function(){return Z},function(t){return Z=t}),t(eP,"preparePartialBlock",function(){return J},function(t){return J=t}),F=!0,$=function(t,e){this.source=t,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}},U=function(t){return/^\[.*\]$/.test(t)?t.substring(1,t.length-1):t},W=function(t,e){return{open:"~"===t.charAt(2),close:"~"===e.charAt(e.length-3)}},q=function(t){return t.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},z=function(t,e,n){n=this.locInfo(n);for(var o=t?"@":"",i=[],r=0,s=0,a=e.length;s<a;s++){var l=e[s].part,// i.e. foo.[this] resolves to approximately context.foo['this']
c=e[s].original!==l;if(o+=(e[s].separator||"")+l,c||".."!==l&&"."!==l&&"this"!==l)i.push(l);else{if(i.length>0)throw new eE.default("Invalid path: "+o,{loc:n});".."===l&&r++}}return{type:"PathExpression",data:t,depth:r,parts:i,original:o,loc:n}},V=function(t,e,n,o,i,r){// Must use charAt to support IE pre-10
var s=o.charAt(3)||o.charAt(2);return{type:/\*/.test(o)?"Decorator":"MustacheStatement",path:t,params:e,hash:n,escaped:"{"!==s&&"&"!==s,strip:i,loc:this.locInfo(r)}},G=function(t,e,n,o){eN(t,n);var i={type:"Program",body:e,strip:{},loc:o=this.locInfo(o)};return{type:"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:o}},K=function(t,e,n,o,i,r){o&&o.path&&eN(t,o);var s=/\*/.test(t.open);e.blockParams=t.blockParams;var a=void 0,l=void 0;if(n){if(s)throw new eE.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=o.strip),l=n.strip,a=n.program}return i&&(i=a,a=e,e=i),{type:s?"DecoratorBlock":"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:e,inverse:a,openStrip:t.strip,inverseStrip:l,closeStrip:o&&o.strip,loc:this.locInfo(r)}},Z=function(t,e){if(!e&&t.length){var n=t[0].loc,o=t[t.length-1].loc;n&&o&&(e={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:o.end.line,column:o.end.column}})}return{type:"Program",body:t,strip:{},loc:e}},J=function(t,e,n,o){return eN(t,n),{type:"PartialBlockStatement",name:t.path,params:t.params,hash:t.hash,program:e,openStrip:t.strip,closeStrip:n&&n.strip,loc:this.locInfo(o)}};var eE=(h=tC)&&h.__esModule?h:{default:h};function eN(t,e){if(e=e.path?e.path.original:e,t.path.original!==e){var n={loc:t.path.loc};throw new eE.default(t.path.original+" doesn't match "+e,n)}}var eL=// istanbul ignore next
function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(eP);X=ep.default;var eI={};function eA(t,e){return(// Just return if an already-compiled AST was passed in.
"Program"===t.type?t:(ep.default.yy=eI,// Altering the shared object here, but this is ok as parser is a sync operation
eI.locInfo=function(t){return new eI.SourceLocation(e&&e.srcName,t)},ep.default.parse(t)))}function eM(t,e){var n=eA(t,e);return new ex.default(e).accept(n)}// istanbul ignore next
function eD(t){return t&&t.__esModule?t:{default:t}}b(eI,eL);var eR=eD(tC),eT=eD(es),eH=[].slice;function eB(){}function eY(t){if(!t.path.parts){var e=t.path;// Casting to string here to make false and 0 literal values play nicely with the rest
// of the system.
t.path={type:"PathExpression",data:!1,depth:0,parts:[e.original+""],original:e.original+"",loc:e.loc}}}// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.
eB.prototype={compiler:eB,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var o=this.opcodes[n],i=t.opcodes[n];if(o.opcode!==i.opcode||!function t(e,n){if(e===n)return!0;if(I(e)&&I(n)&&e.length===n.length){for(var o=0;o<e.length;o++)if(!t(e[o],n[o]))return!1;return!0}}(o.args,i.args))return!1}// We know that length is the same between the two arrays because they are directly tied
// to the opcode behavior above.
e=this.children.length;for(var n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds,e.blockParams=e.blockParams||[],e.knownHelpers=b(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},e.knownHelpers),this.accept(t)},compileProgram:function(t){var e=new this.compiler().compile(t,this.options),n=this.guid++;return this.usePartial=this.usePartial||e.usePartial,this.children[n]=e,this.useDepths=this.useDepths||e.useDepths,n},accept:function(t){/* istanbul ignore next: Sanity code */if(!this[t.type])throw new eR.default("Unknown type: "+t.type,t);this.sourceNode.unshift(t);var e=this[t.type](t);return this.sourceNode.shift(),e},Program:function(t){this.options.blockParams.unshift(t.blockParams);for(var e=t.body,n=e.length,o=0;o<n;o++)this.accept(e[o]);return this.options.blockParams.shift(),this.isSimple=1===n,this.blockParams=t.blockParams?t.blockParams.length:0,this},BlockStatement:function(t){eY(t);var e=t.program,n=t.inverse;e=e&&this.compileProgram(e),n=n&&this.compileProgram(n);var o=this.classifySexpr(t);"helper"===o?this.helperSexpr(t,e,n):"simple"===o?(this.simpleSexpr(t),// now that the simple mustache is resolved, we need to
// evaluate it by executing `blockHelperMissing`
this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",t.path.original)):(this.ambiguousSexpr(t,e,n),// now that the simple mustache is resolved, we need to
// evaluate it by executing `blockHelperMissing`
this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(t){var e=t.program&&this.compileProgram(t.program),n=this.setupFullMustacheParams(t,e,void 0),o=t.path;this.useDecorators=!0,this.opcode("registerDecorator",n.length,o.original)},PartialStatement:function(t){this.usePartial=!0;var e=t.program;e&&(e=this.compileProgram(t.program));var n=t.params;if(n.length>1)throw new eR.default("Unsupported number of partial arguments: "+n.length,t);n.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):n.push({type:"PathExpression",parts:[],depth:0}));var o=t.name.original,i="SubExpression"===t.name.type;i&&this.accept(t.name),this.setupFullMustacheParams(t,e,void 0,!0);var r=t.indent||"";this.options.preventIndent&&r&&(this.opcode("appendContent",r),r=""),this.opcode("invokePartial",i,o,r),this.opcode("append")},PartialBlockStatement:function(t){this.PartialStatement(t)},MustacheStatement:function(t){this.SubExpression(t),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(t){this.DecoratorBlock(t)},ContentStatement:function(t){t.value&&this.opcode("appendContent",t.value)},CommentStatement:function(){},SubExpression:function(t){eY(t);var e=this.classifySexpr(t);"simple"===e?this.simpleSexpr(t):"helper"===e?this.helperSexpr(t):this.ambiguousSexpr(t)},ambiguousSexpr:function(t,e,n){var o=t.path,i=o.parts[0],r=null!=e||null!=n;this.opcode("getContext",o.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),o.strict=!0,this.accept(o),this.opcode("invokeAmbiguous",i,r)},simpleSexpr:function(t){var e=t.path;e.strict=!0,this.accept(e),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var o=this.setupFullMustacheParams(t,e,n),i=t.path,r=i.parts[0];if(this.options.knownHelpers[r])this.opcode("invokeKnownHelper",o.length,r);else if(this.options.knownHelpersOnly)throw new eR.default("You specified knownHelpersOnly, but used the unknown helper "+r,t);else i.strict=!0,i.falsy=!0,this.accept(i),this.opcode("invokeHelper",o.length,i.original,eT.default.helpers.simpleId(i))},PathExpression:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0],n=eT.default.helpers.scopedId(t),o=!t.depth&&!n&&this.blockParamIndex(e);o?this.opcode("lookupBlockParam",o,t.parts):e?t.data?(this.options.data=!0,this.opcode("lookupData",t.depth,t.parts,t.strict)):this.opcode("lookupOnContext",t.parts,t.falsy,t.strict,n):this.opcode("pushContext")},StringLiteral:function(t){this.opcode("pushString",t.value)},NumberLiteral:function(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(t){var e=t.pairs,n=0,o=e.length;for(this.opcode("pushHash");n<o;n++)this.pushParam(e[n].value);for(;n--;)this.opcode("assignToHash",e[n].key);this.opcode("popHash")},// HELPERS
opcode:function(t){this.opcodes.push({opcode:t,args:eH.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(t){t&&(this.useDepths=!0)},classifySexpr:function(t){var e=eT.default.helpers.simpleId(t.path),n=e&&!!this.blockParamIndex(t.path.parts[0]),o=!n&&eT.default.helpers.helperExpression(t),i=!n&&(o||e);// if ambiguous, we can possibly resolve the ambiguity now
// An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
if(i&&!o){var r=t.path.parts[0],s=this.options;s.knownHelpers[r]?o=!0:s.knownHelpersOnly&&(i=!1)}return o?"helper":i?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){var e=null!=t.value?t.value:t.original||"";if(this.stringParams)e.replace&&(e=e.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",e,t.type),"SubExpression"===t.type&&// in string params mode.
this.accept(t);else{if(this.trackIds){var n=void 0;if(!t.parts||eT.default.helpers.scopedId(t)||t.depth||(n=this.blockParamIndex(t.parts[0])),n){var o=t.parts.slice(1).join(".");this.opcode("pushId","BlockParam",n,o)}else(e=t.original||e).replace&&(e=e.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",t.type,e)}this.accept(t)}},setupFullMustacheParams:function(t,e,n,o){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.accept(t.hash):this.opcode("emptyHash",o),i},blockParamIndex:function(t){for(var e=0,n=this.options.blockParams.length;e<n;e++){var o=this.options.blockParams[e],i=o&&w(o,t);if(o&&i>=0)return[e,i]}}};var ej={};// istanbul ignore next
function eX(t){return t&&t.__esModule?t:{default:t}}ej.__esModule=!0;var eF=eX(tC),e$={};e$.__esModule=!0;var eU=void 0;try{"function"==typeof define&&define.amd||(eU=tn("hTBva").SourceNode)}catch(t){}function eW(t,e,n){if(I(t)){for(var o=[],i=0,r=t.length;i<r;i++)o.push(e.wrap(t[i],n));return o}return"boolean"==typeof t||"number"==typeof t?t+"":t}function eq(t){this.srcFile=t,this.source=[]}eU||/* istanbul ignore next */((eU=function(t,e,n,o){this.src="",o&&this.add(o)}).prototype={add:function(t){I(t)&&(t=t.join("")),this.src+=t},prepend:function(t){I(t)&&(t=t.join("")),this.src=t+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),eq.prototype={isEmpty:function(){return!this.source.length},prepend:function(t,e){this.source.unshift(this.wrap(t,e))},push:function(t,e){this.source.push(this.wrap(t,e))},merge:function(){var t=this.empty();return this.each(function(e){t.add(["  ",e,"\n"])}),t},each:function(t){for(var e=0,n=this.source.length;e<n;e++)t(this.source[e])},empty:function(){var t=this.currentLocation||{start:{}};return new eU(t.start.line,t.start.column,this.srcFile)},wrap:function(t){var e=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return t instanceof eU?t:(t=eW(t,this,e),new eU(e.start.line,e.start.column,this.srcFile,t))},functionCall:function(t,e,n){return n=this.generateList(n),this.wrap([t,e?"."+e+"(":"(",n,")"])},quotedString:function(t){return'"'+(t+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028")// Per Ecma-262 7.3 + 7.8.4
.replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){// istanbul ignore next
var e=this,n=[];Object.keys(t).forEach(function(o){var i=eW(t[o],e);"undefined"!==i&&n.push([e.quotedString(o),":",i])});var o=this.generateList(n);return o.prepend("{"),o.add("}"),o},generateList:function(t){for(var e=this.empty(),n=0,o=t.length;n<o;n++)n&&e.add(","),e.add(eW(t[n],this));return e},generateArray:function(t){var e=this.generateList(t);return e.prepend("["),e.add("]"),e}},e$.default=eq;var ez=eX(e$=e$.default);function eV(t){this.value=t}function eG(){}eG.prototype={// PUBLIC API: You can override these methods in a subclass to provide
// alternative compiled forms for name lookup and buffering semantics
nameLookup:function(t,e/*,  type */){return this.internalNameLookup(t,e)},depthedLookup:function(t){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(t),")"]},compilerInfo:function(){var t=m,e=v[t];return[t,e]},appendToBuffer:function(t,e,n){return(I(t)||(t=[t]),t=this.source.wrap(t,e),this.environment.isSimple)?["return ",t,";"]:n?["buffer += ",t,";"]:(t.appendToBuffer=!0,t)},initializeBuffer:function(){return this.quotedString("")},// END PUBLIC API
internalNameLookup:function(t,e){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",t,",",JSON.stringify(e),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(t,e,n,o){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!o,this.name=this.environment.name,this.isChild=!!n,this.context=n||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.useDepths||t.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||t.useBlockParams;var i=t.opcodes,r=void 0,s=void 0,a=void 0,l=void 0;for(a=0,l=i.length;a<l;a++)r=i[a],this.source.currentLocation=r.loc,s=s||r.loc,this[r.opcode].apply(this,r.args);/* istanbul ignore next */if(// Flush any trailing content that might be pending.
this.source.currentLocation=s,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new eF.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),o?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var c=this.createFunctionContext(o);if(this.isChild)return c;var u={compiler:this.compilerInfo(),main:c};this.decorators&&(u.main_d=this.decorators,u.useDecorators=!0);var h=this.context,p=h.programs,d=h.decorators;for(a=0,l=p.length;a<l;a++)p[a]&&(u[a]=p[a],d[a]&&(u[a+"_d"]=d[a],u.useDecorators=!0));return this.environment.usePartial&&(u.usePartial=!0),this.options.data&&(u.useData=!0),this.useDepths&&(u.useDepths=!0),this.useBlockParams&&(u.useBlockParams=!0),this.options.compat&&(u.compat=!0),o?u.compilerOptions=this.options:(u.compiler=JSON.stringify(u.compiler),this.source.currentLocation={start:{line:1,column:0}},u=this.objectLiteral(u),e.srcName?(u=u.toStringWithSourceMap({file:e.destName})).map=u.map&&u.map.toString():u=u.toString()),u},preamble:function(){// track the last context pushed into place to allow skipping the
// getContext opcode when it would be a noop
this.lastContext=0,this.source=new ez.default(this.options.srcName),this.decorators=new ez.default(this.options.srcName)},createFunctionContext:function(t){// istanbul ignore next
var e=this,n="",o=this.stackVars.concat(this.registers.list);o.length>0&&(n+=", "+o.join(", "));// Generate minimizer alias mappings
//
// When using true SourceNodes, this will update all references to the given alias
// as the source nodes are reused in situ. For the non-source node compilation mode,
// aliases will not be used, but this case is already being run on the client and
// we aren't concern about minimizing the template size.
var i=0;Object.keys(this.aliases).forEach(function(t){var o=e.aliases[t];o.children&&o.referenceCount>1&&(n+=", alias"+ ++i+"="+t,o.children[0]="alias"+i)}),this.lookupPropertyFunctionIsUsed&&(n+=", "+this.lookupPropertyFunctionVarDeclaration());var r=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&r.push("blockParams"),this.useDepths&&r.push("depths");// Perform a second pass over the output to merge content when possible
var s=this.mergeSource(n);return t?(r.push(s),Function.apply(this,r)):this.source.wrap(["function(",r.join(","),") {\n  ",s,"}"])},mergeSource:function(t){var e=this.environment.isSimple,n=!this.forceBuffer,o=void 0,i=void 0,r=void 0,s=void 0;return this.source.each(function(t){t.appendToBuffer?(r?t.prepend("  + "):r=t,s=t):(r&&(i?r.prepend("buffer += "):o=!0,s.add(";"),r=s=void 0),i=!0,e||(n=!1))}),n?r?(r.prepend("return "),s.add(";")):i||this.source.push('return "";'):(t+=", buffer = "+(o?"":this.initializeBuffer()),r?(r.prepend("return buffer + "),s.add(";")):this.source.push("return buffer;")),t&&this.source.prepend("var "+t.substring(2)+(o?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},// [blockValue]
//
// On stack, before: hash, inverse, program, value
// On stack, after: return value of blockHelperMissing
//
// The purpose of this opcode is to take a block of the form
// `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
// replace it on the stack with the result of properly
// invoking blockHelperMissing.
blockValue:function(t){var e=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs(t,0,n);var o=this.popStack();n.splice(1,0,o),this.push(this.source.functionCall(e,"call",n))},// [ambiguousBlockValue]
//
// On stack, before: hash, inverse, program, value
// Compiler value, before: lastHelper=value of last found helper, if any
// On stack, after, if no lastHelper: same as [blockValue]
// On stack, after, if lastHelper: value
ambiguousBlockValue:function(){// We're being a bit cheeky and reusing the options value from the prior exec
var t=this.aliasable("container.hooks.blockHelperMissing"),e=[this.contextName(0)];this.setupHelperArgs("",0,e,!0),this.flushInline();var n=this.topStack();e.splice(1,0,n),this.pushSource(["if (!",this.lastHelper,") { ",n," = ",this.source.functionCall(t,"call",e),"}"])},// [appendContent]
//
// On stack, before: ...
// On stack, after: ...
//
// Appends the string value of `content` to the current buffer
appendContent:function(t){this.pendingContent?t=this.pendingContent+t:this.pendingLocation=this.source.currentLocation,this.pendingContent=t},// [append]
//
// On stack, before: value, ...
// On stack, after: ...
//
// Coerces `value` to a String and appends it to the current buffer.
//
// If `value` is truthy, or 0, it is coerced into a string and appended
// Otherwise, the empty string is appended
append:function(){if(this.isInline())this.replaceStack(function(t){return[" != null ? ",t,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var t=this.popStack();this.pushSource(["if (",t," != null) { ",this.appendToBuffer(t,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},// [appendEscaped]
//
// On stack, before: value, ...
// On stack, after: ...
//
// Escape `value` and append it to the buffer
appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},// [getContext]
//
// On stack, before: ...
// On stack, after: ...
// Compiler value, after: lastContext=depth
//
// Set the value of the `lastContext` compiler value to the depth
getContext:function(t){this.lastContext=t},// [pushContext]
//
// On stack, before: ...
// On stack, after: currentContext, ...
//
// Pushes the value of the current context onto the stack.
pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},// [lookupOnContext]
//
// On stack, before: ...
// On stack, after: currentContext[name], ...
//
// Looks up the value of `name` on the current context and pushes
// it onto the stack.
lookupOnContext:function(t,e,n,o){var i=0;o||!this.options.compat||this.lastContext?this.pushContext():// is implemented below, so we evaluate that directly in compat mode
this.push(this.depthedLookup(t[i++])),this.resolvePath("context",t,i,e,n)},// [lookupBlockParam]
//
// On stack, before: ...
// On stack, after: blockParam[name], ...
//
// Looks up the value of `parts` on the given block param and pushes
// it onto the stack.
lookupBlockParam:function(t,e){this.useBlockParams=!0,this.push(["blockParams[",t[0],"][",t[1],"]"]),this.resolvePath("context",e,1)},// [lookupData]
//
// On stack, before: ...
// On stack, after: data, ...
//
// Push the data lookup operator
lookupData:function(t,e,n){t?this.pushStackLiteral("container.data(data, "+t+")"):this.pushStackLiteral("data"),this.resolvePath("data",e,0,!0,n)},resolvePath:function(t,e,n,o,i){// istanbul ignore next
var r=this;if(this.options.strict||this.options.assumeObjects){this.push(function(t,e,n,o,i){var r=e.popStack(),s=n.length;for(t&&s--;o<s;o++)r=e.nameLookup(r,n[o],i);return t?[e.aliasable("container.strict"),"(",r,", ",e.quotedString(n[o]),", ",JSON.stringify(e.source.currentLocation)," )"]:r}(this.options.strict&&i,this,e,n,t));return}for(var s=e.length;n<s;n++)/* eslint-disable no-loop-func */this.replaceStack(function(i){var s=r.nameLookup(i,e[n],t);return(// We want to ensure that zero and false are handled properly if the context (falsy flag)
// needs to have the special handling for these values.
o?[" && ",s]:[" != null ? ",s," : ",i])})},// [resolvePossibleLambda]
//
// On stack, before: value, ...
// On stack, after: resolved value, ...
//
// If the `value` is a lambda, replace it on the stack by
// the return value of the lambda
resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},// [pushStringParam]
//
// On stack, before: ...
// On stack, after: string, currentContext, ...
//
// This opcode is designed for use in string mode, which
// provides the string value of a parameter along with its
// depth rather than resolving it immediately.
pushStringParam:function(t,e){this.pushContext(),this.pushString(e),"SubExpression"!==e&&("string"==typeof t?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(t){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(t?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(t.ids)),this.stringParams&&(this.push(this.objectLiteral(t.contexts)),this.push(this.objectLiteral(t.types))),this.push(this.objectLiteral(t.values))},// [pushString]
//
// On stack, before: ...
// On stack, after: quotedString(string), ...
//
// Push a quoted version of `string` onto the stack
pushString:function(t){this.pushStackLiteral(this.quotedString(t))},// [pushLiteral]
//
// On stack, before: ...
// On stack, after: value, ...
//
// Pushes a value onto the stack. This operation prevents
// the compiler from creating a temporary variable to hold
// it.
pushLiteral:function(t){this.pushStackLiteral(t)},// [pushProgram]
//
// On stack, before: ...
// On stack, after: program(guid), ...
//
// Push a program expression onto the stack. This takes
// a compile-time guid and converts it into a runtime-accessible
// expression.
pushProgram:function(t){null!=t?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},// [registerDecorator]
//
// On stack, before: hash, program, params..., ...
// On stack, after: ...
//
// Pops off the decorator's parameters, invokes the decorator,
// and inserts the decorator into the decorators list.
registerDecorator:function(t,e){var n=this.nameLookup("decorators",e,"decorator"),o=this.setupHelperArgs(e,t);this.decorators.push(["fn = ",this.decorators.functionCall(n,"",["fn","props","container",o])," || fn;"])},// [invokeHelper]
//
// On stack, before: hash, inverse, program, params..., ...
// On stack, after: result of helper invocation
//
// Pops off the helper's parameters, invokes the helper,
// and pushes the helper's return value onto the stack.
//
// If the helper is not found, `helperMissing` is called.
invokeHelper:function(t,e,n){var o=this.popStack(),i=this.setupHelper(t,e),r=[];n&&r.push(i.name),// call a function from the input object
r.push(o),this.options.strict||r.push(this.aliasable("container.hooks.helperMissing"));var s=["(",this.itemsSeparatedBy(r,"||"),")"],a=this.source.functionCall(s,"call",i.callParams);this.push(a)},itemsSeparatedBy:function(t,e){var n=[];n.push(t[0]);for(var o=1;o<t.length;o++)n.push(e,t[o]);return n},// [invokeKnownHelper]
//
// On stack, before: hash, inverse, program, params..., ...
// On stack, after: result of helper invocation
//
// This operation is used when the helper is known to exist,
// so a `helperMissing` fallback is not required.
invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(this.source.functionCall(n.name,"call",n.callParams))},// [invokeAmbiguous]
//
// On stack, before: hash, inverse, program, params..., ...
// On stack, after: result of disambiguation
//
// This operation is used when an expression like `{{foo}}`
// is provided, but we don't know at compile-time whether it
// is a helper or a path.
//
// This operation emits more code than the other options,
// and can be avoided by passing the `knownHelpers` and
// `knownHelpersOnly` flags at compile-time.
invokeAmbiguous:function(t,e){this.useRegister("helper");var n=this.popStack();this.emptyHash();var o=this.setupHelper(0,t,e),i=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",t,"helper")," || ",n,")"];this.options.strict||(i[0]="(helper = ",i.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",i,o.paramsInit?["),(",o.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",o.callParams)," : helper))"])},// [invokePartial]
//
// On stack, before: context, ...
// On stack after: result of partial invocation
//
// This operation pops off a context, invokes a partial with that context,
// and pushes the result of the invocation back.
invokePartial:function(t,e,n){var o=[],i=this.setupParams(e,1,o);t&&(e=this.popStack(),delete i.name),n&&(i.indent=JSON.stringify(n)),i.helpers="helpers",i.partials="partials",i.decorators="container.decorators",t?o.unshift(e):o.unshift(this.nameLookup("partials",e,"partial")),this.options.compat&&(i.depths="depths"),i=this.objectLiteral(i),o.push(i),this.push(this.source.functionCall("container.invokePartial","",o))},// [assignToHash]
//
// On stack, before: value, ..., hash, ...
// On stack, after: ..., hash, ...
//
// Pops a value off the stack and assigns it to the current hash
assignToHash:function(t){var e=this.popStack(),n=void 0,o=void 0,i=void 0;this.trackIds&&(i=this.popStack()),this.stringParams&&(o=this.popStack(),n=this.popStack());var r=this.hash;n&&(r.contexts[t]=n),o&&(r.types[t]=o),i&&(r.ids[t]=i),r.values[t]=e},pushId:function(t,e,n){"BlockParam"===t?this.pushStackLiteral("blockParams["+e[0]+"].path["+e[1]+"]"+(n?" + "+JSON.stringify("."+n):"")):"PathExpression"===t?this.pushString(e):"SubExpression"===t?this.pushStackLiteral("true"):this.pushStackLiteral("null")},// HELPERS
compiler:eG,compileChildren:function(t,e){for(var n=t.children,o=void 0,i=void 0,r=0,s=n.length;r<s;r++){o=n[r],i=new this.compiler;var a=this.matchExistingProgram(o);if(null==a){this.context.programs.push("");var l=this.context.programs.length;o.index=l,o.name="program"+l,this.context.programs[l]=i.compile(o,e,this.context,!this.precompile),this.context.decorators[l]=i.decorators,this.context.environments[l]=o,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams,o.useDepths=this.useDepths,o.useBlockParams=this.useBlockParams}else o.index=a.index,o.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var o=this.context.environments[e];if(o&&o.equals(t))return o}},programExpression:function(t){var e=this.environment.children[t],n=[e.index,"data",e.blockParams];return(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths"),"container.program("+n.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},push:function(t){return t instanceof eV||(t=this.source.wrap(t)),this.inlineStack.push(t),t},pushStackLiteral:function(t){this.push(new eV(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),t&&this.source.push(t)},replaceStack:function(t){var e=["("],n=void 0,o=void 0,i=void 0;/* istanbul ignore next */if(!this.isInline())throw new eF.default("replaceStack on non-inline");// We want to merge the inline statement into the replacement statement via ','
var r=this.popStack(!0);if(r instanceof eV)e=["(",// Literals do not need to be inlined
n=[r.value]],i=!0;else{// Get or create the current stack name for use by the inline
o=!0;var s=this.incrStack();e=["((",this.push(s)," = ",r,")"],n=this.topStack()}var a=t.call(this,n);i||this.popStack(),o&&this.stackSlot--,this.push(e.concat(a,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var o=t[e];/* istanbul ignore if */if(o instanceof eV)this.compileStack.push(o);else{var i=this.incrStack();this.pushSource([i," = ",o,";"]),this.compileStack.push(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof eV)return n.value;if(!e){/* istanbul ignore next */if(!this.stackSlot)throw new eF.default("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return /* istanbul ignore if */e instanceof eV?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return this.source.quotedString(t)},objectLiteral:function(t){return this.source.objectLiteral(t)},aliasable:function(t){var e=this.aliases[t];return e?e.referenceCount++:((e=this.aliases[t]=this.source.wrap(t)).aliasable=!0,e.referenceCount=1),e},setupHelper:function(t,e,n){var o=[],i=this.setupHelperArgs(e,t,o,n);return{params:o,paramsInit:i,name:this.nameLookup("helpers",e,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(o)}},setupParams:function(t,e,n){var o={},i=[],r=[],s=[],a=!n,l=void 0;a&&(n=[]),o.name=this.quotedString(t),o.hash=this.popStack(),this.trackIds&&(o.hashIds=this.popStack()),this.stringParams&&(o.hashTypes=this.popStack(),o.hashContexts=this.popStack());var c=this.popStack(),u=this.popStack();(u||c)&&(o.fn=u||"container.noop",o.inverse=c||"container.noop");for(// The parameters go on to the stack in order (making sure that they are evaluated in order)
// so we need to pop them off the stack in reverse order
var h=e;h--;)l=this.popStack(),n[h]=l,this.trackIds&&(s[h]=this.popStack()),this.stringParams&&(r[h]=this.popStack(),i[h]=this.popStack());return a&&(o.args=this.source.generateArray(n)),this.trackIds&&(o.ids=this.source.generateArray(s)),this.stringParams&&(o.types=this.source.generateArray(r),o.contexts=this.source.generateArray(i)),this.options.data&&(o.data="data"),this.useBlockParams&&(o.blockParams="blockParams"),o},setupHelperArgs:function(t,e,n,o){var i=this.setupParams(t,e,n);return(i.loc=JSON.stringify(this.source.currentLocation),i=this.objectLiteral(i),o)?(this.useRegister("options"),n.push("options"),["options=",i]):n?(n.push(i),""):i}},function(){for(var t="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=eG.RESERVED_WORDS={},n=0,o=t.length;n<o;n++)e[t[n]]=!0}(),/**
 * @deprecated May be removed in the next major version
 */eG.isValidJavaScriptVariableName=function(t){return!eG.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)},ej.default=eG;var eK=ti(ej=ej.default),eZ=ti(ef),eJ=ti(ee),eQ=er.default.create;function e2(){var t=eQ();return t.compile=function(e,n){return function(t,e,n){if(void 0===e&&(e={}),null==t||"string"!=typeof t&&"Program"!==t.type)throw new eR.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);"data"in(e=b({},e))||(e.data=!0),e.compat&&(e.useDepths=!0);var o=void 0;function i(){var o=n.parse(t,e),i=new n.Compiler().compile(o,e),r=new n.JavaScriptCompiler().compile(i,e,void 0,!0);return n.template(r)}// Template is only compiled on first use and cached after that point.
function r(t,e){return o||(o=i()),o.call(this,t,e)}return r._setup=function(t){return o||(o=i()),o._setup(t)},r._child=function(t,e,n,r){return o||(o=i()),o._child(t,e,n,r)},r}(e,n,t)},t.precompile=function(e,n){return function(t,e,n){if(null==t||"string"!=typeof t&&"Program"!==t.type)throw new eR.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);"data"in(e=e||{})||(e.data=!0),e.compat&&(e.useDepths=!0);var o=n.parse(t,e),i=new n.Compiler().compile(o,e);return new n.JavaScriptCompiler().compile(i,e)}(e,n,t)},t.AST=el.default,t.Compiler=eB,t.JavaScriptCompiler=eK.default,t.Parser=X,t.parse=eM,t.parseWithoutProcessing=eA,t}var e1=e2();e1.create=e2,eJ.default(e1),e1.Visitor=eZ.default,e1.default=e1,to.default=e1,to=to.default;let e0=/*@__PURE__*/e(to).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,o,i){var r,s=null!=e?e:t.nullContext||{},a=t.hooks.helperMissing,l="function",c=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<li class="gallery__item"> <a class="gallery__link" href="'+c(typeof(r=null!=(r=u(n,"original")||(null!=e?u(e,"original"):e))?r:a)===l?r.call(s,{name:"original",hash:{},data:i,loc:{start:{line:1,column:58},end:{line:1,column:70}}}):r)+'"> <img class="gallery__image" src="'+c(typeof(r=null!=(r=u(n,"preview")||(null!=e?u(e,"preview"):e))?r:a)===l?r.call(s,{name:"preview",hash:{},data:i,loc:{start:{line:1,column:106},end:{line:1,column:117}}}):r)+'" alt="'+c(typeof(r=null!=(r=u(n,"description")||(null!=e?u(e,"description"):e))?r:a)===l?r.call(s,{name:"description",hash:{},data:i,loc:{start:{line:1,column:124},end:{line:1,column:139}}}):r)+'" title="'+c(typeof(r=null!=(r=u(n,"description")||(null!=e?u(e,"description"):e))?r:a)===l?r.call(s,{name:"description",hash:{},data:i,loc:{start:{line:1,column:148},end:{line:1,column:163}}}):r)+'" loading="lazy" /></a></li>'},useData:!0});var e3={};function e4(t){return(e4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e8(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=e5(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw r}}}}function e5(t,e){if(t){if("string"==typeof t)return e7(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e7(t,e)}}function e7(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function e6(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e9(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e3,"__esModule",{value:!0}),e3.default=void 0;var nt=/*#__PURE__*/function(){var t,e;function n(t,e){var o=this;if(!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),e9(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5,download:!1}),e9(this,"transitionPrefix",void 0),e9(this,"isPassiveEventsSupported",void 0),e9(this,"transitionCapable",!1),e9(this,"isTouchDevice","ontouchstart"in window),e9(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),e9(this,"initialLocationHash",void 0),e9(this,"pushStateSupport","pushState"in history),e9(this,"isOpen",!1),e9(this,"isAnimating",!1),e9(this,"isClosing",!1),e9(this,"isFadeIn",!1),e9(this,"urlChangedOnce",!1),e9(this,"hashReseted",!1),e9(this,"historyHasChanges",!1),e9(this,"historyUpdateTimeout",null),e9(this,"currentImage",void 0),e9(this,"eventNamespace","simplelightbox"),e9(this,"domNodes",{}),e9(this,"loadedImages",[]),e9(this,"initialImageIndex",0),e9(this,"currentImageIndex",0),e9(this,"initialSelector",null),e9(this,"globalScrollbarWidth",0),e9(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,e),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),"string"==typeof t?(this.initialSelector=t,this.elements=Array.from(document.querySelectorAll(t))):this.elements=void 0!==t.length&&t.length>0?Array.from(t):[t],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=!1!==this.transitionPrefix,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var i=[];this.elements=Array.from(this.elements).filter(function(t){var e=t.getAttribute(o.options.sourceAttr);return -1===i.indexOf(e)&&(i.push(e),!0)})}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,function(t){if(o.isValidLink(t.currentTarget)){if(t.preventDefault(),o.isAnimating)return!1;o.initialImageIndex=o.elements.indexOf(t.currentTarget),o.openImage(t.currentTarget)}}),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],function(t){o.isOpen&&t.target===t.currentTarget&&o.close()}),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,function(t){t.target.parentElement.classList.contains("sl-image")&&t.preventDefault()}),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle(function(t){// keyboard control only if lightbox is open
if(o.controlCoordinates.swipeDiff=0,o.isAnimating&&"Escape"===t.key){o.currentImage.setAttribute("src",""),o.isAnimating=!1,o.close();return}o.isOpen&&(t.preventDefault(),"Escape"===t.key&&o.close(),!o.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(t.key)>-1&&o.loadImage("ArrowRight"===t.key?1:-1))},this.options.throttleInterval)),this.addEvents()}return t=[{key:"checkPassiveEventsSupport",value:function(){// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
// Test via a getter in the options object to see if the passive property is accessed
var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(t){}return t}},{key:"getCaptionElement",value:function(t){// look at sibling selector
if(this.options.captionSelector.startsWith("+")){var e=this.options.captionSelector.replace(/^\+/,"").trimStart(),n=t.nextElementSibling;return!!n.matches(e)&&n}if(!this.options.captionSelector.startsWith(">"))return t.querySelector(this.options.captionSelector);var o=this.options.captionSelector.replace(/^>/,"").trimStart();return t.querySelector(o)}},{key:"generateQuerySelector",value:function(t){var e=t.tagName,n=t.id,o=t.className,i=t.parentNode;if("HTML"===e)return"HTML";var r=e;if(r+=""!==n?"#".concat(n):"",o)for(var s=o.trim().split(/\s/),a=0;a<s.length;a++)r+=".".concat(s[a]);for(var l=1,c=t;c.previousElementSibling;c=c.previousElementSibling)l+=1;return r+=":nth-child(".concat(l,")"),"".concat(this.generateQuerySelector(i)," > ").concat(r)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.download=document.createElement("div"),this.domNodes.download.classList.add("sl-download"),this.domNodes.downloadLink=document.createElement("a"),this.domNodes.downloadLink.setAttribute("download",""),this.domNodes.downloadLink.textContent=this.options.download,this.domNodes.download.appendChild(this.domNodes.downloadLink),this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var t,e=this.options.captionClass.split(/[\s,]+/);(t=this.domNodes.caption.classList).add.apply(t,function(t){if(Array.isArray(t))return e7(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||e5(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(t,e){var n;return function(){n||(t.apply(this,arguments),n=!0,setTimeout(function(){return n=!1},e))}}},{key:"isValidLink",value:function(t){return!this.options.fileExt||t.getAttribute(this.options.sourceAttr)&&RegExp("("+this.options.fileExt+")($|\\?.*$)","i").test(t.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var t=(document.body||document.documentElement).style;return"transition"in t?"":"WebkitTransition"in t?"-webkit-":"MozTransition"in t?"-moz-":"OTransition"in t&&"-o"}},{key:"getScrollbarWidth",value:function(){var t=0,e=document.createElement("div");return e.classList.add("sl-scrollbar-measure"),document.body.appendChild(e),t=e.offsetWidth-e.clientWidth,document.body.removeChild(e),t}},{key:"toggleScrollbar",value:function(t){var e=0,n=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if("hide"===t){var o=window.innerWidth;if(!o){var i=document.documentElement.getBoundingClientRect();o=i.right-Math.abs(i.left)}if(document.body.clientWidth<o||this.isAppleDevice){var r=parseInt(window.getComputedStyle(document.body).paddingRight||0,10);e=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=r,(e>0||0==e&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=r+e+"px",n.forEach(function(t){var n=t.style.paddingRight,o=window.getComputedStyle(t)["padding-right"];t.dataset.originalPaddingRight=n,t.style.paddingRight="".concat(parseFloat(o)+e,"px")}))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight+"px",n.forEach(function(t){var e=t.dataset.originalPaddingRight;void 0!==e&&(t.style.paddingRight=e)});return e}},{key:"close",value:function(){var t=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var e=this.relatedElements[this.currentImageIndex];// reset touchcontrol coordinates
for(var n in e.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,function(){t.options.disableScroll&&t.toggleScrollbar("show"),t.options.htmlClass&&""!==t.options.htmlClass&&document.querySelector("html").classList.remove(t.options.htmlClass),document.body.removeChild(t.domNodes.wrapper),t.options.overlay&&document.body.removeChild(t.domNodes.overlay),t.domNodes.additionalHtml=null,t.domNodes.download=null,e.dispatchEvent(new Event("closed.simplelightbox")),t.isClosing=!1}),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1,this.controlCoordinates)this.controlCoordinates[n]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var t=this,e=this.currentImageIndex,n=this.relatedElements.length,o=new Image,i=new Image;o.addEventListener("load",function(n){var o=n.target.getAttribute("src");-1===t.loadedImages.indexOf(o)&&t.loadedImages.push(o),t.relatedElements[e].dispatchEvent(new Event("nextImageLoaded."+t.eventNamespace))}),o.setAttribute("src",this.relatedElements[e+1<0?n-1:e+1>=n-1?0:e+1].getAttribute(this.options.sourceAttr)),i.addEventListener("load",function(n){var o=n.target.getAttribute("src");-1===t.loadedImages.indexOf(o)&&t.loadedImages.push(o),t.relatedElements[e].dispatchEvent(new Event("prevImageLoaded."+t.eventNamespace))}),i.setAttribute("src",this.relatedElements[e-1<0?n-1:e-1>=n-1?0:e-1].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(t){var e=this,n=t;this.options.rtl&&(t=-t),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1===t?"next":"prev")+"."+this.eventNamespace));var o=this.currentImageIndex+t;if(this.isAnimating||(o<0||o>=this.relatedElements.length)&&!1===this.options.loop)return!1;this.currentImageIndex=o<0?this.relatedElements.length-1:o>this.relatedElements.length-1?0:o,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*n-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,function(){e.isAnimating=!0,e.isClosing?e.isAnimating=!1:setTimeout(function(){var t=e.relatedElements[e.currentImageIndex];e.currentImage&&(e.currentImage.setAttribute("src",t.getAttribute(e.options.sourceAttr)),-1===e.loadedImages.indexOf(t.getAttribute(e.options.sourceAttr))&&e.show(e.domNodes.spinner),e.domNodes.image.contains(e.domNodes.caption)&&e.domNodes.image.removeChild(e.domNodes.caption),e.adjustImage(n),e.options.preloading&&e.preload())},100)})}},{key:"adjustImage",value:function(t){var e=this;if(!this.currentImage)return!1;var n=new Image,o=window.innerWidth*this.options.widthRatio,i=window.innerHeight*this.options.heightRatio;n.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),n.addEventListener("error",function(n){e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("error."+e.eventNamespace)),e.isAnimating=!1,e.isOpen=!0,e.domNodes.spinner.style.display="none";var o=1===t||-1===t;if(e.initialImageIndex===e.currentImageIndex&&o)return e.close();e.options.alertError&&alert(e.options.alertErrorMessage),e.loadImage(o?t:1)}),n.addEventListener("load",function(n){void 0!==t&&(e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("changed."+e.eventNamespace)),e.relatedElements[e.currentImageIndex].dispatchEvent(new Event((1===t?"nextDone":"prevDone")+"."+e.eventNamespace))),e.options.history&&e.updateURL(),-1===e.loadedImages.indexOf(e.currentImage.getAttribute("src"))&&e.loadedImages.push(e.currentImage.getAttribute("src"));var r,s,a=n.target.width,l=n.target.height;if(e.options.scaleImageToRatio||a>o||l>i){var c=a/l>o/i?a/o:l/i;a/=c,l/=c}e.domNodes.image.style.top=(window.innerHeight-l)/2+"px",e.domNodes.image.style.left=(window.innerWidth-a-e.globalScrollbarWidth)/2+"px",e.domNodes.image.style.width=a+"px",e.domNodes.image.style.height=l+"px",e.domNodes.spinner.style.display="none",e.options.focus&&e.forceFocus(),e.fadeIn(e.currentImage,e.options.fadeSpeed,function(){e.options.focus&&e.domNodes.wrapper.focus()}),e.isOpen=!0,"string"==typeof e.options.captionSelector?r="self"===e.options.captionSelector?e.relatedElements[e.currentImageIndex]:e.getCaptionElement(e.relatedElements[e.currentImageIndex]):"function"==typeof e.options.captionSelector&&(r=e.options.captionSelector(e.relatedElements[e.currentImageIndex])),e.options.captions&&r&&(s="data"===e.options.captionType?r.dataset[e.options.captionsData]:"text"===e.options.captionType?r.innerHTML:r.getAttribute(e.options.captionsData)),e.options.loop?1===e.relatedElements.length?e.hide(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):e.show(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(0===e.currentImageIndex&&e.hide(e.domNodes.navigation.querySelector(".sl-prev")),e.currentImageIndex>=e.relatedElements.length-1&&e.hide(e.domNodes.navigation.querySelector(".sl-next")),e.currentImageIndex>0&&e.show(e.domNodes.navigation.querySelector(".sl-prev")),e.currentImageIndex<e.relatedElements.length-1&&e.show(e.domNodes.navigation.querySelector(".sl-next"))),1===t||-1===t?(e.options.animationSlide&&(e.slide(0,100*t+"px"),setTimeout(function(){e.slide(e.options.animationSpeed/1e3,"0px")},50)),e.fadeIn(e.domNodes.image,e.options.fadeSpeed,function(){e.isAnimating=!1,e.setCaption(s,a)})):(e.isAnimating=!1,e.setCaption(s,a)),e.options.additionalHtml&&!e.domNodes.additionalHtml&&(e.domNodes.additionalHtml=document.createElement("div"),e.domNodes.additionalHtml.classList.add("sl-additional-html"),e.domNodes.additionalHtml.innerHTML=e.options.additionalHtml,e.domNodes.image.appendChild(e.domNodes.additionalHtml)),e.options.download&&e.domNodes.downloadLink.setAttribute("href",e.currentImage.getAttribute("src"))})}},{key:"zoomPanElement",value:function(t,e,n){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+t+","+e+") scale("+n+")"}},{key:"minMax",value:function(t,e,n){return t<e?e:t>n?n:t}},{key:"setZoomData",value:function(t,e,n){this.currentImage.dataset.scale=t,this.currentImage.dataset.translateX=e,this.currentImage.dataset.translateY=n}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var t=this;if(// resize/responsive
this.addEventListener(window,"resize."+this.eventNamespace,function(e){t.isOpen&&t.adjustImage()}),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout(function(){t.addEventListener(window,"hashchange."+t.eventNamespace,function(e){t.isOpen&&t.hashchangeHandler()})},40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,function(e){if(!e.currentTarget.tagName.match(/button/i))return!0;e.preventDefault(),t.controlCoordinates.swipeDiff=0,t.loadImage(e.currentTarget.classList.contains("sl-next")?1:-1)}),this.options.scrollZoom){var e=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],function(n){if(t.controlCoordinates.mousedown||t.isAnimating||t.isClosing||!t.isOpen)return!0;0==t.controlCoordinates.containerHeight&&(t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY));// event.preventDefault();
var o=n.delta||n.wheelDelta;void 0===o&&(o=n.detail),o=Math.max(-1,Math.min(1,o)),// apply zoom
e+=o*t.options.scrollZoomFactor*e,e=Math.max(1,Math.min(t.options.maxZoom,e)),t.controlCoordinates.targetScale=e;var i=document.documentElement.scrollTop||document.body.scrollTop;t.controlCoordinates.pinchOffsetX=n.pageX,t.controlCoordinates.pinchOffsetY=n.pageY-i||0,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.scaleDifference=t.controlCoordinates.targetScale-t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.initialOffsetX-(t.controlCoordinates.pinchOffsetX-t.controlCoordinates.containerOffsetX-t.controlCoordinates.containerWidth/2-t.controlCoordinates.initialOffsetX)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.initialOffsetY-(t.controlCoordinates.pinchOffsetY-t.controlCoordinates.containerOffsetY-t.controlCoordinates.containerHeight/2-t.controlCoordinates.initialOffsetY)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale),t.controlCoordinates.targetScale>1?(t.controlCoordinates.zoomed=!0,(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed)):(1===t.controlCoordinates.initialScale&&(t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=null,t.controlCoordinates.capture=!1),t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance,t.controlCoordinates.initialScale=t.controlCoordinates.targetScale,t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.setZoomData(t.controlCoordinates.targetScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale)})}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],function(e){if("A"===e.target.tagName&&"touchstart"===e.type)return!0;if("mousedown"===e.type)e.preventDefault(),t.controlCoordinates.initialPointerOffsetX=e.clientX,t.controlCoordinates.initialPointerOffsetY=e.clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY),t.controlCoordinates.capture=!0;else{if(t.controlCoordinates.touchCount=e.touches.length,t.controlCoordinates.initialPointerOffsetX=e.touches[0].clientX,t.controlCoordinates.initialPointerOffsetY=e.touches[0].clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,1===t.controlCoordinates.touchCount)/* Single touch */{if(t.controlCoordinates.doubleTapped)return t.currentImage.classList.add("sl-transition"),t.controlCoordinates.zoomed?(t.controlCoordinates.initialScale=1,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),t.controlCoordinates.zoomed=!1):(t.controlCoordinates.initialScale=t.options.doubleTapZoom,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed),t.controlCoordinates.zoomed=!0),setTimeout(function(){t.currentImage&&t.currentImage.classList.remove("sl-transition")},200),!1;t.controlCoordinates.doubleTapped=!0,setTimeout(function(){t.controlCoordinates.doubleTapped=!1},300),t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY)}else 2===t.controlCoordinates.touchCount&&(t.controlCoordinates.initialPointerOffsetX2=e.touches[1].clientX,t.controlCoordinates.initialPointerOffsetY2=e.touches[1].clientY,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY),t.controlCoordinates.pinchOffsetX=(t.controlCoordinates.initialPointerOffsetX+t.controlCoordinates.initialPointerOffsetX2)/2,t.controlCoordinates.pinchOffsetY=(t.controlCoordinates.initialPointerOffsetY+t.controlCoordinates.initialPointerOffsetY2)/2,t.controlCoordinates.initialPinchDistance=Math.sqrt((t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialPointerOffsetX2)*(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialPointerOffsetX2)+(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialPointerOffsetY2)*(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialPointerOffsetY2)));t.controlCoordinates.capture=!0}return!!t.controlCoordinates.mousedown||(t.transitionCapable&&(t.controlCoordinates.imageLeft=parseInt(t.domNodes.image.style.left,10)),t.controlCoordinates.mousedown=!0,t.controlCoordinates.swipeDiff=0,t.controlCoordinates.swipeYDiff=0,t.controlCoordinates.swipeStart=e.pageX||e.touches[0].pageX,t.controlCoordinates.swipeYStart=e.pageY||e.touches[0].pageY,!1)}),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],function(e){if(!t.controlCoordinates.mousedown)return!0;if("touchmove"===e.type){if(!1===t.controlCoordinates.capture)return!1;t.controlCoordinates.pointerOffsetX=e.touches[0].clientX,t.controlCoordinates.pointerOffsetY=e.touches[0].clientY,t.controlCoordinates.touchCount=e.touches.length,t.controlCoordinates.touchmoveCount++,t.controlCoordinates.touchCount>1?(t.controlCoordinates.pointerOffsetX2=e.touches[1].clientX,t.controlCoordinates.pointerOffsetY2=e.touches[1].clientY,t.controlCoordinates.targetPinchDistance=Math.sqrt((t.controlCoordinates.pointerOffsetX-t.controlCoordinates.pointerOffsetX2)*(t.controlCoordinates.pointerOffsetX-t.controlCoordinates.pointerOffsetX2)+(t.controlCoordinates.pointerOffsetY-t.controlCoordinates.pointerOffsetY2)*(t.controlCoordinates.pointerOffsetY-t.controlCoordinates.pointerOffsetY2)),null===t.controlCoordinates.initialPinchDistance&&(t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance),Math.abs(t.controlCoordinates.initialPinchDistance-t.controlCoordinates.targetPinchDistance)>=1&&(/* Initialize helpers */t.controlCoordinates.targetScale=t.minMax(t.controlCoordinates.targetPinchDistance/t.controlCoordinates.initialPinchDistance*t.controlCoordinates.initialScale,1,t.options.maxZoom),t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.scaleDifference=t.controlCoordinates.targetScale-t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.initialOffsetX-(t.controlCoordinates.pinchOffsetX-t.controlCoordinates.containerOffsetX-t.controlCoordinates.containerWidth/2-t.controlCoordinates.initialOffsetX)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.initialOffsetY-(t.controlCoordinates.pinchOffsetY-t.controlCoordinates.containerOffsetY-t.controlCoordinates.containerHeight/2-t.controlCoordinates.initialOffsetY)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale),t.controlCoordinates.targetScale>1&&(t.controlCoordinates.zoomed=!0,(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance,t.controlCoordinates.initialScale=t.controlCoordinates.targetScale,t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY)):(t.controlCoordinates.targetScale=t.controlCoordinates.initialScale,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.pointerOffsetX-(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialOffsetX),-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.pointerOffsetY-(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialOffsetY),-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),Math.abs(t.controlCoordinates.targetOffsetX)===Math.abs(t.controlCoordinates.limitOffsetX)&&(t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialPointerOffsetX=t.controlCoordinates.pointerOffsetX),Math.abs(t.controlCoordinates.targetOffsetY)===Math.abs(t.controlCoordinates.limitOffsetY)&&(t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.controlCoordinates.initialPointerOffsetY=t.controlCoordinates.pointerOffsetY),t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale))}/* Mouse Move implementation */if("mousemove"===e.type&&t.controlCoordinates.mousedown){if("touchmove"==e.type)return!0;if(e.preventDefault(),!1===t.controlCoordinates.capture)return!1;t.controlCoordinates.pointerOffsetX=e.clientX,t.controlCoordinates.pointerOffsetY=e.clientY,t.controlCoordinates.targetScale=t.controlCoordinates.initialScale,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.pointerOffsetX-(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialOffsetX),-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.pointerOffsetY-(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialOffsetY),-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),Math.abs(t.controlCoordinates.targetOffsetX)===Math.abs(t.controlCoordinates.limitOffsetX)&&(t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialPointerOffsetX=t.controlCoordinates.pointerOffsetX),Math.abs(t.controlCoordinates.targetOffsetY)===Math.abs(t.controlCoordinates.limitOffsetY)&&(t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.controlCoordinates.initialPointerOffsetY=t.controlCoordinates.pointerOffsetY),t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale)}!t.controlCoordinates.zoomed&&(t.controlCoordinates.swipeEnd=e.pageX||e.touches[0].pageX,t.controlCoordinates.swipeYEnd=e.pageY||e.touches[0].pageY,t.controlCoordinates.swipeDiff=t.controlCoordinates.swipeStart-t.controlCoordinates.swipeEnd,t.controlCoordinates.swipeYDiff=t.controlCoordinates.swipeYStart-t.controlCoordinates.swipeYEnd,t.options.animationSlide&&t.slide(0,-t.controlCoordinates.swipeDiff+"px"))}),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],function(e){if(t.isTouchDevice&&"touchend"===e.type&&(t.controlCoordinates.touchCount=e.touches.length,0===t.controlCoordinates.touchCount?(t.currentImage&&t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),1===t.controlCoordinates.initialScale&&(t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=null,t.controlCoordinates.capture=!1):1===t.controlCoordinates.touchCount?(t.controlCoordinates.initialPointerOffsetX=e.touches[0].clientX,t.controlCoordinates.initialPointerOffsetY=e.touches[0].clientY):t.controlCoordinates.touchCount>1&&(t.controlCoordinates.initialPinchDistance=null)),t.controlCoordinates.mousedown){t.controlCoordinates.mousedown=!1;var n=!0;!t.options.loop&&(0===t.currentImageIndex&&t.controlCoordinates.swipeDiff<0&&(n=!1),t.currentImageIndex>=t.relatedElements.length-1&&t.controlCoordinates.swipeDiff>0&&(n=!1)),Math.abs(t.controlCoordinates.swipeDiff)>t.options.swipeTolerance&&n?t.loadImage(t.controlCoordinates.swipeDiff>0?1:-1):t.options.animationSlide&&t.slide(t.options.animationSpeed/1e3,"0px"),t.options.swipeClose&&Math.abs(t.controlCoordinates.swipeYDiff)>50&&Math.abs(t.controlCoordinates.swipeDiff)<t.options.swipeTolerance&&t.close()}}),this.addEventListener(this.domNodes.image,["dblclick"],function(e){if(!t.isTouchDevice)return t.controlCoordinates.initialPointerOffsetX=e.clientX,t.controlCoordinates.initialPointerOffsetY=e.clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.currentImage.classList.add("sl-transition"),t.controlCoordinates.zoomed?(t.controlCoordinates.initialScale=1,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)):(t.controlCoordinates.initialScale=t.options.doubleTapZoom,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed),t.controlCoordinates.zoomed=!0),setTimeout(function(){t.currentImage&&(t.currentImage.classList.remove("sl-transition"),t.currentImage.style[t.transitionPrefix+"transform-origin"]=null)},200),t.controlCoordinates.capture=!0,!1})}},{key:"getDimensions",value:function(t){var e=window.getComputedStyle(t),n=t.offsetHeight,o=t.offsetWidth,i=parseFloat(e.borderTopWidth);return{height:n-parseFloat(e.borderBottomWidth)-i-parseFloat(e.paddingTop)-parseFloat(e.paddingBottom),width:o-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)}}},{key:"updateHash",value:function(){var t="pid="+(this.currentImageIndex+1),e=window.location.href.split("#")[0]+"#"+t;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,e):this.historyHasChanges?window.location.replace(e):window.location.hash=t,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",//
//in case an history operation is still pending
clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(t,e){var n=this;this.options.captions&&t&&""!==t&&void 0!==t&&(this.hide(this.domNodes.caption),this.domNodes.caption.style.width=e+"px",this.domNodes.caption.innerHTML=t,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout(function(){n.fadeIn(n.domNodes.caption,n.options.fadeSpeed)},this.options.captionDelay))}},{key:"slide",value:function(t,e){if(!this.transitionCapable)return this.domNodes.image.style.left=e;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+e+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+t+"s linear"}},{key:"getRelated",value:function(t){return t&&!1!==t&&"nofollow"!==t?Array.from(this.elements).filter(function(e){return e.getAttribute("rel")===t}):this.elements}},{key:"openImage",value:function(t){var e=this;t.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&""!==this.options.htmlClass&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(t.rel),this.options.showCounter&&(1==this.relatedElements.length&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.options.download&&this.domNodes.download&&this.domNodes.wrapper.appendChild(this.domNodes.download),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(t);var n=t.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",n),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,-1===this.loadedImages.indexOf(n)&&this.loadedImages.push(n),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton,this.domNodes.download],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout(function(){t.dispatchEvent(new Event("shown."+e.eventNamespace))},this.options.animationSpeed)}},{key:"forceFocus",value:function(){var t=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,function(e){document===e.target||t.domNodes.wrapper===e.target||t.domNodes.wrapper.contains(e.target)||t.domNodes.wrapper.focus()})}},{key:"addEventListener",value:function(t,e,n,o){t=this.wrap(t),e=this.wrap(e);var i,r=e8(t);try{for(r.s();!(i=r.n()).done;){var s=i.value;s.namespaces||(s.namespaces={});// save the namespaces addEventListener the DOM element itself
var a,l=e8(e);try{for(l.s();!(a=l.n()).done;){var c=a.value,u=o||!1;["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(c.split(".")[0])>=0&&this.isPassiveEventsSupported&&("object"===e4(u)?u.passive=!0:u={passive:!0}),s.namespaces[c]=n,s.addEventListener(c.split(".")[0],n,u)}}catch(t){l.e(t)}finally{l.f()}}}catch(t){r.e(t)}finally{r.f()}}},{key:"removeEventListener",value:function(t,e){t=this.wrap(t),e=this.wrap(e);var n,o=e8(t);try{for(o.s();!(n=o.n()).done;){var i,r=n.value,s=e8(e);try{for(s.s();!(i=s.n()).done;){var a=i.value;r.namespaces&&r.namespaces[a]&&(r.removeEventListener(a.split(".")[0],r.namespaces[a]),delete r.namespaces[a])}}catch(t){s.e(t)}finally{s.f()}}}catch(t){o.e(t)}finally{o.f()}}},{key:"fadeOut",value:function(t,e,n){var o,i=this,r=e8(t=this.wrap(t));try{for(r.s();!(o=r.n()).done;){var s=o.value;s.style.opacity=parseFloat(s)||window.getComputedStyle(s).getPropertyValue("opacity")}}catch(t){r.e(t)}finally{r.f()}this.isFadeIn=!1;var a=16.66666/(e||this.options.fadeSpeed);!function e(){var o=parseFloat(t[0].style.opacity);if((o-=a)<0){var r,s=e8(t);try{for(s.s();!(r=s.n()).done;){var l=r.value;l.style.display="none",// element.style.opacity = '';
l.style.opacity=1}}catch(t){s.e(t)}finally{s.f()}n&&n.call(i,t)}else{var c,u=e8(t);try{for(u.s();!(c=u.n()).done;)c.value.style.opacity=o}catch(t){u.e(t)}finally{u.f()}requestAnimationFrame(e)}}()}},{key:"fadeIn",value:function(t,e,n,o){var i,r=this,s=e8(t=this.wrap(t));try{for(s.s();!(i=s.n()).done;){var a=i.value;a&&(a.style.opacity=0,a.style.display=o||"block")}}catch(t){s.e(t)}finally{s.f()}this.isFadeIn=!0;var l=parseFloat(t[0].dataset.opacityTarget||1),c=16.66666*l/(e||this.options.fadeSpeed);!function e(){var o=parseFloat(t[0].style.opacity);if((o+=c)>l){var i,s=e8(t);try{for(s.s();!(i=s.n()).done;){var a=i.value;a&&(a.style.opacity=l)}}catch(t){s.e(t)}finally{s.f()}n&&n.call(r,t)}else{var u,h=e8(t);try{for(h.s();!(u=h.n()).done;){var p=u.value;p&&(p.style.opacity=o)}}catch(t){h.e(t)}finally{h.f()}if(!r.isFadeIn)return;requestAnimationFrame(e)}}()}},{key:"hide",value:function(t){var e,n=e8(t=this.wrap(t));try{for(n.s();!(e=n.n()).done;){var o=e.value;"none"!=o.style.display&&(o.dataset.initialDisplay=o.style.display),o.style.display="none"}}catch(t){n.e(t)}finally{n.f()}}},{key:"show",value:function(t,e){var n,o=e8(t=this.wrap(t));try{for(o.s();!(n=o.n()).done;){var i=n.value;i.style.display=i.dataset.initialDisplay||e||"block"}}catch(t){o.e(t)}finally{o.f()}}},{key:"wrap",value:function(t){return"function"==typeof t[Symbol.iterator]&&"string"!=typeof t?t:[t]}},{key:"on",value:function(t,e){t=this.wrap(t);var n,o=e8(this.elements);try{for(o.s();!(n=o.n()).done;){var i=n.value;i.fullyNamespacedEvents||(i.fullyNamespacedEvents={});var r,s=e8(t);try{for(s.s();!(r=s.n()).done;){var a=r.value;i.fullyNamespacedEvents[a]=e,i.addEventListener(a,e)}}catch(t){s.e(t)}finally{s.f()}}}catch(t){o.e(t)}finally{o.f()}return this}},{key:"off",value:function(t){t=this.wrap(t);var e,n=e8(this.elements);try{for(n.s();!(e=n.n()).done;){var o,i=e.value,r=e8(t);try{for(r.s();!(o=r.n()).done;){var s=o.value;void 0!==i.fullyNamespacedEvents&&s in i.fullyNamespacedEvents&&i.removeEventListener(s,i.fullyNamespacedEvents[s])}}catch(t){r.e(t)}finally{r.f()}}}catch(t){n.e(t)}finally{n.f()}return this}},{key:"open",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t=t||this.elements[0],"undefined"!=typeof jQuery&&t instanceof jQuery&&(t=t.get(0)),e>0&&(t=this.elements[e]),this.initialImageIndex=this.elements.indexOf(t),this.initialImageIndex>-1&&this.openImage(t)}},{key:"openPosition",value:function(t){var e=this.elements[t];this.open(e,t)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){//remove all custom event listeners from elements
this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var t=this.options,e=this.initialSelector;return this.destroy(),this.constructor(e,t),this}}],e6(n.prototype,t),e&&e6(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}();e3.default=nt,Q.SimpleLightbox=nt;let ne=document.querySelector(".gallery"),nn=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}].map(e0).join("");// Вставка разметки в контейнер галереи: С помощью galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup); вы вставляете сгенерированную разметку внутрь контейнера галереи.
ne.insertAdjacentHTML("beforeend",nn),// Этот код добавляет обработчик события клика на контейнере галереи.
ne.addEventListener("click",open),new/*@__PURE__*/(e(e3))(".gallery a",{captionsData:"alt",captionsDelay:250})}();//# sourceMappingURL=01-gallery.ca0f88d5.js.map

//# sourceMappingURL=01-gallery.ca0f88d5.js.map
