import { ChangeDetectionStrategy, Component, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ItemComponent } from "./item/item.component";
import { itemDirective } from './item.directive';



@Component({
  selector: 'app-new-invoice',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule, FormsModule,MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatDatepickerModule, ItemComponent,itemDirective],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewInvoiceComponent {


  @ViewChild(itemDirective) myItemDirective?:itemDirective;

  invoice_form =  new FormGroup({

        bill_from : new FormGroup({
            streetAddress : new FormControl('',{validators:[Validators.required]}),
            city : new FormControl('',{validators:[Validators.required]}),
            postalcode: new FormControl('',{validators:[Validators.required]}),
            country : new FormControl('',{validators:[Validators.required]})
        }),
        bill_to : new FormGroup({
            clientName:new FormControl('',{validators:[Validators.required]}),
            clientEmail:new FormControl('',{validators:[Validators.required,Validators.email]}),
            streetAddress : new FormControl('',{validators:[Validators.required]}),
            city : new FormControl('',{validators:[Validators.required]}),
            postalcode: new FormControl('',{validators:[Validators.required]}),
            country : new FormControl('',{validators:[Validators.required]})
        }),
        invoice_details : new FormGroup({
            invoiceDate : new FormControl('',{validators:[Validators.required]}),
            paymentTerms : new FormControl<'Net 1 day'| 'Net 7 days' | 'Net 14 days' | 'Net 30 days'>('Net 1 day',{validators:[Validators.required]}),
        }),
        projectDescription : new FormControl('',{validators:[Validators.required]}),
        
  })


  addNewItemForm(){
    this.myItemDirective?.addItemFormComponent();
  }

  onSubmit(){
    console.log(this.invoice_form)
  }

  submitItems(){
    console.log("ItemsAlsoSubmitted");
  }

}
