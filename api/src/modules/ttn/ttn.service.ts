import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'

@Injectable()
export class TtnService {
  constructor(private httpService: HttpService) {}

  fetchAll(): any {
    return this.httpService.get('http://3.1.189.234:8091/data/ttntest').toPromise()
  }

  sliceIntoChunks(items, chunkSize) {
    const response = []
    for (let i = 0; i < items.length; i += chunkSize) {
      const chunk = items.slice(i, i + chunkSize)
      response.push(chunk)
    }

    return response
  }

  max(items) {
    return Math.max(...items.map(o => o.data))
  }

  min(items) {
    return Math.min(...items.map(o => o.data))
  }

  average(items) {
    return items.reduce((a, b) => a + b.data, 0) / items.length;
  }
}
