import { Component, Input, OnInit, Inject, Injectable } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RequestOptions } from "@angular/http";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { GrowlModule, Message } from 'primeng/primeng';
import { SelectItem, SelectItemGroup } from 'primeng/api';

import { Category, CategoryName, CategoryDescription } from '../../../../interfaces/category.module';
import { Language } from '../../../../interfaces/language.module';

@Component({
    selector: 'categories-add',
    templateUrl: './categories-add.component.html',
    styleUrls: ['./categories-add.component.css']
})


/** categories-add component*/
export class CategoriesAddComponent implements OnInit {

    languageID!: number;
    languages!: Language[] | null;
    filteredLanguages!: Language[] | null;
    selectedLanguages: Language[] = [];
    //selectedLanguage: Language[] = [];

    existingCategories!: Category[] | null;
    filteredCategories!: Category[] | null;
    parentCategory!: Category | null;

    newCategory: Category = { };

    uploadedFiles: any[] = [];
    uploadedFilesMsgs!: Message[];
    uploadURL: string = "";
    
    /** categories-add ctor */
    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string) {

    }

    ngOnInit() {

        var categoryURL = this.baseUrl + "API/Admin/Categories/Index";

        this.uploadURL = this.baseUrl + "API/Admin/Categories/UploadPictures";

        this.http.get<Category[]>(categoryURL).subscribe(result => {
            console.log(result);
            this.existingCategories = result;
            //this.parentSelectItems = this.existingCategories.map(x => { return { value: x!.Names![0].Name, label: x!.Names![0].Name } });
        }, error => console.error(error));

        var languageURL = this.baseUrl + "API/Common/Languages/GetAll";

        this.http.get<Language[]>(languageURL).subscribe(result => {
            this.languages = result;

            for (let i = 0; i < result.length; i++) {
                if (result[i].Name == "English") {
                    this.languageID = result![i].LanguageID!;
                    break;
                }
            }

            if (this.languageID > 0) {
                this.selectedLanguages!.push(this.languages![this.languageID]);
                this.languageID++;
            }
            
            //this.languagesSelectItems = this.languages.map(x => { return { label: x!.Name, value: x!.Name } });
        }, error => console.error(error));
    }

    AddLanguage(event: any) {
        this.selectedLanguages!.push(this.languages![this.languageID]);
        //this.selectedLanguage!.push(this.languages![this.languageID]);
        this.languageID++;
    }

    DeleteLanguage(event: Language) {
        let index: number = -1;
        
        for (let i = 0; i < this.selectedLanguages!.length; i++) {
            if (this.selectedLanguages![i].LanguageID == event.LanguageID) {
                index = i;
                break;
            }
        }

        if (index >= 0) {
            this.selectedLanguages!.splice(index, 1);
        }

        index = -1;
        if (this.newCategory!.Names != undefined && this.newCategory!.Names!.length > 0) {
            for (let i = 0; i < this.newCategory!.Names!.length; i++) {
                if (this.newCategory!.Names![i].Language!.LanguageID == event.LanguageID) {
                    index = i; 
                    break;
                }
            }
        }

        if (index > 0) {
            this.newCategory!.Names!.splice(index, 1);
        }

        index = -1;
        if (this.newCategory!.Descriptions != undefined && this.newCategory!.Descriptions!.length > 0) {
            for (let i = 0; i < this.newCategory!.Descriptions!.length; i++) {
                if (this.newCategory!.Descriptions![i].Language!.LanguageID == event.LanguageID) {
                    index = i;
                    break;
                }
            }
        }

        if (index > 0) {
            this.newCategory!.Descriptions!.splice(index, 1);
        }
        
    }


    getAvailableLanguages(language: Language) {

        let availLangs: Language[] = [];

        for (let j = 0; j < this.languages!.length; j++) {
            for (let i = 0; i < this.selectedLanguages!.length; i++) {
                if (this.languages![j].LanguageID != this.selectedLanguages![i].LanguageID) {
                    availLangs.push(this.languages![j]);
                    break;
                }
            }
        }

        return availLangs;
    }

    setParent(event: any) {
        this.newCategory!.Parent = this.parentCategory!;
    }

    UpdateLanguage(event: any) {
        let index = -1;

        for (let i = 0; i < this.selectedLanguages!.length; i++) {
            if (this.selectedLanguages![i].LanguageID == event.id) {
                index = i;
                break;
            }
        }

        if (index >= 0) {
            this.selectedLanguages[index] = event.e;
        }
    }

    onUpdate(category: Category) {

        //Name
        if (this.newCategory!.Names == null && category!.Names != null) {
            this.newCategory!.Names = [];
            this.newCategory!.Names!.push(category!.Names![0]);
        }
        else if (this.newCategory!.Names != null && category!.Names != null) {
            var nameExists = false;

            for (let i = 0; i < this.newCategory!.Names!.length; i++) {
                if (this.newCategory!.Names![i].Language!.LanguageID == category!.Names![0].Language!.LanguageID) {
                    this.newCategory!.Names![i] = category!.Names![0];
                    nameExists = true;
                }
            }

            if (!nameExists) {
                this.newCategory!.Names!.push(category!.Names![0]);
            }

        }

        //Descriptions
        if (this.newCategory!.Descriptions == null && category!.Descriptions != null) {
            this.newCategory!.Descriptions = [];
            this.newCategory!.Descriptions!.push(category!.Descriptions![0]);
        }
        else if (this.newCategory!.Descriptions != null && category!.Descriptions != null) {
            var descExists = false;

            for (let i = 0; i < this.newCategory!.Descriptions!.length; i++) {
                if (this.newCategory!.Descriptions![i].Language!.LanguageID == category!.Descriptions![0].Language!.LanguageID) {
                    descExists = true;
                    this.newCategory!.Descriptions![i] = category!.Descriptions![0];
                }
            }

            if (!descExists) {
                this.newCategory!.Descriptions!.push(category!.Descriptions![0]);
            }
        }

    }

    nameContainsLanguage(language: Language) {
        for (let i = 0; i < this.newCategory!.Names!.length; i++) {
            if (this.newCategory!.Names![i].Language!.Name == language.Name) {
                return true;
            }
        }

        return false;
    }

    saveCategory(event: any) {
        let url = this.baseUrl + "API/Admin/Categories/Create";
        const headers = new HttpHeaders().set('content-type', 'application/json');
        console.log(JSON.stringify(this.newCategory));
        return this.http.put<Category>(url, JSON.stringify(this.newCategory), { headers }).subscribe(res => console.log(res));
    }

    DescContainsLanguage(language: Language) {
        for (let i = 0; i < this.newCategory!.Descriptions!.length; i++) {
            if (this.newCategory!.Descriptions![i].Language!.Name == language.Name) {
                return true;
            }
        }

        return false;
    }

    getCategoryName(category: Category) {
        if (category != undefined) {
            for (let i = 0; i < category!.Names!.length; i++) {
                if (category!.Names![i].Language != null && category!.Names![i].Language!.Name == "English") {
                    category!.DisplayName = category!.Names![i].Name;
                    return category!.Names![i].Name;
                }
            }
        }
        return "N/A";
    }


    filterParent(event: any) {
        this.filteredCategories = [];
        for (let i = 0; i < this.existingCategories!.length; i++) {
            let category = this.existingCategories![i];
            for (let j = 0; category!.Names != null && j < category!.Names!.length; j++) { 
                if (category!.Names![j].Language!.Name == "English" && category!.Names![j].Name!.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                    this.filteredCategories.push(category);
                }
            }
        }
    }
    

    onUpload(event: any) {

        this.newCategory!.Images = [];

        for (let file of event.files) {
            this.uploadedFiles.push(file);
            this.newCategory!.Images!.push({ Path1: "dist/Assets/Images/Categories/" + file.name });
        }

        this.uploadedFilesMsgs = [];
        this.uploadedFilesMsgs.push({ severity: 'info', summary: 'Files Uploaded', detail: '' });

        console.log(this.newCategory);
    }

}
