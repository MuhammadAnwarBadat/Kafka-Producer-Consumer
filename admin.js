// Import Kafka client instance from the client module
const { kafka } = require("./client");

// Asynchronous function to initialize Kafka admin and perform operations
async function init() {
  // Create a new Kafka admin client instance
  const admin = kafka.admin();
  
  // Log a message to indicate that the admin is connecting
  console.log("Admin connecting...");
  
  // Connect the admin client to Kafka
  admin.connect();
  
  // Log a success message after admin connection
  console.log("Admin Connection Success...");

  // Log a message to indicate the creation of a topic
  console.log("Creating Topic [rider-updates]");
  
  // Create a topic named "rider-updates" with 2 partitions
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates", // Name of the topic
        numPartitions: 2,        // Number of partitions for the topic
      },
    ],
  });

  // Log a message to indicate that the topic was created successfully
  console.log("Topic Created Success [rider-updates]");

  // Log a message indicating the admin client is disconnecting
  console.log("Disconnecting Admin..");
  
  // Disconnect the admin client from Kafka
  await admin.disconnect();
}

// Call the init function to execute the Kafka admin operations
init();