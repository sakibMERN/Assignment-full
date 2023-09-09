app.get('/api/sales/total-revenue', async (req, res) => {
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
   });
   