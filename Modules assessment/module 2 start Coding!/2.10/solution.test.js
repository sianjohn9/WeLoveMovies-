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

  it("should have the subtotal equal 220.49", async () => {
    const subtotal = await page.evaluate(async () => {
      return (window.subtotalToTest) 
              ? Math.round(window.subtotalToTest * 100) / 100 
              : ((window.subtotalToTest == 0) ? 0 : "subtotal is not defined")
    });
    expect(subtotal).toBe(220.49);
  });
  
  it("should have the total equal 233.48", async () => {
    const total = await page.evaluate(async () => {
      return (window.totalToTest) 
              ? Math.round(window.totalToTest * 100) / 100 
              : ((window.totalToTest == 0) ? 0 : "total is not defined")
    });
    expect(total).toBe(233.48);
  });
  
});
