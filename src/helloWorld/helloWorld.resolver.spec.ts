import { Test } from '@nestjs/testing';
import { HelloWorldResolver } from './helloWorld.resolver';

describe('HelloWorldResolver', () => {
  let resolver: HelloWorldResolver;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HelloWorldResolver],
    }).compile();

    resolver = module.get<HelloWorldResolver>(HelloWorldResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should be return "hello world"', () => {
    expect(resolver.getHello()).toEqual('hello world');
  });
});
