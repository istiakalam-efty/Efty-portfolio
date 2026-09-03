import { chromium } from "playwright";

async function verifyPortfolio() {
  console.log("Launching browser via msedge/chromium...");
  let browser;
  try {
    browser = await chromium.launch({ channel: "msedge", headless: true });
  } catch (e) {
    console.log("msedge channel failed, trying chrome channel...", e.message);
    try {
      browser = await chromium.launch({ channel: "chrome", headless: true });
    } catch (e2) {
      console.log("chrome channel failed, launching default chromium...", e2.message);
      browser = await chromium.launch({ headless: true });
    }
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const errors = [];
  page.on("pageerror", (err) => {
    console.error("PAGE ERROR:", err.message);
    errors.push(err.message);
  });
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      console.error("CONSOLE ERROR:", msg.text());
      errors.push(msg.text());
    }
  });

  console.log("Navigating to http://localhost:5173/ ...");
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });

  console.log("Waiting for loader sequence (3.5s)...");
  await page.waitForTimeout(3500);

  // Check key elements
  const heroText = await page.textContent("#hero");
  console.log("Hero contains CREATIVE / DEVELOPER:", heroText.includes("CREATIVE") && heroText.includes("DEVELOPER"));

  const aboutText = await page.textContent("#about");
  console.log("About contains statement:", aboutText.includes("CODE MEETS CREATIVITY"));

  const expertiseText = await page.textContent("#expertise");
  console.log("Expertise contains DEVELOPMENT & COMPILER:", expertiseText.includes("DEVELOPMENT") && expertiseText.includes("COMPILER"));

  const workText = await page.textContent("#work");
  console.log("Work contains WORK:", workText.includes("WORK"));

  // Check horizontal overflow
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log("Has horizontal overflow on desktop:", hasOverflow);

  // Scroll down smoothly through every section
  console.log("Simulating continuous scroll from top to bottom...");
  for (let i = 0; i < 18; i++) {
    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(250);
  }

  console.log("Checking contact and footer...");
  const contactText = await page.textContent("#contact");
  console.log("Contact contains LET'S CREATE SOMETHING MEANINGFUL:", contactText.includes("MEANINGFUL"));
  console.log("Footer contains EFTY:", contactText.includes("EFTY"));

  // Take screenshot of contact / final state
  await page.screenshot({
    path: "C:/Users/Admin/.gemini/antigravity/brain/a7d28d00-a2c6-4fd9-a875-0bd1a2037a03/portfolio_desktop.png"
  });
  console.log("Desktop screenshot saved.");

  // Test Mobile Viewport (375x812)
  console.log("Testing mobile viewport 375x812...");
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 812 });
  await mobilePage.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(3000);

  const mobileOverflow = await mobilePage.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log("Has horizontal overflow on mobile:", mobileOverflow);

  for (let i = 0; i < 12; i++) {
    await mobilePage.mouse.wheel(0, 600);
    await mobilePage.waitForTimeout(200);
  }

  await mobilePage.screenshot({
    path: "C:/Users/Admin/.gemini/antigravity/brain/a7d28d00-a2c6-4fd9-a875-0bd1a2037a03/portfolio_mobile.png"
  });
  console.log("Mobile screenshot saved.");

  await browser.close();

  if (errors.length > 0) {
    console.error("TOTAL ERRORS DETECTED:", errors.length);
    process.exit(1);
  } else {
    console.log("VERIFICATION SUCCESS: 0 errors detected!");
  }
}

verifyPortfolio().catch((err) => {
  console.error("Script failed:", err);
  process.exit(1);
});
