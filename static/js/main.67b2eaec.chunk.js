(this["webpackJsonponline-sorter"]=this["webpackJsonponline-sorter"]||[]).push([[0],{19:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(7),a=n(8),s=function(){function e(t,n,a,s){Object(r.a)(this,e),this.items=t,this.triggerPrompt=n,this.progress=a,this.updateProgress=s}return Object(a.a)(e,[{key:"swap",value:function(e,t){var n=[this.items[t],this.items[e]];this.items[e]=n[0],this.items[t]=n[1]}}],[{key:"createPrompt",value:function(e,t,n){var r={item1:e,item2:t,item3:n};return[new Promise((function(e){return r.resolve=e})),r]}}]),e}()},25:function(e,t,n){"use strict";function r(e,t){return null===e||null===t||void 0===e||void 0===t?e===t:e.text===t.text&&e.required===t.required&&e.weight===t.weight}n.d(t,"a",(function(){return r}))},29:function(e,t,n){"use strict";var r=n(35),a=n(0),s=n.n(a),i=n(17),o=n(23),c=n(24),l=n(3),u=n.n(l);t.a=function(e){var t=e.className,n=Object(r.a)(e,["className"]);return s.a.createElement(i.b,Object.assign({to:"/data-entry",className:u()("btn btn-secondary",t)},n),s.a.createElement(o.a,{icon:c.a})," Back to Item Entry")}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(7),a=n(8),s=n(10),i=n(9),o=n(11),c=n(0),l=n.n(c),u=n(15),m=n(6),h=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).context=void 0,n}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return this.context.items.length<3?l.a.createElement(u.a,{to:"/data-entry"}):l.a.createElement(l.a.Fragment,null,this.props.children)}}]),t}(c.PureComponent);h.contextType=m.c},41:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(80);t.a=function(e){var t,n;return!function(e){return"number"===typeof e.progress}(e)?(t=e.progress.filter((function(e){return!1!==e})).length,n=e.progress.length):(t=e.progress,n=e.max),a.a.createElement(s.a,{value:t,striped:!0,max:n})}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(54),a=n(22),s=n(13),i=n.n(s),o=n(18),c=n(7),l=n(8),u=n(10),m=n(9),h=n(11),p=n(25),f=n(19),d=function(e){function t(e,n,r){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e,n,new Array(e.length).fill(!1),r))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"run",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.updateProgress&&this.updateProgress(this.progress),e.abrupt("return",this.qs(0,this.items.length-1));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){}},{key:"qs",value:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t<n)){e.next=10;break}return e.next=3,this.partition(t,n);case 3:return r=e.sent,this.progress[r]=this.items[r],this.updateProgress&&this.updateProgress(this.progress),e.next=8,this.qs(t,r-1);case 8:return e.next=10,this.qs(r+1,n);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"partition",value:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var s,o,c,l,u,m,h,d,b,g,v,y,E,x,w,k;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n-t>5)){e.next=10;break}if(!((s=this.items.slice(n-3).filter((function(e){return!e.required}))).length>1)){e.next=10;break}return o=f.a.createPrompt.apply(f.a,Object(r.a)(s)),c=Object(a.a)(o,2),l=c[0],u=c[1],this.triggerPrompt(u),e.next=7,l;case 7:m=e.sent,-1===(h=this.items.indexOf(m))?console.warn("Did not find item ".concat(m.text)):this.swap(h,n);case 10:if(!(d=this.items[n]).required){e.next=14;break}return this.swap(t,n),e.abrupt("return",t);case 14:b=t,g=t;case 16:if(!(g<n)){e.next=31;break}if(!(v=this.items[g]).required||d.required){e.next=22;break}return this.swap(b,g),b++,e.abrupt("continue",28);case 22:return y=f.a.createPrompt(d,v),E=Object(a.a)(y,2),x=E[0],w=E[1],this.triggerPrompt(w),e.next=26,x;case 26:k=e.sent,Object(p.a)(k,v)&&(this.swap(b,g),b++);case 28:g++,e.next=16;break;case 31:return this.swap(b,n),e.abrupt("return",b);case 33:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),t}(f.a)},49:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p}));var r=n(22),a=n(7),s=n(8),i=n(10),o=n(9),c=n(11),l=n(0),u=n.n(l),m=n(6),h=/^\s*(\*)?\s*(.+?)\s*(?:\|\s*(\d+))?\s*$/,p=function(t){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(s)))).inputRef=u.a.createRef(),t.context=void 0,t.state={text:"",saved:!1,error:null,autosize:!0,canResize:!0},t.saveTimeout=-1,t}return Object(c.a)(n,t),Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({text:this.stringifyItems()}),this.validate();var n=this.inputRef.current,r=n.offsetHeight-n.clientHeight;if(e((function(){return n.style.height=n.scrollHeight+r+"px"})),window.ResizeObserver){var a=new ResizeObserver((function(){t.setState({autosize:!1}),a.disconnect()}));a.observe(n)}else this.setState({canResize:!1})}},{key:"parseItems",value:function(){return this.inputRef.current?this.inputRef.current.value.split("\n").filter((function(e){return e.trim().length})).map((function(e){var t=h.exec(e),n=Object(r.a)(t,4),a=(n[0],n[1]),s=n[2],i=n[3];return{text:s,weight:i?parseInt(i):void 0,required:void 0!==a?!!a:void 0}})):[]}},{key:"updateItems",value:function(){clearTimeout(this.saveTimeout);var e=this.validate();e&&(this.context.updateItems(e),this.setState({saved:!0,error:null}))}},{key:"validate",value:function(){for(var e=this.parseItems(),t=0;t<e.length-1;t++)for(var n=t+1;n<e.length;n++)if(e[t].text===e[n].text)return this.setState({saved:!1,error:"Duplicate item: ".concat(e[t].text)}),null;return e}},{key:"onChange",value:function(e){var t=this;clearTimeout(this.saveTimeout);var n=e.target,r=this.validate(),a={text:n.value};if(r&&(this.saveTimeout=window.setTimeout((function(){return t.updateItems()}),3e3),a.saved=!1,a.error=null),this.setState(a),this.state.autosize){var s=n.offsetHeight-n.clientHeight;n.style.height="auto",n.style.height=n.scrollHeight+s+"px"}this.props.onChange&&this.props.onChange(e)}},{key:"stringifyItems",value:function(){return this.context&&this.context.items?this.context.items.map((function(e){var t=e.required?"* ":"";return t+=e.text,e.weight&&(t+=" | "+e.weight),t})).join("\n"):""}},{key:"render",value:function(){var e=this.state,t=e.saved,n=e.error,r=e.canResize,a={height:0,color:t?"green":n?"red":"inherit"};return u.a.createElement(u.a.Fragment,null,u.a.createElement("textarea",{value:this.state.text,onBlur:this.updateItems.bind(this),ref:this.inputRef,onChange:this.onChange.bind(this),className:"form-control",style:{minHeight:"25vh",resize:r?"vertical":"none"}}),u.a.createElement("div",{className:"mt-1",style:a},t?"Items saved":n))}}]),n}(l.PureComponent);p.contextType=m.c}).call(this,n(37).setImmediate)},50:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return k}));var r=n(13),a=n.n(r),s=n(18),i=n(7),o=n(8),c=n(10),l=n(9),u=n(20),m=n(11),h=n(0),p=n.n(h),f=n(15),d=n(29),b=n(51),g=n(41),v=n(6),y=n(52),E=n(53),x=n(42),w=n(30),k=function(t){function n(e){var t;return Object(i.a)(this,n),(t=Object(c.a)(this,Object(l.a)(n).call(this,e))).context=void 0,t.state={finished:!1,promptCount:0,progress:0},t.sorter=void 0,t.algorithmName=void 0,t.bodyElement=document.getElementsByTagName("body")[0],t.triggerPromptUser=t.triggerPromptUser.bind(Object(u.a)(t)),t.updateProgress=t.updateProgress.bind(Object(u.a)(t)),t.onKeyPress=t.onKeyPress.bind(Object(u.a)(t)),t}return Object(m.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.context,n=t.algorithm,r=t.items,e.t0=n,e.next=e.t0===v.a.quicksort?4:e.t0===v.a.binaryInsertion?7:e.t0===v.a.insertionSort?10:13;break;case 4:return this.sorter=new x.a(r,this.triggerPromptUser,this.updateProgress),this.algorithmName="Quicksort",e.abrupt("break",13);case 7:return this.sorter=new y.a(r,this.triggerPromptUser,this.updateProgress),this.algorithmName="Binary Insertion Sort",e.abrupt("break",13);case 10:return this.sorter=new E.a(r,this.triggerPromptUser,this.updateProgress),this.algorithmName="Insertion Sort",e.abrupt("break",13);case 13:this.sorter&&this.sorter.run().then((function(){return s.setState({finished:!0,prompt:void 0})})),window.addEventListener("keypress",this.onKeyPress);case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("keypress",this.onKeyPress)}},{key:"flash",value:function(){var t=this;this.bodyElement.classList.remove("flash"),e((function(){return t.bodyElement.classList.add("flash")}))}},{key:"updateProgress",value:function(e){Array.isArray(e)?this.setState({progress:e.slice()}):this.setState({progress:e})}},{key:"triggerPromptUser",value:function(e){this.state.lastLeftItem&&this.state.lastLeftItem!==e.item1&&this.flash(),this.setState({lastLeftItem:e.item3?void 0:e.item1,prompt:e,promptCount:this.state.promptCount+1}),this.context.updateItems(this.context.items)}},{key:"onKeyPress",value:function(e){var t=this.state.prompt;if(t)switch(e.key){case"a":t.resolve(t.item1);break;case"h":if(!t.item3)break;t.resolve(t.item2);break;case"l":if(t.item3){t.resolve(t.item3);break}t.resolve(t.item2)}}},{key:"render",value:function(){var e=this;if(!this.context.algorithm)return p.a.createElement(f.a,{to:"/algorithm"});if(this.state.finished)return p.a.createElement(f.a,{to:"/results"});if(!this.state.prompt)return p.a.createElement("div",null);var t=this.state.prompt.item3;return p.a.createElement(w.a,null,p.a.createElement("h1",{className:"display-1"},"Sort"),p.a.createElement("h4",null,this.algorithmName),p.a.createElement("div",{className:"d-flex flex-column"},p.a.createElement("h2",{className:"text-center mb-3 mt-4"},t?p.a.createElement(p.a.Fragment,null,"Which item is the ",p.a.createElement("b",{className:"text-primary"},p.a.createElement("i",null,"second"))," most important?"):this.context.question||p.a.createElement(p.a.Fragment,null,"Which item is ",p.a.createElement("span",{className:"text-primary"},"more important"),"?")),p.a.createElement("h4",null,"Question #",this.state.promptCount),p.a.createElement(b.a,{prompt:this.state.prompt}),this.sorter instanceof x.a?p.a.createElement(g.a,{progress:this.state.progress}):p.a.createElement(g.a,{progress:this.state.progress,max:this.context.items.length}),t&&p.a.createElement("span",{className:"text-info mt-2"},"This question has no bearing on the final result, but answering it correctly can reduce the length of the quiz by up to 15% or more on your car insurance.  For real, though, it'll cut out a good 5-15% of the questions."),p.a.createElement("p",{className:"mt-2 mb-1 d-none d-sm-inline"},p.a.createElement("b",null,"Tip:")," ",t?p.a.createElement(p.a.Fragment,null,"You can press ",p.a.createElement("kbd",null,"a")," to select the left item, ",p.a.createElement("kbd",null,"h")," to select the middle item, and"," ",p.a.createElement("kbd",null,"l")," to select the right item."):p.a.createElement(p.a.Fragment,null,"You can press ",p.a.createElement("kbd",null,"a")," to select the left item and ",p.a.createElement("kbd",null,"l")," to select the right item.")),p.a.createElement("p",null,p.a.createElement("b",null,"Tip:")," The screen will flash ",p.a.createElement("span",{className:"text-success"},"green")," when the left item changes."),p.a.createElement(d.a,{className:"align-self-start mt-2",onClick:function(){return e.sorter.cancel()}})))}}]),n}(h.PureComponent);k.contextType=v.c}).call(this,n(37).setImmediate)},51:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(78),i=n(77),o=n(79);t.a=function(e){var t=e.prompt,n=t.resolve,r=t.item1,c=t.item2,l=t.item3,u=function(e){var t=e.opt;return a.a.createElement(s.a,{xs:12,md:l?12:6,lg:l?4:6,className:"align-self-stretch mb-2"},a.a.createElement(i.a,{onClick:function(){return n(t)},className:"w-100 border h-100",color:"light",style:{minHeight:100,fontSize:40}},t.text))};return a.a.createElement(o.a,{className:"align-items-stretch"},a.a.createElement(u,{opt:r}),a.a.createElement(u,{opt:c}),l&&a.a.createElement(u,{opt:l}))}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(22),a=n(13),s=n.n(a),i=n(18),o=n(7),c=n(8),l=n(10),u=n(9),m=n(11),h=n(25),p=n(19),f=function(e){function t(e,n,r){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e,n,1,r))).curItem=null,a.curIdx=-1,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"run",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.items,n=1;case 2:if(!(n<t.length)){e.next=14;break}return this.updateProgress&&this.updateProgress(this.progress),this.curIdx=n,r=this.curItem=t.splice(n,1)[0],e.next=8,this.binarySearch(r,0,n);case 8:a=e.sent,t.splice(a,0,r),this.progress=n;case 11:n++,e.next=2;break;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){this.curItem&&this.items.splice(this.curIdx,0,this.curItem)}},{key:"binarySearch",value:function(){var e=Object(i.a)(s.a.mark((function e(t,n,a){var i,o,c,l,u,m,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>=a)){e.next=2;break}return e.abrupt("return",n);case 2:if(i=Math.floor((a-n)/2+n),o=this.items[i],!t.required){e.next=11;break}if(o.required){e.next=8;break}return e.abrupt("return",this.binarySearch(t,n,i));case 8:return e.abrupt("return",i);case 9:e.next=13;break;case 11:if(!o.required){e.next=13;break}return e.abrupt("return",this.binarySearch(t,i+1,a));case 13:return c=p.a.createPrompt(t,o),l=Object(r.a)(c,2),u=l[0],m=l[1],this.triggerPrompt(m),e.next=17,u;case 17:if(f=e.sent,!Object(h.a)(f,t)){e.next=22;break}return e.abrupt("return",this.binarySearch(t,n,i));case 22:return e.abrupt("return",this.binarySearch(t,i+1,a));case 23:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),t}(p.a)},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(13),a=n.n(r),s=n(22),i=n(18),o=n(7),c=n(8),l=n(10),u=n(9),m=n(11),h=n(25),p=n(19),f=function(e){function t(e,n,r){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e,n,1,r))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"run",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,r,i,o,c,l,u,m,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.items,n=1;case 2:if(!(n<t.length)){e.next=36;break}this.updateProgress&&this.updateProgress(this.progress),r=t[n],i=n-1;case 6:if(!(i>=0)){e.next=32;break}if(o=t[i],!r.required){e.next=17;break}if(o.required){e.next=14;break}return this.swap(i+1,i),e.abrupt("continue",29);case 14:return e.abrupt("break",32);case 15:e.next=19;break;case 17:if(!o.required){e.next=19;break}return e.abrupt("break",32);case 19:return c=p.a.createPrompt(r,o),l=Object(s.a)(c,2),u=l[0],m=l[1],this.triggerPrompt(m),e.next=23,u;case 23:if(f=e.sent,!Object(h.a)(f,r)){e.next=28;break}this.swap(i+1,i),e.next=29;break;case 28:return e.abrupt("break",32);case 29:i--,e.next=6;break;case 32:this.progress=n+1;case 33:n++,e.next=2;break;case 36:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){}}]),t}(p.a)},55:function(e,t,n){e.exports=n(76)},6:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r,a,s=n(0),i=n.n(s);!function(e){e.items="items",e.question="question"}(r||(r={})),function(e){e.quicksort="qs",e.binaryInsertion="binIns",e.insertionSort="ins"}(a||(a={}));var o=i.a.createContext({items:[],updateItems:function(){},algorithm:null,setAlgorithm:function(){},question:"",setQuestion:function(){}});t.c=o},61:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(45),i=n.n(s),o=n(7),c=n(8),l=n(10),u=n(9),m=n(20),h=n(11),p=(n(60),n(61),n(81)),f=(n(62),function(){return a.a.createElement(p.a,{fixed:"bottom",color:"light",className:"d-none d-md-flex footer-nav"},a.a.createElement("div",{className:"container justify-content-between"},a.a.createElement("a",{href:"https://github.com/dfoverdx/subjective-sorter"},"Source Code"),a.a.createElement("span",null,a.a.createElement("a",{href:"https://dfdx.us/"},"Haley Hitch")," \xa9 2019")))}),d=n(6),b=n(17),g=n(15),v=n(26),y=n.n(v),E=n(82),x=n(83),w=n(84),k=n(85),j=n(86),O=n(23),I=n(24),q=n(29),S=(n(71),n(30)),N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).context=void 0,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSelection",value:function(e){this.context.setAlgorithm(e)}},{key:"render",value:function(){var e=this,t=function(t){var n=t.algorithm,r=t.url,s=t.name,i=t.pros,o=t.cons,c=t.color,l=t.inverse;return a.a.createElement(E.a,{color:c||"light",inverse:l},a.a.createElement(x.a,null,a.a.createElement(w.a,null,a.a.createElement("h4",null,s))),a.a.createElement(k.a,{className:"d-flex flex-column"},"Pros:",a.a.createElement("ul",null,i.map((function(e,t){return a.a.createElement("li",{key:t},e)}))),"Cons:",a.a.createElement("ul",null,o.map((function(e,t){return a.a.createElement("li",{key:t},e)}))),a.a.createElement("div",{className:"text-center mt-auto"},a.a.createElement(b.b,{to:"/sort/".concat(r),onClick:e.onSelection.bind(e,n),className:"btn btn-primary btn-lg"},"Select ",a.a.createElement(O.a,{icon:I.b,size:"lg"})))))};return a.a.createElement(S.a,null,a.a.createElement(y.a,null,'\n        Select Algorithm\n        ================\n\n        Here you select which method we\'ll use for sorting your list.  Ultimately, all three methods will produce the\n        same results.  The difference is only in how long the "quiz" will be.\n      '),a.a.createElement(j.a,{className:"my-auto"},a.a.createElement(t,{algorithm:d.a.quicksort,url:"quicksort",name:"Quicksort",pros:["Fewer context switches--questions are faster to answer"],cons:["Slightly more questions than Binary Insertion Sort",a.a.createElement(a.a.Fragment,null,a.a.createElement("b",null,"Longest possible")," quiz if list is already mostly sorted")]}),a.a.createElement("div",{className:"w-100 d-lg-none"}),a.a.createElement(t,{algorithm:d.a.binaryInsertion,url:"binary-insertion-sort",name:"Binary Insertion Sort",pros:["Fewest questions for well-shuffled lists","Roughly the same number of questions no matter how sorted or unsorted the list is"],cons:["More context switches--questions are a little slower to answer"]}),a.a.createElement("div",{className:"w-100 d-xl-none"}),a.a.createElement("div",{className:"w-100 d-lg-none"}),a.a.createElement(t,{algorithm:d.a.insertionSort,url:"insertion-sort",name:"Insertion Sort",color:"secondary",inverse:!0,pros:[a.a.createElement(a.a.Fragment,null,a.a.createElement("b",null,"Fewest questions by far")," for mostly-ordered lists"),"Fewer context switches than Binary Insertion Sort--questions are quicker to answer"],cons:["More context switches than Quicksort--questions are slower to answer",a.a.createElement(a.a.Fragment,null,a.a.createElement("b",null,"Significantly")," more questions than Binary Insertion Sort or Quicksort if list is not already mostly ordered")]}),a.a.createElement("div",{className:"w-50 d-none d-lg-flex d-xl-none"})),a.a.createElement(q.a,{className:"mb-3"}),a.a.createElement(y.a,null,"\n        #### Information ####\n\n        If your list is more or less ordered already, such as when you sort it and then go back to add a couple items,\n        select *Insertion Sort*.  If the list is already completely sorted, [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)\n        will have the absolute minimum number of questions (`number of items - 1`).\n\n        If your list is not sorted, choose either *Quicksort* or *Binary Insertion Sort*.  Both sorting methods take\n        about the same amount of time.  If you're good at switching contexts in your head, choose\n        [Binary Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort#Variants), otherwise, choose [Quicksort](https://en.wikipedia.org/wiki/Quicksort).\n\n        Your list will be reordered as you answer questions, so if you need to return to item entry in the middle of the\n        quiz, you will not lose your progress.\n      "))}}]),t}(r.PureComponent);N.contextType=d.c;var P=n(48),C=n.n(P),T=function(){return a.a.createElement("div",{className:"d-flex flex-column w-100 h-100"},a.a.createElement("div",{className:"w-100 text-center",style:{marginTop:"20%",marginBottom:"20%"}},a.a.createElement(C.a,{compressor:.745,minFontSize:65},"Subjective Sorter")),a.a.createElement("p",null,"Sometimes it is helpful to order things from most important to least important.  For example, maybe you need to figure out who to invite to your wedding, and you can only invite so many people.  Or maybe you want to determine what your ",a.a.createElement("a",{href:"https://dfdx.us/core-values-quiz"},"core values")," are.  Maybe you just need to figure out who your favorite Backstreet Boy is, idk!"),a.a.createElement("p",null,'The Subjective Sorter allows you to efficiently order your list of items given subjective criteria.  Input your data and the tool will generate a "quiz", presenting you with two options per question.  Choose which is the more important option, and the tool will handle the rest.'),a.a.createElement(b.b,{to:"/item-entry",className:"align-self-end btn btn-primary btn-lg mt-auto"},"Get Started ",a.a.createElement(O.a,{icon:I.b,size:"lg"})))},z=n(77),F=n(49),A=n(35),B=n(87),R=function(e){var t=e.className,n=Object(A.a)(e,["className"]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h5",{className:t},"Ask yourself a question to help compare items, such as ",a.a.createElement("i",null,"Who would you rather have at your wedding?")),a.a.createElement(B.a,Object.assign({},n,{type:"text",placeholder:"(Optional)"})))},Q=(n(73),function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).context=void 0,n.state={hasItems:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({hasItems:this.context.items.length>2})}},{key:"onInputChange",value:function(e){this.setState({hasItems:e.target.value.split("\n").filter((function(e){return e.trim().length})).length>2})}},{key:"onQuestionChange",value:function(e){this.context.setQuestion(e.target.value)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"display-1"},"Item Entry"),a.a.createElement(y.a,null,"\n        Enter the items you wish to sort.  Each line represents one item.\n\n        If an item is *required*, prepend a `*` to it.  If a line represents multiple items (i.e. has a *weight*)\n        append `| <weight>` to it, where `<weight>` is the number of items the line represents.  See the examples\n        below for more details.\n\n        Your entries will be saved automatically.\n      "),a.a.createElement(F.a,{onChange:this.onInputChange.bind(this)}),a.a.createElement(R,{className:"mt-2",onChange:this.onQuestionChange.bind(this),value:this.context.question}),a.a.createElement("div",{className:"d-flex flex-row justify-content-end my-2"},a.a.createElement(b.b,{to:"/algorithm"},a.a.createElement(z.a,{color:"primary",disabled:!this.state.hasItems,className:"ml-auto",size:"lg"},"Sort Entries ",a.a.createElement(O.a,{icon:I.b,size:"lg"})))),a.a.createElement(j.a,{className:"mt-1"},a.a.createElement(E.a,{color:"light",id:"examples"},a.a.createElement(x.a,null,a.a.createElement(w.a,null,a.a.createElement("h3",null,"Examples"))),a.a.createElement(k.a,null,a.a.createElement(y.a,null,"\n              **Single entries**\n              ```\n              Anna\n              Bob\n              ```\n\n              **Required single entries**\n              ```\n              * Candice\n              * Derek\n              ```\n\n              **Weighted entries**\n              ```\n              The Smiths | 4\n              Edna + 1 | 2\n              ```\n\n              **Required weighted entries**\n              ```\n              * The Jones | 3\n              * Fred and Gwen + 1 | 3\n              ```\n            "))),a.a.createElement("div",{className:"w-100 d-md-none"}),a.a.createElement(E.a,{color:"light"},a.a.createElement(x.a,null,a.a.createElement(w.a,null,a.a.createElement("h3",null,"Tips"))),a.a.createElement(k.a,null,a.a.createElement(y.a,null,'\n              Entries marked required will not require any questions on the quiz.  This will *dramatically* reduce the\n              length of the quiz.\n\n              Required items are not ordered amongst other required items.\n\n              If you have already sorted your list and add new items, don\'t add them to the start; add them "near"\n              where they need to be or to the end of the list.  Then select *Insertion Sort* on the next step.\n            ')))))}}]),t}(r.PureComponent));Q.contextType=d.c;var H=n(88),L=n(89),U=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).context=void 0,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(S.a,null,a.a.createElement("h1",{className:"display-1"},"Results"),a.a.createElement(H.a,null,this.context.items.map((function(e,t){return a.a.createElement(L.a,{key:e.text},e.text)}))),a.a.createElement(q.a,{className:"mt-3"}))}}]),t}(r.PureComponent);U.contextType=d.c;var M=n(50),W=function(){return a.a.createElement(b.a,null,a.a.createElement(g.d,null,a.a.createElement(g.b,{exact:!0,path:"/"},a.a.createElement(T,null)),a.a.createElement(g.b,{path:"/item-entry"},a.a.createElement(Q,null)),a.a.createElement(g.b,{path:"/algorithm"},a.a.createElement(N,null)),a.a.createElement(g.b,{path:"/sort"},a.a.createElement(M.a,null)),a.a.createElement(g.b,{path:"/results"},a.a.createElement(U,null)),a.a.createElement(g.b,{path:"*"},a.a.createElement(g.a,{to:"/item-entry"}))))},D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={items:n.getItemsFromStorage(),updateItems:n.updateItems.bind(Object(m.a)(n)),algorithm:null,setAlgorithm:n.setAlgorithm.bind(Object(m.a)(n)),question:localStorage.getItem(d.b.question)||"",setQuestion:n.setQuestion.bind(Object(m.a)(n))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getItemsFromStorage",value:function(){var e=localStorage.getItem(d.b.items);return e?JSON.parse(e):[]}},{key:"updateItems",value:function(e){localStorage.setItem(d.b.items,JSON.stringify(e)),this.setState({items:e})}},{key:"setAlgorithm",value:function(e){this.setState({algorithm:e})}},{key:"setQuestion",value:function(e){localStorage.setItem(d.b.question,e),this.setState({question:e})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App container"},a.a.createElement("div",{className:"inner-container py-2"},a.a.createElement(d.c.Provider,{value:this.state},a.a.createElement(W,null))),a.a.createElement(f,null))}}]),t}(a.a.PureComponent);n(75),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(25);i.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.67b2eaec.chunk.js.map