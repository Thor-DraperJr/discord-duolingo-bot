module.exports = {
	name: 'thor',
	description: 'mylingoscore',
	execute(message) {



const puppeteer = require('puppeteer');
const { Message } = require("discord.js");
const { Client, MessageAttachment } = require('discord.js');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.duolingo.com/profile/ThorDraperJr');
    await page.screenshot({path: 'screenshot.png'});
  
    await page.setViewport({width: 2500, height: 1000});
  
    await page.waitForTimeout(5000);
  
    await page.evaluate(() => {
            return Promise.resolve(window.scrollTo(0,document.body.scrollHeight));
             
        });
  
    await browser.close();

  })();

  message.channel.send('hang on while i get it!');

setTimeout(function(){ 
    const attachment = new MessageAttachment('./screenshot.png');
    message.channel.send(attachment)
 }, 5000); 


},
};