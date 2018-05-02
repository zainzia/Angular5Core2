import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { TestComponent } from './components/test/test.component';
import { CategoriesIndexComponent } from './components/Admin/categories/categories-index/categories-index.component';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { CategoriesAddComponent } from './components/Admin/categories/categories-add/categories-add.component';
import { CategoriesAddDescriptionComponent } from './components/Admin/categories/categories-add-description/categories-add-description.component';
import { CategoriesViewComponent } from './components/Admin/categories/categories-view/categories-view.component';


import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule, ConfirmDialogModule } from 'primeng/primeng';
import { DataTableModule, DialogModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataScrollerModule } from 'primeng/datascroller';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/primeng';
import { GrowlModule, Message } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/fileupload';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        TestComponent,
        CategoriesIndexComponent,
        CategoriesAddComponent,
        CategoriesAddDescriptionComponent,
        CategoriesViewComponent,
        AdminDashboardComponent
    ],
    imports: [
        CommonModule,
        AutoCompleteModule,
        HttpClientModule,
        FormsModule,
        ConfirmDialogModule,
        InputTextModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        CardModule,
        AccordionModule,
        SharedModule,
        PanelModule,
        SplitButtonModule,
        GrowlModule,
        ButtonModule,
        DataViewModule,
        TableModule,
        DataTableModule,
        FileUploadModule,
        FieldsetModule,
        DropdownModule,
        DataScrollerModule,
        DialogModule,
        RadioButtonModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: CategoriesIndexComponent },
            {
                path: 'Admin',
                children: [
                    { path: '', redirectTo: 'Index', pathMatch:'full' },
                    { path: 'Index', component: AdminDashboardComponent },
                    {
                        path: 'Categories',
                        children: [
                            { path: '', redirectTo: 'Index', pathMatch: 'full' },
                            { path: 'Index', component: CategoriesIndexComponent },
                            { path: 'Add', component: CategoriesAddComponent },
                            { path: 'Edit/:id', component: CategoriesViewComponent },
                            { path: 'View/:id', component: CategoriesViewComponent },
                            { path: '**', redirectTo: 'Index', pathMatch: 'full' }
                        ]
                    },
                    { path: '**', redirectTo: 'Index' }
                ]
            },
            { path: 'test', component: TestComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
