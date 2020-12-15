import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

//  Context #1
//  We are running this file in development isolation
//  We are using our local index.html file
//  Which DEFINITELY has an element with an id "dev-products"
//  We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-only-products");

  // Assuming our container app doesn't have this element
  // with the id "#dev-only-products" (this is a BIG assumption)
  if (el) {
    // we are probably running in isolation
    mount(el);
  }
}

//  Context #2
//  We are running this file in development or production
//  through the CONTAINER app
//  NO GUARANTEE that an element with an id "dev-products" exists
//  WE DO NOT WANT try immediately render the app

export { mount };
