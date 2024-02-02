import { CashService, CashService } from "./services/cash.service.js";
import { ProductService, ProductService } from "./services/cash.service.js";

export class ProductController {
  buyProduct = (req, res) => {
    // 1. 가진돈 검증하는 코드 (대략 10줄 => 2줄)
    const CashService = new CashService();
    const hasMoney = CashService.checkValue();

    // 2. 판매여부 검증하는 코드 (대략 10줄 => 2줄)
    const ProductService = new ProductService();
    const isSoldout = ProductService.checkSoldout();

    //3. 상품 구매하는 코드
    if (hasMoney && !isSoldout) {
      res.send("상품 구매 완료!!");
    }
  };

  refundProduct = (req, res) => {
    // 1. 판매여부 검증하는 코드 (대략 10줄 => 2줄)
    const ProductService = new ProductService();
    const isSoldout = ProductService.checkSoldout();

    // 2. 상품 환불하는 코드
    if (isSoldout) {
      res.send("상품 환불 완료!!");
    }
  };
}
