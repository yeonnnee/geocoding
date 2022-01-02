import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Output, Self } from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMsgComponent } from "src/components/common/error-message";

@Directive({
  // 해당 selector에 해당하는 템플릿 노드에 providing함
  selector: '[formControlName]'
})

export class ErrorDirective {
  @Output() errorRender = new EventEmitter<any>();

  constructor(
    // 동일 노드에 providing된 FormControl인스턴스 DI받기
    @Self()
      private el: ElementRef,
    private formControlName: FormControlName,
    private CFR: ComponentFactoryResolver
  ) {}
  ngOnInit() {
    // 인스턴스 상태 감시
    this.formControlName
      .control
      .statusChanges
      .subscribe(status => {
        if ('INVALID' === status) {
          // [유효성 검사 실패] 에러 데이터 뽑아서 컴포넌트 동적 삽입
          // this.formControlName.control.setErrors({msg:''})
          this.errorRender.emit(this.formControlName.control.errors);
          return;
        }
      });
  }
}