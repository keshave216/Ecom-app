const Navbar = () => {
  return (
    // Navbar
    <nav className="bg-[#f85606]  pb-3 mx-0 flex-col items-center">
      <div className="lzd-links-bar">
        <div className="header-content">
          <div className="top-links-item">
            <span>Save More on App</span>
          </div>
          <div className="top-links-item">
            <span>Become a Seller</span>
          </div>
          <div className="top-links-item">
            <span>Help & Support</span>
          </div>
          <div className="top-links-item">
            <span>Login</span>
          </div>
          <div className="top-links-item">
            <span>SignUp</span>
          </div>
          <div className="top-links-item">
            <span>भाषा परिवर्तन</span>
          </div>
        </div>
      </div>
      <div className="lzd-logo-bar mx-[100px]">
        <div className="logo-bar-content header-content"></div>
        <div className="lzd-logo-content">
          <a href="#" id="brand" className="flex items-center gap-2">
            <img
              className="object-cover h-[40px] w-[127px]"
              src="brandLogo.png"
              alt="logo"
            ></img>
          </a>
        </div>
        <div className="lzd-nav-search">
          <div className="layout-search-box--qK-K">
            <form>
              <div className="search-box--2I2a">
                <div className="search-box__bar--29h6">
                  <input
                    type="search"
                    placeholder="Search in Daraz"
                    className="search-box__input--O34g"
                  />
                </div>
                <div className="search-box__search--2fC5">
                  <a href="#" className="search-box__button--1oH7">
                    SEARCH
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="lzd-nav-cart">
          <a href="#">
            <span className="cart-icon-darazs">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-spm-anchor-id="a2a0e.tm80335409.dcart.i0.28a379e0SDZ1T8"
              >
                <path
                  d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
                  fill="white"
                ></path>
                <path
                  d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
                  fill="white"
                ></path>
                <path
                  d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
