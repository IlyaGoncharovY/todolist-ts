(this["webpackJsonptodolist-ts"]=this["webpackJsonptodolist-ts"]||[]).push([[0],{101:function(t,e,a){t.exports=a(131)},106:function(t,e,a){},107:function(t,e,a){},131:function(t,e,a){"use strict";a.r(e);var r={};a.r(r),a.d(r,"selectIsLoggedIn",(function(){return ht}));var n=a(0),o=a.n(n),s=a(9),i=a.n(s);a(106),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107);var c,l,u=a(174),d=a(175),p=a(176),f=a(133),m=a(170),b=a(177),v=a(178),h=a(16),g=a(7),k=a.n(g),E=a(14),j=a(81),y=a.n(j).a.create(Object(h.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"3464b8a0-c9aa-4269-a1f1-731b09a66663"}})),O=function(){return y.get("todo-lists")},x=function(t){return y.post("todo-lists",{title:t})},C=function(t){return y.delete("todo-lists/".concat(t))},w=function(t,e){return y.put("todo-lists/".concat(t),{title:e})},I=function(t){return y.get("todo-lists/".concat(t,"/tasks"))},T=function(t,e){return y.delete("todo-lists/".concat(t,"/tasks/").concat(e))},S=function(t,e){return y.post("todo-lists/".concat(t,"/tasks"),{title:e})},A=function(t,e,a){return y.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},L=function(t){return y.post("auth/login",t)},z=function(){return y.delete("auth/login")},P=function(){return y.get("auth/me")},F=a(13),W={setAppStatus:Object(F.b)("appActions/setAppStatus"),setAppError:Object(F.b)("appActions/setAppError")},M=function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a&&e.dispatch(W.setAppError({error:t.messages.length?t.messages[0]:"Some error occurred"})),e.dispatch(W.setAppStatus({status:"failed"})),e.rejectWithValue({errors:t.messages,fieldsErrors:t.fieldsErrors})},N=function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a&&e.dispatch(W.setAppError({error:t.message?t.message:"Some error occurred"})),e.dispatch(W.setAppStatus({status:"failed"})),e.rejectWithValue({errors:[t.message],fieldsErrors:void 0})},D=W.setAppStatus,R=Object(F.c)("todolists/fetchTodolists",function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(D({status:"loading"})),t.prev=1,t.next=4,O();case 4:return r=t.sent,a.dispatch(D({status:"succeeded"})),t.abrupt("return",{todolists:r.data});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",N(t.t0,a));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()),V=Object(F.c)("todolists/removeTodolist",function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,a.rejectWithValue,r(D({status:"loading"})),r(K({id:e,status:"loading"})),t.next=5,C(e);case 5:return t.sent,r(D({status:"succeeded"})),t.abrupt("return",{id:e});case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),q=Object(F.c)("todolists/addTodolist",function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(D({status:"loading"})),t.prev=1,t.next=4,x(e);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(D({status:"succeeded"})),t.abrupt("return",{todolist:r.data.data.item});case 10:return t.abrupt("return",M(r.data,a,!1));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",N(t.t0,a,!1));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),B=Object(F.c)("todolists/changeTodolistTitle",function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e.id,e.title);case 3:if(0!==(r=t.sent).data.resultCode){t.next=9;break}return a.dispatch(D({status:"succeeded"})),t.abrupt("return",{id:e.id,title:e.title});case 9:return t.abrupt("return",M(r.data,a));case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",N(t.t0,a,!1));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,a){return t.apply(this,arguments)}}()),H={fetchTodolistsTC:R,removeTodolistTC:V,addTodolistTC:q,changeTodolistTitleTC:B},U=Object(F.d)({name:"todolists",initialState:[],reducers:{changeTodolistFilter:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatus:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status}},extraReducers:function(t){t.addCase(R.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})).addCase(V.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)})).addCase(q.fulfilled,(function(t,e){t.unshift(Object(h.a)(Object(h.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})).addCase(B.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title}))}}),J=U.actions,K=(J.changeTodolistFilter,J.changeTodolistEntityStatus),X=Object(F.c)("tasks/fetchTasks",function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(W.setAppStatus({status:"loading"})),t.prev=1,t.next=4,I(e);case 4:return r=t.sent,n=r.data.items,a.dispatch(W.setAppStatus({status:"succeeded"})),t.abrupt("return",{tasks:n,todolistId:e});case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",N(t.t0,a));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,a){return t.apply(this,arguments)}}()),Y=Object(F.c)("tasks/removeTask",function(){var t=Object(E.a)(k.a.mark((function t(e,a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e.todolistId,e.taskId);case 2:return t.sent,t.abrupt("return",{taskId:e.taskId,todolistId:e.todolistId});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),$=Object(F.c)("tasks/addTask",function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(W.setAppStatus({status:"loading"})),t.prev=1,t.next=4,S(e.todolistId,e.title);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(W.setAppStatus({status:"succeeded"})),t.abrupt("return",r.data.data.item);case 10:return M(r.data,a,!1),t.abrupt("return",a.rejectWithValue({errors:r.data.messages,fieldsErrors:r.data.fieldsErrors}));case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",N(t.t0,a,!1));case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,a){return t.apply(this,arguments)}}()),_=Object(F.c)("tasks/updateTask",function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r,n,o,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a.getState(),n=r.tasks[e.todolistId].find((function(t){return t.id===e.taskId}))){t.next=4;break}return t.abrupt("return",a.rejectWithValue("task not found in the state"));case 4:return o=Object(h.a)({deadline:n.deadline,description:n.description,priority:n.priority,startDate:n.startDate,title:n.title,status:n.status},e.model),t.next=7,A(e.todolistId,e.taskId,o);case 7:if(s=t.sent,t.prev=8,0!==s.data.resultCode){t.next=13;break}return t.abrupt("return",e);case 13:return t.abrupt("return",M(s.data,a));case 14:t.next=19;break;case 16:return t.prev=16,t.t0=t.catch(8),t.abrupt("return",N(t.t0,a));case 19:case"end":return t.stop()}}),t,null,[[8,16]])})));return function(e,a){return t.apply(this,arguments)}}()),G={fetchTasks:X,removeTask:Y,addTask:$,updateTask:_},Q=Object(F.d)({name:"tasks",initialState:{},reducers:{},extraReducers:function(t){t.addCase(H.addTodolistTC.fulfilled,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(H.removeTodolistTC.fulfilled,(function(t,e){delete t[e.payload.id]})).addCase(H.fetchTodolistsTC.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase(X.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase(Y.fulfilled,(function(t,e){var a=t[e.payload.todolistId],r=a.findIndex((function(t){return t.id===e.payload.taskId}));r>-1&&a.splice(r,1)})).addCase($.fulfilled,(function(t,e){t[e.payload.todoListId].unshift(e.payload)})).addCase(_.fulfilled,(function(t,e){var a=t[e.payload.todolistId],r=a.findIndex((function(t){return t.id===e.payload.taskId}));r>-1&&(a[r]=Object(h.a)(Object(h.a)({},a[r]),e.payload.model))}))}}),Z=a(22),tt=a(171),et=a(46),at=a(179),rt=a(167),nt=a(168),ot=o.a.memo((function(t){var e=t.addItem,a=t.disabled,r=void 0!==a&&a,s=Object(n.useState)(""),i=Object(et.a)(s,2),c=i[0],l=i[1],u=Object(n.useState)(null),d=Object(et.a)(u,2),p=d[0],f=d[1],m=function(){var t=Object(E.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""!==c.trim()?e(c,{setError:f,setTitle:l}):f("Title is required");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(at.a,{variant:"outlined",disabled:r,error:!!p,value:c,onChange:function(t){l(t.currentTarget.value)},onKeyPress:function(t){null!==p&&f(null),13===t.charCode&&m()},label:"Title",helperText:p}),o.a.createElement(rt.a,{color:"primary",onClick:m,disabled:r,style:{marginLeft:"5px"}},o.a.createElement(nt.a,null)))})),st=a(89),it=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(et.a)(e,2),r=a[0],s=a[1],i=Object(n.useState)(t.value),c=Object(et.a)(i,2),l=c[0],u=c[1];return r?o.a.createElement(at.a,{value:l,onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.onChange(l)}}):o.a.createElement("span",{onDoubleClick:function(){s(!0),u(t.value)}},t.value)})),ct=a(132),lt=a(169),ut=a(181);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(c||(c={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(l||(l={}));var dt=a(23),pt=function(){return Object(Z.b)()};function ft(t){var e=pt();return Object(n.useMemo)((function(){return Object(dt.b)(t,e)}),[])}var mt=o.a.memo((function(t){var e=ft(Et),a=e.updateTask,r=e.removeTask,s=Object(n.useCallback)((function(){return r({taskId:t.task.id,todolistId:t.todolistId})}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){a({taskId:t.task.id,model:{status:e.currentTarget.checked?c.Completed:c.New},todolistId:t.todolistId})}),[t.task.id,t.todolistId]),l=Object(n.useCallback)((function(e){a({taskId:t.task.id,model:{title:e},todolistId:t.todolistId})}),[t.task.id,t.todolistId]);return o.a.createElement("div",{key:t.task.id,className:t.task.status===c.Completed?"is-done":"",style:{position:"relative"}},o.a.createElement(ut.a,{checked:t.task.status===c.Completed,color:"primary",onChange:i}),o.a.createElement(it,{value:t.task.title,onChange:l}),o.a.createElement(rt.a,{size:"small",onClick:s,style:{position:"absolute",top:"2px",right:"2px"}},o.a.createElement(lt.a,{fontSize:"small"})))})),bt=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,r=Object(st.a)(t,["demo"]),s=Object(Z.c)((function(t){return t.tasks[r.todolist.id]})),i=ft(Et).fetchTasks,l=ft(kt),u=l.changeTodolistFilter,d=l.removeTodolistTC,p=l.changeTodolistTitleTC,f=pt();Object(n.useEffect)((function(){a||s.length||i(r.todolist.id)}),[]);var b=Object(n.useCallback)(function(){var t=Object(E.a)(k.a.mark((function t(e,a){var n,o,s,i,c,l;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Et.addTask({title:e,todolistId:r.todolist.id}),t.next=3,f(n);case 3:o=t.sent,Et.addTask.rejected.match(o)?(null===(s=o.payload)||void 0===s||null===(i=s.errors)||void 0===i?void 0:i.length)?(l=null===(c=o.payload)||void 0===c?void 0:c.errors[0],a.setError(l)):a.setError("Some error occured"):a.setTitle("");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),[r.todolist.id]),v=Object(n.useCallback)((function(t){p({id:r.todolist.id,title:t})}),[r.todolist.id]),h=Object(n.useCallback)((function(t){return u({filter:t,id:r.todolist.id})}),[r.todolist.id]),g=s;"active"===r.todolist.filter&&(g=s.filter((function(t){return t.status===c.New}))),"completed"===r.todolist.filter&&(g=s.filter((function(t){return t.status===c.Completed})));var j=function(t,e,a){return o.a.createElement(m.a,{variant:r.todolist.filter===t?"outlined":"text",onClick:function(){return h(t)},color:e},a)};return o.a.createElement(ct.a,{style:{padding:"10px",position:"relative"}},o.a.createElement(rt.a,{size:"small",onClick:function(){d(r.todolist.id)},disabled:"loading"===r.todolist.entityStatus,style:{position:"absolute",right:"5px",top:"5px"}},o.a.createElement(lt.a,{fontSize:"small"})),o.a.createElement("h3",null,o.a.createElement(it,{value:r.todolist.title,onChange:v})),o.a.createElement(ot,{addItem:b,disabled:"loading"===r.todolist.entityStatus}),o.a.createElement("div",null,g.map((function(t){return o.a.createElement(mt,{key:t.id,task:t,todolistId:r.todolist.id})})),!g.length&&o.a.createElement("div",{style:{padding:"10px",color:"grey"}},"No task")),o.a.createElement("div",{style:{paddingTop:"10px"}},j("all","default","All"),j("active","primary","Active"),j("completed","secondary","Completed")))})),vt=a(17),ht=function(t){return t.auth.isLoggedIn},gt=function(t){var e=t.demo,a=void 0!==e&&e,r=Object(Z.c)((function(t){return t.todolists})),s=Object(Z.c)(ht),i=pt(),c=ft(kt),l=c.fetchTodolistsTC,u=(c.addTodolistTC,Object(n.useCallback)(function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r,n,o,s,c,l;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=kt.addTodolistTC(e),t.next=3,i(r);case 3:n=t.sent,kt.addTodolistTC.rejected.match(n)?(null===(o=n.payload)||void 0===o||null===(s=o.errors)||void 0===s?void 0:s.length)?(l=null===(c=n.payload)||void 0===c?void 0:c.errors[0],a.setError(l)):a.setError("Some error occured"):a.setTitle("");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),[]));return Object(n.useEffect)((function(){!a&&s&&(r.length||l())}),[]),s?o.a.createElement(o.a.Fragment,null,o.a.createElement(tt.a,{container:!0,style:{padding:"20px"}},o.a.createElement(ot,{addItem:u})),o.a.createElement(tt.a,{container:!0,spacing:3,style:{flexWrap:"nowrap",overflowX:"scroll"}},r.map((function(t){return o.a.createElement(tt.a,{item:!0,key:t.id},o.a.createElement("div",{style:{width:"300px"}},o.a.createElement(bt,{todolist:t,demo:a})))})))):o.a.createElement(vt.a,{to:"/login"})},kt=Object(h.a)(Object(h.a)({},H),U.actions),Et=Object(h.a)(Object(h.a)({},G),Q.actions),jt=U.reducer,yt=Q.reducer,Ot=a(183),xt=a(180);function Ct(t){return o.a.createElement(xt.a,Object.assign({elevation:6,variant:"filled"},t))}function wt(){var t=Object(Z.c)((function(t){return t.app.error})),e=ft(W).setAppError,a=function(t,a){"clickaway"!==a&&e({error:null})},r=null!==t;return o.a.createElement(Ot.a,{open:r,autoHideDuration:6e3,onClose:a},o.a.createElement(Ct,{onClose:a,severity:"error"},t))}var It=function(t){return t.app.status},Tt=function(t){return t.app.isInitialized},St=a(184),At=a(166),Lt=a(172),zt=a(173),Pt=a(88),Ft=W.setAppStatus,Wt=Object(F.c)("auth/login",function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(Ft({status:"loading"})),t.prev=1,t.next=4,L(e);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(Ft({status:"succeeded"})),t.abrupt("return");case 10:return t.abrupt("return",M(r.data,a));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",N(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),Mt=Object(F.c)("auth/logout",function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(Ft({status:"loading"})),t.prev=1,t.next=4,z();case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(Ft({status:"succeeded"})),t.abrupt("return");case 10:return t.abrupt("return",M(r.data,a));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",N(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),Nt={login:Wt,logout:Mt},Dt=Object(F.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedIn:function(t,e){t.isLoggedIn=e.payload.value}},extraReducers:function(t){t.addCase(Wt.fulfilled,(function(t){t.isLoggedIn=!0})).addCase(Mt.fulfilled,(function(t){t.isLoggedIn=!1}))}}),Rt=(Dt.reducer,Dt.actions.setIsLoggedIn,function(){var t=pt(),e=Object(Z.c)(ht),a=Object(Pt.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(){var e=Object(E.a)(k.a.mark((function e(a,r){var n,o,s,i,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Vt.login(a));case 2:n=e.sent,Wt.rejected.match(n)&&(null===(o=n.payload)||void 0===o||null===(s=o.fieldsErrors)||void 0===s?void 0:s.length)&&(c=null===(i=n.payload)||void 0===i?void 0:i.fieldsErrors[0],r.setFieldError(c.field,c.error));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()});return e?o.a.createElement(vt.a,{to:"/todolist-ts"}):o.a.createElement(tt.a,{container:!0,justify:"center"},o.a.createElement(tt.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(St.a,null,o.a.createElement(At.a,null,o.a.createElement("p",null,"To log in get registered ",o.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),o.a.createElement("p",null,"or use common test account credentials:"),o.a.createElement("p",null," Email: free@samuraijs.com"),o.a.createElement("p",null,"Password: free")),o.a.createElement(Lt.a,null,o.a.createElement(at.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement(at.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(zt.a,{label:"Remember me",control:o.a.createElement(ut.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(m.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))}),Vt=Object(h.a)(Object(h.a)({},Nt),Dt.actions),qt=Dt.reducer,Bt=Object(F.c)("application/initializeApp",function(){var t=Object(E.a)(k.a.mark((function t(e,a){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,t.next=3,P();case 3:0===t.sent.data.resultCode&&r(Vt.setIsLoggedIn({value:!0}));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),Ht={initializeApp:Bt},Ut=Object(F.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{},extraReducers:function(t){t.addCase(Bt.fulfilled,(function(t,e){t.isInitialized=!0})).addCase(W.setAppStatus,(function(t,e){t.status=e.payload.status})).addCase(W.setAppError,(function(t,e){t.error=e.payload.error}))}}),Jt=Ut.reducer,Kt=Ut.actions,Xt=Object(h.a)(Object(h.a)({},Kt),Ht);var Yt=function(t){var e=t.demo,a=void 0!==e&&e,s=Object(Z.c)(It),i=Object(Z.c)(Tt),c=Object(Z.c)(r.selectIsLoggedIn),l=ft(Vt).logout,h=ft(Xt).initializeApp;Object(n.useEffect)((function(){a||h()}),[]);var g=Object(n.useCallback)((function(){l()}),[]);return i?o.a.createElement("div",{className:"App"},o.a.createElement(wt,null),o.a.createElement(d.a,{position:"static"},o.a.createElement(p.a,{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(f.a,{variant:"h6"},"My Todolist"),c&&o.a.createElement(m.a,{color:"inherit",onClick:g},"Log out")),"loading"===s&&o.a.createElement(b.a,null)),o.a.createElement(v.a,{fixed:!0},o.a.createElement(vt.b,{exact:!0,path:"/todolist-ts",render:function(){return o.a.createElement(gt,{demo:a})}}),o.a.createElement(vt.b,{path:"/login",render:function(){return o.a.createElement(Rt,null)}}))):o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(u.a,null))},$t=a(49),_t=Object(dt.c)({app:Jt,auth:qt,todolists:jt,tasks:yt}),Gt=Object(F.a)({reducer:_t,middleware:function(t){return t().prepend($t.a)}});window.store=Gt;var Qt=a(48);i.a.render(o.a.createElement(Z.a,{store:Gt},o.a.createElement(Qt.a,null,o.a.createElement(Yt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.131be3a0.chunk.js.map