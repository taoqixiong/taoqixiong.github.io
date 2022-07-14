/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-903cc191'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "404/index.html",
    "revision": "effb1378b57df329b0612877be55ce6d"
  }, {
    "url": "about/index.html",
    "revision": "203721d4a889d7f5e49348ae10f4c5b5"
  }, {
    "url": "animate/index.html",
    "revision": "cfd2e978ef7b1ac5689a54b1cda4cded"
  }, {
    "url": "archives/2016/12/index.html",
    "revision": "ecfd260f8b1c73e4118dae9db7bce262"
  }, {
    "url": "archives/2016/index.html",
    "revision": "ecfd260f8b1c73e4118dae9db7bce262"
  }, {
    "url": "archives/2017/03/index.html",
    "revision": "22acbdcbe367fbbfed7f887f4d0565c7"
  }, {
    "url": "archives/2017/05/index.html",
    "revision": "aef1e2f9cd06d6fb1a5eb204cc435fae"
  }, {
    "url": "archives/2017/10/index.html",
    "revision": "0c1bd3d88bc525b323beec132d6b6af2"
  }, {
    "url": "archives/2017/12/index.html",
    "revision": "73147e405365af8694f7efb165523612"
  }, {
    "url": "archives/2017/index.html",
    "revision": "1a415fa071e6532cdb8148af3674dd71"
  }, {
    "url": "archives/2018/02/index.html",
    "revision": "ce97ce1899f6a6bd52290bd5a572da15"
  }, {
    "url": "archives/2018/index.html",
    "revision": "ce97ce1899f6a6bd52290bd5a572da15"
  }, {
    "url": "archives/2019/02/index.html",
    "revision": "cf512d7ddd051aa46d05510d8928dc91"
  }, {
    "url": "archives/2019/04/index.html",
    "revision": "da4642a8d0cb33e33eca0d6fdbc4faad"
  }, {
    "url": "archives/2019/10/index.html",
    "revision": "123f9ca4f7affa1586de59e0e6929f26"
  }, {
    "url": "archives/2019/index.html",
    "revision": "8af6a7906e0df3e8a0c77362b422eb0c"
  }, {
    "url": "archives/2020/05/index.html",
    "revision": "aaebd19af094b2441e5ec8249b6aabfe"
  }, {
    "url": "archives/2020/index.html",
    "revision": "aaebd19af094b2441e5ec8249b6aabfe"
  }, {
    "url": "archives/2021/01/index.html",
    "revision": "b1f36e9abfc351dce5e4fde9c965cf85"
  }, {
    "url": "archives/2021/10/index.html",
    "revision": "9ff4c0b555113f3d689f2b0e21507385"
  }, {
    "url": "archives/2021/index.html",
    "revision": "cced35385295ec0839c70af3b7a55bbd"
  }, {
    "url": "archives/index.html",
    "revision": "c242df761440209461eb2b8e04a736db"
  }, {
    "url": "archives/page/2/index.html",
    "revision": "f3adc032357fcf84ca0f7a4944215e58"
  }, {
    "url": "categories/折腾/index.html",
    "revision": "d52e4a13aa72bfc99a1d07395736f352"
  }, {
    "url": "categories/水/index.html",
    "revision": "09e148dd1b2e2b3707d111f683a2f8d6"
  }, {
    "url": "css/style.css",
    "revision": "1489a27900708f2e634c4f74e07c9ff5"
  }, {
    "url": "icons-192.png",
    "revision": "19eb65473fc0563716ab31696d278983"
  }, {
    "url": "icons-512.png",
    "revision": "d12a987043264fb97edfbc94be33122b"
  }, {
    "url": "images/cover/1z8e30m7617zhqd.jpg",
    "revision": "c30712f0488ca147a224f4d92b01e82b"
  }, {
    "url": "images/cover/2ur2ij59mf37vce.jpg",
    "revision": "2f9e4d45d6c1b6ef87025a12b124668d"
  }, {
    "url": "images/cover/3b2q61c6ot5syd0.jpg",
    "revision": "b81cba30935224072ff2d7c90b057f3e"
  }, {
    "url": "images/cover/4YSsvyZBz7EX0By.jpg",
    "revision": "403b1f88f193234bf16e01f183765779"
  }, {
    "url": "images/cover/54op9hckcol9bn4.jpg",
    "revision": "4cddfcb779eb6d4bdedb268c0e621215"
  }, {
    "url": "images/cover/5bu5kg7q7izudg8.png",
    "revision": "fdef0fa98a65f51ff2a2b630c47bdc89"
  }, {
    "url": "images/cover/74lezr1sijuzq9e.jpg",
    "revision": "a99b2b9efbbc8e3359ab7dcd802cb222"
  }, {
    "url": "images/cover/C8qY84q4gVNyB6ML.jpg",
    "revision": "340f9b1d4bdeceba43ec4b9b3f8a7c37"
  }, {
    "url": "images/cover/eapqh1of24msw30.jpg",
    "revision": "aef1b9e65f47691044b0d821a9a32567"
  }, {
    "url": "images/cover/ewe515zybpwr0sn.jpg",
    "revision": "f3de158c438fde6ffe0c57229e6b19ec"
  }, {
    "url": "images/cover/fkp1ybb1l9n12fo.jpg",
    "revision": "1576a1a667575030b0c4cae7078715b3"
  }, {
    "url": "images/cover/lhgg48e8hzd4hr9.jpg",
    "revision": "f7b7bdb133fcdb644b9e315bfdf8f81a"
  }, {
    "url": "images/cover/r4jhusron4ty24i.jpg",
    "revision": "6c2ddded2d6db2eecbdbfb0f91dc879c"
  }, {
    "url": "images/cover/ri0ow9kqz4r5hlo.jpg",
    "revision": "5c3325fd8d6c55b4bb87bb9a083bf22c"
  }, {
    "url": "images/cover/rv2spucgfqab95n.jpg",
    "revision": "82d1783f5c071e956a646a046ba2bd80"
  }, {
    "url": "images/cover/shvg4uby4qktktd.jpg",
    "revision": "a26c234eeb0d25823a97607147fafe09"
  }, {
    "url": "images/cover/tvb8igg18ay8h8n.jpg",
    "revision": "f6cda2fb80cacd21f3a4278616df2ff8"
  }, {
    "url": "images/cover/ub4ihgy9lq08lu1.jpg",
    "revision": "1615c8d7b8c8322cea3ed9886ad29794"
  }, {
    "url": "images/cover/v15lsuhhyivgiul.jpg",
    "revision": "17f5d742dd8bac27b3a9c4e070b91361"
  }, {
    "url": "images/cover/wb7he66pqd3sual.jpg",
    "revision": "2b4ee378fbef216533f0da83cd6a333f"
  }, {
    "url": "images/cover/YcAdLBU43hJ6Xxs.jpg",
    "revision": "4da686e1c1862d76a89fe8e8f252fa90"
  }, {
    "url": "images/cover/zfc8g394i1p23f9.jpg",
    "revision": "b77306b4663558d15b9e2bd12869f15d"
  }, {
    "url": "index.html",
    "revision": "9569c4b515184eb05892fcf40034853e"
  }, {
    "url": "js/script.js",
    "revision": "a8d09578bad6c6236066485d7b31ce12"
  }, {
    "url": "messages/index.html",
    "revision": "ba5982e98438097dca0693428ef411c6"
  }, {
    "url": "page/2/index.html",
    "revision": "c58af7442649eaf9295d8a7f07a019b0"
  }, {
    "url": "posts/11941/index.html",
    "revision": "b5ddfe4f2df705e5c4defbccd2e7faf6"
  }, {
    "url": "posts/16108/index.html",
    "revision": "c1ad03fbbe007ff845aace8041edcf42"
  }, {
    "url": "posts/18671/index.html",
    "revision": "5ca6032923a54de4bafb0be6beae3e75"
  }, {
    "url": "posts/20593/index.html",
    "revision": "180ce35f7cf9695c499f5559240d51d9"
  }, {
    "url": "posts/35234/index.html",
    "revision": "749bf8dbf3c4f6c02c95f8bde4900f9f"
  }, {
    "url": "posts/38470/index.html",
    "revision": "9fef4558c85d0f8ffebbdc7fad10e7e3"
  }, {
    "url": "posts/38685/index.html",
    "revision": "349297b3d640d23d6a748ab1a2604d96"
  }, {
    "url": "posts/44799/index.html",
    "revision": "a97f4e342d270a14e40335fae49c7abf"
  }, {
    "url": "posts/46684/index.html",
    "revision": "5e3915188b9d6a62d79235bf62747416"
  }, {
    "url": "posts/51311/index.html",
    "revision": "4998f7078b8f669a0c5a6479b01eef63"
  }, {
    "url": "posts/53555/index.html",
    "revision": "0c8be98d0d36273f97e4921cf8eb1e76"
  }, {
    "url": "posts/61260/index.html",
    "revision": "17a48ccf1e4af87c39e83dc3e4003796"
  }, {
    "url": "posts/61570/index.html",
    "revision": "446ab37c4bca4aa6210a98de6e4ef996"
  }, {
    "url": "posts/63258/index.html",
    "revision": "3c9d0a717e6df8165e0ada8b6ad7b03f"
  }, {
    "url": "posts/7056/index.html",
    "revision": "2b40c013fabec375c956f598f9ce8c72"
  }, {
    "url": "tags/Archlinux/index.html",
    "revision": "0130303f1868f034b88fb6ffe62e4ca1"
  }, {
    "url": "tags/Cubieboard2/index.html",
    "revision": "062fdd27bc8153af1ae866d4378c818e"
  }, {
    "url": "tags/Home-Assistant/index.html",
    "revision": "1ca6be3c74dff73828649f1c114724ea"
  }, {
    "url": "tags/index.html",
    "revision": "6b8f6e321607e68f7018eb575f52ab6e"
  }, {
    "url": "tags/Linux/index.html",
    "revision": "2323fd06310c987e16ede60303ea78a8"
  }, {
    "url": "tags/Nginx/index.html",
    "revision": "9d7ee5364fda0ca44c102cf6c8a6e72d"
  }, {
    "url": "tags/Nintendo-Switch/index.html",
    "revision": "38af080b53986f13295e64e6536a3f77"
  }, {
    "url": "tags/OpenWRT/index.html",
    "revision": "4e6d043012ddc03a1c1bf1f60357ab6d"
  }, {
    "url": "tags/SNI/index.html",
    "revision": "3ecba02c57b8565869fca6600aded0a9"
  }, {
    "url": "tags/内网穿透/index.html",
    "revision": "a72fd3db4b259dfecd1a64bbdb66f3f0"
  }, {
    "url": "tags/开箱/index.html",
    "revision": "510fe552e47e4f2ad3569dc254e80d74"
  }, {
    "url": "tags/智能家居/index.html",
    "revision": "df04af848d114633a75641494ed4f393"
  }, {
    "url": "tags/水/index.html",
    "revision": "006babf848abb0a0fd8ae1c4908687bd"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
