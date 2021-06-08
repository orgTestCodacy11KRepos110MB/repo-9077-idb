(self.webpackChunk=self.webpackChunk||[]).push([[86],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7753:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,metadata:()=>u,toc:()=>s,default:()=>p});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],l={id:"guided-tour",title:"Guided Tour"},u={unversionedId:"guided-tour",id:"guided-tour",isDocsHomePage:!1,title:"Guided Tour",description:"This is a quick start guide to show you a glimpse of what idb can do. If you haven't installed idb already please refer to installation.",source:"@site/docs/guided-tour.mdx",sourceDirName:".",slug:"/guided-tour",permalink:"/docs/guided-tour",version:"current",frontMatter:{id:"guided-tour",title:"Guided Tour"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Architecture",permalink:"/docs/architecture"}},s=[],c={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a quick start guide to show you a glimpse of what idb can do. If you haven't installed idb already please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/installation"},"installation"),"."),(0,i.kt)("p",null,"Let's start with finding out what simulators/devices are available on your Mac. This will print out all the simulators on your Mac and all of the devices attached."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idb list-targets\n")),(0,i.kt)("p",null,"Boot any one of them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idb boot UDID\n")),(0,i.kt)("p",null,"Try any of the commands below and make sure you pass ",(0,i.kt)("inlineCode",{parentName:"p"},"--udid")," to run them with the correct simulator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idb launch com.apple.Maps\nidb record\nidb log\n")),(0,i.kt)("p",null,"Now let's try to run tests. This will install the test bundle provided on the simulator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idb xctest install Fixtures/Binaries/iOSUnitTestFixture.xctest\n")),(0,i.kt)("p",null,"To verify that it's been installed correctly just run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idb xctest list\n")),(0,i.kt)("p",null,"Run the tests by issuing these commands."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run logic")," would just run the logic tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run app")," will run the app tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run ui")," will run the ui tests")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idb xctest run logic com.facebook.iOSUnitTestFixture\nidb xctest run app com.facebook.iOSUnitTestFixture com.apple.Maps\n")))}p.isMDXComponent=!0}}]);