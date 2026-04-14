/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sankalpashreewealth.in',
  generateRobotsTxt: false,  // We maintain a custom robots.txt in public/
  sitemapSize: 7000,
  exclude: [
    '/asdfghjkl',
    '/asdfghjkl/*',
    '/api/*',
  ],
  changefreq: 'monthly',
  priority: 0.7,
}