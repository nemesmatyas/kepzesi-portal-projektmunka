#Projektmunka - Képzési portál

**_A projekt tárgyát képező probléma és a projektcél rövid felvázolása:_**

A projekt célja egy képzési portál létrehozása, ahol egy vállalat alkalmazottai a munkájukhoz kapcsolódó oktatásokkal, képzésekkel, illetve megszerzett tanúsítványaikkal, kompetenciáikkal kapcsolatos adminisztrációs feladatokat intézhetik. A képzéseken részt vevő felhasználók a portálon megtalálják a számukra elérhető képzéseket, és jelentkezhetnek azokra, illetve a már teljesített képzéseiket is kilistázhatják. A képzéseket egy oktatásszervező hozhatja létre, illetve módosíthatja. A jelentkezéseket, és a részvétel visszaigazolását a menedzser hagyhatja jóvá. Az alkalmazás használatával könnyen és egyszerűen szervezhetők céges oktatások, tanfolyamok, workshopok, továbbá nyomon követhetők az egyes alkalmazottak kompetenciái.

**_A projektterv részletesebb kidolgozása:_**

Az alkalmazás fejlesztése során az alábbi mérföldköveket kell elérnünk:
1.	Portál bejelentkezési felület, bejelentkezés, adatbáziskapcsolat kialakítása
2.	Szerepkörök és jogosultságok kezelése
3.	Elérhető képzések és képzés jelentkezés
4.	Saját kompetenciák megtekintése, módosítása, hozzáadása, törlése
5.	Teljesítményértékelés, negyedéves célok modul
6.	Email értesítések (jelszóemlékeztető, képzés jóváhagyása stb.)

A bejelentkezési felületen a felhasználónak lehetősége lesz egy felhasználónév-jelszó párossal bejelentkezni. Ha elfelejtette a jelszavát, jelszóemlékeztetőt kérhet a megadott email címére. Bejelentkezéskor a rendszer ellenőrzi, hogy a felhasználó milyen jogosultsággal rendelkezik (általános felhasználó, oktatásszervező, csapatvezető, adminisztrátor), és ennek megfelelő műveleteket engedélyez az oldalon.
Az elérhető képzések/képzés jelentkezés felületen a felhasználó megtekintheti a közelgő képzéseket, amelyekre létszámtól függően jelentkezhet. A jelentkezést az oktatásszervezőnek kell jóváhagynia.

A saját kompetenciák felületen a felhasználó megtekintheti a már elvégzett képzéseit, megszerzett tanúsítványait, sikeres projektek listáját stb., és ezeket módosíthatja is.

A teljesítményértékelés modulban az alkalmazott vezetője negyedéves célokat tűzhet ki a beosztottjának (pl.: részvétel megadott képzésen), amelyek közvetlenül befolyásolhatják a negyedéves KPI mutatóját. A negyedéves célokat tartalmazó rekordot a vezetőnek és a beosztottnak egyaránt jóvá kell hagynia, a tartalmát rendszerint egy megbeszélésen egyeztetik. A célokhoz súlyok is rendelhetők, ezzel egyértelműen meghatározható a mozgóbér vagy várható fizetésemelés mértéke (pl.: egy képzésen való részvételhez rendelt súly 0,05: abban az esetben, ha az alkalmazott nem végzi el a képzést az adott negyedévben, 5%-kal kevesebb lesz a mozgóbére), illetve az előléptetéshez szükséges célok is átláthatóbbak lesznek.

Az eredménytermék egy olyan portál lesz, ahonnan a vállalat/szervezet munkatársai/tagjai megtekinthetik a megszerzett kompetenciáikat, és jelentkezhetnek új képzésekre. Az alkalmazás segítségével átláthatóbbá válnak a szervezeten belül az egyes kollégák képességei (pl.: technikai ismeretek, soft skillek, munkatapasztalat stb.), ami egyfelől megkönnyíti a projekt allokációt (pl.: egy szoftverfejlesztő cég esetében az új projekten C# fejlesztőre van szükség, könnyen megtalálhatók azok az alkalmazottak, akiknek van tapasztalata ezzel a programozási nyelvvel), illetve a kollégák előrehaladását is elősegíti (pl.: egy junior kollégát pontosan azokra a képzésekre küldhetjük el, amelyekre feltétlenül szükség van ahhoz, hogy előléptessék). A képzésekről a felhasználók email értesítéseket is kapnak, például, ha a jelentkezést az oktatásszervező elfogadta vagy elutasította.

Az alkalmazás bevezetésével az eddig nem hivatalosan, vagy más felületeken (pl.: Excel táblázatban) tárolt, és így egymástól elszigetelt adatok egy egységes platformon és adatbázisban kapnak helyet, ahol azok könnyebben módosíthatók, tisztíthatók, nyomon követhetők, és megfeleltethetők a hatályos adatvédelmi szabályoknak (GDPR). Segítségével a kollégák tisztább célokat tűzhetnek ki maguknak a munkahelyükön, ami növelheti a munkahelyi elégedettséget, illetve egyértelműbbé válik a teljesítményértékelés folyamata is, hiszen előre kitűzhető egy bizonyos tanúsítvány megszerzése, vagy egy adott képzésen való részvétel a következő negyedéves cél teljesítéséhez.

**_Projektszervezet felépítése:_**

| név          | email cím                    | szerepkör                                             |
|--------------|------------------------------|-------------------------------------------------------|
| Nemes Mátyás | nemes.matyas@hallgato.sze.hu | Frontend, komponensek kialakítása, objektumhierarchia |
| Homlok Bence | bence.homlok95@gmail.com     | Backend, bejelentkezés, autentikáció, adatbázis       |
| Rózsa László | floresz1985@gmail.com        | Webdesign, CSS  