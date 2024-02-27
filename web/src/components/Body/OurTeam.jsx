import Image from "next/image";
import React from "react";
import Avatar1 from "@/assets/team-avt/avatar-1.jpg";
import Avatar2 from "@/assets/team-avt/avatar-2.jpg";
import Avatar3 from "@/assets/team-avt/avatar-3.jpg";
import Avatar4 from "@/assets/team-avt/avatar-4.jpg";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const Member = ({
  name,
  vi_name,
  social: { facebook, github },
  index,
  nickname,
  is_leader,
  avatar,
}) => {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
      <div className="flex flex-col">
        <a href="#" className="mx-auto">
          <Image
            className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
            src={avatar}
          />
        </a>
        <div className="text-center mt-6">
          <h1 className="text-gray-600 text-center text-sm font-bold  mb-1"></h1>
          <h1 className="text-gray-900 text-2xl font-bold  mb-1">{name}</h1>
          <div className="text-emerald-600 font-bold mb-2">{nickname}</div>

          <div
            className="flex items-center justify-center opacity-50 hover:opacity-100
                transition-opacity duration-300"
          >
            <a
              href={facebook}
              target="_blank"
              className="flex items-center justify-center rounded-full hover:bg-indigo-50 h-10 w-10"
            >
              <FaFacebookF />
            </a>

            <a
              href={github}
              target="_blank"
              className="flex items-center justify-center rounded-full hover:bg-orange-50 h-10 w-10"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const membersList = [
  {
    name: "Tran Cong Toan",
    vi_name: "Trần Công Toản 👀",

    nickname: "Alpha",
    social: {
      facebook: "https://www.facebook.com/tctoan1024",
      github: "https://github.com/toantc1024",
    },
    avatar: Avatar3,
    is_leader: true,
  },

  {
    name: "Lam Hoai Kim Ngan",
    vi_name: "Lâm Hoài Kim Ngân 🍜",
    nickname: "Beta",
    social: {
      facebook: "https://www.facebook.com/nganlam6924/",
      github: "https://github.com/nganlam-vn",
    },
    avatar: Avatar1,
  },

  {
    name: "Dong Gia Sang",
    vi_name: "Đồng Gia Sang 🐱‍👓",
    nickname: "Celta",
    social: {
      facebook: "https://www.facebook.com/sinhvienamhai",
      github: "https://github.com/canoc1709",
    },
    avatar: Avatar4,
  },
  {
    name: "Dang Minh Nhat",
    vi_name: "Đặng Minh Nhật 😎",
    nickname: "Delta",
    social: {
      facebook: "https://www.facebook.com/Mihn.Nathja/",
      github: "https://github.com/MihnNathja",
    },
    avatar: Avatar2,
  },
];

const OurTeam = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-blue-800 font-extrabold text-4xl mb-8">
                  <span className="bg-amber-50 border-[1px] p-4 rounded-full shadow-sm text-amber-300  hover:bg-amber-100">
                    More about the Cows
                  </span>
                </h1>
                <p className="text-gray-700 text-lg font-bold">
                  Cows love you. They will be your friends forever. 🌼
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              {membersList.map((item, index) => (
                <Member {...item} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
