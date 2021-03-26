import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { DataProyects } from '../model/data-proyects';

@Injectable({
  providedIn: 'root'
})
export class ProyectosNewStartapService {

  //url de la database 
  private dbPath = '/proyects';

  proyectsRef: AngularFireList<DataProyects>;

  constructor(private db: AngularFireDatabase) {
    this.proyectsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<DataProyects> {
    return this.proyectsRef;
  }

  getUno(i: string | number): AngularFireList<DataProyects> {
    return this.proyectsRef[i];
  }

  create(dataProyects: DataProyects): any {
    return this.proyectsRef.push(dataProyects);
  }

  update(key: string, value: any): Promise<void> {
    return this.proyectsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.proyectsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.proyectsRef.remove();
  }

  
}



