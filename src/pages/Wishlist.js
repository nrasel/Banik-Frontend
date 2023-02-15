import React from "react";

const Wishlist = () => {
  return (
    <div className="container">
      <div style={{ width: "100%" }}>
        <div className="wishlist-main">
          <table className="wishlist-table">
            <tbody>
              <tr className="wishlist">
                <td className="wishlist-product">Product</td>
                <td>Color</td>
                <td>Size</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
              <tr className="">
                <td>Product</td>
                <td>Color</td>
                <td>Size</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
              <tr className="">
                <td>Product</td>
                <td>Color</td>
                <td>Size</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
              <tr className="">
                <td>Product</td>
                <td>Color</td>
                <td>Size</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
