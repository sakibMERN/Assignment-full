const Sale = require('../models/salesModel');

// Calculate total revenue
exports.getTotalRevenue = async (req, res) => {
  try {
    const result = await Sale.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } }
        }
      }
    ]);
    res.json({ totalRevenue: result[0].totalRevenue });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Calculate total quantity sold by product
exports.getQuantityByProduct = async (req, res) => {
  try {
    const result = await Sale.aggregate([
      {
        $group: {
          _id: '$product',
          totalQuantity: { $sum: '$quantity' }
        }
      }
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Retrieve the top 5 products with the highest total revenue
exports.getTopProducts = async (req, res) => {
  try {
    const result = await Sale.aggregate([
      {
        $group: {
          _id: '$product',
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } }
        }
      },
      {
        $sort: { totalRevenue: -1 }
      },
      {
        $limit: 5
      }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Calculate average price of products sold
exports.getAveragePrice = async (req, res) => {
  try {
    const result = await Sale.aggregate([
      {
        $group: {
          _id: null,
          averagePrice: { $avg: '$price' }
        }
      }
    ]);
    res.json({ averagePrice: result[0].averagePrice });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Calculate total revenue by month
exports.getRevenueByMonth = async (req, res) => {
  try {
    const result = await Sale.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' }
          },
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } }
        }
      },
      {
        $sort: {
          '_id.year': 1,
          '_id.month': 1
        }
      }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Find product with highest quantity sold on a single day
exports.getHighestQuantitySold = async (req, res) => {
  try {
    const result = await Sale.aggregate([
      {
        $group: {
          _id: '$date',
          highestQuantitySold: { $max: '$quantity' }
        }
      },
      {
        $sort: { highestQuantitySold: -1 }
      },
      {
        $limit: 1
      },
      {
        $lookup: {
          from: 'sales',
          let: { maxQuantity: '$highestQuantitySold', date: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$quantity', '$$maxQuantity'] },
                    { $eq: ['$date', '$$date'] }
                  ]
                }
              }
            },
            {
              $project: {
                _id: 0,
                product: 1
              }
            }
          ],
          as: 'productDetails'
        }
      },
      {
        $unwind: '$productDetails'
      }
    ]);

    if (result.length === 0) {
      return res.status(404).json({ error: 'No sales data found' });
    }

    res.json(result[0].productDetails);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Calculate total salary expense by department
exports.getDepartmentSalaryExpense = async (req, res) => {
  try {
    const result = await Sale.aggregate([
      {
        $group: {
          _id: '$department',
          totalSalaryExpense: { $sum: { $multiply: ['$quantity', '$price'] } }
        }
      }
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};








