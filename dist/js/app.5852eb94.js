(function(t){function e(e){for(var i,c,r=e[0],o=e[1],l=e[2],u=0,p=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},s=[];function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/WeatherApp/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00c3":function(t,e,a){"use strict";a("29b0")},"0420":function(t,e,a){t.exports=a.p+"media/03n.d323b925.mp4"},"0698":function(t,e,a){t.exports=a.p+"media/09n.dd9c4f11.mp4"},"086e":function(t,e,a){},"0cff":function(t,e,a){t.exports=a.p+"media/10n.dd9c4f11.mp4"},"0da8":function(t,e,a){t.exports=a.p+"media/04d.fbf57056.mp4"},"10fc":function(t,e,a){},1925:function(t,e,a){"use strict";a("a6db")},"20c6":function(t,e,a){"use strict";a("d67c")},"25e5":function(t,e,a){"use strict";a("ef14")},"29b0":function(t,e,a){},"30d5":function(t,e,a){"use strict";a("086e")},"417e":function(t,e,a){t.exports=a.p+"media/11d.dd9c4f11.mp4"},"4c58":function(t,e,a){t.exports=a.p+"media/02n.d323b925.mp4"},"54ef":function(t,e,a){t.exports=a.p+"media/13d.7d6eb41b.mp4"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("div",{staticClass:"main"},[t.isLoading?a("div",{staticClass:"loading"},[a("span")]):a("div",{staticClass:"app"},[a("notifications",{attrs:{group:"foo",position:"bottom right"}}),a("Navigation",{attrs:{addCityActive:t.addCityActive,isDay:t.isDay,isNight:t.isNight},on:{"add-city":function(e){t.modalOpen=!t.modalOpen},"edit-city":function(e){t.edit=!t.edit}}}),t.modalOpen?a("Modal",{attrs:{cities:t.cities},on:{"close-modal":function(e){t.modalOpen=!t.modalOpen}}}):t._e(),a("router-view",{attrs:{cities:t.cities,edit:t.edit,isDay:t.isDay,isNight:t.isNight},on:{"is-day":function(e){t.isDay=!t.isDay},"is-night":function(e){t.isNight=!t.isNight},resetDays:t.resetDays,"add-city":t.testFunction}})],1)])])},s=[],c=a("1da1"),r=(a("96cf"),a("d3b7"),a("159b"),a("99af"),a("4de4"),a("b0c0"),a("bc3a")),o=a.n(r),l=a("4f60"),d=(a("1862"),a("256a"),{apiKey:"AIzaSyARlD1cYBjeuuDrA051qI28sVmpUJQuGSs",authDomain:"weatherapp-b3c48.firebaseapp.com",projectId:"weatherapp-b3c48",storageBucket:"weatherapp-b3c48.appspot.com",messagingSenderId:"863544097692",appId:"1:863544097692:web:6a972ebef53b97ff0b6659"}),u=l["a"].initializeApp(d),p=u.firestore(),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.addCityActive?a("header",{staticClass:"container add-city"},[a("nav",[a("router-link",{staticClass:"link",attrs:{to:{name:t.AddCity}}},[t._v("Weather App")]),a("div",{staticClass:"right"},[a("i",{ref:"editCities",staticClass:"far fa-edit",on:{click:t.editCity}}),a("i",{staticClass:"fas fa-sync",on:{click:t.reloadApp}}),a("i",{staticClass:"fas fa-plus",on:{click:t.addCity}})])],1)]):t._e(),t.addCityActive?t._e():a("header",{staticClass:"container",class:{day:t.isDay,night:t.isNight}},[a("nav",[a("router-link",{staticClass:"link",attrs:{to:{name:"AddCity"}}},[a("i",{staticClass:"fas fa-times-circle"})]),a("span",[t._v(" "+t._s((new Date).toLocaleString())+" ")]),a("span",[t._v(" °C ")])],1)])])},h=[],m={name:"Navigation",props:["addCityActive","isDay","isNight"],methods:{addCity:function(){this.$emit("add-city")},reloadApp:function(){location.reload()},editCity:function(){this.$refs.editCities.classList.toggle("edit-active"),this.$emit("edit-city")}}},y=m,v=(a("d3c3"),a("2877")),g=Object(v["a"])(y,f,h,!1,null,"198c8563",null),_=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"modal",staticClass:"modal",on:{click:t.closeModal}},[a("div",{ref:"modalWrap",staticClass:"modal-wrap"},[a("label",{attrs:{for:"city-name"}},[t._v("Enter Location:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],attrs:{type:"text",name:"city-name",placeholder:"Warszawa/Warsaw"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),a("button",{on:{click:t.addCity}},[t._v("Add "),a("i",{staticClass:"fas fa-plus"})]),a("button",{ref:"x",staticClass:"mar",on:{click:t.closeModal}},[t._v("Cancel "),a("i",{staticClass:"far fa-window-close"})])])])},b=[],w={name:"modal",props:["cities"],data:function(){return{city:"",apiKey:"ffce0cb1622ed4c6cc1ba7238e3dd846"}},methods:{closeModal:function(t){t.target===this.$refs.x&&this.$emit("close-modal"),t.target===this.$refs.modal&&t.target!==this.$refs.x&&this.$emit("close-modal")},addCity:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t.cities),""!==t.city){e.next=4;break}return t.$notify({group:"foo",title:"Info",type:"danger",duration:5e3,text:"Input field cannot be empty"}),e.abrupt("return",!1);case 4:if(a=t.cities.filter((function(e){return e.city==t.city})),0==a.length){e.next=8;break}return t.$notify({group:"foo",title:"Info",type:"danger",duration:5e3,text:"We are sorry...".concat(t.city," already exists in your app.")}),e.abrupt("return",!1);case 8:return e.prev=8,e.next=11,o.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t.city,"&units=imperial&appid=").concat(t.apiKey,"&lang=pl"));case 11:return i=e.sent,e.next=14,i.data;case 14:n=e.sent,p.collection("cities").doc().set({city:t.city,currentWeather:n}).then((function(){t.$emit("close-modal"),t.$notify({group:"foo",title:"Info",type:"success",duration:5e3,text:"City has been addedd succesfully"})})),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](8),t.$notify({group:"foo",title:"Info",type:"danger",duration:5e3,text:"We are sory...".concat(t.city,", does not exist in our record. Please try again.")});case 21:case"end":return e.stop()}}),e,null,[[8,18]])})))()}}},D=w,x=(a("25e5"),Object(v["a"])(D,C,b,!1,null,"5f449396",null)),W=x.exports,k={name:"App",components:{Navigation:_,Modal:W},data:function(){return{isDay:null,isNight:null,apiKey:"ffce0cb1622ed4c6cc1ba7238e3dd846",cities:[],modalOpen:!1,edit:!1,addCityActive:null,isLoading:!0}},methods:{getCityWeather:function(){var t=this,e=p.collection("cities");e.onSnapshot((function(a){0==a.docs.length&&(t.isLoading=!1),a.docChanges().forEach(function(){var a=Object(c["a"])(regeneratorRuntime.mark((function a(i){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("added"!==i.type||i.doc.Nd){a.next=14;break}return a.prev=1,a.next=4,o.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(i.doc.data().city,"&units=imperial&appid=").concat(t.apiKey,"&lang=pl"));case 4:n=a.sent,s=n.data,e.doc(i.doc.id).update({currentWeather:s}).then((function(){t.cities.push(i.doc.data()),t.isLoading=!1})),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),console.log(a.t0);case 12:a.next=15;break;case 14:"added"===i.type&&i.doc.Nd?t.cities.push(i.doc.data()):"removed"===i.type&&(t.cities=t.cities.filter((function(t){return t.city!==i.doc.data().city})));case 15:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(t){return a.apply(this,arguments)}}())}))},testFunction:function(){console.log("ok"),this.modalOpen=!this.modalOpen,this.$notify({group:"foo",title:"Important message",text:"Hello user! This is a notification!"})},resetDays:function(){this.isDay=!1,this.isNight=!1},checkRoute:function(){"AddCity"===this.$route.name?this.addCityActive=!0:this.addCityActive=!1}},watch:{$route:function(){this.checkRoute()}},mounted:function(){this.checkRoute(),this.getCityWeather()}},$=k,O=(a("5c0b"),Object(v["a"])($,n,s,!1,null,null,null)),M=O.exports,A=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"grid"},t._l(t.cities,(function(e,i){return a("div",{key:i,staticClass:"city-link"},[0==i?a("div",{staticClass:"tap",on:{click:function(a){return t.goToWeather(e)}}},[t._m(0,!0)]):t._e(),a("City",{attrs:{city:e,edit:t.edit}})],1)})),0),0==t.cities.length?a("div",{staticClass:"no-cities"},[t._v(" Your cities list is empty, consider of adding your first city. "),a("button",{on:{click:t.addCity}},[t._v("Add City "),a("i",{staticClass:"fas fa-plus"})])]):t._e()])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("i",{staticClass:"far fa-hand-point-up"}),t._v("Tap to see weather details")])}],T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city",on:{click:t.goToWeather}},[t.edit?i("i",{ref:"edit",staticClass:"far fa-trash-alt edit",on:{click:t.removeCity}}):t._e(),i("span",{staticClass:"city-name"},[t._v(t._s(t.city.city))]),i("div",{staticClass:"weather"},[i("span",[t._v(t._s(Math.round((this.city.currentWeather.main.temp-32)/1.8))+"°")]),i("img",{attrs:{src:"http://openweathermap.org/img/wn/"+t.city.currentWeather.weather[0].icon+"@2x.png",alt:""}})]),i("div",{staticClass:"video"},[i("video",{attrs:{autoplay:"",muted:"",loop:"",src:a("f3b4")("./"+t.city.currentWeather.weather[0].icon+".mp4")},domProps:{muted:!0}}),i("div",{staticClass:"bg-overlay"})])])},N=[],S={name:"city",props:["city","edit"],created:function(){console.log(this.city)},data:function(){return{id:null}},methods:{removeCity:function(){var t=this;p.collection("cities").where("city","==","".concat(this.city.city)).get().then((function(e){e.forEach((function(e){t.id=e.id}))})).then((function(){p.collection("cities").doc(t.id).delete(),t.$notify({group:"foo",title:"Info",type:"success",duration:5e3,text:"City has been deleted succesfully"})}))},goToWeather:function(t){t.target===this.$refs.edit||this.$router.push({name:"Weather",params:{city:this.city.city}})}}},L=S,I=(a("1925"),Object(v["a"])(L,T,N,!1,null,"129fb08c",null)),P=I.exports,H={name:"AddCity",props:["cities","edit"],created:function(){},components:{City:P},methods:{addCity:function(){this.$emit("add-city")},goToWeather:function(t){this.$router.push({name:"Weather",params:{city:t.city}})}}},F=H,R=(a("20c6"),Object(v["a"])(F,j,E,!1,null,"2fabe2eb",null)),K=R.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t.loading?a("div",{staticClass:"loading"},[a("span")]):t._e(),t.loading?t._e():a("div",{staticClass:"weather",class:{day:t.isDay,night:t.isNight}},[a("div",{staticClass:"weather-wrap"},[a("CurrentWeather",{staticClass:"test",attrs:{currentWeather:t.currentWeather,isDay:t.isDay,isNight:t.isNight}}),a("HourlyWeather",{attrs:{forecast:t.forecast}}),a("WeeklyForecast",{attrs:{forecast:t.forecast},on:{"show-details-modal":function(e){return t.showDetailsModal(e)}}}),a("AdditionalInfo",{attrs:{currentWeather:t.currentWeather}}),t.modalDetailsOpen?a("ModalDetails",{staticClass:"modal",attrs:{singleDayDetails:t.singleDayDetails},on:{"close-details-modal":function(e){t.modalDetailsOpen=!t.modalDetailsOpen}}}):t._e()],1)])])},q=[],z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hourly-weather"},[i("div",{staticClass:"container",on:{scroll:function(e){t.showScrollIcon=!1}}},[t._l(t.filteredList,(function(t,e){return i("div",{key:e,staticClass:"hourly-temp"},[i("HourlyTemp",{attrs:{time:t}})],1)})),t.showScrollIcon?i("img",{staticClass:"scroll",attrs:{src:a("d026"),alt:""}}):t._e()],2)])},B=[],J=(a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hour"},[a("span",[t._v(t._s(t.newTime))]),a("span",[a("img",{attrs:{src:"http://openweathermap.org/img/wn/"+t.time.weather[0].icon+"@2x.png",alt:""}})]),a("span",[t._v(" "+t._s(Math.round((t.time.temp-32)/1.8))+"° ")])])}),Y=[],G={name:"HourlyTemp",props:["time"],computed:{newTime:function(){var t=new Date(1e3*this.time.dt).toLocaleTimeString();return t.substring(0,t.length-3)}}},Q=G,V=(a("30d5"),Object(v["a"])(Q,J,Y,!1,null,"23c65f34",null)),X=V.exports,Z={name:"HourlyWeather",props:["forecast"],data:function(){return{showScrollIcon:!0}},components:{HourlyTemp:X},created:function(){console.log(this.forecast)},computed:{filteredList:function(){return this.forecast.hourly.slice(0,33)}}},tt=Z,et=(a("e0c1"),Object(v["a"])(tt,z,B,!1,null,"2e662ecc",null)),at=et.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"current-weather"},[a("div",{staticClass:"container"},[a("div",{staticClass:"weather-info"},[a("span",{staticClass:"city"},[t._v(t._s(this.currentWeather.name))]),a("span",{staticClass:"current-temparature"},[t._v(t._s(Math.round((t.currentWeather.main.temp-32)/1.8))+"°")]),a("div",{staticClass:"high-low-temperatures"},[a("div",{staticClass:"high"},[a("i",{staticClass:"fas fa-chevron-up"}),a("span",[t._v(t._s(Math.round((t.currentWeather.main.temp_max-32)/1.8))+"°")])]),a("div",{staticClass:"low"},[a("i",{staticClass:"fas fa-chevron-down"}),a("span",[t._v(t._s(Math.round((t.currentWeather.main.temp_min-32)/1.8))+"°")])])]),a("span",{staticClass:"condition"},[t._v(" "+t._s(t.currentWeather.weather[0].description)+" ")]),a("span",{staticClass:"feels-like"},[t._v(" Feels like "+t._s(Math.round((t.currentWeather.main.feels_like-32)/1.8))+"° ")])]),a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:"http://openweathermap.org/img/wn/"+t.currentWeather.weather[0].icon+"@2x.png",alt:""}})])])])},nt=[],st={name:"CurrentWeather",props:["isDay","isNight","currentWeather"]},ct=st,rt=(a("00c3"),Object(v["a"])(ct,it,nt,!1,null,"66dc7134",null)),ot=rt.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weekly-forecast"},[a("div",{staticClass:"container"},t._l(t.filteredList,(function(e,i){return a("div",{key:i,staticClass:"daily"},[a("DailyForecast",{attrs:{day:e},on:{"show-details-modal":function(a){return t.showDetailsModal(e)}}})],1)})),0)])},dt=[],ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"daily-forecast"},[a("div",[a("span",[a("i",{staticClass:"fas fa-calendar-day mar"}),t._v(t._s(t.betterDate))])]),a("div",{staticClass:"condition"},[a("img",{attrs:{src:"http://openweathermap.org/img/wn/"+t.day.weather[0].icon+"@2x.png",alt:""}})]),a("div",{staticClass:"weather"},[a("span",{staticClass:"high"},[t._v(t._s(Math.round((t.day.temp.max-32)/1.8))+"°")]),a("span",{staticClass:"low"},[t._v(t._s(Math.round((t.day.temp.min-32)/1.8))+"°")])]),a("div",[a("button",{staticClass:"btnx",on:{click:function(e){return t.showDetailsModal(t.day)}}},[t._v("Details "),a("i",{staticClass:"far fa-eye "})])])])},pt=[],ft={name:"DailyForecast",props:["day"],computed:{betterDate:function(){var t=new Date(1e3*this.day.dt).toLocaleDateString(),e=new Date(1e3*this.day.dt).toLocaleDateString("pl-PL",{weekday:"long"}),a=e.charAt(0).toUpperCase()+e.slice(1);return t=t.substring(0,t.length-5),"".concat(t," ").concat(a)}},methods:{showDetailsModal:function(t){this.$emit("show-details-modal",t)}}},ht=ft,mt=(a("8b5e"),Object(v["a"])(ht,ut,pt,!1,null,"b36452cc",null)),yt=mt.exports,vt={name:"WeeklyForecast",props:["forecast"],components:{DailyForecast:yt},created:function(){console.log(this.forecast)},computed:{filteredList:function(){return this.forecast.daily.slice(1,8)}},methods:{showDetailsModal:function(t){this.$emit("show-details-modal",t)}}},gt=vt,_t=(a("e5ea"),Object(v["a"])(gt,lt,dt,!1,null,"04410370",null)),Ct=_t.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addition-info container"},[a("div",[t._m(0),a("span",[t._v(t._s(new Date(1e3*t.currentWeather.sys.sunrise).toLocaleTimeString()))])]),a("div",[t._m(1),a("span",[t._v(t._s(new Date(1e3*t.currentWeather.sys.sunset).toLocaleTimeString()))])]),a("div",[t._m(2),a("span",[t._v(t._s(t.currentWeather.main.humidity)+"%")])]),a("div",[t._m(3),a("span",[t._v(t._s(t.currentWeather.clouds.all)+"%")])]),a("div",[t._m(4),a("span",[t._v(t._s(Math.round(t.currentWeather.wind.speed))+"mph")])]),a("div",[t._m(5),a("span",[t._v(t._s(t.currentWeather.main.pressure)+"hPa")])])])},wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("Sunrise "),a("i",{staticClass:"fas fa-sun yellow"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("Sunset "),a("i",{staticClass:"fas fa-moon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("Humidity "),a("i",{staticClass:"fas fa-tint"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("Cloudness "),a("i",{staticClass:"fas fa-cloud"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("Wind "),a("i",{staticClass:"fas fa-wind"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("Pressure "),a("i",{staticClass:"fas fa-compress-alt"})])}],Dt={name:"AdditionalInfo",props:["currentWeather"],created:function(){console.log(this.currentWeather)}},xt=Dt,Wt=(a("9914"),Object(v["a"])(xt,bt,wt,!1,null,"620e95d4",null)),kt=Wt.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal"},[a("h3",[a("i",{staticClass:"fas fa-calendar-day mar"}),t._v(t._s(t.betterDate))]),a("button",{on:{click:t.closeDetailsModal}},[a("i",{staticClass:"far fa-window-close"})]),a("div",{staticClass:"flex"},[a("div",{staticClass:"box"},[a("i",{staticClass:"far fa-clock"}),a("span",{staticClass:"light"},[t._v("8:00")]),a("span",{staticClass:"strong"},[t._v(t._s(Math.round((t.singleDayDetails.temp.morn-32)/1.8))+"°/"+t._s(Math.round((t.singleDayDetails.feels_like.morn-32)/1.8))+"°")])]),a("div",{staticClass:"box"},[a("i",{staticClass:"far fa-clock"}),a("span",{staticClass:"light"},[t._v("12:00")]),a("span",{staticClass:"strong"},[t._v(t._s(Math.round((t.singleDayDetails.temp.day-32)/1.8))+"°/"+t._s(Math.round((t.singleDayDetails.feels_like.day-32)/1.8))+"°")])]),a("div",{staticClass:"box"},[a("i",{staticClass:"far fa-clock"}),a("span",{staticClass:"light"},[t._v("18:00")]),a("span",{staticClass:"strong"},[t._v(t._s(Math.round((t.singleDayDetails.temp.eve-32)/1.8))+"°/"+t._s(Math.round((t.singleDayDetails.feels_like.eve-32)/1.8))+"°")])]),a("div",{staticClass:"box"},[a("i",{staticClass:"far fa-clock"}),a("span",{staticClass:"light"},[t._v("2:00")]),a("span",{staticClass:"strong"},[t._v(t._s(Math.round((t.singleDayDetails.temp.night-32)/1.8))+"°/"+t._s(Math.round((t.singleDayDetails.feels_like.night-32)/1.8))+"°")])])])])},Ot=[],Mt={name:"ModalDetails",props:["singleDayDetails"],methods:{closeDetailsModal:function(){this.$emit("close-details-modal")}},computed:{betterDate:function(){var t=new Date(1e3*this.singleDayDetails.dt).toLocaleDateString(),e=new Date(1e3*this.singleDayDetails.dt).toLocaleDateString("pl-PL",{weekday:"long"}),a=e.charAt(0).toUpperCase()+e.slice(1);return t=t.substring(0,t.length-5),"".concat(t," ").concat(a)}}},At=Mt,jt=(a("7ebd"),Object(v["a"])(At,$t,Ot,!1,null,"616f9002",null)),Et=jt.exports,Tt={name:"Weather",props:["isDay","isNight"],components:{HourlyWeather:at,CurrentWeather:ot,WeeklyForecast:Ct,AdditionalInfo:kt,ModalDetails:Et},data:function(){return{forecast:null,currentWeather:null,currentTime:null,loading:!0,apiKey:"ffce0cb1622ed4c6cc1ba7238e3dd846",modalDetailsOpen:!1,singleDayDetails:null}},methods:{getWeather:function(){var t=this;p.collection("cities").where("city","==","".concat(this.$route.params.city)).get().then((function(e){e.forEach((function(e){t.currentWeather=e.data().currentWeather,o.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.currentWeather.coord.lat,"&lon=").concat(t.currentWeather.coord.lon,"&lang=pl&units=imperial&appid=").concat(t.apiKey)).then((function(e){t.forecast=e.data})).then((function(){t.loading=!1,t.getCurrentTime()}))}))}))},getCurrentTime:function(){var t=new Date;this.currentTime=t.getHours();var e=new Date(1e3*this.currentWeather.sys.sunrise).getHours(),a=new Date(1e3*this.currentWeather.sys.sunset).getHours();this.currentTime>e&&this.currentTime<a?this.$emit("is-day"):this.$emit("is-night")},showDetailsModal:function(t){this.modalDetailsOpen=!this.modalDetailsOpen,this.singleDayDetails=t,console.log(this.singleDayDetails)}},mounted:function(){this.getWeather()},beforeDestroy:function(){this.$emit("resetDays")}},Nt=Tt,St=(a("5828"),Object(v["a"])(Nt,U,q,!1,null,"ec6f3b08",null)),Lt=St.exports;i["default"].use(A["a"]);var It=[{path:"/",name:"AddCity",component:K},{path:"/weather/:city",name:"Weather",component:Lt}],Pt=new A["a"]({mode:"history",base:"/WeatherApp/",routes:It}),Ht=Pt,Ft=a("ee98"),Rt=a.n(Ft);i["default"].use(Rt.a),i["default"].config.productionTip=!1,new i["default"]({router:Ht,render:function(t){return t(M)}}).$mount("#app")},5828:function(t,e,a){"use strict";a("9aeb")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5dae":function(t,e,a){t.exports=a.p+"media/02d.fbf57056.mp4"},"5ee8":function(t,e,a){},"65c4":function(t,e,a){t.exports=a.p+"media/10d.dd9c4f11.mp4"},"6e15":function(t,e,a){t.exports=a.p+"media/03d.fbf57056.mp4"},"6ebe":function(t,e,a){},"72ff":function(t,e,a){t.exports=a.p+"media/50n.dd9c4f11.mp4"},"7ebd":function(t,e,a){"use strict";a("5ee8")},"88e5":function(t,e,a){t.exports=a.p+"media/50d.dd9c4f11.mp4"},"8b5e":function(t,e,a){"use strict";a("b741")},9914:function(t,e,a){"use strict";a("c5ac")},"9aeb":function(t,e,a){},"9c0c":function(t,e,a){},a447:function(t,e,a){t.exports=a.p+"media/13n.33a65a7f.mp4"},a6db:function(t,e,a){},b741:function(t,e,a){},b750:function(t,e,a){t.exports=a.p+"media/01d.0da1fbd1.mp4"},c266:function(t,e,a){t.exports=a.p+"media/01n.68cb9d4e.mp4"},c5ac:function(t,e,a){},c938:function(t,e,a){t.exports=a.p+"media/04n.d323b925.mp4"},cc21:function(t,e,a){t.exports=a.p+"media/09d.dd9c4f11.mp4"},d026:function(t,e,a){t.exports=a.p+"img/scroll.8581007d.png"},d3c3:function(t,e,a){"use strict";a("6ebe")},d67c:function(t,e,a){},e0c1:function(t,e,a){"use strict";a("10fc")},e5ea:function(t,e,a){"use strict";a("faa1")},ef14:function(t,e,a){},f3b4:function(t,e,a){var i={"./01d.mp4":"b750","./01n.mp4":"c266","./02d.mp4":"5dae","./02n.mp4":"4c58","./03d.mp4":"6e15","./03n.mp4":"0420","./04d.mp4":"0da8","./04n.mp4":"c938","./09d.mp4":"cc21","./09n.mp4":"0698","./10d.mp4":"65c4","./10n.mp4":"0cff","./11d.mp4":"417e","./11n.mp4":"f697","./13d.mp4":"54ef","./13n.mp4":"a447","./50d.mp4":"88e5","./50n.mp4":"72ff"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="f3b4"},f697:function(t,e,a){t.exports=a.p+"media/11n.dd9c4f11.mp4"},faa1:function(t,e,a){}});
//# sourceMappingURL=app.5852eb94.js.map