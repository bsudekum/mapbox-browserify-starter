require('mapbox.js');

L.mapbox.accessToken = 'pk.eyJ1IjoiYm9iYnlzdWQiLCJhIjoiTi16MElIUSJ9.Clrqck--7WmHeqqvtFdYig';

var map = L.mapbox.map('map', 'examples.map-i86nkdio')
    .setView([40, -74.50], 9);
