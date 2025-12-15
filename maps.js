src="https://unpkg.com/leaflet/dist/leaflet.js"
  const map = L.map('map').setView([-6.200000, 106.816666], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

const shelters = [
  { name: "Nitha Cat House Surabaya", lat: -7.2740, lng: 112.7326, link: "https://maps.app.goo.gl/vzE3EE2YkXY8J6f66" },
  { name: "JAAN (Jakarta Animal Aid Network)", lat: -6.2081, lng: 106.8456, link: "https://maps.app.goo.gl/yix4SKF5MVWempLN7" },
  { name: "Pejaten Shelter", lat: -6.2949, lng: 106.8159, link: "https://g.co/kgs/oAXQf35" },
  { name: "Adopsi Kucing Free (Jakarta)", lat: -6.2125, lng: 106.8475, link: "https://maps.app.goo.gl/kJN6x81sK5Nu1oMT6" },
  { name: "Ragunan Zoo", lat: -6.3020, lng: 106.8203, link: "https://g.co/kgs/sJ6mhwa" },
  { name: "Animal Defenders Indonesia", lat: -6.2920, lng: 106.8200, link: "https://maps.app.goo.gl/def123" },
  { name: "Garda Satwa Indonesia", lat: -6.2125, lng: 106.8475, link: "https://maps.app.goo.gl/ghi456" },
  { name: "Let’s Adopt Indo (Yogyakarta)", lat: -7.7828, lng: 110.3677, link: "https://maps.app.goo.gl/adoptjogja" },
  { name: "Animal Rescue and Adoption Center (ARAC)", lat: -6.2000, lng: 106.8166, link: "https://maps.app.goo.gl/aracjakarta" },
  { name: "Maria Stray Home (Tangerang)", lat: -6.2790, lng: 106.7250, link: "https://maps.app.goo.gl/mariahome" },
  { name: "Shelter Pejaten Barat", lat: -6.3000, lng: 106.8200, link: "https://maps.app.goo.gl/pejatenbarat" },
  { name: "Pondok Pengayom Satwa Jakarta", lat: -6.3020, lng: 106.8200, link: "https://maps.app.goo.gl/ppsjakarta" },
  { name: "Surabaya Paw Center", lat: -7.2575, lng: 112.7521, link: "https://maps.app.goo.gl/kfXq6moR31C4XhxS9" },
  { name: "PoodleGuguk", lat: -7.2916, lng: 112.7780, link: "https://maps.app.goo.gl/4hZRPydgtstF93Db9" },
  { name: "PetGround Surabaya", lat: -7.2489, lng: 112.7509, link: "https://maps.app.goo.gl/S5Z91MTbx8PPuAEx8" },
  { name: "Dudukucingku Cattery Surabaya", lat: -7.2500, lng: 112.7400, link: "https://maps.app.goo.gl/uaBB5otk1WqvxWJ8A" },
  { name: "Bali Animal Welfare Association (BAWA)", lat: -8.5069, lng: 115.2624, link: "https://maps.app.goo.gl/babawelfare" },
  { name: "Bali Dog Adoption & Rehab Centre (BARC)", lat: -8.5069, lng: 115.2624, link: "https://maps.app.goo.gl/barcbalidog" },
  { name: "Shelter For Lombok Dogs", lat: -8.6310, lng: 116.3614, link: "https://maps.app.goo.gl/lombogdogs" },
  { name: "Villa Kitty Bali", lat: -8.5069, lng: 115.2624, link: "https://maps.app.goo.gl/villakitty" },
  { name: "Little Steps Matter Bali", lat: -8.5069, lng: 115.2624, link: "https://maps.app.goo.gl/littlesteps" },
  { name: "Street Paws Bali", lat: -8.5069, lng: 115.2624, link: "https://maps.app.goo.gl/streetpaws" },
  { name: "Bali Paws", lat: -8.5069, lng: 115.2624, link: "https://maps.app.goo.gl/balipaws" },
  { name: "Mia Healing Sanctuary Bali", lat: -8.5069, lng: 115.2624, link: "https://maps.app.goo.gl/miahealing" },
  { name: "The Odd Cat Cafe Bali", lat: -8.5069, lng: 115.2624, link: "https://maps.app.goo.gl/oddcatcafe" },
  { name: "Bali Reptile Rescue", lat: -8.5069, lng: 115.2624, link: "https://maps.app.goo.gl/balireptile" },
  { name: "Paws of Lembongan", lat: -8.6682, lng: 115.4517, link: "https://maps.app.goo.gl/pawslombok" },
  { name: "Paws of Nusa Penida", lat: -8.7333, lng: 115.5120, link: "https://maps.app.goo.gl/pawsnpshelter" },
  { name: "Animal Defenders Indonesia", lat: -6.2920, lng: 106.8200, link: "https://maps.app.goo.gl/animaldefenders" },
  { name: "Dogs Need Love Jakarta", lat: -6.2000, lng: 106.8166, link: "https://maps.app.goo.gl/dogsneedlove" },
  { name: "House of Blessing Dog Shelter", lat: -6.5980, lng: 106.8000, link: "https://maps.app.goo.gl/hobdogshelter" },
  { name: "Cat Rescue ID (Yogyakarta)", lat: -7.7828, lng: 110.3677, link: "https://maps.app.goo.gl/catrescuejogja" }
];

shelters.forEach(s => {
  L.marker([s.lat, s.lng])
    .addTo(map)
    .bindPopup(`<b>${s.name}</b><br><a href="${s.link}" target="_blank">Lihat di Google Maps</a>`);
});


