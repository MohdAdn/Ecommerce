import { useEffect, useState } from "react";
import { useProduct } from "../Context/ProductContext";
import { NavLink } from "react-router-dom";

const Collection = () => {
  const { products } = useProduct();
  const [allProducts, setAllProducts] = useState([]);
  const [sortProduct, setSortProduct] = useState("1");
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  function toggleCategory(e) {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  }
  //
  function toggleSub(e) {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  }
  //

  function applyFilter() {
    let fiterProducts = products.slice();
    if (subCategory.length > 0) {
      fiterProducts = fiterProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    if (category.length > 0) {
      fiterProducts = fiterProducts.filter((item) =>
        category.includes(item.category)
      );
    }

    setAllProducts(fiterProducts);
  }

  function handleChange(e) {
    setSortProduct(e.target.value);
  }

  function sortingProduct() {
    const copyPr = allProducts.slice();
    switch (sortProduct) {
      case "2":
        setAllProducts(copyPr.sort((p1, p2) => p1.price - p2.price));
        break;
      case "3":
        setAllProducts(copyPr.sort((p1, p2) => p2.price - p1.price));
        break;
      default:
        applyFilter();
        break;
    }
  }
  useEffect(() => {
    sortingProduct();
  }, [sortProduct]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  return (
    <>
      <div className="collection-heading">
        <h2>ALL COLLECTION</h2>
        <select className="select" onChange={(e) => handleChange(e)}>
          <option value={1}>Sort By: Relevent</option>
          <option value={2}>Sort By: Price Low to High</option>
          <option value={3}>Sort By: Price High to Low</option>
        </select>
      </div>
      <div className="collection-page">
        <div className="category">
          <h3>Filters</h3>
          <div className="categories">
            <h5>CATEGORIES</h5>
            <p>
              <input
                type="checkbox"
                value="Men"
                onChange={(e) => toggleCategory(e)}
              />
              <label>Men </label>
            </p>

            <p>
              <input
                type="checkbox"
                value="Women"
                onChange={(e) => toggleCategory(e)}
              />
              <label>Women</label>
            </p>
            <p>
              <input
                type="checkbox"
                value="Kids"
                onChange={(e) => toggleCategory(e)}
              />
              <label>Kids</label>
            </p>
          </div>
          <div className="categories" onChange={(e) => toggleSub(e)}>
            <h5>TYPES</h5>
            <p>
              <input type="checkbox" value="Topwear" />
              <label>TopWear</label>
            </p>
            <p>
              <input type="checkbox" value="Bottomwear" />
              <label>Bottomwear</label>
            </p>
            <p>
              <input type="checkbox" value="Winterwear" />
              <label>Winterwear</label>
            </p>
          </div>
        </div>

        <div className="all-collection">
          {allProducts?.map((product) => (
            <NavLink
              key={product._id}
              className="card-nav"
              to={`/product/${product._id}`}
            >
              <div className="card">
                <img src={product.image} alt="" />
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
export default Collection;
