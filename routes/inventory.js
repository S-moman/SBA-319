import e from "express";
const router = e.Router();
import inventoryController from "../controller/inventory.js";

router.route("/seed").get(inventoryController.getSeedData);

router
  .route("/")
  .get(inventoryController.getInventory)
  .post(inventoryController.createInventory);

router
  .route("/:id")
  .get(inventoryController.getInventoryById)
  .delete(inventoryController.deleteInventoryById)
  .patch(inventoryController.updateInventoryInfo);


export default router;
