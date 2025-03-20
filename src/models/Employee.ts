import { GroupDetail } from "./Group";

export type Employee = {
    id: number;
    name: string
    email: string;
}

export type EmployeeDetail = Employee & {
    groups: GroupDetail
}

export type ApiGetEmployees = {
    employee: Employee[]
}

export type ApiGetEmployee = EmployeeDetail 