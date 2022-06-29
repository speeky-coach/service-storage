import { NextFunction, Request, Response } from 'express';
// import { AuthenticatedRequest } from '../../../../framework/express/types';
import StorageApplication from '../../application/StorageApplication';
import { storageApplication } from '../storageApplication';
import ExpressDTOPresenter from '../../../framework/express/ExpressDTOPresenter';

class StorageController {
  private application: StorageApplication;

  constructor() {
    this.application = storageApplication;
  }

  public async uploadAudioFile(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      // const authenticatedRequest = request as AuthenticatedRequest;

      const userId = request.query.userId as string;
      const conversationId = request.query.conversationId as string;

      this.application.uploadAudioFile(request, userId, conversationId).on('finish', () => {
        const presenter = new ExpressDTOPresenter(response);

        presenter.returnEmpty();
      });
    } catch (error) {
      next(error);
    }
  }
}

export default StorageController;
