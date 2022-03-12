import { Test, TestingModule } from '@nestjs/testing';
import { FormUsersService } from './form-users.service';

describe('FormUsersService', () => {
  let service: FormUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormUsersService],
    }).compile();

    service = module.get<FormUsersService>(FormUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
