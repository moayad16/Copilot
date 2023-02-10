const connectSql = require("./connectSql");

// insert Data into SQL

const insertSensorData = async (req, res) => {
    const { timestamp, gyroX, gyroY, gyroZ, accX, accY, accZ, magX, magY, magZ } = req.body;
    try {
        const sensorData = await connectSql.connection.query(
        `INSERT INTO sensor_data (timestamp, gyroX, gyroY, gyroZ, accX, accY, accZ, magX, magY, magZ) VALUES
         (${timestamp}, ${gyroX}, ${gyroY}, ${gyroZ}, ${accX}, ${accY}, ${accZ}, ${magX}, ${magY}, ${magZ})`
        );
        res.status(201).json({ status: "success" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
    }

// export

module.exports = insertSensorData;
