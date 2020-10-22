const info = require('./info.json');

module.exports = function(controller) {
  const me = info.info;

  // user's first time with the bot trigger connected message
  controller.on("connected", async (bot, message) => {
    await bot.reply(
      message,
      `Hello! I am robot. Welcome to the page How may i help you?`
    );
    await bot.reply(message, { type: "typing" });
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: "What would you like to know about my John?",
        // provide user with premade questions
        quick_replies: [
          {
            title: "info",
            payload: "Tell Me about John",
          },
          {
            title: "who are you*",
            payload: "who are you again?",
          },
        ],
      });
    }, 1000);
  });

  
  controller.hears("who are you*", "message, direct_message"),
    async (bot, message) => {
      await bot.reply(message, "I am MR ROBOT pleased to meet you. beep boop");
    };
  controller.hears("hello", async (bot, message) => {
    await bot.say("I received an event!");
  });
  controller.hears("info", "message,direct_message", async (bot, message) => {
    await bot.reply(message, { type: "typing" });
    setTimeout(async () => {
      // will have to reset context because turn has now ended.
      await bot.changeContext(message.reference);
      await bot.reply(
        message,
        `the owner of this page is named ${me.name}, he is a ${me.role}, please type in some of the keywords to learn more: education, love, contact info, hobbies`
      );
    }, 1000);
  });
}