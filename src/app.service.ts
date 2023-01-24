import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
  async getHello() {
    this.cacheManager.set('cached_item', { key: 25 }, 60);
    const data = await this.cacheManager.get('cached_item'); // --> saves the data as key-value pair.
    this.cacheManager.del('cached_item'); //  --> deletes the data with key equal to 'cached_item'.
    // this.cacheManager.reset();  --> clears all data stored in redis.
    console.log(data);
    return data;
  }
}
