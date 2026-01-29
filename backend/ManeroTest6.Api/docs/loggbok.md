# Loggbok – ManeroTest6

## 2026-01-19
**Aktivitet:** Projektstart  
**Resultat:**  
- Skapat projektstruktur
- Initierat ASP.NET Core Web API
- Verifierat att backend kör via Swagger

## 2026-01-19
**Aktivitet:** Felsökning av backend-start  
**Resultat:**  
- Identifierade att `dotnet run` kördes i fel katalog  
- Navigerade till ManeroTest6.Api där .csproj-filen finns  
- Lyckades starta API och verifierade via Swagger

## 2026-01-20
**Aktivitet:** Konfigurering av Swagger  
**Resultat:**  
- Fick fel vid användning av AddSwaggerGen  
- Identifierade att Swashbuckle.AspNetCore saknades  
- Installerade NuGet-paketet via dotnet CLI  
- Verifierade att projektet startar utan fel

## 2026-01-20
**Aktivitet:** Verifiering av backend utan controllers  
**Resultat:**  
- Startade applikationen med dotnet run utan fel  
- Förstod att API saknar startsida utan definierade endpoints  
- Identifierade att tom sida/404 på root är förväntat beteende  
- Bekräftade att servern lyssnar på korrekt port

## 2026-01-20
**Aktivitet:** Skapade Product-modell  
**Resultat:**  
- Skapade mappen Models  
- Implementerade Product-klass med Id, Name, Price och Description  
- Förstod hur modeller används för att representera data i backend

## 2026-01-20
**Aktivitet:** Felsökning av namespace-problem  
**Resultat:**  
- Fick build-fel när ProductsController inte hittade Product-modellen  
- Identifierade felaktig mappstruktur/namespace  
- Justerade namespace till ManeroTest6.Api.Models  
- Förstod kopplingen mellan mappstruktur och namespaces

## 2026-01-21
**Aktivitet:** Implementerade POST-funktionalitet för produkter  
**Resultat:**  
- Skapade POST /api/products endpoint  
- Implementerade in-memory-lagring av produkter  
- Testade funktionalitet via Swagger  
- Skapade enhetstest för AddProduct  
- Uppfyllde User Story: Lägg till produkt


                       Aktivitetsdiagram

                              
 Start
  |
  v
Användare öppnar produktsidan
  |
  v
Frontend skickar request till API (/api/products)
  |
  v
ProductsController tar emot request
  |
  v
Produkter hämtas från listan
  |
  v
API returnerar produkter i JSON-format
  |
  v
Produkter visas för användaren
  |
  v
Slut

1. Start

2. Användare öppnar produktsidan

3. Frontend skickar "request" till API

4. ProductsController tar emot "request"

5. Produkter hämtas

6. Producter skickas tillbaka som JSON

7. Produkter visas för användaren

8. Slut
