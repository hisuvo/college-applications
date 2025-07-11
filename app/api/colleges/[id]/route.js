import dbConnect from "@/lib/dbcollection";

export async function GET(res, params) {
  const data = await dbConnect("coffee").find().toArray();
  const p = await params;
  return Response.json({ p, data });
}

export async function DELETE(res, params) {
  const data = await dbConnect("coffee").find().toArray();
  const p = await params;
  return Response.json({ p, data });
}
