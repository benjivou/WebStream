# WebStream
PSIDE TOP
 

APSIDE, ESN singulière par son histoire et son fonctionnement, trouve son succès dans la place qu'elle accorde à ses collaborateurs, ses valeurs, et sa projection à long terme.

Intégrer APSIDE, c'est bénéficier d'une gestion RH personnalisée (management de proximité, soirées d'agences, gestion de carrière adaptée...). APSIDE de par son organisation, sa culture d'entreprise et son indépendance sait rester à l'écoute et répondre à ses clients par la qualité de ses prestations qui repose sur l'aptitude de ses collaborateurs.

APSIDE TOP, filiale du groupe, est implantée sur 3 agences (Tours, Orléans, Le Mans) et propose des prestations en assistance technique et au forfait auprès de clients grands comptes et de clients locaux dans divers domaines : banque, mutuelle, assurance, etc.

Le défi: Régie distante pour une webTV
Theme:
développement, webTV, stream
Lot:
500€ de chèques cadeaux pour l'équipe gagnante.

Pour que le site internet que vous réalisez pour la nuit de l'info soit plus interractif, vous avez décidé d'y intégrer une web TV. Mais puisque vous aimez compliquer les choses, vous avez décidé d'intégrer du contenu spécifique au flux vidéo diffusé sur la web TV.

Vous avez embauché Bob pour animer votre webTV. Le défi : vous voudirez que son amie Alice, et uniquement elle, puisse envoyer des messages pour qu'ils s'affichent en direct dans sa vidéo. Exemple : 

Timeline illustrant la fonctionnalité. Bob est debout, face à la caméra. Un message s'affiche : il a été envoyé par Alice, et est incrusté dans la vidéo de Bob.

Mais il y a un problème : Alice n'a pas accès à la machine que Bob utilise pour envoyer son flux vidéo sur internet : elle vit à 2000 km de chez Bob ! En plus d'intégrer le flux vidéo à votre site, il faut que vous développiez un outil pour résoudre leur problème.

Elements attendus
Fonctionnalités attendues :

La WebTV doit être intégrée à votre site
vous avez le droit d'utiliser un service tiers pour gérer la webTV (Twitch, Mixer, Youtube...)
Bob doit pouvoir lire les messages qu'envoie Alice
Seule Alice doit avoir le droit d'envoyer des messages
Dès qu'Alice envoie un message, il doit s'afficher automatiquement sur l'émission de Bob pendant quelques secondes, puis disparaître. L'idée est que Bob ouvre l'outil, et qu'Alice gère tout le reste (le contenu des messages, et quand les faire apparaître)
Comme beaucoup de streameurs, Bob utilise "OBS Studio" pour diffuser son émission. OBS Studio est capable de prendre plusieurs images/vidéos/textes, et de les superposer afin de composer une vidéo, et d'envoyer le rendu sur un serveur de stream
exemple : 
OBS Studio est capable de lire une page HTML en tant que source. Cela signifie que pour que Bob puisse diffuser les messages gérés par Alice, il suffit que ces message soient visible sur une page web, que Bob intégrera en tant que source dans OBS Studio
Astuce :

Beaucoup de streameurs utilisent une Alert Box de Streamlabs pour afficher du contenu sur leur flux vidéo. Du point de vue du streameur, il suffit de dire à OBS "voici l'URL de mon Alert Box. Ouvre la avec ton navigateur : c'est une source vidéo", puis de paramétrer quelques délencheurs sur l'interface proposée par Streamlabs. On peut par exemple paramétrer l'alert box pour qu'elle affiche un message personnalisé quand quelqu'un s'abonne à notre WebTV (tel que "merci (pseudo de l'abonné) d'avoir rejoint la WebTV de Bob").

Les Alert Boxes sont différents de l'outil de gestion de messages pour Bob et Alice dans leur finalité, mais peuvent fonctionner sur des principes similaires.

Objectifs bonus :

Si les fonctionnalités attendues sont livrées, ces objectifs supplémentaires (qui concernent uniquement l'appli de gestion des messages) augmenteront vos chances de remporter le défi :

"Plug ang play" : faire l'appli la plus facile à installer (que ce soit côté client ou serveur)
"Full JS" : tout le code de l'outil doit être en javascript (et en HTML/CSS)
"Where is Brian" : tout doit être écrit en anglais (le code, les commentaires, la documentation)
"Custom Shop" : faire l'appli offrant à Alice le plus d'options de customisation des messages (customisation de la durée d'affichage, ajout d'images, de sons etc...). Les options doivent être faciles à utiliser, et permettre un retour simple aux valeurs par défaut.
Serveur ? :

Si votre livrable contient une partie serveur, il faut que je puisse l'installer sur ma machine pour la valider. J'ai un poste windows 10 64 bits, et peux installer une machine virtuelle de n'importe quelle distribution linux. Il faut donc que votre partie serveur soit compatible Windows ou Linux.
 

Mode de restitution
Pour l'intégration de la WebTV à votre site, j'attends :

la page internet qui contient la partie webTV (pour vérifier que le code HTML/JS/CSS est correct)
Pour l'outil de gestoin des messages, j'attends une archive .zip contenant :

un fichier Readme (txt, pdf, word, openDocument ou markdown), indiquant comment installer et utiliser le programme
le code source du programme
le(s) exécutable(s) (si le code source ne fait pas office d'exécutable)
