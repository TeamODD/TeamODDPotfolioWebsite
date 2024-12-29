import{r,j as e}from"./index-BV0OGL3P.js";const h=[{id:1,title:"왕초보 대장장이의 톱니바퀴 가게",description:"손님의 주문을 받고 올바른 톱니바퀴를 완성하자!",year:"2024",project:"제2회 미니 게임잼",imageUrl:"images/gearsanddream.jpg",link:"https://github.com/TeamODD/gears-and-dreams/releases/tag/alpha-v1.1.0",developer:"강주현 장은수 정한웅 김지원 황정원"},{id:2,title:"Punch Gear",description:"리듬에 맞춰 날라오는 톱니바퀴를 맞춰라!",year:"2024",project:"제2회 미니 게임잼",imageUrl:"images/punchgear.png",link:"https://github.com/TeamODD/Punch-Gear/releases/tag/release",developer:"홍기서 김성현 김태명 이형빈 김유빈"},{id:3,title:"Option, but not optional",description:"용사는 어쩔 수 없이 톱니바퀴를 들고 다니기 시작한다.",year:"2024",project:"제2회 미니 게임잼",imageUrl:"images/optionnotoptional.png",link:"https://github.com/TeamODD/option-but-not-optional/releases/tag/RealFinalBuild ",developer:"김지현 권예준 이상원 김지성 박기범"},{id:4,title:"콩쥐팥쥐 : 항아리 쟁탈전",description:"항아리를 지키려는 두꺼비와 부수려는 계모의 한판 승부",year:"2024",project:"제1회 미니 게임잼",imageUrl:"images/konggpatg.png",link:"https://cdn.discordapp.com/attachments/1294961451471208478/1294984829900947486/-.zip?ex=6772839b&is=6771321b&hm=227a102c48ead88deec6130078f60adba40fdc236f630b0a86a10fcbbdc5c006&",developer:"김나은 김태명 김성현 장윤서 김현수 김지성"},{id:5,title:"우화의 숲",description:"우화의 숲속에서",year:"2024",project:"제1회 미니 게임잼",imageUrl:"images/forestoffables.jpg",link:"https://cdn.discordapp.com/attachments/1294942091356405890/1294986344854065182/ForestOfFable_.zip?ex=67728504&is=67713384&hm=3641a97e7c1276b3e59d91cf6eafbc3a9bdb46b98a2f90f7cf3e54b291265d4f&",developer:"김지현 정민준 장은수 김준식 이형빈 김유빈 황정원"},{id:6,title:"마녀의 집",description:"빵가루를 모아 헨젤의 배를 불려 함께 탈출하자!",year:"2024",project:"제1회 미니 게임잼",imageUrl:"images/crankyhouse.png",link:"https://cdn.discordapp.com/attachments/1294961543410352228/1294993767572705280/WitchHouse.zip?ex=67728bee&is=67713a6e&hm=d988c91ba6f00666968c7c273e6a6f9304670961864e67e6573e3572d0b8b1d7&",developer:"김준영 송기환 이상원 김영찬 김동규 임유나"},{id:7,title:"P의 시험기간",description:`<제1회 게임잼 우승작>
계획성은 1도 없는 극 p의 벼락치기 시험공부 준비하기`,year:"2024",project:"제1회 게임잼",imageUrl:"images/ptest.png",link:"https://drive.google.com/drive/folders/1pEr0uJui4gkMQ-8kYg752oaZRpReZVXi?usp=drive_link",developer:"채민수 손한솔 권예준 이형빈"},{id:8,title:"로맨틱 타이밍",description:`<제1회 게임잼 준우승작>
본격 타이밍 액션 미소녀 연애 시뮬레이터`,year:"2024",project:"제1회 게임잼",imageUrl:"images/romantictiming.png",link:"https://drive.google.com/drive/folders/1pEr0uJui4gkMQ-8kYg752oaZRpReZVXi?usp=drive_link",developer:"강주현 정민준 전다연 강혜수"},{id:9,title:"토끼굴 속으로",description:`<제1회 게임잼 3등작>
토끼를 찾아 어두운 숲으로`,year:"2024",project:"제1회 게임잼",imageUrl:"images/rabbithole.png",link:"https://drive.google.com/file/d/1WnUyXqBJ4ekabDyCW7hQRUaTY_qC1Ymw/view?usp=drive_link",developer:"정보연 정한웅 김영찬 김지아"}],j={games:h},f=({src:a,alt:t,className:c})=>{const[d,n]=r.useState(!0),[l,p]=r.useState("");return r.useEffect(()=>{const o=new Image;o.src=a,o.onload=()=>{n(!1),p(a)}},[a]),e.jsx("div",{className:`blur-image-wrapper ${d?"loading":""}`,children:e.jsx("img",{src:l,alt:t,className:`blur-image ${c||""}`,loading:"lazy",decoding:"async"})})},g=({game:a})=>e.jsxs("div",{className:"game-card",onClick:()=>window.open(a.link,"_blank"),children:[e.jsx(f,{src:a.imageUrl,alt:a.title,className:"game-image"}),e.jsxs("div",{className:"game-info",children:[e.jsx("h2",{"data-full-title":a.title,children:a.title}),e.jsx("p",{className:"game-description",children:a.description}),e.jsx("div",{className:"game-details",children:e.jsx("span",{children:a.developer})})]})]});function b(){const a=j,[t,c]=r.useState("all"),[d,n]=r.useState(!1),l=r.useRef(null),p=["all",...new Set(a.games.map(s=>s.year))].sort().reverse(),o=t==="all"?a.games:a.games.filter(s=>s.year===t),u=t!=="all"?o.reduce((s,i)=>(s[i.project]||(s[i.project]=[]),s[i.project].push(i),s),{}):{};return r.useEffect(()=>{const s=i=>{l.current&&!l.current.contains(i.target)&&n(!1)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]),e.jsxs("div",{className:"projects-page",children:[e.jsx("div",{className:"year-filter",children:e.jsxs("div",{ref:l,className:`year-dropdown ${d?"active":""}`,children:[e.jsxs("button",{className:"year-dropdown-button",onClick:()=>n(!d),children:[t==="all"?"모든 연도":t,e.jsx("span",{className:"year-dropdown-arrow"})]}),e.jsx("div",{className:"year-dropdown-menu",children:e.jsx("ul",{children:p.map(s=>e.jsx("li",{onClick:()=>{c(s),n(!1)},children:s==="all"?"모든 연도":s},s))})})]})}),e.jsx("main",{className:"games-container",children:t==="all"?e.jsx("div",{className:"games-grid",children:o.map(s=>e.jsx(g,{game:s},s.id))}):Object.entries(u).map(([s,i])=>e.jsxs("div",{className:"project-type-section",children:[e.jsx("h2",{className:"project-type-title",children:s}),e.jsx("div",{className:"games-grid",children:i.map(m=>e.jsx(g,{game:m},m.id))})]},s))})]})}export{b as default};
