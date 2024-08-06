const axios = require('axios');
const mongoose = require('mongoose');

const Inventory = mongoose.model('Inventory', new mongoose.Schema({
  ASIN: String,
  title: String,
  price: String,
  availability: String
}));

const product = mongoose.model('Catalog', new mongoose.Schema({
  id: String,
  name: String,
  price: String,
  priceNight: String,
  category: String,
  netcontent: String
}));

const generateSignature = (accessKeyId, secretAccessKey, params, endpoint, region) => {
  // ... Implementar la generación de token para la solicitud a la API de Amazon ...
};

const fetchAmazonInventory = async () => {
  const { AMAZON_ACCESS_KEY_ID, AMAZON_SECRET_ACCESS_KEY, AMAZON_ASSOCIATE_TAG } = process.env;
  const endpoint = 'webservices.amazon.com';
  const region = 'us-east-1';

  const params = {
    // Configurar los parámetros necesarios para la solicitud a la API
  };

  const signature = generateSignature(AMAZON_ACCESS_KEY_ID, AMAZON_SECRET_ACCESS_KEY, params, endpoint, region);
  const url = `https://${endpoint}/paapi5/getitems?${new URLSearchParams(params).toString()}&Signature=${signature}`;

  try {
    const response = await axios.get(url);
    const items = response.data.ItemsResult.Items;

    await Inventory.insertMany(items.map(item => ({
      ASIN: item.ASIN,
      title: item.ItemInfo.Title.DisplayValue,
      price: item.Offers.Listings[0].Price.DisplayAmount,
      availability: item.Offers.Listings[0].Availability.Message
    })));
  } catch (error) {
    console.error('Error fetch-inventory: ', error);
  }
};

const fetchCatalog = async () => {
  try {
    const response = await axios.get('https://api.barmanvinosylicores.com/Catalog');
    const products = response.data;
    await product.insertMany(products.map(element => ({
      id: element.id,
      name: element.name,
      price: element.price,
      priceNight: element.priceNight,
      category: element.category,
      netcontent: element.netcontent
    })))
  } catch (error) {
    console.error('Error fetch-catalog: ', error);
  }
}


module.exports = { fetchAmazonInventory, fetchCatalog };