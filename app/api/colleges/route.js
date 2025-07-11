import dbConnect from "@/lib/dbcollection";

export async function GET() {
  const data = await dbConnect("coffee").find().toArray();
  return Response.json(data);
}

export async function POST(req) {
  const college = await req.json();
  const result = await dbConnect("allCollege").insertMany(college);
  return Response.json(result);
}
