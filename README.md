<h1 align="center">
 Open Graph Image Generator
</h1>

<p align="center">
  <img src="https://socialify.git.ci/tszhong0411/og-image/image?forks=1&issues=1&logo=https://honghong.me/static/images/projects/og-image/logo.png&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark">
</p>

<p align="center">
    <a href="https://honghong.me" target="blank">View Online</a>
    ·
    <a href="https://github.com/tszhong0411/honghong.me/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/tszhong0411/honghong.me/issues/new/choose">Request New Feature</a>
</p>

## 🌍 og-image.honghong.me

- Framework: [Next.js](https://nextjs.org/)
- Favicon: [realfavicongenerator](https://realfavicongenerator.net/)
- Analytics: [Vercel](https://vercel.com/)
- Styling: [Tailwindcss](https://tailwindcss.com)

This project uses `Next.js` to generate Open Graph images based on specific parameters. Users can visit the website [https://og-image.honghong.me](https://og-image.honghong.me) to generate images, using the following parameters:

- title(string): The title displayed on the image. Default value is ''.
- url(string): The URL displayed on the image. Default value is 'honghong.me'.
- image(string): The image URL displayed on the image. Default value is `https://honghong.me/static/images/avatar.png`.
- author(string): The author name displayed on the image. Default value is '小康'.
- date(string): The release date displayed on the image. Format is 'YYYY-MM-DD'.

Using these parameters, simply append them to the following URL:

```
https://og-image.honghong.me/website?title=<title>&url=<url>&image=<image>&author=<author>&date=<date>
```

The generated image will be displayed on the page but cannot be directly downloaded. Users can use tools like Puppeteer to capture the image, or use the screenshot function of the browser to capture it.

## 👋 Running Locally

1. Clone the repository

```sh
git clone https://github.com/tszhong0411/og-image.git
```

2. Go to the project directory

```sh
cd og-image
```

3. Install dependencies

```sh
yarn
```

<hr>
<p align="center">
Made with ❤️ in Hong Kong
</p>
