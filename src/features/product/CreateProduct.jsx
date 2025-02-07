import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories, createProduct } from "../../services/apiProducts";
import Button from "../../ui/Button";
import Message from "../../ui/Message";
import Loader from "../../ui/Loader";
import { useProductContext } from "./ProductContext";

const initialForm = {
  title: "",
  price: 0,
  category: "",
  image: "",
  description: "",
};
function CreateProduct() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formValues, setForm] = useState(initialForm);
  const [submit, setSubmit] = useState(false);
  const [loading, isLoading] = useState(false);
  const styleInp =
    "border-gray-400 border focus:outline-none rounded-md py-0 px-2 sm:py-1  sm:px-3";
  function handleChange(e) {
    // console.log(e.target);
    const { name, value } = e.target;
    if (name === "price" && +value < 0) return;
    setForm((data) => ({ ...data, [name]: value }));
    // console.log(formValues);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(!submit);
    console.log(formValues);
    const res = createProduct(formValues);
    setForm(initialForm);
    // console.log(e.target);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  useEffect(() => {
    async function fetchData() {
      isLoading(true);
      const data = await getCategories();
      console.log(data);
      setCategories(data);
      isLoading(false);
      setForm((prev) => ({ ...prev, category: data[0] }));
    }
    fetchData();
  }, []);

  return (
    <div className="relative">
      <h1 className="mb-8 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-center text-2xl font-bold sm:text-3xl lg:text-3xl">
        Create Product
      </h1>
      <Message
        text="success create product"
        style=" !bg-gray-300/30"
        appear={submit}
      />
      {loading ? (
        <Loader />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="m-auto w-[70%] grid-cols-2 items-center justify-center gap-5 space-y-2 rounded-sm px-4 py-5 shadow shadow-black sm:flex sm:flex-col sm:flex-wrap md:grid"
        >
          <div className="col-start-1 flex items-center gap-3">
            <label
              htmlFor="title"
              className="text-lg font-semibold capitalize sm:text-xl md:text-xl"
            >
              title
            </label>
            <input
              type="text"
              value={formValues.title}
              onChange={handleChange}
              name="title"
              className={styleInp + " !w-[80%]"}
              required
            />
          </div>
          <div className="col-start-2 flex items-center gap-3">
            <label
              htmlFor="price"
              className="text-lg font-semibold capitalize sm:text-xl md:text-xl"
            >
              price
            </label>
            <input
              type="number"
              className={styleInp + " !w-[80%]"}
              required
              value={formValues.price}
              onChange={handleChange}
              name="price"
              min={1}
            />
          </div>
          <div className="col-start-1 flex items-center gap-3">
            <label className="text-lg font-semibold capitalize sm:text-xl md:text-xl">
              category
            </label>
            <select
              className={styleInp + " !w-[80%]"}
              value={formValues.category}
              onChange={handleChange}
              name="category"
              required
            >
              {categories.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="col-start-2 flex items-center gap-3">
            <label
              htmlFor="image"
              className="text-lg font-semibold capitalize sm:text-xl md:text-xl"
            >
              image url
            </label>
            <input
              type="text"
              value={formValues.image}
              onChange={handleChange}
              name="image"
              className={styleInp + " !w-[71%]"}
              required
            />
          </div>
          <div className="col-span-2 row-end-4 flex flex-col gap-3">
            <label
              htmlFor="image"
              className="text-lg font-semibold capitalize sm:text-xl md:text-xl"
            >
              description
            </label>
            <textarea
              required
              value={formValues.description}
              onChange={handleChange}
              name="description"
              className="max-h-[120px] rounded-md border border-gray-300 p-2 focus:outline-none sm:max-h-[130px]"
            ></textarea>
            <Button
              disabled={submit}
              style=" !self-center !px-5 !active:bg-gray-100 !active:cursor-not-allwoed"
            >
              submit
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
export default CreateProduct;
