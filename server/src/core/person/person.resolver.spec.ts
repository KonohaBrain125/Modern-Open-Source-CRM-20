import { Test, TestingModule } from '@nestjs/testing';

import { AbilityFactory } from 'src/ability/ability.factory';
import { FileUploadService } from 'src/core/file/services/file-upload.service';

import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';

describe('PersonResolver', () => {
  let resolver: PersonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonResolver,
        {
          provide: PersonService,
          useValue: {},
        },
        {
          provide: AbilityFactory,
          useValue: {},
        },
        {
          provide: FileUploadService,
          useValue: {},
        },
      ],
    }).compile();

    resolver = module.get<PersonResolver>(PersonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
