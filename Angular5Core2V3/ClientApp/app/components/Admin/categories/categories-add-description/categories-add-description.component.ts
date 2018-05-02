import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Category, CategoryName, CategoryDescription } from '../../../../interfaces/category.module';
import { Language } from '../../../../interfaces/language.module';

@Component({
    selector: 'categories-add-description',
    templateUrl: './categories-add-description.component.html',
    styleUrls: ['./categories-add-description.component.css']
})
/** categories-add-description component*/
export class CategoriesAddDescriptionComponent implements OnInit {

    @Input() languages!: Language[] | null;
    @Input() selectedLanguage!: Language;
    @Input() numLanguagesSelected!: number;
    @Output() onUpdateEvent = new EventEmitter<Category>();
    @Output() onDeleteLanguage = new EventEmitter<Language>();
    @Output() onUpdateLanguage = new EventEmitter();

    newCategory: Category = {};

    filteredLanguages!: Language[] | null;

    categoryName!: CategoryName | null;
    categoryDescription1!: CategoryDescription | null;
    categoryDescription2!: CategoryDescription | null;
    categoryDescription3!: CategoryDescription | null;


    /** categories-add-description ctor */
    constructor() {

    }

    ngOnInit() {
    }


    DeleteLanguage(event: any, language: Language) {
        this.onDeleteLanguage.emit(language);
    }

    filterLanguages(event: any) {
        this.filteredLanguages = [];
        for (let i = 0; i < this.languages!.length; i++) {
            let language = this.languages![i];
            if (language!.Name!.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredLanguages!.push(language);
            }
        }
    }


    setLanguage(event: any) {

        let lang = this.selectedLanguage;
        this.selectedLanguage = event;

        if (this.newCategory!.Names != null && this.newCategory!.Names != undefined) {
            this.newCategory!.Names![0].Language = event;
        }

        if (this.newCategory!.Descriptions != null && this.newCategory!.Descriptions != undefined) {
                this.newCategory!.Descriptions![0].Language = event;
        }

        this.onUpdateLanguage.emit({ e: event, id: lang!.LanguageID });
    }

    hideDeleteButton() {
        if (+this.numLanguagesSelected < 2) {
            return true;
        }


        return false;
    }


    getName(event: any) {

        if (this.newCategory!.Names == null || this.newCategory!.Names == undefined) {
            this.newCategory!.Names = [];
        }
        else if (this.newCategory!.Names!.length > 0) {
            this.newCategory!.Names!.pop();
        }

        let catName: CategoryName = { Name: event.target.value, Language: this.selectedLanguage };
        this.newCategory!.Names!.push(catName);

        this.onUpdateEvent.emit(this.newCategory);
    }

    getDescription1(event: any) {

        if (this.newCategory!.Descriptions! == null || this.newCategory!.Descriptions == undefined) {
            this.newCategory!.Descriptions = [];
            let catDesc: CategoryDescription = { Description1: event.target.value, Language: this.selectedLanguage };
            this.newCategory!.Descriptions!.push(catDesc);
        }
        else if (this.newCategory!.Descriptions!.length > 0) {
            this.newCategory!.Descriptions![0].Description1 = event.target.value;
        }
        
        this.onUpdateEvent.emit(this.newCategory);

    }

    getDescription2(event: any) {

        if (this.newCategory!.Descriptions! == null || this.newCategory!.Descriptions == undefined) {
            this.newCategory!.Descriptions = [];
            let catDesc: CategoryDescription = { Description2: event.target.value, Language: this.selectedLanguage };
            this.newCategory!.Descriptions!.push(catDesc);
        }
        else if (this.newCategory!.Descriptions!.length > 0) {
            this.newCategory!.Descriptions![0].Description2 = event.target.value;
        }

        this.onUpdateEvent.emit(this.newCategory);

    }

    getDescription3(event: any, language: Language) {
        if (this.newCategory!.Descriptions! == null || this.newCategory!.Descriptions == undefined) {
            this.newCategory!.Descriptions = [];
            let catDesc: CategoryDescription = { Description3: event.target.value, Language: this.selectedLanguage };
            this.newCategory!.Descriptions!.push(catDesc);
        }
        else if (this.newCategory!.Descriptions!.length > 0) {
            this.newCategory!.Descriptions![0].Description3 = event.target.value;
        }

        this.onUpdateEvent.emit(this.newCategory);
    }
}