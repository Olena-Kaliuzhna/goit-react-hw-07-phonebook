(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports={wrapper:"ContactForm_wrapper__ON-7g",field:"ContactForm_field__YNjUp",name:"ContactForm_name__2gEXS",number:"ContactForm_number__2yJmt",input:"ContactForm_input__1D506",button:"ContactForm_button__3uuqO"}},12:function(t,e,n){t.exports={wrapper:"Filter_wrapper__LHZ-5",field:"Filter_field__9WYoQ",label:"Filter_label__15A5_",input:"Filter_input__1TD_A",enter:"Filter_enter__3LOh_",enterActive:"Filter_enterActive__5zSv6",exit:"Filter_exit__WbL7a",exitActive:"Filter_exitActive__2uIJn"}},15:function(t,e,n){t.exports={appear:"animation_appear__3CV2E",appearActive:"animation_appearActive__3MZwy",enter:"animation_enter__bFNzy",enterActive:"animation_enterActive__VMHbj",exit:"animation_exit__2Pal4",exitActive:"animation_exitActive__a2kSy"}},17:function(t,e,n){t.exports={container:"App_container__11owx",title:"App_title__8m3J9",appear:"App_appear__35Dnl",appearActive:"App_appearActive__2pIWA"}},19:function(t,e,n){t.exports={wrapper:"Contact_wrapper__1ZnbZ",contactItem:"Contact_contactItem__2JNXJ",button:"Contact_button__1YCfb"}},45:function(t,e,n){t.exports={popup:"ErrorPopup_popup__1mPHj",enter:"ErrorPopup_enter__1xE_c",enterActive:"ErrorPopup_enterActive__1jHrt",exit:"ErrorPopup_exit__wcuvI",exitActive:"ErrorPopup_exitActive__1HI5e"}},49:function(t,e,n){t.exports=n(84)},80:function(t,e,n){},84:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),u=n(47),i=n(8),s=n(21),l=n(22),p=n(25),m=n(23),f=n(26),b=n(85),d=n(13),_=n.n(d),h=n(27),v=n(20),C=n.n(v),E=n(4),O={fetchContactsRequest:Object(E.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:Object(E.b)("contacts/fetchContactsSuccess"),fetchContactsError:Object(E.b)("contacts/fetchContactsError"),addContactRequest:Object(E.b)("contacts/addContactRequest"),addContactSuccess:Object(E.b)("contacts/addContactSuccess"),addContactError:Object(E.b)("contacts/addContactError"),deleteContactRequest:Object(E.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(E.b)("contacts/deleteContactSuccess"),deleteContactError:Object(E.b)("contacts/deleteContactError"),changeFilter:Object(E.b)("contacts/changeFilter")};C.a.defaults.baseURL="http://localhost:4040";var j=function(){return function(){var t=Object(h.a)(_.a.mark(function t(e){var n,a;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e(O.fetchContactsRequest()),t.prev=1,t.next=4,C.a.get("/contacts");case 4:n=t.sent,a=n.data,e(O.fetchContactsSuccess(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(O.fetchContactsError(t.t0));case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()},x=function(t,e){return function(){var n=Object(h.a)(_.a.mark(function n(a){var r,c,o;return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r={name:t,number:e},a(O.addContactRequest()),n.prev=2,n.next=5,C.a.post("/contacts",r);case 5:c=n.sent,o=c.data,a(O.addContactSuccess(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a(O.addContactError(n.t0));case 13:case"end":return n.stop()}},n,null,[[2,10]])}));return function(t){return n.apply(this,arguments)}}()},N=function(t){return function(){var e=Object(h.a)(_.a.mark(function e(n){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n(O.deleteContactRequest()),C.a.delete("/contacts/".concat(t)).then(function(){return n(O.deleteContactSuccess(t))}).catch(function(t){return n(O.deleteContactError(t))});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},g=function(t){return t.contacts.items},w=function(t){return t.contacts.filter},A=function(t){return t.contacts.loading},y=g,S=w,F=function(t){var e=w(t);return g(t).filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())})},k=n(2),q=n(45),R=n.n(q);var I=function(t){var e=t.text;return r.a.createElement("div",{className:R.a.popup},r.a.createElement("h1",null,e))},D=n(10),L=n.n(D),P=n(15),J=n.n(P),M=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={name:"",number:"",error:!1,errorMessage:""},n.handleChangeInput=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(k.a)({},a,r))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,r=e.number;if(n.props.contacts.some(function(t){return t.name===a}))return n.setState({error:!0,errorMessage:"\u042d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"}),setTimeout(function(){n.setState({error:!1})},3e3),void n.reset();n.props.onAddContact(a,r),n.reset()},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.errorMessage;return r.a.createElement("div",null,r.a.createElement("form",{className:L.a.wrapper,onSubmit:this.handleSubmit},r.a.createElement("label",{className:L.a.field},r.a.createElement("span",{className:L.a.name},"Name"),r.a.createElement("input",{className:L.a.input,type:"text",name:"name",value:e,placeholder:"Enter name",onChange:this.handleChangeInput,required:!0})),r.a.createElement("label",{className:L.a.field},r.a.createElement("span",{className:L.a.number},"Number"),r.a.createElement("input",{className:L.a.input,type:"tel",name:"number",value:n,placeholder:"Enter number",onChange:this.handleChangeInput,required:!0})),r.a.createElement("button",{className:L.a.button,type:"submit"},"Add contact")),r.a.createElement(b.a,{in:this.state.error,timeout:250,classNames:J.a,unmountOnExit:!0},r.a.createElement(I,{text:a})))}}]),e}(a.Component),H=Object(i.b)(function(t){return{contacts:y(t)}},function(t){return{onAddContact:function(e,n){return t(x(e,n))}}})(M),T=n(12),Z=n.n(T);var z=Object(i.b)(function(t){return{value:S(t)}},function(t){return{onChangeFilter:function(e){return t(O.changeFilter(e.currentTarget.value))}}})(function(t){var e=t.value,n=t.onChangeFilter;return r.a.createElement("div",{className:Z.a.wrapper},r.a.createElement("label",{className:Z.a.field},r.a.createElement("span",{className:Z.a.label},"Find contacts by name"),r.a.createElement("input",{className:Z.a.input,type:"text",name:"filter",value:e,placeholder:"Enter to find",onChange:n})))}),W=n(86),Y=n(19),U=n.n(Y);var V=function(t){var e=t.name,n=t.number,a=t.onDelete;return r.a.createElement("li",{className:U.a.contactItem},r.a.createElement("span",null,e,": ",n),r.a.createElement("button",{className:U.a.button,type:"button",onClick:a},"Delete"))};var X,B,Q,G=Object(i.b)(function(t){return{contacts:F(t)}},function(t){return{onDeleteContact:function(e){return t(N(e))}}})(function(t){var e=t.contacts,n=t.onDeleteContact;return r.a.createElement(W.a,{component:"ul",className:U.a.wrapper},e.map(function(t){var e=t.id,a=t.name,c=t.number;return r.a.createElement(b.a,{timeout:250,classNames:J.a,key:e},r.a.createElement(V,{appear:!0,name:a,number:c,unmountOnExit:!0,onDelete:function(){return n(e)}}))}))}),K=n(17),$=n.n(K),tt=function(t){function e(){return Object(s.a)(this,e),Object(p.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props.contacts;return r.a.createElement("div",{className:$.a.container},r.a.createElement(b.a,{in:!0,appear:!0,timeout:500,classNames:$.a,unmountOnExit:!0},r.a.createElement("h1",{className:$.a.title},"Phonebook")),r.a.createElement(H,null),r.a.createElement(b.a,{in:t.length>0,classNames:Z.a,timeout:250,unmountOnExit:!0},r.a.createElement(z,null)),this.props.isLoading&&r.a.createElement("h2",{className:$.a.title},"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."),r.a.createElement(b.a,{in:t.length>0,appear:!0,timeout:250,classNames:J.a,unmountOnExit:!0},r.a.createElement("div",null,r.a.createElement("h2",{className:$.a.title},"Contacts"),r.a.createElement(G,null))))}}]),e}(a.Component),et=Object(i.b)(function(t){return{contacts:y(t),isLoading:A(t)}},function(t){return{fetchContacts:function(){return t(j())}}})(tt),nt=n(24),at=n(46),rt=n.n(at),ct=n(14),ot=n(6),ut=O.fetchContactsRequest,it=O.fetchContactsSuccess,st=O.fetchContactsError,lt=O.addContactRequest,pt=O.addContactSuccess,mt=O.addContactError,ft=O.deleteContactRequest,bt=O.deleteContactSuccess,dt=O.deleteContactError,_t=O.changeFilter,ht=Object(E.c)([],(X={},Object(k.a)(X,it,function(t,e){return e.payload}),Object(k.a)(X,pt,function(t,e){var n=e.payload;return[].concat(Object(nt.a)(t),[n])}),Object(k.a)(X,bt,function(t,e){var n=e.payload;return t.filter(function(t){return t.id!==n})}),X)),vt=Object(E.c)("",Object(k.a)({},_t,function(t,e){return e.payload})),Ct=(Object(E.c)(!1,(B={},Object(k.a)(B,st,function(){return!0}),Object(k.a)(B,mt,function(){return!0}),Object(k.a)(B,dt,function(){return!0}),Object(k.a)(B,it,function(){return!1}),Object(k.a)(B,pt,function(){return!1}),Object(k.a)(B,bt,function(){return!1}),B)),Object(E.c)(!1,(Q={},Object(k.a)(Q,ut,function(){return!0}),Object(k.a)(Q,it,function(){return!1}),Object(k.a)(Q,st,function(){return!1}),Object(k.a)(Q,lt,function(){return!0}),Object(k.a)(Q,pt,function(){return!1}),Object(k.a)(Q,mt,function(){return!1}),Object(k.a)(Q,ft,function(){return!0}),Object(k.a)(Q,bt,function(){return!1}),Object(k.a)(Q,dt,function(){return!1}),Q))),Et=Object(ot.c)({items:ht,filter:vt,loading:Ct}),Ot=[].concat(Object(nt.a)(Object(E.d)({serializableCheck:{ignoredActions:[ct.a,ct.f,ct.b,ct.c,ct.d,ct.e]}})),[rt.a]),jt=Object(E.a)({reducer:{contacts:Et},middleware:Ot,devTools:!1});n(80);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:jt},r.a.createElement(u.a,null,r.a.createElement(et,null)))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.ba182124.chunk.js.map