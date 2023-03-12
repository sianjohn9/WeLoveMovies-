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

  it("The Web Preview should show the Troubled Waters album", async () => {
    await expect(page).toMatch("Troubled Waters");
  });

  it("should have the From Where I Stand album", async () => {
    await expect(page).toMatch("From Where I Stand");
  });

  it("should have the Lost at Sea album", async () => {
    await expect(page).toMatch("Lost at Sea");
  });
});
