(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[535],{4105:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/pricing",function(){return a(4183)}])},2662:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(5893),n=a(7294);function i(e){let{defaultChecked:t,onChange:a}=e,[i,o]=(0,n.useState)(t||!1);return(0,n.useEffect)(()=>{a&&a(i)},[i]),(0,s.jsxs)("div",{className:"checkbox",children:[(0,s.jsx)("input",{checked:i,onChange:e=>o(e.target.checked),type:"checkbox"}),(0,s.jsx)("svg",{className:"off",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Z"})}),(0,s.jsx)("svg",{className:"on",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12Zm-1.53 4.97L10 14.44l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l7-7a.75.75 0 0 0-1.06-1.06Z"})})]})}a(3478)},3110:function(e,t,a){"use strict";a.d(t,{h8:function(){return l},Ll:function(){return o},KF:function(){return c},Rf:function(){return r},Ib:function(){return i},Db:function(){return d}});let s=a(5121).Z.create({baseURL:"https://urbanchat.ai"});s.interceptors.request.use(async function(e){let t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},function(e){return Promise.reject(e)}),s.interceptors.response.use(e=>({data:e.data,code:e.status,message:""}),e=>{console.log({error:e});let t={data:null,code:0,message:""};return e.response?((401==e.response.status||403==e.response.status)&&(localStorage.removeItem("access_token"),window.location.href="/login"),t.code=e.response.status,t.message=e.response.data.message):e.request?(t.code=408,t.message="No response received from the server"):(t.code=500,t.message=e.message),t});let n={headers:{"Content-Type":"application/json"}};async function i(e,t){return await s.post("/api/login",{email:e,password:t},n)}async function o(e,t,a){return await s.get("/api/dashboard?type=".concat(e,"&startTime=").concat(t,"&endTime=").concat(a),n)}async function r(e){return await s.get("/api/user-details?page=".concat(e,"&per_page=",10),n)}async function c(){return await s.get("/api/fetch-price-models",n)}async function l(e){return await s.post("/api/delete-user?user_id=".concat(e),{},n)}async function d(e,t){return await s.post("/api/edit-price-model?pricePlanId=".concat(t),e,n)}},4183:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var s=a(5893),n=a(3110),i=a(7294),o=a(2662),r=a(6501);function c(e){let{data:t}=e,[a,c]=(0,i.useState)(t);function l(e,t){let s={...a};s[e]=t,c(s)}let[d,u]=(0,i.useState)(!1);async function h(e){if(e.preventDefault(),d)return;u(!0);let t=await (0,n.Db)(a,a._id);u(!1),t.data?r.ZP.success("Saved"):r.ZP.error(t.message)}return(0,s.jsxs)("form",{onSubmit:h,className:"pricing-box",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"input-title",children:"Name"}),(0,s.jsx)("input",{onChange:e=>l("name",e.target.value),value:a.name,type:"text"})]}),(0,s.jsxs)("div",{className:"col-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"input-title",children:"Period"}),(0,s.jsx)("input",{disabled:!0,value:a.period,type:"text"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"input-title",children:"Cost ($)"}),(0,s.jsx)("input",{onChange:e=>l("cost",e.target.value),value:a.cost,type:"number"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"input-title",children:"Chatbots"}),(0,s.jsx)("input",{onChange:e=>l("number_of_chatbots",e.target.value),value:a.number_of_chatbots,type:"number"})]})]}),(0,s.jsxs)("div",{className:"col-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"input-title",children:"Msg Quota"}),(0,s.jsx)("input",{onChange:e=>l("messages_quota_user",e.target.value),value:a.messages_quota_user,type:"number"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"input-title",children:"Allowed Chars"}),(0,s.jsx)("input",{onChange:e=>l("allowed_characters",e.target.value),value:a.allowed_characters,type:"number"})]})]}),(0,s.jsxs)("div",{className:"checkbox-container",children:[(0,s.jsxs)("div",{className:a.document_upload?"item":"item strike",children:[(0,s.jsx)(o.Z,{defaultChecked:a.document_upload,onChange:e=>l("document_upload",e)}),"Document Upload"]}),(0,s.jsxs)("div",{className:a.facebook_allowed?"item":"item strike",children:[(0,s.jsx)(o.Z,{defaultChecked:a.facebook_allowed,onChange:e=>l("facebook_allowed",e)}),"Facebook"]}),(0,s.jsxs)("div",{className:a.whatsapp_allowed?"item":"item strike",children:[(0,s.jsx)(o.Z,{defaultChecked:a.whatsapp_allowed,onChange:e=>l("whatsapp_allowed",e)}),"Whatsapp"]}),(0,s.jsxs)("div",{className:a.shopify_allowed?"item":"item strike",children:[(0,s.jsx)(o.Z,{defaultChecked:a.shopify_allowed,onChange:e=>l("shopify_allowed",e)}),"Shopify"]}),(0,s.jsxs)("div",{className:a.wordpress_allowed?"item":"item strike",children:[(0,s.jsx)(o.Z,{defaultChecked:a.wordpress_allowed,onChange:e=>l("wordpress_allowed",e)}),"Wordpress"]}),(0,s.jsxs)("div",{className:a.manual_code_embed?"item":"item strike",children:[(0,s.jsx)(o.Z,{defaultChecked:a.manual_code_embed,onChange:e=>l("manual_code_embed",e)}),"Code Embed"]}),(0,s.jsxs)("div",{className:a.remove_powered_by?"item":"item strike",children:[(0,s.jsx)(o.Z,{defaultChecked:a.remove_powered_by,onChange:e=>l("remove_powered_by",e)}),"Powered By"]}),(0,s.jsxs)("div",{className:a.soft_delete?"item":"item strike",children:[(0,s.jsx)(o.Z,{defaultChecked:a.soft_delete,onChange:e=>l("soft_delete",e)}),"Soft Delete"]}),(0,s.jsxs)("div",{className:a.support_team?"item":"item strike",children:[(0,s.jsx)(o.Z,{defaultChecked:a.support_team,onChange:e=>l("support_team",e)}),"Support"]})]}),(0,s.jsx)("button",{children:d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"loading mini"}),"Saving..."]}):"Save"})]})}var l=a(2742);function d(){(0,i.useEffect)(()=>{a()},[]);let[e,t]=(0,i.useState)([]);async function a(){let e=await (0,n.KF)();e.data&&t(e.data.pricePlans)}return(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:"main-content",children:[(0,s.jsx)("h1",{children:"Pricing"}),(0,s.jsx)("div",{className:"pricing-holder",children:e.map((e,t)=>(0,s.jsx)(c,{data:e},t))})]})})}},3478:function(){}},function(e){e.O(0,[640,121,742,774,888,179],function(){return e(e.s=4105)}),_N_E=e.O()}]);