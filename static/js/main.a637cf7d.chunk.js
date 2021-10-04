(this.webpackJsonpdtmoney=this.webpackJsonpdtmoney||[]).push([[0],{103:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e.n(r),i=e(29),c=e.n(i),o=e(35),s=e(6),d=e(16),l=e.n(d),b=e(10),u=e.n(b),j=e(64),h=e(36),m=e(17),p=e(51),g=e.n(p).a.create({baseURL:"https://gabriel-santana.github.io/dtmoney/api"}),O=e(0),f=Object(r.createContext)({});function x(t){var n=t.children,e=Object(r.useState)([]),a=Object(s.a)(e,2),i=a[0],c=a[1];function o(){return(o=Object(m.a)(u.a.mark((function t(n){var e,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("/transactions",Object(h.a)(Object(h.a)({},n),{},{createdAt:new Date}));case 2:e=t.sent,r=e.data.transaction,c([].concat(Object(j.a)(i),[r]));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){g.get("transactions").then((function(t){return c(t.data.transactions)}))}),[]),Object(O.jsx)(f.Provider,{value:{transactions:i,createTransaction:function(t){return o.apply(this,arguments)}},children:n})}function v(){return Object(r.useContext)(f)}var y,w,k=e.p+"static/media/income.d58effe2.svg",C=e.p+"static/media/outcome.6eb96d30.svg",F=e.p+"static/media/total.e90c2d1e.svg",N=e(3),S=e(4),R=S.b.div(y||(y=Object(N.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  margin-top: -10rem;\n\n  div {\n    background: var(--shape);\n    padding: 1.5rem 2rem;\n    border-radius: 0.25rem;\n    color: var(--text-title);\n\n    header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    strong {\n      display: block;\n      margin-top: 1rem;\n      font-size: 2rem;\n      font-weight: 500;\n      line-height: 3rem;\n    }\n\n    &.highlight-background {\n      background: var(--green);\n      color: #FFF;\n    }\n  }\n"])));function B(){var t=v().transactions.reduce((function(t,n){return"deposit"===n.type?(t.deposits+=n.amount,t.total+=n.amount):(t.withdraws+=n.amount,t.total-=n.amount),t}),{deposits:0,withdraws:0,total:0});return Object(O.jsxs)(R,{children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("p",{children:"Entradas"}),Object(O.jsx)("img",{src:k,alt:"Entradas"})]}),Object(O.jsx)("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t.deposits)})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("p",{children:"Sa\xeddas"}),Object(O.jsx)("img",{src:C,alt:"Sa\xeddas"})]}),Object(O.jsx)("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(-t.withdraws)})]}),Object(O.jsxs)("div",{className:"highlight-background",children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("p",{children:"Total"}),Object(O.jsx)("img",{src:F,alt:"Total"})]}),Object(O.jsx)("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t.total)})]})]})}var E,D=S.b.div(w||(w=Object(N.a)(["\n  margin-top: 4rem;\n\n  table {\n    width: 100%;\n    border-spacing: 0 0.5rem;\n\n    th {\n      color: var(--text-body);\n      font-weight: 400;\n      padding: 1rem 2rem;\n      text-align: left;\n      line-height: 1.5rem;\n    }\n\n    td {\n      padding: 1rem 2rem;\n      border: 0;\n      background: var(--shape);\n      color: var(--text-body);\n      border-radius: 0.25rem;\n\n      &:first-child {\n        color: var(--text-title);\n      }\n\n      &.deposit {\n        color: var(--green);\n      }\n\n      &.withdraw {\n        color: var(--red);\n      }\n    }\n  }\n"])));function T(){var t=v().transactions;return Object(O.jsx)(D,{children:Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"T\xedtulo"}),Object(O.jsx)("th",{children:"Valor"}),Object(O.jsx)("th",{children:"Categoria"}),Object(O.jsx)("th",{children:"Data"})]})}),Object(O.jsx)("tbody",{children:t.map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t.title}),Object(O.jsx)("td",{className:t.type,children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format("deposit"===t.type?t.amount:-t.amount)}),Object(O.jsx)("td",{children:t.category}),Object(O.jsx)("td",{children:new Intl.DateTimeFormat("pt-BR").format(new Date(t.createdAt))})]},t.id)}))})]})})}var z=S.b.main(E||(E=Object(N.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 2.5rem 1rem;\n"])));function A(){return Object(O.jsxs)(z,{children:[Object(O.jsx)(B,{}),Object(O.jsx)(T,{})]})}var I,L,q=e.p+"static/media/logo.614d71d1.svg",M=S.b.header(I||(I=Object(N.a)(["\n  background: var(--blue);\n"]))),J=S.b.div(L||(L=Object(N.a)(["\n  max-width: 1128px;\n  margin: 0 auto;\n\n  padding: 2rem 1rem 12rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  button {\n    font-size: 1rem;\n    color: #FFF;\n    background: var(--blue-light);\n    border: 0;\n    padding: 0 2rem;\n    border-radius: 0.25rem;\n    height: 3rem;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n"])));function P(t){var n=t.onOpenNewTransactionModal;return Object(O.jsx)(M,{children:Object(O.jsxs)(J,{children:[Object(O.jsx)("img",{src:q,alt:"dt money"}),Object(O.jsx)("button",{type:"button",onClick:n,children:"Nova transa\xe7\xe3o"})]})})}var V,U,G,H,K=e.p+"static/media/close.f62862c6.svg",Q=e(34),W=S.b.form(V||(V=Object(N.a)(["\n  h2 {\n    color: var(--text-title);\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n  }\n\n  input {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 4rem;\n    border-radius: 0.25rem;\n\n    border: 1px solid #d7d7d7;\n    background: #e7e9ee;\n\n    font-weight: 400;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--text-body);\n    }\n\n    & + input {\n      margin-top: 1rem;\n    }\n  }\n\n  button[type='submit'] {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 4rem;\n    background: var(--green);\n    color: #FFF;\n    border-radius: 0.25rem;\n    border: 0;\n    font-size: 1rem;\n    margin-top: 1.5rem;\n    font-weight: 600;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n\n  \n"]))),X=S.b.div(U||(U=Object(N.a)(["\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n"]))),Y={green:"#33CC95",red:"#E52E4D"},Z=S.b.button(G||(G=Object(N.a)(["\n    height: 4rem;\n    border: 1px solid #d7d7d7;\n    border-radius: 0.25rem;\n\n    background: ",";\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    transition: border-color 0.2s;\n     \n    &:hover {\n      border-color: ",";\n    }\n\n    img {\n      width: 28px;\n      height: 20px;\n    }\n\n    span {\n      display: inline-block;\n      margin-left: 1rem;\n      font-size: 1rem;\n      color: var(--text-title);\n    }\n"])),(function(t){return t.isActive?Object(Q.b)(.8,Y[t.activeColor]):"transparent"}),Object(Q.a)(.1,"#d7d7d7"));function $(t){var n=t.isOpen,e=t.onRequestClose,a=v().createTransaction,i=Object(r.useState)(""),c=Object(s.a)(i,2),o=c[0],d=c[1],b=Object(r.useState)(0),j=Object(s.a)(b,2),h=j[0],p=j[1],g=Object(r.useState)(""),f=Object(s.a)(g,2),x=f[0],y=f[1],w=Object(r.useState)("deposit"),F=Object(s.a)(w,2),N=F[0],S=F[1];function R(){return(R=Object(m.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,a({title:o,amount:h,category:x,type:N});case 3:d(""),p(0),y(""),S("deposit"),e();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(O.jsxs)(l.a,{isOpen:n,onRequestClose:e,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:[Object(O.jsx)("button",{type:"button",onClick:e,className:"react-modal-close",children:Object(O.jsx)("img",{src:K,alt:"Fechar Modal"})}),Object(O.jsxs)(W,{onSubmit:function(t){return R.apply(this,arguments)},children:[Object(O.jsx)("h2",{children:"Cadastrar transa\xe7\xe3o"}),Object(O.jsx)("input",{placeholder:"T\xedtulo",value:o,onChange:function(t){return d(t.target.value)}}),Object(O.jsx)("input",{type:"number",placeholder:"Valor",value:h,onChange:function(t){return p(Number(t.target.value))}}),Object(O.jsxs)(X,{children:[Object(O.jsxs)(Z,{type:"button",onClick:function(){S("deposit")},isActive:"deposit"===N,activeColor:"green",children:[Object(O.jsx)("img",{src:k,alt:"Entrada"}),Object(O.jsx)("span",{children:"Entrada"})]}),Object(O.jsxs)(Z,{type:"button",onClick:function(){S("withdraw")},isActive:"withdraw"===N,activeColor:"red",children:[Object(O.jsx)("img",{src:C,alt:"Sa\xedda"}),Object(O.jsx)("span",{children:"Sa\xedda"})]})]}),Object(O.jsx)("input",{placeholder:"Categoria",value:x,onChange:function(t){return y(t.target.value)}}),Object(O.jsx)("button",{type:"submit",children:"Cadastrar"})]})]})}var _=Object(S.a)(H||(H=Object(N.a)(["\n    :root {\n        --backgroung: #f8f2f5;\n        --red: #E52E4D;\n        --green: #33cc95;\n        --blue: #5429CC;\n\n        --blue-light: #6933ff;\n\n        --text-title: #363f5f;\n        --text-body: #969cb3;\n\n        --background: #f0f2f5;\n        --shape: #FFFFFF;\n    }\n    \n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html { \n        @media (min-width: 1080px) {\n            font-size: 93.75%;\n        }\n\n        @media (min-width: 720px) {\n            font-size: 87.5%;\n        }\n    }\n\n    body {\n        background: var(--backgroung);\n        -webkit-font-smoothing: antialiased;\n    }\n\n    body, input, textarea, button {\n        font-family: 'Poppins', sans-serif;\n        font-weight: 400;\n    }\n\n    h1, h2, h3, h4, h5, h6, strong {\n        font-weight: 600;\n    }\n\n    button {\n        cursor: pointer;\n    }\n\n    [disabled] {\n        opacity: 0.6;\n        cursor: not-allowed;\n    }\n\n    .react-modal-overlay {\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t\tleft: 0;\n\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n    }\n\n    .react-modal-content {\n\t\t\twidth: 100%;\n\t\t\tmax-width: 576px;\n\t\t\tbackground: var(--background);\n\t\t\tpadding: 3rem;\n\t\t\tposition: relative;\n\t\t\tborder-radius: 0.25rem;\n    }\n\n    .react-modal-close {\n\t\t\tposition: absolute;\n\t\t\tright: 1.5rem;\n\t\t\ttop: 1.5rem;\n\t\t\tborder: 0;\n\t\t\tbackground: transparent;\n\n\t\t\t\n\t\t\ttransition: filter 0.2s;\n\n\t\t\t&:hover {\n\t\t\t\tfilter: brightness(0.8);\n\t\t\t}\n    }\n"])));function tt(){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),e=n[0],a=n[1];return Object(O.jsxs)(x,{children:[Object(O.jsx)(P,{onOpenNewTransactionModal:function(){a(!0)}}),Object(O.jsx)(A,{}),Object(O.jsx)($,{isOpen:e,onRequestClose:function(){a(!1)}}),Object(O.jsx)(_,{})]})}l.a.setAppElement("#root"),Object(o.b)({models:{transaction:o.a},seeds:function(t){t.db.loadData({transactions:[{id:1,title:"Sal\xe1rio",type:"deposit",category:"Trabalho",amount:1e4,createdAt:new Date("2021-07-07 09:00:00")},{id:2,title:"Aluguel",type:"withdraw",category:"Casa",amount:1100,createdAt:new Date("2021-07-14 11:00:00")}]})},routes:function(){var t=this;this.namespace="api",this.get("/transactions",(function(){return t.schema.all("transaction")})),this.post("/transactions",(function(t,n){var e=JSON.parse(n.requestBody);return t.create("transaction",e)}))}}),c.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(tt,{})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.a637cf7d.chunk.js.map