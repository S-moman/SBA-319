import e from "express";
const router = e.Router();
import transactionsController from "../controller/transactions.js";

router.route("/seed").get(transactionsController.getSeedData);
router
  .route("/")
  .get(transactionsController.getTransactions)
  .post(transactionsController.createTransaction);

router
  .route("/:id")
  .get(transactionsController.getTranById)
  .delete(transactionsController.deleteTranById);
//   .patch(transactionsController.updateCustInfo);



export default router;
