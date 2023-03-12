const baseURL = process.env.TEST_BASE_URL;

beforeEach(() => {
  // Reset mock function's states before each test
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
    if (!page.listeners('console').includes(onPageConsole)) {
      page.on('console', onPageConsole);
    }
    await page.goto(baseURL, { waitUntil: "load" });
  });

  it("should have the right total album runtime", async () => {
    const runtime = await page.evaluate(() => window.albumRuntime);
    await expect(runtime).toEqual(1407);
  });
});