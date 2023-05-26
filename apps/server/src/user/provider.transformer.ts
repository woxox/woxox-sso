import { Provider, Shared } from '@woxox-sso/proto';
import { ValueTransformer } from 'typeorm';

import { Logger } from '@nestjs/common';

export class ProviderTransformer implements ValueTransformer {
  logger = new Logger(ProviderTransformer.name);

  to(entityValue: Provider) {
    return Shared.providerToString(entityValue);
  }
  from(databaseValue: string) {
    return Shared.stringToProvider(databaseValue);
  }
}
