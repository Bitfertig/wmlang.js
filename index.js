/**
 * Translation of a month.
 * @param {*} month 1 - 12
 * @param {*} locale en, de, ...
 */
function month(month, locale = 'en') {
    let intl = new Intl.DateTimeFormat(locale, { month: 'long' });
    return intl.format( new Date(1970, Number(month) - 1, 1) );
}

/**
 * Translation of a weekday.
 * @param {*} weekday 1 - 7
 * @param {*} locale  en, de, ...
 */
function weekday(weekday, locale = 'en') {
    let intl = new Intl.DateTimeFormat(locale, { weekday: 'long' });
    return intl.format( new Date(1970, 0, Number(weekday) + 4 ) );
}

export { month, weekday };