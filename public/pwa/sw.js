if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>c(e,n),d={module:{uri:n},exports:r,require:t};s[n]=Promise.all(a.map((e=>d[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cdac34f4"],(function(e){"use strict";importScripts("fallback-qMfbm7oAqyNM4t4DmJCGZ.js","/worker.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"qMfbm7oAqyNM4t4DmJCGZ"},{url:"/EarthTexture/Draco.jsx",revision:"ff846ff318d98b41a31fe7a8697b399f"},{url:"/EarthTexture/Static.js",revision:"1cccbb58480b7813636f8a9edcb08fa3"},{url:"/EarthTexture/earth.FBX",revision:"c796fb48f9c9cc1977a32a21d15e4163"},{url:"/EarthTexture/earth.jpg",revision:"50a0b98b98147bb2c70884cae9afb8eb"},{url:"/EarthTexture/license.txt",revision:"f7936f4455c2342a95174e5f1b6c01ae"},{url:"/EarthTexture/planet.glb",revision:"cbd81ac2c90cb187ea1103090d3b3b79"},{url:"/EarthTexture/scene.gltf",revision:"497fd87ddc7367aafe28b71aa2efdb60"},{url:"/MoonTexture/Moon.jsx",revision:"7f3e1bddfe2ee040522264823786e9d1"},{url:"/MoonTexture/moon.glb",revision:"de588c8e0c8733b59fd1e303f27dfd95"},{url:"/_next/server/middleware-build-manifest.js",revision:"906fde14c993356d2b570e0032c9030c"},{url:"/_next/server/middleware-react-loadable-manifest.js",revision:"55bc2ac15c3e2594e497ae5118a87e2e"},{url:"/_next/server/next-font-manifest.js",revision:"6f797f8e06c594386354da5a83b422ed"},{url:"/_next/static/chunks/0c428ae2-7a74b85346b03a75.js",revision:"7a74b85346b03a75"},{url:"/_next/static/chunks/1164-8a2ba282b4b3ac25.js",revision:"8a2ba282b4b3ac25"},{url:"/_next/static/chunks/1315-f2aa22160ebc508e.js",revision:"f2aa22160ebc508e"},{url:"/_next/static/chunks/1647-142180a2a9b2660a.js",revision:"142180a2a9b2660a"},{url:"/_next/static/chunks/1664-91fb02c482e78429.js",revision:"91fb02c482e78429"},{url:"/_next/static/chunks/1bfc9850-d5eb77848c04916b.js",revision:"d5eb77848c04916b"},{url:"/_next/static/chunks/2110-5ba6d981b5ce7766.js",revision:"5ba6d981b5ce7766"},{url:"/_next/static/chunks/2430-d70a40de325f10df.js",revision:"d70a40de325f10df"},{url:"/_next/static/chunks/246.abe64224293881ac.js",revision:"abe64224293881ac"},{url:"/_next/static/chunks/2804-1964f8ce386ed718.js",revision:"1964f8ce386ed718"},{url:"/_next/static/chunks/2847-6732c1269fc3cf85.js",revision:"6732c1269fc3cf85"},{url:"/_next/static/chunks/3076-1876ee707db2006e.js",revision:"1876ee707db2006e"},{url:"/_next/static/chunks/321-ef44ba2439bcc8a0.js",revision:"ef44ba2439bcc8a0"},{url:"/_next/static/chunks/3246-912046446d01cb09.js",revision:"912046446d01cb09"},{url:"/_next/static/chunks/3253.c65ad46fc0941672.js",revision:"c65ad46fc0941672"},{url:"/_next/static/chunks/3592-aef65484d65128c8.js",revision:"aef65484d65128c8"},{url:"/_next/static/chunks/3886.1712511dd54acf9f.js",revision:"1712511dd54acf9f"},{url:"/_next/static/chunks/398.3c13e51aca08b29a.js",revision:"3c13e51aca08b29a"},{url:"/_next/static/chunks/414-e7170be7cac51184.js",revision:"e7170be7cac51184"},{url:"/_next/static/chunks/4212.0a03636abbd23b46.js",revision:"0a03636abbd23b46"},{url:"/_next/static/chunks/4695.f7ca1e627cc46e48.js",revision:"f7ca1e627cc46e48"},{url:"/_next/static/chunks/484.de7379b5b95bc40f.js",revision:"de7379b5b95bc40f"},{url:"/_next/static/chunks/4891-ded29c3d2cc65c23.js",revision:"ded29c3d2cc65c23"},{url:"/_next/static/chunks/4912-825b3d23d7e3688c.js",revision:"825b3d23d7e3688c"},{url:"/_next/static/chunks/5399-da956a963327f89a.js",revision:"da956a963327f89a"},{url:"/_next/static/chunks/545f34e4-2d63383fe34985ce.js",revision:"2d63383fe34985ce"},{url:"/_next/static/chunks/5540.2c22413f148351f4.js",revision:"2c22413f148351f4"},{url:"/_next/static/chunks/6000-18b576664180d4e3.js",revision:"18b576664180d4e3"},{url:"/_next/static/chunks/6291-eafe413a5c9f59f9.js",revision:"eafe413a5c9f59f9"},{url:"/_next/static/chunks/6796.df0baa261e2cce6b.js",revision:"df0baa261e2cce6b"},{url:"/_next/static/chunks/6893.dcc734bdb3395b67.js",revision:"dcc734bdb3395b67"},{url:"/_next/static/chunks/7201-f3ade9aac35e2867.js",revision:"f3ade9aac35e2867"},{url:"/_next/static/chunks/744-bad3f3dd32180218.js",revision:"bad3f3dd32180218"},{url:"/_next/static/chunks/7506-b91be0fd3af82293.js",revision:"b91be0fd3af82293"},{url:"/_next/static/chunks/75fc9c18-ca35c7f9d6ffaeeb.js",revision:"ca35c7f9d6ffaeeb"},{url:"/_next/static/chunks/7675-0d1e6dcf41247a69.js",revision:"0d1e6dcf41247a69"},{url:"/_next/static/chunks/7887.3194dd82e5633ed8.js",revision:"3194dd82e5633ed8"},{url:"/_next/static/chunks/7953.1ae495d84f3794d4.js",revision:"1ae495d84f3794d4"},{url:"/_next/static/chunks/7d0bf13e-e22299c8d6f00402.js",revision:"e22299c8d6f00402"},{url:"/_next/static/chunks/8049-fa3a1724e52591aa.js",revision:"fa3a1724e52591aa"},{url:"/_next/static/chunks/8089-af97515fac091d6d.js",revision:"af97515fac091d6d"},{url:"/_next/static/chunks/8109.82a918bf5b09269b.js",revision:"82a918bf5b09269b"},{url:"/_next/static/chunks/8228-c62800be25d8c325.js",revision:"c62800be25d8c325"},{url:"/_next/static/chunks/8263-7f5d5c215450c48a.js",revision:"7f5d5c215450c48a"},{url:"/_next/static/chunks/8529.8751fbee709502fc.js",revision:"8751fbee709502fc"},{url:"/_next/static/chunks/8764-fee6e2edf0153dd7.js",revision:"fee6e2edf0153dd7"},{url:"/_next/static/chunks/9367.3902893c22b5c5e0.js",revision:"3902893c22b5c5e0"},{url:"/_next/static/chunks/9539.52623900bff6419a.js",revision:"52623900bff6419a"},{url:"/_next/static/chunks/9595-cd213f4530470be9.js",revision:"cd213f4530470be9"},{url:"/_next/static/chunks/95b64a6e-666be97d4733ed7d.js",revision:"666be97d4733ed7d"},{url:"/_next/static/chunks/9614-2e74e1533f72e0c8.js",revision:"2e74e1533f72e0c8"},{url:"/_next/static/chunks/9650.76ce4ccf2b5270a8.js",revision:"76ce4ccf2b5270a8"},{url:"/_next/static/chunks/9734-c82576fcc43e5a24.js",revision:"c82576fcc43e5a24"},{url:"/_next/static/chunks/9785-94d6fa8e418164a2.js",revision:"94d6fa8e418164a2"},{url:"/_next/static/chunks/9941-a62c26ecf785687c.js",revision:"a62c26ecf785687c"},{url:"/_next/static/chunks/ae51ba48-297f73a9fdd5ab0e.js",revision:"297f73a9fdd5ab0e"},{url:"/_next/static/chunks/d64684d8-c4e87aa455cc28ad.js",revision:"c4e87aa455cc28ad"},{url:"/_next/static/chunks/d7eeaac4-018b78d6569e11e1.js",revision:"018b78d6569e11e1"},{url:"/_next/static/chunks/de297ff1-a03e9b3c69247dbc.js",revision:"a03e9b3c69247dbc"},{url:"/_next/static/chunks/eabe11fc.66a80ce2087b435e.js",revision:"66a80ce2087b435e"},{url:"/_next/static/chunks/ef6529d7-4d6b88e4e9a8f0d9.js",revision:"4d6b88e4e9a8f0d9"},{url:"/_next/static/chunks/fb7d5399-e4c685eb7bd9f969.js",revision:"e4c685eb7bd9f969"},{url:"/_next/static/chunks/framework-06a91fef12f27585.js",revision:"06a91fef12f27585"},{url:"/_next/static/chunks/main-810f8375f2f652f0.js",revision:"810f8375f2f652f0"},{url:"/_next/static/chunks/pages/404-3dd8865312f0da70.js",revision:"3dd8865312f0da70"},{url:"/_next/static/chunks/pages/ErrorBoundary-a156a3941cac0d76.js",revision:"a156a3941cac0d76"},{url:"/_next/static/chunks/pages/_app-4aa41e034793b9df.js",revision:"4aa41e034793b9df"},{url:"/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"/_next/static/chunks/pages/_offline-21edc8772494be09.js",revision:"21edc8772494be09"},{url:"/_next/static/chunks/pages/about-4f13e5daaa11c388.js",revision:"4f13e5daaa11c388"},{url:"/_next/static/chunks/pages/about/social-empowerment-and-community-impact-4d21b50633e08572.js",revision:"4d21b50633e08572"},{url:"/_next/static/chunks/pages/about/trigan-citizenship-dbe4c0aa49376961.js",revision:"dbe4c0aa49376961"},{url:"/_next/static/chunks/pages/admin/ABtesting-b1c18057866def2c.js",revision:"b1c18057866def2c"},{url:"/_next/static/chunks/pages/admin/content-f22b27fb0877cb7d.js",revision:"f22b27fb0877cb7d"},{url:"/_next/static/chunks/pages/admin/document-changes-0b13938ac7eccd04.js",revision:"0b13938ac7eccd04"},{url:"/_next/static/chunks/pages/admin/linkedinjobs-33be9cc5f116d381.js",revision:"33be9cc5f116d381"},{url:"/_next/static/chunks/pages/admin/login-8ecaa2d6549fedb9.js",revision:"8ecaa2d6549fedb9"},{url:"/_next/static/chunks/pages/admin/mailinglist-1b78cfebb4141e69.js",revision:"1b78cfebb4141e69"},{url:"/_next/static/chunks/pages/admin/main-556009d3ffe49928.js",revision:"556009d3ffe49928"},{url:"/_next/static/chunks/pages/admin/managelanguages-3338fb018dc9cdaf.js",revision:"3338fb018dc9cdaf"},{url:"/_next/static/chunks/pages/admin/milestones-9ddd11b62754ebfd.js",revision:"9ddd11b62754ebfd"},{url:"/_next/static/chunks/pages/admin/proposals-4ac99a0339475b27.js",revision:"4ac99a0339475b27"},{url:"/_next/static/chunks/pages/admin/proposals/comment/%5Bid%5D-a1d1e2683fb2758d.js",revision:"a1d1e2683fb2758d"},{url:"/_next/static/chunks/pages/admin/teammembers-605f48969b8895db.js",revision:"605f48969b8895db"},{url:"/_next/static/chunks/pages/admin/teammembers-proposals-75faaf4ea58980a9.js",revision:"75faaf4ea58980a9"},{url:"/_next/static/chunks/pages/admin/users-e6051f1274f58d97.js",revision:"e6051f1274f58d97"},{url:"/_next/static/chunks/pages/blog-f0c46631afcaab98.js",revision:"f0c46631afcaab98"},{url:"/_next/static/chunks/pages/blog/post/%5Bblog_name%5D-59af52b520a36dc2.js",revision:"59af52b520a36dc2"},{url:"/_next/static/chunks/pages/buy-d66e878d5cc05ee2.js",revision:"d66e878d5cc05ee2"},{url:"/_next/static/chunks/pages/careers-053073a19bc0fedb.js",revision:"053073a19bc0fedb"},{url:"/_next/static/chunks/pages/contact-ee74767afd8194ac.js",revision:"ee74767afd8194ac"},{url:"/_next/static/chunks/pages/decision-making-de364a4ea86f1db3.js",revision:"de364a4ea86f1db3"},{url:"/_next/static/chunks/pages/faq-b203423e519b03cd.js",revision:"b203423e519b03cd"},{url:"/_next/static/chunks/pages/index-8864bb6a9c9e0b4a.js",revision:"8864bb6a9c9e0b4a"},{url:"/_next/static/chunks/pages/introduction-2-d3648f17caf8e698.js",revision:"d3648f17caf8e698"},{url:"/_next/static/chunks/pages/introduction-3-ad8dc60ad298bb2f.js",revision:"ad8dc60ad298bb2f"},{url:"/_next/static/chunks/pages/introduction-35bc073d66f55dc8.js",revision:"35bc073d66f55dc8"},{url:"/_next/static/chunks/pages/investors-605e77e47dad0b11.js",revision:"605e77e47dad0b11"},{url:"/_next/static/chunks/pages/join-the-team-e1b62d6208f59ba7.js",revision:"e1b62d6208f59ba7"},{url:"/_next/static/chunks/pages/kyc-manager-99a0a63ec4582493.js",revision:"99a0a63ec4582493"},{url:"/_next/static/chunks/pages/mission-a24c896957511555.js",revision:"a24c896957511555"},{url:"/_next/static/chunks/pages/post/%5Bid%5D-765c1f90f21c5044.js",revision:"765c1f90f21c5044"},{url:"/_next/static/chunks/pages/privacy-policy-ecb0fd35c0e4fd7d.js",revision:"ecb0fd35c0e4fd7d"},{url:"/_next/static/chunks/pages/project-28ff27a6e5609709.js",revision:"28ff27a6e5609709"},{url:"/_next/static/chunks/pages/project-overview-6fcb73aecd104491.js",revision:"6fcb73aecd104491"},{url:"/_next/static/chunks/pages/project/charities-and-third-sector-opportunities-333215bcc524bdc0.js",revision:"333215bcc524bdc0"},{url:"/_next/static/chunks/pages/project/government-and-local-authority-partnerships-6df2d981959796bd.js",revision:"6df2d981959796bd"},{url:"/_next/static/chunks/pages/project2-c7b82b81cc50baea.js",revision:"c7b82b81cc50baea"},{url:"/_next/static/chunks/pages/roadmap-df403563b7185a17.js",revision:"df403563b7185a17"},{url:"/_next/static/chunks/pages/sitemap.xml-a5d2c74fd5fbc496.js",revision:"a5d2c74fd5fbc496"},{url:"/_next/static/chunks/pages/social-impact-69e19bf01c0547b0.js",revision:"69e19bf01c0547b0"},{url:"/_next/static/chunks/pages/social-impact-alt-5c69408f08a49aa4.js",revision:"5c69408f08a49aa4"},{url:"/_next/static/chunks/pages/support-the-project-709c19bc818d9d30.js",revision:"709c19bc818d9d30"},{url:"/_next/static/chunks/pages/teams-1328302384251ee2.js",revision:"1328302384251ee2"},{url:"/_next/static/chunks/pages/terms-conditions-470ad389537f4606.js",revision:"470ad389537f4606"},{url:"/_next/static/chunks/pages/vision-02bf2f27aec0c0be.js",revision:"02bf2f27aec0c0be"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f323817a695925a4.js",revision:"f323817a695925a4"},{url:"/_next/static/css/076f7d45dbb7ac4d.css",revision:"076f7d45dbb7ac4d"},{url:"/_next/static/css/12a2ee7415ecea1d.css",revision:"12a2ee7415ecea1d"},{url:"/_next/static/css/3cc250f1506917e6.css",revision:"3cc250f1506917e6"},{url:"/_next/static/css/bfc1e284b0867fee.css",revision:"bfc1e284b0867fee"},{url:"/_next/static/css/cecdbce2880c059c.css",revision:"cecdbce2880c059c"},{url:"/_next/static/css/dc1df34c0a627c13.css",revision:"dc1df34c0a627c13"},{url:"/_next/static/css/f76788cadc76491e.css",revision:"f76788cadc76491e"},{url:"/_next/static/media/city-form.a9851964.png",revision:"a9851964"},{url:"/_next/static/media/logo.f7ef384c.svg",revision:"9dd1cc0e27bdec8fb85167135108e71a"},{url:"/_next/static/media/trigan-bg.f70b3808.png",revision:"f03eecd6ebc480f40b374345b10bcb48"},{url:"/_next/static/qMfbm7oAqyNM4t4DmJCGZ/_buildManifest.js",revision:"c30f2c36c4c8c28afb8a9caeddca3852"},{url:"/_next/static/qMfbm7oAqyNM4t4DmJCGZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"qMfbm7oAqyNM4t4DmJCGZ"},{url:"/assets/CombinedPlanets.jsx",revision:"860efa671db53d4314488a6a84b0ae91"},{url:"/assets/hDB2Egy.jpg",revision:"242519987d57b44a2ac436106b8421e4"},{url:"/assets/hDB2Egy.png",revision:"9a3a3888e4942de6823c59c3b23e5bcd"},{url:"/file/TriganWhitePaper.pdf",revision:"489d2c4b1f75409e31bbf9e23aefe811"},{url:"/fonts/Blanka-Regular.otf",revision:"0f9bdc30d3db526b02072d19a12cd032"},{url:"/fonts/Blanka-Regular.ttf",revision:"1ac3afd82aadd67c4ad2efb138e00537"},{url:"/fonts/SourceSansPro-Regular.ttf",revision:"47dbe5824a2d82b794ef1f52809699a5"},{url:"/icons/android-chrome-192x192.png",revision:"c0d565cf0b01acad1c5dee2c42e5e17d"},{url:"/icons/android-chrome-512x512.png",revision:"b0bfa71f3158c49859b7d0e47839e417"},{url:"/icons/apple-touch-icon.png",revision:"7e74e102141d99465e29381c011dfca9"},{url:"/icons/browserconfig.xml",revision:"d2c3ec839559c9b7c7638c378d45bca5"},{url:"/icons/favicon-16x16.png",revision:"d1d3883a1e2e82a6853c99f3164db7de"},{url:"/icons/favicon-32x32.png",revision:"0ba6ff0c39353ca3371cfbb8e92e4291"},{url:"/icons/favicon.ico",revision:"68c45e427bcdc865385657fc597ac061"},{url:"/icons/ic_close.svg",revision:"5e20d539653573ba3bf09f5364ce6a35"},{url:"/icons/ic_plus.svg",revision:"f04f61cd0bbd0726287447287c6e6047"},{url:"/icons/logos/aws-activate-logo.png",revision:"cdf6ea3a4ebaa21f25a506f43e463e6d"},{url:"/icons/logos/bai-logo.svg",revision:"f78a29bd86a631f6a218000d79f0928d"},{url:"/icons/logos/iot-5g-accelerator.svg",revision:"527caa362c8dd0cd471a6d09010b8f95"},{url:"/icons/logos/logo.png",revision:"30faed3acf7fe7de807aa8b51e758a06"},{url:"/icons/logos/microsoft-for-startups-logo.png",revision:"b5c63cfce0292e3a03fba487591baf6c"},{url:"/icons/logos/rr1.png",revision:"21f3aa73f02c660bf48917ddfbf88fda"},{url:"/icons/logos/rr2.png",revision:"a0e6f751e32cf9913cfd1068149d3dd6"},{url:"/icons/logos/rr3.png",revision:"ddd8588181509a422172e71773748bef"},{url:"/icons/logos/sc-logo.png",revision:"ab6e2fe312aae6dea6a83cb54a1619e0"},{url:"/icons/logos/sose-logo.png",revision:"06b587171db4f5e69f8a3cfbcdc5d078"},{url:"/icons/logos/ssc-logo.svg",revision:"4f502b5124f899e10437d9a1fbb17735"},{url:"/icons/mstile-150x150.png",revision:"e1301336e91e8558316ac252acf88425"},{url:"/icons/safari-pinned-tab.svg",revision:"a8c44772e2e0c4fd99d7d8e3d5a35c41"},{url:"/icons/site.webmanifest",revision:"b029b36da21458319debcfb2786f2886"},{url:"/images/1.jpg",revision:"f3d298fa90d26ee682b2ce3357c55aeb"},{url:"/images/1.png",revision:"e5f6d355575ebd5b1046dfba8b2ab32f"},{url:"/images/2.png",revision:"44fb54396a21d4d0e779eafa85cbdeb5"},{url:"/images/3.png",revision:"7889dabbee7a9990adeb6ea71d6bde49"},{url:"/images/ICO.svg",revision:"60ae7115df8cb15dba44eb9303bf5d03"},{url:"/images/R&D.svg",revision:"d9f7db1593d0456eefd3027bba3b3127"},{url:"/images/accordion1.jpg",revision:"8f7a453c6eeb9e526818f21bc694cff2"},{url:"/images/accordion2.jpg",revision:"29e4c305dec6800eb69ece7fe9d7f387"},{url:"/images/accordion3.jpg",revision:"69caebdff228ca46cac53cc3db06a073"},{url:"/images/accordion4.jpg",revision:"46ecf4540497f01124b9b9919a3c02f1"},{url:"/images/buildings.jpg",revision:"6363e141ba79cf768b4eb2ed5daacb33"},{url:"/images/buy_instruction_website_cn.png",revision:"01f8fdca429e126c70e4cb28a816e2b1"},{url:"/images/buy_instruction_website_en.png",revision:"377d0a7a5cea2bda191ee42871576afd"},{url:"/images/city-boy-1.jpg",revision:"537e5cc804256a54f8114e537451877f"},{url:"/images/city-girl-1.jpg",revision:"53e4a62edb1e033a6345dfc32e79b3c0"},{url:"/images/city.svg",revision:"e0d4da23a05f8379804c7225e37d60ad"},{url:"/images/coins.svg",revision:"62ce35652f7f09498b15f7837cc111ce"},{url:"/images/concepts.svg",revision:"e26289bccd4ed62d504820bc8dec5619"},{url:"/images/corporation.svg",revision:"33dc9d93f4a4a67f0d4f958312d28309"},{url:"/images/earthy.jpg",revision:"eb021c5942eeec203f0935797e1c8fcf"},{url:"/images/endless-constellation.png",revision:"89c84582f138b59fd439c3b0f59f2fea"},{url:"/images/future.svg",revision:"d36e6d8ba3e9fa909caae3e7e71cb99b"},{url:"/images/hall.jpg",revision:"05acd6d4780dec5556d3f5a69759826c"},{url:"/images/health.svg",revision:"060acd1618f07d3e4bc4873381d95482"},{url:"/images/horizontalCard.png",revision:"3b71843acbf0da3426bb8a076592712c"},{url:"/images/img_5terre.jpeg",revision:"8a1210b6f4c64ae8bb48f418607b344c"},{url:"/images/l1.png",revision:"8cf7dc5ad3b484d391f44c28ff1e62aa"},{url:"/images/l2.png",revision:"27ad4e109a1c8e96a36143eeb30d676a"},{url:"/images/l3.png",revision:"87572392e5348bd072f55544f90ccdff"},{url:"/images/l4.png",revision:"42ddcaa2e4cd5b2c8771bf6d75da4e0a"},{url:"/images/l5.png",revision:"47371f09f8d55e8ee107683fd665bf3d"},{url:"/images/l6.jpg",revision:"911fc960d8f62cba83c095ca11ed0617"},{url:"/images/money.svg",revision:"026ce2c19b05f1094c73df3c96034602"},{url:"/images/nature.png",revision:"401df9d8390943e8509854cae8a885b0"},{url:"/images/new_tokenomics.jpg",revision:"e4bebb16452d9c622e598f9063e89132"},{url:"/images/old.png",revision:"103a76892dbc7cb50bafbcd047341c8b"},{url:"/images/project_dao.svg",revision:"f1b48f1ab5d7c78f43e4eed6c846ac27"},{url:"/images/purple-bg.jpg",revision:"8d27d11911beca2cc17736ad05da2868"},{url:"/images/solution.svg",revision:"48d528e8cf0d359171b47e8b698184c1"},{url:"/images/token_distribution.png",revision:"5ac212ed319e75a73d0548fca7a0570e"},{url:"/images/trigan logo v dark.svg",revision:"188cb23c443ada0542d520e2bb1bd079"},{url:"/images/trigan logo v.svg",revision:"5fc4db2c0c5f0942c16a6a1e1e31a19e"},{url:"/images/trigan-bg.png",revision:"f03eecd6ebc480f40b374345b10bcb48"},{url:"/images/trigan-earth.png",revision:"eb16a886e6661357f5a18db8f62557ae"},{url:"/images/trigan-happy-kids--will-replace-with-original.jpg",revision:"046c5ab3e1ada45e2b0a2a5fdd6e3732"},{url:"/images/trigan-section-bg-b.png",revision:"784238f1083cad3593cc513246f371d8"},{url:"/images/trigan-section-bg-c.png",revision:"71e1d4aa176c1343783f156befcc0e3e"},{url:"/images/trigan-section-bg.jpg",revision:"5daca631bfc8eab42d9d5d2010c600bf"},{url:"/images/trigan-section-bg.png",revision:"4da62a5c7ce138e5bf29608fb86fe766"},{url:"/images/trigan-symbol-white.svg",revision:"4c513913d37de044c559b7c13f4f08b7"},{url:"/images/trigan-symbol.svg",revision:"90d47521e2ddd9bc4f3ab4cf67a8035b"},{url:"/images/twitter_image.png",revision:"deab48557e42bb44c1b5c8359bf744e8"},{url:"/images/user-3.jpg",revision:"09be3e432b90bee79d5ccc22af671d7b"},{url:"/images/users-2.png",revision:"c99b703bcf22e8098dcb36a5bb93b553"},{url:"/logo-parts/logo-bottom.png",revision:"8a43dd3d157cf6d2b0efefe32eb0fa39"},{url:"/logo-parts/logo-left.png",revision:"3f7008812eb05db86eb56c99ce57e66c"},{url:"/logo-parts/logo-right.png",revision:"4f072d327e704f86ade2b155757342ec"},{url:"/manifest.json",revision:"ab80375f6f0593113afc690f94c97720"},{url:"/pwa/fallback-GnOW1ZiFVaVdQmDKCl6H8.js",revision:"cd133fa9092ccc2adc042e7ef47a5b0f"},{url:"/pwa/sw.js",revision:"1bc188b184d0e189ccaad13c87b5d121"},{url:"/pwa/workbox-cdac34f4.js",revision:"c17621f5948a6027216499cebfdd0c68"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
