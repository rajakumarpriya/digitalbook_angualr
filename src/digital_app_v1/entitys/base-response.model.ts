import { AuthorDetils } from "./athor.details.model";

export class BaseResponse {
    public statusCode: number | any;
    public statusMessage: string | any;
    public authorDetails: AuthorDetils |any;
}