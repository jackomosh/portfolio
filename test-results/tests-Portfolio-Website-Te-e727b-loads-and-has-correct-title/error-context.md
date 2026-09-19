# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests.spec.js >> Portfolio Website Tests >> index.html loads and has correct title
- Location: tests.spec.js:11:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "file:///C:/Users/USER/Desktop/jack%20files/portfolio/index.html", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "Jack" [ref=e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=e5]:
        - listitem [ref=e6]:
          - link "Home" [ref=e7] [cursor=pointer]:
            - /url: "#home"
        - listitem [ref=e8]:
          - link "About" [ref=e9] [cursor=pointer]:
            - /url: "#about"
        - listitem [ref=e10]:
          - link "Portfolio" [ref=e11] [cursor=pointer]:
            - /url: "#portfolio"
        - listitem [ref=e12]:
          - link "Testimonial" [ref=e13] [cursor=pointer]:
            - /url: "#testmonial"
        - listitem [ref=e14]:
          - link "Blog" [ref=e15] [cursor=pointer]:
            - /url: "#blog"
        - listitem [ref=e16]:
          - link "Contact" [ref=e17] [cursor=pointer]:
            - /url: "#contact"
        - listitem [ref=e18]:
          - link "RESUME" [ref=e19] [cursor=pointer]:
            - /url: assets/cv.pdf
      - link:
        - /url: javascript:void(0)
  - banner [ref=e20]:
    - generic [ref=e21]:
      - heading [level=1] [ref=e22]:
        - text: I'm Jack, 👋🏽
        - generic [ref=e23]: "|"
      - paragraph [ref=e24]: IT Specialist, Digital Transformation and Inclusion Champion, Systems Creator and CyberSecurity Enthusiast. Using technology to solve Real-World challenges. Empowered over 500+ on Digital Skills
      - button [ref=e25]:
        - link "My Work" [ref=e26] [cursor=pointer]:
          - /url: "#service"
  - generic [ref=e29]:
    - img "myImage" [ref=e31]
    - generic [ref=e32]:
      - paragraph [ref=e33]: Who Am I
      - heading "Tech Specialist" [level=2] [ref=e34]
      - paragraph [ref=e35]: I am a Highly proactive and results-driven Software Developer and Technical Specialist with extensive experience in Website Design, Front/Back-end Development, RESTful APIs, JSON, PWA, Technical Support, Cybersecurity, Database Management, Hosting and Server Management, Digital Transformation and skilled in Designing, Building, Optimizing, and Maintaining Responsive, Secure, and SEO-ready Systems.
      - paragraph [ref=e36]: I come with a strong background in technical troubleshooting, cPanel hosting, DNS management, plugin/theme customization, and system performance optimization. Adept at managing full website lifecycles, improving site health, training users, and delivering efficient technical solutions.
      - paragraph [ref=e37]:
        - strong [ref=e38]: Innovator | Solution Creator | Business And Tech Strategist
      - button "Resume" [ref=e39]
  - generic [ref=e41]:
    - paragraph [ref=e42]: What I Do
    - heading "Service" [level=6] [ref=e43]
    - generic [ref=e44]:
      - generic [ref=e47]:
        - heading "UI / UX Design" [level=6] [ref=e48]
        - paragraph [ref=e49]: My main focus is the visual components and interactive elements that contribute to a strong user experience.
      - generic [ref=e52]:
        - heading "Web Design" [level=6] [ref=e53]
        - paragraph [ref=e54]: I ensure web applications are visually appealing, easy to navigate, fast, & high-performance.
      - generic [ref=e57]:
        - heading "Software / App Dev" [level=6] [ref=e58]
        - paragraph [ref=e59]: I design, build, test, maintain applications, ensuring functionality, performance & interactivity.
      - generic [ref=e62]:
        - heading "Logo / Graphic Design" [level=6] [ref=e63]
        - paragraph [ref=e64]: I create visual content, combining art and technology to communicate ideas. Cool Logos, marketing materials & posters.
  - generic [ref=e67]:
    - generic [ref=e70]:
      - img / [ref=e71]
      - heading "Customer Support" [level=6] [ref=e72]
      - paragraph [ref=e73]: Assist customers by addressing their inquiries, troubleshooting issues, and providing solutions to ensure a positive experience.
    - generic [ref=e76]:
      - img / [ref=e77]
      - heading "Sales Executive" [level=6] [ref=e78]
      - paragraph [ref=e79]: Identify and engage potential clients, promote products or services, and close sales to meet company revenue targets.
    - generic [ref=e82]:
      - heading "Strategic Thinker" [level=6] [ref=e83]
      - paragraph [ref=e84]: Analyzing complex situations, consider long-term goals, and develop effective plans to achieve success.
    - generic [ref=e87]:
      - img / [ref=e88]
      - heading "Team Leadership" [level=6] [ref=e89]
      - paragraph [ref=e90]: Motivate teams, ensuring effective collaboration, setting clear goals, and supporting team members to success.
  - generic [ref=e92]:
    - paragraph [ref=e93]: What I have done
    - heading "Portfolio" [level=6] [ref=e94]
    - generic [ref=e95]:
      - link [ref=e97] [cursor=pointer]:
        - /url: https://esafesystems.co.ke
        - img "Esafe Systems Website" [ref=e98]
        - generic [ref=e100]:
          - heading "Web Designing" [level=4] [ref=e101]
          - paragraph [ref=e102]: "Category: Website Development"
      - link [ref=e104] [cursor=pointer]:
        - /url: https://skillful-ivory-boar.esafesystems.co.ke/
        - generic [ref=e106]:
          - heading "Ecommerce App" [level=4] [ref=e107]
          - paragraph [ref=e108]: "Category: Ecommerce Applications"
      - link [ref=e110] [cursor=pointer]:
        - /url: https://beachkitchenfoods.com/
        - generic [ref=e112]:
          - heading "Web Designing" [level=4] [ref=e113]
          - paragraph [ref=e114]: "Category: Website Development"
      - link [ref=e116] [cursor=pointer]:
        - /url: javascript:void(0)
        - generic [ref=e118]:
          - heading "Web Designing" [level=4] [ref=e119]
          - paragraph [ref=e120]: "Category: Website Development"
  - generic [ref=e122]:
    - paragraph [ref=e123]: How Much I Charge
    - heading "My Pricing" [level=6] [ref=e124]
    - generic [ref=e125]:
      - generic [ref=e126]:
        - img "Pricing tier icon scooter" [ref=e128]
        - generic [ref=e129]:
          - heading "Basic" [level=6] [ref=e130]
          - generic [ref=e131]:
            - paragraph [ref=e132]: Website Landing Pages
            - paragraph [ref=e133]: Poster Designs
            - paragraph [ref=e134]: Logo Designs
            - paragraph [ref=e135]: Business Profiles
            - paragraph [ref=e136]:
              - generic [ref=e137]: 
            - paragraph [ref=e138]:
              - generic [ref=e139]: 
        - generic [ref=e140]: Ksh 15,000
        - link "Reach Out" [ref=e141] [cursor=pointer]:
          - /url: "#contact"
      - generic [ref=e142]:
        - img "Pricing tier icon shipping" [ref=e144]
        - generic [ref=e145]:
          - heading "Standard" [level=6] [ref=e146]
          - generic [ref=e147]:
            - paragraph [ref=e148]: Web Applications
            - paragraph [ref=e149]: Graphic Designs
            - paragraph [ref=e150]: Logo Designs
            - paragraph [ref=e151]: SEO Optimization
            - paragraph [ref=e152]: Web Hosting
            - paragraph [ref=e153]:
              - generic [ref=e154]: 
        - generic [ref=e155]: Ksh 35, 000
        - link "Reach Out" [ref=e156] [cursor=pointer]:
          - /url: "#contact"
      - generic [ref=e157]:
        - img "Pricing tier icon rocket startup" [ref=e159]
        - generic [ref=e160]:
          - heading "Premium" [level=6] [ref=e161]
          - generic [ref=e162]:
            - paragraph [ref=e163]: APP / Systems Designs
            - paragraph [ref=e164]: Mobile Applications
            - paragraph [ref=e165]: IOS / Android Apps
            - paragraph [ref=e166]: APP Deployment
            - paragraph [ref=e167]: SEO Optimization
            - paragraph [ref=e168]: Content Management
            - paragraph [ref=e169]: Logo Designs
            - paragraph [ref=e170]: Graphic Designs
        - generic [ref=e171]: Ksh 100, 000
        - link "Reach Out" [ref=e172] [cursor=pointer]:
          - /url: "#contact"
  - generic [ref=e175]:
    - generic [ref=e176]:
      - heading "Want to work with me" [level=6] [ref=e177]
      - paragraph [ref=e178]: Always feel Free to Contact & Hire me
    - button [ref=e180]:
      - link "Hire Me" [ref=e181] [cursor=pointer]:
        - /url: "#contact"
  - generic [ref=e183]:
    - paragraph [ref=e184]: What Clients think About Me
    - heading "Testmonial" [level=6] [ref=e185]
    - generic [ref=e186]:
      - generic [ref=e188]:
        - img "img" [ref=e190]
        - generic [ref=e191]:
          - paragraph [ref=e192]: I was looking for an experienced web developer who will design an outsanding website for my start-up and I can say that Jack met my expectations. Kudos!!
          - heading "James" [level=6] [ref=e193]
      - generic [ref=e195]:
        - img "img" [ref=e197]
        - generic [ref=e198]:
          - paragraph [ref=e199]: Really appreciated all the components & keywords that you used. We did not know how much SEO really affected our performance online. Thank you for the insights.
          - heading "Emily" [level=6] [ref=e200]
  - generic [ref=e202]:
    - paragraph [ref=e203]: Recent Posts
    - heading "Blog" [level=6] [ref=e204]
    - generic [ref=e205]:
      - img "Office-Image" [ref=e207]
      - generic [ref=e208]:
        - heading "Jack" [level=5] [ref=e209]
        - paragraph [ref=e210]:
          - 'link "By: Admin" [ref=e211] [cursor=pointer]':
            - /url: "#"
          - link " 234" [ref=e212] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e213]: 
            - text: "234"
          - link " 123" [ref=e214] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e215]: 
            - text: "123"
        - paragraph [ref=e216]: I can look after your website for you, including improvements, updates, SEO, and day-to-day help. I do it all in-house. All this is done when you give me a project.
        - link "Read more " [ref=e217] [cursor=pointer]:
          - /url: "#"
          - text: Read more
          - generic [ref=e218]: 
    - generic [ref=e219]:
      - img "Office-Image" [ref=e221]
      - generic [ref=e222]:
        - heading "Jack" [level=5] [ref=e223]
        - paragraph [ref=e224]:
          - 'link "By: Admin" [ref=e225] [cursor=pointer]':
            - /url: "#"
          - link " 456" [ref=e226] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e227]: 
            - text: "456"
          - link " 264" [ref=e228] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e229]: 
            - text: "264"
        - paragraph [ref=e230]: Your website needs to harmonize functionality with beauty, enticing visitors to explore pages while supporting your commercial and marketing efforts.
        - link "Read more " [ref=e231] [cursor=pointer]:
          - /url: "#"
          - text: Read more
          - generic [ref=e232]: 
  - generic [ref=e234]:
    - paragraph [ref=e235]: How to reach me
    - heading "Contact Me" [level=6] [ref=e236]
    - generic [ref=e238]:
      - textbox "Your Name" [ref=e240]
      - textbox "Enter Email" [ref=e242]
      - textbox "Write Something" [ref=e244]
      - button "Send Message" [ref=e246]
  - contentinfo [ref=e248]:
    - paragraph [ref=e249]: Copyright
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const path = require('path');
  3  | 
  4  | // test.use({ channel: 'chrome' });
  5  | 
  6  | const INDEX_PATH = `file://${path.resolve('index.html')}`;
  7  | const NOT_FOUND_PATH = `file://${path.resolve('404.html')}`;
  8  | 
  9  | test.describe('Portfolio Website Tests', () => {
  10 | 
  11 |   test('index.html loads and has correct title', async ({ page }) => {
> 12 |     await page.goto(INDEX_PATH);
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  13 |     await expect(page).toHaveTitle(/Jack's Portfolio/);
  14 |   });
  15 | 
  16 |   test('Typed text animation element exists', async ({ page }) => {
  17 |     await page.goto(INDEX_PATH);
  18 |     const typedText = page.locator('#typed-text');
  19 |     await expect(typedText).toBeAttached();
  20 |   });
  21 | 
  22 |   test('404.html page loads correctly', async ({ page }) => {
  23 |     await page.goto(NOT_FOUND_PATH);
  24 |     const heading = page.locator('.error-heading');
  25 |     await expect(heading).toBeVisible();
  26 |   });
  27 | 
  28 |   test('Navigation menu links are functional', async ({ page }) => {
  29 |     await page.goto(INDEX_PATH);
  30 | 
  31 |     // Click the nav toggle button to open the menu
  32 |     await page.locator('#nav-toggle').click();
  33 | 
  34 |     // Assert that the about link is now visible
  35 |     const aboutLink = page.locator('a[href="#about"]');
  36 |     await expect(aboutLink).toBeVisible();
  37 |   });
  38 | 
  39 | });
```