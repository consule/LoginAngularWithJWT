import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    login = {
        username: '',
        password: '',
    };
    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit() {}

    async onSubmit() {
        try {
            const result = await this.authService.login(this.login);
            console.log(`Login Efetuado com sucesso ${result}`);
            this.router.navigate(['']);
        } catch (error) {
            console.log(error);
        }
    }
}
