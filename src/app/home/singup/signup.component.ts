import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { LowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/plataform-detector.service';


@Component({
  //selector // não usado porque o componente tem escopo de página, não será usado em nenhum outro local
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit {

  // pro angular enxergar o form
  signupForm: FormGroup;

  //pegando campo html com variável de template #emailInput
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNoteTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
    ) {}

  ngOnInit(): void {
    //Validadores síncronos
    this.signupForm = this.formBuilder.group({
        email: ['',
          [
            Validators.required,
            Validators.email
          ]
        ],
        fullName: ['',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(40)
          ]
        ],
        userName: ['',
          [
            Validators.required,
            LowerCaseValidator,
            Validators.minLength(2),
            Validators.maxLength(30)
          ],
          //validator assíncrono
          this.userNoteTakenValidatorService.checkUserNameTaken()
        ],
        password: ['',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(14)
          ]
        ]
      });

      //Dá foco no campo emailInput
      this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
        .signup(newUser)
        .subscribe(
            () => this.router.navigate(['']),
            err => console.log(err)
        );
  }
}
