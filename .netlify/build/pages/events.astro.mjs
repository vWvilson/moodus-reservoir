import '../chunks/page-ssr_q4nglj8g.mjs';
import { e as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_s9SbC5Nl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { l as loadQuery, $ as $$Layout } from '../chunks/Layout_CLmTcxMS.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const query = `*[_type == "event"] {
  title,
  slug,
  date,
  location,
}`;
  const { data: events } = await loadQuery({ query });
  const eventsByDate = {};
  for (const event of events) {
    const date = new Date(event.date).toISOString().split("T")[0];
    if (!eventsByDate[date]) eventsByDate[date] = [];
    eventsByDate[date].push(event);
  }
  const now = /* @__PURE__ */ new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ro7pgs3h": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-content" data-astro-cid-ro7pgs3h> <h1 data-astro-cid-ro7pgs3h>
Events Calendar — ${now.toLocaleString("default", { month: "long" })} ${year} </h1> <!-- Day names --> <div class="calendar" data-astro-cid-ro7pgs3h> <div class="day-name" data-astro-cid-ro7pgs3h>Sun</div> <div class="day-name" data-astro-cid-ro7pgs3h>Mon</div> <div class="day-name" data-astro-cid-ro7pgs3h>Tue</div> <div class="day-name" data-astro-cid-ro7pgs3h>Wed</div> <div class="day-name" data-astro-cid-ro7pgs3h>Thu</div> <div class="day-name" data-astro-cid-ro7pgs3h>Fri</div> <div class="day-name" data-astro-cid-ro7pgs3h>Sat</div> <!-- Empty cells before 1st of month --> ${Array.from({ length: firstDay }).map(() => renderTemplate`<div class="day" data-astro-cid-ro7pgs3h></div>`)} <!-- Days of the month --> ${Array.from({ length: daysInMonth }).map((_, i) => {
    const day = i + 1;
    const dateStr = `${year}-${(month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    const dayEvents = eventsByDate[dateStr] || [];
    return renderTemplate`<div class="day" data-astro-cid-ro7pgs3h> <strong data-astro-cid-ro7pgs3h>${day}</strong> ${dayEvents.map((e) => renderTemplate`<div class="event" data-astro-cid-ro7pgs3h> <a${addAttribute(`/events/${e.slug.current}`, "href")} data-astro-cid-ro7pgs3h> ${e.title} </a> </div>`)} </div>`;
  })} </div> </main>  ` })}`;
}, "/Users/lo/Desktop/moodus-reservoir/src/pages/events.astro", void 0);

const $$file = "/Users/lo/Desktop/moodus-reservoir/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
