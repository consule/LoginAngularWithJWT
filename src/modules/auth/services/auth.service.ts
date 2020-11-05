import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import jwt_decode from 'jwt-decode';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    getAuth$(): Observable<{}> {
        return of({});
    }

    async login(user: any) {
        const result = await this.http
            .post<any>(`${environment.api}/usuario/login`, user)
            .toPromise();
        if (result && result.token) {
            window.localStorage.setItem('id', result.id);
            window.localStorage.setItem('usuario', result.usuario);
            window.localStorage.setItem('nomeCompleto', result.nomeCompleto);
            window.localStorage.setItem('token', result.token);

            return true;
        }
        return false;
    }

    getAuthorizationToken() {
        const token = window.localStorage.getItem('token');

        return token;
    }

    getTokenExpirationDate(token: string): Date {
        const decoded: any = jwt_decode(token);

        if (decoded.exp === undefined) {
            return null;
        }

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if (!token) {
            return true;
        }
        const date = this.getTokenExpirationDate(token);
        if (date === undefined) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf());
    }

    isUserLoggedIn() {
        const token = this.getAuthorizationToken();
        if (!token) {
            return false;
        } else if (this.isTokenExpired(token)) {
            return false;
        }
        return true;
    }
}
