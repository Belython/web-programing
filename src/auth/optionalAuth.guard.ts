import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Error as STError } from 'supertokens-node';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';

@Injectable()
export class optionalAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = context.switchToHttp();

    let err = undefined;
    const resp = ctx.getResponse();
    await verifySession({ sessionRequired: false })(ctx.getRequest(), resp, (res) => {
      err = res;
    });

    if (resp.headersSent) {
      throw new STError({
        message: 'RESPONSE_SENT',
        type: 'RESPONSE_SENT',
      });
    }

    if (err) {
      throw err;
    }

    return true;
  }
}
