import {
  IonCol,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonModal,
  useIonViewWillEnter
} from '@ionic/react';
import { useRef, useState } from 'react';

import { GoogleMap } from '@capacitor/google-maps';
import { markers } from './data';
import { MarkerInfoWindow } from './MarkerInfoWindow';
import {Client} from "@googlemaps/google-maps-services-js";
import './map.css';

const MapG = () => {

  const [newMap, setNewMap] = useState(null);

  const client = new Client({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  
  const geocodeAddress = async (address) => {
    const response = await client.geocode({
      params: {
          address: address,
          key: process.env.REACT_APP_GOOGLE_API_KEY,
      },
    });    
    
    const results = response.data.results;
    if(results && results.length > 0) {
      return {
        lat: results[0].geometry.location.lat,
        lng: results[0].geometry.location.lng
      };
    } else {
      throw new Error('No results found');
    }
  };
  
  const searchAddress = async () => {
    const address = searchInputRef.current.value;
    if (!address) return;
  
    try {
      const { lat, lng } = await geocodeAddress(address);
      console.log('geocoded coordinates', lat, lng);
  
      setMapConfig({
        zoom: 15,
        center: {
          lat: lat,
          lng: lng
        }
      });
  
      const marker = {
        lat: lat,
        lng: lng,
        title: address
      };
      console.log('marker', marker);
      console.log('newMap', newMap);
      console.log('mapConfig', mapConfig);
  
      addMapMarker(marker);
      setSelectedMarker(marker);
  
      if (newMap) {
        try {
          await newMap.setOnCameraMoveStartedListener({ // or newMap.moveCamera
            target: {
              lat: lat,
              lng: lng
            },
            zoom: 3,
          });
        } catch (err) {
          console.error('Error with animateCamera:', err);
          // Fallback to setCenter and setZoom
          newMap.setCenter({lat: lat, lng: lng});
          newMap.setZoom(3);
        }
      } else {
        console.error('newMap is not defined');
      }
  
    } catch (error) {
      console.error('Error getting geocoded address:', error);
    }
  };
  
  




    const mapRef = useRef(null);
    const searchInputRef = useRef(null);
  
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [present, dismiss] = useIonModal(MarkerInfoWindow, {
      marker: selectedMarker
    });
  
    const modalOptions = {
      initialBreakpoint: 0.4,
      breakpoints: [0, 0.4],
      backdropBreakpoint: 0,
      onDidDismiss: () => dismiss()
    };
  
    const [mapConfig, setMapConfig] = useState({
      zoom: 7,
      center: {
        lat: markers[0].lat,
        lng: markers[0].lng
      }
    });
  
    const markerClick = (marker) => {
      setSelectedMarker(markers.filter((m) => m.lat === marker.latitude && m.lng === marker.longitude)[0]);
      present(modalOptions);
    };
  
    const addMapMarker = async (marker) => {
      if (newMap) {
        await newMap.addMarker({
          coordinate: {
            lat: marker.lat,
            lng: marker.lng
          },
          title: marker.title
        });
      }
    };
  
    const addMapMarkers = () => markers.forEach((marker) => addMapMarker(marker));
  
    const createMap = async () => {
      if (!mapRef.current) return;
  
      const map = await GoogleMap.create({
        id: 'google-map',
        element: mapRef.current,
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        config: mapConfig
      });
  
      map.setOnMarkerClickListener((marker) => markerClick(marker));
      addMapMarkers();
  
      setNewMap(map);
    };
  
    useIonViewWillEnter(() => createMap());
  
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Capacitor Google Map</IonTitle>
          </IonToolbar>
        </IonHeader>
        <>
          <IonRow>
            <IonCol size="12">
              <capacitor-google-map
                ref={mapRef}
                id="map"
                style={{
                  display: 'inline-block',
                  width: 375,
                  height: 500
                }}
              ></capacitor-google-map>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <input ref={searchInputRef} type="text" placeholder="Enter your address" />
              <button onClick={searchAddress}>Search</button>
            </IonCol>
          </IonRow>
        </>
      </>
    );
  };
  
export default MapG;
