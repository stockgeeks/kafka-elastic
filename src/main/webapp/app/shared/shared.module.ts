import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { KafkaElasticSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [KafkaElasticSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [KafkaElasticSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KafkaElasticSharedModule {
  static forRoot() {
    return {
      ngModule: KafkaElasticSharedModule
    };
  }
}
