import { NextFunction, Request, Response } from 'express';
import { ExpressPresenter } from '@speeky/framework';
// import { AuthenticatedRequest } from '../../../../framework/express/types';
import StorageApplication from '../../application/StorageApplication';
import { storageApplication } from '../storageApplication';

class StorageController {
  private application: StorageApplication;

  constructor() {
    this.application = storageApplication;
  }

  public async uploadAudioFile(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      // const authenticatedRequest = request as AuthenticatedRequest;

      const userId = request.query.userId as string;
      const filename = request.query.filename as string;

      this.application.uploadAudioFile(request, userId, filename).on('finish', () => {
        const presenter = new ExpressPresenter(response);

        presenter.returnEmpty();
      });
    } catch (error) {
      next(error);
    }
  }
}

export default StorageController;
