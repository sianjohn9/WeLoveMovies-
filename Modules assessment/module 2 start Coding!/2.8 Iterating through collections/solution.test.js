const baseURL = process.env.TEST_BASE_URL;

beforeEach(() => {
  // Reset mock function's states before each test.
  jest.clearAllMocks();
});

// Show logs from the page inside labeled container
const onPageConsole = (msg) => {
  if (msg.type() === "warning") return;
  console.log(
    `<LOG::page console.${msg.type()}>${msg.text().replace(/\n/g, "<:LF:>")}`
  );
};

describe("Index Page", () => {
  beforeEach(async () => {
    if (!page.listeners("console").includes(onPageConsole)) {
      page.on("console", onPageConsole);
    }
    await page.goto(baseURL, { waitUntil: "load" });
  });
  
  it(`"Sunshine Peak" should be formatted as "<p>Sunshine Peak</p>" in the trackTitles array`, async () => {
    const trackTitles = await page.evaluate(async () => {
      return window.trackTitles
    });
    expect(trackTitles[0]).toBe("<p>Sunshine Peak</p>");
  });

  it(`"We're All Light" should be formatted as "<p>We're All Light</p>" in the trackTitles array`, async () => {
    const trackTitles = await page.evaluate(async () => {
      return window.trackTitles
    });
    expect(trackTitles[1]).toBe("<p>We're All Light</p>");
  });

   it(`"Bring the Light" should be formatted as "<p>Bring the Light</p>" in the trackTitles array`, async () => {
    const trackTitles = await page.evaluate(async () => {
      return window.trackTitles
    });
    expect(trackTitles[2]).toBe("<p>Bring the Light</p>");
  });
  
   it(`"Dancing through the Light" should be formatted as "<p>Dancing through the Light</p>" in the trackTitles array`, async () => {
    const trackTitles = await page.evaluate(async () => {
      return window.trackTitles
    });
    expect(trackTitles[3]).toBe("<p>Dancing through the Light</p>");
  });
  
   it(`"Cold Light Generation" should be formatted as "<p>Cold Light Generation</p>" in the trackTitles array`, async () => {
    const trackTitles = await page.evaluate(async () => {
      return window.trackTitles
    });
    expect(trackTitles[4]).toBe("<p>Cold Light Generation</p>");
  });
  
  it(`"Ray of Light" should be formatted as "<p>Ray of Light</p>" in the trackTitles array`, async () => {
    const trackTitles = await page.evaluate(async () => {
      return window.trackTitles
    });
    expect(trackTitles[5]).toBe("<p>Ray of Light</p>");
  });
  
  it(`"The Inner Light" should be formatted as "<p>The Inner Light</p>" in the trackTitles array`, async () => {
    const trackTitles = await page.evaluate(async () => {
      return window.trackTitles
    });
    expect(trackTitles[6]).toBe("<p>The Inner Light</p>");
  });
  
});
