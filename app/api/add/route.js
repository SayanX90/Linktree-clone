
// // *** nextjs route.js----
// //   create a folder api/add/route.js

import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
   //console.log(body);

  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("link");


  ////2nd.....
  //// If the handle is already claimed, you cannot create the bittree
  const doc = await collection.findOne({ handle: body.handle });

  if (doc) {
    return Response.json({
      success: false,
      error: true,
      message: "This Bittree already exists!",
      result: null,
    });
  }

  const result = await collection.insertOne(body);

  return Response.json({
     success: true,
    error: false,
    message: "Your Bittree has been generated!",
    result: result,
  });
}
