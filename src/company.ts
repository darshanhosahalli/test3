import faker from 'faker';
import { Mappable } from './Mappable';

export class Company implements Mappable{
    private companyName: string;
    private catchPhrase: string;
    private location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    public getCompanyName():string {
        return this.companyName;
    }

    public getCatchPhrase():string {
        return this.catchPhrase;
    }

    public getLocation():{ lat: number; lng: number;} {
        return this.location;
    }
}