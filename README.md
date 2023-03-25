## Open Graph 圖片產生器

<p align="center">
  <img src="https://socialify.git.ci/tszhong0411/og-image/image?forks=1&issues=1&logo=https://honghong.me/static/images/projects/og-image/logo.png&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark">
</p>

<p align="center">
    <a href="https://honghong.me" target="blank">線上查看</a>
    ·
    <a href="https://github.com/tszhong0411/honghong.me/issues/new/choose">回報錯誤</a>
    ·
    <a href="https://github.com/tszhong0411/honghong.me/issues/new/choose">要求新功能</a>
</p>

## 🌍 og-image.honghong.me

- 框架：[Next.js](https://nextjs.org/)
- 網站圖標：[realfavicongenerator](https://realfavicongenerator.net/)
- 分析：[Vercel](https://vercel.com/)
- 樣式：[Tailwindcss](https://tailwindcss.com)

本專案使用 `Next.js`，可根據給特定的參數產生 Open Graph 圖片。使用者可以瀏覽網站 [https://og-image.honghong.me/website](https://og-image.honghong.me/website) 來產生圖片，並使用以下參數：

- title（string）：顯示在圖片上的標題。預設值為 ''。
- url（string）：顯示在圖片上的網址。預設值為 'honghong.me'。
- image（string）：顯示在圖片上的圖片網址。預設值為 'https://honghong.me/static/images/avatar.png'。
- author（string）：顯示在圖片上的作者名稱。預設值為 '小康'。
- date（string）：顯示在圖片上的發布日期。格式為 'YYYY-MM-DD'。

使用這些參數，只需將它們附加到以下 URL 中:

```
https://og-image.honghong.me/website?title=<title>&url=<url>&image=<image>&author=<author>&date=<date>
```

產生的圖片將顯示在頁面上，但無法直接下載。使用者可以使用類似 Puppeteer 的工具來截取圖片，或者使用瀏覽器的截圖功能進行截圖。

## 開發

如果您想在本地運行此專案，可以按照以下步驟進行操作：

1. Clone 本專案。

```bash
git clone https://github.com/tszhong0411/og-image.git
```

1. 進入專案目錄，使用 yarn 安裝依賴項目。

```bash
cd og-image
yarn install
```

3. 啟動開發伺服器。

```bash
yarn dev
```

4. 在瀏覽器中打開 [http://localhost:3000/website](http://localhost:3000/website) 來測試。

## 貢獻

如果您發現了任何錯誤或者有任何改進意見，請提交 Issues 或者發起 Pull Request。感謝您的貢獻！

<hr>
<p align="center">
用 ❤️ 製作在 Hong Kong
</p>
