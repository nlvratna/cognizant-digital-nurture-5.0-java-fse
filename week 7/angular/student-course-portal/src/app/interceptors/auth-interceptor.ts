import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`[Auth Interceptor] Outgoing request to: ${req.url}`);

  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer MOCK_STUDENT_TOKEN_999`,
    },
  });

  return next(modifiedReq);
};
