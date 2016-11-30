import React from 'react';
import './Help.css';

export default () => (
  <section>
    <h2>Help us out:</h2>
    <div className="Help-buttonGroup">
      <a
        className="Help-button Help-buy"
        href="https://entire.life/emporium"
        target="_blank"
      >
        Buy an add-on 💰
      </a>
      <a
        className="Help-button Help-twitter"
        href="https://twitter.com/intent/tweet?text=.@yourentirelife+shows+you (wait+for+it) your+entire+life. Your+whole+past+and+future. In+one+web+page. Get+it: https://entire.life"
        target="_blank"
      >
        Tweet about us 🐦
      </a>
      <a
        className="Help-button Help-facebook"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fentire.life"
        target="_blank"
      >
        Share us on Facebook 👍
      </a>
    </div>
  </section>
)
