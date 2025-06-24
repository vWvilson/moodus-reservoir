import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_s9SbC5Nl.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/lo/Desktop/moodus-reservoir/","cacheDir":"file:///Users/lo/Desktop/moodus-reservoir/node_modules/.astro/","outDir":"file:///Users/lo/Desktop/moodus-reservoir/dist/","srcDir":"file:///Users/lo/Desktop/moodus-reservoir/src/","publicDir":"file:///Users/lo/Desktop/moodus-reservoir/public/","buildClientDir":"file:///Users/lo/Desktop/moodus-reservoir/dist/","buildServerDir":"file:///Users/lo/Desktop/moodus-reservoir/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".calendar[data-astro-cid-ro7pgs3h]{display:grid;grid-template-columns:repeat(7,1fr);gap:10px}.day[data-astro-cid-ro7pgs3h]{border:1px solid #ccc;padding:8px;min-height:100px}.event[data-astro-cid-ro7pgs3h]{font-size:.9rem;background:#def;margin:4px 0;padding:2px 4px;border-radius:4px}.day-name[data-astro-cid-ro7pgs3h]{font-weight:700;text-align:center}\n"},{"type":"external","src":"/_astro/_slug_.BZBpqOSY.css"}],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.BZBpqOSY.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/lo/Desktop/moodus-reservoir/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/lo/Desktop/moodus-reservoir/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/lo/Desktop/moodus-reservoir/src/pages/events.astro",{"propagation":"none","containsHead":true}],["/Users/lo/Desktop/moodus-reservoir/src/pages/events/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/lo/Desktop/moodus-reservoir/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/admin/_---params_.astro.mjs","\u0000@astro-page:src/pages/events/[slug]@_@astro":"pages/events/_slug_.astro.mjs","\u0000@astro-page:src/pages/events@_@astro":"pages/events.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Albbz106.mjs","/Users/lo/Desktop/moodus-reservoir/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CP3FbJF1.mjs","@astrojs/react/client.js":"_astro/client.Ib2F77LA.js","/Users/lo/Desktop/moodus-reservoir/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DDJt_3i5.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.DBvmKBbr.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.Bamjrktd.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.BPf4i7HJ.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.DcYUO3OY.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.B2IRsbee.js","/Users/lo/Desktop/moodus-reservoir/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.DfECwvZT.js","/Users/lo/Desktop/moodus-reservoir/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.BR7Y1qyv.js","/Users/lo/Desktop/moodus-reservoir/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.CQyO4pow.js","/Users/lo/Desktop/moodus-reservoir/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.BtcuZtQH.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.BmTsiFky.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/BroadcastDisplayedDocument.mjs":"_astro/BroadcastDisplayedDocument.Xytgq5pK.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.CceOD3Tu.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.5P2YQ6Xw.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/QRCodeSVG.mjs":"_astro/QRCodeSVG.BEKhi8LY.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/LiveQueries.mjs":"_astro/LiveQueries.BQ394GQ9.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/PostMessageDocuments.mjs":"_astro/PostMessageDocuments.WiU-MnG-.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/PostMessageRefreshMutations.mjs":"_astro/PostMessageRefreshMutations.CAbIqVWG.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/PostMessagePerspective.mjs":"_astro/PostMessagePerspective.D6kIuhgo.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/PostMessagePreviewSnapshots.mjs":"_astro/PostMessagePreviewSnapshots.r0-rPsyD.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/PostMessageSchema.mjs":"_astro/PostMessageSchema.t2PvD2bl.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/PostMessageTelemetry.mjs":"_astro/PostMessageTelemetry.B6vIrdbW.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.DmC28ogd.js","/Users/lo/Desktop/moodus-reservoir/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.CaigT70x.js","/Users/lo/Desktop/moodus-reservoir/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.BbMlwFw6.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/lo/Desktop/moodus-reservoir/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){new Swiper(\"#reservoirSwiper\",{direction:\"horizontal\",loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},effect:\"slide\",speed:600,pagination:{el:\".swiper-pagination\",clickable:!0},navigation:{nextEl:\".swiper-button-next\",prevEl:\".swiper-button-prev\"},breakpoints:{640:{slidesPerView:1},768:{slidesPerView:1},1024:{slidesPerView:1}}})});"]],"assets":["/_astro/mr-5.CtEawHD9.jpeg","/_astro/heron.6Q03tA7b.jpg","/_astro/ecoharvester.v4_KKh3C.jpg","/_astro/mr-4.RjQ2UvJ3.jpeg","/_astro/mr-2.D3q_BRDO.jpeg","/_astro/mr-6.BGdeXvuT.jpeg","/_astro/mr-1.AzrlOk7i.jpeg","/_astro/mrpg-logo.C-Zv0Vx3.jpeg","/_astro/_slug_.BZBpqOSY.css","/favicon.svg","/_astro/BroadcastDisplayedDocument.Xytgq5pK.js","/_astro/DisplayedDocumentBroadcaster.C4idqtz8.js","/_astro/LiveQueries.BQ394GQ9.js","/_astro/PostMessageDocuments.WiU-MnG-.js","/_astro/PostMessagePerspective.D6kIuhgo.js","/_astro/PostMessagePreviewSnapshots.r0-rPsyD.js","/_astro/PostMessageRefreshMutations.CAbIqVWG.js","/_astro/PostMessageSchema.t2PvD2bl.js","/_astro/PostMessageTelemetry.B6vIrdbW.js","/_astro/PresentationToolGrantsCheck.CaDlY4MS.js","/_astro/QRCodeSVG.BEKhi8LY.js","/_astro/SanityVision.BtcuZtQH.js","/_astro/ViteDevServerStopped.B2IRsbee.js","/_astro/browser.Bba8RV9V.js","/_astro/client.B436leHu.js","/_astro/client.Ib2F77LA.js","/_astro/index.DmC28ogd.js","/_astro/index2.CaigT70x.js","/_astro/index3.5P2YQ6Xw.js","/_astro/refractor.BR7Y1qyv.js","/_astro/resources.CQyO4pow.js","/_astro/resources.DBvmKBbr.js","/_astro/resources2.BPf4i7HJ.js","/_astro/resources3.DcYUO3OY.js","/_astro/resources4.Bamjrktd.js","/_astro/resources5.CceOD3Tu.js","/_astro/resources6.BmTsiFky.js","/_astro/stegaEncodeSourceMap.DfECwvZT.js","/_astro/studio-component.BbMlwFw6.js","/_astro/studio-component.ZrV6lQ6Y.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"3mSz3ZcijpMW5cXL4XFsxSfB9Mf2PsIcePSrNk8jiRY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
