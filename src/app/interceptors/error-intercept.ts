// import {
//   HttpEvent,
//   HttpHandler,
//   HttpRequest,
//   HttpErrorResponse,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

// export class ErrorIntercept implements HttpInterceptor {
//   intercept(
//       request: HttpRequest<any>,
//       next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//       return next.handle(request)
//           .pipe(
//               retry(1),
//               catchError((error: HttpErrorResponse) => {     

//                 console.log("Erro detectado pelo interceptor:");
//                 console.log(error);

//                 switch (error.status) {
//                     case 401:
//                         this.handle401();
//                         break;

//                     case 403:
//                         this.handle403();
//                         break;

//                     case 422:
//                         this.handle422(error);
//                         break;

//                     default:
//                         this.handleDefaultError(error);
//                 }

//                 return Observable.throw(error);
//               })
//           )
//   }
//     handle401() {
//       console.log("handle401")
//     }

//     handle403() {
//       console.log("handle403")
//     }

//     handleDefaultError(error) {
//       console.log("handleDefaultError",error)
//     }

//     handle422(error) {
//       console.log("handle422",error)
//     }

//     private listErros(list: any[]):string {
//         let s : string='';
//         for(var i=0;i<list.length;i++){
//             s+='<p><strong>'+list[i].fieldName+'</strong> '+list[i].message+'</p>';
//         }
//         return s;
//     }


// }

