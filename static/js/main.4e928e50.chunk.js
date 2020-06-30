(this["webpackJsonpmine-sweeper-v2"]=this["webpackJsonpmine-sweeper-v2"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),l=n.n(o),r=(n(13),n(5)),s=n(1),c=n(2),u=n(4),m=n(3),f=(n(14),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleButtonPress=function(){e.isAcceptTouch=!0,e.buttonPressTimer=setTimeout(e.props.eventHandler,300),e.timeStart=(new Date).getTime()},e.handleButtonRelease=function(){clearTimeout(e.buttonPressTimer);var t=(new Date).getTime()-e.timeStart;e.isAcceptTouch&&t<200&&e.props.onClick(),console.log(t)},e.isAcceptTouch=!0,e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{onTouchStart:this.handleButtonPress,onTouchEnd:this.handleButtonRelease,onTouchMove:function(){e.isAcceptTouch=!1,clearTimeout(e.buttonPressTimer)},onMouseDown:this.handleButtonPress,onMouseUp:this.handleButtonRelease,onMouseLeave:this.handleButtonRelease},this.props.children)}}]),n}(a.Component));n(15);function h(e){var t=e.isLose,n=e.isWin,a=e.cell,o=a.isOpen,l=a.isMine,r=a.totalMine,s=a.isFlag;return i.a.createElement(f,{eventHandler:t||n?function(){}:e.toggleFlagHandler,onClick:t||n?function(){}:e.openCellHandler},i.a.createElement("div",{className:"cell"+(o?" open":"")},r,!o&&s&&(!l||!t)&&i.a.createElement("i",{className:"fas fa-flag-checkered"}),t&&l&&i.a.createElement("i",{className:"fas fa-bomb"})))}var d=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getSettingLevelGame=function(e){var t,n,a;switch(e){case 1:t=10,n=10,a=5;break;case 2:t=30,n=15,a=10;break;case 3:t=60,n=20,a=15}return{totalMine:t,totalCol:a,totalRow:n}},a.newGame=function(e){for(var t=[],n=a.getSettingLevelGame(e),i=n.totalRow,o=n.totalCol,l=n.totalMine,r=0;r<i;r++){t[r]=[];for(var s=0;s<o;s++)t[r][s]={isOpen:!1,isFlag:!1,totalMineAround:null,isMine:!1}}a.timer=setInterval((function(){a.setState((function(e){return{time:e.time+1}}))}),1e3);for(var c=0;c<l;){var u=Math.round(Math.random()*(i-1)),m=Math.round(Math.random()*(o-1));t[u][m].isMine||(t[u][m].isMine=!0,c++)}a.setState({totalCol:o,totalMine:l,totalRow:i,list:t,isWin:!1,isLose:!1,isStarting:!1,time:0})},a.playAgainHandler=function(){a.setState({isStarting:!0,isLose:!1,isWin:!1}),clearInterval(a.timer)},a.countMineAround=function(e){for(var t=e.row,n=e.col,i=0,o=t-1;o<=t+1;o++)if(o>=0&&o<a.state.totalRow)for(var l=n-1;l<=n+1;l++)l>=0&&l<a.state.totalCol&&a.state.list[o][l].isMine&&i++;return i},a.checkIsWin=function(){for(var e=a.state,t=e.totalRow,n=e.totalCol,i=e.list,o=0;o<t;o++)for(var l=0;l<n;l++)if(!i[o][l].isOpen&&!i[o][l].isMine)return!1;return!0},a.openCellRegressiveHandler=function(e,t){var n=t.row,i=t.col;if(e[n][i].isOpen)return!1;if(e[n][i].isOpen=!0,e[n][i].isMine)return!0;var o=a.countMineAround(t);if(o>0)e[n][i].totalMine=o;else for(var l=0===n?0:-1,r=0===i?0:-1,s=n===a.state.totalRow-1?1:2,c=i===a.state.totalCol-1?1:2;l<s;l++)for(var u=r;u<c;u++)a.openCellRegressiveHandler(e,{row:n+l,col:i+u});return!1},a.openCellHandler=function(e){var t=Object(r.a)(a.state.list),n=a.openCellRegressiveHandler(t,e);a.setState({list:t,isLose:n},(function(){a.state.isLose?clearInterval(a.timer):a.checkIsWin()&&(clearInterval(a.timer),a.setState({isWin:!0}))}))},a.toggleFlagHander=function(e){var t=e.row,n=e.col,i=Object(r.a)(a.state.list);i[t][n].isFlag=!i[t][n].isFlag,a.setState({list:i})},a.state={list:[],isStarting:!0,totalRow:20,totalCol:10,totalMine:20,isLose:!1,isWin:!1,time:0},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},i.a.createElement("header",null,i.a.createElement("h1",null,"D\xf2 m\xecn"),this.state.isWin&&i.a.createElement("h2",null,"WIN!"),this.state.isLose&&i.a.createElement("h2",null,"LOSER!"),!this.state.isStarting&&i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"flag"},i.a.createElement("i",{className:"fas fa-bomb"}),i.a.createElement("span",null,this.state.totalMine)),i.a.createElement("div",{className:"timer"},i.a.createElement("i",{className:"fas fa-clock"}),i.a.createElement("span",null,this.state.time," s")),i.a.createElement("button",{onClick:this.playAgainHandler},i.a.createElement("i",{className:"fas fa-redo-alt"}),i.a.createElement("span",null,"Ch\u01a1i l\u1ea1i")))),i.a.createElement("main",null,i.a.createElement("div",{className:"table"},this.state.isStarting?i.a.createElement("div",{className:"difficult-group"},i.a.createElement("button",{className:"easy",onClick:function(){return e.newGame(1)}},"D\u1ec5"),i.a.createElement("button",{className:"normal",onClick:function(){return e.newGame(2)}},"V\u1eeba"),i.a.createElement("button",{className:"hard",onClick:function(){return e.newGame(3)}},"Kh\xf3")):this.state.list.map((function(t,n){return i.a.createElement("div",{className:"row",key:n},t.map((function(t,a){return i.a.createElement(h,{key:a,cell:t,toggleFlagHandler:function(){return e.toggleFlagHander({row:n,col:a})},openCellHandler:function(){return e.openCellHandler({row:n,col:a})},isLose:e.state.isLose,isWin:e.state.isWin})})))})))))}}]),n}(a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.4e928e50.chunk.js.map