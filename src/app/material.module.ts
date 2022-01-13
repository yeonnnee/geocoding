import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule ({
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MaterialModule { }