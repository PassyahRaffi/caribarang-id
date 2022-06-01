import React from "react";

import Fb from "../assets/fb.png";
import Ig from "../assets/ig.png";
import Twit from "../assets/twit.png";
import Wa from "../assets/wa.png";

export default function Footer() {
  return (
    <>
      <footer className="h-max bg-white w-full">
        <div className="text-gray-500 container mx-auto h-max items-center max-w-screen-xl px-7 py-7">
          {/* BARIS 1 */}
          <div className="flex justify-center items-center h-[3rem]">
            <div className="h-full flex justify-center items-center px-4">
              <a href="https://caribarang.id/page/privacy" className="">Privacy</a>
            </div>

            <div className="h-full flex justify-center items-center px-4">
              <a href="https://caribarang.id/page/terms-and-conditions" className="">Terms & Conditions</a>
            </div>

            <div className="h-full flex justify-center items-center px-4">
              <a href="https://caribarang.id/page/faq" className="">Faq</a>
            </div>

            <div className="h-full flex justify-center items-center px-4">
              <a href="https://caribarang.id/blogs" className="">Blog</a>
            </div>
          </div>

          {/* BARIS 2 */}
          <div className="justify-center items-center h-full text-[14px]">
            <span className="flex h-max justify-center items-center my-2 text-center">
              Jl. Mangga Besar VIII No.12 D, Kec, Taman Sari, Kota Jakarta
              Barat, Daerah
              <br />
              Khusus Ibukota Jakarta, 11150
            </span>

            <a href="081119163004" className="h-full flex justify-center items-center my-2 text-blue-600">
              Telp: 081119163004
            </a>

            <span className="h-full flex justify-center items-center my-2">
              Open: Monday - Friday | 09:00 - 17:00 WIB
            </span>
          </div>

          {/* BARIS 3 */}
          <div className="flex justify-center items-center h-full gap-7 my-8">
            
            <a href="https://www.facebook.com/officialcaribarang.id" className="flex h-max justify-center items-center text-center">
              <img className="w-5 h-5" src={Fb} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/officialcaribarang.id/" className="flex h-max justify-center items-center text-center">
              <img className="w-5 h-5" src={Ig} alt="instagram" />
            </a>
            <a href="#!" className="flex h-max justify-center items-center text-center">
              <img className="w-5 h-5" src={Twit} alt="twitter" />
            </a>
          </div>

          {/* BARIS 4 */}
          <span className="flex w-full h-max justify-center my-8">
            © 2021 caribarang.id, All rights reserved.
          </span>
        </div>

        {/* WHATSAPP POSITION */}
        <div className="relative">
          <div className="fixed flex justify-end bottom-[50px] left-0 right-20">
            <a
              href="https://api.whatsapp.com/send?phone=6281119163004&text=Hi%20Admin%20Cari%20Barang.id,%20tolong%20carikan%20barang%20ini%20dong:%0a%20https://caribarang.id/products/c82c92ba-b24c-45e3-b730-c91d24f51de4%0a%20%F0%9F%99%8F%F0%9F%98%8A"
              className="w-[4rem] h-[4rem] bg-green-400 flex justify-center items-center rounded-full cursor-pointer"
            >
              <img
                className="w-[2.4rem] h-[2.4rem] transform transition duration-200 hover:scale-110"
                src={Wa}
                alt=""
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
