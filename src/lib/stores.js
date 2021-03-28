import { writable } from 'svelte/store';

export const user = writable({
  name: 'Naitian',
  email: 'naitian@umich.edu',
  trackers: [
    { id: 'id1', name: 'Bike 1' },
    { id: 'id2', name: 'Elvis' }
  ]
});

const faketracker1 = [
  { timestamp: 1616899388, lat: 38.039722, lng: -78.510702 },
  { timestamp: 1616899528, lat: 38.038995, lng: -78.511153 },
  { timestamp: 1616899664, lat: 38.037187, lng: -78.51066 },
  { timestamp: 1616899690, lat: 38.036726, lng: -78.514392 },
  { timestamp: 1616899711, lat: 38.032096, lng: -78.514688 },
  { timestamp: 1616899732, lat: 38.029932, lng: -78.516062 },
  { timestamp: 1616899753, lat: 38.030674, lng: -78.520585 },
  { timestamp: 1616899788, lat: 38.026957, lng: -78.521345 },
  { timestamp: 1616899799, lat: 38.025977, lng: -78.515204 },
  { timestamp: 1616899817, lat: 38.039836, lng: -78.506621 },
  { timestamp: 1616899839, lat: 38.039498, lng: -78.50164 },
  { timestamp: 1616899854, lat: 38.040478, lng: -78.497216 },
  { timestamp: 1616899890, lat: 38.037605, lng: -78.489315 },
  { timestamp: 1616899950, lat: 38.032974, lng: -78.483217 },
  { timestamp: 1616899999, lat: 38.030912, lng: -78.478592 },
  { timestamp: 1616900008, lat: 38.029898, lng: -78.475071 },
  { timestamp: 1616900062, lat: 38.028377, lng: -78.476402 },
  { timestamp: 1616900109, lat: 38.024557, lng: -78.478982 },
  { timestamp: 1616900300, lat: 38.022968, lng: -78.484522 },
  { timestamp: 1616900333, lat: 38.02574, lng: -78.488644 }
];
export const trackers = writable([{
  id: "id1",
  name: "Bike 1",
  data: faketracker1
}])

