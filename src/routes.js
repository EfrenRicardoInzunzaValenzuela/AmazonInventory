const express = require('express');
const router = express.Router();
const { fetchAmazonInventory, fetchCatalog } = require('./controller');

router.get('/fetch-inventory', async (req, res) => {
  try {
    await fetchAmazonInventory();
    res.status(200).json({ message: 'Inventario descargado y guardado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al descargar o guardar el inventario' });
  }
});

router.get('/fetch-catalog', async (req, res) => {
  try {
    await fetchCatalog();
    res.status(200).json({ message: 'catalog success' });
  } catch (error) {
    res.status(500).json({ error: 'catalog error' });
  }
});
module.exports = router;