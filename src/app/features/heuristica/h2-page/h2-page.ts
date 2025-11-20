import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderHeuristicaComponent } from '../components/header-heuristica/header-heuristica';

@Component({
  selector: 'app-h2-page',
  imports: [CommonModule, ReactiveFormsModule, HeaderHeuristicaComponent],
  templateUrl: './h2-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H2Page {
    lastOperation = signal('');
  
  executeOperation(action: string) {
    this.lastOperation.set(action);
  }
}
