const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    mongo: !!(req.app.get('mongoConnected')),
    time: new Date().toISOString()
  });
});

module.exports = router;
