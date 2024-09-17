// Import the Kafka client instance from the client module
const { kafka } = require("./client");

// Get the consumer group ID from the command-line argument
const groupId = 'rider-group';  // Replace 'rider-group' with your desired group name

// Asynchronous function to initialize the Kafka consumer
async function init() {
  // Create a new Kafka consumer instance with the provided group ID
  const consumer = kafka.consumer({ groupId: group });
  
  // Connect the consumer to Kafka
  await consumer.connect();

  // Subscribe the consumer to the "rider-updates" topic, starting from the beginning of the topic
  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  // Start consuming messages and handle each received message
  await consumer.run({
    // Function that processes each incoming message
    eachMessage: async ({ topic, partition, message }) => {
      // Log the consumer group, topic, partition, and message content
      console.log(
        `${group}: [${topic}]: PART:${partition}:`,
        message.value.toString() // Convert the message value from a buffer to a string
      );
    },
  });
}

// Call the init function to start the consumer
init();
