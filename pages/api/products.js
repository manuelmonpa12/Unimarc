// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productsJson from '../../shared/mocks/products.json'

export default function handler(req, res) {
  res.status(200).json(productsJson)
}
