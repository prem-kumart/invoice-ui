import { Component, ComponentRef, Directive, EmbeddedViewRef, inject, TemplateRef, ViewContainerRef } from "@angular/core";
import { ItemComponent } from "./item/item.component";

@Directive({
    selector : '[itemDirective]',
    standalone: true,
})
export class itemDirective {

    //private templateRef = inject(TemplateRef);
    private viewContainerRef = inject(ViewContainerRef);
    
    //List of Inserted View Items : 
    private insertedItemViews: ComponentRef<ItemComponent>[] = [];

    addItemFormComponent(){

        const viewRef = this.viewContainerRef.createComponent(ItemComponent);
        this.insertedItemViews.push(viewRef);
        console.log(this.insertedItemViews);

    }

}