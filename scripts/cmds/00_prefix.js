module.exports = {
 config: {
   name: "prefix",
   version: "1.0",
   author: "Alwaysone",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
Yo, my prefix is [  +  ]\n
`,
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/TMBZFVc/image.gif")
 });
 }
 }
}
