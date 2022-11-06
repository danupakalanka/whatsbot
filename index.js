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
	if(message.body === 'movie') {
		client.sendMessage(message.from, await MessageMedia.fromUrl('https://cloud.nadith.pro/en_mv/How_To_Train_Your_Dragon_2010_@nadithpro.mkv'));
	}
});

client.initialize();
 