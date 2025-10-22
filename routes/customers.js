import e from "express";
const router = e.Router();
import customerController from "../controller/customers.js";

router.route("/seed").get(customerController.getSeedData);

router
  .route("/")
  .get(customerController.getCustomerInfo)
  .post(customerController.createCustomer);

router
  .route("/:id")
  .get(customerController.getCustById)
  .delete(customerController.deleteCustById)
  .patch(customerController.updateCustInfo);

export default router;
