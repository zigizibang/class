import { Injectable, Scope } from '@nestjs/common';

// 인젝션-스코프 => 싱글톤( new 한 번 ) 으로 할래?
// Request 스코프 ( 매 요청마다 new)로 할래?
// Transient 스코프 ( 매 주입마다 new)로 할래?

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  qqq(): string {
    return 'Hello World!';
  }
}
