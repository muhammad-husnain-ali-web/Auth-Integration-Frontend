import React from "react";

const ProductDetail = () => {

  return (
    <div className="overflow-y-auto">
      <div className="mx-2 my-2 lg:mx-20 lg:my-8 flex gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#c4c4c4]">Home</span>
          <span><img src="/icons/arrowLessThen.svg" alt="" /></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#c4c4c4]">Shop</span>
          <span><img src="/icons/arrowLessThen.svg" alt="" /></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#c4c4c4]">Men</span>
          <span><img src="/icons/arrowLessThen.svg" alt="" /></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="">T-Shirts</span>
        </div>
      </div>
        <div className=" w-[98%] lg:w-[90vw] mx-auto grid grid-cols-1 gap-1 md:grid-cols-2 min-h-[70vh]">
            <div className="w-full h-[50vh] lg:h-[70vh] flex flex-col-reverse lg:flex-row gap-2">
              <div className="3 image grid grid-cols-3 lg:grid-cols-1 gap-2 w-full lg:w-[26%] h-[26%] lg:h-full">
                    <div
                      className="w-full h-full overflow-hidden border border-black rounded-md"
                    >
                      <img
                        loading="lazy"
                        className="w-full h-full object-cover rounded-md cursor-pointer"
                        src='/products/shit01.png'
                        alt=""
                      />
                    </div>
                    <div
                      className="w-full h-full overflow-hidden rounded-md"
                    >
                      <img
                        loading="lazy"
                        className="w-full h-full object-cover rounded-md cursor-pointer"
                        src='/products/shirt02.png'
                        alt=""
                      />
                    </div>
                    <div
                      className="w-full h-full overflow-hidden rounded-md"
                    >
                      <img
                        loading="lazy"
                        className="w-full h-full object-cover rounded-md cursor-pointer"
                        src='/products/shirt03.png'
                        alt=""
                      />
                    </div>
              </div>

              <div className="img w-full lg:w-[70%] h-[70%] lg:h-full overflow-hidden rounded-md">
                <img
                  loading="lazy"
                  className="w-full h-full object-cover rounded-md"
                  src='/products/shit01.png'
                  alt="img"
                />
              </div>

            </div>

          <div className="w-full px-2">
            <h2 className="text-4xl font-black py-2">One Life Graphic T-shirt</h2>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">4.5</span>
              <span>/5</span>
            </div>
          </div>

            <div className="flex gap-2 my-2 items-center">
              <span className="text-xl py-1 font-semibold">$260</span>
              <span className="text-[#c4c4c4] line-through">$300</span>
              <span className="w-fit px-5 py-0.5 rounded-full bg-red-100 text-red-500">
                -40
              </span>
            </div>

            <p className="text-[#c4c4c4] w-full h-[10%] overflow-auto">
              This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
              </p>

            <div className="w-full h-0.5 my-5 bg-[#f0f0f0] rounded-md"></div>

            <h5 className="text-[#c4c4c4] ">Select Colors</h5>

            <div className="flex gap-3 my-3">
                <div className="w-9 h-9 flex justify-center items-center rounded-full bg-[#4F4631]">
                    <img src="/icons/tick.svg" alt="" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#314F4A]"></div>
                <div className="w-9 h-9 rounded-full bg-[#31344F]"></div>
            </div>

            <div className="w-full h-0.5 my-5 bg-[#f0f0f0] rounded-md"></div>

            <h5 className="text-[#c4c4c4] ">Choose Size</h5>

            <div className="flex gap-3 my-4">
                <button className="px-2 py-1 lg:px-5 lg:py-2 text-[#c4c4c4] bg-[#f0f0f0] rounded-full">Small</button>
                <button className="px-2 py-1 lg:px-5 lg:py-2 text-[#c4c4c4] bg-[#f0f0f0] rounded-full">Medium</button>
                <button className="px-2 py-1 lg:px-5 lg:py-2 text-white bg-black rounded-full">Large</button>
                <button className="px-2 py-1 lg:px-5 lg:py-2 text-[#c4c4c4] bg-[#f0f0f0] rounded-full">X-Large</button>
            </div>

            <div className="w-full h-0.5 my-5 bg-[#f0f0f0] rounded-md"></div>

            <div className="flex gap-3 justify-around items-center ">
              <div className="bg-[#F0F0F0] rounded-full py-2 w-[26%] flex justify-around items-center">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <button className=" w-[70%] py-2 rounded-full bg-black text-white text-center cursor-pointer">
                Add to Cart
              </button>
            </div>

          </div>
        </div>

    <div className="mx-auto w-[90vw] flex gap-4 mt-7 justify-between items-center">
      <button className="text-[#c4c4c4] text-sm lg:text-xl">Product Details</button>
      <button className="text-black text-sm lg:text-xl">Rating & Reviews</button>
      <button className="text-[#c4c4c4] text-sm lg:text-xl">FAQs</button>
    </div>

    <div className="mx-auto w-[90vw] my-2 flex">
      <div className="w-1/3 h-0.5 bg-[#f0f0f0]"></div>
      <div className="w-1/3 h-0.5 bg-black"></div>
      <div className="w-1/3 h-0.5 bg-[#f0f0f0]"></div>
    </div>

    <div className="flex justify-between items-center my-5 mx-auto w-[90vw]">
        <div className="flex gap-2">
          <h3 className="lg:text-xl text-lg font-black">All Reviews</h3>
          <span className="text-[#c4c4c4]">(451)</span>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#f0f0f0] py-2 px-2 rounded-full"><img src="/icons/filter.svg" alt="" /></button>
          <button className="bg-[#f0f0f0] py-2 px-3 rounded-full hidden lg:flex justify-between gap-4 items-center">
            <span>Latest</span>
            <span><img src="/icons/arrow-down.svg" alt="" /></span>
          </button>
          <button className="bg-black text-white py-2 px-2 rounded-full">Write a Review</button>
        </div>
    </div>

    <div className="w-[98%] lg:w-[90vw] mx-auto my-5 grid grid-cols-1 gap-4 md:grid-cols-2">

      <div className="reviews w-full border px-7 py-8 border-[#f0f0f0] rounded-2xl">
        <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="hidden lg:inline"><img src="/icons/dots.svg" alt="" /></span>
            </div>
          </div>
        
        <div className="flex items-center gap-2 py-2">
              <h3 className="text-xl font-bold">Samantha D.</h3>
              <span><img className="h-[15px] w-[15px] lg:h-6 lg:w-6" src="/icons/blueTick.svg" alt="" /></span>
            </div>
        <p className="text-[#c4c4c4] text-sm overflow-y-auto">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
      
        <h4 className=" mt-8 text-[#c4c4c4] font-bold">Posted on August 14, 2023</h4>

      </div>

      <div className="reviews w-full border px-7 py-8 border-[#f0f0f0] rounded-2xl">
        <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="hidden lg:inline"><img src="/icons/dots.svg" alt="" /></span>
            </div>
          </div>
        
        <div className="flex items-center gap-2 py-2">
              <h3 className="text-xl font-bold">Alex M.</h3>
              <span><img className="h-[15px] w-[15px] lg:h-6 lg:w-6" src="/icons/blueTick.svg" alt="" /></span>
            </div>
        <p className="text-[#c4c4c4] text-sm overflow-y-auto">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
      
        <h4 className=" mt-8 text-[#c4c4c4] font-bold">Posted on August 15, 2023</h4>

      </div>

      <div className="reviews w-full border px-7 py-8 border-[#f0f0f0] rounded-2xl">
        <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="hidden lg:inline"><img src="/icons/dots.svg" alt="" /></span>
            </div>
          </div>
        
        <div className="flex items-center gap-2 py-2">
              <h3 className="text-xl font-bold">Ethan R.</h3>
              <span><img className="h-[15px] w-[15px] lg:h-6 lg:w-6" src="/icons/blueTick.svg" alt="" /></span>
            </div>
        <p className="text-[#c4c4c4] text-sm overflow-y-auto">"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
      
        <h4 className=" mt-8 text-[#c4c4c4] font-bold">Posted on August 16, 2023</h4>

      </div>

    <div className="reviews w-full border px-7 py-8 border-[#f0f0f0] rounded-2xl">
        <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="hidden lg:inline"><img src="/icons/dots.svg" alt="" /></span>
            </div>
          </div>
        
        <div className="flex items-center gap-2 py-2">
              <h3 className="text-xl font-bold">Olivia P.</h3>
              <span><img className="h-[15px] w-[15px] lg:h-6 lg:w-6" src="/icons/blueTick.svg" alt="" /></span>
            </div>
        <p className="text-[#c4c4c4] text-sm overflow-y-auto">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
      
        <h4 className=" mt-8 text-[#c4c4c4] font-bold">Posted on August 17, 2023</h4>

      </div>

      <div className="reviews w-full border px-7 py-8 border-[#f0f0f0] rounded-2xl">
        <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="hidden lg:inline"><img src="/icons/dots.svg" alt="" /></span>
            </div>
          </div>
        
        <div className="flex items-center gap-2 py-2">
              <h3 className="text-xl font-bold">Liam K.</h3>
              <span><img className="h-[15px] w-[15px] lg:h-6 lg:w-6" src="/icons/blueTick.svg" alt="" /></span>
            </div>
        <p className="text-[#c4c4c4] text-sm overflow-y-auto">"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
      
        <h4 className=" mt-8 text-[#c4c4c4] font-bold">Posted on August 18, 2023</h4>

      </div>

      <div className="reviews w-full border px-7 py-8 border-[#f0f0f0] rounded-2xl">
        <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="hidden lg:inline"><img src="/icons/dots.svg" alt="" /></span>
            </div>
          </div>
        
        <div className="flex items-center gap-2 py-2">
              <h3 className="text-xl font-bold">Ava H.</h3>
              <span><img className="h-[15px] w-[15px] lg:h-6 lg:w-6" src="/icons/blueTick.svg" alt="" /></span>
            </div>
        <p className="text-[#c4c4c4] text-sm overflow-y-auto">"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
      
        <h4 className=" mt-8 text-[#c4c4c4] font-bold">Posted on August 19, 2023</h4>

      </div>

    </div>

    <div className="w-[98%] lg:w-[90vw] mx-auto my-10 text-center">
      <button className=" px-8 py-2 border border-[#f0f0f0] rounded-full">Load More Reviews</button>
    </div>

    <div className="text-center text-6xl font-black">You might also like</div>

      <div className="cards w-full flex gap-4 p-4 lg:p-15 overflow-x-auto">
        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <div className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\tshirt001.png"
              alt="shirt"
            />
          </div>
          <div className="text-xs lg:text-lg py-1 font-semibold">
            Polo with Contrast Trims
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">4</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$212</span>
            <span className="text-[#c4c4c4] line-through">$242</span>
            <span className="w-fit px-2 py-1 rounded-full bg-red-100 text-red-500">-20%</span>
          </div>
        </div>

        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <div className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\tshirt002.png"
              alt="shirt"
            />
          </div>
          <div className="text-xs lg:text-lg py-1 font-semibold">
            Gradient Graphic T-shirt
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">3.5</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$145</span>
          </div>
        </div>

        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <div className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\tshirt003.png"
              alt="shirt"
            />
          </div>
          <div className="text-xs lg:text-lg py-1 font-semibold">
            Polo with Tipping Details
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">4.5</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$180</span>
          </div>
        </div>

        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <div className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\tshirt004.png"
              alt="shirt"
            />
          </div>
          <div className="text-xs lg:text-lg py-1 font-semibold">
            Black Striped T-shirt
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">5.0</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$120</span>
            <span className="text-[#c4c4c4] line-through">$150</span>
            <span className="w-fit px-2 py-1 rounded-full bg-red-100 text-red-500">
              -30%
            </span>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default ProductDetail;
