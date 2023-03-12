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

  it("should show the Light the Way album", async () => {
    const albumOne = await page.evaluate(async () => {
      window.setup(window.albumOne, window.albumTwo, window.albumThree, window.albumFour);
      window.run();
      return document.getElementById('albumOne').innerHTML;
    });
    expect(albumOne).toBe("Light the Way");
  });
  
  it("should show the Troubled Waters album", async () => {
    const albumTwoTitle = await page.evaluate(async () => {
      window.setup(window.albumOne, window.albumTwo, window.albumThree, window.albumFour);
      window.run();
      return document.getElementById('albumTwoTitle').innerHTML;
    });
    expect(albumTwoTitle).toBe("Troubled Waters");
  });
  
  it("should show the From Where I Stand album", async () => {
    const albumThree = await page.evaluate(async () => {
      window.setup(window.albumOne, window.albumTwo, window.albumThree, window.albumFour);
      window.run();
      return document.getElementById('albumThreeTitle').innerHTML;
    });
    expect(albumThree).toBe("From Where I Stand");
  });
  
  it("should show the Lost at Sea album", async () => {
    const albumFourTitle = await page.evaluate(async () => {
      window.setup(window.albumOne, window.albumTwo, window.albumThree, window.albumFour);
      window.run();
      return document.getElementById('albumFourTitle').innerHTML;
    });
    expect(albumFourTitle).toBe("Lost at Sea");
  });
});
