import React, { useState, useEffect } from "react"
import notification from './api.json';
import LightMode from './assets/images/toggle-left.svg'
import DarkMode from './assets/images/toggle-right.svg'
import FacebookIcon from "./assets/images/icon-facebook.svg"
import TwitterIcon from "./assets/images/icon-twitter.svg"
import InstagramIcon from "./assets/images/icon-instagram.svg"
import YoutubeIcon from "./assets/images/icon-youtube.svg"
import UpIcon from "./assets/images/icon-up.svg"

function App() {
  const [theme, setTheme] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }

    fetch("api.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"));
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <div className={`w-full h-screen  ${theme === "dark" ? "bg-black" : "bg-white"} p-3`}>
        <div className="text-blue-900 font-bold max-w-5xl max-h-full border-2 m-auto mt-4 p-4 bg-white">
          <div className="flex lg:justify-between lg:items-center md:justify-between md:items-start sm:items-start sm:justify-start m-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
            <div className="">
              <h1 className="capitalize text-xl">social media dashboard</h1>
              <p className="capitalize text-sm">total followers: {data.reduce((acc, item) => acc + item.followers, 12124)}</p>
            </div>
            <div className="flex justify-between items-center space-x-3">
              <h2>Dark Mode</h2>
              <img src={theme === "dark" ? LightMode : DarkMode} alt="" onClick={handleClick}/>
            </div>
          </div>

          <div className="mt-5 mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-y-2">
              <div className="w-60 h-40 border bg-slate-100 rounded-md border-t-blue-500 border-t-4">
                <div className="items-center text-center px-16 py-8">
                  <div className="flex justify-start items-center gap-1">
                    <img className="w-4 h-4" src={FacebookIcon} alt="" />
                    <span>@nathanf</span>
                  </div>
                  <h1 className="text-3xl font-bold">{notification[0].followers}</h1>
                  <p className="tracking-widest text-xl font-light ">Followers</p>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-green-500">12 Days</span>
                  </div>
                </div>
              </div>
              <div className="w-60 h-40 border bg-slate-100 rounded-md border-t-blue-500 border-t-4">
                <div className="items-center text-center px-16 py-8">
                    <div className="flex justify-start items-center gap-1">
                      <img className="w-4 h-4" src={TwitterIcon} alt="" />
                      <span>@nathanf</span>
                    </div>
                    <h1 className="text-3xl font-bold">{notification[1].twitter}</h1>
                    <p className="tracking-widest text-xl font-light ">Followers</p>
                    <div className="flex justify-start items-center text-center">
                      <img className="w-2 h-2" src={UpIcon} alt="" />
                      <span className="text-green-500">12 Days</span>
                    </div>
                  </div>
              </div>
              <div className="w-60 h-40 border bg-slate-100 rounded-md border-t-red-500 border-t-4">
                <div className="items-center text-center px-16 py-8">
                  <div className="flex justify-start items-center gap-1">
                    <img className="w-4 h-4" src={InstagramIcon} alt="" />
                    <span>@nathanf</span>
                  </div>
                  <h1 className="text-3xl font-bold">{notification[2].followers}</h1>
                  <p className="tracking-widest text-xl font-light ">Followers</p>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-green-500">12 Days</span>
                  </div>
                </div>
              </div>
              <div className="w-60 h-40 border bg-slate-100 rounded-md border-t-red-500 border-t-4">
                <div className="items-center text-center px-16 py-8">
                  <div className="flex justify-start items-center gap-1">
                    <img className="w-4 h-4" src={YoutubeIcon} alt="" />
                    <span>@nathanf</span>
                  </div>
                  <h1 className="text-3xl font-bold">{notification[3].followers}</h1>
                  <p className="tracking-widest text-xl font-light ">Followers</p>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-red-500">12 Days</span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-xl font-bold mt-5 mb-4">Overviwe Today</h1>
            <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 m-auto">
              <div className="w-60 h-28 rounded-md border bg-slate-100 px-6 py-4">
                <div className="flex justify-between items-center">
                  <p>Page View</p>
                  <img src={FacebookIcon} alt="" />
                </div>
                <div className="flex justify-between items-center mt-8">
                  <h1>{notification[0].pageviews}</h1>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-green-500">12%</span>
                  </div>
                </div>
              </div>
              <div className="w-60 h-28 rounded-md border bg-slate-100 px-6 py-4">
                <div className="flex justify-between items-center">
                  <p>Likes</p>
                  <img src={FacebookIcon} alt="" />
                  </div>
                  <div className="flex justify-between items-center mt-8">
                  <h1>{notification[0].like}</h1>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-green-500">12%</span>
                  </div>
                </div>
              </div>
              <div className="w-60 h-28 rounded-md border bg-slate-100 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <p>Likes</p>
                    <img src={InstagramIcon} alt="" />
                  </div>
                <div className="flex justify-between items-center mt-8">
                  <h1>{notification[3].like}</h1>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-green-500">12%</span>
                  </div>
                </div>
              </div>
              <div className="w-60 h-28 rounded-md border bg-slate-100 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <p>Profile Views</p>
                    <img src={InstagramIcon} alt="" />
                  </div>
                <div className="flex justify-between items-center mt-8">
                  <h1>{notification[3].frofileviews}</h1>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-green-500">12%</span>
                  </div>
                </div>
              </div>
              <div className="w-60 h-28 rounded-md border bg-slate-100 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <p>Retweets</p>
                    <img src={TwitterIcon} alt="" />
                </div>
                <div className="flex justify-between items-center mt-8">
                  <h1>{notification[1].reteews}</h1>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-green-500">12%</span>
                  </div>
                </div>
              </div>
              <div className="w-60 h-28 rounded-md border bg-slate-100 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <p>Likes</p>
                    <img src={TwitterIcon} alt="" />
                </div>
                <div className="flex justify-between items-center mt-8">
                  <h1>{notification[1].like}</h1>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-green-500">12%</span>
                  </div>
                </div>
              </div>
              <div className="w-60 h-28 rounded-md border bg-slate-100 px-6 py-4">
                  <div className="flex justify-between items-center">
                   <p>Likes</p>
                    <img src={YoutubeIcon} alt="" />
                </div>
                <div className="flex justify-between items-center mt-8">
                  <h1>{notification[3].like}</h1>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-green-500">12%</span>
                  </div>
                </div>
              </div>
              <div className="w-60 h-28 rounded-md border bg-slate-100 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <p>Total Views</p>
                    <img src={YoutubeIcon} alt="" />
                </div>
                <div className="flex justify-between items-center mt-8">
                  <h1>{notification[3].totalviews}</h1>
                  <div className="flex justify-start items-center text-center">
                    <img className="w-2 h-2" src={UpIcon} alt="" />
                    <span className="text-green-500">12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
