const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
  // 4個目のsectionの後に広告を入れる例
  if (index === 3) {
    const ad = document.createElement('aside');
    ad.className = 'ad-area';
    ad.innerHTML = `
          <!-- PetitBirthday -->
          <ins class="adsbygoogle"
            style="display: block; width: 336px; min-height: 280px; margin: 0 auto;"
            data-ad-client="ca-pub-3361787752294585"
            data-ad-slot="6111761406"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
    `;

    section.insertAdjacentElement('afterend', ad);
  }
});