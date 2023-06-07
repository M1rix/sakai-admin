import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from 'custom/core/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from 'custom/core/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from 'custom/core/interceptor/error-handler.interceptor';
import { NotificationInterceptor } from 'custom/core/interceptor/notification.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthExpiredInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: NotificationInterceptor,
    multi: true,
  },
];
