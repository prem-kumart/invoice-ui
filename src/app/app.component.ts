import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceListComponent } from "./invoice-list/invoice-list.component";
import { NewInvoiceComponent } from "./new-invoice/new-invoice.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoiceListComponent, NewInvoiceComponent,MatFormFieldModule,MatInputModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invoice-ui';
}
