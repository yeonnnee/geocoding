import { Component} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  statusItems: {status: string, desc: string}[] = [
    {status: 'valid', desc: '유효함'}, 
    {status: 'invalid', desc:'유효하지 않음'}, 
    {status: 'touched', desc:'유저에 의해 건드려짐'}, // 
    {status: 'dirty', desc:'유저에 의해 Input이 수정됨'},  // input field is modified by the user  
    {status: 'pristine', desc:'Input이 수정되었으나, 유저는 건드리지 않음'}, // input field is modified, the field is untouched by the user
    {status: 'pending', desc:'Async Validation'}, 
  ];

  createFormInfo: FormGroup = new FormGroup({});
  generatedForms: FormGroup = new FormGroup({forms: new FormArray([])});

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  // @ViewChild('button') button!: ElementRef;
  // clicks$:Observable<Event> = fromEvent(this.button?.nativeElement, 'click')
  
  // ngOnInit() {
  //   this.clicks$?.subscribe(x =>  console.log('!clicnekd'));
  // }

  buildForm() {
    this.createFormInfo = new FormGroup({
      formTitle: new FormControl(null),
      formType: new FormControl('input'),
      formInfoByType: new FormGroup({
        labelName: new FormControl(null),
        placeHolder: new FormControl(null),
        defaultValueTxt: new FormControl(null),
        valueTxt: new FormControl(null),
        isChecked: new FormControl(false),
        validation: new FormGroup({
          isRequired: new FormControl(false),
          isReadOnly: new FormControl(false),
          minLength: new FormControl(null),
          maxLength: new FormControl(null)
        })
      })
    });
  }

  get forms() {
    return this.generatedForms.get('forms') as FormArray;
  }
  get formInfoByType() {
    const formInfoByType = this.createFormInfo.get('formInfoByType') as FormGroup;
    return formInfoByType;
  }

  get validationFormGroup() {
    return this.formInfoByType.get('validation') as FormGroup;
  }

  selectFormTypeAsInput() {
    this.createFormInfo.get('formType')?.setValue('input');
  }

  selectFormTypeAsCheckBox() {
    this.createFormInfo.get('formType')?.setValue('checkbox');
  }

  selectFormTypeAsRadio() {
    this.createFormInfo.get('formType')?.setValue('radio');
  }

  checkRequired() {
    const target = document.getElementById('required-input') as HTMLInputElement;
    this.validationFormGroup.get('isRequired')?.setValue(!target.checked);
    target.checked = !target.checked;
  }

  checkReadOnly() {
    const target = document.getElementById('read-only-input') as HTMLInputElement;
    this.validationFormGroup.get('isReadOnly')?.setValue(!target.checked);
    target.checked = !target.checked;
  }

  passValidation() {
    if (!this.createFormInfo.get('formTitle')?.value) {
      this.createFormInfo.get('formTitle')?.setErrors({ 'required': true });
      return false;
    }
    if (!this.formInfoByType.get('labelName')?.value) {
      this.formInfoByType.get('labelName')?.setErrors({ 'required': true });
      return false;
    }

    return true;
  }

  // TODO: 입력한 양식대로 form 생성
  createForm() {
    if (!this.passValidation()) return;
    const form = this.createFormInfo;
    const forms = this.generatedForms.get('forms') as FormArray;
    forms.push(form);
    this.buildForm();
  }

  // TODO: 생성한 모든 폼 touched 상태로
  markAllAsTouched() {

  }

  // TODO: 생성한 모든 폼 disable 상태로
  disableForm() {
  
  }
  // TODO: 생성한 모든 폼 enable 상태로

  enableForm() {

  }

  // Form 삭제
  deleteForm(formIdx: number) {
    this.forms.removeAt(formIdx);
  }
}


