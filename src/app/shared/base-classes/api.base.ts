import { Observable, of } from 'rxjs';
import { inject } from '@angular/core';
import { ToastController } from '@ionic/angular';

export class ApiBase {
  private toastController: ToastController = inject(ToastController);

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.showError(error.message);
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  async showError(
    message: string = 'Произошла ошибка при загрузке данных',
  ): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}
