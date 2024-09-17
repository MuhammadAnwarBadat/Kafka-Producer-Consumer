// Import Kafka class from the 'kafkajs' library
const { Kafka } = require("kafkajs");

// Create a new Kafka instance with specified configuration and export it
exports.kafka = new Kafka({
  clientId: "my-app",        // Client identifier for Kafka, used for logging and debugging
  brokers: ["192.168.18.176:9092"], // Array of Kafka broker addresses, replace <PRIVATE_IP> with actual IP address
});
