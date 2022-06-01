import React, { state, useState, useEffect } from "react";
import formatThousands from "format-thousands";

import ArrNext from "../assets/next-arrow.png";
import Trolli from "../assets/trolli.png";

import parse from "html-react-parser";

import "flowbite";

export default function Content() {
  const [product, setProduct] = useState([]);

  const [images, setImages] = useState([]);

  // const [preview, setPreview] = useState();

  const [varians, setVarians] = useState([]);

  const [quantity, setQuantity] = useState(0);

  const [selected, setSelected] = useState();

  const [dataNote, setDataNote] = useState();

  function getData() {
    const url =
      "https://node-service.caribarang.id/api/product/c82c92ba-b24c-45e3-b730-c91d24f51de4";
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, data)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.message);
        setImages(data.message.images);
        setVarians(data.message.variants);
        setSelected(data.message.variants[0]);
        // setPreview(data.message.images[0])
        setDataNote(data.message.note[0].note);
      });
  }

  const handleClick = (props) => {
    setSelected(props);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className="h-max bg-gray-100">
        <div className="container mx-auto h-max items-center max-w-screen-xl px-7 py-7">
          {/* NAVIGASI */}
          <div className="text-gray-400 text-sm pb-3 px-1">
            <ul className="flex py-1 w-max">
              <li className="hover:text-blue-500">Home</li>
              <li className="w-3 flex justify-center">
                <img className="" src={ArrNext} alt="" />{" "}
              </li>
              <li className="hover:text-gray-700 hover:cursor-pointer">
                Products
              </li>
              <li className="w-3 flex justify-center">
                <img className="" src={ArrNext} alt="" />{" "}
              </li>
              <li className="hover:text-gray-700 hover:cursor-pointer">
                {product.uuid}
              </li>
            </ul>
          </div>

          <div className="h-max items-start text-gray-500 text-sm bg-white">
            {/* CONTENT ABOVE */}
            <div className="flex justify-between h-[41rem]">
              {/* IMAGE ABOVE */}
              <div className="w-[30%] px-2 py-2">
                <div className="w-full h-[24rem] border-[1px] border-gray-300 flex items-center justify-center">
                  <img
                    className="h-full w-full"
                    src={selected ? selected.cover : product.cover}
                    alt="click preview"
                  />
                </div>

                {/* IMAGE BELLOW */}
                <div className="grid grid-cols-4 gap-2">
                  {images.map((props, index) => {
                    if (index < 6) {
                      if (index === 0) {
                        return (
                          <button
                            onClick={() => {
                              handleClick(props);
                            }}
                            key={props.id}
                            className="pt-10 h-[5rem] w-[5rem] cursor-pointer"
                          >
                            <video
                              className="h-[5rem] w-[5rem] py-1 px-1 cursor-pointer border-[1px] border-gray-300"
                              src={props.url}
                            ></video>
                          </button>
                        );
                      } else {
                        return (
                          <button
                            onClick={() => {
                              handleClick(props);
                            }}
                            key={props.id}
                            className="pt-10 h-[5rem] w-[5rem] cursor-pointer"
                          >
                            <img
                              className="h-[5rem] w-[5rem] py-1 px-1 cursor-pointer border-[1px] border-gray-300"
                              src={props.url}
                              alt="images"
                            />
                          </button>
                        );
                      }
                    }
                  })}
                </div>
              </div>

              {/* SIDE CENTER */}
              <div className="w-[45%] py-2 px-2">
                <div className="text-black font-semibold leading-6 text-[16px] w-[100%] h-[3.2rem]">
                  {product.name_en}
                </div>
                <div className="grid grid-cols-1 ">
                  <div className="flex gap-4 py-2 my-2">
                    <div className="w-[10.5rem]">Harga mulai dari</div>
                    <div className="w-[22rem]">
                      Rp{" "}
                      {formatThousands(Math.round(product.price), {
                        separator: ",",
                      })}
                    </div>
                  </div>
                  <div className="flex gap-4 py-2">
                    <div className="w-[10.5rem]">Min pemesanan</div>
                    <div className="w-[22rem]">{product.moq}</div>
                  </div>
                </div>

                {/* VARIANTS */}
                <div className="my-2">Pilih varian</div>
                <div className="grid grid-cols-9 gap-2 my-1">
                  {varians.map((props, index) => {
                    if (index < 24) {
                      return (
                        <button
                          onClick={() => {
                            handleClick(props);
                          }}
                          key={props.id}
                          className="cursor-pointer"
                        >
                          <img
                            className="flex px-1 border-[1px] border-gray-300 hover:border-blue-600"
                            src={props.cover}
                            alt={props.name_en}
                            title={props.name_en}
                          />
                        </button>
                      );
                    }
                  })}
                </div>

                {/* BARIS 1 */}
                <div className="mt-5 text-blue-600 text-[14px]">
                  {selected ? selected.name_en : "Loading ..."}
                </div>
                {selected &&
                  selected.items.map((props) => {
                    return (
                      <div
                        key={props.id}
                        className="flex justify-center border-b-[1px] border-gray-100"
                      >
                        <div className="flex text-[12px] w-[12rem] items-center pl-1 text-black">
                          {props.name_en}
                        </div>
                        <div className="flex w-[5.9rem] items-center text-blue-600">
                          Rp{" "}
                          {formatThousands(Math.round(props.price), {
                            separator: ",",
                          })}
                        </div>
                        <div className="flex text-[12px] w-[4.7rem] items-center">
                          {props.stock} Stok
                        </div>
                        <div className="flex py-2 w-[11.2rem] items-center">
                          {/* {items,map((props.index) => {
                            return (
                              
                            )
                          })} */}

                          <div className="flex gap-1 w-full text-black">
                            <button
                              id="button"
                              type="button"
                              onClick={decrement}
                              className="border-[1px] border-gray-300 bg-gray-100 hover:bg-gray-300 text-center h-6 w-8 bg-brand-pink text-brand-red rounded-md active:bg-brand-red active:text-brand-pink"
                            >
                              -
                            </button>
                            <input
                              id="quantity"
                              typeof="number"
                              placeholder={quantity}
                              className="border-[1px] border-gray-300 flex text-center items-center justify-center h-6 w-[3rem] focus:ring-blue-500 focus:border-indigo-500 py-2 rounded-md"
                            />
                            <button
                              id="button"
                              type="button"
                              onClick={increment}
                              className="border-[1px] border-gray-300 bg-gray-100 hover:bg-gray-300 text-center h-6 w-8 bg-brand-pink text-brand-red rounded-md active:bg-brand-red active:text-brand-pink"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {/* TAMBAH KERANJANG */}
                <div className="mt-6 h-15 py-1 text-[12px] font-bold">
                  <div className="flex items-end mt-5">
                    <div className="hover:shadow-lg cursor-pointer bg-blue-400 w-[11rem] my-1 h-9 rounded-md py-2 flex justify-center text-white items-center">
                      <img
                        className="bg-blue-400 mx-1 h-4 w-4"
                        src={Trolli}
                        alt="Trolli"
                      />
                      Tambah Ke Keranjang
                    </div>
                  </div>
                </div>

                <div className="text-blue-600 font-bold text-[12px] flex h-11 py-1">
                  <a
                    href="https://detail.1688.com/offer/628706381412.html"
                    className="hover:underline h-5 w-full py-1 flex items-center"
                  >
                    Lihat di 1688
                  </a>
                </div>
              </div>

              {/* SIDE RIGHT */}
              <div className="w-[25%] py-2 px-2 text-[18px] bg-blue-200">
                {/* SUB JUDUL */}
                <div className="h-6">Ringkasan Harga</div>
                {/* ISI CONTENT */}
                <div className="py-5 text-[12px]">
                  {/* BARIS 1 */}
                  <div className="flex py-2 gap-1">
                    <div className="w-[50%] h-max">
                      Harga Produk X {quantity}
                    </div>
                    <div className="w-[50%] h-max flex justify-end">
                      Rp{" "}
                      {formatThousands(
                        Math.round(
                          quantity ? quantity + product.price : quantity
                        ),
                        {
                          separator: ",",
                        }
                      )}
                    </div>
                  </div>
                  {/* BARIS 2 */}
                  <div className="flex py-2 gap-1">
                    <div className="w-[50%] h-max">Handlink Fee 3%</div>
                    <div className="w-[50%] h-max flex justify-end">
                      Rp{" "}
                      {formatThousands(
                        Math.round(
                          quantity ? quantity + product.price * 0.031 : quantity
                        ),
                        {
                          separator: ",",
                        }
                      )}
                    </div>
                  </div>
                  {/* BARIS 3 */}
                  <div className="flex py-2 gap-1">
                    <div className="w-[50%] h-[1.5rem]">Ongkir Lokal China</div>
                    <div className="w-[50%] h-[1.5rem] flex justify-end items-center">
                      Rp -
                      <span className="w-[1.8rem] h-full ml-1 cursor-pointer flex justify-center items-center">
                        {/* <FontAwesomeIcon icon="fa-regular fa-circle-exclamation" /> */}
                        <button
                          className="w-full h-full rounded-[3px] hover:bg-cyan-300 border-[1px] border-blue-600 flex justify-center items-center"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Tooltip on bottom"
                        >
                          <div id="menuIcons">
                            <i className="fas fa-info-circle"></i>
                          </div>
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* BARIS 4 */}
                  <div className="flex py-2 gap-1">
                    <div className="w-[50%] h-[1.5rem]">
                      Ongkir China Ke Indonesia
                    </div>
                    <div className="w-[50%] h-[1.5rem] flex justify-end items-center">
                      Rp -
                      <span className="w-[1.8rem] h-full ml-1 cursor-pointer flex justify-center items-center">
                        <div className="w-full h-full rounded-[3px] hover:bg-cyan-300 border-[1px] border-blue-600 flex justify-center items-center">
                          <div id="menuIcons">
                            <i className="fas fa-info-circle"></i>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT BELLOW */}
          <div className="py-3 mt-5 bg-white pt-10">
            <div className="w-[18.9rem] flex justify-end pb-2 items-end h-[2rem] font-semibold text-gray-500 mx-3 text-[14.5px]">
              Informasi Umum
            </div>

            <span className="flex py-2 mx-3">
              <div className="flex mx-2">
                <div className="flex justify-end items-end w-[18.4rem] font-semibold text-gray-400 text-[12px]">
                  Berat
                </div>
              </div>
              <div className="flex mx-3 w-full">
                <div className="items-end w-full font-semibold text-gray-500 text-[12px]">
                  gr
                </div>
              </div>
            </span>
            <span className="flex py-2 mx-3">
              <div className="flex mx-2">
                <div className="flex justify-end items-end w-[18.4rem] font-semibold text-gray-400 text-[12px]">
                  Minimum Pemesanan
                </div>
              </div>
              <div className="flex mx-3 w-full">
                <div className="items-end w-full font-semibold text-gray-500 text-[12px]">
                  {product.moq}
                </div>
              </div>
            </span>
            <span className="flex py-2 mx-3 pb-5 border-b-[1px] border-gray-200">
              <div className="flex mx-2">
                <div className="flex justify-end items-end w-[18.4rem] font-semibold text-gray-400 text-[12px]">
                  Supplier
                </div>
              </div>
              <div className="flex mx-3 w-full">
                <div className="items-end w-full font-semibold text-gray-500 text-[12px]">
                  {/* {product.seller.name} */}
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
            </span>
          </div>

          <div className="bg-white pt-5 h-[955.5rem]">
            <div className="w-[18.9rem] flex justify-end items-end h-[2rem] font-semibold text-gray-500 mx-3 text-[14.5px]">
              Deskripsi
            </div>
            <span className="flex py-2 mx-3 pb-5 h-[25rem]">
              <div className="flex mx-2">
                <div className="flex justify-end items-start w-[18.4rem] h-[951.3rem] font-semibold text-gray-500 text-[12px]">
                  Detail
                </div>
              </div>
              <div className="mx-2 w-full">
                <div className="items-end font-semibold text-gray-500 text-[12px]">
                  {parse(dataNote)}
                </div>
              </div>
            </span>
          </div>

          <div className="h-[5rem] bg-white">
            <span className="flex py-2 mx-3 pb-3">
              <div className="flex mx-2">
                <div className="flex justify-end items-end w-[18.4rem] font-semibold text-gray-500 text-[12px]"></div>
              </div>
              <div className="flex mx-3 w-full">
                <div className="items-end w-full font-semibold text-blue-600 text-[15px] underline">
                  <span className="cursor-pointer items-center">
                    Lihat Semuanya
                  </span>
                </div>
              </div>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
