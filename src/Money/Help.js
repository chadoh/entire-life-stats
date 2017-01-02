import React from 'react';
import Help from '../Help';

export default () => (
  <section>
    <Help links={[
      {
        className: "Help-buy",
        href: "https://entire.life/emporium",
        text: "Buy an add-on 💰",
      },
      {
        className: "Help-twitter",
        href: "https://twitter.com/intent/tweet?text=.@yourentirelife+shows+you (wait+for+it) your+entire+life. Your+whole+past+and+future. In+one+web+page. Get+it: https://entire.life",
        text: "Tweet about us 🐦",
      },
      {
        className: "Help-facebook",
        href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fentire.life",
        text: "Share us on Facebook 👍",
      }
    ]} />
  </section>
)
