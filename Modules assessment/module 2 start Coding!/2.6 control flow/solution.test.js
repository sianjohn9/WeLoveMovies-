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

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

describe("Index Page", () => {
  beforeEach(async () => {
    if (!page.listeners("console").includes(onPageConsole)) {
      page.on("console", onPageConsole);
    }
    await page.goto(baseURL, { waitUntil: "load" });
  });

  it("shows the morning images in the morning", async () => {
    const [image1Src, image2Src] = await page.evaluate(async () => {
      window.getHours = () => 1;
      window.setup();
      window.init();
      window.run();
      return [
        document.querySelector("#picture-one").src,
        document.querySelector("#picture-two").src,
      ];
    });

    expect(image1Src).toContain("morning1");
    expect(image2Src).toContain("morning2");
  });

  it("shows the day images at 1pm", async () => {
    const [image1Src, image2Src] = await page.evaluate(async () => {
      window.getHours = () => 13;
      window.setup();
      window.init();
      window.run();
      return [
        document.querySelector("#picture-one").src,
        document.querySelector("#picture-two").src,
      ];
    });

    expect(image1Src).toContain("day1");
    expect(image2Src).toContain("day2");
  });

  it("shows the day images at 5pm", async () => {
    const [image1Src, image2Src] = await page.evaluate(async () => {
      window.getHours = () => 17;
      window.setup();
      window.init();
      window.run();
      return [
        document.querySelector("#picture-one").src,
        document.querySelector("#picture-two").src,
      ];
    });

    expect(image1Src).toContain("day1");
    expect(image2Src).toContain("day2");
  });

  it("shows the night images after 6pm", async () => {
    const [image1Src, image2Src] = await page.evaluate(async () => {
      window.getHours = () => 19;
      window.setup();
      window.init();
      window.run();
      return [
        document.querySelector("#picture-one").src,
        document.querySelector("#picture-two").src,
      ];
    });

    expect(image1Src).toContain("night1");
    expect(image2Src).toContain("night2");
  });
});
