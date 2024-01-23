import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // delay 1s
  const featuredProducts = data.products.filter((product) => product.featured)
  return Response.json(featuredProducts)
}
