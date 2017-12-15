import Promise from 'bluebird';

import { setUserAction } from '../../redis';


function fuck(client, evt) {
  if (evt.message.channel.isPrivate) return evt.message.channel.sendMessage('', false, {color: 3901635, description: `\u2139  Use this command in a server!`});

  let receiverArray = [];

  if (evt.message.mentions.length !== 0) {
    evt.message.mentions.map(user => {
      let guildUser = user.memberOf(evt.message.guild);
      if (user !== evt.message.author && !user.bot) receiverArray.push(guildUser.name);
    });

    if (receiverArray.length !== 0) {
      let receivers = receiverArray.join(' and ');

      const fucks = [
        `pins ${receivers} to the wall and rails them!`,
        `places a collar around ${receivers} neck(s) and dominates them`,
        `fucks ${receivers}!`,
        `gives ${receivers} a quick fuck~ `,
        `lifts up ${receivers}'s tail and rims them before sliding on in`,
        `gives ${receivers} a fuck! `,
        `awkwardly fucks ${receivers} `,
        `gives multiple fucks to ${receivers}! `,
        `shyly walks up to ${receivers} and gives them a quick fuck~ `,
        `happily fucks ${receivers} `,
        `fucks ${receivers} in the mouth `,`smiles and fucks ${receivers}! `,
        `smiles and gives ${receivers} a little fuck! `,
        `gladly fucks ${receivers}! `,
        `blushes and gives ${receivers} a quick fuck! `,
        `blushes and fucks ${receivers}! `,
        `completely covers ${receivers} in fucks! `,
        `ties  ${receivers} to the bed and stuffs them full of dick`,
        `shouts "fire in the hole" and fucks ${receivers} `
      ];

      const rand = Math.floor(Math.random() * fucks.length);

      evt.message.mentions.map(user => {
        if (user !== evt.message.author) {
          return setUserAction(user.id, 'actions_fucks');
        }
      });

      return Promise.resolve(evt.message.member.name + ` ${fucks[rand]}`);
    }
  }
  return Promise.resolve(evt.message.member.name + ` walks up to a mirror and jacks themselves off! How odd..`);
}

export default {
  fuck
};

export const help = {
  fuck: { parameters: '@User' }
};
