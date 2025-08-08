import Navbar from "@/components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {   //dynamic route
  const { handle } = await params; 
  
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("link");

  const loc = await collection.findOne({ handle:handle });
      if(!loc){
        return notFound()
    }

    console.log(loc);


  // Pic up form MongoDB data (as per your example)
  const obj = {
    _id: {
      $oid: "6822d82f94521f584fa33037",
    },
    links: [
      {
        link: "https://www.youtube.com/",
        linktext: "youtube",
      },
      {
        link: "https://www.facebook.com",
        linktext: "facebook",
      },
    ],
    handle: "sayan",
    pic: "https://pbs.twimg.com/profile_images/1896446481919299584/kHq63qsK_bigger.jpg",
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-red-200 to-yellow-200 p-4">
        <div className="flex flex-col items-center justify-center">
          {/* Profile Picture */}
          <img
            src={obj.pic}
            //alt={`${obj.handle}'s profile picture`}
            className="w-28 h-28 rounded-full object-cover shadow-lg"
          />

          {/* Handle */}
          <span className="mt-4 text-3xl font-bold text-gray-900 hover:text-yellow-600 transition-colors duration-300">
            @{obj.handle}
          </span>

          {/* Links */}
          <div className="mt-6 w-full max-w-xs space-y-3">

            {obj.links.map((i, index) => {
              return (
                <Link key={index} href={i.link}>
                  <div className="text-black bg-slate-100 font-semibold text-center hover:bg-yellow-300 hover:text-gray-800 transition-all duration-300 backdrop-blur-sm py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3">
                    {i.linktext}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
}
