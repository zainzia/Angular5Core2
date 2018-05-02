import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { Menubar, MenuItem } from 'primeng/primeng';

import { CategoryName, CategoryDescription, CategoryImage, Category } from '../../../../interfaces/category.module';

@Component({
    selector: 'categories-view',
    templateUrl: './categories-view.component.html',
    styleUrls: ['./categories-view.component.css']
})
/** categories-view component*/
export class CategoriesViewComponent implements OnInit {

    category!: Category | null;

    /** categories-view ctor */
    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string) {

        this.category = <Category>{};

        var id = +this.activatedRoute.snapshot.params["id"];
        if (id) {
            var url = this.baseUrl + "API/Admin/Categories/Details/" + id;

            this.http.get<Category>(url).subscribe(result => {
                this.category = result;
                console.log(result);
            }, error => console.error(error));
        }
    }


    ngOnInit() {

    }

    getCategoryName() {
        if (this.category != undefined && this.category!.Names != undefined) {
            for (let i = 0; i < this.category!.Names!.length; i++) {
                if (this.category!.Names![i].Language!.Name == "English") {
                    return this.category!.Names![i].Name;
                }
            }
        }
        return "N/A";
    }

    getParentName() {
        if (this.category != undefined && this.category!.Parent != undefined)
        for (let i = 0; i < this.category!.Parent!.Names!.length; i++) {
            if (this.category!.Parent!.Names![i].Language!.Name == "English") {
                return this.category!.Parent!.Names![i].Name;
            }
        }

        return "N/A";
    }

    getImage(image: CategoryImage) {

    }

    DeleteAllNames() {

    }

    DeleteName(name: CategoryName) {

    }

    DeleteAllDescriptions() {

    }

    DeleteDescription(description: CategoryDescription) {

    }

    DeleteAllImages() {

    }

    DeleteImagesRow(image: CategoryImage) {

    }
}