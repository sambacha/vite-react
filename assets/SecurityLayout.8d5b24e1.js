import{u as f,r as u,j as e,l as d,F as m}from"./react-venders.fcc360bb.js";import{ag as g,al as l,am as h}from"./index.825e2bea.js";const j=({children:n})=>{const{state:t,connectedState:o,dispatch:s}=g({module:"me",connect:{loading:["me/fetchMe"]}}),c=o.loading["me/fetchMe"],r=f(),a=t&&!!t.email,i=l({redirect:window.location.href});return u.exports.useEffect(()=>{s("fetchMe")},[]),!a||c?e(h,{}):!a&&r.pathname!=="/user/login"?e(d,{to:`/user/login?${i}`}):e(m,{children:n})};export{j as default};
