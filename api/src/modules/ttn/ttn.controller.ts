import { Controller, Get } from '@nestjs/common';
import { TtnService } from './ttn.service'

@Controller('ttn')
export class TtnController {
  constructor(private readonly ttnService: TtnService) {}

  @Get('/')
  public async fetch() {
    const items = await this.ttnService.fetchAll().then(res => res.data)
    await items.sort(function(a, b) {
      return Date.parse(b.timestamp) - Date.parse(a.timestamp)
    })

    const chunk = await items.slice(0, 200)
    const average = await this.ttnService.average(items)
    const predictOne = items.slice(0, 2)
    const predictSevent = items.slice(0, 7)
      // .reduce((previousValue, currentValue) => {
      // })

    return {
      min: this.ttnService.min(items),
      max: this.ttnService.max(items),
      avg: average,
      data: chunk,
      predict_1: '',
      predict_7: '',
    }
  }
}
