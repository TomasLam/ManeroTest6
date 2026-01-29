# ManeroTest6

Detta projekt är en del av kursen Webbutveckling .NET.  
Projektet är en förenklad backend för en e-handelslösning (Manero).

Syftet med projektet är att visa förståelse för:
- ASP.NET Core Web API
- User stories
- Enhetstester
- Versionshantering med Git och GitHub

---

## Tekniker

- ASP.NET Core Web API
- C#
- xUnit (tester)
- Git & GitHub

---

## Funktionalitet

### User Story 1
**Som kund vill jag kunna se en lista med produkter så att jag kan välja vad jag vill köpa.**

- Endpoint: `GET /api/products`
- Returnerar en lista med produkter i JSON-format

### User Story 2
**Som administratör vill jag kunna lägga till en produkt så att sortimentet kan uppdateras.**

- Endpoint: `POST /api/products`
- Tar emot en produkt i JSON-format och lägger till den i listan

---

## Tester

Projektet innehåller enhetstester för respektive user story:
- Test för att verifiera att `GET /api/products` returnerar OK
- Test för att verifiera att `POST /api/products` returnerar Created

Tester körs med:


---

## Starta projektet

1. Navigera till backend-projektet:

2. Starta API:t:

3. API:t körs på:

4. Swagger finns på:


---

## Kommentar

Detta är ett utbildningsprojekt och fokuserar på grundläggande funktionalitet
för att uppfylla kursens krav för godkänt.