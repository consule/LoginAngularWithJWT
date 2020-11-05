# Admin Angular com Autenticação JWT

Utilizei a template SB Admin Angular que é um tema Bootstrap open-source com angular 9.

Alterar o arquivo environment.ts com o link da sua API de login e estará tudo pronto. 


Formato que seu endpoint precisa retornar:

`
{
    "id": 1,
    "usuario": "hebert",
    "nomeCompleto": "Hebert Vianna",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImhlYmVydCIsIm5iZiI6MTYwNDU3NjA5OSwiZXhwIjoxNjA0NTc2MjE5LC"
}
`
