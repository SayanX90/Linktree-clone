// // *** nextjs route.js----
// //   create a folder api/add/route.js


import clientPromise from "@/lib/mongodb";

export async function POST(request) {  ///Route.js
  const body = await request.json();
  //console.log(body);
  
  ///Added in mongodb database----
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("link");

  //2nd
  //// if the handel is already claimed,you cannot create the bittree..
  const doc = await collection.findOne({ handle: body.handle });
  if (doc) {
    return Response.json({
      success: false,
      error: true,
      message: "This Bittree already exists..!",
      request: null,
    });
  }
   
  //1st
  const result = await collection.insertOne(body); 

  return Response.json({
    success: true,
    error: false,
    message: "Bittree has been generated",
    request: result,
  });
}
