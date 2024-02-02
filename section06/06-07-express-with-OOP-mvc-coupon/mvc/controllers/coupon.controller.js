import { CashService } from "./services/cash.service.js";

export class CouponController {
  buyCoupon = (req, res) => {
    // 1. 가진돈 검증하는 코드
    const CashService = new CashService();
    const hasMoney = CashService.checkValue();

    // 2. 상품권 구매하는 코드
    if (hasMoney) {
      res.send("상품권 구매 완료!!");
    }
  };
}
