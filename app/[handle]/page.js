import Navbar from "@/components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {   //dynamic route
  const { handle } = params;

  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("link");

  const loc = await collection.findOne({ handle: handle });
  if (!loc) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
        <div className="flex flex-col items-center justify-center w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/30">
          {/* Profile Picture */}
          {loc.pic && (
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src={loc.pic}
                alt={`${loc.handle}'s profile picture`}
                className="relative w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white/60 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}

          {/* Handle */}
          <span className="mt-4 text-3xl font-extrabold text-gray-900 drop-shadow-sm">
            @{loc.handle}
          </span>

          {/* Links */}
          <div className="mt-8 w-full flex flex-col gap-4">
            {loc.links.map((item, index) => (
              <Link key={index} href={item.link} target="_blank">
                <div
                  className="flex items-center justify-center text-lg font-semibold 
                             text-center py-3 px-6 rounded-xl shadow-lg border border-white/20
                             bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white
                             hover:scale-105 hover:shadow-xl transition-all duration-300
                             w-full min-h-[50px] sm:min-h-[60px]"
                > {item.linktext}
                </div>
              </Link>
            ))}
          </div>

          {/* Back Button */}
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2 text-sm font-medium 
                       text-purple-900 bg-purple-100 rounded-full shadow-sm 
                       hover:bg-purple-200 hover:shadow-md hover:scale-105 transition-all duration-200"
          >
            <span className="text-lg">←</span>
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
