import { UrlWithParsedQuery, parse } from "url";

export class Utils {

    public static parseUrl(url:string):UrlWithParsedQuery{
        if(!url){
            throw new Error('Empty url')
        }
        else return parse(url, true);
    }

    public static toUpperCase(args: string){
        return args.toUpperCase();
    }
}