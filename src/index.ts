import { User } from './User';
import { Company } from './company';
import { CustomMap } from './Map';

const user = new User();
const company = new Company();
const customMap = new CustomMap();

customMap.addMarker(user);
customMap.addMarker(company);

 