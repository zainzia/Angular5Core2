import { Component, Input, OnInit, Inject, Injectable } from '@angular/core';
import { DataScrollerModule } from 'primeng/datascroller';
import { DataViewModule } from 'primeng/dataview';
import { Dropdown, SelectItem } from 'primeng/primeng';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Menubar, MenuItem } from 'primeng/primeng';


import { Category, CategoryName } from './../../../../interfaces/category.module';

@Component({
    selector: 'admin-categories-index',
    templateUrl: './categories-index.component.html',
    styleUrls: ['./categories-index.component.css']
})


export class CategoriesIndexComponent implements OnInit {

    categories!: Category[];
    categoriesAll!: Category[];
    selectedCategory!: Category | null;
    categoryActions!: MenuItem[] | null;

    displayDialog!: boolean;
    sortOptions!: SelectItem[];
    sortKey!: string;
    sortField!: string;
    sortOrder!: number;
    totalRecords!: number;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string) {

        var url = this.baseUrl + "API/Admin/Categories/Index";

        this.http.get<Category[]>(url).subscribe(result => {
            this.categories = result;
            this.categoriesAll = result;
            console.log(this.categories);
        }, error => console.error(error));
        
    }

    ngOnInit() {

        this.sortOptions = [
            { label: 'Name Asc', value: '!Name' },
            { label: 'Name Desc', value: 'Name' },
            { label: 'Newest First', value: '!DateCreated' },
            { label: 'Oldest First', value: 'DateCreated' },
        ];

    }

    addCategory() {
        this.router.navigate(["Admin/Categories/Add"]);
    }

    deleteCategory(category: Category) {
        if (confirm("Do you really want to delete this category?")) {
            var url = this.baseUrl + "API/Admin/Categories/" + category.CategoryID;

            this.http.delete(url).subscribe(result => {

                let index = -1;
                for (let i = 0; i < this.categories!.length; i++) {
                    if (this.categories![i].CategoryID == category.CategoryID) {
                        index = i;
                        break;
                    }
                }

                if (index > -1) {
                    this.categories!.splice(index, 1);
                }

                index = -1;
                for (let i = 0; i < this.categoriesAll!.length; i++) {
                    if (this.categoriesAll![i].CategoryID == category.CategoryID) {
                        index = i;
                        break;
                    }
                }

                if (index > -1) {
                    this.categoriesAll!.splice(index, 1);
                }

                }, error => console.log(error));
        }
    }

    viewCategory(category: Category) {
        this.router.navigate(["Admin/Categories/View", category.CategoryID]);
    }

    editCategory(category: Category) {
        this.router.navigate(["Admin/Categories/View", category.CategoryID], { queryParams: { Edit: "YES" } });
    }

    filter(value: string) {
        //this.categories = this.categoriesAll!.filter(cat => cat.Names!.forEach((element: CategoryName) => { if (element.Language == "English") { return element.Name!.indexOf(value) >= 0 } }))
        let tempCategories: Category[] = [];

        for (let i = 0; i < this.categoriesAll!.length; i++) {
            for (let j = 0; j < this.categoriesAll![i].Names!.length; j++) {
                if (this.categoriesAll![i].Names![j].Language!.Name == "English" && this.categoriesAll![i].Names![j].Name!.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                    tempCategories!.push(this.categoriesAll![i]);
                }
            }
        }

        this.categories = tempCategories;
    }

    getParentName(category: Category) {
        for (let i = 0; i < category!.Parent!.Names!.length; i++) {
            if (category!.Parent!.Names![i].Language!.Name == "English") {
                return category!.Parent!.Names![i].Name;
            }
        }

        return "N/A";
    }

    getCategoryName(category: Category) {
        for (let i = 0; i < category!.Names!.length; i++) {
            if (category!.Names![i].Language!.Name == "English") {
                return category!.Names![i].Name;
            }
        }

        return "N/A";
    }

    getDescription1(event: Event, category: Category) {
        for (let i = 0; i < category!.Descriptions!.length; i++) {
            if (category!.Descriptions![i].Language!.Name == "English") {
                return category!.Descriptions![i].Description1;
            }
        }

        return "N/A";
    }

    getDescription2(event: Event, category: Category) {
        for (let i = 0; i < category!.Descriptions!.length; i++) {
            if (category!.Descriptions![i].Language!.Name == "English") {
                return category!.Descriptions![i].Description2;
            }
        }

        return "N/A";
    }

    getDescription3(event: Event, category: Category) {
        for (let i = 0; i < category!.Descriptions!.length; i++) {
            if (category!.Descriptions![i].Language!.Name == "English") {
                return category!.Descriptions![i].Description3;
            }
        }

        return "N/A";
    }

    getImage(category: Category) {

        if (category!.Images!.length > 0) {
            for (let i = 0; i < category!.Images!.length; i++) {
                if (category!.Images![i].Path1 != null) {
                    return category!.Images![i].Path1;
                }
            }
        }

        return "dist/Assets/Images/Alphabets/Z.jpg";
    }

    onSortChange(event : any) {
        let value = event.value;

        if (value.indexOf("Name") >= 0) {
            this.sortField = "";

            if (value.indexOf("!") >= 0) {
                this.categories!.sort(function (categoryA: Category, categoryB: Category) {
                    for (let i = 0; i < categoryA!.Names!.length; i++) {
                        if (categoryA!.Names![i].Language!.Name == "English") {
                            for (let j = 0; j < categoryB!.Names!.length; j++) {
                                if (categoryB!.Names![j].Language!.Name == "English") {
                                    return (categoryA!.Names![i].Name! > categoryB!.Names![j].Name!) ? 1 : ((categoryB!.Names![j].Name! > categoryA!.Names![i].Name!) ? -1 : 0);
                                }
                            }
                        }
                    }
                    return 0;
                });
            }
            else {
                this.categories!.sort(function (categoryA: Category, categoryB: Category) {
                    for (let i = 0; i < categoryA!.Names!.length; i++) {
                        if (categoryA!.Names![i].Language!.Name == "English") {
                            for (let j = 0; j < categoryB!.Names!.length; j++) {
                                if (categoryB!.Names![j].Language!.Name == "English") {
                                    return (categoryA!.Names![i].Name! > categoryB!.Names![j].Name!) ? -1 : ((categoryB!.Names![j].Name! > categoryA!.Names![i].Name!) ? 1 : 0);
                                }
                            }
                        }
                    }
                    return 0;
                });
            }
        }

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
}