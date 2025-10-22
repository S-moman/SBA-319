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

router
  .route("/username/:username")
  .get(customerController.getCustByUserName)
  .delete(customerController.deleteCustByUserName);

router
  .route("/email/:email")
  .get(customerController.getCustByEmail)
  .delete(customerController.deleteCustByEmail)
  .patch(customerController.updateCustByEmail);

export default router;
