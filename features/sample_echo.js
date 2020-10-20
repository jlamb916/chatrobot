/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {
  controller.hears("sample", "message,direct_message", async (bot, message) => {
    await bot.reply(message, "I heard a sample message.");
  });

  controller.on("message,direct_message", async (bot, message) => {
    await bot.reply(message, `Echo: ${message.text}`);
  });

  controller.hears("yolo", "message", async (bot, message) => {
    await bot.reply(message, "hello yolo right back atcha");
  });
  // respond to events by reciving event details and takes actions

  controller.hears(
    ["hi", "hello", "howdy", "hey", "aloha", "hola", "bonjour", "oi"],
    ["message"],
    async (bot, message) => {
      // do something to respond to message
      await bot.reply(
        message,
        "WELCOME I AM MR.ROBOTO NICE TO MEET U BEEP BOOOOP!"
      );
    }
  );

  // looks for specific key words
  controller.hears(".*", "message", async (bot, message) => {
    await bot.reply(message, "I heard: " + message.text);
  });

  controller.on("event", async (bot, message) => {
    await bot.reply(message, "I received an event of type " + message.type);
  });
}
