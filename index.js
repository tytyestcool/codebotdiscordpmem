const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: 32767
});
Client.setMaxListeners(0);

//lancement
Client.on("ready", async () => {

   
    Client.user.setPresence({
        activities: [{
            name: `surveiller les ${Client.guilds.cache.get('965263526509830154').memberCount} membres de La PMEM`,
            type: 'PLAYING',
        }],
        status: 'online'
    });
/*
    await Client.guilds.cache.get("965263526509830154").commands.fetch();
    await Client.application.commands.fetch();
    Client.guilds.cache.get("965263526509830154").commands.cache.map(command => {
        command.delete();
    });

    Client.application.commands.cache.map(command => {
        command.delete();
    });
    */ 

    Client.guilds.cache.get("965263526509830154").commands.create(data1);
    
    Client.guilds.cache.get("965263526509830154").commands.create(data2);

    Client.guilds.cache.get("965263526509830154").commands.create(data3);

    Client.guilds.cache.get("965263526509830154").commands.create(data4);

    Client.guilds.cache.get("965263526509830154").commands.create(data5);

    Client.guilds.cache.get("965263526509830154").commands.create(data6);

    Client.guilds.cache.get("965263526509830154").commands.create(data7);

    Client.guilds.cache.get("965263526509830154").commands.create(data8);
    
    Client.guilds.cache.get("965263526509830154").commands.create(data9);

    Client.guilds.cache.get("965263526509830154").commands.create(data10);


    console.log("bot conecté ✅")
    Client.channels.cache.get("988582799055405068").send("bot conecté ✅  <@&989110262567157780>")
});



const data1 = new SlashCommandBuilder()
    .setName("recrutement")
    .setDescription("Envoi le message de recrutement")
    .addStringOption( option10 => option10
        .setName("options")
        .setRequired(true)
        .setDescription("choisi une des options")
           .addChoices(
                { name:'recrutement ouvert 🟢', value: 'ON'},
                { name:'recrutement fermé 🔴', value: 'OFF'}
           ));

const data2 = new SlashCommandBuilder ()
    .setName("justice")
    .setDescription("Envoi le message de plainte")
    .addStringOption( option11 => option11
        .setName("recrutement")
        .setRequired(true)
        .setDescription("choisi une des options")
           .addChoices(
                { name:'ouvert 🟢', value: 'ON'},
                { name:'fermé 🔴', value: 'OFF'}
           ));

const data3 = new SlashCommandBuilder()
    .setName("annonce")
    .setDescription("faire une annonce sur le discord")
    .addStringOption(option => option
        .setName("message")
        .setDescription("message")
        .setRequired(true))

const data4 = new SlashCommandBuilder()
        .setName("clear")
        .setDescription("commande pour supprimer des messages")
        .addIntegerOption( option3 => option3
            .setName("nombre")
            .setDescription("Nombre de message à supprimer entre 1 et 100")
            .setRequired(true)
            );
const data5 = new SlashCommandBuilder()
        .setName("ticketop")
        .setDescription("Envoi le message de ticket pour les membres pmem")

const data6 = new SlashCommandBuilder()
        .setName("ticket")
        .setDescription("fait /ticket si tu veux ouvir un ticket depuis le salon ou tu es")

const data7 = new SlashCommandBuilder()
        .setName("regles")
        .setDescription("Envoi le message de validation des regles du discord")

const data8 = new SlashCommandBuilder()
        .setName("rankup")
        .setDescription("rank up une personne")
        .addUserOption( option4 => option4
            .setName("pseudo")
            .setDescription("pseudo de la personne à rank up")
            .setRequired(true))
        .addRoleOption( option5 => option5
            .setName("role")
            .setDescription("Role a donné à la personne")
            .setRequired(true));

const data9 = new SlashCommandBuilder()
        .setName("profil")
        .setDescription("profil ng de la perssone")
        .addStringOption( option6 => option6
            .setName("pseudo")
            .setDescription("pseudo de la personne")
            .setRequired(true))

const data10 = new SlashCommandBuilder()
            .setName("blame")
            .setDescription("blame une personne")
            .addUserOption( option7 => option7
                .setName("pseudo")
                .setDescription("pseudo de la personne à rank up")
                .setRequired(true))
            .addRoleOption( option8 => option8
                .setName("role")
                .setDescription("Role a donné à la personne")
                .setRequired(true));


// slash commands
Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
// justice 
    if(interaction.commandName === "justice"){
        let String2 = interaction.options.getString("recrutement");
    if(String2 === "ON"){
        var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton4")
        .setLabel("Aller dans le palais de justice")
        .setStyle("SUCCESS")
        .setEmoji("⚖"))
        .addComponents( new Discord.MessageButton()
        .setCustomId("bouton6")
    .setLabel("Rejoindre les juges martial")
    .setStyle("PRIMARY")
    .setEmoji("✉"))
    const justembed = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Palais de justice')
        .setDescription('Cliquer sur le bouton pour renter  dans le palais de justice')
        .setFooter({ text: "Tous ticket inutil sera sanctioné"})
    interaction.reply({ embeds: [justembed], components: [row],})}

    if(String2 === "OFF"){
        var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton4")
        .setLabel("Aller dans le palais de justice")
        .setStyle("SUCCESS")
        .setEmoji("⚖"))
    const justembedoff = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Palais de justice')
        .setDescription('Cliquer sur le bouton pour renter  dans le palais de justice')
        .setFooter({ text: "Tous ticket inutil sera sanctioné"})
    interaction.reply({ embeds: [justembedoff], components: [row],})}}


//recrutement
if(interaction.commandName === "recrutement"){
    let Stringe = interaction.options.getString("options");
    if(Stringe === "ON"){
        var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
            .setCustomId("recrutement")
            .setLabel("Rejoindre la PMEM")
            .setStyle("SUCCESS")
            .setEmoji("🛒"))
    const recrutementONembed = new Discord.MessageEmbed()
        .setColor('DARK_GREEN')
        .setTitle('Recrutement PMEM')
        .setDescription('Cliquer sur le bouton pour etre en contact avec les chefs de la PMEM')
        .addFields(
            { name: 'Information :', value: 'Recrutement : ON'})
        .setFooter({ text: "Tous ticket unitil sera sanctioné"})
    interaction.reply({ embeds: [recrutementONembed], components: [row],})}
    if(Stringe === "OFF"){
        var row = new Discord.MessageActionRow()
        .addComponents( new Discord.MessageButton()
        .setCustomId("recrutementOFF")
        .setLabel("Rejoindre la PMEM")
        .setDisabled("true")
        .setStyle("DANGER")
        .setEmoji("🛒")
        )
        const recrutementOFFembed = new Discord.MessageEmbed()
            .setColor('DARK_RED')
            .setTitle('Recrutement PMEM')
            .setDescription('Cliquer sur le bouton pour etre en contact avec les chefs de la PMEM')
            .addFields(
                { name: 'Information :', value: 'Recrutement : OFF'})
            .setFooter({ text: "Tous ticket unitil sera sanctioné"})
            interaction.reply({ embeds: [recrutementOFFembed], components: [row],})}
}
//rank up
        if(interaction.commandName === "rankup"){
            let pseudo = interaction.options.getUser("pseudo");
            let role = interaction.options.getRole("role");
            const testembed = new Discord.MessageEmbed()
                .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({dynamic : true})})
                .setColor('DARK_GREEN')
                .setTitle('Ranck UP')
                .setDescription("**GG à " + "<@" + pseudo.id + "> qui rank up " + "<@&" + role.id + ">**" )
                .setFooter({ text: "Signé l'alliance PMEM"});
        interaction.reply({ embeds: [testembed],})}


//blame
        if(interaction.commandName === "blame"){
            let pseudo = interaction.options.getUser("pseudo");
            let role = interaction.options.getRole("role");
            const blameembed = new Discord.MessageEmbed()
                .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({dynamic : true})})
                .setColor('RED')
                .setTitle('Blame')
                .setDescription("**<@" + pseudo.id + "> vien de resevoir un blame il a maintement le role " + "<@&" + role.id + ">**" )
                .setFooter({ text: "Signé l'alliance PMEM"});
        interaction.reply({ embeds: [blameembed],})}

//profil
        if(interaction.commandName === "profil"){
            let pseudo = interaction.options.getString("pseudo");
        interaction.reply({content : "https://nationsglory.fr/profile/" + pseudo, ephemeral: true })
        }
//ticket admin             
        if(interaction.commandName === "ticketop"){
            var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton1")
            .setLabel("Monter en grade dans la PMEM")
            .setStyle("SUCCESS")
            .setEmoji("🛒")
            )
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton2")
            .setLabel("Demande de grade")
            .setStyle("PRIMARY")
            .setEmoji("🎖")
            )

            const NewRow = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton3")
            .setLabel("Signaler un bug")
            .setStyle("DANGER")
            .setEmoji("⚠️")
            )
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton4")
            .setLabel("Conflit avec un joueur")
            .setStyle("DANGER")
            .setEmoji("💥")
            )
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('GOLD')
                .setTitle('Ticket PMEM')
                .setDescription('ici vous pouver choisir le ticket que vous voulez ouvrir')
                .addFields(
                    { name: 'Choix 1 : ', value: 'Clique sur le 🛒 si tu souhaites monter dans les grades de la PMEM '},
                    { name: 'Choix 2 : ', value: 'Clique sur le 🎖 si il te manque un grade à toi ou a un de tes membres',},
                    { name: 'Choix 3 : ', value: 'Clique sur le ⚠️ si tu as trouvé un bug sur le discord',},
                    { name: 'Choix 4 : ', value: 'Clique sur le 💥 si tu as eu un probleme avec des joueurs PMEM',},)
                .setFooter({ text: "Tous ticket inutil sera sanctioné"})
            const recrutementONembed = new Discord.MessageEmbed()
                .setColor('DARK_GREEN')
                .setTitle('Recrutement PMEM')
                .setDescription('Cliquer sur le bouton pour etre en contact avec les chefs de la PMEM')
                .addFields(
                    { name: 'Information :', value: 'Recrutement : ON'})
                .setFooter({ text: "Tous ticket unitil sera sanctioné"})
            
        interaction.reply({ embeds: [exampleEmbed], components: [row, NewRow],})}   
                  
//ticket joueur
        if(interaction.commandName === "ticket"){
            var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton1")
            .setLabel("Monter en grade dans la PMEM")
            .setStyle("SUCCESS")
            .setEmoji("🛒")
            )
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton2")
            .setLabel("Demande de grade")
            .setStyle("PRIMARY")
            .setEmoji("🎖")
            )

            const NewRow = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton3")
            .setLabel("Signaler un bug")
            .setStyle("DANGER")
            .setEmoji("⚠️")
            )
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton4")
            .setLabel("Conflit avec un joueur")
            .setStyle("DANGER")
            .setEmoji("💥")
            )
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('GOLD')
                .setTitle('Ticket PMEM')
                .setDescription('ici vous pouver choisir le ticket que vous voulez ouvrir')
                .addFields(
                    { name: 'Choix 1 : ', value: 'Clique sur le 🛒 si tu souhaites monter dans les grades de la PMEM '},
                    { name: 'Choix 2 : ', value: 'Clique sur le 🎖 si il te manque un grade à toi ou a un de tes membres',},
                    { name: 'Choix 3 : ', value: 'Clique sur le ⚠️ si tu as trouvé un bug sur le discord',},
                    { name: 'Choix 4 : ', value: 'Clique sur le 💥 si tu as eu un probleme avec des joueurs PMEM',},)
                .setFooter({ text: "Tous ticket inutil sera sanctioné"})
        interaction.reply({ embeds: [exampleEmbed], components: [row, NewRow], ephemeral: true})
    }             
}
}
);
// slash clear
Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "clear"){
            var nombre = interaction.options.getInteger("nombre");

            if(nombre >= 1 && nombre <= 100){
                interaction.channel.bulkDelete(nombre);
                interaction.reply({content: nombre + " messesges correctement supprimées 🚮", ephemeral: true});
            }
            else {
                interaction.reply({content: "Le nombre de massages supprimés dois être entre 1 et 100", ephemeral: true})
            }
        }   
    }
});
// slash annonce
Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "annonce"){
            let String = interaction.options.getString("message");
            const annoembed = new Discord.MessageEmbed()
                .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({dynamic : true})})
                .setColor('DARK_RED')
                .setTitle('ANNONCE')
                .setDescription(String)
                .setFooter({ text: "Signé l'alliance PMEM"})
                interaction.reply({ embeds: [annoembed],})
            }             
        }
    }
);
//augmentation de grade
Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton1"){

            interaction.guild.channels.create("Grade PMEM", {
                parent: "988913755750563841",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL ] 
                    },
                    {
                        id: interaction.user.id,
                        allow: [ Discord.Permissions.FLAGS.VIEW_CHANNEL ]
                    }
                ]
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticket")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                        .setEmoji("⚠")
                    );
                
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous", components: [row]});
                
                interaction.reply({content: "ticket correctement créé", ephemeral: true});

            });
        }
        else if(interaction.customId === "close-ticket"){
            interaction.channel.setParent("988913902249185300");
    
            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticket")
                    .setLabel("supprimer le ticket")
                    .setStyle("DANGER")
                    .setEmoji("⚠")
                );
            interaction.message.delete();
    
            interaction.channel.send({content: "Supprimer le ticket", components: [row]});
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticket"){
            interaction.channel.delete();

        };
    }
});
//demande de grade
Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton2"){

            interaction.guild.channels.create("Demande de grade", {
                parent: "988913755750563841",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL ] 
                    },
                    {
                        id: interaction.user.id,
                        allow: [ Discord.Permissions.FLAGS.VIEW_CHANNEL ]
                    }
                ]
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticketgrade")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                        .setEmoji("⚠")
                    );
                
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous", components: [row]});
                
                interaction.reply({content: "ticket correctement créé", ephemeral: true});

            });
        }
        else if(interaction.customId === "close-ticketgrade"){
            interaction.channel.setParent("988913902249185300");
    
            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticketgrade")
                    .setLabel("supprimer le ticket")
                    .setStyle("DANGER")
                    .setEmoji("⚠")
                );
            interaction.message.delete();
    
            interaction.channel.send({content: "Supprimer le ticket", components: [row]});
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticketgrade"){
            interaction.channel.delete();
        };
    }
});
//report bug
Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton3"){

            interaction.guild.channels.create("Bug discord", {
                parent: "988913755750563841",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL ] 
                    },
                    {
                        id: interaction.user.id,
                        allow: [ Discord.Permissions.FLAGS.VIEW_CHANNEL ]
                    }
                ]
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticketbug")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                        .setEmoji("⚠")
                    );
                
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous", components: [row]});
                
                interaction.reply({content: "ticket correctement créé", ephemeral: true});

            });
        }
        else if(interaction.customId === "close-ticketbug"){
            interaction.channel.setParent("988913902249185300");
    
            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticketbug")
                    .setLabel("supprimer le ticket")
                    .setStyle("DANGER")
                    .setEmoji("⚠")
                );
            interaction.message.delete();
    
            interaction.channel.send({content: "Supprimer le ticket", components: [row]});
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticketbug"){
            interaction.channel.delete();
        };
    }
});
//palais de justice
Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton4"){

            interaction.guild.channels.create("Plainte", {
                parent: "978985715050360832",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL ] 
                    },
                    {
                        id: interaction.user.id,
                        allow: [ Discord.Permissions.FLAGS.VIEW_CHANNEL ]
                    }
                ]
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticketreport")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                        .setEmoji("⚠")
                    );
                const justiceembed = new Discord.MessageEmbed()
                    .setColor('DARK_RED')
                    .setTitle('Palais de justice')
                    .setDescription("Bien dans le palais de la justice <@" + interaction.user.id + "> ici ta plainte vas pouvoir être traité mais pour ça il faut suivre le schema")
                    .addFields(
                        { name: '1 : pseudo de/des personne(s)', value: '**2: pays de/des personne(s)**'},
                        { name: '3 : raison du conflit', value: '**4 : le déroulement du confit avec le plus de détails**'},
                        { name: '5 : le plus de preuvent possible', value: '**Une fois le message posté attentez une reponse des juges**'})
                    .setFooter({ text: "Signé le palais de justice"})
                    .setImage("https://c.tenor.com/GtY2VsvVHccAAAAd/chambord-castle.gif")
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous",embeds: [justiceembed], components: [row]});
                Client.channels.cache.get("989962389820682270").send("Salut <@&989841590560370769> un nouveux ticket a été créé par" + " <@" + interaction.user.id + "> ")

                interaction.reply({content: "ticket correctement créé", ephemeral: true});

            });
        }
        else if(interaction.customId === "close-ticketreport"){
            interaction.channel.setParent("988913902249185300");
    
            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticketgrade")
                    .setLabel("supprimer le ticket")
                    .setStyle("DANGER")
                    .setEmoji("⚠")
                );
            interaction.message.delete();
    
            interaction.channel.send({content: "Supprimer le ticket", components: [row]});
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticketreport"){
            interaction.channel.delete();
        };
    }
});
// add membre
Client.on("guildMemberAdd", member => {
    console.log("un membre est arrivé");

    Client.channels.cache.get("965263526509830157").send("★━━━━━━━━━━━━━━━★━━━━━━━━━━━━━━━★")
    Client.channels.cache.get("965263526509830157").send("Bienvenue <@" + member.id + "> sur le discord de la PMEM")
    Client.channels.cache.get("965263526509830157").send(`Nous sommes **${member.guild.memberCount}** sur le discord`)
    Client.channels.cache.get("965263526509830157").send("★━━━━━━━━━━━━━━━★━━━━━━━━━━━━━━━★")
});
// leave membre
Client.on("guildMemberRemove", member => {
    console.log("un membre a quitté le serveur");
    Client.channels.cache.get("965263526509830157").send("★━━━━━━━━━━━━━━━★━━━━━━━━━━━━━━━★")
    Client.channels.cache.get("965263526509830157").send("<@" + member.id + "> a quité le discord de la PMEM")
    Client.channels.cache.get("965263526509830157").send(`Nous sommes **${member.guild.memberCount}** sur le discord`)
    Client.channels.cache.get("965263526509830157").send("★━━━━━━━━━━━━━━━★━━━━━━━━━━━━━━━★")
});
//recrutement
Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "recrutement"){

            interaction.guild.channels.create("Recrutement", {
                parent: "988913755750563841",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL ] 
                    },
                    {
                        id: interaction.user.id,
                        allow: [ Discord.Permissions.FLAGS.VIEW_CHANNEL ]
                    }
                ]
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticketjoin")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                        .setEmoji("⚠")
                    );
                
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous", components: [row]});
                
                interaction.reply({content: "ticket correctement créé", ephemeral: true});

            });
        }
        else if(interaction.customId === "close-ticketjoin"){
            interaction.channel.setParent("988913902249185300");
    
            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticketgrade")
                    .setLabel("supprimer le ticket")
                    .setStyle("DANGER")
                    .setEmoji("⚠")
                );
            interaction.message.delete();
    
            interaction.channel.send({content: "Supprimer le ticket", components: [row]});
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticketjoin"){
            interaction.channel.delete();
        };
    }
});
// slash regles
Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "regles"){
            var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
            .setCustomId("regleok")
            .setLabel("J'ai lu et accespt le reglement")
            .setStyle("SUCCESS")
            .setEmoji("✅")
            )
            const reglesembed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Reglement du discord')
                .setDescription('Cliquer sur le boutton apres avoir lu le reglement')
                interaction.reply({ embeds: [reglesembed], components: [row],})
            }             
        }
    }
);
// boutton regles
Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "regleok"){
            interaction.member.roles.add('967045578490015804');
            interaction.reply({ content:'Vous avez accepté les règles. Vous pouvez maintement aller sur le reste du serveur', ephemeral: true})}}}
);
// 
Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton6"){

            interaction.guild.channels.create("candid-juge", {
                parent: "978985715050360832",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL ] 
                    },
                    {
                        id: interaction.user.id,
                        allow: [ Discord.Permissions.FLAGS.VIEW_CHANNEL ]
                    }
                ]
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticketjuge")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                        .setEmoji("⚠")
                    );
                
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous", components: [row]});
                
                interaction.reply({content: "ticket correctement créé", ephemeral: true});

            });
        }
        else if(interaction.customId === "close-ticketjuge"){
            interaction.channel.setParent("988913902249185300");
    
            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticketjuge")
                    .setLabel("supprimer le ticket")
                    .setStyle("DANGER")
                    .setEmoji("⚠")
                );
            interaction.message.delete();
    
            interaction.channel.send({content: "Supprimer le ticket", components: [row]});
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticketjuge"){
            interaction.channel.delete();

        };
    }
});

Client.login(process.env.token); 