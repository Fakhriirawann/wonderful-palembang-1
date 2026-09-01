import React from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

function CardName() {
  return (
    <>
      <div className="h-screen bg-gray-200 dark:bg-slate-900 flex justify-center items-center">
        <div className="w-96 h-auto border-1 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl">
          <div className="flex justify-center items-center flex-col">
            <img
              src="src/assets/foto lenno.png"
              alt=""
              className="w-30 rounded-full shadow-xl border-1"
            />

            <h1 className="text-xl font-bold text-slate-800 dark:text-white">Lenno Nardo</h1>
            <p className="text-gray-500 dark:text-gray-400">Mahasiswa</p>
          </div>

          <div className="mt-4 mb-4 text-gray-600 dark:text-gray-300">
            <p>
              "Hai, perkenalkan nama saya Lenno Nardo saya adalah seorang web
              developer yang berpengalaman dalam mengembangkan aplikasi web
              menggunakan berbagai teknologi seperti React, Laravel, dan MySQL"
            </p>
          </div>

          <LinkSocial
            text="Instagram"
            icon={<FaInstagram className="mr-2 text-red-400" />}
            link="https://www.instagram.com/"
          />
          <LinkSocial
            text="Facebook"
            icon={<FaFacebook className="mr-2 text-blue-500" />}
            link="https://web.facebook.com/?_rdc=1&_rdr#"
          />
          <LinkSocial
            text="Github"
            icon={<FaGithub className="mr-2 text-gray-400" />}
            link="https://github.com/LennoNardo"
          />
        </div>
      </div>
    </>
  );
}

export default CardName;

function LinkSocial(props) {
  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        <a
          className="bg-black text-white p-2 w-full rounded-lg text-center flex justify-center items-center hover:bg-gray-800 transition-colors"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.icon} {props.text}
        </a>
      </div>
    </>
  );
}
