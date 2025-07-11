export async function GET() {
  const data = {
    message: "student from App Router API!",
    error: false,
    status: 200,
  };
  return Response.json({ data });
}
