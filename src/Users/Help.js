import React from 'react';
import Help from '../Help';

export default () => (
  <section>
    <Help links={[
      {
        className: "Help-producthunt",
        href: "https://www.producthunt.com/posts/entire-life",
        text: "❤️ on Product Hunt 😸",
      },
      {
        className: "Help-reddit",
        href: "https://www.reddit.com/",
        text: "Post to Reddit 🤖",
      },
      {
        className: "Help-twitter",
        href: "https://twitter.com/intent/tweet?text=.@yourentirelife+shows+you (wait+for+it) your+entire+life. Your+whole+past+and+future. In+one+web+page. Get+it: https://entire.life",
        text: "Tweet about us 🐦",
      },
      // {
      //   className: "Help-blog",
      //   href: "https://entire.life/press",
      //   text: "Write about us 📝",
      // }
    ]} />
  </section>
)
