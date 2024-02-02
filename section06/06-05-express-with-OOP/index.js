// const express = require('express') // 옛날방식 => commonjs
import express from "express"; // 요즘방식 => module
import { CashService, CashService } from "./cash.js";
import { ProductService, ProductService } from "./product.js";
const app = express();

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
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
});

// 상품 환불하기 API
app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 (대략 10줄 => 2줄)
  const ProductService = new ProductService();
  const isSoldout = ProductService.checkSoldout();

  // 2. 상품 환불하는 코드
  if (isSoldout) {
    res.send("상품 환불 완료!!");
  }
});

app.listen(3000);
