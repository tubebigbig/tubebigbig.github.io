(window["webpackJsonpf2e-6"]=window["webpackJsonpf2e-6"]||[]).push([[0],[,function(e,t,a){e.exports={Logo:"roominfo_Logo__W1XH3",photowall:"roominfo_photowall__3ESE8",left:"roominfo_left__FjFWW",righttop:"roominfo_righttop__1-1oK",rightbottom:"roominfo_rightbottom__1KbBx",main:"roominfo_main__1EKeW",roomdetail:"roominfo_roomdetail__3wFua",descript:"roominfo_descript__SiyVi",slashbox:"roominfo_slashbox__37uba",slash:"roominfo_slash__1nyVO",checktime:"roominfo_checktime__3-Tlj",checkin:"roominfo_checkin__2N6wU",checkout:"roominfo_checkout__15PyY",roomservice:"roominfo_roomservice__3FZLJ",use:"roominfo_use__2fhv7",price:"roominfo_price__3mmRg",NormalPrice:"roominfo_NormalPrice__2qvFS",HolidayPrice:"roominfo_HolidayPrice__rJDQd",pricetext:"roominfo_pricetext__2Msrq",right:"roominfo_right__34l3J",calendarbox:"roominfo_calendarbox__2itmP",reserve:"roominfo_reserve__TR-u5"}},,,,,,function(e,t,a){e.exports={room:"roomlist_room__2UMcZ",roomlist:"roomlist_roomlist__Klmiq",top:"roomlist_top__3Hu8S",bottom:"roomlist_bottom__7o1v6",normalDayPrice:"roomlist_normalDayPrice__1CoLn",holidayPrice:"roomlist_holidayPrice__21Ehc",focus:"roomlist_focus__3VcPg"}},,,,,,,,,function(e,t,a){e.exports={loading:"loading_loading__qIK4Q",color:"loading_color__czkJ6",top:"loading_top__1qT6p"}},,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo_block.d4ac2160.svg"},function(e,t,a){e.exports=a.p+"static/media/wifi.7e9c444b.svg"},function(e,t,a){e.exports=a.p+"static/media/phone.16543ec9.svg"},function(e,t,a){e.exports=a.p+"static/media/mountain-range.ad2b689a.svg"},function(e,t,a){e.exports=a.p+"static/media/breakfast.c4c2c972.svg"},function(e,t,a){e.exports=a.p+"static/media/breeze.410d1c42.svg"},function(e,t,a){e.exports=a.p+"static/media/no-smoke-symbol.74436c49.svg"},function(e,t,a){e.exports=a.p+"static/media/bar.92950803.svg"},function(e,t,a){e.exports=a.p+"static/media/crawling-baby-silhouette.c76c9ad5.svg"},function(e,t,a){e.exports=a.p+"static/media/room_service.ef31df00.svg"},function(e,t,a){e.exports=a.p+"static/media/dog.6a06afa1.svg"},function(e,t,a){e.exports=a.p+"static/media/logo_white.2540fc08.svg"},function(e,t,a){e.exports=a.p+"static/media/facebook-square-brands.7df7570f.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram-brands.cc5e92b0.svg"},function(e,t,a){e.exports=a(79)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(32),r=a.n(l),i=(a(54),a(9)),s=a(10),c=a(12),m=a(11),h=a(13),d=a(19),u=a.n(d);function g(e,t){t?u()({method:"get",url:"https://challenge.thef2e.com/api/thef2e2019/stage6/room/"+t,headers:{Authorization:"Bearer uGgMerZ8HTve2skPF3h257rTHfJTPWPZlkpkFz69qY06EI06JRvNPwDgxvKj",Accept:"application/json"}}).then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}):u()({method:"get",url:"https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",headers:{Authorization:"Bearer uGgMerZ8HTve2skPF3h257rTHfJTPWPZlkpkFz69qY06EI06JRvNPwDgxvKj",Accept:"application/json"}}).then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})}var p=a(7),E=a.n(p),_=a(14);function y(){var e=(new Date).getDay();return console.log(e),0===e||6===e}var f=function(e){return o.a.createElement("div",{className:E.a.room},0!==Object.getOwnPropertyNames(e.roominfo).length&&e.roominfo.items.map(function(e,t){return o.a.createElement(_.b,{to:{pathname:"/roominfo/",state:{roomid:e.id}},className:E.a.roomlist,key:t},o.a.createElement("div",{className:E.a.top},o.a.createElement("img",{src:e.imageUrl,alt:"roomlist"})),o.a.createElement("div",{className:E.a.bottom},o.a.createElement("p",null,e.name),o.a.createElement("span",{className:E.a.normalDayPrice+" "+(!y&&E.a.focus)},"NT."+e.normalDayPrice,o.a.createElement("span",null,"\u5e73\u65e5")),o.a.createElement("span",{className:E.a.holidayPrice+" "+(y&&E.a.focus)},"NT."+e.holidayPrice,o.a.createElement("span",null,"\u5047\u65e5"))))}))},v=a(16),N=a.n(v),b=function(e){return o.a.createElement("div",{className:e.loading?N.a.loading:null},o.a.createElement("div",{className:N.a.color}),o.a.createElement("div",{className:N.a.color}),o.a.createElement("div",{className:N.a.color}),o.a.createElement("div",{className:N.a.color}))},k=(a(77),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={month_olympic:[31,29,31,30,31,30,31,31,30,31,30,31],month_normal:[31,28,31,30,31,30,31,31,30,31,30,31]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.holder=document.getElementById("days"),this.prev=document.getElementById("prev"),this.next=document.getElementById("next"),this.ctitle=document.getElementById("calendar-title"),this.cyear=document.getElementById("calendar-year"),this.my_date=new Date,this.my_year=this.my_date.getFullYear(),this.my_month=this.my_date.getMonth(),this.my_day=this.my_date.getDate(),this.handleRefreshDate()}},{key:"handleRefreshDate",value:function(){this.str="",this.totalDay=this.handleDayMonth(this.my_month,this.my_year),this.firstDay=this.handleDayStart(this.my_month,this.my_year),this.myclass="";for(var e=1;e<this.firstDay;e++)this.str+="<li></li>";for(var t=1;t<=this.totalDay;t++)t<this.my_day&&this.my_year===this.my_date.getFullYear()&&this.my_month===this.my_date.getMonth()||this.my_year<this.my_date.getFullYear()||this.my_year===this.my_date.getFullYear()&&this.my_month<this.my_date.getMonth()?this.myclass=" class='lightgrey'":t===this.my_day&&this.my_year===this.my_date.getFullYear()&&this.my_month===this.my_date.getMonth()?this.myclass=" class='green greenbox'":this.myclass=" class='darkgrey'",this.str+="<li"+this.myclass+">"+t+"</li>";this.holder.innerHTML=this.str,this.ctitle.innerHTML=this.my_month+1,this.cyear.innerHTML=this.my_year}},{key:"handleDayStart",value:function(e,t){return new Date(t,e,1).getDay()}},{key:"handleDayMonth",value:function(e,t){return t%4!==0||t%100===0&&t%400!==0?this.state.month_normal[e]:this.state.month_olympic[e]}},{key:"handlePrev",value:function(e){e.preventDefault(),this.my_month--,this.my_month<0&&(this.my_year--,this.my_month=11),this.handleRefreshDate()}},{key:"handleNext",value:function(e){e.preventDefault(),this.my_month++,this.my_month>11&&(this.my_year++,this.my_month=0),this.handleRefreshDate()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"calendar"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"titleflex"},o.a.createElement("div",{className:"green small",id:"calendar-year"},"Year")," / ",o.a.createElement("div",{className:"green",id:"calendar-title"},"Month")),o.a.createElement("div",{className:"prev",onClick:function(t){return e.handlePrev(t)},id:"prev"},"\u276e"),o.a.createElement("div",{className:"next",onClick:function(t){return e.handleNext(t)},id:"next"},"\u276f")),o.a.createElement("div",{className:"body"},o.a.createElement("div",{className:"lightgrey body-list"},o.a.createElement("ul",null,o.a.createElement("li",null,"MON"),o.a.createElement("li",null,"TUE"),o.a.createElement("li",null,"WED"),o.a.createElement("li",null,"THU"),o.a.createElement("li",null,"FRI"),o.a.createElement("li",null,"SAT"),o.a.createElement("li",null,"SUN"))),o.a.createElement("div",{className:"darkgrey body-list"},o.a.createElement("ul",{id:"days"}))))}}]),t}(n.Component)),P=a(1),x=a.n(P),O=a(35),w=a.n(O),D=a(36),j=a.n(D),F=a(37),C=a.n(F),S=a(38),I=a.n(S),M=a(39),T=a.n(M),B=a(40),H=a.n(B),W=a(41),A=a.n(W),R=a(42),q=a.n(R),L=a(43),J=a.n(L),U=a(44),Y=a.n(U),z=a(45),K=a.n(z),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,amenities:{},checkInAndOut:{},description:"",descriptionShort:{},holidatPrice:0,id:"",photo:[],name:"",normalDayPrice:0,scrolling:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g(function(t){console.log(t),e.setState({amenities:t.room[0].amenities,checkInAndOut:t.room[0].checkInAndOut,description:t.room[0].description,descriptionShort:t.room[0].descriptionShort,holidayPrice:t.room[0].holidayPrice,id:t.room[0].id,photo:t.room[0].imageUrl,name:t.room[0].name,normalDayPrice:t.room[0].normalDayPrice,loading:!1})},this.props.location.state.roomid)}},{key:"handleCheckdata",value:function(e){return 0!==Object.getOwnPropertyNames(e).length}},{key:"render",value:function(){var e=this.state;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{loading:e.loading}),o.a.createElement(_.b,{to:"/",className:x.a.Logo},o.a.createElement("img",{src:w.a,alt:"LogoBlock"})),o.a.createElement("div",{className:x.a.photowall},o.a.createElement("div",{className:x.a.left},o.a.createElement("img",{src:e.photo.length>0?e.photo[0]:null,alt:"photowall"})),o.a.createElement("div",{className:x.a.righttop},o.a.createElement("img",{src:e.photo.length>0?e.photo[1]:null,alt:"photowall"})),o.a.createElement("div",{className:x.a.rightbottom},o.a.createElement("img",{src:e.photo.length>0?e.photo[2]:null,alt:"photowall"}))),o.a.createElement("div",{className:x.a.main},o.a.createElement("div",{className:x.a.left},o.a.createElement("div",{className:x.a.roomdetail},o.a.createElement("h1",null,e.name?e.name:"What's Room"),this.handleCheckdata.bind(this,e.descriptionShort)?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"\u623f\u5ba2\u4eba\u6578\u9650\u5236: "+e.descriptionShort.GuestMin+"~"+e.descriptionShort.GuestMax+" \u4eba"),o.a.createElement("p",null,"\u5e8a\u578b: "+e.descriptionShort.Bed),o.a.createElement("p",null,"\u885b\u6d74\u6578\u91cf: "+e.descriptionShort["Private-Bath"]+" \u9593"),o.a.createElement("p",null,"\u623f\u9593\u5927\u5c0f: "+e.descriptionShort.Footage+" \u5e73\u5206\u516c\u5c3a")):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"\u623f\u5ba2\u4eba\u6578\u9650\u5236:0~0\u4eba"),o.a.createElement("p",null,"\u5e8a\u578b:no data"),o.a.createElement("p",null,"\u885b\u6d74\u6578\u91cf:0\u9593"),o.a.createElement("p",null,"\u623f\u9593\u5927\u5c0f:0\u5e73\u5206\u516c\u5c3a")),o.a.createElement("div",{className:x.a.descript},e.description?e.description:"none"),o.a.createElement("div",{className:x.a.slashbox},o.a.createElement("div",{className:x.a.slash}),o.a.createElement("div",{className:x.a.slash}),o.a.createElement("div",{className:x.a.slash})),o.a.createElement("div",{className:x.a.checktime},this.handleCheckdata.bind(this,e.checkInAndOut)?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:x.a.checkin},e.checkInAndOut.checkInEarly+" \u2014 "+e.checkInAndOut.checkInLate),o.a.createElement("div",{className:x.a.checkout},e.checkInAndOut.checkOut)):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:x.a.checkin},"00:00 \u2014 00:00"),o.a.createElement("div",{className:x.a.checkout},"00:00"))),o.a.createElement("table",{className:x.a.roomservice},this.handleCheckdata.bind(this,e.amenities)?o.a.createElement(o.a.Fragment,null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{className:e.amenities["Wi-Fi"]?x.a.use:""},o.a.createElement("img",{src:j.a,alt:"wi-fi"}),"Wi-Fi"),o.a.createElement("td",{className:e.amenities.Television?x.a.use:""},o.a.createElement("img",{src:C.a,alt:"tel"}),"\u96fb\u8a71"),o.a.createElement("td",{className:e.amenities["Great-View"]?x.a.use:""},o.a.createElement("img",{src:I.a,alt:"nice view"}),"\u6f02\u4eae\u7684\u8996\u91ce")),o.a.createElement("tr",null,o.a.createElement("td",{className:e.amenities.Breakfast?x.a.use:""},o.a.createElement("img",{src:T.a,alt:"breakfast"}),"\u65e9\u9910"),o.a.createElement("td",{className:e.amenities["Air-Conditioner"]?x.a.use:""},o.a.createElement("img",{src:H.a,alt:"Breeze"}),"\u7a7a\u8abf"),o.a.createElement("td",{className:e.amenities["Smoke-Free"]?x.a.use:""},o.a.createElement("img",{src:A.a,alt:"nosmoke"}),"\u7981\u6b62\u5438\u83f8")),o.a.createElement("tr",null,o.a.createElement("td",{className:e.amenities["Mini-Bar"]?x.a.use:""},o.a.createElement("img",{src:q.a,alt:"bar"}),"Mini Bar"),o.a.createElement("td",{className:e.amenities.Refrigerator?x.a.use:""},o.a.createElement("img",{src:"",alt:"refrigerator"}),"\u51b0\u7bb1"),o.a.createElement("td",{className:e.amenities["Child-Friendly"]?x.a.use:""},o.a.createElement("img",{src:J.a,alt:"child"}),"\u9069\u5408\u5152\u7ae5")),o.a.createElement("tr",null,o.a.createElement("td",{className:e.amenities["Room-Service"]?x.a.use:""},o.a.createElement("img",{src:Y.a,alt:"service"}),"Room Service"),o.a.createElement("td",{className:e.amenities.Sofa?x.a.use:""},o.a.createElement("img",{src:"",alt:"sofa"}),"\u6c99\u767c"),o.a.createElement("td",{className:e.amenities["Pet-Friendly"]?x.a.use:""},o.a.createElement("img",{src:K.a,alt:"Pet"}),"\u5bf5\u7269\u651c\u5e36")))):null)),o.a.createElement("div",{className:x.a.price},o.a.createElement("div",{className:x.a.NormalPrice},"NT."+e.normalDayPrice,o.a.createElement("div",{className:x.a.pricetext},"\u5e73\u65e5(\u4e00~\u56db)")),o.a.createElement("div",{className:x.a.HolidayPrice},"NT."+e.holidayPrice,o.a.createElement("div",{className:x.a.pricetext},"\u5047\u65e5(\u4e94~\u65e5)")))),o.a.createElement("div",{className:x.a.right},o.a.createElement("div",{className:x.a.calendarbox},o.a.createElement(k,null)),o.a.createElement("button",{className:x.a.reserve},"\u9810\u7d04\u6642\u6bb5"))))}}]),t}(n.Component),G=a(8),V=a(46),Q=a.n(V),X=a(47),$=a.n(X),ee=a(48),te=a.n(ee),ae=(a(78),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={data:{},loading:!0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;0===Object.getOwnPropertyNames(this.state.data).length&&(g(function(t){e.setState({data:t,loading:!1})}),this.Carouseltime=1,this.car=document.getElementById("Carousel"),this.Carousel=setInterval(function(){e.Carouseltime>5&&(e.Carouseltime=0),e.car.classList.value="Carousel",e.car.classList.add("choose-"+e.Carouseltime),e.Carouseltime++},5e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.Carousel)}},{key:"handleClick",value:function(e){console.log(0===Object.getOwnPropertyNames(e.state.data).length)}},{key:"render",value:function(){var e=this.state;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{loading:this.state.loading}),o.a.createElement("div",{className:"Carousel",id:"Carousel"},o.a.createElement("ul",null,0!==Object.getOwnPropertyNames(e.data).length&&e.data.items.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("img",{src:e.imageUrl,alt:"roomphoto"}))})),o.a.createElement("div",{className:"HomeContent"},o.a.createElement("div",{className:"Homeflex"},o.a.createElement("div",{className:"HomeTop"},o.a.createElement("img",{src:Q.a,alt:"logo"})),o.a.createElement("div",{className:"HomeBottom"},o.a.createElement("div",{className:"left"},o.a.createElement("img",{src:te.a,alt:"logo"}),o.a.createElement("img",{src:$.a,alt:"logo"})),o.a.createElement("div",{className:"right"},o.a.createElement("p",null,"02-1234567"),o.a.createElement("p",null,"Whitespace@whitespace.com.tw"),o.a.createElement("p",null,"\u53f0\u5317\u5e02\u7684\u6df1\u5c71\u88e1")))))),o.a.createElement(f,{roominfo:this.state.data}))}}]),t}(n.Component)),ne=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(_.a,null,o.a.createElement(G.a,{path:"./",exact:!0,component:ae}),o.a.createElement(G.a,{path:"./roominfo/",component:Z}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[49,1,2]]]);
//# sourceMappingURL=main.43b55b71.chunk.js.map