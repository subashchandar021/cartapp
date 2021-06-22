import "./styles.css";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);
const PAGE_PRODUCT = "Image";
const PAGE_CART = "cart";
export default function Card() {
  const [Image] = useState([
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3NjGF9jQ7q30TYsdcUtyoFVk4WeZAFwKPg&usqp=CAU",
      name: "Anarkali",
      price: "Rs-1200/-"
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH73CGCpfsNtVk-nnzOcB0LuK0iFOW3Uw9Sg&usqp=CAU",
      name: "Pitty Coat",
      price: "Rs-250/-"
    },
    {
      img:
        "https://assets.ajio.com/medias/sys_master/root/20210403/FWRe/606864c4aeb269a9e33159e4/-1117Wx1400H-461074592-red-MODEL.jpg",
      name: "Kurthi",
      price: "Rs-1650/-"
    },
    {
      img:
        "https://static.hm.com.cn/media/catalog/product/cache/bef14cc7d4ee48fc0c01ab83c535ed11/2/a/2ab256f6bc1be8e0347c606bb6751ad0ab617a94.jpg",
      name: "FRIENDS Tshirt",
      price: "RS-1000/-"
    },
    {
      img:
        "https://frugal2fab.com/wp-content/uploads/2019/08/cropped-46624_20181129105406_0_500.jpg",
      name: "Kanchipuram silk",
      price: "Rs-2890/-"
    },
    {
      img:
        "https://www.shopaz.in/imageus/orignal/C882-Rich%20Pallu%20Patali%20Naylon%20Silk%20Saree%20Shop%20Sarees%20Catalogue%20Wholesale%20Silk%20Fabric%20Jacquard%20Work%20Full%200.jpeg",
      name: "Silk Cotton",
      price: "Rs-1655/-"
    },
    {
      img:
        "https://assets.ajio.com/medias/sys_master/root/20210403/JVYk/6068ecfff997dd7b64689539/saree_mall_teal_blue_silk_blend_saree_with_contrast_border.jpg",
      name: "Desiner Silk",
      price: "Rs-2632/-"
    }
  ]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("PAGE_PRODUCT");
  const addToCart = (ele) => {
    setCart([...cart, { ...ele }]);
  };
  const removeFromCart = (productToremove) => {
    setCart(cart.filter((ele) => ele != productToremove));
  };
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  const renderImage = () => (
    <>
      <div className="Items">
        <h1>PRODUCTS</h1>
      </div>
      <div className="Shop">
        {Image.map((ele, index) => (
          <div
            class="card"
            key={index}
            style={{ width: "18rem", display: "flex", flexWrap: "wrap" }}
          >
            <img
              style={{ height: "200px", width: "200px" }}
              src={ele.img}
              alt="Card image cap"
            />
            <div class="card-body">
              <h3 class="card-title">{ele.name}</h3>
              <p>{ele.price}</p>
              <Button onClick={() => addToCart(ele)} color="primary">
                ADD to cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
  const renderCart = () => (
    <>
      <div className="select">
        <h1>CART</h1>
      </div>
      <div className="Shop">
        {cart.map((ele, index) => (
          <div
            class="card"
            key={index}
            style={{ width: "18rem", display: "flex", flexWrap: "wrap" }}
          >
            <img
              style={{ height: "200px", width: "200px" }}
              src={ele.img}
              alt="Card image cap"
            />
            <div class="card-body">
              <h3 class="card-title">{ele.name}</h3>
              <p>{ele.price}</p>
              <Button onClick={() => removeFromCart(ele)} color="primary">
                remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
  return (
    <div>
      <header className="kart">
        <Button onClick={() => navigateTo("PAGE_PRODUCT")} color="primary">
          {" "}
          view product
        </Button>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon onClick={() => navigateTo("PAGE_CART")} />
          </StyledBadge>
        </IconButton>
      </header>
      {page === "PAGE_PRODUCT" && renderImage()}
      {page === "PAGE_CART" && renderCart()}
    </div>
  );
}
