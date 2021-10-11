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
    "revision": "676a58edad1b8fbbbcf48748abe700c7"
  }, {
    "url": "about/index.html",
    "revision": "9249bf43e88dd16b53fc8b924a8c74eb"
  }, {
    "url": "animate/index.html",
    "revision": "69c17d6be59430d0d1cc150fff86aee7"
  }, {
    "url": "archives/2016/12/index.html",
    "revision": "d8572682e2f14a41d6f4f4e8b31a56d8"
  }, {
    "url": "archives/2016/index.html",
    "revision": "d8572682e2f14a41d6f4f4e8b31a56d8"
  }, {
    "url": "archives/2017/03/index.html",
    "revision": "36a8825a74762edabae4e1d25fac9c43"
  }, {
    "url": "archives/2017/05/index.html",
    "revision": "db620649d05ccdf0e55d2e15730b6f38"
  }, {
    "url": "archives/2017/10/index.html",
    "revision": "bb78261b03fc3cef5abd51a3a6586d8e"
  }, {
    "url": "archives/2017/12/index.html",
    "revision": "f745a8630a39a53b5d2be1fdcc5fb98c"
  }, {
    "url": "archives/2017/index.html",
    "revision": "e4714ad35078faa85dab985b0fc6bb8e"
  }, {
    "url": "archives/2018/02/index.html",
    "revision": "b6e90a6a512ccfb753cfae32df62a815"
  }, {
    "url": "archives/2018/index.html",
    "revision": "b6e90a6a512ccfb753cfae32df62a815"
  }, {
    "url": "archives/2019/02/index.html",
    "revision": "ef2423044c5a8091bc1c4e590ffcdec6"
  }, {
    "url": "archives/2019/04/index.html",
    "revision": "9ffeed2fc2d9552fe060dc6ef0bf2c04"
  }, {
    "url": "archives/2019/10/index.html",
    "revision": "20b13b009868c64c85a16c2b10f72440"
  }, {
    "url": "archives/2019/index.html",
    "revision": "2e6c07883476e15e086e1a7397b7a6e5"
  }, {
    "url": "archives/2020/05/index.html",
    "revision": "6dc23b0d9887a4465526ccd4df8473e3"
  }, {
    "url": "archives/2020/index.html",
    "revision": "6dc23b0d9887a4465526ccd4df8473e3"
  }, {
    "url": "archives/2021/01/index.html",
    "revision": "4cf5daaf0a6fe16254c47ed56309ce58"
  }, {
    "url": "archives/2021/index.html",
    "revision": "4cf5daaf0a6fe16254c47ed56309ce58"
  }, {
    "url": "archives/index.html",
    "revision": "a19e605268d0af5430aa9d70c4db53b0"
  }, {
    "url": "archives/page/2/index.html",
    "revision": "d29b1ad7d107b12c1948abbd3b437bfe"
  }, {
    "url": "categories/折腾/index.html",
    "revision": "64c2b0d99f08ff96412bc099c832b319"
  }, {
    "url": "categories/水/index.html",
    "revision": "5961029204c3d2a637c892c9c9f88737"
  }, {
    "url": "css/style.css",
    "revision": "6300544bf6e3be54010236ee8556c590"
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
    "revision": "941a18b5bbff57f460dd31af0d2be151"
  }, {
    "url": "js/script.js",
    "revision": "a8d09578bad6c6236066485d7b31ce12"
  }, {
    "url": "messages/index.html",
    "revision": "5a6628d68279077f3c6b61bdc6c8ccfe"
  }, {
    "url": "page/2/index.html",
    "revision": "eeb8406405895891d795b8bc50ad8e11"
  }, {
    "url": "posts/11941/index.html",
    "revision": "25a145f666d418ebe6308a497eef94bd"
  }, {
    "url": "posts/16108/index.html",
    "revision": "e5aa0569e63a24895f5504e15a4a8e4e"
  }, {
    "url": "posts/18671/index.html",
    "revision": "6a4bac3f4f783cd33b9736e747261f44"
  }, {
    "url": "posts/20593/index.html",
    "revision": "c234e5cb5c199d0780f388a8c8e63fce"
  }, {
    "url": "posts/38470/index.html",
    "revision": "1823a4c3ded82e3a6f341f3d7aa4ae1f"
  }, {
    "url": "posts/38685/index.html",
    "revision": "1005c98cce9d5f5306b51fa51a445381"
  }, {
    "url": "posts/44799/index.html",
    "revision": "b812bbabc98d7e1b7b402f5281eedce7"
  }, {
    "url": "posts/46684/index.html",
    "revision": "60c0243d48e7bd3c6979e3e7973ab136"
  }, {
    "url": "posts/51311/index.html",
    "revision": "12eb20e6a2d9cfc4dfddea9689b8eeed"
  }, {
    "url": "posts/53555/index.html",
    "revision": "5504d8d482940650f667df36c75b003e"
  }, {
    "url": "posts/61260/index.html",
    "revision": "cbb7c19cb922d13bb798555d3d9c75c7"
  }, {
    "url": "posts/61570/index.html",
    "revision": "92a0b6611425724b76d2a44d48174bbf"
  }, {
    "url": "posts/63258/index.html",
    "revision": "916780c85adda95fee0b870076e05384"
  }, {
    "url": "posts/7056/index.html",
    "revision": "e69b180bcfb7127c15867730f58a64ae"
  }, {
    "url": "tags/Archlinux/index.html",
    "revision": "e056b037f43cf5853c261dd5715f5b0c"
  }, {
    "url": "tags/Cubieboard2/index.html",
    "revision": "1310da1c6e9b38ff4794682cb3633708"
  }, {
    "url": "tags/Home-Assistant/index.html",
    "revision": "7c560476d0849e2af7a2a019d7a5ef6b"
  }, {
    "url": "tags/index.html",
    "revision": "b23b8eb706b336404c3317abe9702950"
  }, {
    "url": "tags/Linux/index.html",
    "revision": "0c6bfd75d8e2161d9c04fc86b87b8dec"
  }, {
    "url": "tags/Nginx/index.html",
    "revision": "fb2e58c1245ba4c54c2a25d4b662978c"
  }, {
    "url": "tags/Nintendo-Switch/index.html",
    "revision": "376a5da9dfb252678889d2dad451c305"
  }, {
    "url": "tags/SNI/index.html",
    "revision": "3c1f8882d48c1b6be4c218c84e3de6c0"
  }, {
    "url": "tags/内网穿透/index.html",
    "revision": "f582c2d22223fd7f5f66f8dc6e383df0"
  }, {
    "url": "tags/开箱/index.html",
    "revision": "a6dd38163998e8db68ba352775752462"
  }, {
    "url": "tags/折腾/index.html",
    "revision": "614e70fcaed492454ccb35a39a5db3de"
  }, {
    "url": "tags/智能家居/index.html",
    "revision": "da14cc2318c9f665ec0b9fac3da2258f"
  }, {
    "url": "tags/水/index.html",
    "revision": "b96145e49b5180a8ba06839f50d49a10"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
