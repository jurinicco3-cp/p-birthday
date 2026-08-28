const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {

  // 8個ごとに広告を入れる
  if ((index + 1) % 8 === 0) {

    const ad = document.createElement('aside');

    ad.className = 'ad-area';

    ad.innerHTML = `
      <!-- PetitBirthday -->
      <ins class="adsbygoogle"
        style="display: block; margin: 0 auto;"
        data-ad-client="ca-pub-3361787752294585"
        data-ad-slot="6111761406"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    `;

    // sectionの後に広告を追加
    section.insertAdjacentElement(
      'afterend',
      ad
    );

    // AdSenseを読み込む
    try {

      (window.adsbygoogle = window.adsbygoogle || []).push({});

    } catch (e) {

      console.error(
        'AdSense error:',
        e
      );

    }

  }

});