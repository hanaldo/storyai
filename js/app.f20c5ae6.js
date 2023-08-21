(function(){"use strict";var e={5936:function(e,t,o){var n=o(9963),a=o(6252);const s=(0,a._)("div",{class:"w-8"},null,-1);function r(e,t,o,n,r,i){const c=(0,a.up)("router-link"),l=(0,a.up)("van-nav-bar"),d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l,{title:"StoryAI",style:{"background-color":"#e0e9f5"},clickable:!1},{right:(0,a.w5)((()=>[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),s,(0,a.Wm)(c,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1})])),_:1}),(0,a.Wm)(d)],64)}var i=o(6907),c=o(2406),l={components:{[i.zx.name]:i.zx,[c.l2.name]:c.l2}},d=o(3744);const u=(0,d.Z)(l,[["render",r]]);var p=u,m=o(2201),h=o(3577);const y=e=>((0,a.dD)("data-v-3d132966"),e=e(),(0,a.Cn)(),e),v={class:"flex flex-wrap"},x={class:"md:w-5/12 w-full mb-12"},f={class:"flex flex-col items-center justify-end h-full p-4"},g={class:"w-full overflow-scroll flex flex-col-reverse"},w={ref:"chatBottom"},b={class:"mx-4 p-4 bg-white rounded-lg"},N={key:0},k=["innerHTML","onDragstart"],I={key:1,class:"flex gap-4"},C=["src","onDragstart"],D={key:2},T={class:"w-full"},O={class:"md:w-7/12 w-full"},_=y((()=>(0,a._)("defs",null,[(0,a._)("marker",{id:"my_arrow",viewBox:"0 0 10 10",refX:"0",refY:"5",markerWidth:"3",markerHeight:"3",orient:"auto-start-reverse"},[(0,a._)("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#DC143C","fill-opacity":"0.5"})])],-1))),S=["x1","y1","x2","y2","onClick"];function W(e,t,o,s,r,i){const c=(0,a.up)("van-image"),l=(0,a.up)("my-buttons"),d=(0,a.up)("van-button"),u=(0,a.up)("van-field"),p=(0,a.up)("van-cell-group"),m=(0,a.up)("my-node"),y=(0,a.up)("my-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",v,[(0,a._)("div",x,[(0,a._)("div",{class:"m-2 theme-color rounded-lg",onDragover:t[3]||(t[3]=(...e)=>s.onDragover&&s.onDragover(...e))},[(0,a._)("div",f,[(0,a._)("div",g,[(0,a._)("div",w,null,512),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.history,(e=>((0,a.wg)(),(0,a.iD)("div",{class:(0,h.C_)(["flex items-start py-2 mb-8",{"flex-row-reverse":e.self}]),key:e.nodeId},[(0,a._)("div",null,[e.self?((0,a.wg)(),(0,a.j4)(c,{key:0,width:"3rem",height:"3rem",round:"",fit:"cover",src:"images/test_me.png"})):((0,a.wg)(),(0,a.j4)(c,{key:1,width:"3rem",height:"3rem",round:"",fit:"cover",src:"images/test_ai.png"}))]),(0,a._)("div",b,[(0,a._)("div",{class:(0,h.C_)(["cursor-move",{"text-right":e.self}])},[e.type===s.NodeTypes.text?((0,a.wg)(),(0,a.iD)("div",N,[(0,a._)("span",{innerHTML:e.content[0],draggable:"true",onDragstart:t=>s.startDrag(e.content[0],e.type)},null,40,k)])):(0,a.kq)("",!0),e.type===s.NodeTypes.image?((0,a.wg)(),(0,a.iD)("div",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.content,((t,o)=>((0,a.wg)(),(0,a.iD)("img",{key:o,width:"150","aspect-ratio":"4/3",cover:"",src:t,draggable:"true",onDragstart:o=>s.startDrag(t,e.type)},null,40,C)))),128))])):(0,a.kq)("",!0),e.type===s.NodeTypes.buttons?((0,a.wg)(),(0,a.iD)("div",D,[(0,a.Wm)(l,{content:e.content,onButtonClicked:s.pickOption},null,8,["content","onButtonClicked"])])):(0,a.kq)("",!0)],2)])],2)))),128))]),(0,a._)("div",T,[s.sending?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(p,{key:0,inset:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:s.chatToSend,"onUpdate:modelValue":t[1]||(t[1]=e=>s.chatToSend=e),label:"",onKeyup:t[2]||(t[2]=(0,n.D2)((e=>s.enterText()),["enter"]))},{button:(0,a.w5)((()=>[(0,a.Wm)(d,{size:"small",type:"success",onClick:t[0]||(t[0]=e=>s.enterText())},{default:(0,a.w5)((()=>[(0,a.Uk)("Send")])),_:1})])),_:1},8,["modelValue"])])),_:1}))])])],32)]),(0,a._)("div",O,[(0,a._)("div",{class:"m-2 theme-color rounded-lg overflow-scroll",onDragover:t[6]||(t[6]=(...e)=>s.onDragover&&s.onDragover(...e)),onDrop:t[7]||(t[7]=(...e)=>s.onDrop&&s.onDrop(...e))},[((0,a.wg)(),(0,a.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",class:"canvas",width:"1200",height:"1200",onMousemove:t[4]||(t[4]=(...e)=>s.mosemove&&s.mosemove(...e)),onMouseup:t[5]||(t[5]=(...e)=>s.mouseup&&s.mouseup(...e))},[_,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.canvasNodes,((e,t)=>((0,a.wg)(),(0,a.j4)(m,{key:e.id,node:e,onOnMouseDown:s.onNodeMouseDown,onOnNodeClicked:o=>s.clickCanvasNode(e,t),onNewPosition:t=>s.newPosition(t,e)},null,8,["node","onOnMouseDown","onOnNodeClicked","onNewPosition"])))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.connections,((e,t)=>((0,a.wg)(),(0,a.iD)("line",{key:t,x1:e.sx,y1:e.sy,x2:e.ex,y2:e.ey,stroke:"#DC143C","stroke-width":"6","stroke-opacity":"0.5","marker-end":"url(#my_arrow)",onClick:e=>s.removeLine(t)},null,8,S)))),128))],32))],32)])]),(0,a.Wm)(y,{ref:"editor",onRemoveNode:t[8]||(t[8]=e=>s.removeCanvasNode())},null,512)],64)}var j=o(7632),H=o(2262),E=o(8480),M=o(3864),F=o(5267),Y=o(8041),B=o(6485),V={image:"img",text:"txt",buttons:"btn",k1:"ixKGMhIZdoT3BlbkFJkRRXX",k2:"sk-8j5wEgLGIE",k3:"jmeF2qA0Pmd8gtd"};const A=["x","y","width","height"],L=["width"],U=["width","height"],q=["width","src"];function z(e,t,o,n,s,r){return(0,a.wg)(),(0,a.iD)("svg",{x:n.x,y:n.y,width:o.node.w,height:o.node.h,onMousedown:t[0]||(t[0]=(...e)=>n.mousedown&&n.mousedown(...e)),class:"cursor-pointer",onMouseenter:t[1]||(t[1]=(...e)=>n.mouseenter&&n.mouseenter(...e)),onMouseleave:t[2]||(t[2]=(...e)=>n.mouseleave&&n.mouseleave(...e)),onMouseup:t[3]||(t[3]=(...e)=>n.mouseup&&n.mouseup(...e))},[o.node.varName?((0,a.wg)(),(0,a.iD)("rect",{key:0,width:n.varTitleWidth,height:"40",x:"10",y:"10",fill:"#ffffff","fill-opacity":"0.7","stroke-width":"3",stroke:"#00A3FE",rx:"15"},null,8,L)):(0,a.kq)("",!0),o.node.varName?((0,a.wg)(),(0,a.iD)("text",{key:1,x:"20",y:"35",ref:"varTitle",class:"var-title"},(0,h.zw)(o.node.varName),513)):(0,a.kq)("",!0),((0,a.wg)(),(0,a.iD)("foreignObject",{width:o.node.w,height:o.node.h,x:"15",y:"50"},[o.node.type===n.NodeTypes.text?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,h.C_)([o.node.class,"px-3"])},(0,h.zw)(o.node.content),3)):(0,a.kq)("",!0),o.node.type===n.NodeTypes.image?((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,h.C_)(o.node.class)},[(0,a._)("img",{width:o.node.w,src:o.node.content},null,8,q)],2)):(0,a.kq)("",!0)],8,U))],40,A)}var Z={props:{node:Object},setup(e,{emit:t}){const o=(0,H.iH)(e.node.x),n=(0,H.iH)(e.node.y);let s=!1;const r=function(e,a){s=!0,o.value+=e,n.value+=a,t("newPosition",{x:o.value,y:n.value,tw:p.value})},i=function(e){e.stopPropagation(),e.preventDefault(),t("onMouseDown",r)},c=function(){},l=function(){},d=function(){s||t("onNodeClicked"),s=!1},u=(0,H.iH)(null),p=(0,H.iH)(50),m=function(){e.node.varName&&u.value&&(p.value=u.value.getBBox().width+20)};return(0,a.bv)(m),{NodeTypes:V,x:o,y:n,mousedown:i,mouseenter:c,mouseleave:l,mouseup:d,varTitle:u,varTitleWidth:p}}};const R=(0,d.Z)(Z,[["render",z],["__scopeId","data-v-c0e3c546"]]);var J=R;const P={class:"flex flex-wrap gap-4"},G=["onClick"];function K(e,t,o,n,s,r){return(0,a.wg)(),(0,a.iD)("div",P,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.buttons,((e,t)=>((0,a.wg)(),(0,a.iD)("button",{class:(0,h.C_)(e.styleClass),key:t,onClick:t=>n.clickButton(e)},(0,h.zw)(e.text),11,G)))),128))])}var X={props:{content:Array},setup(e,{emit:t}){const o=(0,H.iH)(e.content);o.value.forEach((function(e){e.styleClass=["button-37"],e.other?e.styleClass.push("button-color-2"):e.styleClass.push("button-color-1")}));const n=function(e){t("buttonClicked",e)};return{buttons:o,clickButton:n}}};const Q=(0,d.Z)(X,[["render",K],["__scopeId","data-v-3fb0aae6"]]);var $=Q,ee=JSON.parse('{"N":[{"id":"001","info":"Hello there, welcome to our Narrative Writing lesson today! Shall we start?","actions":[{"type":"options","options":[{"text":"Yes","reply":"Great, let\'s go!","next":"004"},{"text":"No","reply":"That\'s ok, let me know when you are ready!","next":"001","other":true}]}]},{"id":"004","info":"Alright, first, do you want to pick a genre? It may help narrowing down your writing.","actions":[{"type":"options","options":[{"text":"Sure","reply":"","next":"005"},{"text":"No thanks, I have an idea in mind","reply":"Alrighty then! Can you type your idea?","next":"009","other":true}]}]},{"id":"005","info":"Alright, pick a genre you want...","actions":[{"type":"options","options":[{"text":"Historical","reply":"","next":"006","save":"genre"},{"text":"Action","reply":"","next":"006","save":"genre"},{"text":"Fairy Tale","reply":"","next":"006","save":"genre"},{"text":"Horror","reply":"","next":"006","save":"genre"},{"text":"Comedy","reply":"","next":"006","save":"genre"},{"text":"Fantasy","reply":"","next":"006","save":"genre"}]}]},{"id":"006","info":"","actions":[{"type":"publish","text":"{genre}","varNames":["genre"]},{"type":"next","next":"007"}]},{"id":"007","info":"Now, can you think of an idea to write a story about based on {genre}?","varNames":["genre"],"actions":[{"type":"options","options":[{"text":"Yes","reply":"Great, can you type your idea?","next":"009"},{"text":"I need help","reply":"That\'s ok, here are some ideas for you...","next":"008"}]}]},{"id":"008","info":"","actions":[{"type":"listStoryIdeas","seed":"{genre}","number":4,"grade":3,"maxWords":12,"save":"userIdea","varNames":["genre"],"options":[{"text":"I don\'t like any above","reply":"That’s ok, here are some more...","next":"008","other":true}]},{"type":"next","next":"010"}]},{"id":"009","info":"","actions":[{"type":"saveInput","varName":"idea"},{"type":"rephrase","text":"Cool, so your idea is about \'{userIdea}\', is that correct?","input":"{idea}","save":"userIdea","varNames":["idea","userIdea"],"options":[{"text":"Yes","reply":"That is a nice idea!","next":"010"},{"text":"No","reply":"That\'s ok, try to type your idea again","next":"009","other":true}]}]},{"id":"010","info":"","actions":[{"type":"publish","text":"{userIdea}","varNames":["userIdea"]},{"type":"next","next":"011"}]},{"id":"011","info":"Now, based on your idea, what or who is the main character in your story?","actions":[{"type":"options","options":[{"text":"I need help","reply":"That\'s ok, here are a few names you can use as for your main character:","next":"013"}]},{"type":"saveInput","varName":"mainChar"},{"type":"next","next":"012"}]},{"id":"012","info":"","actions":[{"type":"publish","text":"{mainChar}","varNames":["mainChar"]},{"type":"next","next":"014"}]},{"id":"013","info":"","actions":[{"type":"listIdeasFromIdea","idea":"{userIdea}","term":"names","desc":"main character","number":5,"save":"mainChar","varNames":["userIdea"]},{"type":"next","next":"012"}]},{"id":"014","info":"Can you give more description of your character? appearance age, gender, feeling (emotion), anything.","actions":[{"type":"options","options":[{"text":"I need help","reply":"That\'s ok, let me help you.","next":"016"}]},{"type":"saveInput","varName":"idea"},{"type":"rephrase","text":"Cool, so your character \'{mainChar}\' is \'{desc}\', is that correct?","input":"{idea}","save":"desc","varNames":["mainChar","desc","idea"],"options":[{"text":"Yes","reply":"","next":"015"},{"text":"No","reply":"","next":"014","other":true}]}]},{"id":"015","info":"","actions":[{"type":"publish","text":"{desc}","varNames":["desc"]},{"type":"next","next":"018"}]},{"id":"016","info":"Ok, so, {mainChar} can feel...","varNames":["mainChar"],"actions":[{"type":"listIdeasFromIdea","idea":"{userIdea}","term":"emotions","desc":"the feelings of the character","number":4,"save":"desc","varNames":["userIdea","mainChar"]},{"type":"next","next":"017"}]},{"id":"017","info":"And {mainChar} can look like...","varNames":["mainChar"],"actions":[{"type":"listIdeasFromIdea","idea":"{userIdea}","term":"appearance","desc":"how the main character look like","number":4,"append":"desc","varNames":["userIdea"]},{"type":"publish","text":"{desc}","varNames":["desc"]},{"type":"next","next":"018"}]},{"id":"018","info":"Do you want to generate an image of your character?","actions":[{"type":"options","options":[{"text":"Yes","next":"019"},{"text":"No","next":"020","other":true}]}]},{"id":"019","info":"","actions":[{"type":"makeImage","text":"{userIdea}, {desc}","varNames":["userIdea","desc"]},{"type":"next","next":"019a"}]},{"id":"019a","info":"Cool, is there any image you like? Just drag it to your canvas!","actions":[{"type":"options","options":[{"text":"Yes","next":"020"},{"text":"No","reply":"Hang on, here we go again...","next":"019","other":true}]}]},{"id":"020","info":"Where does the story take place?","actions":[{"type":"options","options":[{"text":"I need help","next":"021"}]},{"type":"saveInput","varName":"place"},{"type":"publish","text":"{place}","varNames":["place"]},{"type":"next","next":"022"}]},{"id":"021","info":"","actions":[{"type":"listIdeasFromIdea","idea":"{userIdea}","term":"places","desc":"where the story can take place","number":4,"save":"place","varNames":["userIdea"]},{"type":"publish","text":"{place}","varNames":["place"]},{"type":"next","next":"022"}]},{"id":"022","info":"What do the main characters want to do?","actions":[{"type":"options","options":[{"text":"I need help","next":"023"}]},{"type":"saveInput","varName":"mainObjective"},{"type":"publish","text":"{mainObjective}","varNames":["mainObjective"]},{"type":"next","next":"025"}]},{"id":"023","info":"","actions":[{"type":"listIdeasFromIdea","idea":"{userIdea}, {desc}","term":"actions","desc":"what the main character in the story wants to do","number":4,"save":"mainObjective","varNames":["userIdea","desc"]},{"type":"publish","text":"{mainObjective}","varNames":["mainObjective"]},{"type":"next","next":"025"}]},{"id":"025","info":"Great, let\'s write an introduction of story based on \'{userIdea}\' within 50 words.","varNames":["userIdea"],"actions":[{"type":"options","options":[{"text":"I need help","reply":"That\'s ok, here is an example introduction for your story...","next":"026"}]},{"type":"saveInput","varName":"introduction"},{"type":"next","next":"028"}]},{"id":"026","info":"Please wait... I am trying... ^_^ And please note, you can always edit the writing on the canvas!","actions":[{"type":"writeFromSeed","seed":"{userIdea}. The main character is {mainChar}, and {desc}, and {mainObjective}. This story happens at {place}","comp":"exposition","concept":"story","grade":3,"maxWords":50,"varNames":["userIdea","mainChar","desc","place","mainObjective"],"save":"introduction"},{"type":"next","next":"027"}]},{"id":"027","info":"Do you like it?","actions":[{"type":"options","options":[{"text":"Yes","reply":"","next":"028"},{"text":"No","reply":"No problem, here is another one...","next":"026","other":true}]}]},{"id":"028","info":"Cool, now you have the introduction of your story, next, what is the major problem in this story?","actions":[{"type":"publish","text":"{introduction}","varNames":["introduction"]},{"type":"drawInfer","from":["userIdea","mainChar","desc","place","mainObjective"],"to":["introduction"]},{"type":"options","options":[{"text":"I need help","reply":"That\'s ok, here is an example problem for your story...","next":"029"}]},{"type":"saveInput","varName":"conflict"},{"type":"next","next":"031"}]},{"id":"029","info":"Based on your \'introduction\', the problem of your story could be something like this...","actions":[{"type":"writeFromSeed","seed":"{introduction}","comp":"conflict","concept":"story","grade":3,"maxWords":50,"varNames":["introduction"],"save":"conflict"},{"type":"next","next":"030"}]},{"id":"030","info":"Do you like it?","actions":[{"type":"options","options":[{"text":"Yes","reply":"","next":"031"},{"text":"No","reply":"No problem, here is another one...","next":"029","other":true}]}]},{"id":"031","info":"Wow, the conflict seems intense, next, what is the climax in this story?","actions":[{"type":"publish","text":"{conflict}","varNames":["conflict"]},{"type":"drawInfer","from":["introduction"],"to":["conflict"]},{"type":"options","options":[{"text":"I need help","reply":"That\'s ok, here is an example climax for your story...","next":"032"}]},{"type":"saveInput","varName":"climax"},{"type":"next","next":"034"}]},{"id":"032","info":"The climax of your story could be something like this...","actions":[{"type":"writeFromSeed","seed":"{userIdea} {conflict}","comp":"climax","concept":"story","grade":3,"maxWords":100,"varNames":["conflict","userIdea"],"save":"climax"},{"type":"next","next":"033"}]},{"id":"033","info":"Do you like it?","actions":[{"type":"options","options":[{"text":"Yes","reply":"","next":"034"},{"text":"No","reply":"No problem, here is another one...","next":"032","other":true}]}]},{"id":"034","info":"Alright! That is breathtaking! Now, what will be the ending for your story?","actions":[{"type":"publish","text":"{climax}","varNames":["climax"]},{"type":"drawInfer","from":["conflict"],"to":["climax"]},{"type":"options","options":[{"text":"I need help","reply":"That\'s ok, here is an example ending for your story...","next":"035"}]},{"type":"saveInput","varName":"ending"},{"type":"next","next":"900"}]},{"id":"035","info":"","actions":[{"type":"writeFromSeed","seed":"{userIdea} {climax}","comp":"ending","concept":"story","grade":3,"maxWords":50,"varNames":["climax","userIdea"],"save":"ending"},{"type":"next","next":"036"}]},{"id":"036","info":"Do you like it?","actions":[{"type":"options","options":[{"text":"Yes","reply":"","next":"900"},{"text":"No","reply":"No problem, here is another one...","next":"035","other":true}]}]},{"id":"900","info":"Cool, would you like us to provide some feedback on your writing? (this is a testing feature)","actions":[{"type":"publish","text":"{ending}","varNames":["ending"]},{"type":"drawInfer","from":["climax"],"to":["ending"]},{"type":"options","options":[{"text":"Yes","reply":"","next":"901"},{"text":"No","reply":"","next":"999","other":true}]}]},{"id":"901","info":"","actions":[{"type":"gradeWriting","text":"{introduction}\\n{conflict}\\n{climax}\\n{ending}","varNames":["introduction","conflict","climax","ending"]},{"type":"next","next":"999"}]},{"id":"999","info":"Alright! We know you wanted to polish your story, but since this is a demo of our learning system, we have to end here, see you next time with more exciting features!","actions":[{"type":"options","options":[{"text":"Save entire conversation","reply":"","next":"902"},{"text":"Save your story","reply":"","next":"903"}]}]},{"id":"902","actions":[{"type":"exportConver"},{"type":"next","next":"999"}]},{"id":"903","actions":[{"type":"save"},{"type":"next","next":"999"}]}]}'),te={api:null,async serviceRephrase(e,t,o){const n="rephrase this text '{input}' with correct grammar, that is understandable by {grade}-grade students, and do not use more than {maxWords} words.",a=n.replace("{input}",e).replace("{grade}",t).replace("{maxWords}",o),s=await this.api.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"user",content:a}]});return console.log(s),s.data.choices[0].message.content},async serviceWriteFromSeed(e,t,o,n,a){const s="Write a '{targetComponent}' part for a {conceptName} based on this content '{seed}'. Do not exceed {maxWords} words.",r=s.replace("{targetComponent}",t).replace("{conceptName}",o).replace("{maxWords}",a).replace("{seed}",e);console.log(r);const i="You are a teacher to teach students how to make creative writing, you will generate appropriate exemplary writing for {grade}-grade students to follow.",c=i.replace("{grade}",n),l=await this.api.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"system",content:c},{role:"user",content:r}]});return console.log(l),l.data.choices[0].message.content},async serviceListIdeasFromIdea(e,t,o,n){const a="Based on the idea of '{idea}', list {number} {term} which could be '{description}' in this idea.",s=a.replace("{idea}",e).replace("{term}",t).replace("{number}",n).replace("{description}",o);console.log(s);const r=await this.api.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"system",content:"You are an idea generator, and you only reply with JSON format. Only write out the result as a single array of Strings within a JSON string array under the attribute named 'items'."},{role:"user",content:s}]});return console.log(r),r.data.choices[0].message.content},async serviceListStoryIdeas(e,t,o,n){const a="List {number} story ideas about '{seed}', which are appropriate for {grade}-grade school students. Describe each idea with only one short sentence, do not use more than {maxWords} words.",s=a.replace("{seed}",e).replace("{number}",t).replace("{grade}",o).replace("{maxWords}",n);console.log(s);const r=await this.api.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"system",content:"You are an idea generator, and you only reply with JSON format. Only write out the result as a single array of Strings within a JSON string array under the attribute named 'items'."},{role:"user",content:s}]});return console.log(r),r.data.choices[0].message.content},async serviceMakeImage(e){const t="image for kids, no words, no text, {text}".replace("{text}",e);console.log(t);const o=await this.api.createImage({prompt:t,n:2,size:"512x512"}),n=[];return o.data.data.forEach((function(e){n.push(e.url)})),n},async serviceGradeWriting(e){const t="Grade this writing '{text}', scale from 50 to 100 based on the quality of the writing. Provide a list of feedback on the clarity, quality, grammar, word choices, and sentence structure. Do not exceed 100 words.".replace("{text}",e);console.log(t);const o="You are a teacher to teach students how to make creative writing, by providing appropriate feedback and encouraging grade. Your feedback must be easy to understand for 3-grade students.",n=await this.api.createChatCompletion({model:"gpt-3.5-turbo",messages:[{role:"system",content:o},{role:"user",content:t}]});return console.log(n),n.data.choices[0].message.content}};const oe={class:"p-2 h-96"},ne={class:"p-1 bg-blue-600 text-white rounded-lg select-none w-24"};function ae(e,t,o,s,r,i){const c=(0,a.up)("van-slider"),l=(0,a.up)("van-dialog");return(0,a.wg)(),(0,a.j4)(l,{show:s.show,"onUpdate:show":t[2]||(t[2]=e=>s.show=e),title:"Editor Window",showConfirmButton:!0,closeOnClickOverlay:!0,width:"640",showCancelButton:!0,onConfirm:t[3]||(t[3]=e=>s.confirm())},{default:(0,a.w5)((()=>[(0,a._)("div",oe,[(0,a.wy)((0,a._)("textarea",{type:"textArea",class:"border w-full h-48","onUpdate:modelValue":t[0]||(t[0]=e=>s.userText=e)},null,512),[[n.nr,s.userText]]),(0,a.Wm)(c,{class:"mt-4",modelValue:s.height,"onUpdate:modelValue":t[1]||(t[1]=e=>s.height=e),min:80,max:500},{button:(0,a.w5)((()=>[(0,a._)("div",ne,"height: "+(0,h.zw)(s.height),1)])),_:1},8,["modelValue"])])])),_:1},8,["show"])}var se={assignVar(e,t,o){let n=e;return t.forEach((function(e){n.includes("{"+e+"}")&&(n=n.replace("{"+e+"}",o.get(e)))})),n}},re={store:new Map,data:new Map,canvasNodes:null,canvasNodesMap:null,conversation:null,actions:[],reset(e,t,o,n){const a=this;this.store.clear(),this.data.clear(),this.actions=[],e.forEach((function(e){e.id&&a.data.set(e.id,e)})),a.canvasNodes=t,a.canvasNodesMap=o,a.conversation=n},proceed(e,t){const o=this;o.data.has(e)?(t.removeNode(),setTimeout((async function(){const n=o.data.get(e);if(n.info){let e=n.info;n.varNames&&(e=se.assignVar(e,n.varNames,o.store)),o.addTextNode(e)}console.log("section: "+n.id),o.actions=JSON.parse(JSON.stringify(n.actions)),await o.performActions(t)}),1e3)):alert("Course data is not complete!")},async performActions(e){const t=this;while(t.actions.length){const o=t.actions.shift();if(console.log(o.type),"next"===o.type){t.proceed(o.next,e);break}if("saveInput"===o.type){if(!t.store.has("input")){e.unlockUserInput(),t.actions.unshift(o);break}t.store.set(o.varName,t.store.get("input")),t.store.delete("input")}else if("rephrase"===o.type){const e=se.assignVar(o.input,o.varNames,t.store);console.log("rephrase:"+e);const n=await te.serviceRephrase(e,3,10);t.store.set(o.save,n);const a=se.assignVar(o.text,o.varNames,t.store);t.addTextNode(a);const s=[];o.options.forEach((function(e){s.push({text:e.text,on:!1,next:e.next,reply:e.reply,other:e.other})})),t.addButtonNode(s)}else if("options"===o.type){const e=[];o.options.forEach((function(t){e.push({text:t.text,on:!1,next:t.next,reply:t.reply,save:t.save,other:t.other})})),t.addButtonNode(e)}else if("publish"===o.type){let n=se.assignVar(o.text,o.varNames,t.store);e.addCanvasNode(n,o.varNames[0])}else if("writeFromSeed"===o.type){const e=se.assignVar(o.seed,o.varNames,t.store),n=await te.serviceWriteFromSeed(e,o.comp,o.concept,o.grade,o.maxWords);t.store.set(o.save,n),t.addTextNode(n)}else{if("listIdeasFromIdea"===o.type){const e=se.assignVar(o.idea,o.varNames,t.store),n=await te.serviceListIdeasFromIdea(e,o.term,o.desc,o.number),a=Object.values(JSON.parse(n))[0],s=[];a.forEach((function(e){s.push({text:e,on:!1,next:"",reply:"",save:o.save,append:o.append})})),t.addButtonNode(s);break}if("listStoryIdeas"===o.type){const e=se.assignVar(o.seed,o.varNames,t.store),n=await te.serviceListStoryIdeas(e,o.number,o.grade,o.maxWords),a=Object.values(JSON.parse(n))[0],s=[];a.forEach((function(e){s.push({text:e,on:!1,next:"",reply:"",save:o.save})})),o.options&&o.options.forEach((function(e){s.push({text:e.text,on:!1,next:e.next,reply:e.reply,save:e.save,other:e.other})})),t.addButtonNode(s);break}if("makeImage"===o.type){const n=se.assignVar(o.text,o.varNames,t.store),a=await te.serviceMakeImage(n);e.addImageNode(a)}else if("gradeWriting"===o.type){const e=se.assignVar(o.text,o.varNames,t.store),n=await te.serviceGradeWriting(e);t.addTextNode(n)}else if("removeVar"===o.type){const t=new Set;o.varNames.forEach((function(e){t.add(e)})),e.removeNodes(t)}else if("drawInfer"===o.type)e.addCanvasConnection(o.from,o.to);else if("exportConver"===o.type){let e="",o=t.conversation.length-1;while(o>0){const n=t.conversation[o];V.text===n.type&&(n.self?e+="<div>Me:<br/>{content}</div><br/>".replace("{content}",n.content[0]):e+="<div>Bot:<br/>{content}</div><br/>".replace("{content}",n.content[0])),o-=1}t.saveTextFile(e,"conversation.html")}else if("save"===o.type){let e="";t.canvasNodes.forEach((function(t){e+=t.varName+"\n",e+=t.content+"\n\n"})),t.saveTextFile(e,"my_story.txt")}else alert("Unknown action: "+o.type)}}e.actionDone()},saveTextFile(e,t){const o=new Blob([e],{type:"text/plain;charset=utf-8"}),n=document.createElement("a");document.body.appendChild(n),n.style="display: none";const a=URL.createObjectURL(o);n.href=a,n.download=t,n.click(),URL.revokeObjectURL(a),n.remove()},addTextNode(e){this.conversation.unshift({content:[e],self:!1,type:V.text,nodeId:(0,j.Z)()})},addButtonNode(e){this.conversation.unshift({content:e,self:!0,type:V.buttons,nodeId:(0,j.Z)()})}},ie=o(2876),ce=o(1817),le={components:{[i.zx.name]:i.zx,[ie.Vq.name]:ie.Vq,[ce.iR.name]:ce.iR},setup(e,{emit:t}){const o=(0,H.iH)(!1),n=(0,H.iH)(""),a=(0,H.iH)(0);let s=null;const r=function(e){s=e,n.value=e.content,a.value=e.h,o.value=!0},i=function(){s.content=n.value,s.varName&&re.store.set(s.varName,n.value),s.h=a.value,o.value=!1,n.value||t("removeNode")};return{show:o,userText:n,confirm:i,showDialog:r,height:a}}};const de=(0,d.Z)(le,[["render",ae]]);var ue=de,pe={name:"HomeView",components:{MyNode:J,MyButtons:$,MyDialog:ue,[i.zx.name]:i.zx,[E.Ee.name]:E.Ee,[M.gN.name]:M.gN,[F.TS.name]:F.TS},setup(){const e=(0,j.Z)();console.log(e);const t=(0,H.iH)(""),o=(0,H.iH)([]),n=(0,H.iH)(!0),s=(0,H.iH)(null),r=(0,H.iH)([]),i=new Map,c=(0,H.iH)(null),l=new B.Configuration({apiKey:V.k2+V.k1+V.k3});te.api=new B.OpenAIApi(l);const d=(0,H.iH)([]),u=function(e){d.value.splice(e,1)};re.reset(ee.N,r.value,i,o.value);const p={removeNode(){o.value[0]&&o.value[0].type===V.buttons&&o.value.shift(),n.value=!0},unlockUserInput(){n.value=!1},addImageNode(e){o.value.unshift({content:e,self:!1,type:V.image})},addCanvasNode(e,t){let o=100,n=100;r.value.length&&(o=r.value[r.value.length-1].x,n=r.value[r.value.length-1].y);const a={id:(0,j.Z)(),content:e,x:o,y:n+100,type:V.text,class:"text-blue-500 text-lg",varName:t,w:400,h:80,connStart:[],connEnd:[]};r.value.push(a),i.set(t,a)},addCanvasConnection(e,t){e.forEach((function(e){t.forEach((function(t){const o=i.get(e),n=i.get(t);if(o&&n){const e=20*n.connEnd.length,t={sx:o.x+50,sy:o.y+30,ex:n.x+e+10,ey:n.y,endOffset:e};d.value.push(t),o.connStart.push(t),n.connEnd.push(t)}}))}))},removeNodes(e){let t=r.value.length-1;while(t>=0)e.has(r.value[t].varName)&&r.value.splice(t,1),t-=1},actionDone(){setTimeout((function(){s.value.scrollIntoView({behavior:"smooth",block:"end"})}),500)}};(0,a.bv)((function(){re.proceed("001",p)}));const m=async function(e){if(!e.done){if(e.on=!0,e.done=!0,o.value.shift(),o.value.unshift({content:[e.text],self:!0,type:V.text}),e.reply&&o.value.unshift({content:[e.reply],self:!1,type:V.text}),r.value.length&&e.cancel&&r.value.pop(),e.save&&re.store.set(e.save,e.text),e.append){const t=re.store.get(e.append);t?re.store.set(e.append,t+", "+e.text):re.store.set(e.append,e.text)}e.next?re.proceed(e.next,p):await re.performActions(p)}},h=async function(){if(!t.value)return;const e=t.value;t.value="",n.value?alert("We are not anticipating input text now..."):(re.store.set("input",e),o.value[0]&&o.value[0].type===V.buttons&&o.value.shift(),o.value.unshift({content:[e],self:!0,type:V.text}),n.value=!0,await re.performActions(p))};let y=null;const v=function(e,t){let o=0,n=0;t===V.text?(o=400,n=80):t===V.image&&(o=150,n=150),y={id:(0,j.Z)(),content:e,class:"",type:t,w:o,h:n,connStart:[],connEnd:[]}},x=function(e){e.preventDefault()},f=function(e){if(e.preventDefault(),y){const t=e.target.getBoundingClientRect();y.x=e.clientX-t.left,y.y=e.clientY-t.top,r.value.push(y),y=null}};let g=null;const w=function(e){g=e},b=function({x:e,y:t,tw:o},n){n.x=e,n.y=t,n.connStart.forEach((function(n){n.sx=e+o+10,n.sy=t+30})),n.connEnd.forEach((function(o){o.ex=e+o.endOffset+10,o.ey=t}))};let N=0,k=0;const I=function(e){g&&(e.preventDefault(),g(e.x-N,e.y-k)),N=e.x,k=e.y},C=function(){g=null};let D=0;const T=function(e,t){c.value.showDialog(e),D=t},O=function(){r.value.splice(D,1),(0,Y.CF)("Text removed")};return{NodeTypes:V,chatToSend:t,history:o,sending:n,startDrag:v,onDragover:x,onDrop:f,canvasNodes:r,onNodeMouseDown:w,mosemove:I,mouseup:C,pickOption:m,enterText:h,clickCanvasNode:T,chatBottom:s,newPosition:b,editor:c,removeCanvasNode:O,connections:d,removeLine:u}}};const me=(0,d.Z)(pe,[["render",W],["__scopeId","data-v-3d132966"]]);var he=me;const ye={xmlns:"http://www.w3.org/2000/svg",version:"1.1",class:"w-full h-full canvas"},ve=(0,a.uE)('<svg x="500" y="0" width="200" height="100" data-v-456ab7ec><text x="100" y="100" class="heavy" data-v-456ab7ec>v0.6</text></svg><svg x="214" y="130" width="150" height="150" class="cursor-pointer" data-v-456ab7ec><foreignObject width="150" height="150" x="0" y="0" data-v-456ab7ec><img src="images/test4.png" data-v-456ab7ec></foreignObject></svg>',2),xe=[ve];function fe(e,t,o,n,s,r){return(0,a.wg)(),(0,a.iD)("svg",ye,xe)}var ge={name:"AboutView",setup(){}};const we=(0,d.Z)(ge,[["render",fe],["__scopeId","data-v-456ab7ec"]]);var be=we;const Ne=[{path:"/",name:"home",component:he},{path:"/about",name:"about",component:be}],ke=(0,m.p7)({history:(0,m.r5)(),routes:Ne});var Ie=ke,Ce=o(3907),De=(0,Ce.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),Te=(o(6758),o(5110),o(9192)),Oe=o(8182);Te.go.use("en-US",Oe.Z),(0,n.ri)(p).use(De).use(Ie).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,s){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],s=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&s||r>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(i=!1,s<r&&(r=s));if(i){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,a,s]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,r=n[0],i=n[1],c=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(c)var d=c(o)}for(t&&t(n);l<r.length;l++)s=r[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self["webpackChunkvital"]=self["webpackChunkvital"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5936)}));n=o.O(n)})();
//# sourceMappingURL=app.f20c5ae6.js.map