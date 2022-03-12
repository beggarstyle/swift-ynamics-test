import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // constructor(private httpService: HttpService) {}

  async getHello() {
    return 'Hello, World'
    // return this.httpService.get('http://3.1.189.234:8091/data/ttntest', {
    //   headers: {
    //     'Accept': 'application/json'
    //   }
    // })
    // .pipe(
    //   map(response => response.data)
    // );
  }
  // /home/alex-pc/WorkSpace/swift-dynamics/app/views/layouts/default.hbs
  getViewName() {
    return 'layouts/default'
  }
}
