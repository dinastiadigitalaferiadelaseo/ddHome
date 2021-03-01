import { TestBed } from '@angular/core/testing';

import { ProyectosNewStartapService } from './proyectos-new-startap.service';

describe('ProyectosNewStartapService', () => {
  let service: ProyectosNewStartapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectosNewStartapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
