const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'respect',
  aliases: [ 'f', 'rp', '+rp' ],
  group: 'fun',
  description: 'Show thy respect.',
  clientPermissions: [ 'EMBED_LINKS' ],
  get examples(){ return [ this.name, ...this.aliases ];},
  run: async (client, message, args) => {

    const rep = await message.channel.send(
      new MessageEmbed()
      .setColor('GREY')
      .setFooter(`Press F to pay respect | \©️${new Date().getFullYear()} Kei`)
      .setDescription(`${message.member} has paid their respect${args.length ? ` to ${args.join(' ')}.` : ''}`)
    );

    await message.delete().catch(() => null);

    return rep.react("🇫")
  }
};
