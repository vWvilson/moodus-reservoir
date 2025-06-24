import { e as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, f as createAstro, i as renderHead, j as renderComponent, k as renderSlot } from './astro/server_s9SbC5Nl.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { s as sanityClient } from './page-ssr_q4nglj8g.mjs';
/* empty css                          */

const visualEditingEnabled = true;
const token = "skSjp07wjqdFcLhFCR51SmOLZFLEQnnRukdFVpHaZkQKbBeJOXgPmB2pdLuuMk7XTJMj9tfq14scnIFJGfsfENUWXu5PrTzmXO9ul3EsHRD8WxtSNM2BAY1gCGMl1kpDWyCRzHKANEwtpjI1kh7MPpJa6336CqilriHT7mZQLOOlmFRytDNi";
async function loadQuery({ query, params = {} }) {
  const perspective = "previewDrafts" ;
  const { result, resultSourceMap } = await sanityClient.fetch(
    query,
    params,
    {
      filterResponse: false,
      perspective,
      resultSourceMap: "withKeyArraySelector" ,
      stega: visualEditingEnabled,
      ...{ token } ,
      useCdn: false
    }
  );
  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective
  };
}

const logo = new Proxy({"src":"/_astro/mrpg-logo.C-Zv0Vx3.jpeg","width":239,"height":134,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lo/Desktop/moodus-reservoir/src/assets/mrpg-logo.jpeg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const { data: navigation } = await loadQuery({
    query: `*[_type == "navigation"]{
      title,
      navId,
      items[]{
        label,
        url,
        internalLink->{
          slug
        },
        subItems[]{
          label,
          url,
          internalLink->{
            slug
          }
        }
      }
    }`
  });
  return renderTemplate(_a || (_a = __template(['<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script> ', `<nav x-data="{ isOpen: false, currentPath: '', scrolled: false }" x-init="
    currentPath = window.location.pathname;
    let lastScrollTop = 200;
    const nav = $el;
    window.addEventListener('scroll', () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      scrolled = st > 50;
      if (st > lastScrollTop && st > 200) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      lastScrollTop = st <= 0 ? 0 : st; 
    });
  " :class="{ 'scrolled': scrolled }" data-astro-cid-cs64bb5t> <div class="nav-container" data-astro-cid-cs64bb5t> <!-- Logo --> <div class="logo-wrapper" data-astro-cid-cs64bb5t> <a href="/" class="logo-link" data-astro-cid-cs64bb5t> <img`, ` loading="lazy" class="logo" alt="MRPG Logo" data-astro-cid-cs64bb5t> </a> </div> <!-- Hamburger Icon --> <button id="menu-toggle" aria-label="Toggle Menu" @click="isOpen = !isOpen" :class="{ 'active': isOpen }" data-astro-cid-cs64bb5t> <span class="menu-icon" :class="{ 'open': isOpen }" data-astro-cid-cs64bb5t></span> <span class="menu-icon" :class="{ 'open': isOpen }" data-astro-cid-cs64bb5t></span> <span class="menu-icon" :class="{ 'open': isOpen }" data-astro-cid-cs64bb5t></span> </button> <!-- Navigation Links --> <div class="main-menu-wrapper" data-astro-cid-cs64bb5t> <ul class="main-menu" :class="isOpen ? 'show' : 'hide'" data-astro-cid-cs64bb5t> `, ' <!-- Mobile Contact Button --> <li class="nav-item mobile-contact" data-astro-cid-cs64bb5t> <a href="/contact" class="nav-link contact-btn" data-astro-cid-cs64bb5t>\nContact Us\n</a> </li> </ul> </div> </div> </nav> '])), maybeRenderHead(), addAttribute(logo.src, "src"), navigation?.[0]?.items?.map((item) => {
    const itemUrl = item.internalLink?.slug?.current ? `/${item.internalLink.slug.current}` : item.url;
    return renderTemplate`<li class="nav-item" data-astro-cid-cs64bb5t> <a${addAttribute(itemUrl, "href")} class="nav-link"${addAttribute(`currentPath === '${itemUrl}' ? 'active' : ''`, ":class")} data-astro-cid-cs64bb5t> ${item.label} </a> ${item.subItems && item.subItems.length > 0 && renderTemplate`<ul class="sub-menu" data-astro-cid-cs64bb5t> ${item.subItems.map((subItem) => {
      const subItemUrl = subItem.internalLink?.slug?.current ? `/${subItem.internalLink.slug.current}` : subItem.url;
      return renderTemplate`<li class="sub-item" data-astro-cid-cs64bb5t> <a${addAttribute(subItemUrl, "href")} class="sub-link" data-astro-cid-cs64bb5t> ${subItem.label} </a> </li>`;
    })} </ul>`} </li>`;
  }));
}, "/Users/lo/Desktop/moodus-reservoir/src/components/menus/Main.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Get Involved Section -->${maybeRenderHead()}<section class="cta-section" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="cta-content" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Get Involved</h2> <p data-astro-cid-sz7xmlte>Join us in preserving this natural treasure for future generations. Every action counts in protecting our precious reservoir.</p> <div class="cta-buttons" data-astro-cid-sz7xmlte> <a href="/become-a-member" class="btn btn-primary" data-astro-cid-sz7xmlte>Memberships</a> <a href="/donate" class="btn btn-secondary" data-astro-cid-sz7xmlte>Donate</a> <a href="/contact" class="btn btn-outline" data-astro-cid-sz7xmlte>Volunteer</a> </div> </div> </div> </section>`;
}, "/Users/lo/Desktop/moodus-reservoir/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head> <body> <div class="layout-container"> ${renderComponent($$result, "Main", $$Main, {})} ${renderSlot($$result, $$slots["default"])} <!-- <VisualEditing enabled={visualEditingEnabled} zIndex={1000} /> --> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/Users/lo/Desktop/moodus-reservoir/src/layouts/Layout.astro", void 0);

export { $$Layout as $, loadQuery as l };
