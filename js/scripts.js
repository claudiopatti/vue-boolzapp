const { createApp } = Vue

    createApp({
        data() {
        return {
            activeContactIndex : 0, // indice dell'immagine attiva
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                
            ],
            newMessage: '', // nuovo messaggio creato tramite l'input
            searchContactInChat: '',
            // nameSplit: [],
            // result: [],
            
        }
    },
    methods: {
        // funzione per capire quale Contatto sia stato cliccato e quindi mostrala in chat
        chatActive(i) {
            const contactFilterChat = this.searchChat()[i];
            const originalIndex = this.contacts.findIndex(filterIndex => filterIndex.name == contactFilterChat.name)
            this.activeContactIndex = originalIndex;
            
        },

        // funzione per creare data completata di ora e giorno
        getFullDate() {
            const now = new Date();

            let fullDate = '';
            fullDate += now.getDate().toString().padStart(2, '0');
            fullDate += '/';
            fullDate += (now.getMonth().toString().padStart(2, '0'));
            fullDate += '/';
            fullDate += now.getFullYear();
            fullDate += ' ';
            fullDate += now.getHours().toString().padStart(2, '0');
            fullDate += ':';
            fullDate += now.getMinutes().toString().padStart(2, '0');
            fullDate += ':';
            fullDate += now.getSeconds().toString().padStart(2, '0');

            return fullDate;


        },

        // funzione per pushare nuovo messaggio nella lista dei Messages
        pushNewMessage(i) {
            if (this.newMessage.trim() != '') {
                
                this.contacts[i].messages.push({
                    date: this.getFullDate(),
                    message: this.newMessage.trim(),
                    status: 'sent'
                })
    
                this.newMessage = '',
                
                // risposta che arriva entro 1 secondo
                setTimeout(() => {
                    this.contacts[this.activeContactIndex].messages.push({
                        date: this.getFullDate(),
                        message: 'ok',
                        status: 'received'
                    })
                }, 1000);
            }
            
        },


        
        // funzione per cercare contatto nella lista dei contatti tramite l'input di ricerca
        searchChat() {
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchContactInChat.toLowerCase().trim()));

            
            // // for (let i = 0, i < of arr1) {
            //     if (arr2.includes(item)) {
            //         result.push(item);
            //     }
            // // }
            // console.log(result);

            // function checkAdult(age) {
            //     return age == ;
            // }

            // result = this.contacts[0].name.filter(item => this.searchContactInChat.includes(item));

            // console.log(result);


            // const minLength = Math.min(this.searchContactInChat.length, this.nameSplit.length);
            // // i = 1
            // for (let i = 0; i < this.contacts.length; i++) {
            //     this.nameSplit +=  this.contacts[i].name.split("")
            //     console.log(this.nameSplit[0])
            //     // if (this.searchContactInChat[i] !== this.nameSplit[i]) {
            //     //     console.log('non sono più  uguali')
                    
            //     // }
            //     // else {
            //     //     console.log('sono uguali')
            //     //     console.log(this.nameSplit[i])
            //     // }
                
            // }

        }
        
        
    },
}).mount('#app')
