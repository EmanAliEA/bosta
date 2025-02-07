export async function getApiProducts() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) throw new Error("failed fetch data");
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function createProduct(product) {
  console.log(product);
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: product.title,
        price: +product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      }),
    });
    if (!res.ok) throw new Error("faild create Product");
    const data = await res.json();
    console.log(data);
    return res.ok;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getCategories() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/categories`);
    if (!res.ok) throw new Error("failed get categories");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getItem(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("failed get item with this id");
    const item = await res.json();
    // console.log(item);
    return item;
  } catch (err) {
    throw new Error(err.message);
  }
}
