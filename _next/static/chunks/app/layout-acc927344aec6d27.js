(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7089:function(e,t,l){Promise.resolve().then(l.bind(l,3395))},3395:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return R}});var s=l(7437),n=l(2265),a=l(1444),i=l(9753);let r=(0,i.oM)({name:"navbar",initialState:{activeRoute:"Dashboard"},reducers:{setActiveRoute:(e,t)=>{e.activeRoute=t.payload}}}),{setActiveRoute:o}=r.actions;var c=r.reducer;let u=(0,i.xC)({reducer:{navbar:c}});var d=function(e){let{children:t}=e;return(0,s.jsx)(a.zt,{store:u,children:t})};l(3054);var m=l(6463),x=l(7261),f=l(7138);l(6964);var h=l(1827);l(3340);var v=()=>{let[e,t]=(0,n.useState)(!1),[l,s]=(0,n.useState)(!1);return{iconVariants:{open:{rotate:0,transition:{type:"spring",stiffness:260,damping:20}},closed:{rotate:180,transition:{type:"spring",stiffness:260,damping:20}}},toggleMenu:()=>{s(!l)},showMenu:l,setShowMenu:s,modal:{isVisible:e,setIsVisible:t,onClose:()=>t(!1)},visible:e,setVisible:t}},g=l(3580);l(4193);var b=l(361),j=()=>{let[e,t]=(0,n.useState)([]),l=(0,m.useRouter)(),s=async()=>{await b.Z.get("/menu",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(e=>{t(e.data.data)}).catch(e=>{console.log(e),l.push("/login"),localStorage.removeItem("token")})},i=(0,m.usePathname)(),[r,c]=(0,n.useState)(0),[u,d]=(0,n.useState)(!1),x=(0,a.I0)(),f=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),h=e=>{x(o(e))},v=()=>{let e=i.split("/");return e.length<3?null:f(e[2].replace(/_/g," ").slice())},g=()=>{if("/"!==i){let e=i.split("/"),t=f((e.length>1?e[1]:"/Dashboard").replace(/[_]/g," ").slice());h(t),console.log(t)}else h("Dashboard")},j=(0,a.v9)(e=>{var t;return null===(t=e.navbar)||void 0===t?void 0:t.activeRoute});return console.log("active",j),(0,n.useEffect)(()=>{g(),v(),s(),c(window.innerHeight),console.log(window.innerHeight),console.log("yahaha",v());let e=()=>{c(window.innerHeight)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[i]),{menu:null==e?void 0:e.map(e=>{var t;return{icon:e.icon,iconActive:e.active_icon,name:e.menu,link:e.path,subMenu:null===(t=e.SubMenu)||void 0===t?void 0:t.map(e=>({nama:e.subMenu,link:e.path}))}}),activeRoute:j,pathName:i,patchRoute:h,secondSegment:v(),extend:u,setExtend:d,innerHeight:r,setInnerHeight:c}},p=e=>{var t;let{isVisible:l,setIsVisible:n,onClose:a}=e;(0,m.useRouter)();let i=j();return v(),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"".concat(l?" z-20  fixed lg:hidden flex w-full h-full overlow-hidden duration-500 flex-row backdrop-blur-sm justify-end ":" z-20 fixed w-[0] h-full md:hidden flex duration-500 justify-end "," mt-[10vh] "),children:[(0,s.jsx)("div",{onClick:()=>a(),className:"".concat(l?"bg-black md:w-full w-1/3 duration-500 ":" bg-black h-full w-0 duration-500 ","  bg-opacity-50 h-full ")}),(0,s.jsx)("div",{className:"".concat(l?" bg-white md:w-1/3 w-full pr-2 h-full flex border-tl-8 items-start justify-between duration-500 flex-col":" bg-white h-full w-0 flex duration-500 flex-col","   "),children:(0,s.jsxs)("div",{className:"".concat(l?"overflow-y-scroll":"hidden"," h-[85%] bottom-10 pt-5 md:pb-10 pb-0 flex items-start flex-col"),children:[null===(t=i.menu)||void 0===t?void 0:t.map((e,t)=>{var l,n,a,r,o;return(0,s.jsxs)("div",{className:"flex-col w-full flex justify-start items-center px-5 ",children:[(null===(l=e.subMenu)||void 0===l?void 0:l.length)==null||(null===(n=e.subMenu)||void 0===n?void 0:n.length)==0?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(f.default,{href:e.link,className:"".concat(e.name===i.activeRoute?"active flex w-full bg-[#F1F5FF] px-5 my-2 py-3 flex-row justify-start items-center":"flex w-full bg-white my-2 py-3 flex-row justify-start items-center"),children:[e.name===i.activeRoute?(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.iconActive}):(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.icon}),(0,s.jsx)("h5",{className:"".concat(e.name===i.activeRoute?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:e.name})]})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(f.default,{href:"".concat(e.link).concat((null==e?void 0:e.subMenu)&&(null===(a=e.subMenu[0])||void 0===a?void 0:a.link)),onClick:()=>{let t=i.activeRoute===e.name;i.setExtend(!!t&&!i.extend)},className:"".concat(e.name===i.activeRoute?"active flex w-full bg-[#F1F5FF] my-2 py-3 flex-row justify-start items-center":"flex w-full bg-white my-2 py-3 flex-row justify-start items-center"),children:[e.name===i.activeRoute?(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.iconActive}):(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.icon}),(0,s.jsx)("h5",{className:"".concat(e.name===i.activeRoute?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:e.name})]})}),(null==e?void 0:e.subMenu)&&(null===(r=e.subMenu)||void 0===r?void 0:r.length)>0&&i.activeRoute===e.name&&(0,s.jsx)("div",{className:"duration-500 fade-in w-full border-l-4 border-[#408EFD]  flex flex-col",children:null===(o=e.subMenu)||void 0===o?void 0:o.map((t,l)=>(0,s.jsx)(f.default,{href:"".concat(e.link).concat(t.link),className:"w-full justify-start px-5 items-center flex py-2",children:(0,s.jsx)("p",{className:"".concat(t.nama===i.secondSegment?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:t.nama})},l))})]},t)}),(0,s.jsx)("div",{className:"w-full justify-start px-5 items-center flex py-2 ",children:(0,s.jsxs)(f.default,{href:"/login",onClick:()=>{localStorage.removeItem("token"),localStorage.removeItem("role"),g.Am.success("Berhasil Logout! | Terima kasih",{position:"top-right"})},className:"w-full text-[#A2A2A2] justify-start items-center  flex py-2",children:[" ",(0,s.jsx)("div",{children:(0,s.jsx)(x.Iw6,{className:"mr-2"})}),"Log Out"]})})]})})]})})},w=l(5027),y=l(5097),N=()=>{let e=j(),t=v();return(0,a.I0)(),console.log(e.activeRoute),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{isVisible:t.modal.isVisible,setIsVisible:t.modal.setIsVisible,onClose:()=>t.modal.setIsVisible(!1)}),(0,s.jsx)("div",{className:"width p-7 fixed sm:ml-0 flex  h-[10vh] w-full border-b-[1px] border-[#A2A2A2] md:w-[100%]  bg-[#FFFFFF] z-10",children:(0,s.jsxs)("div",{className:" w-full flex flex-row justify-between",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("h5",{className:"text-[#408EFD] text-lg font-bold lg:flex hidden",children:"".concat(e.activeRoute," ").concat(null!==e.secondSegment?"| ".concat(e.secondSegment):"")}),(0,s.jsx)("div",{className:"lg:hidden flex justify-center items-center pr-3",children:(0,s.jsx)("img",{className:"w-10 h-10`",src:"/logo.png",loading:"lazy",alt:"logo"})}),(0,s.jsx)("div",{className:"lg:w-15 lg:hidden flex justify-center items-center",children:(0,s.jsx)("h3",{className:"text-2xl font-semibold",children:"SEBESI"})})]}),(0,s.jsx)("div",{className:"lg:flex hidden  justify-center items-center",children:(0,s.jsx)(f.default,{href:"/login",children:(0,s.jsx)(x.Iw6,{onClick:()=>{localStorage.removeItem("token"),localStorage.removeItem("role"),g.Am.success("Berhasil Logout! | Terima kasih",{position:"top-right"})},className:"w-6 h-6"})})}),(0,s.jsx)("div",{className:"lg:hidden flex flex-row  h-full justify-end items-center lg:w-3/4 w-1/2",children:(0,s.jsx)(h.E.div,{onClick:()=>{t.modal.setIsVisible(!t.modal.isVisible),t.toggleMenu()},className:"flex  items-center  cursor-pointer  p-2",variants:t.iconVariants,initial:!1,animate:t.showMenu?"open":"closed",children:!0==t.modal.isVisible?(0,s.jsx)(y.IOM,{className:"z-30 text-blue-500 w-9 h-9"}):(0,s.jsx)(w.vHB,{className:"z-30  text-blue-500 w-7 h-7"})})})]})})]})};l(2819);var F=()=>{var e;let t=j();return(0,s.jsxs)("div",{className:"lg:w-96 bg-[#FAFAFAF] lg:flex hidden flex-col duration-500 min-h-screen border-r-[1px] border-[#A2A2A2]",children:[(0,s.jsxs)("div",{className:"fixed w-full bg-[#FFFFFF] xl:w-[18rem] lg:w-[17rem] justify-start pl-7 flex h-[10vh]",children:[(0,s.jsx)("div",{className:" flex justify-center items-center pr-3",children:(0,s.jsx)("img",{className:"w-10 h-10`",src:"/logo.png",alt:"logo",loading:"lazy"})}),(0,s.jsx)("div",{className:"lg:w-15 flex justify-center items-center",children:(0,s.jsx)("h3",{className:"text-2xl font-semibold",children:"SEBESI"})})]}),(0,s.jsx)("div",{className:"overflow-y-auto w-full flex-col  pt-[10vh] pb-10  h-full",children:null===(e=t.menu)||void 0===e?void 0:e.map((e,l)=>{var n,a,i,r,o;return(0,s.jsxs)("div",{className:"flex-col flex justify-start items-center px-5 ",children:[(null===(n=e.subMenu)||void 0===n?void 0:n.length)==null||(null===(a=e.subMenu)||void 0===a?void 0:a.length)==0?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(f.default,{href:e.link,className:"".concat(e.name===t.activeRoute?"active flex w-full bg-[#F1F5FF] px-2 my-2 py-3 flex-row justify-start items-center":"flex w-full bg-white my-2 py-3 flex-row justify-start items-center"),children:[e.name===t.activeRoute?(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.iconActive}):(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.icon}),(0,s.jsx)("h5",{className:"".concat(e.name===t.activeRoute?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:e.name})]})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(f.default,{href:"".concat(e.link).concat((null==e?void 0:e.subMenu)&&(null===(i=e.subMenu[0])||void 0===i?void 0:i.link)),onClick:()=>{let l=t.activeRoute===e.name;t.setExtend(!!l&&!t.extend)},className:"".concat(e.name===t.activeRoute?"active flex w-full bg-[#F1F5FF] my-2 py-3 flex-row justify-start items-center":"flex w-full bg-white my-2 py-3 flex-row justify-start items-center"),children:[e.name===t.activeRoute?(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.iconActive}):(0,s.jsx)("img",{className:"w-5 h-5 mr-2",src:e.icon}),(0,s.jsx)("h5",{className:"".concat(e.name===t.activeRoute?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:e.name})]})}),(null==e?void 0:e.subMenu)&&(null===(r=e.subMenu)||void 0===r?void 0:r.length)>0&&t.activeRoute===e.name&&(0,s.jsx)("div",{className:"duration-500 fade-in w-full border-l-4 border-[#408EFD]  flex flex-col",children:null===(o=e.subMenu)||void 0===o?void 0:o.map((l,n)=>(0,s.jsx)(f.default,{href:"".concat(e.link).concat(l.link),className:"w-full py-2 justify-start px-5 items-center flex py-2",children:(0,s.jsx)("p",{className:"".concat(l.nama===t.secondSegment?"lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer":"lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"," hover:text-neutral-500 "),children:l.nama})},n))})]},l)})})]})};let A=e=>{let{children:t}=e,l=["/forgot_password","/login"].includes((0,m.usePathname)());return(0,s.jsxs)("div",{className:"flex h-screen overflow-hidden w-full",children:[!l&&(0,s.jsx)(F,{}),(0,s.jsxs)("div",{className:"flex flex-col w-[100%] overflow-x-hidden",children:[!l&&(0,s.jsx)(N,{}),t]})]})};var k=l(8507);function R(e){let{children:t}=e;return(0,k.R)(),(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{children:[(0,s.jsx)(d,{children:(0,s.jsx)(A,{children:t})}),(0,s.jsx)(g.Ix,{})]})})}},8507:function(e,t,l){"use strict";l.d(t,{R:function(){return a}});var s=l(2265),n=l(6463);let a=()=>{let e=(0,n.useRouter)(),t=localStorage.getItem("token"),l=(0,n.usePathname)();(0,s.useEffect)(()=>{null!==t?"/login"==l?e.push("/"):e.push(l):e.push("/login")},[e,t])}},361:function(e,t,l){"use strict";l.d(t,{H:function(){return i}});var s=l(2126);let n="",a=s.Z.create({baseURL:"https://inspektorat-dev.agriciatech.com/api/v1"}),i=()=>{let e=localStorage.getItem("token");e&&(n=e,a.defaults.headers.common.Authorization="Bearer ".concat(n))};a.interceptors.request.use(e=>(e.headers.Accept="application/json",e)),t.Z=a},3054:function(){},6964:function(){},2819:function(){},3340:function(){}},function(e){e.O(0,[563,706,212,505,126,580,811,747,971,23,744],function(){return e(e.s=7089)}),_N_E=e.O()}]);