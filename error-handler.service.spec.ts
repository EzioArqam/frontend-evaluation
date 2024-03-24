import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';

import { ScriptingErrorHandler } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let service: ScriptingErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideAnimations()]
    }).compileComponents();
    service = TestBed.inject(ScriptingErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
