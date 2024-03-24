import { ErrorHandler, Injectable } from '@angular/core';
import { NotifierService } from '../services/notifier/notifier.service';

@Injectable({
  providedIn: 'root'
})
export class ScriptingErrorHandler implements ErrorHandler {
  constructor(private notifierService: NotifierService){}
  handleError() {
    this.notifierService.showErrorSnackbar("Oops! Something gone wrong. Please wait while we fix the issue.")
  }
}
