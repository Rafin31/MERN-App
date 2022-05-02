import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { FaMarker } from 'react-icons/fa';

import 'leaflet/dist/leaflet.css';
import './Location.css'

const position = [23.739518725272625, 90.41501517535363]

const Locations = () => {
    return (
        <>
            <section className="location container-fluid">

                <div className="container location_container">
                    <div className="row g-3 justify-content-center align-items-center">
                        <div className="title__wrapper">
                            <p className="small__title">Where is our location? </p>
                            <p className="large__title">Location</p>

                        </div>

                        <div className="col-12 col-lg-4 col-md-4 " data-aos='fade-up'>
                            <p className="call_us">Call us at</p>
                            <p className="tel">+880 1860958541</p>
                        </div>
                        <div className="col-12 col-lg-8 col-md-8" data-aos='fade-up'>
                            <p className="call_us mb-3">Find us at </p>
                            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position} >

                                    <Popup>
                                        Our Location
                                    </Popup>
                                </Marker>
                            </MapContainer>

                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Locations;