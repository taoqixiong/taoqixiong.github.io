if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,b)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const c=e=>d(e,r),n={module:{uri:r},exports:s,require:c};i[r]=Promise.all(a.map((e=>n[e]||c(e)))).then((e=>(b(...e),s)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404/index.html",revision:"e1995c1de6e86eaa8f5d95d1376c8575"},{url:"about/index.html",revision:"0ed4e5c6d6078496c291412656782240"},{url:"animate/index.html",revision:"7c2a46acc91bf1810c1ada05422b5140"},{url:"archives/2016/12/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2016/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2017/03/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2017/05/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2017/10/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2017/12/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2017/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2018/02/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2018/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2019/02/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2019/04/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2019/10/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2019/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2020/05/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2020/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2021/01/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2021/10/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2021/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2024/09/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2024/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2025/03/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/2025/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"archives/page/2/index.html",revision:"9267b99afaa1fb7b9b7ed7ed885ac3df"},{url:"categories/折腾/index.html",revision:"8d40dd785e72c59debb3bc07f203ea1e"},{url:"categories/折腾/page/2/index.html",revision:"453dd4275261a52da1eda99b07eb3161"},{url:"categories/水/index.html",revision:"78b096977b13619caeaf7aff20dd1b8b"},{url:"css/style.css",revision:"8a4a00b3057069b23447c79160cc487e"},{url:"icons-192.png",revision:"19eb65473fc0563716ab31696d278983"},{url:"icons-512.png",revision:"d12a987043264fb97edfbc94be33122b"},{url:"index.html",revision:"7617d10eb9b07d7bf1dec8a687beeb48"},{url:"js/script.js",revision:"5f8382e85a59f292eb16b32548bec84b"},{url:"messages/index.html",revision:"2c5356c493615b0e9f4d3c35c26a2e0d"},{url:"page/2/index.html",revision:"373e1444ef50ae1d0f2473f078778352"},{url:"posts/11941/index.html",revision:"5530628c781794ead9bcaa46090e2858"},{url:"posts/14454/index.html",revision:"205ae222327f04dc0d402f6288b7111b"},{url:"posts/16108/index.html",revision:"357268c79572d81ebac0485d9bfda366"},{url:"posts/18671/index.html",revision:"971afdfa4d71ab113c750c3cb77cf891"},{url:"posts/20593/index.html",revision:"f05b81c029770d6f26d96a16262cb716"},{url:"posts/23117/index.html",revision:"de8a128d0688249cf6950502526d8374"},{url:"posts/35234/index.html",revision:"664929f62add61820cf0c343cb3946ce"},{url:"posts/38470/index.html",revision:"be61baa57807517e28e51100cbf8c6a4"},{url:"posts/38685/index.html",revision:"8888eb06e00a0779209026586deae35b"},{url:"posts/44799/index.html",revision:"413673cd56c632c69edbb8891db7a181"},{url:"posts/46684/index.html",revision:"cebf30f7c1fa7d7d26c9a18e6f0d7007"},{url:"posts/51311/index.html",revision:"fe2c081887cf97199f8c315d4cad25ee"},{url:"posts/53555/index.html",revision:"bb84ec0b2b8c64df6761f651c4f85a87"},{url:"posts/61260/index.html",revision:"f87c19400def51a2e8923fbbdefbebd2"},{url:"posts/61570/index.html",revision:"a6ad9625116f90e22f4b71501d0d7c85"},{url:"posts/63258/index.html",revision:"d02c3b3c2624e2a52ce5c01f8b4e064a"},{url:"posts/7056/index.html",revision:"fe8b86779b9547434459fcc1c7e6f64e"},{url:"tags/Archlinux/index.html",revision:"333b32243029c9a77b6e4cf32281d1ca"},{url:"tags/Cubieboard2/index.html",revision:"7904865a86ffbbf7be4c7ad4c719378b"},{url:"tags/Home-Assistant/index.html",revision:"0f271c2df0a8ad130247995b84572c4c"},{url:"tags/linux/index.html",revision:"db3f6e268ecfa783867ab02b61da116b"},{url:"tags/Linux/index.html",revision:"c717d1558779de68c89f1c832600f641"},{url:"tags/luckfox/index.html",revision:"13d73328a3aec693801b49b8e9965990"},{url:"tags/Nginx/index.html",revision:"19c6f6c52fa5d96122cd421430fba67e"},{url:"tags/Nintendo-Switch/index.html",revision:"70f316f30a452ccdafebd236ce07d53e"},{url:"tags/OpenWRT/index.html",revision:"32c8ccc9ec870ff991b832fc4ddede60"},{url:"tags/SNI/index.html",revision:"3851c48555f23e7d416fd9a0b42289da"},{url:"tags/内网穿透/index.html",revision:"c46c296bf4df1f53593dec1a547433c6"},{url:"tags/开箱/index.html",revision:"0aa959eba62e0083c8edfe6950e6431b"},{url:"tags/无线电/index.html",revision:"b973c479c572ac396d9adb6ad779eb86"},{url:"tags/智能家居/index.html",revision:"1c61da96f24a9eb4f2f3e907f8d870ee"},{url:"tags/水/index.html",revision:"7cd5714b8bad1fd31ec59396add89b66"}],{})}));
//# sourceMappingURL=service-worker.js.map
