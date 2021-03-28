<script charset="utf-8">
  import { browser } from '$app/env';
  import { onMount } from 'svelte';
  import { trackers } from '$lib/stores';
  import * as d3 from 'd3';
  let map;
  let mapEl;
  let L;
  let markerLayers;

  let tracker_values;
  trackers.subscribe((v) => {
    tracker_values = v;
  });

  $: opacityScale = d3
    .scaleLinear()
    .domain(d3.extent(tracker_values[0].data.map((d) => d.timestamp)))
    .range([0.2, 1]);

  $: avg_lat = d3.mean(tracker_values[0].data.map((d) => d.lat));
  $: avg_lng = d3.mean(tracker_values[0].data.map((d) => d.lng));
  $: map?.setView([avg_lat, avg_lng], 14);

  $: if (map) {
    drawMarkers(tracker_values[0]);
  }

  const createMarker = (datum) => {
    const html = `<div style="opacity: ${opacityScale(datum.timestamp)}">🚲</div>`;
    const icon = L.divIcon({
      html,
      className: 'map-marker'
    });
    const marker = L.marker([datum.lat, datum.lng], { icon });
    return marker;
  };

  const drawMarkers = (coords) => {
    if (!markerLayers) markerLayers = L.layerGroup();
    coords.data.map((d) => {
      markerLayers.addLayer(createMarker(d));
    });
    markerLayers.addTo(map);
  };

  const initMap = (container) => {
    const m = L.map(container).setView([avg_lat, avg_lng], 14);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>`,
      subdomains: 'abcd',
      maxZoom: 18
    }).addTo(m);
    return m;
  };

  const drawMap = (container) => {
    map = initMap(container);
    drawMarkers(tracker_values[0]);
    return {
      destroy: () => {
        map.remove();
      }
    };
  };

  onMount(async () => {
    L = await import('leaflet');
    drawMap(mapEl);
  });

  const resize = () => {
    if (map) {
      map.invalidateSize();
    }
  };
</script>

<svelte:window on:resize={resize} />
<div class="map" bind:this={mapEl} />
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""
/>

<style type="text/css" media="screen">
  .map {
    width: 90vw;
    height: 400px;
  }
</style>
