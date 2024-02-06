import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import { Product } from './entities/product.entity';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productService: ProductsService, //
  ) {}
  @Query(() => [Product])
  fetchProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ): Promise<Product> {
    return this.productService.findOne({ productId });
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    // 브라우저에 결과 보내주는 2가지 방법
    // 1. 등록된 내용이 담긴 객체를 그대로 브라우저에 돌려보내주기
    return this.productService.create({ createProductInput });

    // 2. 결과메시지만 간단히 보내주기
    // return "정상적으로 상품이 등록되었습니다,";
  }
}
