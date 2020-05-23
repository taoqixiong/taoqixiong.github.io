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

var precacheConfig = [["404/index.html","aa4ef4aa8519b4ddbc8db39a8aec43fb"],["about/index.html","e074d128854f80d2fb70f88bbfaa2e90"],["animate/index.html","326cbff6f5179a163340b04fe476f49b"],["archives/2016/12/index.html","6ef0bb7eeb095b11b47291b02455d32e"],["archives/2016/index.html","6ef0bb7eeb095b11b47291b02455d32e"],["archives/2017/03/index.html","8f67f4eaba850bde61f80daba3a59fbb"],["archives/2017/05/index.html","a47e20de7a6b28fe3cc2b67fb1328dbf"],["archives/2017/10/index.html","8516e15b3f1213adb36bf6a7f2066f93"],["archives/2017/12/index.html","266075db151f5c59c7a6d64de61d3079"],["archives/2017/index.html","eb6e990486f078f1032b1376d5365bc7"],["archives/2018/02/index.html","4409958fc80d5261f8f7fe48bad6fb29"],["archives/2018/index.html","4409958fc80d5261f8f7fe48bad6fb29"],["archives/2019/02/index.html","32697b47b10ce0129214d464068ae3b9"],["archives/2019/04/index.html","3452741ec5a64de9d1689e47a6805e53"],["archives/2019/10/index.html","4c77738f4e7448d67daba554565a56fd"],["archives/2019/index.html","4b7a5e7fc52c071d198134061a90e3da"],["archives/2020/05/index.html","721502972a69c445df06481f09f49034"],["archives/2020/index.html","721502972a69c445df06481f09f49034"],["archives/index.html","42ff4ac87e0ddf8f2e58271cbc6d5aad"],["archives/page/2/index.html","d576424e306ed7b3c2256605ec842135"],["css/style.css","2eefc85fa2913d9110e971e029dda299"],["images/cover/1z8e30m7617zhqd.jpg","c30712f0488ca147a224f4d92b01e82b"],["images/cover/2ur2ij59mf37vce.jpg","2f9e4d45d6c1b6ef87025a12b124668d"],["images/cover/3b2q61c6ot5syd0.jpg","b81cba30935224072ff2d7c90b057f3e"],["images/cover/54op9hckcol9bn4.jpg","4cddfcb779eb6d4bdedb268c0e621215"],["images/cover/5bu5kg7q7izudg8.png","fdef0fa98a65f51ff2a2b630c47bdc89"],["images/cover/74lezr1sijuzq9e.jpg","67f90238f63ffcb1764f33054e1473d3"],["images/cover/YcAdLBU43hJ6Xxs.jpg","4da686e1c1862d76a89fe8e8f252fa90"],["images/cover/eapqh1of24msw30.jpg","aef1b9e65f47691044b0d821a9a32567"],["images/cover/ewe515zybpwr0sn.jpg","f3de158c438fde6ffe0c57229e6b19ec"],["images/cover/fkp1ybb1l9n12fo.jpg","1576a1a667575030b0c4cae7078715b3"],["images/cover/lhgg48e8hzd4hr9.jpg","f7b7bdb133fcdb644b9e315bfdf8f81a"],["images/cover/r4jhusron4ty24i.jpg","6c2ddded2d6db2eecbdbfb0f91dc879c"],["images/cover/ri0ow9kqz4r5hlo.jpg","5c3325fd8d6c55b4bb87bb9a083bf22c"],["images/cover/rv2spucgfqab95n.jpg","fbf0c19f5310c484b742803bfa1f54a2"],["images/cover/shvg4uby4qktktd.jpg","a26c234eeb0d25823a97607147fafe09"],["images/cover/tvb8igg18ay8h8n.jpg","f6cda2fb80cacd21f3a4278616df2ff8"],["images/cover/ub4ihgy9lq08lu1.jpg","1615c8d7b8c8322cea3ed9886ad29794"],["images/cover/v15lsuhhyivgiul.jpg","17f5d742dd8bac27b3a9c4e070b91361"],["images/cover/wb7he66pqd3sual.jpg","2b4ee378fbef216533f0da83cd6a333f"],["images/cover/zfc8g394i1p23f9.jpg","b77306b4663558d15b9e2bd12869f15d"],["images/image-error.jpg","1e8084c18fc1006cd056641d56e8a2a5"],["images/wave-light.png","1f3d76a4cc121db5b023610470075f24"],["index.html","1a75903e7857a5e812c7464e19208386"],["js/script.js","ddcb41552b529aa78b27cd6f4cab618a"],["lib/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["lib/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["lib/DPlayer.min.css","de06eca94369a009bead8b78ce4c14c4"],["lib/DPlayer.min.js","b4cdac968229e21259e0b5c0c02d1851"],["lib/waterfall.min.js","017922b358f0e5cac87d067af9593ed3"],["lib/zoom.min.js","ae9eb16ebcf167af58ba79e046988fab"],["messages/index.html","573021e900d15211e7f25462469a140d"],["page/2/index.html","4bd22c18bed2c0e34003d505e504787f"],["posts/11941/index.html","0070bfbf3abb2c51c8aaded875ad8a17"],["posts/16108/index.html","ac1206d840e55e9ed8745554153f6739"],["posts/18671/index.html","1b84ef49367949e4eafd220142e21693"],["posts/20593/index.html","fd4210a12930b8a2ffac58bb1c7f3007"],["posts/38470/index.html","82e60953f71a1e4165fae81d05b551cf"],["posts/38685/index.html","3d3cf48b25b0f45926cd3b0fb66f98d7"],["posts/44799/index.html","fa068b6f9ad6eb15d4961477acf20912"],["posts/46684/index.html","1fd553fcaa6c0966d48bb94abb003977"],["posts/51311/index.html","5fcefb37fc746b8b3f5ab3961d6568e5"],["posts/53555/index.html","fcb4dbc138f18cdca3dd56b53ecb0e1b"],["posts/61260/index.html","5a9f5e4189c55940329a28c616f0de6c"],["posts/61570/index.html","48cf4647e40e320781938f45f6653da0"],["posts/7056/index.html","8426d1cd8ac4e840826719934d68b632"],["tags/Archlinux/index.html","4521a1f5dc2721d1c3ea423a7b8ed5ef"],["tags/Cubieboard2/index.html","25a02ca9dd41168a27627f380a351f21"],["tags/Linux/index.html","41a4614c614310716eefc522f9a69937"],["tags/Nginx/index.html","47eb89d75dc35412054c5dce6ff0cb48"],["tags/Nintendo-Switch/index.html","794712931a4b94b139ab46e4f31f04c8"],["tags/SNI/index.html","b12255b7928776fc6dc2c86a5d6e3736"],["tags/index.html","37639b8cf2c9429c395f0b7e98dd2a89"],["tags/开箱/index.html","3fa1e1b7a93edd65865732b91837effe"],["tags/折腾/index.html","4589f4a4280b8423fe001e51f9b088d8"],["tags/水/index.html","25522f20bf531c07186be54f31d568de"]];
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







