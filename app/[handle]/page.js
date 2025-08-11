
import Navbar from "@/components/Navbar";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;

  /// connect to the database....
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("link");

  const doc = await collection.findOne({ handle: handle });
  if (!doc) {
    return notFound();
  }



  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 p-4">
      <div className="photo flex flex-col items-center gap-4 w-full max-w-md bg-gradient-to-br from-pink-500 via-rose-400 to-red-400 backdrop-blur-md shadow-2xl rounded-2xl p-5 sm:p-6 border border-white/30 transform transition-all hover:scale-[1.02]">
        {/* Profile Picture */}
        <img
          src={doc.pic}
          className="rounded-full shadow-lg border-4 border-white/90 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover hover:shadow-xl transition duration-300"
          alt={handle}
        />

        {/* Handle Name */}
        <span className="font-semibold text-white text-xl sm:text-2xl md:text-3xl tracking-wide bg-gradient-to-r from-pink-200 to-rose-200 bg-clip-text">
          @{doc.handle}
        </span>

        {/* Links */}
        <div className="links w-full space-y-3">
          {doc.link?.map((item, index) => (
            <Link href={item.link} key={index} className="block">
              <div className="py-2 px-4 text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-600 hover:shadow-lg transition-all duration-200 w-full text-center font-medium text-base sm:text-lg md:text-xl cursor-pointer transform hover:-translate-y-0.5">
                {item.linktext} {/* Fallback text if linktext is empty */}
              </div>
            </Link>
          ))}
        </div>

        {/* Back Button (to Home) */}
        <Link href="/" className="w-full mt-2">
          <div className="py-2 px-4 text-white bg-gradient-to-r from-gray-400 to-gray-500 rounded-full shadow-md hover:from-gray-500 hover:to-gray-600 hover:shadow-lg transition-all duration-200 w-full text-center font-medium text-base sm:text-lg md:text-xl cursor-pointer transform hover:-translate-y-0.5">
            ← Back to Home
          </div>
        </Link>
      </div>

      <Navbar />
    </div>
  );
}