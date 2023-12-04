import { Component } from "react";

interface JobContentProps {
  dataJob: {
    id?: number;
    name?: string;
    budget?: string;
    information?: string;
    category?: {
      id?: number;
      name?: string;
    };
    owner?: {
      username?: null | string;
      id?: number;
    };
    workingType?: {
      id?: number;
      name?: string;
    };
    imageUrl?: string;
    level?: {
      id?: number;
      name?: string;
    };
    createAt?: string;
    status?: string;
  };
}

export interface JobDetailData {
  id: number;
  name: string;
  budget: number;
  information: string;
  createAt?: string;
  category: {
    id: number;
    name: string;
  };
  workingType: {
    id: number;
    name: string;
  };
  level: {
    id: number;
    name: string;
  };
//   postDate: string;
//   dueDate: string;
  status: string;
  imageUrl?: string;
  owner: {
    id: number;
    fullName?: string;
    username?: string | null;
    imageUrl?: string | null;
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

export interface Application {
  jobId: number,
  profileId: number
}