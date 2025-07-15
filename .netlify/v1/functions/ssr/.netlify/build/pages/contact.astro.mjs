import '../chunks/page-ssr_q4nglj8g.mjs';
import { e as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CEtRMNCd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DfGGMr9R.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contact-container" data-astro-cid-uw5kdbxl> <div class="contact-header" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Get in Touch</h1> <p data-astro-cid-uw5kdbxl>
We'd love to hear from you. Choose how you'd like to connect with us.
</p> </div> <form class="contact-form" id="contactForm" name="contact" method="POST" data-netlify="true" data-astro-cid-uw5kdbxl> <!-- Inquiry Type Selection --> <div class="form-section" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>I'm interested in:</h3> <div class="inquiry-types" data-astro-cid-uw5kdbxl> <label class="inquiry-option" data-astro-cid-uw5kdbxl> <input type="radio" name="inquiryType" value="volunteer" required data-astro-cid-uw5kdbxl> <div class="option-card" data-astro-cid-uw5kdbxl> <div class="option-icon volunteer-icon" data-astro-cid-uw5kdbxl> <i class="fa fa-handshake-o" data-astro-cid-uw5kdbxl></i> </div> <h4 data-astro-cid-uw5kdbxl>Volunteer</h4> <p data-astro-cid-uw5kdbxl>Join our conservation efforts</p> </div> </label> <label class="inquiry-option" data-astro-cid-uw5kdbxl> <input type="radio" name="inquiryType" value="merchandise" required data-astro-cid-uw5kdbxl> <div class="option-card" data-astro-cid-uw5kdbxl> <div class="option-icon merch-icon" data-astro-cid-uw5kdbxl> <i class="fa fa-shopping-cart" data-astro-cid-uw5kdbxl></i> </div> <h4 data-astro-cid-uw5kdbxl>Buy Merch</h4> <p data-astro-cid-uw5kdbxl>Support us with a purchase</p> </div> </label> <label class="inquiry-option" data-astro-cid-uw5kdbxl> <input type="radio" name="inquiryType" value="general" required data-astro-cid-uw5kdbxl> <div class="option-card" data-astro-cid-uw5kdbxl> <div class="option-icon general-icon" data-astro-cid-uw5kdbxl> <i class="fa fa-question-circle-o" data-astro-cid-uw5kdbxl></i> </div> <h4 data-astro-cid-uw5kdbxl>General Inquiry</h4> <p data-astro-cid-uw5kdbxl>Questions or information</p> </div> </label> </div> </div> <!-- Personal Information --> <div class="form-section" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>Your Information</h3> <div class="form-row" data-astro-cid-uw5kdbxl> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="firstName" data-astro-cid-uw5kdbxl>First Name *</label> <input type="text" id="firstName" name="firstName" required data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="lastName" data-astro-cid-uw5kdbxl>Last Name *</label> <input type="text" id="lastName" name="lastName" required data-astro-cid-uw5kdbxl> </div> </div> <div class="form-row" data-astro-cid-uw5kdbxl> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="email" data-astro-cid-uw5kdbxl>Email Address *</label> <input type="email" id="email" name="email" required data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="phone" data-astro-cid-uw5kdbxl>Phone Number</label> <input type="tel" id="phone" name="phone" data-astro-cid-uw5kdbxl> </div> </div> </div> <!-- Dynamic Content Based on Selection --> <div class="form-section dynamic-section" id="dynamicSection" data-astro-cid-uw5kdbxl> <!-- Volunteer specific fields --> <!-- <div class="volunteer-fields" style="display: none;">
          <h3>Volunteer Information</h3>
          <div class="form-group">
            <label for="volunteerAreas">Areas of Interest</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  name="volunteerAreas"
                  value="trail-maintenance"
                />
                <span>Trail Maintenance</span>
              </label>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  name="volunteerAreas"
                  value="water-quality"
                />
                <span>Water Quality Monitoring</span>
              </label>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  name="volunteerAreas"
                  value="education"
                />
                <span>Environmental Education</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="volunteerAreas" value="events" />
                <span>Event Organization</span>
              </label>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  name="volunteerAreas"
                  value="fundraising"
                />
                <span>Fundraising</span>
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="availability">Availability</label>
            <textarea
              id="availability"
              name="availability"
              rows="3"
              placeholder="When are you typically available? (days, times, frequency)"
            ></textarea>
          </div>
        </div> --> <!-- Merchandise specific fields --> <!-- <div class="merchandise-fields" style="display: none;">
          <h3>Merchandise Interest</h3>
          <div class="form-group">
            <label for="merchInterest">What are you interested in?</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="merchInterest" value="t-shirts" />
                <span>T-Shirts</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="merchInterest" value="hoodies" />
                <span>Hoodies/Sweatshirts</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="merchInterest" value="hats" />
                <span>Hats/Caps</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="merchInterest" value="stickers" />
                <span>Stickers/Decals</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="merchInterest" value="bags" />
                <span>Tote Bags</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="merchInterest" value="other" />
                <span>Other (specify in message)</span>
              </label>
            </div>
          </div>
        </div> --> <!-- General inquiry (no extra fields needed) --> <div class="general-fields" style="display: none;" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>Your Inquiry</h3> <p class="form-description" data-astro-cid-uw5kdbxl>
Please provide details about your question or how we can help you.
</p> </div> </div> <!-- Message --> <div class="form-section" data-astro-cid-uw5kdbxl> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="message" data-astro-cid-uw5kdbxl>Message *</label> <textarea id="message" name="message" rows="5" required placeholder="Tell us more about your inquiry..." data-astro-cid-uw5kdbxl></textarea> </div> </div> <!-- Newsletter Signup --> <div class="form-section" data-astro-cid-uw5kdbxl> <label class="checkbox-label newsletter-signup" data-astro-cid-uw5kdbxl> <input type="checkbox" name="newsletter" value="yes" data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl>Subscribe to our newsletter for updates on conservation efforts and
            events</span> </label> </div> <!-- Submit Button --> <div class="form-section" data-astro-cid-uw5kdbxl> <button type="submit" class="submit-btn" data-astro-cid-uw5kdbxl> <span class="btn-text" data-astro-cid-uw5kdbxl>Send Message</span> <div class="btn-loader" style="display: none;" data-astro-cid-uw5kdbxl> <div class="loader" data-astro-cid-uw5kdbxl></div> </div> </button> </div> <!-- Success Message --> <div class="success-message" id="successMessage" style="display: none;" data-astro-cid-uw5kdbxl> <div class="success-icon" data-astro-cid-uw5kdbxl> <svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-uw5kdbxl> <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-astro-cid-uw5kdbxl></path> </svg> </div> <h3 data-astro-cid-uw5kdbxl>Thank you!</h3> <p data-astro-cid-uw5kdbxl>
Your message has been sent successfully. We'll get back to you soon.
</p> </div> </form> </div>   ` })}`;
}, "/Users/lo/Desktop/moodus-reservoir/src/pages/contact.astro", void 0);

const $$file = "/Users/lo/Desktop/moodus-reservoir/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
