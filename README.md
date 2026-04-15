# أبجد — Abjad Gematria · Koran-Suche

Eine offline-fähige Progressive Web App (PWA) zur Berechnung und Suche arabischer Abjad-Zahlenwerte (حساب الجمّل / Ḥisāb al-Jummal) im Koran.

## Features

- **13 Gematria-Methoden** — Standard (Ḥisāb al-Jummal), Ordinal, Reduziert, Quadriert, Kubiert, AtBash-Spiegel, Kumulativ, Dreieckswert, Digitalwurzel u.v.m.
- **Vollständige Koran-Datenbank** — alle 6.236 Verse (Uthmani-Text) durchsuchbar
- **Koran-Wort-Index** — ~18.000 einzigartige Wörter mit Abjad-Wert, Transliteration und Buchstaben-Aufschlüsselung
- **Klickbare Versreferenzen** — zeigt den vollständigen Vers mit hervorgehobenem Suchwort
- **Deutsche Übersetzung** — Bubenheim/Elyas via alquran.cloud API
- **Transliteration** — lateinische Umschrift für alle Wörter und Verse
- **Arabische Bildschirmtastatur** — mit Abjad-Wert auf jeder Taste
- **Vollständig offline nutzbar** — Koran-Daten werden in IndexedDB gespeichert
- **PWA-installierbar** — als App auf Android, iOS und Desktop installierbar

## Screenshot

Zahl oder arabisches Wort eingeben → sofort alle Wörter und Verse mit gleichem Gematria-Wert finden.

## Benutzung

1. **Online:** [dogan1908.github.io/abjad-gematria](https://dogan1908.github.io/abjad-gematria/)
2. **Als App installieren:** Im Browser öffnen → Menü → „Zum Startbildschirm hinzufügen" / „App installieren"
3. **Offline:** Nach dem ersten Laden funktioniert alles ohne Internet

## Berechnungsmethoden

| Methode | Arabisch | Beschreibung |
|---------|----------|-------------|
| Ḥisāb al-Jummal | حساب الجمّل | Standard-Abjad (ا=1 … غ=1000) |
| Tartībī | ترتيبي | Ordinalwert (1–28) |
| Ṣaghīr | صغير | Reduzierter Wert (ohne Nullen) |
| Murabbaʿ | مربّع | Quadrierter Wert |
| Mukʿab | مكعّب | Kubierter Wert |
| ʿAksi | عكسي | Spiegel-Alphabet (AtBash) |
| Tarākumī | تراكمي | Aufbau-Wert (kumulativ) |
| Tathlīthī | تثليثي | Dreieckswert (triangulär) |
| Jadhr Raqamī | جذر رقمي | Digitalwurzel |
| Muḍāf | مضاف | Standard + Buchstabenanzahl |
| Kullī | كلّي | Standard + Wortanzahl |
| Mawḍiʿī | موضعي | Wert × Position |
| Jummal² | جمّل² | Standardwert zum Quadrat |

## Datenquellen

- **Koran-Text:** [quran-json](https://github.com/risan/quran-json) (Uthmani-Ausgabe, Open Source)
- **Deutsche Übersetzung:** Bubenheim/Elyas via [alquran.cloud](https://alquran.cloud/api) API
- **Transliteration:** en.transliteration via alquran.cloud API

## Technologie

- Vanilla HTML/CSS/JavaScript (kein Framework)
- IndexedDB für Offline-Datenspeicherung
- Service Worker für Offline-Caching
- PWA-Manifest für App-Installation

## Hintergrund

Das Abjad-Zahlensystem (أبجد) ist ein über tausend Jahre altes alphanumerisches System, bei dem den 28 Buchstaben des arabischen Alphabets Zahlenwerte zugeordnet werden. Es wurde historisch in der islamischen Wissenschaft, Mathematik und im ʿIlm al-Ḥurūf (Buchstabenwissenschaft) verwendet.

Die traditionelle Reihenfolge folgt dem Merksatz: **أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ**

## Lizenz

MIT License — siehe [LICENSE](LICENSE)

## Autor

**Dogan Balban** — [github.com/dogan1908](https://github.com/dogan1908)
