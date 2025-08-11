

"use client";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const GenerateClient = () => {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ linktext: "", link: "" }]);
  const [handle, setHandle] = useState(searchParams.get("handle"));
  const [pic, setPic] = useState("");

  /// create for checking handel....
  const router = useRouter();
  const checkHandle = () => {
    if (handle) {
      router.push(`/${handle}`);
    } else {
      toast.error("Please enter a handle first.");
    }
  };

  const addLink = () => {
    setLinks([...links, { linktext: "", link: "" }]);
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
      link: links,
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
      setLinks([{ link: "", linktext: "" }]);
      setPic("");
      // setHandle("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <ToastContainer />

        {/* Left Column - Form */}
        <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 flex flex-col justify-center items-center">
          <div className="max-w-md w-full space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-950 text-center md:text-left">
              Create your Bittree
            </h1>

            <div className="space-y-4">
              {/* Step 1 */}
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                Step 1: Claim your Handle
              </h2>
              <input
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                type="text"
                placeholder="Choose a Handle"
                className="w-full p-3 sm:p-4 text-black bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />

              {/* Step 2 */}
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                Step 2: Add links
              </h2>
              {links.map((item, i) => (
                <div key={i} className="space-y-2">
                  <input
                    value={item.linktext}
                    onChange={(e) => updateLink(i, "linktext", e.target.value)}
                    type="text"
                    placeholder="Enter link text"
                    className="w-full p-3 sm:p-4 text-black bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    value={item.link}
                    onChange={(e) => updateLink(i, "link", e.target.value)}
                    type="text"
                    placeholder="Enter link"
                    className="w-full p-3 sm:p-4 text-black bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              ))}

              <button
                onClick={addLink}
                className="w-full sm:w-auto text-blue-700 hover:text-white font-bold border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-5 py-2.5 text-center"
              > + Add Link
              </button>

              {/* Step 3 */}
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                Step 3: Add Picture and Finalize
              </h2>

              <div className="relative w-full">
                <input
                  value={pic}
                  onChange={(e) => setPic(e.target.value)}
                  type="text"
                  placeholder="Enter link to your Picture"
                  className="w-full p-3 sm:p-4 pr-12 text-black bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />

                {/* Hidden file input */}
  <input
    type="file"
    accept="image/*"
    id="pictureUpload"
    className="hidden"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        // Convert file to Base64 so it persists
        const reader = new FileReader();
        reader.onloadend = () => {
          setPic(reader.result); // Base64 string
        };
        reader.readAsDataURL(file);
      }
    }}
  />

                {/* Camera emoji instead of 📎 */}
                <label
                  htmlFor="pictureUpload"
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-purple-600 text-lg"
                  title="Attach from device"
                > 📷
                </label>
              </div>

              {/* Optional preview */}
              {pic && (
                <img
                  src={pic}
                  alt="Preview"
                  className="mt-3 w-32 h-32 object-cover rounded-lg border border-gray-300"
                />
              )}

              <button
                disabled={ pic === "" || handle === "" || links[0].linktext === "" }
                onClick={submitLink}
                className="w-full p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-md hover:from-purple-700 hover:to-indigo-700 disabled:bg-slate-500 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 font-medium"
              > Create your Link
              </button>

              <button
                onClick={checkHandle}
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              > Check your Handle
              </button>

              <br />

              <Link href={"/"}>
                <button
                  type="button"
                  className=" sm:w-auto text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                > Back to home page
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 bg-purple-400 relative h-64 md:h-auto">
          <Image
            src="/generate.jpg"
            alt="Decorative background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GenerateClient;




// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import Footer from "@/components/Footer";

// const GenerateClient = () => {
//   const searchParams = useSearchParams();
//   const [links, setLinks] = useState([{ linktext: "", link: "" }]);
//   const [handle, setHandle] = useState(searchParams.get("handle"));
//   const [pic, setPic] = useState("");

//   /// create for checking handel....
//   const router = useRouter();
//   const checkHandle = () => {
//     if (handle) {
//       router.push(`/${handle}`);
//     } else {
//       toast.error("Please enter a handle first.");
//     }
//   };

//   const addLink = () => {
//     setLinks([...links, { linktext: "", link: "" }]);
//     toast.info("New link input added!");
//   };

//   const updateLink = (index, field, value) => {
//     const updatedLinks = [...links];
//     updatedLinks[index][field] = value;
//     setLinks(updatedLinks);
//   };

//   const submitLink = async () => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       "link": links,
//       "handle": handle,
//       "pic": pic
//     });

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     const r = await fetch("http://localhost:3000/api/add", requestOptions);
//     const result = await r.json();
//     if (result.success) {
//       toast.success(result.message);
//       setLinks([{ link: "", linktext: "" }]);
//       setPic("");
//      // setHandle("");
//     } else {
//       toast.error(result.message);
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col md:flex-row">
//         <ToastContainer />

//         {/* Left Column - Form */}
//         <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 flex flex-col justify-center items-center">
//           <div className="max-w-md w-full space-y-6">
//             <h1 className="text-3xl sm:text-4xl font-bold text-blue-950 text-center md:text-left">
//               Create your Bittree
//             </h1>

//             <div className="space-y-4">
//               <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
//                 Step 1: Claim your Handle
//               </h2>
//               <input
//                 value={handle}
//                 onChange={(e) => setHandle(e.target.value)}
//                 type="text"
//                 placeholder="Choose a Handle"
//                 className="w-full p-3 sm:p-4 text-black bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
//               />

//               <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
//                 Step 2: Add links
//               </h2>
//               {links.map((item, i) => (
//                 <div key={i} className="space-y-2">
//                   <input
//                     value={item.linktext}
//                     onChange={(e) => updateLink(i, "linktext", e.target.value)}
//                     type="text"
//                     placeholder="Enter link text"
//                     className="w-full p-3 sm:p-4 text-black bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
//                   />
//                   <input
//                     value={item.link}
//                     onChange={(e) => updateLink(i, "link", e.target.value)}
//                     type="text"
//                     placeholder="Enter link"
//                     className="w-full p-3 sm:p-4 text-black bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
//                   />
//                 </div>
//               ))}

//               <button
//                 onClick={addLink}
//                 className="w-full sm:w-auto text-blue-700 hover:text-white font-bold border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-5 py-2.5 text-center"
//               > + Add Link
//               </button>

//               <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
//                 Step 3: Add Picture and Finalize
//               </h2>
//               <input
//                 value={pic}
//                 onChange={(e) => setPic(e.target.value)}
//                 type="text"
//                 placeholder="Enter link to your Picture"
//                 className="w-full p-3 sm:p-4 text-black bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
//               />
//               <button
//                 disabled={pic == "" || handle == "" || links[0].linktext == ""}
//                 onClick={submitLink}
//                 className="w-full p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-md hover:from-purple-700 hover:to-indigo-700 disabled:bg-slate-500 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 font-medium"
//               >Create your Link
//               </button>

//               <button
//                 onClick={checkHandle}
//                 className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               > Check your Handle
//               </button>

//               <br />

//               <Link href={"/"}>
//                 <button
//                   type="button"
//                   className=" sm:w-auto text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                 > Back to home page
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Image */}
//         <div className="md:w-1/2 bg-purple-400 relative h-64 md:h-auto">
//           <Image
//             src="/generate.jpg"
//             alt="Decorative background"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default GenerateClient;