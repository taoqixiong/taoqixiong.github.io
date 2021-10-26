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
    "revision": "7a5fa8ac2aa3e22cbb61b810b0f6f9b7"
  }, {
    "url": "about/index.html",
    "revision": "d99183664edf5b4b919edb46ed5deebc"
  }, {
    "url": "animate/index.html",
    "revision": "33d15b146715995ed11d82276910daa3"
  }, {
    "url": "archives/2016/12/index.html",
    "revision": "6498714f7bd9c5b2f7a2c5d6e4554274"
  }, {
    "url": "archives/2016/index.html",
    "revision": "6498714f7bd9c5b2f7a2c5d6e4554274"
  }, {
    "url": "archives/2017/03/index.html",
    "revision": "83a95e1325cbfd617150b16b3ebb39e4"
  }, {
    "url": "archives/2017/05/index.html",
    "revision": "45ae6be473401a3e4cca2a0123255d27"
  }, {
    "url": "archives/2017/10/index.html",
    "revision": "0d669e98fac1de76c5cfa6fe9894aec3"
  }, {
    "url": "archives/2017/12/index.html",
    "revision": "ffc753ab4c20eb71c3d5d0a35091afd7"
  }, {
    "url": "archives/2017/index.html",
    "revision": "e483ec2511f00ad7f3848084a09019ce"
  }, {
    "url": "archives/2018/02/index.html",
    "revision": "4c0576fecb880768b8b733458298561c"
  }, {
    "url": "archives/2018/index.html",
    "revision": "4c0576fecb880768b8b733458298561c"
  }, {
    "url": "archives/2019/02/index.html",
    "revision": "4e129b820d76d962d713083e9073962b"
  }, {
    "url": "archives/2019/04/index.html",
    "revision": "1ecc38373bb643bcfccb6b0c55e47974"
  }, {
    "url": "archives/2019/10/index.html",
    "revision": "ca4e6b216fa63d42bca11db4e14ff79e"
  }, {
    "url": "archives/2019/index.html",
    "revision": "e2e5357239cff9bb4a3f012ad42f857f"
  }, {
    "url": "archives/2020/05/index.html",
    "revision": "d70e28265325abe954626cd6028ac368"
  }, {
    "url": "archives/2020/index.html",
    "revision": "d70e28265325abe954626cd6028ac368"
  }, {
    "url": "archives/2021/01/index.html",
    "revision": "f9910ba88db70a1b8f6b70196c133d91"
  }, {
    "url": "archives/2021/10/index.html",
    "revision": "60671c803b56da258fae64775f6c427d"
  }, {
    "url": "archives/2021/index.html",
    "revision": "71b08ca8a4eff494cc70dcd3ce26bd3b"
  }, {
    "url": "archives/index.html",
    "revision": "f3f5a42bb8f12d59d4a1124d5b6f418b"
  }, {
    "url": "archives/page/2/index.html",
    "revision": "59d1993404bca7caa99cb8972da8d071"
  }, {
    "url": "categories/折腾/index.html",
    "revision": "2b6ef4dca88b4c78befa2137882b9f24"
  }, {
    "url": "categories/水/index.html",
    "revision": "6be789430cc3d5e43941c70f21b98584"
  }, {
    "url": "css/style.css",
    "revision": "61bbe70a09937027268dd691a5316038"
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
    "revision": "4cfc0ea0c88351467c8e73d909115c9d"
  }, {
    "url": "js/script.js",
    "revision": "a8d09578bad6c6236066485d7b31ce12"
  }, {
    "url": "messages/index.html",
    "revision": "7171008ba1ef8c53815439ef790e3586"
  }, {
    "url": "page/2/index.html",
    "revision": "08e88007de79d01ee306570f8f60eabd"
  }, {
    "url": "posts/11941/index.html",
    "revision": "e125e6fb5927ef7aca5202f136b1b29e"
  }, {
    "url": "posts/16108/index.html",
    "revision": "d187feeee23ae9b826b60fda2a183ca2"
  }, {
    "url": "posts/18671/index.html",
    "revision": "86a89a8f43592ec57e4e61e4eb6b2652"
  }, {
    "url": "posts/20593/index.html",
    "revision": "4d7fe4c04d3659a959684e1ac267611b"
  }, {
    "url": "posts/35234/index.html",
    "revision": "84ab038e2b58c41b224279228f090586"
  }, {
    "url": "posts/38470/index.html",
    "revision": "de4371bdd5fdfa9dfd5d58fce418477f"
  }, {
    "url": "posts/38685/index.html",
    "revision": "1268d9463a3460fbdc4b8b6c8a5e0297"
  }, {
    "url": "posts/44799/index.html",
    "revision": "d12bf32258051b698dcf37859cb279a0"
  }, {
    "url": "posts/46684/index.html",
    "revision": "cfbb87540d6a66db6f09d988af1216b7"
  }, {
    "url": "posts/51311/index.html",
    "revision": "6da2cacab3294c54ba4087d9a6a04f9b"
  }, {
    "url": "posts/53555/index.html",
    "revision": "0d16027454b3efaaef0948c56e453afb"
  }, {
    "url": "posts/61260/index.html",
    "revision": "4e20cf7397ccfc68588cc439020c53a1"
  }, {
    "url": "posts/61570/index.html",
    "revision": "6c5d674d9f4ba8d0368ff950dcb10feb"
  }, {
    "url": "posts/63258/index.html",
    "revision": "d06831604eb70df7821ac68643e167a3"
  }, {
    "url": "posts/7056/index.html",
    "revision": "762fc21aa61331619d12b27b10a36cd4"
  }, {
    "url": "tags/Archlinux/index.html",
    "revision": "51c054a366600da22f697ad30540686d"
  }, {
    "url": "tags/Cubieboard2/index.html",
    "revision": "25c78eccf90ddad16a7bfeade6d9052b"
  }, {
    "url": "tags/Home-Assistant/index.html",
    "revision": "025335df9b176c36fb9b986c2df6cdbd"
  }, {
    "url": "tags/index.html",
    "revision": "726b29a7f53c94520105aa20872c3ac4"
  }, {
    "url": "tags/Linux/index.html",
    "revision": "62a644e7ef3c0a1daa421e4720314500"
  }, {
    "url": "tags/Nginx/index.html",
    "revision": "6a05f7c2cf677227313dc16cb27a0b41"
  }, {
    "url": "tags/Nintendo-Switch/index.html",
    "revision": "0232d6d0b56f26c6da7dbb54c7fdc99c"
  }, {
    "url": "tags/OpenWRT/index.html",
    "revision": "95f98545d6f4273add8e6995064cddf2"
  }, {
    "url": "tags/SNI/index.html",
    "revision": "645f201579a34088ce8dd87b10b5648c"
  }, {
    "url": "tags/内网穿透/index.html",
    "revision": "f71ac0a8b5e51f1ff8ce50022112930b"
  }, {
    "url": "tags/开箱/index.html",
    "revision": "37fa40af8f1ca7ad1f615f7f3811e405"
  }, {
    "url": "tags/智能家居/index.html",
    "revision": "19c9e7e2e65c4519accdd80e271eeb1d"
  }, {
    "url": "tags/水/index.html",
    "revision": "7529664f3a5fe7a06d09a1b17dbed2ab"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
