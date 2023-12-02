import { Component } from "react";

export interface JobDetailData {
    id: number;
    name: string;
    budget: number;
    information: string;
    categoryName: any[];
    typeOfEmployee: string;
    jobLevel: string;
    postDate: string;
    dueDate: string;
    status: string;
    imgUrl: string;
    client: {
        name: string;
        avatarUrl: string;
    };
}

export interface Category {
    id: number,
    name: string
}

export interface Level {
    id: number,
    name: string
}

export interface WorkingType {
    id: number, 
    name: string
}

export interface Gender {
    id: number,
    name: string
}

export interface ProfessionalInfo {
  id: number;
  aboutMe: string;
  level: Level;
  workExperience: string;
  categories: Category;
  "working-type": WorkingType;
  skill: string;
}

export interface Introduction {
    id: number,
    fullName: string,
    gender: Gender,
    dateOfBirth: string,
    language: string,
    address: string
}