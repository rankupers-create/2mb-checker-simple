// Translations for all supported languages
export const translations = {
  en: {
    // Header
    appName: "Google Bot Limit Checker",
    home: "Home",
    documentation: "Documentation",
    googleDocs: "Google Docs",
    
    // Hero Section
    heroTitle: "Google's crawl limit is now",
    heroTitleHighlight: "2 MB",
    heroSubtitle: "Check if your HTML content is being cut off by the indexing bot.",
    
    // URL Checker
    placeholder: "Enter URL (e.g. https://example.com)",
    checkNow: "Check Now",
    analyzing: "Analyzing...",
    officialDocs: "Official Googlebot Documentation",
    tipTitle: "Tip:",
    tipText: "For a robust, bulk analysis, use",
    screamingFrog: "Screaming Frog",
    tipTextEnd: "which simulates this limit perfectly.",
    
    // Validation
    enterUrl: "Please enter a URL",
    invalidUrl: "Please enter a valid URL",
    
    // Results
    allClear: "All Clear!",
    allClearMsg: "Your page is within Google's 2MB crawl limit. All content should be indexed properly.",
    approachingLimit: "Approaching Limit",
    approachingLimitMsg: "Your page is close to the 2MB limit. Consider optimizing to ensure all content is indexed.",
    limitExceeded: "Limit Exceeded!",
    limitExceededMsg: "Your page exceeds the 2MB limit. Content after the cutoff will NOT be indexed by Google.",
    analysisComplete: "Analysis Complete",
    reviewResults: "Review the results below.",
    analyzedUrl: "Analyzed URL:",
    htmlSize: "HTML Size",
    ofLimit: "of limit",
    uncompressed: "Uncompressed",
    compressed: "Compressed",
    gzipSize: "Gzip size",
    loadTime: "Load Time",
    estimated: "Estimated",
    crawlScore: "Crawl Score",
    crawlability: "Crawlability",
    resourcesBreakdown: "Resources Breakdown",
    files: "files",
    truncationDetected: "Content Truncation Detected",
    truncationMsg: "Googlebot will stop crawling at byte",
    truncationMsg2: "Approximately",
    truncationMsg3: "of your content will NOT be indexed.",
    googleQuote: '"Once the limit is reached, Googlebot interrupts the retrieval and sends only the downloaded part for indexing."',
    googleQuoteSource: "— Google Search Central",
    recommendations: "Recommendations",
    recPass1: "Your HTML is within the safe limit - great job!",
    recPass2: "Continue monitoring after major content updates",
    recWarning1: "Consider removing inline JavaScript and CSS",
    recWarning2: "Minify your HTML output to reduce size",
    recWarning3: "Prioritize important content at the top of the page",
    recFail1: "Urgent: Move inline CSS and JavaScript to external files",
    recFail2: "Remove HTML comments and unnecessary whitespace",
    recFail3: "Implement pagination for long content",
    recFail4: "Ensure critical SEO content appears in the first 2MB",
    
    // About Section
    aboutTitle: "About the 2MB Limit",
    htmlFiles: "HTML Files:",
    htmlFilesDesc: "Googlebot stops crawling an HTML file after the first 2 MB. Any content after this cutoff is not indexed. This limit applies to the uncompressed data.",
    resources: "Resources:",
    resourcesDesc: "Each resource referenced in the HTML (CSS, JavaScript) is fetched separately and is subject to the same 2 MB limit.",
    pdfFiles: "PDF Files:",
    pdfFilesDesc: "Googlebot is more generous with PDFs, crawling the first 64 MB.",
    
    // Documentation Page
    completeGuide: "Complete Guide",
    docTitle: "Understanding Google's 2MB Crawl Limit",
    docIntro: "Google officially documented a critical limitation: Googlebot will only crawl and index the first 2 MB of an HTML page. Any content beyond this limit is simply ignored, potentially leaving important parts of your website invisible to search engines.",
    keyTakeaways: "Key Takeaways",
    maxHtmlSize: "Maximum HTML size for indexing",
    maxPdfSize: "Maximum PDF size for indexing",
    uncompressedLabel: "Uncompressed",
    limitApplies: "The limit applies to raw data",
    perResource: "Per Resource",
    eachFileLimit: "Each file has its own limit",
    
    // Documentation Sections
    whatIs2mbTitle: "What is the 2MB Limit?",
    whatIs2mbContent: "Googlebot, the web crawler used by Google, has a limit on how much data it will download from a single page. For HTML files, this limit is 2 MB of uncompressed data. Once this limit is reached, Googlebot stops downloading and indexes only what it has received.",
    whyMattersTitle: "Why Does This Matter for SEO?",
    whyMattersContent: "If your important content, links, or structured data appear after the 2MB cutoff point, Google won't see them. This means: important content won't be indexed, internal links might be missed affecting crawl budget, structured data could be truncated, and your rankings could suffer.",
    whatCountsTitle: "What Counts Towards the Limit?",
    whatCountsContent: "The 2MB limit applies to the raw, uncompressed HTML response. This includes all HTML tags, inline CSS, inline JavaScript, comments, and whitespace. External resources (CSS files, JS files, images) are fetched separately and each has its own 2MB limit.",
    pdfLimitsTitle: "PDF Files Have Different Limits",
    pdfLimitsContent: "For PDF documents, Googlebot is more generous, crawling up to 64 MB of content. However, the same principle applies - content beyond this limit won't be indexed.",
    howToFixTitle: "How to Fix Oversized Pages",
    howToFixContent: "1. Remove inline CSS and JavaScript - move them to external files. 2. Minify your HTML output. 3. Remove unnecessary HTML comments. 4. Implement pagination for long content. 5. Use lazy loading for below-the-fold content. 6. Prioritize important content at the top of the HTML.",
    testingTitle: "Testing Your Pages",
    testingContent: "Use this tool to check if your pages exceed the 2MB limit. For bulk analysis, tools like Screaming Frog can simulate this limit across your entire website. Regular monitoring is recommended, especially after major content updates.",
    
    // What Counts Section
    whatCountsTowards: "What Counts Towards the 2MB Limit?",
    includedInCount: "Included in the count:",
    includedItem1: "All HTML tags and content",
    includedItem2: "Inline CSS (style tags)",
    includedItem3: "Inline JavaScript (script tags)",
    includedItem4: "HTML comments",
    includedItem5: "Whitespace and formatting",
    fetchedSeparately: "Fetched separately:",
    fetchedItem1: "External CSS files",
    fetchedItem2: "External JavaScript files",
    fetchedItem3: "Images and media",
    fetchedItem4: "Fonts",
    fetchedItem5: "Other external resources",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faq1q: "Does compression help with the 2MB limit?",
    faq1a: "No. The limit applies to uncompressed data. While gzip compression helps with transfer speed, Googlebot measures the decompressed size.",
    faq2q: "Do external resources count towards the limit?",
    faq2a: "No. External CSS, JavaScript, and images are fetched separately. Each external resource has its own 2MB limit.",
    faq3q: "What happens to content after 2MB?",
    faq3a: "Content beyond 2MB is completely ignored by Googlebot. It won't be indexed, and any links in that portion won't be discovered.",
    faq4q: "Is this limit new?",
    faq4a: "The limit has existed for years, but Google officially documented it in their Search Central documentation.",
    faq5q: "How can I tell if my content is being truncated?",
    faq5a: "Use this tool to check your page size. You can also inspect the cached version of your page in Google Search to see what Google has actually indexed.",
    
    // Pro Tips
    proTipsTitle: "Pro Tips for Staying Under the Limit",
    proTip1: "Move inline CSS to external stylesheets",
    proTip2: "Move inline JavaScript to external files",
    proTip3: "Remove HTML comments in production",
    proTip4: "Minify your HTML output",
    proTip5: "Use pagination for long content",
    proTip6: "Prioritize important content first",
    proTip7: "Lazy load below-the-fold content",
    proTip8: "Use server-side rendering wisely",
    
    // Official Sources
    officialSources: "Official Sources",
    googleSearchCentral: "Google Search Central - Googlebot Documentation",
    googleFileSizeLimits: "Google's Official File Size Limits",
    
    // Footer
    builtWith: "Built with",
    forSeoEnthusiasts: "for SEO enthusiasts",
    notAffiliated: "This tool is not affiliated with Google. It's designed to help webmasters and SEO professionals check their page sizes against Google's documented 2MB crawl limit.",
    
    // Google Docs URL
    googleDocsUrl: "https://developers.google.com/search/docs/crawling-indexing/googlebot"
  },
  
  de: {
    // Header
    appName: "Google Bot Limit Checker",
    home: "Startseite",
    documentation: "Dokumentation",
    googleDocs: "Google Docs",
    
    // Hero Section
    heroTitle: "Googles Crawl-Limit beträgt jetzt",
    heroTitleHighlight: "2 MB",
    heroSubtitle: "Prüfen Sie, ob Ihr HTML-Inhalt vom Indexierungsbot abgeschnitten wird.",
    
    // URL Checker
    placeholder: "URL eingeben (z.B. https://example.com)",
    checkNow: "Jetzt prüfen",
    analyzing: "Analysiere...",
    officialDocs: "Offizielle Googlebot-Dokumentation",
    tipTitle: "Tipp:",
    tipText: "Für eine robuste Massenanalyse verwenden Sie",
    screamingFrog: "Screaming Frog",
    tipTextEnd: "das dieses Limit perfekt simuliert.",
    
    // Validation
    enterUrl: "Bitte geben Sie eine URL ein",
    invalidUrl: "Bitte geben Sie eine gültige URL ein",
    
    // Results
    allClear: "Alles in Ordnung!",
    allClearMsg: "Ihre Seite liegt innerhalb von Googles 2MB Crawl-Limit. Alle Inhalte sollten korrekt indexiert werden.",
    approachingLimit: "Annäherung an das Limit",
    approachingLimitMsg: "Ihre Seite nähert sich dem 2MB-Limit. Erwägen Sie eine Optimierung, um sicherzustellen, dass alle Inhalte indexiert werden.",
    limitExceeded: "Limit überschritten!",
    limitExceededMsg: "Ihre Seite überschreitet das 2MB-Limit. Inhalte nach dem Grenzwert werden von Google NICHT indexiert.",
    analysisComplete: "Analyse abgeschlossen",
    reviewResults: "Überprüfen Sie die Ergebnisse unten.",
    analyzedUrl: "Analysierte URL:",
    htmlSize: "HTML-Größe",
    ofLimit: "des Limits",
    uncompressed: "Unkomprimiert",
    compressed: "Komprimiert",
    gzipSize: "Gzip-Größe",
    loadTime: "Ladezeit",
    estimated: "Geschätzt",
    crawlScore: "Crawl-Score",
    crawlability: "Crawlbarkeit",
    resourcesBreakdown: "Ressourcen-Aufschlüsselung",
    files: "Dateien",
    truncationDetected: "Inhaltskürzung erkannt",
    truncationMsg: "Googlebot stoppt das Crawling bei Byte",
    truncationMsg2: "Ungefähr",
    truncationMsg3: "Ihres Inhalts werden NICHT indexiert.",
    googleQuote: '"Sobald das Limit erreicht ist, unterbricht Googlebot den Abruf und sendet nur den heruntergeladenen Teil zur Indexierung."',
    googleQuoteSource: "— Google Search Central",
    recommendations: "Empfehlungen",
    recPass1: "Ihr HTML liegt innerhalb des sicheren Limits - großartig!",
    recPass2: "Überwachen Sie weiterhin nach größeren Inhaltsaktualisierungen",
    recWarning1: "Erwägen Sie, Inline-JavaScript und CSS zu entfernen",
    recWarning2: "Minimieren Sie Ihre HTML-Ausgabe, um die Größe zu reduzieren",
    recWarning3: "Priorisieren Sie wichtige Inhalte am Anfang der Seite",
    recFail1: "Dringend: Verschieben Sie Inline-CSS und JavaScript in externe Dateien",
    recFail2: "Entfernen Sie HTML-Kommentare und unnötige Leerzeichen",
    recFail3: "Implementieren Sie Paginierung für lange Inhalte",
    recFail4: "Stellen Sie sicher, dass kritische SEO-Inhalte in den ersten 2MB erscheinen",
    
    // About Section
    aboutTitle: "Über das 2MB-Limit",
    htmlFiles: "HTML-Dateien:",
    htmlFilesDesc: "Googlebot stoppt das Crawling einer HTML-Datei nach den ersten 2 MB. Inhalte nach diesem Grenzwert werden nicht indexiert. Dieses Limit gilt für die unkomprimierten Daten.",
    resources: "Ressourcen:",
    resourcesDesc: "Jede in der HTML referenzierte Ressource (CSS, JavaScript) wird separat abgerufen und unterliegt demselben 2 MB-Limit.",
    pdfFiles: "PDF-Dateien:",
    pdfFilesDesc: "Bei PDFs ist Googlebot großzügiger und crawlt die ersten 64 MB.",
    
    // Documentation Page
    completeGuide: "Vollständiger Leitfaden",
    docTitle: "Googles 2MB Crawl-Limit verstehen",
    docIntro: "Google hat offiziell eine kritische Einschränkung dokumentiert: Googlebot crawlt und indexiert nur die ersten 2 MB einer HTML-Seite. Inhalte jenseits dieses Limits werden einfach ignoriert, wodurch möglicherweise wichtige Teile Ihrer Website für Suchmaschinen unsichtbar bleiben.",
    keyTakeaways: "Wichtige Erkenntnisse",
    maxHtmlSize: "Maximale HTML-Größe für die Indexierung",
    maxPdfSize: "Maximale PDF-Größe für die Indexierung",
    uncompressedLabel: "Unkomprimiert",
    limitApplies: "Das Limit gilt für Rohdaten",
    perResource: "Pro Ressource",
    eachFileLimit: "Jede Datei hat ihr eigenes Limit",
    
    // Documentation Sections
    whatIs2mbTitle: "Was ist das 2MB-Limit?",
    whatIs2mbContent: "Googlebot, der von Google verwendete Web-Crawler, hat ein Limit für die Datenmenge, die er von einer einzelnen Seite herunterlädt. Bei HTML-Dateien beträgt dieses Limit 2 MB unkomprimierte Daten. Sobald dieses Limit erreicht ist, stoppt Googlebot den Download und indexiert nur das, was er erhalten hat.",
    whyMattersTitle: "Warum ist das für SEO wichtig?",
    whyMattersContent: "Wenn Ihre wichtigen Inhalte, Links oder strukturierten Daten nach dem 2MB-Grenzwert erscheinen, sieht Google sie nicht. Das bedeutet: wichtige Inhalte werden nicht indexiert, interne Links könnten übersehen werden, was das Crawl-Budget beeinflusst, strukturierte Daten könnten abgeschnitten werden, und Ihre Rankings könnten leiden.",
    whatCountsTitle: "Was zählt zum Limit?",
    whatCountsContent: "Das 2MB-Limit gilt für die rohe, unkomprimierte HTML-Antwort. Dies umfasst alle HTML-Tags, Inline-CSS, Inline-JavaScript, Kommentare und Leerzeichen. Externe Ressourcen (CSS-Dateien, JS-Dateien, Bilder) werden separat abgerufen und jede hat ihr eigenes 2MB-Limit.",
    pdfLimitsTitle: "PDF-Dateien haben andere Limits",
    pdfLimitsContent: "Bei PDF-Dokumenten ist Googlebot großzügiger und crawlt bis zu 64 MB Inhalt. Das gleiche Prinzip gilt jedoch - Inhalte jenseits dieses Limits werden nicht indexiert.",
    howToFixTitle: "So beheben Sie übergroße Seiten",
    howToFixContent: "1. Entfernen Sie Inline-CSS und JavaScript - verschieben Sie sie in externe Dateien. 2. Minimieren Sie Ihre HTML-Ausgabe. 3. Entfernen Sie unnötige HTML-Kommentare. 4. Implementieren Sie Paginierung für lange Inhalte. 5. Verwenden Sie Lazy Loading für Inhalte unterhalb des sichtbaren Bereichs. 6. Priorisieren Sie wichtige Inhalte am Anfang des HTML.",
    testingTitle: "Testen Sie Ihre Seiten",
    testingContent: "Verwenden Sie dieses Tool, um zu prüfen, ob Ihre Seiten das 2MB-Limit überschreiten. Für Massenanalysen können Tools wie Screaming Frog dieses Limit auf Ihrer gesamten Website simulieren. Regelmäßige Überwachung wird empfohlen, besonders nach größeren Inhaltsaktualisierungen.",
    
    // What Counts Section
    whatCountsTowards: "Was zählt zum 2MB-Limit?",
    includedInCount: "In der Zählung enthalten:",
    includedItem1: "Alle HTML-Tags und Inhalte",
    includedItem2: "Inline-CSS (Style-Tags)",
    includedItem3: "Inline-JavaScript (Script-Tags)",
    includedItem4: "HTML-Kommentare",
    includedItem5: "Leerzeichen und Formatierung",
    fetchedSeparately: "Separat abgerufen:",
    fetchedItem1: "Externe CSS-Dateien",
    fetchedItem2: "Externe JavaScript-Dateien",
    fetchedItem3: "Bilder und Medien",
    fetchedItem4: "Schriftarten",
    fetchedItem5: "Andere externe Ressourcen",
    
    // FAQ
    faqTitle: "Häufig gestellte Fragen",
    faq1q: "Hilft Komprimierung beim 2MB-Limit?",
    faq1a: "Nein. Das Limit gilt für unkomprimierte Daten. Während gzip-Komprimierung bei der Übertragungsgeschwindigkeit hilft, misst Googlebot die dekomprimierte Größe.",
    faq2q: "Zählen externe Ressourcen zum Limit?",
    faq2a: "Nein. Externe CSS-, JavaScript- und Bilddateien werden separat abgerufen. Jede externe Ressource hat ihr eigenes 2MB-Limit.",
    faq3q: "Was passiert mit Inhalten nach 2MB?",
    faq3a: "Inhalte jenseits von 2MB werden von Googlebot vollständig ignoriert. Sie werden nicht indexiert, und Links in diesem Bereich werden nicht entdeckt.",
    faq4q: "Ist dieses Limit neu?",
    faq4a: "Das Limit existiert seit Jahren, aber Google hat es offiziell in seiner Search Central-Dokumentation dokumentiert.",
    faq5q: "Wie kann ich feststellen, ob mein Inhalt abgeschnitten wird?",
    faq5a: "Verwenden Sie dieses Tool, um Ihre Seitengröße zu überprüfen. Sie können auch die zwischengespeicherte Version Ihrer Seite in der Google-Suche überprüfen, um zu sehen, was Google tatsächlich indexiert hat.",
    
    // Pro Tips
    proTipsTitle: "Profi-Tipps, um unter dem Limit zu bleiben",
    proTip1: "Verschieben Sie Inline-CSS in externe Stylesheets",
    proTip2: "Verschieben Sie Inline-JavaScript in externe Dateien",
    proTip3: "Entfernen Sie HTML-Kommentare in der Produktion",
    proTip4: "Minimieren Sie Ihre HTML-Ausgabe",
    proTip5: "Verwenden Sie Paginierung für lange Inhalte",
    proTip6: "Priorisieren Sie wichtige Inhalte zuerst",
    proTip7: "Lazy Load für Inhalte unterhalb des sichtbaren Bereichs",
    proTip8: "Verwenden Sie Server-Side-Rendering mit Bedacht",
    
    // Official Sources
    officialSources: "Offizielle Quellen",
    googleSearchCentral: "Google Search Central - Googlebot-Dokumentation",
    googleFileSizeLimits: "Googles offizielle Dateigrößen-Limits",
    
    // Footer
    builtWith: "Erstellt mit",
    forSeoEnthusiasts: "für SEO-Enthusiasten",
    notAffiliated: "Dieses Tool ist nicht mit Google verbunden. Es wurde entwickelt, um Webmastern und SEO-Profis zu helfen, ihre Seitengrößen mit Googles dokumentiertem 2MB Crawl-Limit zu vergleichen.",
    
    // Google Docs URL
    googleDocsUrl: "https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=de"
  },
  
  el: {
    // Header
    appName: "Google Bot Limit Checker",
    home: "Αρχική",
    documentation: "Τεκμηρίωση",
    googleDocs: "Google Docs",
    
    // Hero Section
    heroTitle: "Το όριο crawl της Google είναι τώρα",
    heroTitleHighlight: "2 MB",
    heroSubtitle: "Ελέγξτε αν το περιεχόμενο HTML σας κόβεται από το bot ευρετηρίασης.",
    
    // URL Checker
    placeholder: "Εισάγετε URL (π.χ. https://example.com)",
    checkNow: "Έλεγχος τώρα",
    analyzing: "Ανάλυση...",
    officialDocs: "Επίσημη τεκμηρίωση Googlebot",
    tipTitle: "Συμβουλή:",
    tipText: "Για ισχυρή μαζική ανάλυση, χρησιμοποιήστε το",
    screamingFrog: "Screaming Frog",
    tipTextEnd: "που προσομοιώνει αυτό το όριο τέλεια.",
    
    // Validation
    enterUrl: "Παρακαλώ εισάγετε μια διεύθυνση URL",
    invalidUrl: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση URL",
    
    // Results
    allClear: "Όλα εντάξει!",
    allClearMsg: "Η σελίδα σας είναι εντός του ορίου crawl 2MB της Google. Όλο το περιεχόμενο θα πρέπει να ευρετηριαστεί σωστά.",
    approachingLimit: "Πλησιάζει το όριο",
    approachingLimitMsg: "Η σελίδα σας πλησιάζει το όριο 2MB. Εξετάστε τη βελτιστοποίηση για να διασφαλίσετε ότι όλο το περιεχόμενο ευρετηριάζεται.",
    limitExceeded: "Υπέρβαση ορίου!",
    limitExceededMsg: "Η σελίδα σας υπερβαίνει το όριο 2MB. Το περιεχόμενο μετά το σημείο αποκοπής ΔΕΝ θα ευρετηριαστεί από την Google.",
    analysisComplete: "Ανάλυση ολοκληρώθηκε",
    reviewResults: "Ελέγξτε τα αποτελέσματα παρακάτω.",
    analyzedUrl: "Αναλυμένη URL:",
    htmlSize: "Μέγεθος HTML",
    ofLimit: "του ορίου",
    uncompressed: "Ασυμπίεστο",
    compressed: "Συμπιεσμένο",
    gzipSize: "Μέγεθος Gzip",
    loadTime: "Χρόνος φόρτωσης",
    estimated: "Εκτιμώμενος",
    crawlScore: "Βαθμολογία Crawl",
    crawlability: "Δυνατότητα Crawl",
    resourcesBreakdown: "Ανάλυση πόρων",
    files: "αρχεία",
    truncationDetected: "Εντοπίστηκε περικοπή περιεχομένου",
    truncationMsg: "Το Googlebot θα σταματήσει το crawling στο byte",
    truncationMsg2: "Περίπου",
    truncationMsg3: "του περιεχομένου σας ΔΕΝ θα ευρετηριαστεί.",
    googleQuote: '"Μόλις επιτευχθεί το όριο, το Googlebot διακόπτει την ανάκτηση και στέλνει μόνο το ληφθέν μέρος για ευρετηρίαση."',
    googleQuoteSource: "— Google Search Central",
    recommendations: "Συστάσεις",
    recPass1: "Το HTML σας είναι εντός του ασφαλούς ορίου - εξαιρετική δουλειά!",
    recPass2: "Συνεχίστε την παρακολούθηση μετά από μεγάλες ενημερώσεις περιεχομένου",
    recWarning1: "Εξετάστε την αφαίρεση inline JavaScript και CSS",
    recWarning2: "Ελαχιστοποιήστε την έξοδο HTML για μείωση μεγέθους",
    recWarning3: "Δώστε προτεραιότητα στο σημαντικό περιεχόμενο στην κορυφή της σελίδας",
    recFail1: "Επείγον: Μετακινήστε inline CSS και JavaScript σε εξωτερικά αρχεία",
    recFail2: "Αφαιρέστε σχόλια HTML και περιττά κενά",
    recFail3: "Εφαρμόστε σελιδοποίηση για μεγάλο περιεχόμενο",
    recFail4: "Βεβαιωθείτε ότι το κρίσιμο περιεχόμενο SEO εμφανίζεται στα πρώτα 2MB",
    
    // About Section
    aboutTitle: "Σχετικά με το όριο 2MB",
    htmlFiles: "Αρχεία HTML:",
    htmlFilesDesc: "Το Googlebot σταματά το crawling ενός αρχείου HTML μετά τα πρώτα 2 MB. Οποιοδήποτε περιεχόμενο μετά από αυτό το σημείο αποκοπής δεν ευρετηριάζεται. Αυτό το όριο ισχύει για τα ασυμπίεστα δεδομένα.",
    resources: "Πόροι:",
    resourcesDesc: "Κάθε πόρος που αναφέρεται στο HTML (CSS, JavaScript) ανακτάται ξεχωριστά και υπόκειται στο ίδιο όριο 2 MB.",
    pdfFiles: "Αρχεία PDF:",
    pdfFilesDesc: "Το Googlebot είναι πιο γενναιόδωρο με τα PDF, κάνοντας crawl τα πρώτα 64 MB.",
    
    // Documentation Page
    completeGuide: "Πλήρης οδηγός",
    docTitle: "Κατανόηση του ορίου Crawl 2MB της Google",
    docIntro: "Η Google τεκμηρίωσε επίσημα έναν κρίσιμο περιορισμό: Το Googlebot θα κάνει crawl και ευρετηρίαση μόνο τα πρώτα 2 MB μιας σελίδας HTML. Οποιοδήποτε περιεχόμενο πέρα από αυτό το όριο απλά αγνοείται, αφήνοντας πιθανώς σημαντικά μέρη του ιστοτόπου σας αόρατα στις μηχανές αναζήτησης.",
    keyTakeaways: "Βασικά συμπεράσματα",
    maxHtmlSize: "Μέγιστο μέγεθος HTML για ευρετηρίαση",
    maxPdfSize: "Μέγιστο μέγεθος PDF για ευρετηρίαση",
    uncompressedLabel: "Ασυμπίεστο",
    limitApplies: "Το όριο ισχύει για ακατέργαστα δεδομένα",
    perResource: "Ανά πόρο",
    eachFileLimit: "Κάθε αρχείο έχει το δικό του όριο",
    
    // Documentation Sections
    whatIs2mbTitle: "Τι είναι το όριο 2MB;",
    whatIs2mbContent: "Το Googlebot, ο web crawler που χρησιμοποιεί η Google, έχει όριο στο πόσα δεδομένα θα κατεβάσει από μια μεμονωμένη σελίδα. Για αρχεία HTML, αυτό το όριο είναι 2 MB ασυμπίεστων δεδομένων. Μόλις επιτευχθεί αυτό το όριο, το Googlebot σταματά τη λήψη και ευρετηριάζει μόνο ό,τι έχει λάβει.",
    whyMattersTitle: "Γιατί έχει σημασία για το SEO;",
    whyMattersContent: "Αν το σημαντικό περιεχόμενο, οι σύνδεσμοι ή τα δομημένα δεδομένα σας εμφανίζονται μετά το σημείο αποκοπής 2MB, η Google δεν θα τα δει. Αυτό σημαίνει: το σημαντικό περιεχόμενο δεν θα ευρετηριαστεί, οι εσωτερικοί σύνδεσμοι μπορεί να χαθούν επηρεάζοντας το crawl budget, τα δομημένα δεδομένα μπορεί να περικοπούν και οι κατατάξεις σας μπορεί να επηρεαστούν.",
    whatCountsTitle: "Τι μετράει στο όριο;",
    whatCountsContent: "Το όριο 2MB ισχύει για την ακατέργαστη, ασυμπίεστη απόκριση HTML. Αυτό περιλαμβάνει όλες τις ετικέτες HTML, inline CSS, inline JavaScript, σχόλια και κενά. Οι εξωτερικοί πόροι (αρχεία CSS, αρχεία JS, εικόνες) ανακτώνται ξεχωριστά και ο καθένας έχει το δικό του όριο 2MB.",
    pdfLimitsTitle: "Τα αρχεία PDF έχουν διαφορετικά όρια",
    pdfLimitsContent: "Για έγγραφα PDF, το Googlebot είναι πιο γενναιόδωρο, κάνοντας crawl έως 64 MB περιεχομένου. Ωστόσο, ισχύει η ίδια αρχή - το περιεχόμενο πέρα από αυτό το όριο δεν θα ευρετηριαστεί.",
    howToFixTitle: "Πώς να διορθώσετε υπερμεγέθεις σελίδες",
    howToFixContent: "1. Αφαιρέστε inline CSS και JavaScript - μετακινήστε τα σε εξωτερικά αρχεία. 2. Ελαχιστοποιήστε την έξοδο HTML. 3. Αφαιρέστε περιττά σχόλια HTML. 4. Εφαρμόστε σελιδοποίηση για μεγάλο περιεχόμενο. 5. Χρησιμοποιήστε lazy loading για περιεχόμενο κάτω από την αναδίπλωση. 6. Δώστε προτεραιότητα στο σημαντικό περιεχόμενο στην κορυφή του HTML.",
    testingTitle: "Δοκιμή των σελίδων σας",
    testingContent: "Χρησιμοποιήστε αυτό το εργαλείο για να ελέγξετε αν οι σελίδες σας υπερβαίνουν το όριο 2MB. Για μαζική ανάλυση, εργαλεία όπως το Screaming Frog μπορούν να προσομοιώσουν αυτό το όριο σε ολόκληρο τον ιστότοπό σας. Συνιστάται τακτική παρακολούθηση, ειδικά μετά από μεγάλες ενημερώσεις περιεχομένου.",
    
    // What Counts Section
    whatCountsTowards: "Τι μετράει στο όριο 2MB;",
    includedInCount: "Περιλαμβάνονται στην καταμέτρηση:",
    includedItem1: "Όλες οι ετικέτες HTML και το περιεχόμενο",
    includedItem2: "Inline CSS (ετικέτες style)",
    includedItem3: "Inline JavaScript (ετικέτες script)",
    includedItem4: "Σχόλια HTML",
    includedItem5: "Κενά και μορφοποίηση",
    fetchedSeparately: "Ανακτώνται ξεχωριστά:",
    fetchedItem1: "Εξωτερικά αρχεία CSS",
    fetchedItem2: "Εξωτερικά αρχεία JavaScript",
    fetchedItem3: "Εικόνες και πολυμέσα",
    fetchedItem4: "Γραμματοσειρές",
    fetchedItem5: "Άλλοι εξωτερικοί πόροι",
    
    // FAQ
    faqTitle: "Συχνές ερωτήσεις",
    faq1q: "Βοηθάει η συμπίεση με το όριο 2MB;",
    faq1a: "Όχι. Το όριο ισχύει για ασυμπίεστα δεδομένα. Ενώ η συμπίεση gzip βοηθά με την ταχύτητα μεταφοράς, το Googlebot μετρά το αποσυμπιεσμένο μέγεθος.",
    faq2q: "Μετράνε οι εξωτερικοί πόροι στο όριο;",
    faq2a: "Όχι. Τα εξωτερικά CSS, JavaScript και εικόνες ανακτώνται ξεχωριστά. Κάθε εξωτερικός πόρος έχει το δικό του όριο 2MB.",
    faq3q: "Τι συμβαίνει με το περιεχόμενο μετά τα 2MB;",
    faq3a: "Το περιεχόμενο πέρα από τα 2MB αγνοείται εντελώς από το Googlebot. Δεν θα ευρετηριαστεί και οι σύνδεσμοι σε αυτό το τμήμα δεν θα ανακαλυφθούν.",
    faq4q: "Είναι αυτό το όριο νέο;",
    faq4a: "Το όριο υπάρχει εδώ και χρόνια, αλλά η Google το τεκμηρίωσε επίσημα στην τεκμηρίωση Search Central.",
    faq5q: "Πώς μπορώ να ξέρω αν το περιεχόμενό μου περικόπτεται;",
    faq5a: "Χρησιμοποιήστε αυτό το εργαλείο για να ελέγξετε το μέγεθος της σελίδας σας. Μπορείτε επίσης να επιθεωρήσετε την αποθηκευμένη έκδοση της σελίδας σας στην Αναζήτηση Google για να δείτε τι έχει πραγματικά ευρετηριάσει η Google.",
    
    // Pro Tips
    proTipsTitle: "Συμβουλές επαγγελματιών για να παραμείνετε κάτω από το όριο",
    proTip1: "Μετακινήστε inline CSS σε εξωτερικά stylesheets",
    proTip2: "Μετακινήστε inline JavaScript σε εξωτερικά αρχεία",
    proTip3: "Αφαιρέστε σχόλια HTML στην παραγωγή",
    proTip4: "Ελαχιστοποιήστε την έξοδο HTML",
    proTip5: "Χρησιμοποιήστε σελιδοποίηση για μεγάλο περιεχόμενο",
    proTip6: "Δώστε προτεραιότητα στο σημαντικό περιεχόμενο πρώτα",
    proTip7: "Lazy load για περιεχόμενο κάτω από την αναδίπλωση",
    proTip8: "Χρησιμοποιήστε server-side rendering με σύνεση",
    
    // Official Sources
    officialSources: "Επίσημες πηγές",
    googleSearchCentral: "Google Search Central - Τεκμηρίωση Googlebot",
    googleFileSizeLimits: "Επίσημα όρια μεγέθους αρχείων της Google",
    
    // Footer
    builtWith: "Κατασκευάστηκε με",
    forSeoEnthusiasts: "για τους λάτρεις του SEO",
    notAffiliated: "Αυτό το εργαλείο δεν συνδέεται με την Google. Σχεδιάστηκε για να βοηθήσει τους webmasters και τους επαγγελματίες SEO να ελέγξουν τα μεγέθη των σελίδων τους σύμφωνα με το τεκμηριωμένο όριο crawl 2MB της Google.",
    
    // Google Docs URL
    googleDocsUrl: "https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=el"
  },
  
  es: {
    // Header
    appName: "Google Bot Limit Checker",
    home: "Inicio",
    documentation: "Documentación",
    googleDocs: "Google Docs",
    
    // Hero Section
    heroTitle: "El límite de rastreo de Google es ahora",
    heroTitleHighlight: "2 MB",
    heroSubtitle: "Comprueba si tu contenido HTML está siendo cortado por el bot de indexación.",
    
    // URL Checker
    placeholder: "Introduce URL (ej. https://example.com)",
    checkNow: "Comprobar ahora",
    analyzing: "Analizando...",
    officialDocs: "Documentación oficial de Googlebot",
    tipTitle: "Consejo:",
    tipText: "Para un análisis masivo robusto, usa",
    screamingFrog: "Screaming Frog",
    tipTextEnd: "que simula este límite perfectamente.",
    
    // Validation
    enterUrl: "Por favor, introduce una URL",
    invalidUrl: "Por favor, introduce una URL válida",
    
    // Results
    allClear: "¡Todo bien!",
    allClearMsg: "Tu página está dentro del límite de rastreo de 2MB de Google. Todo el contenido debería indexarse correctamente.",
    approachingLimit: "Acercándose al límite",
    approachingLimitMsg: "Tu página está cerca del límite de 2MB. Considera optimizar para asegurar que todo el contenido se indexe.",
    limitExceeded: "¡Límite excedido!",
    limitExceededMsg: "Tu página excede el límite de 2MB. El contenido después del corte NO será indexado por Google.",
    analysisComplete: "Análisis completado",
    reviewResults: "Revisa los resultados a continuación.",
    analyzedUrl: "URL analizada:",
    htmlSize: "Tamaño HTML",
    ofLimit: "del límite",
    uncompressed: "Sin comprimir",
    compressed: "Comprimido",
    gzipSize: "Tamaño Gzip",
    loadTime: "Tiempo de carga",
    estimated: "Estimado",
    crawlScore: "Puntuación Crawl",
    crawlability: "Rastreabilidad",
    resourcesBreakdown: "Desglose de recursos",
    files: "archivos",
    truncationDetected: "Truncamiento de contenido detectado",
    truncationMsg: "Googlebot dejará de rastrear en el byte",
    truncationMsg2: "Aproximadamente",
    truncationMsg3: "de tu contenido NO será indexado.",
    googleQuote: '"Una vez alcanzado el límite, Googlebot interrumpe la recuperación y envía solo la parte descargada para indexación."',
    googleQuoteSource: "— Google Search Central",
    recommendations: "Recomendaciones",
    recPass1: "Tu HTML está dentro del límite seguro - ¡excelente trabajo!",
    recPass2: "Continúa monitoreando después de actualizaciones importantes de contenido",
    recWarning1: "Considera eliminar JavaScript y CSS en línea",
    recWarning2: "Minimiza tu salida HTML para reducir el tamaño",
    recWarning3: "Prioriza el contenido importante en la parte superior de la página",
    recFail1: "Urgente: Mueve CSS y JavaScript en línea a archivos externos",
    recFail2: "Elimina comentarios HTML y espacios innecesarios",
    recFail3: "Implementa paginación para contenido largo",
    recFail4: "Asegúrate de que el contenido SEO crítico aparezca en los primeros 2MB",
    
    // About Section
    aboutTitle: "Sobre el límite de 2MB",
    htmlFiles: "Archivos HTML:",
    htmlFilesDesc: "Googlebot deja de rastrear un archivo HTML después de los primeros 2 MB. Cualquier contenido después de este corte no se indexa. Este límite se aplica a los datos sin comprimir.",
    resources: "Recursos:",
    resourcesDesc: "Cada recurso referenciado en el HTML (CSS, JavaScript) se obtiene por separado y está sujeto al mismo límite de 2 MB.",
    pdfFiles: "Archivos PDF:",
    pdfFilesDesc: "Googlebot es más generoso con los PDF, rastreando los primeros 64 MB.",
    
    // Documentation Page
    completeGuide: "Guía completa",
    docTitle: "Entendiendo el límite de rastreo de 2MB de Google",
    docIntro: "Google documentó oficialmente una limitación crítica: Googlebot solo rastreará e indexará los primeros 2 MB de una página HTML. Cualquier contenido más allá de este límite simplemente se ignora, dejando potencialmente partes importantes de tu sitio web invisibles para los motores de búsqueda.",
    keyTakeaways: "Puntos clave",
    maxHtmlSize: "Tamaño máximo de HTML para indexación",
    maxPdfSize: "Tamaño máximo de PDF para indexación",
    uncompressedLabel: "Sin comprimir",
    limitApplies: "El límite se aplica a datos sin procesar",
    perResource: "Por recurso",
    eachFileLimit: "Cada archivo tiene su propio límite",
    
    // Documentation Sections
    whatIs2mbTitle: "¿Qué es el límite de 2MB?",
    whatIs2mbContent: "Googlebot, el rastreador web utilizado por Google, tiene un límite en la cantidad de datos que descargará de una sola página. Para archivos HTML, este límite es de 2 MB de datos sin comprimir. Una vez alcanzado este límite, Googlebot deja de descargar e indexa solo lo que ha recibido.",
    whyMattersTitle: "¿Por qué importa esto para el SEO?",
    whyMattersContent: "Si tu contenido importante, enlaces o datos estructurados aparecen después del punto de corte de 2MB, Google no los verá. Esto significa: el contenido importante no se indexará, los enlaces internos podrían perderse afectando el presupuesto de rastreo, los datos estructurados podrían truncarse y tus clasificaciones podrían sufrir.",
    whatCountsTitle: "¿Qué cuenta para el límite?",
    whatCountsContent: "El límite de 2MB se aplica a la respuesta HTML cruda sin comprimir. Esto incluye todas las etiquetas HTML, CSS en línea, JavaScript en línea, comentarios y espacios en blanco. Los recursos externos (archivos CSS, archivos JS, imágenes) se obtienen por separado y cada uno tiene su propio límite de 2MB.",
    pdfLimitsTitle: "Los archivos PDF tienen límites diferentes",
    pdfLimitsContent: "Para documentos PDF, Googlebot es más generoso, rastreando hasta 64 MB de contenido. Sin embargo, se aplica el mismo principio: el contenido más allá de este límite no se indexará.",
    howToFixTitle: "Cómo arreglar páginas sobredimensionadas",
    howToFixContent: "1. Elimina CSS y JavaScript en línea - muévelos a archivos externos. 2. Minimiza tu salida HTML. 3. Elimina comentarios HTML innecesarios. 4. Implementa paginación para contenido largo. 5. Usa carga diferida para contenido debajo del pliegue. 6. Prioriza el contenido importante en la parte superior del HTML.",
    testingTitle: "Probando tus páginas",
    testingContent: "Usa esta herramienta para verificar si tus páginas exceden el límite de 2MB. Para análisis masivo, herramientas como Screaming Frog pueden simular este límite en todo tu sitio web. Se recomienda monitoreo regular, especialmente después de actualizaciones importantes de contenido.",
    
    // What Counts Section
    whatCountsTowards: "¿Qué cuenta para el límite de 2MB?",
    includedInCount: "Incluido en el conteo:",
    includedItem1: "Todas las etiquetas HTML y contenido",
    includedItem2: "CSS en línea (etiquetas style)",
    includedItem3: "JavaScript en línea (etiquetas script)",
    includedItem4: "Comentarios HTML",
    includedItem5: "Espacios en blanco y formato",
    fetchedSeparately: "Obtenidos por separado:",
    fetchedItem1: "Archivos CSS externos",
    fetchedItem2: "Archivos JavaScript externos",
    fetchedItem3: "Imágenes y medios",
    fetchedItem4: "Fuentes",
    fetchedItem5: "Otros recursos externos",
    
    // FAQ
    faqTitle: "Preguntas frecuentes",
    faq1q: "¿Ayuda la compresión con el límite de 2MB?",
    faq1a: "No. El límite se aplica a datos sin comprimir. Aunque la compresión gzip ayuda con la velocidad de transferencia, Googlebot mide el tamaño descomprimido.",
    faq2q: "¿Cuentan los recursos externos para el límite?",
    faq2a: "No. CSS, JavaScript e imágenes externos se obtienen por separado. Cada recurso externo tiene su propio límite de 2MB.",
    faq3q: "¿Qué pasa con el contenido después de 2MB?",
    faq3a: "El contenido más allá de 2MB es completamente ignorado por Googlebot. No se indexará y los enlaces en esa porción no se descubrirán.",
    faq4q: "¿Es este límite nuevo?",
    faq4a: "El límite ha existido durante años, pero Google lo documentó oficialmente en su documentación de Search Central.",
    faq5q: "¿Cómo puedo saber si mi contenido está siendo truncado?",
    faq5a: "Usa esta herramienta para verificar el tamaño de tu página. También puedes inspeccionar la versión en caché de tu página en Google Search para ver qué ha indexado realmente Google.",
    
    // Pro Tips
    proTipsTitle: "Consejos profesionales para mantenerte bajo el límite",
    proTip1: "Mueve CSS en línea a hojas de estilo externas",
    proTip2: "Mueve JavaScript en línea a archivos externos",
    proTip3: "Elimina comentarios HTML en producción",
    proTip4: "Minimiza tu salida HTML",
    proTip5: "Usa paginación para contenido largo",
    proTip6: "Prioriza el contenido importante primero",
    proTip7: "Carga diferida para contenido debajo del pliegue",
    proTip8: "Usa renderizado del lado del servidor con prudencia",
    
    // Official Sources
    officialSources: "Fuentes oficiales",
    googleSearchCentral: "Google Search Central - Documentación de Googlebot",
    googleFileSizeLimits: "Límites oficiales de tamaño de archivo de Google",
    
    // Footer
    builtWith: "Construido con",
    forSeoEnthusiasts: "para entusiastas del SEO",
    notAffiliated: "Esta herramienta no está afiliada con Google. Está diseñada para ayudar a webmasters y profesionales de SEO a verificar el tamaño de sus páginas contra el límite de rastreo de 2MB documentado por Google.",
    
    // Google Docs URL
    googleDocsUrl: "https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=es"
  },
  
  fr: {
    // Header
    appName: "Google Bot Limit Checker",
    home: "Accueil",
    documentation: "Documentation",
    googleDocs: "Google Docs",
    
    // Hero Section
    heroTitle: "La limite de crawl de Google est maintenant de",
    heroTitleHighlight: "2 Mo",
    heroSubtitle: "Vérifiez si votre contenu HTML est tronqué par le bot d'indexation.",
    
    // URL Checker
    placeholder: "Entrez l'URL (ex. https://example.com)",
    checkNow: "Vérifier maintenant",
    analyzing: "Analyse en cours...",
    officialDocs: "Documentation officielle Googlebot",
    tipTitle: "Conseil:",
    tipText: "Pour une analyse en masse robuste, utilisez",
    screamingFrog: "Screaming Frog",
    tipTextEnd: "qui simule parfaitement cette limite.",
    
    // Validation
    enterUrl: "Veuillez entrer une URL",
    invalidUrl: "Veuillez entrer une URL valide",
    
    // Results
    allClear: "Tout est bon!",
    allClearMsg: "Votre page est dans la limite de crawl de 2Mo de Google. Tout le contenu devrait être indexé correctement.",
    approachingLimit: "Approche de la limite",
    approachingLimitMsg: "Votre page approche de la limite de 2Mo. Envisagez d'optimiser pour vous assurer que tout le contenu est indexé.",
    limitExceeded: "Limite dépassée!",
    limitExceededMsg: "Votre page dépasse la limite de 2Mo. Le contenu après la coupure NE sera PAS indexé par Google.",
    analysisComplete: "Analyse terminée",
    reviewResults: "Consultez les résultats ci-dessous.",
    analyzedUrl: "URL analysée:",
    htmlSize: "Taille HTML",
    ofLimit: "de la limite",
    uncompressed: "Non compressé",
    compressed: "Compressé",
    gzipSize: "Taille Gzip",
    loadTime: "Temps de chargement",
    estimated: "Estimé",
    crawlScore: "Score de Crawl",
    crawlability: "Crawlabilité",
    resourcesBreakdown: "Répartition des ressources",
    files: "fichiers",
    truncationDetected: "Troncature de contenu détectée",
    truncationMsg: "Googlebot arrêtera le crawl à l'octet",
    truncationMsg2: "Environ",
    truncationMsg3: "de votre contenu NE sera PAS indexé.",
    googleQuote: '"Une fois la limite atteinte, Googlebot interrompt la récupération et n\'envoie que la partie téléchargée pour l\'indexation."',
    googleQuoteSource: "— Google Search Central",
    recommendations: "Recommandations",
    recPass1: "Votre HTML est dans la limite sûre - excellent travail!",
    recPass2: "Continuez à surveiller après les mises à jour importantes de contenu",
    recWarning1: "Envisagez de supprimer le JavaScript et CSS en ligne",
    recWarning2: "Minifiez votre sortie HTML pour réduire la taille",
    recWarning3: "Priorisez le contenu important en haut de la page",
    recFail1: "Urgent: Déplacez le CSS et JavaScript en ligne vers des fichiers externes",
    recFail2: "Supprimez les commentaires HTML et les espaces inutiles",
    recFail3: "Implémentez la pagination pour le contenu long",
    recFail4: "Assurez-vous que le contenu SEO critique apparaît dans les premiers 2Mo",
    
    // About Section
    aboutTitle: "À propos de la limite de 2Mo",
    htmlFiles: "Fichiers HTML:",
    htmlFilesDesc: "Googlebot arrête de crawler un fichier HTML après les premiers 2 Mo. Tout contenu après cette coupure n'est pas indexé. Cette limite s'applique aux données non compressées.",
    resources: "Ressources:",
    resourcesDesc: "Chaque ressource référencée dans le HTML (CSS, JavaScript) est récupérée séparément et est soumise à la même limite de 2 Mo.",
    pdfFiles: "Fichiers PDF:",
    pdfFilesDesc: "Googlebot est plus généreux avec les PDF, crawlant les premiers 64 Mo.",
    
    // Documentation Page
    completeGuide: "Guide complet",
    docTitle: "Comprendre la limite de crawl de 2Mo de Google",
    docIntro: "Google a officiellement documenté une limitation critique: Googlebot ne crawlera et n'indexera que les premiers 2 Mo d'une page HTML. Tout contenu au-delà de cette limite est simplement ignoré, laissant potentiellement des parties importantes de votre site web invisibles pour les moteurs de recherche.",
    keyTakeaways: "Points clés",
    maxHtmlSize: "Taille HTML maximale pour l'indexation",
    maxPdfSize: "Taille PDF maximale pour l'indexation",
    uncompressedLabel: "Non compressé",
    limitApplies: "La limite s'applique aux données brutes",
    perResource: "Par ressource",
    eachFileLimit: "Chaque fichier a sa propre limite",
    
    // Documentation Sections
    whatIs2mbTitle: "Qu'est-ce que la limite de 2Mo?",
    whatIs2mbContent: "Googlebot, le robot d'exploration web utilisé par Google, a une limite sur la quantité de données qu'il téléchargera d'une seule page. Pour les fichiers HTML, cette limite est de 2 Mo de données non compressées. Une fois cette limite atteinte, Googlebot arrête le téléchargement et indexe uniquement ce qu'il a reçu.",
    whyMattersTitle: "Pourquoi est-ce important pour le SEO?",
    whyMattersContent: "Si votre contenu important, vos liens ou vos données structurées apparaissent après le point de coupure de 2Mo, Google ne les verra pas. Cela signifie: le contenu important ne sera pas indexé, les liens internes pourraient être manqués affectant le budget de crawl, les données structurées pourraient être tronquées, et vos classements pourraient en souffrir.",
    whatCountsTitle: "Qu'est-ce qui compte pour la limite?",
    whatCountsContent: "La limite de 2Mo s'applique à la réponse HTML brute non compressée. Cela inclut toutes les balises HTML, le CSS en ligne, le JavaScript en ligne, les commentaires et les espaces blancs. Les ressources externes (fichiers CSS, fichiers JS, images) sont récupérées séparément et chacune a sa propre limite de 2Mo.",
    pdfLimitsTitle: "Les fichiers PDF ont des limites différentes",
    pdfLimitsContent: "Pour les documents PDF, Googlebot est plus généreux, crawlant jusqu'à 64 Mo de contenu. Cependant, le même principe s'applique - le contenu au-delà de cette limite ne sera pas indexé.",
    howToFixTitle: "Comment corriger les pages surdimensionnées",
    howToFixContent: "1. Supprimez le CSS et JavaScript en ligne - déplacez-les vers des fichiers externes. 2. Minifiez votre sortie HTML. 3. Supprimez les commentaires HTML inutiles. 4. Implémentez la pagination pour le contenu long. 5. Utilisez le chargement différé pour le contenu sous la ligne de flottaison. 6. Priorisez le contenu important en haut du HTML.",
    testingTitle: "Tester vos pages",
    testingContent: "Utilisez cet outil pour vérifier si vos pages dépassent la limite de 2Mo. Pour l'analyse en masse, des outils comme Screaming Frog peuvent simuler cette limite sur l'ensemble de votre site web. Une surveillance régulière est recommandée, surtout après des mises à jour importantes de contenu.",
    
    // What Counts Section
    whatCountsTowards: "Qu'est-ce qui compte pour la limite de 2Mo?",
    includedInCount: "Inclus dans le comptage:",
    includedItem1: "Toutes les balises HTML et le contenu",
    includedItem2: "CSS en ligne (balises style)",
    includedItem3: "JavaScript en ligne (balises script)",
    includedItem4: "Commentaires HTML",
    includedItem5: "Espaces blancs et formatage",
    fetchedSeparately: "Récupérés séparément:",
    fetchedItem1: "Fichiers CSS externes",
    fetchedItem2: "Fichiers JavaScript externes",
    fetchedItem3: "Images et médias",
    fetchedItem4: "Polices",
    fetchedItem5: "Autres ressources externes",
    
    // FAQ
    faqTitle: "Questions fréquemment posées",
    faq1q: "La compression aide-t-elle avec la limite de 2Mo?",
    faq1a: "Non. La limite s'applique aux données non compressées. Bien que la compression gzip aide avec la vitesse de transfert, Googlebot mesure la taille décompressée.",
    faq2q: "Les ressources externes comptent-elles pour la limite?",
    faq2a: "Non. Les CSS, JavaScript et images externes sont récupérés séparément. Chaque ressource externe a sa propre limite de 2Mo.",
    faq3q: "Que se passe-t-il avec le contenu après 2Mo?",
    faq3a: "Le contenu au-delà de 2Mo est complètement ignoré par Googlebot. Il ne sera pas indexé, et les liens dans cette portion ne seront pas découverts.",
    faq4q: "Cette limite est-elle nouvelle?",
    faq4a: "La limite existe depuis des années, mais Google l'a officiellement documentée dans sa documentation Search Central.",
    faq5q: "Comment puis-je savoir si mon contenu est tronqué?",
    faq5a: "Utilisez cet outil pour vérifier la taille de votre page. Vous pouvez également inspecter la version en cache de votre page dans Google Search pour voir ce que Google a réellement indexé.",
    
    // Pro Tips
    proTipsTitle: "Conseils de pro pour rester sous la limite",
    proTip1: "Déplacez le CSS en ligne vers des feuilles de style externes",
    proTip2: "Déplacez le JavaScript en ligne vers des fichiers externes",
    proTip3: "Supprimez les commentaires HTML en production",
    proTip4: "Minifiez votre sortie HTML",
    proTip5: "Utilisez la pagination pour le contenu long",
    proTip6: "Priorisez le contenu important en premier",
    proTip7: "Chargement différé pour le contenu sous la ligne de flottaison",
    proTip8: "Utilisez le rendu côté serveur avec sagesse",
    
    // Official Sources
    officialSources: "Sources officielles",
    googleSearchCentral: "Google Search Central - Documentation Googlebot",
    googleFileSizeLimits: "Limites officielles de taille de fichier de Google",
    
    // Footer
    builtWith: "Construit avec",
    forSeoEnthusiasts: "pour les passionnés de SEO",
    notAffiliated: "Cet outil n'est pas affilié à Google. Il est conçu pour aider les webmasters et les professionnels du SEO à vérifier la taille de leurs pages par rapport à la limite de crawl de 2Mo documentée par Google.",
    
    // Google Docs URL
    googleDocsUrl: "https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=fr"
  }
};

export const languageNames = {
  en: "English",
  de: "Deutsch",
  el: "Ελληνικά",
  es: "Español",
  fr: "Français"
};

export const defaultLanguage = 'en';
