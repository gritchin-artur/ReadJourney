"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[390],{9390:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var i,r,o=t(1413),a=t(3433),s=t(9439),l=t(4420),d=t(168),p=t(7924).ZP.div(i||(i=(0,d.Z)(['\n  display: grid;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 10px;\n\n  @media only screen and (min-width: 768px) {\n    margin-top: 20px;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    display: flex;\n    gap: 20px;\n  }\n\n  .FormContainer {\n    box-sizing: border-box;\n    border-radius: 30px;\n    width: 335px;\n    height: 478px;\n    background: #1f1f1f;\n\n    padding: 20px;\n\n    @media only screen and (min-width: 768px) {\n      display: flex;\n      justify-content: space-between;\n      padding: 30px;\n      width: 704px;\n      height: 336px;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      display: block;\n      width: 353px;\n      height: 651px;\n      padding: 40px 20px 20px 20px;\n    }\n  }\n\n  .Form {\n    display: grid;\n    gap: 10px;\n  }\n\n  .FormTitle {\n    margin-left: 10px;\n    font-weight: 500;\n    font-size: 10px;\n    line-height: 120%;\n    letter-spacing: -0.02em;\n    color: #f9f9f9;\n  }\n\n  .DivInput {\n    position: relative;\n  }\n\n  input {\n    box-sizing: border-box;\n    border: none;\n    border-radius: 12px;\n    padding: 14px;\n    width: 295px;\n    height: 44px;\n    background: #262626;\n\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 133%;\n    letter-spacing: -0.02em;\n    color: #f9f9f9;\n\n    &:focus {\n      outline: none;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      width: 100%;\n    }\n  }\n\n  input[id="title"] {\n    padding-left: 70px;\n  }\n\n  input[id="author"] {\n    padding-left: 80px;\n  }\n\n  .TextInput {\n    position: absolute;\n    left: 14px;\n    top: 15px;\n\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 133%;\n    letter-spacing: -0.02em;\n    text-align: center;\n    color: #686868;\n  }\n\n  .ButtonToApply {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 20px;\n    border: 1px solid rgba(249, 249, 249, 0.2);\n    border-radius: 30px;\n    padding: 10px;\n    width: 98px;\n    height: 38px;\n    background-color: #1f1f1f;\n\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 129%;\n    letter-spacing: 0.02em;\n    color: #f9f9f9;\n\n    &:hover {\n      color: #1f1f1f;\n      background-color: #f9f9f9;\n      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .StartWorkContainer {\n    display: grid;\n    gap: 20px;\n    box-sizing: border-box;\n    margin-top: 20px;\n    padding: 20px;\n    border-radius: 12px;\n    width: 295px;\n    height: 244px;\n\n    background: #262626;\n\n    @media only screen and (min-width: 768px) {\n      gap: 40px;\n      margin-top: 0px;\n      width: 313px;\n      height: 272px;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      margin-top: 20px;\n      border-radius: 12px;\n      width: 313px;\n      height: 272px;\n    }\n  }\n\n  .Title {\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 100%;\n    letter-spacing: -0.02em;\n    color: #f9f9f9;\n\n    @media only screen and (min-width: 768px) {\n      font-size: 20px;\n    }\n  }\n\n  .WorkOutList {\n    display: grid;\n    gap: 20px;\n  }\n\n  .WorkOutElement {\n    display: -webkit-box;\n    width: 230px;\n    gap: 12px;\n  }\n\n  .WorkOutNumber {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: #ffff;\n\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 100%;\n    letter-spacing: -0.02em;\n\n    color: #1f1f1f;\n  }\n\n  .WorkOutText {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 129%;\n    letter-spacing: -0.02em;\n    color: #f9f9f9;\n  }\n\n  .WorkOutPartText {\n    color: #686868;\n    margin-left: 8px;\n  }\n\n  .ButtonList {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .ButtonMyLibrary {\n    cursor: pointer;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 129%;\n    letter-spacing: -0.02em;\n    text-decoration: underline;\n    text-decoration-skip-ink: none;\n    color: #686868;\n\n    &:hover {\n      color: #f9f9f9;\n      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n  }\n\n  .ArrowNext {\n    cursor: pointer;\n    &:hover,\n    &:active {\n      path {\n        stroke: #686868;\n        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);\n      }\n      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n  }\n\n  .DesctopBookContainer {\n    display: none;\n\n    @media only screen and (min-width: 1440px) {\n      margin-top: 20px;\n      padding: 20px;\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      gap: 14px;\n      border-radius: 12px;\n      width: 313px;\n      height: 83px;\n\n      background: #262626;\n    }\n  }\n\n  .BooksPicture {\n    width: 45px;\n    height: 45px;\n    background-image: url(',");\n  }\n\n  .TextBook {\n    width: 219px;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 129%;\n    letter-spacing: -0.02em;\n    color: #686868;\n  }\n\n  .PartTextBook {\n    color: #f9f9f9;\n  }\n\n  .RecommendedboksContainer {\n    box-sizing: border-box;\n    border-radius: 30px;\n    width: 335px;\n    height: 382px;\n    background: #1f1f1f;\n\n    /* padding: 40px 20px; */\n    justify-content: center;\n    display: grid;\n\n    @media only screen and (min-width: 768px) {\n      width: 704px;\n      height: 663px;\n\n      padding: 50px;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      width: 847px;\n      height: 651px;\n\n      padding: 40px;\n    }\n  }\n\n  .TitleButtonContainer {\n    display: flex;\n    justify-content: space-between;\n    padding: 40px 20px 0 20px;\n\n    @media only screen and (min-width: 768px) {\n      align-items: center;\n      padding: 0;\n    }\n  }\n\n  .RecommendedboksTitle {\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 100%;\n    letter-spacing: -0.02em;\n    color: #f9f9f9;\n\n    @media only screen and (min-width: 768px) {\n      font-size: 28px;\n      line-height: 114%;\n      letter-spacing: 0.02em;\n    }\n  }\n\n  .PrevNextButtonList {\n    display: flex;\n    gap: 8px;\n  }\n\n  .PrevNextButton {\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: 1px solid #686868;\n\n    &:hover .Arrow {\n      path {\n        stroke: #686868;\n        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);\n      }\n      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n  }\n\n  .BookListContainer {\n    width: 321px;\n    height: 274px;\n    transform: translate(0%, 0%);\n    overflow: hidden;\n    padding: 13px;\n    box-sizing: border-box;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 20px;\n\n      width: 634px;\n      height: 548px;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      width: 789px;\n      height: 550px;\n    }\n  }\n\n  .BookList {\n    display: flex;\n    gap: 20px;\n    margin-left: 13px;\n    width: ","px;\n\n    @media only screen and (min-width: 768px) {\n      flex-wrap: wrap;\n      width: ","px;\n      height: 516px;\n    }\n  }\n\n  .BookItem {\n    cursor: pointer;\n    width: 137px;\n    height: 248px;\n\n    display: grid;\n    gap: 5px;\n    transition: transform 0.3s ease;\n\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n\n  .BookImg {\n    border-radius: 8px;\n    width: 137px;\n    height: 208px;\n  }\n\n  .BookList {\n    display: flex;\n    list-style: none;\n    position: fixed;\n    transition: all ease 1s;\n  }\n\n  .BookTitle {\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 129%;\n    letter-spacing: -0.02em;\n    color: #f9f9f9;\n\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  .BookAuthor {\n    font-weight: 500;\n    font-size: 10px;\n    line-height: 120%;\n    letter-spacing: -0.02em;\n    color: #686868;\n  }\n"])),"data:image/png;base64,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",(function(n){return 157*n.$lengthbooks}),(function(n){return 157*n.$lengthbooks/2})),c=t(2791),h=["title","titleId"];function x(){return x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},x.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function f(n,e){var t=n.title,i=n.titleId,o=u(n,h);return c.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:e,"aria-labelledby":i},o),t?c.createElement("title",{id:i},t):null,r||(r=c.createElement("path",{stroke:"#E3E3E3",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m14 17 5-5-5-5M19 12H5"})))}var g,m=c.forwardRef(f),w=(t.p,["title","titleId"]);function b(){return b=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},b.apply(this,arguments)}function y(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function k(n,e){var t=n.title,i=n.titleId,r=y(n,w);return c.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",ref:e,"aria-labelledby":i},r),t?c.createElement("title",{id:i},t):null,g||(g=c.createElement("path",{stroke:"#F9F9F9",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10 12 6 8l4-4"})))}var j,v=c.forwardRef(k),B=(t.p,["title","titleId"]);function A(){return A=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},A.apply(this,arguments)}function N(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function O(n,e){var t=n.title,i=n.titleId,r=N(n,B);return c.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",ref:e,"aria-labelledby":i},r),t?c.createElement("title",{id:i},t):null,j||(j=c.createElement("path",{stroke:"#F9F9F9",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m6 4 4 4-4 4"})))}var z=c.forwardRef(O),C=(t.p,t(5705)),I=t(3604),E=t(184);function T(){var n=(0,l.I0)(),e=(0,l.v9)((function(n){return n.data.recommendedBooks})),t=(0,c.useState)([]),i=(0,s.Z)(t,2),r=i[0],d=i[1],h=(0,c.useState)(0),x=(0,s.Z)(h,2),u=x[0],f=x[1],g=(0,c.useState)(!1),w=(0,s.Z)(g,2),b=w[0],y=w[1],k=(0,c.useState)({title:"",author:"",page:1,limit:10}),j=(0,s.Z)(k,2),B=j[0],A=j[1];(0,c.useEffect)((function(){if(e.totalPages<3)d(e.results);else{var n=e.results?[].concat((0,a.Z)(r),(0,a.Z)(e.results)):[],t=Array.from(new Set(n.map((function(n){return n._id})))).map((function(e){return n.find((function(n){return n._id===e}))}));d((function(n){return JSON.stringify(n)!==JSON.stringify(t)?t:n}))}}),[e,r]);var N=(0,C.TA)({initialValues:{title:"",author:"",page:1,limit:10},onSubmit:function(e){S({target:{name:"page",value:1}}),console.log(e),n((0,I.D)(e))}}),O=N.values,T=N.handleBlur,S=N.handleChange,W=N.handleSubmit;(0,c.useEffect)((function(){A((function(n){return(0,o.Z)((0,o.Z)({},n),{},{page:O.page})}))}),[O.page]),(0,c.useEffect)((function(){n((0,I.D)(B))}),[n,B]);var P=document.querySelector(".BookList"),U=document.querySelector(".BookListContainer"),L=(0,c.useCallback)((function(){var n=b?0:u+157;if(console.log(n),U&&r.length&&U.offsetWidth>157*r.length/2+4&&(n=0),U&&321===U.offsetWidth&&n===157*(r.length-2)||U&&634===U.offsetWidth&&n===(r.length-6)/2*157||U&&789===U.offsetWidth&&n>=(r.length-8)/2*157-18){var t=O.page+1;t>e.totalPages?n=0:S({target:{name:"page",value:t}})}f(n)}),[r,b,u,U,S,O.page,e.totalPages]);(0,c.useEffect)((function(){P&&(P.style.left=-u+"px")}),[u,P]);var F=(0,c.useMemo)((function(){return e.results&&0!==e.results.length?r.map((function(n,e){return(0,E.jsxs)("li",{className:"BookItem",children:[(0,E.jsx)("img",{className:"BookImg",src:n.imageUrl,alt:n.author}),(0,E.jsx)("h2",{className:"BookTitle",children:n.title}),(0,E.jsx)("p",{className:"BookAuthor",children:n.author})]},e)})):(0,E.jsx)("h2",{style:{fontSize:"40px",color:"white",whiteSpace:"nowrap"},children:"Not found"})}),[r,e]);return(0,c.useEffect)((function(){var n=U&&321===U.offsetWidth&&r.length<2||U&&634===U.offsetWidth&&r.length<8||U&&789===U.offsetWidth&&r.length<10;y(n),b&&L()}),[r,U,b,P,L]),(0,E.jsxs)(p,{$lengthbooks:r.length,children:[(0,E.jsxs)("div",{className:"FormContainer",children:[(0,E.jsxs)("div",{children:[(0,E.jsxs)("form",{className:"Form",children:[(0,E.jsx)("p",{className:"FormTitle",children:"Filters:"}),(0,E.jsxs)("div",{className:"DivInput",children:[(0,E.jsx)("input",{id:"title",name:"title",type:"text",placeholder:"Enter text",className:"TitleInput",onChange:S,value:O.title,onBlur:T}),(0,E.jsx)("span",{className:"TextInput",children:"Book title:"})]}),(0,E.jsxs)("div",{className:"DivInput",children:[(0,E.jsx)("input",{id:"author",name:"author",type:"text",placeholder:"Enter text",className:"AuthorInput",onChange:S,value:O.author,onBlur:T}),(0,E.jsx)("span",{className:"TextInput",children:"The author:"})]})]}),(0,E.jsx)("button",{className:"ButtonToApply",type:"submit",onClick:W,children:"To apply"})]}),(0,E.jsxs)("div",{className:"StartWorkContainer",children:[(0,E.jsx)("h2",{className:"Title",children:"Start your workout"}),(0,E.jsxs)("ul",{className:"WorkOutList",children:[(0,E.jsxs)("li",{className:"WorkOutElement",children:[(0,E.jsx)("span",{className:"WorkOutNumber",children:"1"}),(0,E.jsxs)("p",{className:"WorkOutText",children:["Create a personal library:",(0,E.jsx)("span",{className:"WorkOutPartText",children:"add the books you intend to read to it."})]})]}),(0,E.jsxs)("li",{className:"WorkOutElement",children:[(0,E.jsx)("span",{className:"WorkOutNumber",children:"2"}),(0,E.jsxs)("p",{className:"WorkOutText",children:["Create your first workout:",(0,E.jsx)("span",{className:"WorkOutPartText",children:"define a goal, choose a period, start training."})]})]})]}),(0,E.jsxs)("ul",{className:"ButtonList",children:[(0,E.jsx)("li",{className:"ButtonMyLibrary",children:"My library"}),(0,E.jsx)("li",{children:(0,E.jsx)(m,{className:"ArrowNext"})})]})]}),(0,E.jsxs)("div",{className:"DesctopBookContainer",children:[(0,E.jsx)("div",{className:"BooksPicture"}),(0,E.jsxs)("p",{className:"TextBook",children:['"Books are ',(0,E.jsx)("span",{className:"PartTextBook",children:"windows"}),' to the world, and reading is a journey into the unknown."']})]})]}),(0,E.jsxs)("div",{className:"RecommendedboksContainer",children:[(0,E.jsxs)("div",{className:"TitleButtonContainer",children:[(0,E.jsx)("h2",{className:"RecommendedboksTitle",children:"Recommended"}),(0,E.jsxs)("ul",{className:"PrevNextButtonList",style:{display:b?"none":"flex"},children:[(0,E.jsx)("li",{className:"PrevNextButton",onClick:function(){var n=u-157;n<0&&(U&&321===U.offsetWidth&&(n=157*(r.length-2)),U&&634===U.offsetWidth&&(n=157*(r.length/2-4)),U&&789===U.offsetWidth&&(n=(r.length-10)/2*157)),f(n)},children:(0,E.jsx)(v,{className:"Arrow"})}),(0,E.jsx)("li",{className:"PrevNextButton",onClick:L,children:(0,E.jsx)(z,{className:"Arrow"})})]})]}),r&&(0,E.jsx)("div",{className:"BookListContainer",children:(0,E.jsx)("ul",{className:"BookList",children:F})})]})]})}}}]);
//# sourceMappingURL=390.f46229b5.chunk.js.map