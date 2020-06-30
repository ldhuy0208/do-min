(this["webpackJsonpmine-sweeper-v2"]=this["webpackJsonpmine-sweeper-v2"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),o=(a(13),a(5)),s=a(1),c=a(2),u=a(4),m=a(3),f=(a(14),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).handleButtonPress=function(){e.buttonPressTimer=setTimeout(e.props.eventHandler,300),e.timeStart=(new Date).getTime()},e.handleButtonRelease=function(){clearTimeout(e.buttonPressTimer),(new Date).getTime()-e.timeStart<200&&e.props.onClick()},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{onTouchStart:this.handleButtonPress,onTouchEnd:this.handleButtonRelease,onMouseDown:this.handleButtonPress,onMouseUp:this.handleButtonRelease,onMouseLeave:this.handleButtonRelease},this.props.children)}}]),a}(n.Component));a(15);function d(e){var t=e.isLose,a=e.isWin,n=e.cell,i=n.isOpen,r=n.isMine,o=n.totalMine,s=n.isFlag;return l.a.createElement(f,{eventHandler:e.toggleFlagHandler,onClick:t||a?function(){}:e.openCellHandler},l.a.createElement("div",{className:"cell"+(i?" open":"")},o,!i&&s&&l.a.createElement("i",{className:"fas fa-flag-checkered"}),t&&r&&l.a.createElement("i",{className:"fas fa-bomb"})))}var h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getSettingLevelGame=function(e){var t,a,n;switch(e){case 1:t=5,a=10,n=5;break;case 2:t=20,a=15,n=10;break;case 3:t=30,a=20,n=15}return{totalMine:t,totalCol:n,totalRow:a}},n.newGame=function(e){for(var t=[],a=n.getSettingLevelGame(e),l=a.totalRow,i=a.totalCol,r=a.totalMine,o=0;o<l;o++){t[o]=[];for(var s=0;s<i;s++)t[o][s]={isOpen:!1,isFlag:!1,totalMineAround:null,isMine:!1}}n.timer=setInterval((function(){n.setState((function(e){return{time:e.time+1}}))}),1e3);for(var c=0;c<r;){var u=Math.round(Math.random()*(l-1)),m=Math.round(Math.random()*(i-1));t[u][m].isMine||(t[u][m].isMine=!0,c++)}n.setState({totalCol:i,totalMine:r,totalRow:l,list:t,isWin:!1,isLose:!1,isStarting:!1,time:0})},n.playAgainHandler=function(){n.setState({isStarting:!0})},n.countMineAround=function(e){for(var t=e.row,a=e.col,l=0,i=t-1;i<=t+1;i++)if(i>=0&&i<n.state.totalRow)for(var r=a-1;r<=a+1;r++)r>=0&&r<n.state.totalCol&&n.state.list[i][r].isMine&&l++;return l},n.checkIsWin=function(){for(var e=n.state,t=e.totalRow,a=e.totalCol,l=e.list,i=0;i<t;i++)for(var r=0;r<a;r++)if(!l[i][r].isOpen&&!l[i][r].isMine)return!1;return!0},n.openCellRegressiveHandler=function(e,t){var a=t.row,l=t.col;if(e[a][l].isOpen)return!1;if(e[a][l].isOpen=!0,e[a][l].isMine)return!0;var i=n.countMineAround(t);if(i>0)e[a][l].totalMine=i;else for(var r=0===a?0:-1,o=0===l?0:-1,s=a===n.state.totalRow-1?1:2,c=l===n.state.totalCol-1?1:2;r<s;r++)for(var u=o;u<c;u++)n.openCellRegressiveHandler(e,{row:a+r,col:l+u});return!1},n.openCellHandler=function(e){var t=Object(o.a)(n.state.list),a=n.openCellRegressiveHandler(t,e);n.setState({list:t,isLose:a},(function(){n.state.isLose?clearInterval(n.timer):n.checkIsWin()&&(clearInterval(n.timer),n.setState({isWin:!0}))}))},n.toggleFlagHander=function(e){var t=e.row,a=e.col,l=Object(o.a)(n.state.list);l[t][a].isFlag=!l[t][a].isFlag,n.setState({list:l})},n.state={list:[],isStarting:!0,totalRow:20,totalCol:10,totalMine:20,isLose:!1,isWin:!1,time:0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app"},l.a.createElement("header",null,l.a.createElement("h1",null,"D\xf2 m\xecn"),this.state.isWin&&l.a.createElement("h2",null,"WIN!"),this.state.isLose&&l.a.createElement("h2",null,"LOSER!"),!this.state.isStarting&&l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"flag"},l.a.createElement("i",{className:"fas fa-flag"}),l.a.createElement("span",null,this.state.totalMine)),l.a.createElement("div",{className:"timer"},l.a.createElement("i",{className:"fas fa-clock"}),l.a.createElement("span",null,this.state.time," s")),l.a.createElement("button",{onClick:this.playAgainHandler},l.a.createElement("i",{className:"fas fa-redo-alt"}),l.a.createElement("span",null,"Ch\u01a1i l\u1ea1i")))),l.a.createElement("main",null,this.state.isStarting?l.a.createElement("div",{className:"difficult-group"},l.a.createElement("button",{className:"easy",onClick:function(){return e.newGame(1)}},"D\u1ec5"),l.a.createElement("button",{className:"normal",onClick:function(){return e.newGame(2)}},"V\u1eeba"),l.a.createElement("button",{className:"hard",onClick:function(){return e.newGame(3)}},"Kh\xf3")):this.state.list.map((function(t,a){return l.a.createElement("div",{className:"row",key:a},t.map((function(t,n){return l.a.createElement(d,{key:n,cell:t,toggleFlagHandler:function(){return e.toggleFlagHander({row:a,col:n})},openCellHandler:function(){return e.openCellHandler({row:a,col:n})},isLose:e.state.isLose,isWin:e.state.isWin})})))}))))}}]),a}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.32f182a0.chunk.js.map