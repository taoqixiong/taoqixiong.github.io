/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404/index.html","25cc9d72664b28831e1d2f2ef946de2e"],["about/index.html","5235e12f52ac3a9471bc925e79d40349"],["animate/index.html","7ebffdf290802207ea34a9701734e352"],["archives/2016/12/index.html","296ba189753956590f6c1f7634c47b8d"],["archives/2016/index.html","296ba189753956590f6c1f7634c47b8d"],["archives/2017/03/index.html","949da509e52df287e6cf932612a8f491"],["archives/2017/05/index.html","f13e88e2cda6681221e7174bf59eb35b"],["archives/2017/10/index.html","fd10ec68551f4d004d53afc952c0c8dd"],["archives/2017/12/index.html","fbb6b704edd2f614c4d0cb9521c28801"],["archives/2017/index.html","57d9e32b8c28e6773ffa8f088b4aeede"],["archives/2018/02/index.html","b08054e87f29c477472cb868640114a3"],["archives/2018/index.html","b08054e87f29c477472cb868640114a3"],["archives/2019/02/index.html","8099bca299b0f36b3aed7715e4c3d20c"],["archives/2019/04/index.html","8c3a7fa25ab317b612225f70dee5ec24"],["archives/2019/10/index.html","d0b56c90a929611b7b7b2c4489cf7a38"],["archives/2019/index.html","a505948becc14c81d6aaad5e61f8c76a"],["archives/2020/05/index.html","d78e3c4b8c91c106fcc032aa1681b8a1"],["archives/2020/index.html","d78e3c4b8c91c106fcc032aa1681b8a1"],["archives/2021/01/index.html","be151d21aeef2e8f410fe4131d228dd0"],["archives/2021/index.html","be151d21aeef2e8f410fe4131d228dd0"],["archives/index.html","2b38aec0e8cac2c7bd47c1d4dce235eb"],["archives/page/2/index.html","6e504a9bb9074d7299634f9e00c711a6"],["css/style.css","2eefc85fa2913d9110e971e029dda299"],["images/cover/1z8e30m7617zhqd.jpg","c30712f0488ca147a224f4d92b01e82b"],["images/cover/2ur2ij59mf37vce.jpg","2f9e4d45d6c1b6ef87025a12b124668d"],["images/cover/3b2q61c6ot5syd0.jpg","b81cba30935224072ff2d7c90b057f3e"],["images/cover/4YSsvyZBz7EX0By.jpg","403b1f88f193234bf16e01f183765779"],["images/cover/54op9hckcol9bn4.jpg","4cddfcb779eb6d4bdedb268c0e621215"],["images/cover/5bu5kg7q7izudg8.png","fdef0fa98a65f51ff2a2b630c47bdc89"],["images/cover/74lezr1sijuzq9e.jpg","67f90238f63ffcb1764f33054e1473d3"],["images/cover/YcAdLBU43hJ6Xxs.jpg","4da686e1c1862d76a89fe8e8f252fa90"],["images/cover/eapqh1of24msw30.jpg","aef1b9e65f47691044b0d821a9a32567"],["images/cover/ewe515zybpwr0sn.jpg","f3de158c438fde6ffe0c57229e6b19ec"],["images/cover/fkp1ybb1l9n12fo.jpg","1576a1a667575030b0c4cae7078715b3"],["images/cover/lhgg48e8hzd4hr9.jpg","f7b7bdb133fcdb644b9e315bfdf8f81a"],["images/cover/r4jhusron4ty24i.jpg","6c2ddded2d6db2eecbdbfb0f91dc879c"],["images/cover/ri0ow9kqz4r5hlo.jpg","5c3325fd8d6c55b4bb87bb9a083bf22c"],["images/cover/rv2spucgfqab95n.jpg","82d1783f5c071e956a646a046ba2bd80"],["images/cover/shvg4uby4qktktd.jpg","a26c234eeb0d25823a97607147fafe09"],["images/cover/tvb8igg18ay8h8n.jpg","f6cda2fb80cacd21f3a4278616df2ff8"],["images/cover/ub4ihgy9lq08lu1.jpg","1615c8d7b8c8322cea3ed9886ad29794"],["images/cover/v15lsuhhyivgiul.jpg","17f5d742dd8bac27b3a9c4e070b91361"],["images/cover/wb7he66pqd3sual.jpg","2b4ee378fbef216533f0da83cd6a333f"],["images/cover/zfc8g394i1p23f9.jpg","b77306b4663558d15b9e2bd12869f15d"],["images/image-error.jpg","1e8084c18fc1006cd056641d56e8a2a5"],["images/wave-light.png","1f3d76a4cc121db5b023610470075f24"],["index.html","c4df0ab9af6cd699f93904e216e25af8"],["js/script.js","ddcb41552b529aa78b27cd6f4cab618a"],["lib/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["lib/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["lib/DPlayer.min.css","de06eca94369a009bead8b78ce4c14c4"],["lib/DPlayer.min.js","b4cdac968229e21259e0b5c0c02d1851"],["lib/waterfall.min.js","017922b358f0e5cac87d067af9593ed3"],["lib/zoom.min.js","ae9eb16ebcf167af58ba79e046988fab"],["messages/index.html","cac19563fe3c7700eb51d4b0bd209842"],["page/2/index.html","df551af2d623510db667305afb6a3737"],["posts/11941/index.html","cfd8000a042fd069e33332b06971fa17"],["posts/16108/index.html","3cea783cf2cdfa4240b8147449e32ece"],["posts/18671/index.html","20a5ee1f40ff6b2a27d2cb71ef389e09"],["posts/20593/index.html","ce292810761acdf94d6a8ca2a2b71f1f"],["posts/38470/index.html","508434d50839b3c020d5726e29ba3620"],["posts/38685/index.html","e7a4e08c4cb1a99721970221e5d64028"],["posts/44799/index.html","22263227178c0766e7647248b3f1c2b3"],["posts/46684/index.html","f0ccdd533681e6d9761637cd766ae6aa"],["posts/51311/index.html","067f222b16c9db052ff3b05be5bc1d4d"],["posts/53555/index.html","dbbb010ca6c822996658c402e4c92627"],["posts/61260/index.html","868df125463f04686103d481ecc766d4"],["posts/61570/index.html","1363d3e0f2f06b1615085ac037383fee"],["posts/63258/index.html","bdff85b0f356af384bd2c2cf4c59636e"],["posts/7056/index.html","d51fa60a3d6b5b526cd61d4e2d622f0d"],["tags/Archlinux/index.html","5b609f002df7c69175c11a38a21ff53b"],["tags/Cubieboard2/index.html","756375d0d7d01e1272596dacf0da240a"],["tags/Home-Assistant/index.html","a6478afe70ad12870f524265c7415a0c"],["tags/Linux/index.html","9f2edf2936a45d83328ad16a06e15845"],["tags/Nginx/index.html","64a49de923f16d5f43546e412ec8b123"],["tags/Nintendo-Switch/index.html","c0d13d188d6b5c3a7b32e7073e423b0e"],["tags/SNI/index.html","1b8f346a266728803238a822f034bf0d"],["tags/index.html","5039892907ac67a033f4d817d5e9bee3"],["tags/开箱/index.html","c8e09bc7f3643a40f7cf2a132dbe896f"],["tags/折腾/index.html","c27a10c7484eb4938ff444699a03ffbe"],["tags/智能家居/index.html","cdeb56bd1d97fb9f085dbb3f55186f0d"],["tags/水/index.html","2b61b863cb74bafbac6fdde444d976d9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







