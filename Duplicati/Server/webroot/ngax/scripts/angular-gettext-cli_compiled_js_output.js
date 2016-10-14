angular.module('backupApp').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de', {"- pick an option -":"- Option auswählen -","...loading...":"...laden...","API Key":"API-Schlüssel","AWS Access ID":"AWS Access ID","AWS Access Key":"AWS Access Key","AWS IAM Policy":"AWS IAM Policy","About":"Über","About {{appname}}":"Über {{appname}}","Access Key":"Zugriffsschlüssel","Access to user interface":"Zugriff auf die Benutzeroberfläche","Account name":"Account-Name","Activate":"Aktivieren","Activate failed:":"Aktivierung fehlgeschlagen:","Add advanced option":"Option für Profis hinzufügen","Add filter":"Filter hinzufügen","Add new backup":"Neues Backup erstellen","Add path":"Pfad hinzufügen","Adjust bucket name?":"Bucket-Name anpassen?","Adjust path name?":"Pfad anpassen?","Advanced Options":"Optionen für Profis","Advanced options":"Optionen für Profis","Advanced:":"Für Profis:","All usage reports are sent anonymously and do not contain any personal information. They contain information about hardware and operating system, the type of backend, backup duration, overall size of source data and similar data. They do not contain paths, filenames, usernames, passwords or similar sensitive information.":"Alle Nutzungsberichte werden anonym verschickt und enthalten keine personenbezogenen oder personenbeziehbare Daten. Sie enthalten Daten über Hardware, Betriebssystem, das verwendete Backend, die Backupdauer, die Gesamtgröße des Backups und ähnliche Daten. Sie enthalten NICHT Pfade, Dateinamen, Benutzernamen, Passwörter oder andere sensible Informationen.","Allow remote access (requires restart)":"Fernzugriff erlauben (Neustart notwendig)","Allowed days":"Erlaubte Tage","An existing file was found at the new location":"An dem angegebenen Ort wurde eine bereits vorhandene Datenbank gefunden.","An existing file was found at the new location\nAre you sure you want the database to point to an existing file?":"Eine vorhandene Datenbank wurde gefunden.\nSoll diese Datenbank von nun an verwendet werden?","An existing local database for the storage has been found.\nRe-using the database will allow the command-line and server instances to work on the same remote storage.\n\n Do you wish to use the existing database?":"Eine lokale Datenbank für den Onlinespeicher wurde gefunden.\nMit dieser Datenbank können GUI und Kommandozeile auf dem gleichen Onlinespeicher arbeiten.\n\nSoll die lokale Datenbank genutzt werden?","Anonymous usage reports":"Anonyme Nutzungsberichte","As Command-line":"als Befehl für Kommandozeile","AuthID":"AuthID","Authentication password":"Passwort für Anmeldung","Authentication username":"Benutzername für Anmeldung","Autogenerated passphrase":"Generiertes Passwort","Automatically run backups.":"Backups automatisch ausführen.","B2 Account ID":"B2 Account ID","B2 Application Key":"B2 Application Key","B2 Cloud Storage Account ID":"B2 Cloud Storage Account ID","B2 Cloud Storage Application Key":"B2 Cloud Storage Application Key","Back":"Zurück","Backend modules:":"Backend-Module:","Backup to &gt;":"Backup nach &gt;","Backup:":"Backup:","Backups are currently paused,":"Backups sind momentan pausiert,","Beta":"Beta","Bitcoin: {{bitcoinaddr}}":"Bitcoin: {{bitcoinaddr}}","Browse":"Anzeigen","Browser default":"Standard Browser","Bucket Name":"Bucket-Name","Bucket create location":"Bucket-Speicherort","Bucket create region":"Bucket Bereich erstellen","Bucket name":"Bucket-Name","Bucket storage class":"Bucket Speicherklasse","Building list of files to restore ...":"Dateiliste erstellen...","Building partial temporary database ...":"Temporäre Datenbank wird erstellt...","Busy ...":"Beschäftigt...","Canary":"Canary","Cancel":"Abbrechen","Cannot move to existing file":"Verschieben auf bereits existierende Datei nicht möglich","Changelog":"Änderungen","Changelog for {{appname}} {{version}}":"Changelog für {{appname}} {{version}}","Check failed:":"Prüfung fehlgeschlagen:","Check for updates now":"Aktualisierung suchen","Checking ...":"Überprüfen...","Checking for updates ...":"Suche Aktualisierung...","Chose a storage type to get started":"Wähle einen Speichertypen zum Starten","Click the AuthID link to create an AuthID":"Auf AuthID klicken um eine AuthID zu erstellen","Compact now":"Backup komprimieren","Compacting remote data ...":"Backupdaten verkleinern...","Completing backup ...":"Backup fertigstellen...","Completing previous backup ...":"Vorheriges Backup fertigstellen...","Compression modules:":"Kompression:","Configuration file:":"Konfigurationsdatei:","Configuration:":"Konfiguration:","Confirm delete":"Löschen bestätigen","Confirmation required":"Bestätigung erfolderlich","Connect":"Verbinden","Connect now":"Jetzt verbinden","Connect to &gt;":"Verbinden &gt;","Connecting...":"Verbinden...","Connection lost":"Verbindung verloren","Connnecting to server ...":"Verbinde mit Server...","Container name":"Container-Name","Container region":"Container-Region","Continue":"Fortfahren","Continue without encryption":"Ohne Verschlüsselung fortfahren","Core options":"Allgemeine Optionen","Counting ({{files}} files found, {{size}})":"Dateien ermitteln ({{files}} files found, {{size}})","Crashes only":"Nur Abstürze","Create bug report ...":"Fehlerbericht erstellen...","Created new limited user":"Nutzer mit eingeschränkten Rechten anlegen","Creating bug report ...":"Fehlerbericht wird erstellt...","Creating new user with limited access ...":"Nutzer mit eingeschränkten Rechten wird erstellt...","Creating target folders ...":"Zielverzeichnisse erstellen...","Creating temporary backup ...":"Temporäres Backup erstellen...","Creating user...":"Nutzer anlegen...","Current version is {{versionname}} ({{versionnumber}})":"Aktuelle Version: {{versionname}} ({{versionnumber}})","Custom S3 endpoint":"Benutzerdefinierter S3 endpoint","Custom authentication url":"Benutzerdefinierte URL für Authentifizierung","Custom location ({{server}})":"Benutzerdefinierter Standort ({{server}})","Custom region for creating buckets":"Benutzerdefinierte Region, um Buckets zu erstellen","Custom region value ({{region}})":"Benutzerdefinierter Wert für Region ({{region}})","Custom server url ({{server}})":"Benutzerdefinierte Server-URL ({{server}})","Custom storage class ({{class}})":"Benutzerdefinierte Speicher-Klasse ({{class}})","Days":"Tage","Default":"Standard","Default ({{channelname}})":"Standard ({{channelname}})","Default options":"Standard-Optionen","Delete":"Löschen","Delete ...":"Löschen...","Delete backup":"Backup löschen","Delete local database":"Lokale Datenbank löschen","Delete remote files":"Remote-Dateien löschen","Delete the local database":"Die lokale Datenbank löschen","Delete {{filecount}} files ({{filesize}}) from the remote storage?":"{{filecount}} Dateien ({{filesize}}) vom Remote-Speicher löschen?","Deleting remote files ...":"Remote-Dateien löschen...","Deleting unwanted files ...":"Veraltete Daten löschen...","Did we help save your files? If so, please consider supporting Duplicati with a donation. We suggest {{smallamount}} for private use and {{largeamount}} for commercial use.":"Konnten wir Deine Daten retten? Falls ja, würden wir uns über eine angemessene Spende sehr freuen. Wir empfehlen {{smallamount}} bei privater Nutzung und {{largeamount}} bei geschäftlicher Nutzung.","Disabled":"Deaktiviert","Dismiss":"Verwerfen","Do you really want to delete the backup: \"{{name}}\" ?":"Möchtest du das Backup \"{{name}}\" wirklich löschen?","Do you really want to delete the local database for: {{name}}":"Möchtest du die lokale Datenbank wirklich löschen für: {{name}}","Donate":"Spenden","Donate with Bitcoins":"Spenden per Bitcoin","Donate with PayPal":"Spenden per PayPal","Donation messages":"Spenden-Links","Donation messages are hidden, click to show":"Spenden-Links werden versteckt (jetzt anzeigen)","Donation messages are visible, click to hide":"Spendenlinks werden angezeigt (jetzt ausblenden)","Done":"Fertig","Download":"Herunterladen","Downloading ...":"Herunterladen...","Downloading files ...":"Dateien herunterladen...","Downloading update...":"Update Herunterladen...","Duplicate option {{opt}}":"doppelte Option {{opt}}","Each backup has a local database associated with it, which stores information about the remote backup on the local machine.\\nThis makes it faster to perform many operations, and reduces the amount of data that needs to be downloaded for each operation.":"Jedes Backup hat eine lokale Datenbank. Diese Datenbank beschleunigt viele Aktionen und führt dazu, dass weniger Daten heruntergeladen werden müssen.","Edit ...":"Bearbeiten...","Edit as list":"Als Liste bearbeiten","Edit as text":"Als Text bearbeiten","Empty":"Leer","Encrypt file":"Datei verschlüsseln","Encryption":"Verschlüsselung","Encryption changed":"Verschlüsselung geändert","Encryption modules:":"Verschlüsselungen:","Enter a url, or click the &quot;Connect to &gt;&quot; link":"URL eingeben oder auf &quot;Verbinden &gt;&quot; klicken","Enter a url, or click the 'Backup to &gt;' link":"URL eingeben oder auf 'Backup nach &gt;' klicken","Enter access key":"Zugriffsschlüssel angeben","Enter account name":"Account-Name angeben","Enter backup passphrase, if any":"Passwort für Backup","Enter container name":"Container-Name angeben","Enter encryption passphrase":"Passwort für Verschlüsselung angeben","Enter expression here":"Ausdruck hier eingeben","Enter folder path name":"Ordnerpfad eingeben","Enter one option per line in command-line format, eg. {0}":"Gib eine Option pro Zeile an im Kommandozeilen-Format, z.B. {0}","Enter the destination path":"Ziel-Pfad angeben","Error":"Fehler","Error!":"Fehler!","Errors and crashes":"Fehler und Abstürze","Exclude":"Ausschließen","Exclude directories whose names contain":"Ordner ausschließen dessen Namen beinhaltet","Exclude expression":"Filter (ausschließen)","Exclude file":"Datei ausschließen","Exclude file extension":"Dateiendung ausschließen","Exclude files whose names contain":"Dateien ausschließen dessen Namen beinhaltet","Exclude folder":"Ordner ausschließen","Exclude regular expression":"Regulären Ausdruck (ausschließen)","Existing file found":"Vorhandene Datenbank gefunden","Experimental":"Experimental","Export":"Exportieren","Export ...":"Exportieren...","Export backup configuration":"Backup-Konfiguration exportieren","Export configuration":"Konfiguration exportieren","Exporting ...":"Exportieren...","FTP (Alternative)":"FTP (Alternativ)","Failed to build temporary database: {{message}}":"Erstellen der temporären Datenbank fehlgeschlagen: {{message}}","Failed to connect: {{message}}":"Verbindung fehlgeschlagen: {{message}}","Failed to delete:":"Löschen fehlgeschlagen:","Failed to fetch path information: {{message}}":"Konnte Pfadangaben nicht abrufen: {{message}}","Failed to read backup defaults:":"Konnte Standard-Einstellungen nicht lesen:","Failed to restore files: {{message}}":"Wiederherstellung der Dateien fehlgeschlagen: {{message}}","Failed to save:":"Fehler beim Speichern:","Fetching path information ...":"Pfad-Infos werden ermittelt...","Files larger than:":"Dateien größer als:","Filters":"Filter","Finished!":"Fertiggestellt!","Folder path":"Ordnerpfad","Folders":"Ordner","Force stop":"Stoppen erzwingen","Fri":"Fr","GByte":"GByte","GByte/s":"GByte/s","GCS Project ID":"GCS Project ID","General":"Allgemein","General options":"Allgemeine Einstellungen","Generate":"Erzeugen","Generate IAM access policy":"Generieren IAM Zugriffsrichtlinie","Hidden files":"Versteckte Dateien","Hide":"Ausblenden","Hide hidden folders":"versteckte Ordner ausblenden","Hours":"Stunden","How do you want to handle existing files?":"Wie sollen bestehende Dateien behandelt werden?","If a date was missed, the job will run as soon as possible.":"Wurde ein Zeitpunkt verpasst, startet das Backup so bald wie möglich.","If the backup and the remote storage is out of sync, Duplicati will require that you perform a repair operation to synchronize the database.\\nIf the repair is unsuccesful, you can delete the local database and re-generate.":"Wenn lokale Daten und das Backup nicht mehr synchron sind, muss die lokale Datenbank repariert werden.\\nSollte die Reparatur nicht erfolgreich sein, so kann die lokale Datenbank gelöscht und neu erstellt werden.","If the backup file was not downloaded automatically,":"Wenn die Backup-Dateien nicht automatisch heruntergeladen werden konnten,","If you do not enter a path, all files will be stored in the login folder.\nAre you sure this is what you want?":"Ohne Pfad werden alle Dateien im Login-Verzeichnis gespeichert.\nMöchtest du das?","If you do not enter an API Key, the tenant name is required":"Wenn kein API Schlüssel angegeben wurde, ist der Tenant-Name erforderlich.","Import":"Importieren","Import backup configuration":"Konfigurationsdatei importieren","Import configuration from a file ...":"Konfigurationsdatei importieren...","Importing ...":"Importieren...","Include a file?":"Datei einfügen?","Include expression":"Filter (einschließen)","Include regular expression":"Regulären Ausdruck (einschließen)","Individual builds for developers only.":"Individuelle Versionen für Entwickler.","Install":"Installieren","Install failed:":"Installation fehlgeschlagen:","It is possible to connect to some FTP without a password.\nAre you sure your FTP server supports password-less logins?":"Manche FTP-Server erlauben einen Login ohne Passwort.\nBist Du sicher, dass Dein FTP-Server dazu gehört?","KByte":"KByte","KByte/s":"KByte/s","Keep backups":"Backups speichern","Language in user interface":"Sprache der Benutzeroberfläche","Last month":"Letzter Monat","Last successful run:":"Letztes erfolgreiches Backup:","Latest":"Neuste","Libraries":"Bibliotheken","Listing backup dates ...":"Backups werden aufgelistet...","Live":"Live","Load older data":"ältere Einträge laden","Loading ...":"Laden...","Local database for":"Lokale Datenbank für","Local database path:":"Lokale Datenbank:","Local storage":"Lokaler Speicher","Location":"Ort","Location where buckets are created":"Speicherort, wo die Buckets erstellt werden","Log data":"Log-Meldungen","MByte":"MByte","MByte/s":"MByte/s","Maintenance":"Wartung","Manage database ...":"Datenbank verwalten...","Manually type path":"Pfad eingeben","Menu":"Menü","Minutes":"Minuten","Missing destination":"Ziel fehlt","Missing name":"Name fehlt","Missing passphrase":"Passwort fehlt","Missing sources":"Quelle fehlt","Mon":"Mo","Months":"Monate","Move existing database":"Datenbank verschieben","Move failed:":"Verschieben fehlgeschlagen:","My Photos":"Meine Fotos","Name":"Name","Never":"Nie","New update found: {{message}}":"Neues Update verfügbar: {{message}}","New user name is {{user}}.\nUpdated credentials to use the new limited user":"Neuer Benutzername ist {{user}}.\nZugangsdaten für eingeschränken Benutzer verwendet","Next":"Weiter","Next scheduled run:":"Nächstes Backup geplant:","Next scheduled task:":"Nächste geplante Aufgabe:","Next task:":"Nächste Aufgabe:","Next time":"Nächstes Backup","No":"Nein","No editor found for the &quot;{{backend}}&quot; storage type":"Kein Editor für den &quot;{{backend}}&quot; Speichertyp gefunden","No encryption":"Keine Verschlüsselung","No items selected":"Nichts ausgewählt","No items to restore, please select one or more items":"Es wurde nichts für die Wiederherstellung ausgewählt. Wähle eine Datei oder einen Ordner aus.","No passphrase entered":"Kein Passwort angegeben","No scheduled tasks, you can manually start a task":"Kein Backup geplant. Backup von Hand starten.","Non-matching passphrase":"Passwort-Fehler","None / disabled":"Keine / deaktiviert","OK":"OK","OpenStack AuthURI":"OpenStack AuthURI","OpenStack Object Storage / Swift":"OpenStack Object Storage / Swift","Operation failed:":"Operation fehlgeschlagen:","Operations:":"Operationen:","Optional authentication password":"Passwort für Anmeldung (optional)","Optional authentication username":"Benutzername für Anmeldung (optional)","Options":"Optionen","Original location":"Ursprünglicher Speicherort","Others":"Weitere","Overwrite":"Überschreiben","Passphrase":"Paswort","Passphrase (if encrypted)":"Passwort (falls verschlüsselt)","Passphrase changed":"Passwort gändert","Passphrases are not matching":"Die Passwörter stimmen nicht überein","Password":"Passwort","Passwords do not match":"Die Passwörter stimmen nicht überein","Patching files with local blocks ...":"Dateien mit vorhandenen Daten aufbauen...","Path not found":"Pfad nicht gefunden","Path on server":"Pfad auf Server","Path or subfolder in the bucket":"Pfad oder Unterverzeichnis im Bucket","Pause":"Pause","Pause after startup or hibernation":"Pause nach dem Aufwachen des PCs","Pause controls":"Pause","Permissions":"Berechtigungen","Pick location":"Speicherort auswählen","Port":"Port","Previous":"Zurück","ProjectID is optional if the bucket exist":"Die Projekt-ID ist optional, wenn der Bucket existiert","Proprietary":"Proprietär","Rebuilding local database ...":"Lokale Datenbank wieder aufbauen...","Recreate (delete and repair)":"Wiederherstellen (löschen und reparieren)","Recreating database ...":"Datenbank wird neu erstellt...","Registering temporary backup ...":"Temporäres Backup registrieren...","Relative paths not allowed":"Relative Pfade sind nicht möglich","Reload":"Neu laden","Remote":"Remote","Remove":"Entfernen","Remove option":"Option entfernen","Repair":"Reparieren","Reparing ...":"Reparieren...","Repeat Passphrase":"Passwort wiederholen","Reporting:":"Bericht:","Reset":"Zurücksetzen","Restore":"Wiederherstellen","Restore backup":"Backup wiederherstellen","Restore files":"Dateien wiederherstellen","Restore files ...":"Dateien wiederherstellen...","Restore from":"Wiederherstellen von","Restore options":"Wiederherstellungsoptionen","Restore read/write permissions":"Scheib- und Leserechter wiederherstellen","Restoring files ...":"Dateien werden wiederhergestellt...","Resume now":"Jetzt starten","Run again every":"Wiederholen alle","Run now":"Jetzt sichern","Running ...":"Läuft...","Running task":"Backup läuft","Running task:":"Backup läuft:","S3 Compatible":"S3 Kompatibel","Same as the base install version: {{channelname}}":"Wie die zuerst installierte Version: {{channelname}}","Sat":"Sa","Save":"Speichern","Save and repair":"Speichern und reparieren","Save different versions with timestamp in file name":"Mehrere Versionen mit Zeitstempel im Dateinamen speichern","Scanning existing files ...":"Vorhandene Dateien scannen...","Scanning for local blocks ...":"Vorhandene Daten scannen...","Schedule":"Zeitplan","Search":"Suche","Search for files":"Dateien suchen","Seconds":"Sekunden","Select a log level and see messages as they happen:":"Wähle ein Log-Level und sehe live die Meldungen:","Server":"Server","Server and port":"Server und Port","Server hostname or IP":"Server-Hostname oder IP","Server is currently paused,":"Server ist pausiert,","Server is currently paused, do you want to resume now?":"Server ist pausiert, wollen Sie jetzt wieder aufnehmen?","Server paused":"Server pausiert","Server state properties":"Server Zustandseigenschaften","Settings":"Einstellungen","Show":"Zeigen","Show advanced editor":"Profi-Modus anzeigen","Show hidden folders":"Zeige versteckte Ordner","Show log":"Logfile anzeigen","Show log ...":"Log-Datei anzeigen...","Some OpenStack providers allow an API key instead of a password and tenant name":"Einige OpenStack Anbieter erlauben einen API Schlüssel anstelle eines Passwortes und Tenant Namen","Source Data":"Quell-Daten","Source folders":"Quell-Verzeichnisse","Source:":"Quelle:","Specific builds for developers only.":"Spezielle Versionen für Entwickler.","Standard protocols":"Standardprotokolle","Starting ...":"Los geht's...","Starting the restore process ...":"Wiederherstellung wird gestartet...","Stop":"Stop","Storage Type":"Speichertyp","Storage class":"Speicherklasse","Storage class for creating a bucket":"Speicherklasse zum Erstellen eines Bucket","Stored":"Gespeichert","Strong":"Stark","Sun":"So","System default ({{levelname}})":"System-Standard ({{levelname}})","System files":"Systemdateien","System info":"System-Informationen","System properties":"System-Eigenschaften","TByte":"TByte","TByte/s":"TByte/s","Task is running":"Aufgabe wird ausgeführt","Temporary files":"Temporäre Dateien","Tenant Name":"Tenant-Name","Test connection":"Verbindung prüfen","Testing ...":"Testen...","Testing permissions ...":"Rechte werden geprüft...","Testing permissions...":"Rechte werden geprüft...","The bucket name should be all lower-case, convert automatically?":"Der Bucket sollte klein geschrieben sein. Jetzt klein schreiben?","The bucket name should start with your username, prepend automatically?":"Der Bucket-Name sollte mit Deinem Benutzernamen beginnen. Benutzername hinzufügen?","The connection to the server is lost, attempting again in {{time}} ...":"Die Verbindung zum Server wurde verloren. Versuch erneut in {{time}}...","The path does not appear to exist, do you want to add it anyway?":"Der Pfad scheint nicht zu existieren. Möchtest Du ihn trotzdem hinzufügen?","The path does not end with a '{0}' character, which means that you include a file, not a folder.\n\nDo you want to include the specified file?":"Ohne das abschließende '{0}' fügst du eine Datei hinzu und kein Verzeichnis.\n\nMöchtest du diese Datei hinzufügen?","The path must be an absolute path, i.e. it must start with a forward slash '/'":"Der Pfad muss ein absoluter Pfad sein. Das heißt, er muss mit '/' beginnen","The path should start with \"{{prefix}}\" or \"{{def}}\", otherwise you will not be able to see the files in the HubiC web interface.\n\nDo you want to add the prefix to the path automatically?":"Der Pfad sollte mit \"{{prefix}}\" oder \"{{def}}\" beginnen. Ansonsten wirst du die Dateien nicht auf der HubiC-Webseite sehen können.\n\nSoll das Prefix automatisch hinzugefügt werden?","The region parameter is only applied when creating a new bucket":"Der Bereich Parameter wird nur angewendet, wenn ein neuer Bucket erzeugt wird","The region parameter is only used when creating a bucket":"Der Bereich Parameter wird nur angewendet, wenn ein Bucket erzeugt wird","The storage class affects the availability and price for a stored file":"The storage class affects the availability and price for a stored file","The target folder contains encrypted files, please supply the passphrase":"Das Ziel enthält verschlüsselte Dateien. Wir benötigen ein Passwort!","The user has too many permissions. Do you want to create a new limited user, with only permissions to the selected path?":"Der Nutzer hat zu viele Rechte. Möchtest Du einen Nutzer mit eingeschränkten Berechtigungen für den gewählten Pfad erstellen?","This month":"Dieser Monat","This week":"Diese Woche","Thu":"Do","To File":"als Datei","To export without a passphrase, uncheck the \"Encrypt file\" box":"Entferne den Haken für die Verschlüsselung, um ohne Passwort zu exportieren","Today":"Heute","Try out the new features we are working on. Don't use with important data.":"Neue Funktionen ausprobieren. Nutze diese Versionen nicht mit wichtigen Backups!","Tue":"Di","Type to highlight files":"Tippen, um Dateien zu markieren","Unknown":"Unbekannt","Until resumed":"Bis zur Wiederaufnahme","Update channel":"Update-Kanal","Update failed:":"Update fehlgeschlagen:","Updating with existing database":"Datenbank wird aktualisiert","Upload volume size":"Dateigröße beim Upload","Uploading verification file ...":"Prüfdatei hochladen...","Usage reports help us improve the user experience and evaluate impact of new features. We use them to generate <a href=\"{{link}}\" target=\"_blank\">public usage statistics</a>":"utzungsberichte helfen und bei der Weiterentwicklung. Wir generieren daraus <a href=\"{{link}}\" target=\"_blank\">öffentliche Nutzungsstatistiken</a>","Usage statistics":"Nutzungsstatistiken","Usage statistics, warnings, errors, and crashes":"Nutzungsberichte, Warnungen, Fehler und Abstürze","Use SSL":"SSL benutzen","Use existing database?":"Bestehende Datenbank nutzen?","Use weak passphrase":"Schwaches Passwort nutzen","Useless":"Nutzlos","User has too many permissions":"Nutzer hat zu viele Rechte","User interface language":"Sprache der Benutzeroberfläche","Username":"Benutzername","VISA, Mastercard, ... via Paypal":"VISA, Mastercard, ... via Paypal","Validating ...":"Validieren...","Verify files":"Backup prüfen","Verifying ...":"Prüfen...","Verifying backend data ...":"Verifiziere Backend-Daten...","Verifying remote data ...":"Backupdaten prüfen...","Verifying restored files ...":"Wiederhergestellte Dateien prüfen...","Very strong":"Sehr stark","Very weak":"Sehr schwach","Visit us on":"Besuche uns auf","Waiting for task to begin":"Warte darauf, loslegen zu können","Waiting for upload ...":"Auf den Upload warten...","Warnings, errors and crashes":"Warnungen, Fehler und Abstürze","We recommend that you encrypt all backups stored outside your system":"Wir empfehlen, alle Backups auf Onlinespiechern zu verschlüsseln.","Weak":"Schwach","Weak passphrase":"Schwaches Passwort","Wed":"Mi","Weeks":"Wochen","Where do you want to restore the files to?":"Wohin sollen die Dateien wiederhergestellt werden?","Years":"Jahre","Yes":"Ja","Yes, I have stored the passphrase safely":"Ja, ich habe das Passwort sicher gespeichert","Yes, I'm brave!":"Ja, ich bin mutig!","Yes, please break my backup!":"Ja, mach das Backup kaputt!","Yesterday":"Gestern","You are changing the database path away from an existing database.\nAre you sure this is what you want?":"Du änderst gerade den Pfad zur lokalen Datenbank.\nWeißt Du, was Du da tust?","You are currently running {{appname}} {{version}}":"Aktuell wird {{appname}} {{version}} verwendet","You have changed the encryption mode. This may break stuff. You are encouraged to create a new backup instead":"Du hast die Verschlüsselung geändert. Dadurch kann das bestehende Backup unbenutzbar sein. Erstelle lieber ein neues Backup.","You have changed the passphrase, which is not supported. You are encouraged to create a new backup instead.":"Du hast das Passwort geändert. Dadurch kann das bestehende Backup unbenutzbar sein. Erstelle lieber ein neues Backup.","You have chosen not to encrypt the backup. Encryption is recommended for all data stored on a remote server.":"Alle Backups auf Onlinespeichern sollten verschlüsselt werden.","You have generated a strong passphrase. Make sure you have made a safe copy of the passphrase, as the data cannot be recovered if you loose the passphrase.":"Du hast ein starkes Passwort generiert. Kannst Du Dir das merken? Sonst schreib es lieber auf. Denn ohne Passwort kannst Du Dein Backup nicht wiederherstellen.","You must choose at least one source folder":"Du musst schon ein Quellverzeichnis wählen","You must enter a destination where the backups are stored":"Du musst ein Ziel angeben, in dem das Backup gespeichert ist","You must enter a name for the backup":"Gib einen Namen für das Backup an","You must enter a passphrase or disable encryption":"Gib das Passwort ein, um die Verschlüsselung zu deaktivieren","You must enter a tenant name if you do not provide an API Key":"Gib einen Kundennamen an, wenn Du keinen API-Key hast.","You must enter either a password or an API Key":"Gib einen API-Key oder ein Passwort ein.","You must enter either a password or an API Key, not both":"Gib einen API-Key oder ein Passwort an. Aber nicht beides!","You must fill in the password":"Gib ein Passwort an!","You must fill in the path":"Gib einen Pfad an!","You must fill in the server name or address":"Gib einen Server-Namen oder eine Adresse ein!","You must fill in the username":"Gib einen Benutzernamen an!","You must fill in {{field}}":"{{field}} muss ausgefüllt sein","You must select or fill in the AuthURI":"AuthURI auswählen oder eintragen","You must select or fill in the server":"Server auswählen oder eintragen","Your files and folders have been restored successfully.":"Dateien und Ordner erfolgreich wiederhergestellt.","Your passphrase is easy to guess. Consider changing passphrase.":"Dein Passwort ist leicht zu erraten. Nimm lieber etwas Komplizierteres.","a specific number":"eine Anzahl","bucket/folder/subfolder":"Bucket/Ordner/Unterordner","byte":"byte","byte/s":"Byte/s","click to resume now":"Jetzt starten","custom":"benutzerdefiniert","for a specific time":"eine Dauer","forever":"immer","resume now":"Jetzt starten","resuming in":"starte in","right click and choose &quot;Save as ...&quot;":"Rechtsklick und &quot;Speichern unter...&quot; auswählen","{{appname}} was primarily developed by <a href=\"{{mail1}}\">{{dev1}}</a> and <a href=\"{{mail2}}\">{{dev2}}</a>. {{appname}} can be downloaded from <a href=\"{{websitelink}}\">{{websitename}}</a>. {{appname}} is licensed under the <a href=\"{{licenselink}}\">{{licensename}}</a>.":"{{appname}} wurde hauptsächlich von <a href=\"{{mail1}}\">{{dev1}}</a> und <a href=\"{{mail2}}\">{{dev2}}</a> entwickelt. {{appname}} kann unter folgender Adresse heruntergeladen werden: <a href=\"{{websitelink}}\">{{websitename}}</a>. {{appname}} ist unter <a href=\"{{licenselink}}\">{{licensename}}</a> lizenziert.","{{files}} files ({{size}}) to go":"Noch {{files}} Dateien ({{size}})","{{number}} Hour":"{{number}} Stunde","{{number}} Minutes":"{{number}} Minuten","{{time}} (took {{duration}})":"{{time}} (dauerte {{duration}})"});
/* jshint +W100 */
}]);