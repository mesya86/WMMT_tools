document.addEventListener('DOMContentLoaded', () => {
  // --- メニューの中身を自動生成 ---
  const menuContainer = document.getElementById('menu');
  const overlay = document.getElementById('overlay'); // オーバーレイを取得

  if (menuContainer) {
    const menuItems = [
      { name: "ランク管理（5DX+以前）", url: "rankManage2.html" },
      { name: "ランク管理（6以降）", url: "rankManage.html" },
      { name: "段位計算", url: "rankClac.html" },
      { name: "段位一覧", url: "rankList.html" },
      { name: "戦績計算", url: "recordClac.html" },
      { name: "日付称号検索", url: "titleSearch.html" },
      { name: "日付称号一覧", url: "titles.html" },
    ];

    // letに変更（後で+=で追加するため）
    let listHtml = menuItems
      .map(item => `<li><a href="${item.url}">${item.name}</a></li>`)
      .join('');
    
    // 作成者情報を追加
    listHtml += `
      <li class="menu-info">
        <hr>
        <p>Created by: @mesya_86</p>
        <p>Version: 1.5.0</p>
      </li>
    `;
    
    menuContainer.innerHTML = listHtml;
  }

  // --- ハンバーガーメニューの開閉ロジック ---
  const menuToggle = document.getElementById('menu-toggle');

  if (menuToggle && menuContainer) {
    const toggleMenu = () => {
      menuContainer.classList.toggle('show');
      menuToggle.classList.toggle('active');
      if (overlay) overlay.classList.toggle('show');
    };

    // ボタンクリックで開閉
    menuToggle.addEventListener('click', toggleMenu);

    // オーバーレイ（背景）クリックで閉じる
    if (overlay) {
      overlay.addEventListener('click', toggleMenu);
    }
  }
});