"use client";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useSearchParams } from "next/navigation"; 
import Footer from "@/components/Footer";


const Generate = () => {
  const searchParams = useSearchParams();

  const [links, setLinks] = useState([{ linktext: "", link: "", }]); // Start with one pair of inputs
  // const [handle, setHandle] = useState("");
  const [handle, setHandle] = useState(searchParams.get("handle"));
  const [pic, setPic] = useState("");

  const addLink = () => {
    setLinks([...links, { linktext: "" , link: "" }]); // Add a new pair of empty inputs
    toast.info("New link input added!");
  };

  const updateLink = (index, field, value) => {
    const updatedLinks = [...links];
    updatedLinks[index][field] = value;
    setLinks(updatedLinks);
  };

  const submitLink = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links, // Fixed the key name (removed extra space and quotes)
      handle: handle,
      pic: pic,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();
    if (result.success) {
      toast.success(result.message); 
      ///After creating link autometically these input is Empty...//
      setLinks([{ link: "", linktext: "" }]);
      setPic("");
      setHandle("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <>

     <div className="min-h-screen flex">
      <ToastContainer />

      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center items-center">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-4xl font-bold text-blue-950">
            Create your Bittree
          </h1>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl text-slate-900">
              step:1 claim your Handle
            </h2>
            <input
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              type="text"
              placeholder="Choose a Handle"
              className="w-full p-4 text-black bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
            <h2 className="font-semibold text-2xl text-slate-900">
              step:2 add links
            </h2>
            { links.map((item, i) => (
              <div key={i} className="space-y-2">
                <input
                  value={item.linktext}
                  onChange={(e) =>
                    updateLink(i, "linktext", e.target.value)
                  }
                  type="text"
                  placeholder="Enter link text"
                  className="w-full p-4 text-black bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  value={item.link}
                  onChange={(e) => updateLink(i, "link", e.target.value)}
                  type="text"
                  placeholder="Enter link"
                  className="w-full p-4 text-black bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            ))}

            <button
              onClick={addLink}
              className="text-blue-700 hover:text-white font-bold border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-600"
            > +Add Link
            </button>

            <h2 className="font-semibold text-2xl text-slate-900">
              step:3 add Picture and Finalize
            </h2>
            <input
              value={pic}
              onChange={(e) => setPic(e.target.value)}
              type="text"
              placeholder="Enter link to your Picture"
              className="w-full p-4 text-black bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
            <button
              disabled={pic == "" || handle == "" || links[0].linktext == ""}
              onClick={submitLink}
              className="disabled:bg-slate-500 disabled:cursor-not-allowed disabled:opacity-50 w-full p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-md hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 font-medium"
            > Create your Link
            </button>
            
            <Link href={"/"}>
              <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Back to home page</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="hidden md:block md:w-1/2 bg-purple-400 relative">
        <Image
          className="h-full w-full"
          src="/generate.jpg"
          alt="Decorative background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    <Footer/>
    
    </>
   
  );
};

export default Generate;
