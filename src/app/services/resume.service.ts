import { Injectable } from "@angular/core";
import { Resume } from "../models/resume.model";


@Injectable({
    providedIn: 'root'
})
export class ResumeService {

    resume:Resume = null;

}