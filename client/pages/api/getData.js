import data from '../../testData/data.json';

export default function handler(req, res) {
  res.status(200).json(data)
}
