(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6117:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(630)}])},3110:function(e,t,n){"use strict";n.d(t,{h8:function(){return u},Ll:function(){return c},KF:function(){return o},Rf:function(){return i},Ib:function(){return r},Db:function(){return d}});let s=n(5121).Z.create({baseURL:"https://admin.urbanchat.ai"});s.interceptors.request.use(async function(e){let t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},function(e){return Promise.reject(e)}),s.interceptors.response.use(e=>({data:e.data,code:e.status,message:""}),e=>{console.log({error:e});let t={data:null,code:0,message:""};return e.response?((401==e.response.status||403==e.response.status)&&(localStorage.removeItem("access_token"),window.location.href="/login"),t.code=e.response.status,t.message=e.response.data.message):e.request?(t.code=408,t.message="No response received from the server"):(t.code=500,t.message=e.message),t});let a={headers:{"Content-Type":"application/json"}};async function r(e,t){return await s.post("/api/login",{email:e,password:t},a)}async function c(e,t,n){return await s.get("/api/dashboard?type=".concat(e,"&startTime=").concat(t,"&endTime=").concat(n),a)}async function i(e){return await s.get("/api/user-details?page=".concat(e,"&per_page=",10),a)}async function o(){return await s.get("/api/fetch-price-models",a)}async function u(e){return await s.post("/api/delete-user?user_id=".concat(e),{},a)}async function d(e,t){return await s.post("/api/edit-price-model?pricePlanId=".concat(t),e,a)}},3482:function(e,t,n){"use strict";function s(e){let t=new Date(e);return"".concat(t.getDate()," ").concat(t.toLocaleDateString("en-US",{month:"short"})," ").concat(t.getFullYear())}function a(e){return e.toISOString().split("T")[0]}function r(e,t){return Math.floor(Math.abs(t.getTime()-e.getTime())/864e5)}n.d(t,{b:function(){return r},ie:function(){return s},p6:function(){return a}})},630:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var s=n(5893),a=n(2742);function r(){return(0,s.jsxs)("div",{className:"card customer-graph",children:[(0,s.jsx)("h3",{children:"Total Customers"}),(0,s.jsx)("h2",{children:"+245k Members"}),(0,s.jsx)("img",{src:"/_next/static/media/graph.22d86b93.svg",alt:"graph img"})]})}n(7120);var c=n(7294);function i(){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 20",fill:"none",children:(0,s.jsx)("path",{d:"M1 7H17M1 7V15.8002C1 16.9203 1 17.4801 1.21799 17.9079C1.40973 18.2842 1.71547 18.5905 2.0918 18.7822C2.5192 19 3.07899 19 4.19691 19H13.8031C14.921 19 15.48 19 15.9074 18.7822C16.2837 18.5905 16.5905 18.2842 16.7822 17.9079C17 17.4805 17 16.9215 17 15.8036V7M1 7V6.2002C1 5.08009 1 4.51962 1.21799 4.0918C1.40973 3.71547 1.71547 3.40973 2.0918 3.21799C2.51962 3 3.08009 3 4.2002 3H5M17 7V6.19691C17 5.07899 17 4.5192 16.7822 4.0918C16.5905 3.71547 16.2837 3.40973 15.9074 3.21799C15.4796 3 14.9203 3 13.8002 3H13M5 3H13M5 3V1M13 3V1M13 11H5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}n(6615);var o=n(3482);function u(e){let{label:t,defaultDate:n,onDateChange:a}=e,[r,u]=c.useState("");return(0,c.useEffect)(()=>{u((0,o.p6)(n))},[]),(0,s.jsxs)("div",{className:"datetime-pick",children:[(0,s.jsx)("input",{value:r,type:"date",onChange:e=>{var t;u(t=e.target.value),a(new Date(t))}}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i,{}),(0,s.jsx)("span",{children:t})]}),(0,s.jsx)("span",{children:(0,o.ie)(r)})]})}var d=n(3110),l=n(1664),h=n.n(l),f=n(6501);function p(){let[e,t]=(0,c.useState)(new Date(0)),[n,a]=(0,c.useState)(new Date),[r,i]=(0,c.useState)(0);async function l(){let t=await (0,d.Ll)("total_user",e.toISOString(),n.toISOString());t.data?i(t.data.total_user_count):f.ZP.error(t.message)}return(0,c.useEffect)(()=>{l()},[e,n]),(0,s.jsxs)("div",{className:"card customer-card",children:[(0,s.jsx)("h3",{children:"New Joining Customers"}),(0,s.jsxs)("h2",{children:["+",r," Members"]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:"/_next/static/media/customers.85b94a13.png",alt:"customers"}),(0,s.jsxs)("div",{className:"right",children:[(0,s.jsxs)("div",{className:"input-area",children:[(0,s.jsx)(u,{label:"Start",defaultDate:e,onDateChange:e=>t(e)}),(0,s.jsx)(u,{label:"End",defaultDate:n,onDateChange:e=>a(e)})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:["Last ",(0,o.b)(e,n)," Days Added Customers"]})]})]}),(0,s.jsx)(h(),{href:"/dashboard/customers?start=".concat((0,o.p6)(e),"&end=").concat((0,o.p6)(n)),children:(0,s.jsx)("button",{className:"hover",children:"View List"})})]})}function g(){async function e(){let e=new Date(0).toISOString(),t=new Date().toISOString();console.log(await (0,d.Ll)("total_user",e,t))}return(0,c.useEffect)(()=>{e()},[]),(0,s.jsx)(a.Z,{children:(0,s.jsxs)("div",{className:"main-content",children:[(0,s.jsx)("h1",{children:"Dashboard"}),(0,s.jsxs)("div",{className:"col-2",children:[(0,s.jsx)(r,{}),(0,s.jsx)(p,{})]})]})})}},7120:function(){},6615:function(){}},function(e){e.O(0,[640,121,742,774,888,179],function(){return e(e.s=6117)}),_N_E=e.O()}]);