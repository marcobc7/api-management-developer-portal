import { HttpMethod } from "@paperbits/common/http";
import { XmlHttpRequestClient } from "@paperbits/common/http/xmlHttpRequestClient";
import  IStaticDataProvider  from "./IStaticDataProvider";

export class RuntimeStaticDataProvider implements IStaticDataProvider {
    private readonly httpClient: XmlHttpRequestClient;
    constructor() {
        this.httpClient = new XmlHttpRequestClient();
    }
    public getStaticData(objectType: string): Promise<any> {
        const path = objectType == "defaultStaticData.json" ? "/tests/mocks/defaultStaticData.json" : "/editors/templates/default.json";

        return new Promise<any>(async (resolve, reject) => {
            const result = await this.httpClient.send({
                method: HttpMethod.get,
                url: path,
                headers: [],
                body: {}
            });
            resolve(result.toObject());
        });
    }
}