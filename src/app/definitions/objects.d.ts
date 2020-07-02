/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.19.577 on 2020-02-17 10:44:24.

export interface TestKeyDTO {
    TestDocument: TestDocumentDTO;
    id: number;
    TestNr: string;
    type: string;
    contractId: number;
}

export interface TestDocument {
    id: number;
    type: string;
    name: string;
}

export interface TestDocumentDTO {
    id: number;
    type: string;
    name: string;
}
