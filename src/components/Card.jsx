const Card = ({ title, image, price, description }) => {
  return (
    // <div>
    //   <h1 className="text-pink-500">{title}</h1>
    //   <img src={image} alt="car" className="h-[300px]" />
    //   <h6>price: {price}</h6>
    //   <div>{description}</div>

    // </div>
    <>
      <div className="bg-red-400 card-content block">
        <div
          id="card"
          className="card-wrapper flex flex-row flex-wrap w-[100%]"
        >
          <a className="card-container">
            <div className="img-container h-[189px] w-[100%] justify-center items-center ">
              <div className="picture-wrapper  inline-flex items-center h-[100%] justify-center overflow-hidden w-[100%]">
                <img
                  src={image}
                  alt="car"
                  className=" object-cover h-[100%] w-[100%]"
                />
              </div>
            </div>
            <div className="bg-[#ffffff] card-item-desc px-2 pt-1 pb-3 h-[100%] w-[100%]">
              <div className="card-title  ">{description}</div>
              <div className="price flex mt-1">
                <div className="price-first-line">
                  <span className="currency">Rs.</span>
                  <span className="">{price}</span>
                  <span className="mod-discount">-60%</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
