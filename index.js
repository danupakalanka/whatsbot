const qrcode = require('qrcode-terminal');
const { MessageMedia } = require('whatsapp-web.js');

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

 
client.on('message',async message => {
	if(message.body === 'hii') {
		client.sendMessage(message.from, await MessageMedia.fromUrl('https://admin.nadith.pro/www.1TamilMV.vin%20-%20PAAGAL%20(2021)%20Telugu%20_%20-%20720p%20-%20HEVC%20-%20(DD5.1%20-%20192Kbps%20%20AAC%202.0)%20-%20950MB%20-%20ESub.mkv'));
	}
});

client.initialize();
 