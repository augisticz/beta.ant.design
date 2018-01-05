webpackJsonp([196],{1668:function(t,e){t.exports={content:["section",["p","\u8f93\u5165\u6216\u9009\u62e9\u65e5\u671f\u7684\u63a7\u4ef6\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u5f53\u7528\u6237\u9700\u8981\u8f93\u5165\u4e00\u4e2a\u65e5\u671f\uff0c\u53ef\u4ee5\u70b9\u51fb\u6807\u51c6\u8f93\u5165\u6846\uff0c\u5f39\u51fa\u65e5\u671f\u9762\u677f\u8fdb\u884c\u9009\u62e9\u3002"]],meta:{category:"Components",type:"Data Entry",title:"DatePicker",subtitle:"\u65e5\u671f\u9009\u62e9\u6846",filename:"components/date-picker/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","\u65e5\u671f\u7c7b\u7ec4\u4ef6\u5305\u62ec\u4ee5\u4e0b\u56db\u79cd\u5f62\u5f0f\u3002"],["ul",["li",["p","DatePicker"]],["li",["p","MonthPicker"]],["li",["p","RangePicker"]],["li",["p","WeekPicker"]]],["p",["strong","\u6ce8\u610f\uff1a"],"DatePicker\u3001MonthPicker\u3001RangePicker\u3001WeekPicker \u90e8\u5206 locale \u662f\u4ece value \u4e2d\u8bfb\u53d6\uff0c\u6240\u4ee5\u8bf7\u5148\u6b63\u786e\u8bbe\u7f6e moment \u7684 locale\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// \u9ed8\u8ba4\u8bed\u8a00\u4e3a en-US\uff0c\u5982\u679c\u4f60\u9700\u8981\u8bbe\u7f6e\u5176\u4ed6\u8bed\u8a00\uff0c\u63a8\u8350\u5728\u5165\u53e3\u6587\u4ef6\u5168\u5c40\u8bbe\u7f6e locale</span>\n<span class="token comment" spellcheck="true">// import moment from \'moment\';</span>\n<span class="token comment" spellcheck="true">// import \'moment/locale/zh-cn\';</span>\n<span class="token comment" spellcheck="true">// moment.locale(\'zh-cn\');</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'2015-01-01\'</span><span class="token punctuation">,</span> <span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","// \u9ed8\u8ba4\u8bed\u8a00\u4e3a en-US\uff0c\u5982\u679c\u4f60\u9700\u8981\u8bbe\u7f6e\u5176\u4ed6\u8bed\u8a00\uff0c\u63a8\u8350\u5728\u5165\u53e3\u6587\u4ef6\u5168\u5c40\u8bbe\u7f6e locale\n// import moment from 'moment';\n// import 'moment/locale/zh-cn';\n// moment.locale('zh-cn');\n\n<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />"]],["h3","\u5171\u540c\u7684 API"],["p","\u4ee5\u4e0b API \u4e3a DatePicker\u3001MonthPicker\u3001RangePicker, WeekPicker \u5171\u4eab\u7684 API\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","allowClear"],["td","\u662f\u5426\u663e\u793a\u6e05\u9664\u6309\u94ae"],["td","boolean"],["td","true"]],["tr",["td","autoFocus"],["td","\u81ea\u52a8\u83b7\u53d6\u7126\u70b9"],["td","boolean"],["td","false"]],["tr",["td","className"],["td","\u9009\u62e9\u5668 className"],["td","string"],["td","''"]],["tr",["td","dateRender"],["td","\u81ea\u5b9a\u4e49\u65e5\u671f\u5355\u5143\u683c\u7684\u5185\u5bb9"],["td","function(currentDate: moment, today: moment) => React.ReactNode"],["td","-"]],["tr",["td","disabled"],["td","\u7981\u7528"],["td","boolean"],["td","false"]],["tr",["td","disabledDate"],["td","\u4e0d\u53ef\u9009\u62e9\u7684\u65e5\u671f"],["td","(currentDate: moment) => boolean"],["td","\u65e0"]],["tr",["td","getCalendarContainer"],["td","\u5b9a\u4e49\u6d6e\u5c42\u7684\u5bb9\u5668\uff0c\u9ed8\u8ba4\u4e3a body \u4e0a\u65b0\u5efa div"],["td","function(trigger)"],["td","\u65e0"]],["tr",["td","locale"],["td","\u56fd\u9645\u5316\u914d\u7f6e"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"\u9ed8\u8ba4\u914d\u7f6e"]]],["tr",["td","open"],["td","\u63a7\u5236\u5f39\u5c42\u662f\u5426\u5c55\u5f00"],["td","boolean"],["td","-"]],["tr",["td","placeholder"],["td","\u8f93\u5165\u6846\u63d0\u793a\u6587\u5b57"],["td","string","|","RangePicker","[","]"],["td","-"]],["tr",["td","popupStyle"],["td","\u683c\u5916\u7684\u5f39\u51fa\u65e5\u5386\u6837\u5f0f"],["td","object"],["td","{}"]],["tr",["td","size"],["td","\u8f93\u5165\u6846\u5927\u5c0f\uff0c",["code","large"]," \u9ad8\u5ea6\u4e3a 40px\uff0c",["code","small"]," \u4e3a 24px\uff0c\u9ed8\u8ba4\u662f 32px"],["td","string"],["td","\u65e0"]],["tr",["td","style"],["td","\u81ea\u5b9a\u4e49\u8f93\u5165\u6846\u6837\u5f0f"],["td","object"],["td","{}"]],["tr",["td","onOpenChange"],["td","\u5f39\u51fa\u65e5\u5386\u548c\u5173\u95ed\u65e5\u5386\u7684\u56de\u8c03"],["td","function(status)"],["td","\u65e0"]]]],["h3","\u5171\u540c\u7684\u65b9\u6cd5"],["table",["thead",["tr",["th","\u540d\u79f0"],["th","\u63cf\u8ff0"]]],["tbody",["tr",["td","blur()"],["td","\u79fb\u9664\u7126\u70b9"]],["tr",["td","focus()"],["td","\u83b7\u53d6\u7126\u70b9"]]]],["h3","DatePicker"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u65e5\u671f"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","\u65e0"]],["tr",["td","disabledTime"],["td","\u4e0d\u53ef\u9009\u62e9\u7684\u65f6\u95f4"],["td","function(date)"],["td","\u65e0"]],["tr",["td","format"],["td","\u5c55\u793a\u7684\u65e5\u671f\u683c\u5f0f\uff0c\u914d\u7f6e\u53c2\u8003 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",'"YYYY-MM-DD"']],["tr",["td","renderExtraFooter"],["td","\u5728\u9762\u677f\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u9875\u811a"],["td","() => React.ReactNode"],["td","-"]],["tr",["td","showTime"],["td","\u589e\u52a0\u65f6\u95f4\u9009\u62e9\u529f\u80fd"],["td","Object","|","boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]]],["tr",["td","showTime.defaultValue"],["td","\u8bbe\u7f6e\u7528\u6237\u9009\u62e9\u65e5\u671f\u65f6\u9ed8\u8ba4\u7684\u65f6\u5206\u79d2\uff0c",["a",{title:null,href:"https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date"},"\u4f8b\u5b50"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","moment()"]],["tr",["td","showToday"],["td","\u662f\u5426\u5c55\u793a\u201c\u4eca\u5929\u201d\u6309\u94ae"],["td","boolean"],["td","true"]],["tr",["td","value"],["td","\u65e5\u671f"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","\u65e0"]],["tr",["td","onChange"],["td","\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03"],["td","function(date: moment, dateString: string)"],["td","\u65e0"]],["tr",["td","onOk"],["td","\u70b9\u51fb\u786e\u5b9a\u6309\u94ae\u7684\u56de\u8c03"],["td","function()"],["td","-"]]]],["h3","MonthPicker"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u65e5\u671f"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","\u65e0"]],["tr",["td","format"],["td","\u5c55\u793a\u7684\u65e5\u671f\u683c\u5f0f\uff0c\u914d\u7f6e\u53c2\u8003 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",'"YYYY-MM"']],["tr",["td","monthCellContentRender"],["td","\u81ea\u5b9a\u4e49\u7684\u6708\u4efd\u5185\u5bb9\u6e32\u67d3\u65b9\u6cd5"],["td","function(date, locale): ReactNode"],["td","-"]],["tr",["td","renderExtraFooter"],["td","\u5728\u9762\u677f\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u9875\u811a"],["td","() => React.ReactNode"],["td","-"]],["tr",["td","value"],["td","\u65e5\u671f"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","\u65e0"]],["tr",["td","onChange"],["td","\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03\uff0c\u53d1\u751f\u5728\u7528\u6237\u9009\u62e9\u65f6\u95f4\u65f6"],["td","function(date: moment, dateString: string)"],["td","-"]]]],["h3","WeekPicker"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u65e5\u671f"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","format"],["td","\u5c55\u793a\u7684\u65e5\u671f\u683c\u5f0f\uff0c\u914d\u7f6e\u53c2\u8003 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",'"YYYY-Wo"']],["tr",["td","value"],["td","\u65e5\u671f"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","onChange"],["td","\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03\uff0c\u53d1\u751f\u5728\u7528\u6237\u9009\u62e9\u65f6\u95f4\u65f6"],["td","function(date: moment, dateString: string)"],["td","-"]]]],["h3","RangePicker"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u65e5\u671f"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","\u65e0"]],["tr",["td","disabledTime"],["td","\u4e0d\u53ef\u9009\u62e9\u7684\u65f6\u95f4"],["td","function(dates: ",["span","moment, moment"],", partial: ",["code","'start'|'end'"],")"],["td","\u65e0"]],["tr",["td","format"],["td","\u5c55\u793a\u7684\u65e5\u671f\u683c\u5f0f"],["td","string"],["td",'"YYYY-MM-DD HH:mm:ss"']],["tr",["td","ranges \xa0 \xa0 \xa0"],["td","\u9884\u8bbe\u65f6\u95f4\u8303\u56f4\u5feb\u6377\u9009\u62e9"],["td","{ ",["span","range: string"],":"," ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","] }"],["td","\u65e0"]],["tr",["td","renderExtraFooter"],["td","\u5728\u9762\u677f\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u9875\u811a"],["td","() => React.ReactNode"],["td","-"]],["tr",["td","showTime"],["td","\u589e\u52a0\u65f6\u95f4\u9009\u62e9\u529f\u80fd"],["td","Object","|","boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]]],["tr",["td","showTime.defaultValue"],["td","\u8bbe\u7f6e\u7528\u6237\u9009\u62e9\u65e5\u671f\u65f6\u9ed8\u8ba4\u7684\u65f6\u5206\u79d2\uff0c",["a",{title:null,href:"https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date"},"\u4f8b\u5b50"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td",["span","moment(), moment()"]]],["tr",["td","value"],["td","\u65e5\u671f"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","\u65e0"]],["tr",["td","onCalendarChange"],["td","\u5f85\u9009\u65e5\u671f\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03"],["td","function(dates: ",["span","moment, moment"],", dateStrings: ",["span","string, string"],")"],["td","\u65e0"]],["tr",["td","onChange"],["td","\u65e5\u671f\u8303\u56f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03"],["td","function(dates: ",["span","moment, moment"],", dateStrings: ",["span","string, string"],")"],["td","\u65e0"]],["tr",["td","onOk"],["td","\u70b9\u51fb\u786e\u5b9a\u6309\u94ae\u7684\u56de\u8c03"],["td","function()"],["td","-"]]]],["style","\n.code-box-demo .ant-calendar-picker {\n  margin: 0 8px 12px 0;\n}\n"]]}}});