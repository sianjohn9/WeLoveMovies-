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
    if (!page.listeners('console').includes(onPageConsole)) {
      page.on('console', onPageConsole);
    }
    await page.goto(baseURL, { waitUntil: "load" });
  });
  
  it("should have an object 'mount' with a property 'itemName' with value 'The Walnut Guitar Mount title' ", async () => {
    const mountItemName = await page.evaluate(async () => {
      return (window.mountForTest) 
              ? ((window.mountForTest.itemName) ? window.mountForTest.itemName : "object 'mount' does not have property 'itemName'")
              : "mount object has not been defined"
    });
    expect(mountItemName).toBe('Walnut Guitar Mount');
  });
  
  it("should have an object 'mount' with a property 'price' with value 62", async () => {
    const mountItemPrice = await page.evaluate(async () => {
      return (window.mountForTest) 
              ? ((window.mountForTest.price) ? window.mountForTest.price : "object 'mount' does not have property 'price'")
              : "mount object has not been defined"
    });
    expect(mountItemPrice).toBe(62);
  });
  
  it("should have an object 'pick' with a property 'itemName' with value 'Wooden Guitar Pick Box'", async () => {
    const pickName = await page.evaluate(async () => {
      return (window.pickForTest) 
              ? ((window.pickForTest.itemName) ? window.pickForTest.itemName : "object 'pick' does not have property 'itemName'")
              : "pick object has not been defined"
    });
    expect(pickName).toBe('Wooden Guitar Pick Box');
  });
  
  it("should have an object 'pick' with a property 'price' with value 8.5", async () => {
    const pickPrice = await page.evaluate(async () => {
      return (window.pickForTest) 
              ? ((window.pickForTest.price) ? window.pickForTest.price : "object 'pick' does not have property 'price'")
              : "pick object has not been defined"
    });
    expect(pickPrice).toBe(8.5);
  });
  
  it("should have an object 'stand' with a property 'itemName' with value 'Mahogany Guitar Stand'", async () => {
    const standName = await page.evaluate(async () => {
      return (window.standForTest) 
              ? ((window.standForTest.itemName) ? window.standForTest.itemName : "object 'stand' does not have property 'itemName'")
              : "stand object has not been defined"
    });
    expect(standName).toBe('Mahogany Guitar Stand');
  });
  
  it("should have an object 'stand' with a property 'price' with value 149.99", async () => {
    const standPrice = await page.evaluate(async () => {
      return (window.standForTest) 
              ? ((window.standForTest.price) ? window.standForTest.price : "object 'stand' does not have property 'price'")
              : "stand object has not been defined"
    });
    expect(standPrice).toBe(149.99);
  });

});