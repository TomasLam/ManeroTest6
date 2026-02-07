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

## 2026-01-21
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

## 2026-01-22
**Aktivitet:** Pushade projektet till GitHub  
**Resultat:**  
- Kopplade lokalt Git-repository till GitHub  
- Pushade main-branch till publikt repo  
- Verifierade att korrekt struktur finns utan build-filer

## 2026-01-22
**Aktivitet:** Slutförde backend och dokumentation  
**Resultat:**   
- Pushade projektet till publikt GitHub-repo  
- Skapade README och verifierade tester  
- Förberedde projektet för frontend-arbete

## 2026-01-26
**Aktivitet:** Scrumboard och user stories  
**Resultat:**  
- Skapade scrumboard i GitHub Projects  
- Dokumenterade två user stories och markerade dem som Done  
- Tog screenshots för inlämning

## 2026-01-29
**Aktivitet:** Frontend setup  
**Resultat:**  
- Skapade React-projekt med Vite  
- Byggde onboarding-flöde
- Implementerade navigering till login-sidan
- Byggde Login och Forgot password sida
- Skapade Sign up och verifieringsflöde
- Koppla ihop auth-flödet
- Lade till "Skip" knapp till Login sidan

## 2026-02-2
**Aktivitet:** Frontend – produktflöden och navigation  
**Resultat:**  
- Byggde ProductList, Categories, Wishlist och Reviews  
- Implementerade navigation via bottom navigation  
- Lade till filter- och review-sidor  
- Commit och push till GitHub

## 2026-02-5
**Aktivitet:** Checkout-flöde och cart-funktionalitet  
**Resultat:**  
- Implementerade global cart-state i React (add to cart funktion). 
- Skapade Cart-sida som visar produkter som lagts till.
- Skapade Shipping details- och Payment-sidor och kopplade navigation mellan dessa.
- Testade hela flödet: Product → Cart → Checkout → Payment → Result.