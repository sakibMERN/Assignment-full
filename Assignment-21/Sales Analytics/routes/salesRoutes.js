const express = require("express");
const salesController = require("../controllers/salesController")


const router = express.Router();

// Total revenue || GET
router.get("/total-revenue", salesController.getTotalRevenue);

// Quantity by product || GET
router.get("/quantity-by-product", salesController.getQuantityByProduct);

// Top product || GET
router.get("/top-products", salesController.getTopProducts);

// Average price || GET
router.get("/average-price", salesController.getAveragePrice);

// Revenue by month || GET
router.get("/revenue-by-month", salesController.getRevenueByMonth);

// Highest quantity sold || GET
router.get("/highest-quantity-sold", salesController.getHighestQuantitySold);

// Department Salary Expense || GET
router.get(
  "/department-salary-expense",
  salesController.getDepartmentSalaryExpense
);

module.exports = router;
