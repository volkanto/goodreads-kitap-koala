const defaultLanguage = 'Turkish';
const metaIsbn = document.querySelector('meta[property="books:isbn"]').content;
const kitapKoalaLink = `https://www.kitapkoala.com?p=Products&q=${metaIsbn}`;
const languageSelector = document.querySelector('div[itemprop="inLanguage"]');
const language = languageSelector ? languageSelector.textContent : null;

if (metaIsbn && language == defaultLanguage) {
    $(".buyButtonBar").append(`<a class="buttonBar kitapKoala" target="_blank" href="${kitapKoalaLink}">Kitap Koala 🐨</a>`);
}
