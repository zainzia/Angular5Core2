import { NgModule } from '@angular/core';
import { Language } from './language.module';


export interface Category {

    CategoryID?: number;
    Parent?: Category;
    Descriptions?: CategoryDescription[];
    Images?: CategoryImage[];
    Names?: CategoryName[];
    DateCreated?: Date;
    DisplayName?: string;
}


export interface CategoryDescription {

    CategoryDescriptionID?: number;
    Description1?: string;
    Description2?: string;
    Description3?: string;
    Language?: Language;

}


export interface CategoryImage {

    CategoryImageID?: number;
    Path1?: string;
    Path2?: string;
    Path3?: string;

}


export interface CategoryName {

    CategoryNameID?: number;
    Name?: string;
    Language?: Language;

}


export interface CategoryProperty {

    LanguageName?: string;
    Name?: string;
    Description1?: string;
    Description2?: string;
    Description3?: string;
    Parent?: Category;

}