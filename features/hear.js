const info = require('./info.json');

module.exports = function(controller) {
    const me = info.info

    controller.hears('who are you*', "message, direct_message"), async (bot, message) => {
        await bot.reply(message, "I am MR ROBOT pleased to meet you. beep boop")
    }

    controller.hears(
      "who's page is this",
      "message,direct_message",
      async (bot, message) => {
        await bot.reply(message, { type: "typing" });
        setTimeout(async () => {
          // will have to reset context because turn has now ended.
          await bot.changeContext(message.reference);
          await bot.reply(
            message,
            `the owner of this page is named ${me.name}, he is a ${me.role}, please type in some of the keywords to learn more: education, love, contact info, hobbies`
          );
        }, 1000);
      }
    );
    
}