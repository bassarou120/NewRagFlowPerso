export default {
  translation: {
    common: {
      delete: 'Supprimer',
      deleteModalTitle: 'Êtes-vous sûr de vouloir supprimer cet élément ?',
      ok: 'Oui',
      cancel: 'Non',
      total: 'Total',
      rename: 'Renommer',
      name: 'Nom',
      save: 'Enregistrer',
      namePlaceholder: 'Veuillez entrer un nom',
      next: 'Suivant',
      create: 'Créer',
      edit: 'Modifier',
      upload: 'Téléverser',
      english: 'Anglais',
      french: 'Français',
      chinese: 'Chinois simplifié',
      traditionalChinese: 'Chinois traditionnel',
      language: 'Langue',
      languageMessage: 'Veuillez entrer votre langue !',
      languagePlaceholder: 'Sélectionnez votre langue',
      copy: 'Copier',
      copied: 'Copié',
      comingSoon: 'Bientôt disponible',
      download: 'Télécharger',
      close: 'Fermer',
      preview: 'Aperçu',
      move: 'Déplacer',
      warn: 'Avertir',
      action: 'Action',
      s: 'S',
      pleaseSelect: 'Veuillez sélectionner',
      pleaseInput: 'Veuillez entrer',
      submit: 'Soumettre',
    },
    login: {
      login: 'Se connecter',
      signUp: "S'inscrire",
      loginDescription: 'Nous sommes ravis de vous revoir !',
      registerDescription: 'Heureux de vous compter parmi nous !',
      emailLabel: 'E-mail',
      emailPlaceholder: 'Veuillez entrer votre e-mail',
      passwordLabel: 'Mot de passe',
      passwordPlaceholder: 'Veuillez entrer votre mot de passe',
      rememberMe: 'Se souvenir de moi',
      signInTip: "Vous n'avez pas de compte ?",
      signUpTip: 'Vous avez déjà un compte ?',
      nicknameLabel: 'Surnom',
      nicknamePlaceholder: 'Veuillez entrer un surnom',
      register: 'Créer un compte',
      continue: 'Continuer',
      title: 'Commencez à construire vos assistants intelligents.',
      description:
        'Inscrivez-vous gratuitement pour explorer la technologie RAG de pointe. Créez des bases de connaissances et des IA pour renforcer votre entreprise.',
      review: 'à partir de plus de 500 avis',
    },

    header: {
      knowledgeBase: 'Base de connaissances',
      chat: 'Discussion',
      register: "S'inscrire",
      signin: 'Se connecter',
      home: 'Accueil',
      setting: 'Paramètres utilisateur',
      logout: 'Se déconnecter',
      fileManager: 'Gestion des fichiers',
      flow: 'Agent',
      search: 'Recherche',
    },

    knowledgeList: {
      welcome: 'Bon retour',
      description:
        "Quelles bases de connaissances allez-vous utiliser aujourd'hui ?",
      createKnowledgeBase: 'Créer une base de connaissances',
      name: 'Nom',
      namePlaceholder: 'Veuillez entrer un nom !',
      doc: 'Documents',
      searchKnowledgePlaceholder: 'Rechercher',
      noMoreData: "C'est tout. Rien de plus.",
    },
    knowledgeDetails: {
      dataset: 'Ensemble de données',
      testing: 'Test de récupération',
      files: 'Fichiers',
      configuration: 'Configuration',
      name: 'Nom',
      namePlaceholder: 'Veuillez entrer un nom !',
      doc: 'Documents',
      datasetDescription:
        "😉 Veuillez attendre que votre fichier ait fini d'être analysé avant de démarrer une discussion assistée par IA.",
      addFile: 'Ajouter un fichier',
      searchFiles: 'Rechercher vos fichiers',
      localFiles: 'Fichiers locaux',
      emptyFiles: 'Créer un fichier vide',
      webCrawl: 'Exploration Web',
      chunkNumber: 'Nombre de segments',
      uploadDate: 'Date de téléversement',
      chunkMethod: 'Méthode de segmentation',
      enabled: 'Activer',
      disabled: 'Désactiver',
      action: 'Action',
      parsingStatus: "Statut de l'analyse",
      processBeginAt: 'Commencé à',
      processDuration: 'Durée',
      progressMsg: 'Progression',
      testingDescription:
        'Effectuez un test de récupération pour vérifier si RAGFlow peut récupérer le contenu souhaité pour le LLM.',
      similarityThreshold: 'Seuil de similarité',
      similarityThresholdTip:
        'RAGFlow utilise soit une combinaison de similarité pondérée par mots-clés et de similarité vectorielle par cosinus pondérée, soit une combinaison de similarité par mots-clés et de score de reranking pondéré pendant la récupération. Ce paramètre définit le seuil pour les similarités entre la requête utilisateur et les segments. Tout segment avec un score inférieur à ce seuil sera exclu des résultats.',
      vectorSimilarityWeight: 'Poids de la similarité par mots-clés',
      vectorSimilarityWeightTip:
        'Ce paramètre définit le poids de la similarité par mots-clés dans le score de similarité combiné, utilisé avec la similarité vectorielle par cosinus ou le score de reranking. La somme des deux poids doit être égale à 1,0.',
      testText: 'Texte de test',
      testTextPlaceholder: 'Saisissez votre question ici !',
      testingLabel: 'Test',
      similarity: 'Similarité hybride',
      termSimilarity: 'Similarité par termes',
      vectorSimilarity: 'Similarité vectorielle',
      hits: 'Résultats',
      view: 'Voir',
      filesSelected: 'Fichiers sélectionnés',
      upload: 'Téléverser',
      run: 'Exécuter',
      runningStatus0: 'NON DÉMARRÉ',
      runningStatus1: 'Analyse en cours',
      runningStatus2: 'ANNULÉ',
      runningStatus3: 'SUCCÈS',
      runningStatus4: 'ÉCHEC',
      pageRanges: 'Plages de pages',
      pageRangesTip:
        'Plage de pages à analyser ; les pages hors de cette plage ne seront pas traitées.',
      fromPlaceholder: 'de',
      fromMessage: 'Numéro de page de début manquant',
      toPlaceholder: 'à',
      toMessage: 'Numéro de page de fin manquant (exclu)',
      layoutRecognize: 'Reconnaissance de mise en page',
      layoutRecognizeTip:
        'Utilisez des modèles visuels pour analyser la mise en page et mieux comprendre la structure du document, y compris les titres, blocs de texte, images et tableaux. Si désactivé, seul le texte brut du PDF sera récupéré.',
      taskPageSize: 'Taille des pages de la tâche',
      taskPageSizeMessage:
        'Veuillez entrer la taille des pages de votre tâche !',
      taskPageSizeTip:
        'Lors de la reconnaissance de mise en page, un fichier PDF est divisé en segments et traité en parallèle pour accélérer le traitement. Ce paramètre définit la taille de chaque segment. Une taille plus grande réduit les risques de scinder un texte continu entre les pages.',
      addPage: 'Ajouter une page',
      greaterThan: 'La valeur actuelle doit être supérieure à celle-ci !',
      greaterThanPrevious:
        'La valeur actuelle doit être supérieure à la précédente !',
      selectFiles: 'Sélectionner des fichiers',
      changeSpecificCategory: 'Changer une catégorie spécifique',
      uploadTitle:
        'Cliquez ou faites glisser un fichier dans cette zone pour téléverser',
      uploadDescription:
        "Prise en charge d'un téléversement unique ou en lot. Il est strictement interdit de téléverser des données d'entreprise ou d'autres fichiers interdits.",
      chunk: 'Segment',
      bulk: 'En lot',
      cancel: 'Annuler',
      rerankModel: 'Modèle de reranking',
      rerankPlaceholder: 'Veuillez sélectionner',
      rerankTip:
        'Si laissé vide, RAGFlow utilisera une combinaison de similarité pondérée par mots-clés et de similarité vectorielle par cosinus pondérée ; si un modèle de reranking est sélectionné, un score de reranking pondéré remplacera la similarité vectorielle par cosinus pondérée.',
      topK: 'Top-K',
      topKTip: 'Les K segments seront envoyés aux modèles de reranking.',
      delimiter: 'Délimiteur',
      delimiterTip:
        "Un délimiteur peut être un ou plusieurs caractères spéciaux. Si ce sont plusieurs caractères, assurez-vous qu'ils sont entourés par des accents graves (``). Par exemple, si vous configurez vos délimiteurs ainsi : \n`##`; alors vos textes seront séparés par des sauts de ligne, des doubles hashtags (##) ou des points-virgules.",
      html4excel: 'Excel vers HTML',
      html4excelTip:
        "Lorsqu'il est activé, le tableau sera analysé en tableaux HTML, avec un maximum de 256 lignes par tableau. Sinon, il sera analysé en paires clé-valeur par ligne.",
      autoKeywords: 'Mots-clés automatiques',
      autoKeywordsTip:
        "Extrayez automatiquement N mots-clés pour chaque segment afin d'augmenter leur classement pour les requêtes contenant ces mots-clés. Vous pouvez vérifier ou mettre à jour les mots-clés ajoutés pour un segment dans la liste des segments. Attention, des tokens supplémentaires seront consommés par le LLM défini dans les 'Paramètres du modèle système'.",
      autoQuestions: 'Questions automatiques',
      autoQuestionsTip:
        "Extrayez automatiquement N questions pour chaque segment afin d'augmenter leur classement pour les requêtes contenant ces questions. Vous pouvez vérifier ou mettre à jour les questions ajoutées pour un segment dans la liste des segments. Cette fonctionnalité ne perturbera pas le processus de segmentation en cas d'erreur, mais elle peut ajouter un résultat vide au segment original. Attention, des tokens supplémentaires seront consommés par le LLM défini dans les 'Paramètres du modèle système'.",
    },
    knowledgeConfiguration: {
      titleDescription:
        'Mettez à jour la configuration de votre base de connaissances ici, en particulier la méthode de découpage.',
      name: 'Nom de la base de connaissances',
      photo: 'Photo de la base de connaissances',
      description: 'Description',
      language: 'Langue',
      languageMessage: 'Veuillez saisir votre langue !',
      languagePlaceholder: 'Veuillez saisir votre langue !',
      permissions: 'Permissions',
      embeddingModel: "Modèle d'intégration",
      chunkTokenNumber: 'Nombre de tokens par segment',
      chunkTokenNumberMessage: 'Le nombre de tokens par segment est requis',
      embeddingModelTip:
        "Le modèle qui convertit les segments en vecteurs d'intégration. Cela ne peut pas être modifié une fois que la base de connaissances contient des segments. Pour passer à un autre modèle, vous devez supprimer tous les segments existants.",
      permissionsTip:
        "Si réglé sur 'Équipe', tous les membres de l'équipe pourront gérer la base de connaissances.",
      chunkTokenNumberTip:
        "Cela définit le seuil de tokens pour un segment. Un paragraphe contenant moins de tokens que ce seuil sera combiné avec le suivant jusqu'à dépasser ce seuil, moment où un segment sera créé.",
      chunkMethod: 'Méthode de découpage',
      chunkMethodTip: 'Voir les conseils à droite.',
      upload: 'Téléverser',
      english: 'Anglais',
      chinese: 'Chinois',
      embeddingModelPlaceholder:
        "Veuillez sélectionner un modèle d'intégration",
      chunkMethodPlaceholder: 'Veuillez sélectionner une méthode de découpage',
      save: 'Enregistrer',
      me: 'Moi uniquement',
      team: 'Équipe',
      cancel: 'Annuler',
      methodTitle: 'Description de la méthode de découpage',
      methodExamples: 'Exemples',
      methodExamplesDescription:
        "Les captures d'écran suivantes sont fournies pour plus de clarté.",
      dialogueExamplesTitle: 'Exemples de dialogues',
      methodEmpty:
        'Cela affichera une explication visuelle des catégories de la base de connaissances.',
      book: `<p>Les formats de fichiers pris en charge sont <b>DOCX</b>, <b>PDF</b>, <b>TXT</b>.</p><p>
      Pour chaque livre en PDF, définissez les <i>plages de pages</i> pour supprimer les informations inutiles et réduire le temps d'analyse.</p>`,
      laws: `<p>Les formats de fichiers pris en charge sont <b>DOCX</b>, <b>PDF</b>, <b>TXT</b>.</p><p>
      Les documents juridiques suivent généralement un format d'écriture rigoureux. Nous utilisons les caractéristiques textuelles pour identifier les points de découpage. 
      </p><p>
      Les segments auront une granularité cohérente avec les "ARTICLES", incluant tous les textes de niveau supérieur dans chaque segment.
      </p>`,
      manual: `<p>Seuls les fichiers <b>PDF</b> sont pris en charge.</p><p>
      Nous supposons que les manuels ont une structure hiérarchique de sections, en utilisant les titres des sections les plus basses comme unité de base pour le découpage. Par conséquent, les figures et tableaux dans la même section ne seront pas séparés, ce qui peut entraîner des segments plus grands.
      </p>`,
      naive: `<p>Les formats de fichiers pris en charge sont <b>DOCX, EXCEL, PPT, IMAGE, PDF, TXT, MD, JSON, EML, HTML</b>.</p>
      <p>Cette méthode découpe les fichiers de manière "naïve" :</p>
      <p>
      <li>Utilisation d'un modèle de détection visuelle pour diviser les textes en segments plus petits.</li>
      <li>Ensuite, combiner les segments adjacents jusqu'à ce que le nombre de tokens dépasse le seuil spécifié, moment où un segment est créé.</li></p>`,
      paper: `<p>Seuls les fichiers <b>PDF</b> sont pris en charge.</p><p>
      Les articles seront découpés par section, comme <i>résumé, 1.1, 1.2</i>. </p><p>
      Cette approche permet au modèle de mieux résumer l'article et de fournir des réponses plus complètes et compréhensibles. 
      Cependant, elle augmente également le contexte dans les conversations et les coûts de calcul. Pendant une conversation, envisagez de réduire la valeur de "<b>topN</b>".</p>`,
      presentation: `<p>Les formats de fichiers pris en charge sont <b>PDF</b>, <b>PPTX</b>.</p><p>
      Chaque page des diapositives est traitée comme un segment, avec une vignette de l'image stockée.</p><p>
      <i>Cette méthode de découpage est automatiquement appliquée à tous les fichiers PPT téléversés, donc vous n'avez pas besoin de la spécifier manuellement.</i></p>`,
      qa: `
      <p>
      Cette méthode de découpage prend en charge les formats de fichiers <b>EXCEL</b> et <b>CSV/TXT</b>.
    </p>
    <li>
      Si le fichier est au format <b>Excel</b>, il doit contenir deux colonnes sans en-têtes : une pour les questions et l'autre pour les réponses, avec la colonne des questions précédant celle des réponses. Plusieurs feuilles sont acceptées si les colonnes sont bien structurées.
    </li>
    <li>
      Si le fichier est au format <b>CSV/TXT</b>, il doit être encodé en UTF-8 avec une TABULATION comme séparateur entre les questions et les réponses.
    </li>
    <p>
      <i>
        Les lignes de texte qui ne respectent pas ces règles seront ignorées et chaque paire Q/R sera considérée comme un segment distinct.
      </i>
    </p>
      `,
      resume: `<p>Les formats de fichiers pris en charge sont <b>DOCX</b>, <b>PDF</b>, <b>TXT</b>.
      </p><p>
      Les CV sous différentes formes sont analysés et organisés en données structurées pour faciliter la recherche de candidats par les recruteurs.
      </p>
      `,
      table: `<p>Les formats de fichiers pris en charge sont <b>EXCEL</b> et <b>CSV/TXT</b>.</p><p>
      Voici quelques conditions préalables et conseils :
      <ul>
    <li>Pour un fichier CSV ou TXT, le séparateur entre les colonnes doit être une <em><b>TABULATION</b></em>.</li>
    <li>La première ligne doit contenir les en-têtes de colonnes.</li>
    <li>Les en-têtes de colonnes doivent contenir des termes significatifs pour aider à la compréhension par le modèle LLM.
    Il est conseillé de juxtaposer des synonymes séparés par une barre oblique <i>"/"</i> et d'énumérer des valeurs entre parenthèses, par exemple : <i>"Genre/Sexe (homme, femme)"</i>.</p>
    Voici quelques exemples :<ol>
        <li>fournisseur/vendeur<b>"TAB"</b>Couleur (Jaune, Bleu, Marron)<b>"TAB"</b>Sexe/Genre (homme, femme)<b>"TAB"</b>taille (M, L, XL, XXL)</li>
        </ol>
        </p>
    </li>
    <li>Chaque ligne du tableau sera considérée comme un segment.</li>
    </ul>`,
      picture: `
    <p>Les fichiers image sont pris en charge, avec une prise en charge vidéo à venir.</p><p>
    Cette méthode utilise un modèle OCR pour extraire le texte des images.
    </p><p>
    Si le texte extrait par le modèle OCR est jugé insuffisant, un modèle visuel spécifié sera utilisé pour fournir une description de l'image.
    </p>`,
      one: `
    <p>Les formats de fichiers pris en charge sont <b>DOCX, EXCEL, PDF, TXT</b>.
    </p><p>
    Cette méthode traite chaque document dans son intégralité comme un segment.
    </p><p>
    Applicable lorsque vous avez besoin que le modèle résume un document entier, à condition qu'il puisse gérer cette quantité de contexte.
    </p>`,
      knowledgeGraph: `<p>Les formats de fichiers pris en charge sont <b>DOCX, EXCEL, PPT, IMAGE, PDF, TXT, MD, JSON, EML</b>

<p>Cette approche découpe les fichiers en utilisant la méthode "naïve"/"Générale". Elle divise un document en segments, puis combine les segments adjacents jusqu'à ce que le nombre de tokens dépasse le seuil spécifié, moment où un segment est créé.</p>
<p>Les segments sont ensuite transmis au modèle pour extraire des entités et relations afin de créer un graphe de connaissances et une carte mentale.</p>
<p>Assurez-vous de définir les <b>types d'entités</b>.</p>`,
      useRaptor: 'Utiliser RAPTOR pour améliorer la récupération',
      useRaptorTip:
        "Traitement Abstrait Récursif pour la Récupération Arborescente, voir https://huggingface.co/papers/2401.18059 pour plus d'informations.",
      prompt: 'Invite',
      promptTip: 'Prompt utilisé pour le résumé.',
      promptMessage: 'Un prompt est requis',
      promptText: `Veuillez résumer les paragraphes suivants. Faites attention aux chiffres, ne les inventez pas. Paragraphes comme suit :
      {cluster_content}
Ce qui précède est le contenu que vous devez résumer.`,
      maxToken: 'Nombre maximum de tokens',
      maxTokenTip: 'Nombre maximum de tokens pour le résumé.',
      maxTokenMessage: 'Le nombre maximum de tokens est requis',
      threshold: 'Seuil',
      thresholdTip: 'Plus le seuil est élevé, moins il y aura de clusters.',
      thresholdMessage: 'Un seuil est requis',
      maxCluster: 'Nombre maximal de clusters',
      maxClusterTip: 'Nombre maximal de clusters.',
      maxClusterMessage: 'Un nombre maximal de clusters est requis',
      randomSeed: 'Graine aléatoire',
      randomSeedMessage: 'Une graine aléatoire est requise',
      entityTypes: "Types d'entités",
      vietnamese: 'Vietnamien',
      pageRank: 'Classement des pages',
      pageRankTip: `Cela augmente le score de pertinence de la base de connaissances. Sa valeur sera ajoutée au score de pertinence de tous les segments récupérés à partir de cette base de connaissances. Utile lorsque vous effectuez une recherche dans plusieurs bases de connaissances et souhaitez attribuer un score de pagerank plus élevé à une base spécifique.`,
    },
    chunk: {
      chunk: 'Segment',
      bulk: 'Lot',
      selectAll: 'Tout sélectionner',
      enabledSelected: 'Activer la sélection',
      disabledSelected: 'Désactiver la sélection',
      deleteSelected: 'Supprimer la sélection',
      search: 'Rechercher',
      all: 'Tous',
      enabled: 'Activé',
      disabled: 'Désactivé',
      keyword: 'Mot-clé',
      function: 'Fonction',
      chunkMessage: 'Veuillez saisir une valeur !',
      full: 'Texte complet',
      ellipse: 'Ellipse',
      graph: 'Graphique de connaissances',
      mind: 'Carte mentale',
      question: 'Question',
      questionTip:
        "Si des questions sont données, l'intégration du segment sera basée sur celles-ci.",
    },
    chat: {
      qrCodeTitle: 'QR Code',
      scanQrCode: 'Scannez ce QR code pour accéder rapidement au lien.',
      newConversation: 'Nouvelle conversation',
      createAssistant: 'Créer un assistant',
      assistantSetting: "Paramètres de l'assistant",
      promptEngine: 'Moteur de requêtes',
      modelSetting: 'Paramètres du modèle',
      chat: 'Discussion',
      newChat: 'Nouvelle discussion',
      send: 'Envoyer',
      sendPlaceholder: "Envoyer un message à l'assistant...",
      chatConfiguration: 'Configuration de la discussion',
      chatConfigurationDescription:
        'Configurez ici un assistant de discussion dédié à vos bases de connaissances sélectionnées ! 💕',
      assistantName: "Nom de l'assistant",
      assistantNameMessage: "Le nom de l'assistant est requis",
      namePlaceholder: 'ex. CV Jarvis',
      assistantAvatar: "Avatar de l'assistant",
      language: 'Langue',
      emptyResponse: 'Réponse vide',
      emptyResponseTip: `Définissez cela comme une réponse si aucune donnée n'est trouvée dans les bases de connaissances pour votre requête, ou laissez ce champ vide pour permettre au LLM d'improviser.`,
      setAnOpener: 'Configurer une introduction',
      setAnOpenerInitial: `Salut ! Je suis votre assistant, que puis-je faire pour vous ?`,
      setAnOpenerTip: "Configurez un message d'accueil pour les utilisateurs.",
      knowledgeBases: 'Bases de connaissances',
      knowledgeBasesMessage: 'Veuillez sélectionner',
      knowledgeBasesTip:
        'Sélectionnez les bases de connaissances à associer à cet assistant de discussion.',
      system: 'Système',
      systemInitialValue: `Vous êtes un assistant intelligent. Veuillez résumer le contenu de la base de connaissances pour répondre à la question. Veuillez lister les données dans la base de connaissances et répondre en détail. Lorsque tout le contenu des bases de connaissances est hors sujet, votre réponse doit inclure la phrase "La réponse que vous cherchez n'est pas trouvée dans la base de connaissances !" Les réponses doivent prendre en compte l'historique des discussions.
      Voici la base de connaissances :
      {knowledge}
      Voici la base de connaissances.`,
      systemMessage: 'Veuillez saisir un message système !',
      systemTip:
        'Vos instructions ou messages pour le LLM, y compris son rôle, la longueur, le ton et la langue souhaités pour ses réponses.',
      topN: 'Top N',
      topNTip: `Tous les segments avec un score de similarité supérieur au "seuil de similarité" ne seront pas envoyés au LLM. Ce paramètre sélectionne les "Top N" segments parmi ceux récupérés.`,
      variable: 'Variable',
      variableTip: `Si vous utilisez des API de dialogue, les variables peuvent vous aider à interagir avec vos clients de différentes manières. 
      Les variables servent à remplir la partie "Système" dans l'invite pour guider le LLM.
      La variable "knowledge" est très spéciale et sera remplie avec les segments récupérés.
      Toutes les variables dans "Système" doivent être encadrées par des accolades.`,
      add: 'Ajouter',
      key: 'Clé',
      optional: 'Optionnel',
      operation: 'Opération',
      model: 'Modèle',
      modelTip: 'Modèle de langage pour la discussion',
      modelMessage: 'Veuillez sélectionner un modèle !',
      freedom: 'Liberté',
      improvise: 'Improviser',
      precise: 'Précis',
      balance: 'Équilibré',
      freedomTip: `"Précis" signifie que le LLM répondra prudemment. "Improviser" signifie que vous souhaitez que le LLM parle librement. "Équilibré" se situe entre la prudence et la liberté.`,
      temperature: 'Température',
      temperatureMessage: 'La température est requise',
      temperatureTip:
        "Ce paramètre contrôle l'aléatoire des prédictions du modèle. Une température plus basse rend le modèle plus sûr de ses réponses, tandis qu'une température plus élevée le rend plus créatif.",
      topP: 'Top P',
      topPMessage: 'Top P est requis',
      topPTip:
        "Également connu sous le nom d'échantillonnage par 'noyau', ce paramètre fixe un seuil pour choisir un sous-ensemble de mots probables.",
      presencePenalty: 'Pénalité de présence',
      presencePenaltyMessage: 'La pénalité de présence est requise',
      presencePenaltyTip:
        'Cela décourage le modèle de répéter la même information en pénalisant les mots déjà utilisés dans la conversation.',
      frequencyPenalty: 'Pénalité de fréquence',
      frequencyPenaltyMessage: 'La pénalité de fréquence est requise',
      frequencyPenaltyTip:
        'Similaire à la pénalité de présence, cela réduit la tendance du modèle à répéter fréquemment les mêmes mots.',
      maxTokens: 'Nombre maximal de jetons',
      maxTokensMessage: 'Le nombre maximal de jetons est requis',
      maxTokensTip:
        'Définit la longueur maximale de la réponse du modèle, mesurée en jetons.',
      maxTokensInvalidMessage:
        'Veuillez saisir un nombre valide pour le nombre maximal de jetons.',
      maxTokensMinMessage:
        'Le nombre maximal de jetons ne peut pas être inférieur à 0.',
      quote: 'Afficher la citation',
      quoteTip:
        'Indique si le texte original doit être affiché comme référence.',
      selfRag: 'Self-RAG',
      selfRagTip:
        'Veuillez vous référer à : https://huggingface.co/papers/2310.11511',
      overview: 'ID de discussion',
      pv: 'Nombre de messages',
      uv: "Nombre d'utilisateurs actifs",
      speed: 'Vitesse de sortie des jetons',
      tokens: 'Consommation de jetons',
      round: "Nombre d'interactions par session",
      thumbUp: 'Satisfaction des utilisateurs',
      preview: 'Aperçu',
      embedded: 'Intégré',
      serviceApiEndpoint: "Point de terminaison de l'API",
      apiKey: 'Clé API',
      apiReference: "Documentation de l'API",
      dateRange: 'Plage de dates :',
      backendServiceApi: 'Serveur API',
      createNewKey: 'Créer une nouvelle clé',
      created: 'Créé',
      action: 'Action',
      embedModalTitle: 'Intégrer dans un site web',
      comingSoon: 'Bientôt disponible',
      fullScreenTitle: 'Plein écran',
      fullScreenDescription:
        "Intégrez l'iframe suivant à l'emplacement souhaité de votre site web",
      partialTitle: 'Intégration partielle',
      extensionTitle: 'Extension Chrome',
      tokenError: "Veuillez d'abord créer une clé API !",
      betaError: 'Le champ beta de la clé API ne peut pas être vide !',
      searching: 'Recherche...',
      parsing: 'Analyse',
      uploading: 'Téléversement',
      uploadFailed: 'Échec du téléversement',
      regenerate: 'Régénérer',
      read: 'Lire le contenu',
      tts: 'Texte à voix',
      ttsTip:
        "Assurez-vous de sélectionner un modèle TTS dans la page des paramètres avant d'activer cette option.",
      relatedQuestion: 'Question connexe',
      answerTitle: 'R',
      multiTurn: 'Optimisation multi-tour',
      multiTurnTip:
        "Cela optimise les requêtes des utilisateurs en utilisant le contexte d'une conversation multi-tour. Une fois activé, il consomme des jetons LLM supplémentaires.",
      howUseId: "Comment utiliser l'ID de discussion ?",
      description: "Description de l'assistant",
    },
    setting: {
      profile: 'Profil',
      profileDescription:
        'Mettez à jour votre photo et vos informations personnelles ici.',
      maxTokens: 'Nombre maximal de tokens',
      maxTokensMessage: 'Le nombre maximal de tokens est requis.',
      maxTokensTip:
        'Définit la longueur maximale de la sortie du modèle, mesurée en nombre de tokens (mots ou fragments de mots).',
      maxTokensInvalidMessage:
        'Veuillez entrer un nombre valide pour le nombre maximal de tokens.',
      maxTokensMinMessage:
        'Le nombre maximal de tokens ne peut pas être inférieur à 0.',
      password: 'Mot de passe',
      passwordDescription:
        'Veuillez entrer votre mot de passe actuel pour le modifier.',
      model: 'Fournisseurs de modèles',
      modelDescription:
        'Définissez ici les paramètres du modèle et la clé API.',
      team: 'Équipe',
      system: 'Système',
      logout: 'Se déconnecter',
      api: 'API',
      username: "Nom d'utilisateur",
      usernameMessage: "Veuillez saisir votre nom d'utilisateur !",
      photo: 'Votre photo',
      photoDescription: 'Celle-ci sera affichée sur votre profil.',
      colorSchema: 'Schéma de couleurs',
      colorSchemaMessage: 'Veuillez sélectionner votre schéma de couleurs !',
      colorSchemaPlaceholder: 'Sélectionnez votre schéma de couleurs',
      bright: 'Clair',
      dark: 'Sombre',
      timezone: 'Fuseau horaire',
      timezoneMessage: 'Veuillez saisir votre fuseau horaire !',
      timezonePlaceholder: 'Sélectionnez votre fuseau horaire',
      email: 'Adresse e-mail',
      emailDescription:
        "Une fois enregistré, l'e-mail ne peut pas être modifié.",
      currentPassword: 'Mot de passe actuel',
      currentPasswordMessage: 'Veuillez entrer votre mot de passe !',
      newPassword: 'Nouveau mot de passe',
      newPasswordMessage: 'Veuillez entrer votre nouveau mot de passe !',
      newPasswordDescription:
        'Votre nouveau mot de passe doit contenir plus de 8 caractères.',
      confirmPassword: 'Confirmer le nouveau mot de passe',
      confirmPasswordMessage: 'Veuillez confirmer votre mot de passe !',
      confirmPasswordNonMatchMessage:
        'Le nouveau mot de passe que vous avez saisi ne correspond pas !',
      cancel: 'Annuler',
      addedModels: 'Modèles ajoutés',
      modelsToBeAdded: 'Modèles à ajouter',
      addTheModel: 'Ajouter le modèle',
      apiKey: 'Clé API',
      apiKeyMessage:
        'Veuillez saisir la clé API (pour un modèle déployé localement, ignorez cela).',
      apiKeyTip:
        "La clé API peut être obtenue en s'inscrivant auprès du fournisseur LLM correspondant.",
      showMoreModels: 'Afficher plus de modèles',
      baseUrl: 'URL de base',
      baseUrlTip:
        "Si votre clé API provient d'OpenAI, ignorez cela. Tout autre fournisseur intermédiaire fournira cette URL de base avec la clé API.",
      modify: 'Modifier',
      systemModelSettings: 'Paramètres du modèle système',
      chatModel: 'Modèle de chat',
      chatModelTip:
        'Le modèle de chat LLM par défaut utilisé pour toutes les nouvelles bases de connaissances créées.',
      embeddingModel: "Modèle d'intégration",
      embeddingModelTip:
        "Le modèle d'intégration par défaut utilisé pour toutes les nouvelles bases de connaissances créées.",
      img2txtModel: 'Modèle Img2txt',
      img2txtModelTip:
        'Le modèle multi-modules par défaut utilisé pour toutes les nouvelles bases de connaissances créées. Il peut décrire une image ou une vidéo.',
      sequence2txtModel: 'Modèle Sequence2txt',
      sequence2txtModelTip:
        'Le modèle ASR par défaut utilisé pour traduire les voix en texte correspondant.',
      rerankModel: 'Modèle de reréférencement',
      rerankModelTip:
        'Le modèle de reréférencement par défaut utilisé pour réorganiser les blocs récupérés par les questions des utilisateurs.',
      ttsModel: 'Modèle TTS',
      ttsModelTip:
        'Le modèle TTS par défaut utilisé pour générer une synthèse vocale lors des conversations, sur demande.',
      workspace: 'Espace de travail',
      upgrade: 'Mettre à niveau',
      addLlmTitle: 'Ajouter un LLM',
      modelName: 'Nom du modèle',
      modelID: 'ID du modèle',
      modelUid: 'UID du modèle',
      modelNameMessage: 'Veuillez entrer le nom de votre modèle !',
      modelType: 'Type de modèle',
      modelTypeMessage: 'Veuillez entrer le type de modèle !',
      addLlmBaseUrl: 'URL de base',
      baseUrlNameMessage: 'Veuillez entrer votre URL de base !',
      vision: 'Prend-il en charge Vision ?',
      ollamaLink: 'Comment intégrer {{name}}',
      FishAudioLink: 'Comment utiliser FishAudio',
      TencentCloudLink: 'Comment utiliser TencentCloud ASR',
      volcModelNameMessage: 'Veuillez entrer le nom de votre modèle !',
      addEndpointID: "ID de l'Endpoint du modèle",
      endpointIDMessage: "Veuillez entrer l'ID de l'Endpoint du modèle",
      addArkApiKey: 'VOLC ARK_API_KEY',
      ArkApiKeyMessage: 'Veuillez entrer votre ARK_API_KEY',
      bedrockModelNameMessage: 'Veuillez entrer le nom de votre modèle !',
      addBedrockEngineAK: "Clé d'accès",
      bedrockAKMessage: "Veuillez entrer votre clé d'accès !",
      addBedrockSK: 'Clé secrète',
      bedrockSKMessage: 'Veuillez entrer votre clé secrète !',
      bedrockRegion: 'Région AWS',
      bedrockRegionMessage: 'Veuillez sélectionner !',
      'us-east-1': 'US East (N. Virginia)',
      'us-west-2': 'US West (Oregon)',
      'ap-southeast-1': 'Asie Pacifique (Singapour)',
      'ap-northeast-1': 'Asie Pacifique (Tokyo)',
      'eu-central-1': 'Europe (Francfort)',
      'us-gov-west-1': 'AWS GovCloud (US-West)',
      'ap-southeast-2': 'Asie Pacifique (Sydney)',
      addHunyuanSID: 'Hunyuan Secret ID',
      HunyuanSIDMessage: 'Veuillez entrer votre Secret ID',
      addHunyuanSK: 'Clé secrète Hunyuan',
      HunyuanSKMessage: 'Veuillez entrer votre Secret Key',
      addTencentCloudSID: 'TencentCloud Secret ID',
      TencentCloudSIDMessage: 'Veuillez entrer votre Secret ID',
      addTencentCloudSK: 'TencentCloud Secret Key',
      TencentCloudSKMessage: 'Veuillez entrer votre Secret Key',
      SparkModelNameMessage: 'Veuillez sélectionner le modèle Spark',
      addSparkAPIPassword: 'Spark APIPassword',
      SparkAPIPasswordMessage: 'Veuillez entrer votre APIPassword',
      addSparkAPPID: 'Spark APPID',
      SparkAPPIDMessage: 'Veuillez entrer votre APPID',
      addSparkAPISecret: 'Spark APISecret',
      SparkAPISecretMessage: 'Veuillez entrer votre APISecret',
      addSparkAPIKey: 'Spark APIKey',
      SparkAPIKeyMessage: 'Veuillez entrer votre APIKey',
      yiyanModelNameMessage: 'Veuillez entrer le nom du modèle',
      addyiyanAK: 'Clé API yiyan',
      yiyanAKMessage: 'Veuillez entrer votre clé API',
      addyiyanSK: 'Clé secrète yiyan',
      yiyanSKMessage: 'Veuillez entrer votre clé secrète',
      FishAudioModelNameMessage:
        'Veuillez donner un nom au modèle de synthèse vocale',
      addFishAudioAK: 'Clé API Fish Audio',
      addFishAudioAKMessage: 'Veuillez entrer votre clé API',
      addFishAudioRefID: 'ID de référence FishAudio',
      addFishAudioRefIDMessage:
        "Veuillez entrer l'ID de référence (laisser vide pour utiliser le modèle par défaut).",
      GoogleModelIDMessage: 'Veuillez entrer votre ID de modèle',
      addGoogleProjectID: 'ID du projet',
      GoogleProjectIDMessage: 'Veuillez entrer votre ID de projet',
      addGoogleServiceAccountKey:
        "Clé du compte de service (laisser vide si vous utilisez les informations d'identification par défaut de l'application)",
      GoogleServiceAccountKeyMessage:
        'Veuillez entrer la clé du compte de service Google Cloud en format base64',
      addGoogleRegion: 'Région Google Cloud',
      GoogleRegionMessage: 'Veuillez entrer la région Google Cloud',
      modelProvidersWarn: `Veuillez ajouter à la fois le modèle d'embeddings et le LLM dans <b>Paramètres > Fournisseurs de modèles</b> d'abord. Ensuite, définissez-les dans les "Paramètres du modèle système".`,
      apiVersion: "Version de l'API",
      apiVersionMessage: "Veuillez entrer la version de l'API",
      add: 'Ajouter',
      updateDate: 'Date de mise à jour',
      role: 'Rôle',
      invite: 'Inviter',
      agree: 'Accepter',
      refuse: 'Refuser',
      teamMembers: "Membres de l'équipe",
      joinedTeams: 'Équipes rejointes',
      sureDelete: 'Êtes-vous sûr de vouloir supprimer ce membre ?',
      quit: 'Quitter',
      sureQuit:
        "Êtes-vous sûr de vouloir quitter l'équipe à laquelle vous avez adhéré ?",
    },
    message: {
      registered: 'Enregistré!',
      logout: 'Déconnexion',
      logged: 'Connecté!',
      pleaseSelectChunk: 'Veuillez sélectionner le segment!',
      modified: 'Modifié',
      created: 'Créé',
      deleted: 'Supprimé',
      renamed: 'Renommé',
      operated: 'Opéré',
      updated: 'Mis à jour',
      uploaded: 'Téléchargé',
      200: 'Le serveur retourne avec succès les données demandées.',
      201: 'Création ou modification des données réussie.',
      202: "Une demande a été mise en file d'attente dans le fond (tâche asynchrone).",
      204: 'Les données ont été supprimées avec succès.',
      400: "Il y a eu une erreur dans la demande émise, et le serveur n'a pas créé ou modifié les données.",
      401: "L'utilisateur n'a pas les permissions (token incorrect, nom d'utilisateur, mot de passe).",
      403: "L'utilisateur est autorisé, mais l'accès est interdit.",
      404: "La demande a été faite pour un enregistrement qui n'existe pas, et le serveur n'a pas exécuté l'opération.",
      406: "Le format demandé n'est pas disponible.",
      410: 'La ressource demandée a été définitivement supprimée et ne sera plus disponible.',
      413: 'La taille totale des fichiers téléchargés en une seule fois est trop importante.',
      422: "Lors de la création d'un objet, une erreur de validation est survenue.",
      500: "Une erreur interne du serveur s'est produite, veuillez vérifier le serveur.",
      502: 'Erreur de passerelle.',
      503: 'Le service est indisponible et le serveur est temporairement surchargé ou en maintenance.',
      504: 'Délai de passerelle.',
      requestError: 'Erreur de demande',
      networkAnomalyDescription:
        'Il y a une anomalie dans votre réseau et vous ne pouvez pas vous connecter au serveur.',
      networkAnomaly: 'anomalie réseau',
      hint: 'indice',
    },

    fileManager: {
      name: 'Nom',
      uploadDate: 'Date de téléchargement',
      knowledgeBase: 'Base de connaissances',
      size: 'Taille',
      action: 'Action',
      addToKnowledge: 'Lier à la base de connaissances',
      pleaseSelect: 'Veuillez sélectionner',
      newFolder: 'Nouveau dossier',
      file: 'Fichier',
      uploadFile: 'Télécharger un fichier',
      directory: 'Dossier',
      uploadTitle:
        'Cliquez ou faites glisser le fichier ici pour le télécharger',
      uploadDescription:
        "Prise en charge du téléchargement simple ou multiple. Strictement interdit de télécharger des données d'entreprise ou d'autres fichiers interdits.",
      local: 'Téléchargements locaux',
      s3: 'Téléchargements S3',
      preview: 'Aperçu',
      fileError: 'Erreur de fichier',
      uploadLimit:
        'La taille du fichier ne peut pas dépasser 10 Mo et le nombre total de fichiers ne peut pas dépasser 128.',
      destinationFolder: 'Dossier de destination',
    },
    flow: {
      cite: 'Citer',
      citeTip: 'Conseil de citation',
      name: 'Nom',
      nameMessage: 'Veuillez entrer un nom',
      description: 'Description',
      examples: 'Exemples',
      to: 'À',
      msg: 'Messages',
      messagePlaceholder: 'message',
      messageMsg: 'Veuillez entrer un message ou supprimer ce champ.',
      addField: 'Ajouter un champ',
      addMessage: 'Ajouter un message',
      loop: 'Boucle',
      loopTip:
        "La boucle est la limite supérieure du nombre de boucles du composant actuel. Si le nombre de boucles dépasse la valeur de la boucle, cela signifie que le composant ne peut pas compléter la tâche actuelle, veuillez réoptimiser l'agent.",
      yes: 'Oui',
      no: 'Non',
      key: 'Clé',
      componentId: 'ID du composant',
      add: 'Ajouter',
      operation: 'Opération',
      run: 'Exécuter',
      save: 'Enregistrer',
      title: 'ID :',
      beginDescription: "C'est là que le flux commence.",
      answerDescription:
        "Un composant qui sert d'interface entre l'humain et le bot, recevant les entrées utilisateur et affichant les réponses de l'agent.",
      retrievalDescription:
        "Un composant qui récupère des informations à partir d'une base de connaissances spécifiée et retourne 'Réponse vide' si aucune information n'est trouvée. Assurez-vous que la bonne base de connaissances est sélectionnée.",
      generateDescription:
        'Un composant qui invite le LLM à générer des réponses. Assurez-vous que le prompt est correctement défini.',
      categorizeDescription:
        'Un composant qui utilise le LLM pour classer les entrées utilisateur dans des catégories prédéfinies. Assurez-vous de spécifier le nom, la description et les exemples pour chaque catégorie, ainsi que le composant suivant correspondant.',
      relevantDescription:
        "Un composant qui utilise le LLM pour évaluer si la sortie en amont est pertinente pour la dernière requête de l'utilisateur. Assurez-vous de spécifier le prochain composant pour chaque résultat de juge.",
      rewriteQuestionDescription:
        "Un composant qui affine une requête utilisateur si elle ne parvient pas à récupérer des informations pertinentes à partir de la base de connaissances. Il répète ce processus jusqu'à ce que la limite supérieure de boucles prédéfinie soit atteinte. Assurez-vous que son amont est 'Pertinent' et son aval est 'Récupération'.",
      messageDescription:
        "Un composant qui envoie un message statique. Si plusieurs messages sont fournis, il en sélectionne un aléatoirement pour l'envoyer. Assurez-vous que son aval est 'Réponse', le composant interface.",
      keywordDescription:
        "Un composant qui récupère les résultats de recherche les plus pertinents à partir de l'entrée utilisateur. Assurez-vous que la valeur TopN est correctement définie avant utilisation.",
      switchDescription:
        "Un composant qui évalue des conditions basées sur la sortie des composants précédents et oriente le flux d'exécution en conséquence. Il permet une logique de branchement complexe en définissant des cas et en spécifiant des actions pour chaque cas ou action par défaut si aucune condition n'est remplie.",
      wikipediaDescription:
        'Un composant qui effectue des recherches sur wikipedia.org, en utilisant TopN pour spécifier le nombre de résultats de recherche. Il complète les bases de connaissances existantes.',
      promptText:
        'Veuillez résumer les paragraphes suivants. Faites attention aux nombres, ne fabriquez rien. Paragraphes comme suit : {input} Le contenu ci-dessus que vous devez résumer.',
      createGraph: 'Créer un agent',
      createFromTemplates: 'Créer à partir de modèles',
      retrieval: 'Récupération',
      generate: 'Générer',
      answer: 'Interagir',
      categorize: 'Classer',
      relevant: 'Pertinent',
      rewriteQuestion: 'Réécrire',
      rewrite: 'Réécrire',
      begin: 'Commencer',
      PersoTemplate: 'Model_Perso',
      message: 'Message',
      blank: 'Vider',
      createFromNothing: 'Créer votre agent à partir de zéro',
      addItem: 'Ajouter un élément',
      addSubItem: 'Ajouter un sous-élément',
      nameRequiredMsg: 'Le nom est requis',
      nameRepeatedMsg: 'Le nom ne peut pas être répété',
      keywordExtract: 'Mot-clé',
      keywordExtractDescription:
        "Un composant qui extrait des mots-clés à partir d'une requête utilisateur, avec Top N spécifiant le nombre de mots-clés à extraire.",
      baidu: 'Baidu',
      baiduDescription:
        'Un composant qui effectue des recherches sur baidu.com, en utilisant TopN pour spécifier le nombre de résultats de recherche. Il complète les bases de connaissances existantes.',
      duckDuckGo: 'DuckDuckGo',
      duckDuckGoDescription:
        "Un composant qui effectue des recherches sur duckduckgo.com, permettant de spécifier le nombre de résultats de recherche à l'aide de TopN. Il complète les bases de connaissances existantes.",
      channel: 'Canal',
      channelTip:
        "Effectue une recherche textuelle ou une recherche d'actualité dans l'entrée du composant.",
      text: 'Texte',
      news: 'Actualités',
      messageHistoryWindowSize:
        "Taille de la fenêtre de l'historique des messages",
      messageHistoryWindowSizeTip:
        "La taille de la fenêtre de l'historique de la conversation nécessaire à voir par le LLM. Plus c'est grand, mieux c'est. Mais attention à la longueur maximale du contenu de LLM.",
      wikipedia: 'Wikipedia',
      pubMed: 'PubMed',
      pubMedDescription:
        "Un composant qui effectue des recherches sur https://pubmed.ncbi.nlm.nih.gov/, permettant de spécifier le nombre de résultats de recherche à l'aide de TopN. Il complète les bases de connaissances existantes.",
      email: 'E-mail',
      emailTip:
        "L'e-mail est un champ requis. Vous devez entrer une adresse e-mail ici.",
      arXiv: 'ArXiv',
      arXivDescription:
        "Un composant qui effectue des recherches sur https://arxiv.org/, permettant de spécifier le nombre de résultats de recherche à l'aide de TopN. Il complète les bases de connaissances existantes.",
      sortBy: 'Trier par',
      submittedDate: 'Date de soumission',
      lastUpdatedDate: 'Dernière date de mise à jour',
      relevance: 'Pertinence',
      google: 'Google',
      googleDescription:
        "Un composant qui effectue des recherches sur https://www.google.com/, permettant de spécifier le nombre de résultats de recherche à l'aide de TopN. Il complète les bases de connaissances existantes. Veuillez noter que cela nécessite une clé API de serpapi.com.",
      bing: 'Bing',
      bingDescription:
        "Un composant qui effectue des recherches sur https://www.bing.com/, permettant de spécifier le nombre de résultats de recherche à l'aide de TopN. Il complète les bases de connaissances existantes. Veuillez noter que cela nécessite une clé API de microsoft.com.",
      apiKey: 'Clé API',
      country: 'Pays & Région',
      language: 'Langue',
      googleScholar: 'Google Scholar',
      googleScholarDescription:
        'Ce composant est utilisé pour obtenir des résultats de recherche depuis https://scholar.google.com/. En général, il sert de complément aux bases de connaissances. Top N spécifie le nombre de résultats de recherche dont vous avez besoin.',
      yearLow: 'Année basse',
      yearHigh: 'Année haute',
      patents: 'Brevets',
      data: 'Données',
      deepL: 'DeepL',
      deepLDescription:
        'Ce composant est utilisé pour obtenir des traductions depuis https://www.deepl.com/. En général, il fournit un résultat de traduction plus spécialisé.',
      authKey: "Clé d'authentification",
      sourceLang: 'Langue source',
      targetLang: 'Langue cible',
      gitHub: 'GitHub',
      githubDescription:
        'Ce composant est utilisé pour rechercher le dépôt à partir de https://github.com/. Top N spécifie le nombre de résultats de recherche ajustés.',
      baiduFanyi: 'BaiduFanyi',
      baiduFanyiDescription:
        'Ce composant est utilisé pour obtenir des traductions depuis https://fanyi.baidu.com/. En général, il fournit un résultat de traduction plus spécialisé.',
      appid: "ID de l'application",
      secretKey: 'Clé secrète',
      domain: 'Domaine',
      transType: 'Type de traduction',

      baiduSecretKeyOptions: {
        translate: 'Traduction générale',
        fieldtranslate: 'Traduction spécialisée',
      },
      baiduDomainOptions: {
        it: "Technologie de l'information",
        finance: 'Finances et économie',
        machinery: 'Fabrication de machines',
        senimed: 'Biomédecine',
        novel: 'Littérature en ligne',
        academic: 'Documents académiques',
        aerospace: 'Aérospatiale',
        wiki: 'Sciences humaines et sociales',
        news: 'Nouvelles et informations',
        law: 'Législation',
        contract: 'Contrat',
      },
      baiduSourceLangOptions: {
        auto: 'Détection automatique',
        zh: 'Chinois',
        en: 'Anglais',
        yue: 'Cantonais',
        wyw: 'Chinois classique',
        jp: 'Japonais',
        kor: 'Coréen',
        fra: 'Français',
        spa: 'Espagnol',
        th: 'Thaï',
        ara: 'Arabe',
        ru: 'Russe',
        pt: 'Portugais',
        de: 'Allemand',
        it: 'Italien',
        el: 'Grec',
        nl: 'Néerlandais',
        pl: 'Polonais',
        bul: 'Bulgare',
        est: 'Estonien',
        dan: 'Danois',
        fin: 'Finnois',
        cs: 'Tchèque',
        rom: 'Roumain',
        slo: 'Slovène',
        swe: 'Suédois',
        hu: 'Hongrois',
        cht: 'Chinois traditionnel',
        vie: 'Vietnamien',
      },
      qWeather: 'QWeather',
      qWeatherDescription:
        "Ce composant est utilisé pour obtenir des informations météorologiques à partir de https://www.qweather.com/. Vous pouvez obtenir la météo, les indices, la qualité de l'air.",
      lang: 'Langue',
      type: 'Type',
      webApiKey: 'Clé API Web',
      userType: "Type d'utilisateur",
      timePeriod: 'Période de temps',
      qWeatherLangOptions: {
        zh: 'Chinois simplifié',
        'zh-hant': 'Chinois traditionnel',
        en: 'Anglais',
        de: 'Allemand',
        es: 'Espagnol',
        fr: 'Français',
        it: 'Italien',
        ja: 'Japonais',
        ko: 'Coréen',
        ru: 'Russe',
        hi: 'Hindi',
        th: 'Thaï',
        ar: 'Arabe',
        pt: 'Portugais',
        bn: 'Bengali',
        ms: 'Malais',
        nl: 'Néerlandais',
        el: 'Grec',
        la: 'Latin',
        sv: 'Suédois',
        id: 'Indonésien',
        pl: 'Polonais',
        tr: 'Turc',
        cs: 'Tchèque',
        et: 'Estonien',
        vi: 'Vietnamien',
        fil: 'Filipino',
        fi: 'Finnois',
        he: 'Hébreu',
        is: 'Islandais',
        nb: 'Norvégien',
      },
      qWeatherTypeOptions: {
        weather: 'Prévision météo',
        indices: 'Indice de vie météo',
        airquality: "Qualité de l'air",
      },

      qWeatherUserTypeOptions: {
        free: 'Abonné gratuit',
        paid: 'Abonné payant',
      },

      qWeatherTimePeriodOptions: {
        now: 'Maintenant',
        '3d': '3 jours',
        '7d': '7 jours',
        '10d': '10 jours',
        '15d': '12 jours',
        '30d': '30 jours',
      },

      publish: 'API',
      exeSQL: 'ExeSQL',
      exeSQLDescription:
        'Le composant interroge les résultats depuis la base de données relationnelle correspondante via des instructions SQL. Supporte MySQL, PostgreSQL, MariaDB.',
      dbType: 'Type de base de données',
      database: 'Base de données',
      username: "Nom d'utilisateur",
      host: 'Hôte',
      port: 'Port',
      password: 'Mot de passe',
      switch: 'Interrupteur',
      logicalOperator: 'Opérateur logique',

      switchOperatorOptions: {
        equal: 'égal',
        notEqual: 'différent',
        gt: 'Plus grand que',
        ge: 'Plus grand ou égal',
        lt: 'Moins que',
        le: 'Moins ou égal',
        contains: 'Contient',
        notContains: 'Ne contient pas',
        startWith: 'Commence par',
        endWith: 'Finit par',
        empty: 'Vide',
        notEmpty: 'Pas vide',
      },
      switchLogicOperatorOptions: {
        and: 'Et',
        or: 'Ou',
      },
      operator: 'Opérateur',
      value: 'Valeur',
      useTemplate: 'Utiliser ce modèle',
      wenCai: 'WenCai',
      queryType: 'Type de requête',
      wenCaiDescription:
        "Le composant peut être utilisé pour obtenir des informations sur une large gamme de domaines financiers, y compris mais sans s'y limiter, les actions, les fonds, etc...",

      wenCaiQueryTypeOptions: {
        stock: 'action',
        zhishu: 'indice',
        fund: 'fonds',
        hkstock: 'actions Hong Kong',
        usstock: 'marché boursier américain',
        threeboard: 'Marché OTC nouveau',
        conbond: 'Obligation convertible',
        insurance: 'assurance',
        futures: 'contrats à terme',
        lccp: 'Financement',
        foreign_exchange: 'change',
      },

      akShare: 'AkShare',
      akShareDescription:
        "Ce composant peut être utilisé pour obtenir des informations financières pour l'action correspondante depuis le site Eastmoney.",
      yahooFinance: 'YahooFinance',
      yahooFinanceDescription:
        "Le composant interroge les informations sur l'entreprise en fonction du symbole boursier fourni.",
      crawler: 'Robot Web',
      crawlerDescription:
        "Ce composant peut être utilisé pour extraire le code source HTML à partir d'une URL spécifiée.",
      proxy: 'Proxy',

      crawlerResultOptions: {
        html: 'Html',
        markdown: 'Markdown',
        content: 'Contenu',
      },
      extractType: "Type d'extraction",
      info: 'Info',
      history: 'Historique',
      financials: 'Finances',
      balanceSheet: 'Bilan',
      cashFlowStatement: 'État des flux de trésorerie',
      jin10: 'Jin10',
      jin10Description:
        "Ce composant permet d'accéder aux informations dans le secteur financier à partir de la plateforme ouverte Jin10, y compris les nouvelles rapides, le calendrier, les cotations, les références.",
      flashType: 'Type de flash',
      filter: 'Filtrer',
      contain: 'Contenir',
      calendarType: 'Type de calendrier',
      calendarDatashape: 'Forme de données du calendrier',
      symbolsDatatype: 'Type de données des symboles',
      symbolsType: 'Type de symboles',

      jin10TypeOptions: {
        flash: 'Nouvelles rapides',
        calendar: 'Calendrier',
        symbols: 'Citations',
        news: 'Référence',
      },
      jin10FlashTypeOptions: {
        '1': 'Nouvelles de marché',
        '2': 'Nouvelles sur les futures',
        '3': 'Nouvelles US-Hong Kong',
        '4': 'Nouvelles sur les actions A',
        '5': 'Nouvelles sur les matières premières & devises',
      },
      jin10CalendarTypeOptions: {
        cj: 'Calendrier des données macroéconomiques',
        qh: 'Calendrier des futures',
        hk: 'Calendrier du marché des actions à Hong Kong',
        us: 'Calendrier du marché des actions aux États-Unis',
      },
      jin10CalendarDatashapeOptions: {
        data: 'Données',
        event: 'Événement',
        holiday: 'Fête',
      },
      jin10SymbolsTypeOptions: {
        GOODS: 'Citations de marchandises',
        FOREX: 'Citations de devises',
        FUTURE: 'Citations du marché international',
        CRYPTO: 'Citations des cryptomonnaies',
      },
      jin10SymbolsDatatypeOptions: {
        symbols: 'Liste des marchandises',
        quotes: 'Dernières citations du marché',
      },
      concentrator: 'Concentrateur',
      concentratorDescription:
        'Un composant qui reçoit la sortie du composant en amont et la passe comme entrée aux composants en aval.',
      tuShare: 'TuShare',
      tuShareDescription:
        "Ce composant peut être utilisé pour obtenir des résumés d'actualités financières provenant des sites financiers principaux, aidant à la recherche industrielle et quantitative.",
      tuShareSrcOptions: {
        sina: 'Sina',
        wallstreetcn: 'Wallstreetcn',
        '10jqka': 'Straight flush',
        eastmoney: 'Eastmoney',
        yuncaijing: 'YUNCAIJING',
        fenghuang: 'FENGHUANG',
        jinrongjie: 'JRJ',
      },
      token: 'Jeton',
      src: 'Source',
      startDate: 'Date de début',
      endDate: 'Date de fin',
      keyword: 'Mot-clé',
      note: 'Remarque',
      noteDescription: 'Remarque',
      notePlaceholder: 'Veuillez entrer une remarque',
      invoke: 'Invok',
      invokeDescription:
        'Ce composant peut invoquer un appel à un point de terminaison distant. Placez la sortie des autres composants en tant que paramètres ou définissez des paramètres constants pour appeler des fonctions distantes.',
      url: 'URL',
      method: 'Méthode',
      timeout: "Délai d'attente",
      headers: 'En-têtes',
      cleanHtml: 'Nettoyer HTML',
      cleanHtmlTip:
        'Si la réponse est formatée en HTML et que seules les informations principales sont souhaitées, activez cette option.',
      reference: 'Référence',
      input: 'Entrée',
      output: 'Sortie',
      parameter: 'Paramètre',
      howUseId: "Comment utiliser l'ID de l'agent ?",
      content: 'Contenu',
      operationResults: "Résultats de l'opération",
      autosaved: 'Enregistré automatiquement',
      optional: 'Optionnel',
      pasteFileLink: 'Coller le lien du fichier',
      testRun: 'Exécution de test',
      template: 'Modèle',
      persoTemplate: 'Modèle_perso',

      templateDescription:
        'Ce composant est utilisé pour la mise en forme des sorties de divers composants.',
      persoTemplateDescription:
        'Ce composant est utilisé pour personnaliser un  modele ',
      emailComponent: 'E-mail',
      emailDescription: "Envoyer un e-mail à l'adresse spécifiée",
      smtpServer: 'Serveur SMTP',
      smtpPort: 'Port SMTP',
      senderEmail: "E-mail de l'expéditeur",
      authCode: "Code d'autorisation",
      senderName: "Nom de l'expéditeur",
      toEmail: 'E-mail du destinataire',
      ccEmail: 'E-mail en copie',
      emailSubject: 'Objet',
      emailContent: 'Contenu',
      smtpServerRequired: "Veuillez entrer l'adresse du serveur SMTP",
      senderEmailRequired: "Veuillez entrer l'e-mail de l'expéditeur",
      authCodeRequired: "Veuillez entrer le code d'autorisation",
      toEmailRequired: "Veuillez entrer l'e-mail du destinataire",
      emailContentRequired: "Veuillez entrer le contenu de l'e-mail",
      emailSentSuccess: 'E-mail envoyé avec succès',
      emailSentFailed: "Échec de l'envoi de l'e-mail",
      dynamicParameters: 'Paramètres dynamiques',
      jsonFormatTip:
        'Le composant en amont doit fournir une chaîne JSON dans le format suivant :',
      toEmailTip: 'to_email: E-mail du destinataire (Obligatoire)',
      ccEmailTip: 'cc_email: E-mail en copie (Optionnel)',
      subjectTip: "subject: Objet de l'e-mail (Optionnel)",
      contentTip: "content: Contenu de l'e-mail (Optionnel)",
      jsonUploadTypeErrorMessage: 'Veuillez télécharger un fichier JSON',
      jsonUploadContentErrorMessage: 'Erreur de fichier JSON',
    },

    footer: {
      profile: 'Tous droits réservés @ React',
    },

    layout: {
      file: 'fichier',
      knowledge: 'connaissances',
      chat: 'discussion',
    },
  },
};
