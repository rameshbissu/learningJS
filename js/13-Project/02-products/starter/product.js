const productsDOM = document.querySelector(".product");
const url = "https://course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
  try {
    productsDOM.innerHTML = '<h4 class="product-loading">Loading...</h4>';
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id);
    const resp = await fetch(`${url}?id=${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML =
      '<p class="error">There was a problem loading the product. Please try again later</p>';
  }
};

const displayProduct = (product) => {
//   console.log(product);
  // company,color,description,name:title,price,image(url:img)
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();

  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background:${color}"></span>`;
    })
    .join("");

  productsDOM.innerHTML = `<div class="product-wrapper">
            <img src="${img}" alt="${title}" class="img">
            <div class="product-info">
                <h3>${title}</h3>
                <h5>${company}</h5>
                <span>$${price / 100}/-</span>
                <div class="colors">
                    ${colorsList}
                </div>
                <p>${description}</p>
                <button class="btn">add to cart</button>
            </div>
        </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
