(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n,c,l,r=a(0),s=a.n(r),i=a(6),o=a.n(i),m=a(7),u=a(8),p=a(11),d=a(10),E=a(4),f=a(3),v=a(1),h=a(5),y=a.n(h),b=function(e){return{type:"GET_POKEMON_SUCCESS",payload:e}},g=function(e){return{type:"GET_TYPES_WITH_ID_SUCCESS",payload:e}},k=function(e){return{type:"GET_TYPES_SUCCESS",payload:e}},N=function(){return y()({method:"get",url:"https://pokeapi.co/api/v1/type/?limit=999"})},O={data:[],openedPokemon:null,limit:12,typesWithId:[],filter:"all",types:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POKEMONS_REQUEST":return Object(v.a)({},e);case"GET_POKEMONS_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{data:t.payload,typesWithId:[]});case"INC_LIMIT":return Object(v.a)(Object(v.a)({},e),{},{limit:e.limit+=6});case"GET_POKEMON_REQUEST":return Object(v.a)({},e);case"GET_POKEMON_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{openedPokemon:t.payload});case"GET_TYPES_WITH_ID_SUCCESS":var a={id:t.payload.id,types:t.payload.types};return Object(v.a)(Object(v.a)({},e),{},{typesWithId:[].concat(Object(f.a)(e.typesWithId),[a])});case"GET_TYPES_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{types:[{name:"all"}].concat(Object(f.a)(t.payload))});case"CHANGE_FILTER":return Object(v.a)(Object(v.a)({},e),{},{filter:t.payload});default:return Object(v.a)({},e)}},P=(a(63),a(26)),_=Object(E.c)(S,Object(E.a)(P.a)),j=a(9),C=(a(55),[{name:"normal",value:"#9fa4a8"},{name:"fighting",value:"#ff9000"},{name:"flying",value:"#63a4d8"},{name:"poison",value:"#7e58ef"},{name:"ground",value:"#a05216"},{name:"rock",value:"#9fa4a8"},{name:"bug",value:"#938a35"},{name:"ghost",value:"#c7d2db"},{name:"steel",value:"#9fa4a8"},{name:"fire",value:"#ff0000"},{name:"water",value:"#008cff"},{name:"grass",value:"#27ba14"},{name:"electric",value:"#fff600"},{name:"psychic",value:"#9fa4a8"},{name:"ice",value:"#8bbde5"},{name:"dragon",value:"#ff0000"},{name:"dark",value:"#9fa4a8"},{name:"fairy",value:"#aa00ff"},{name:"unknown",value:"#9fa4a8"},{name:"shadow",value:"#9fa4a8"}]),T=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.getPokemon,c=e.types;return a=a.split("")[0].toUpperCase()+a.slice(1,a.length),s.a.createElement("a",{href:"#table",style:{textDecoration:"none",color:"black"}},s.a.createElement("div",{className:"pokemon-card",onClick:function(){return n(t)}},s.a.createElement("img",{className:"pokemon-img",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),alt:""}),s.a.createElement("h3",{className:"pokemon-name"},a),s.a.createElement("div",{className:"types"},I(c))))}}]),a}(s.a.Component),I=function(e){if(void 0!==e[0])return e[0].types.map((function(e){var t=C.filter((function(t){return t.name===e.type.name}));return s.a.createElement("div",{key:e.type.url,className:"type",style:{backgroundColor:t[0].value}},e.type.name)}))},w=(a(56),a(57),function(e){return s.a.createElement("button",{className:"load-btn",type:"button",onClick:function(){e.incLimit(),e.getPokemons(e.limit)}},"Load More")}),G=function(e){var t=e.data,a=e.incLimit,r=e.getPokemons,i=e.getPokemon,o=e.limit,m=e.filter;return n=i,c=t,l=m,s.a.createElement("div",{className:"pokemons-list"},U(t.data),s.a.createElement(w,{limit:o,incLimit:a,getPokemons:r}))},U=function(e){return e.map((function(e){var t=e.url.split("/"),a=t[t.length-2],r=c.typesWithId.filter((function(e){return e.id==a}));if("all"==l)return s.a.createElement(T,Object.assign({key:a,getPokemon:n,types:r,id:a},e));var i=c.typesWithId.filter((function(e){return e.id==a}));return i.length>0?i[0].types.filter((function(e){return e.type.name===l})).length>0?s.a.createElement(T,Object.assign({key:a,getPokemon:n,types:i,id:a},e)):null:void 0}))},M=(a(58),function(){return s.a.createElement("h1",{className:"title"},"Pokedex")}),L=(a(59),function(e){return e.map((function(e){return s.a.createElement("option",{key:e.name,value:e.name},e.name)}))}),W=function(e){var t=e.props,a=e.changeFilter;return s.a.createElement("select",{className:"filter",onChange:function(e){return a(e.target.value)}},L(t))},K=(a(60),function(e){var t="";return null!==e.data&&e.data.types.forEach((function(e){t+=e.type.name,t+=", "})),null!==e.data?s.a.createElement("div",{className:"characterization-table"},s.a.createElement("a",{name:"table"},s.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.data.id,".png"),className:"table-avatar"}),s.a.createElement("h2",{className:"table-name"},e.data.name.slice(0,1).toUpperCase()+e.data.name.slice(1,e.data.name.length)),s.a.createElement("div",{className:"table"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cell"},"Type"),s.a.createElement("div",{className:"cell"},t.slice(0,t.length-2))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cell"},"Attack"),s.a.createElement("div",{className:"cell"},e.data.stats[4].base_stat)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cell"},"Defense"),s.a.createElement("div",{className:"cell"},e.data.stats[3].base_stat)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cell"},"HP"),s.a.createElement("div",{className:"cell"},e.data.stats[5].base_stat)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cell"},"SP Attack"),s.a.createElement("div",{className:"cell"},e.data.stats[2].base_stat)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cell"},"SP Defense"),s.a.createElement("div",{className:"cell"},e.data.stats[1].base_stat)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cell"},"Speed"),s.a.createElement("div",{className:"cell"},e.data.stats[0].base_stat)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cell"},"Weight"),s.a.createElement("div",{className:"cell"},e.data.weight)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cell"},"Moves"),s.a.createElement("div",{className:"cell"},e.data.moves.length))))):null}),x=(a(61),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.getPokemons(this.props.data.limit),this.props.getPokemon(1)}},{key:"render",value:function(){return s.a.createElement("div",{className:"pokedex"},s.a.createElement(M,null),s.a.createElement(W,{props:this.props.data.types,changeFilter:this.props.changeFilter}),s.a.createElement("div",{className:"main"},s.a.createElement(K,{data:this.props.data.openedPokemon}),s.a.createElement(G,{data:this.props.data,incLimit:this.props.incLimit,getPokemons:this.props.getPokemons,getPokemon:this.props.getPokemon,filter:this.props.data.filter,limit:this.props.data.limit})))}}]),a}(s.a.Component)),A=Object(j.b)((function(){return{data:_.getState()}}),(function(e){return{getPokemons:function(t){return e(function(e){return function(t){N().then((function(e){return t(k(e.data.results))})),t({type:"GET_POKEMONS_REQUEST"}),y()({method:"get",url:"https://pokeapi.co/api/v1/pokemon/?limit=".concat(e)}).then((function(a){t({type:"GET_POKEMONS_SUCCESS",payload:a.data.results});for(var n=1;n<=e;n++)y()({method:"get",url:"https://pokeapi.co/api/v2/pokemon/".concat(n)}).then((function(e){return t(g(e.data))}))}))}}(t))},getPokemon:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return function(t){t({type:"GET_POKEMON_REQUEST"}),y()({method:"get",url:"https://pokeapi.co/api/v2/pokemon/".concat(e)}).then((function(e){t(b(e.data))}))}}(t))},changeFilter:function(t){return e(function(e){return{type:"CHANGE_FILTER",payload:e}}(t))},incLimit:function(){return e({type:"INC_LIMIT"})}}}))(x);o.a.render(s.a.createElement(j.a,{store:_},s.a.createElement(A,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.777785ae.chunk.js.map