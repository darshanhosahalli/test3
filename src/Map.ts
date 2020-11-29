import { Mappable } from './Mappable';

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor() {
        this.googleMap = new google.maps.Map(document.getElementById('map'), {
            zoom:1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappabel: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappabel.getLocation().lat,
                lng: mappabel.getLocation().lng,
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: 'Hi There!'
            });

            infoWindow.open(this.googleMap,marker);
        });
    }
}