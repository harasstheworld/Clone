const currencyData = {
  USD: {
    symbol: "$",
    name: "US Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-United-States",
    code: "USD",
    name_plural: "US dollars",
    money_format: "${{amount}}",
    money_with_currency_format: "${{amount}} USD",
  },
  CAD: {
    symbol: "CA$",
    name: "Canadian Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Canada",
    code: "CAD",
    name_plural: "Canadian dollars",
    money_format: "${{amount}}",
    money_with_currency_format: "${{amount}} CAD",
  },
  EUR: {
    symbol: "€",
    name: "Euro",
    symbol_native: "€",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-European-Union",
    code: "EUR",
    name_plural: "euros",
    money_format: "&euro;{{amount}}",
    money_with_currency_format: "&euro;{{amount}} EUR",
  },
  AED: {
    symbol: "AED",
    name: "United Arab Emirates Dirham",
    symbol_native: "د.إ.‏",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-United-Arab-Emirates",
    code: "AED",
    name_plural: "UAE dirhams",
    money_format: "{{amount}} د.إ",
    money_with_currency_format: "{{amount}} د.إ AED",
  },
  AFN: {
    symbol: "Af",
    name: "Afghan Afghani",
    symbol_native: "؋",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Afghanistan",
    code: "AFN",
    name_plural: "Afghan Afghanis",
    money_format: "&#65;&#102; {{amount}}",
    money_with_currency_format: "&#65;&#102; {{amount}} AFN",
  },
  ALL: {
    symbol: "ALL",
    name: "Albanian Lek",
    symbol_native: "Lek",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Albania",
    code: "ALL",
    name_plural: "Albanian lekë",
    money_format: "Lek {{amount}}",
    money_with_currency_format: "Lek {{amount}} ALL",
  },
  AMD: {
    symbol: "AMD",
    name: "Armenian Dram",
    symbol_native: "դր.",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Armenia",
    code: "AMD",
    name_plural: "Armenian drams",
    money_format: "{{amount}}",
    money_with_currency_format: "{{amount}} AMD",
  },
  ARS: {
    symbol: "AR$",
    name: "Argentine Peso",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Argentina",
    code: "ARS",
    name_plural: "Argentine pesos",
    money_format: "${{amount_with_comma_separator}}",
    money_with_currency_format: "${{amount_with_comma_separator}} ARS",
  },
  AUD: {
    symbol: "AU$",
    name: "Australian Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Australia",
    code: "AUD",
    name_plural: "Australian dollars",
    money_format: "${{amount}}",
    money_with_currency_format: "${{amount}} AUD",
  },
  AZN: {
    symbol: "man.",
    name: "Azerbaijani Manat",
    symbol_native: "ман.",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Azerbaijan",
    code: "AZN",
    name_plural: "Azerbaijani manats",
    money_format: "&#8380;{{amount}}",
    money_with_currency_format: "&#8380;{{amount}} AZN",
  },
  BAM: {
    symbol: "KM",
    name: "Bosnia-Herzegovina Convertible Mark",
    symbol_native: "KM",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Bosnia-and-Herzegovina",
    code: "BAM",
    name_plural: "Bosnia-Herzegovina convertible marks",
    money_format: "KM {{amount_with_comma_separator}}",
    money_with_currency_format: "KM {{amount_with_comma_separator}} BAM",
  },
  BDT: {
    symbol: "Tk",
    name: "Bangladeshi Taka",
    symbol_native: "৳",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Bangladesh",
    code: "BDT",
    name_plural: "Bangladeshi takas",
    money_format: "Tk {{amount}}",
    money_with_currency_format: "Tk {{amount}} BDT",
  },
  BGN: {
    symbol: "BGN",
    name: "Bulgarian Lev",
    symbol_native: "лв.",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Bulgaria",
    code: "BGN",
    name_plural: "Bulgarian leva",
    money_format: "{{amount}} лв",
    money_with_currency_format: "{{amount}} лв BGN",
  },
  BHD: {
    symbol: "BD",
    name: "Bahraini Dinar",
    symbol_native: "د.ب.‏",
    decimal_digits: 3,
    rounding: 0,
    class_name: "flags-Bahrain",
    code: "BHD",
    name_plural: "Bahraini dinars",
    money_format: "{{amount}} BD",
    money_with_currency_format: "{{amount}} BHD",
  },
  BIF: {
    symbol: "FBu",
    name: "Burundian Franc",
    symbol_native: "FBu",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Burundi",
    code: "BIF",
    name_plural: "Burundian francs",
    money_format: "&#70;&#66;&#117; {{amount}}",
    money_with_currency_format: "&#70;&#66;&#117; {{amount}} BIF",
  },
  BND: {
    symbol: "BN$",
    name: "Brunei Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Brunei",
    code: "BND",
    name_plural: "Brunei dollars",
    money_format: "${{amount}}",
    money_with_currency_format: "${{amount}} BND",
  },
  BOB: {
    symbol: "Bs",
    name: "Bolivian Boliviano",
    symbol_native: "Bs",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Bolivia",
    code: "BOB",
    name_plural: "Bolivian bolivianos",
    money_format: "Bs{{amount_with_comma_separator}}",
    money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB",
  },
  BRL: {
    symbol: "R$",
    name: "Brazilian Real",
    symbol_native: "R$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Brazil",
    code: "BRL",
    name_plural: "Brazilian reals",
    money_format: "R$ {{amount_with_comma_separator}}",
    money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL",
  },
  BWP: {
    symbol: "BWP",
    name: "Botswanan Pula",
    symbol_native: "P",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Botswana",
    code: "BWP",
    name_plural: "Botswanan pulas",
    money_format: "P{{amount}}",
    money_with_currency_format: "P{{amount}} BWP",
  },
  BYN: {
    symbol: "Br",
    name: "Belarusian Ruble",
    symbol_native: "руб.",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Belarus",
    code: "BYN",
    name_plural: "Belarusian rubles",
    money_format: "Br {{amount}}",
    money_with_currency_format: "Br {{amount}} BYN",
  },
  BZD: {
    symbol: "BZ$",
    name: "Belize Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Belize",
    code: "BZD",
    name_plural: "Belize dollars",
    money_format: "BZ${{amount}}",
    money_with_currency_format: "BZ${{amount}} BZD",
  },
  CDF: {
    symbol: "CDF",
    name: "Congolese Franc",
    symbol_native: "FrCD",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Congo-Democratic",
    code: "CDF",
    name_plural: "Congolese francs",
    money_format: "&#70;&#67; {{amount}}",
    money_with_currency_format: "&#70;&#67; {{amount}} CDF",
  },
  CHF: {
    symbol: "CHF",
    name: "Swiss Franc",
    symbol_native: "CHF",
    decimal_digits: 2,
    rounding: 0.05,
    class_name: "flags-France",
    code: "CHF",
    name_plural: "Swiss francs",
    money_format: "{{amount}} CHF",
    money_with_currency_format: "{{amount}} CHF",
  },
  CLP: {
    symbol: "CL$",
    name: "Chilean Peso",
    symbol_native: "$",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Chile",
    code: "CLP",
    name_plural: "Chilean pesos",
    money_format: "${{amount_no_decimals}}",
    money_with_currency_format: "${{amount_no_decimals}} CLP",
  },
  CNY: {
    symbol: "CN¥",
    name: "Chinese Yuan",
    symbol_native: "CN¥",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-China",
    code: "CNY",
    name_plural: "Chinese yuan",
    money_format: "&#165;{{amount}}",
    money_with_currency_format: "&#165;{{amount}} CNY",
  },
  COP: {
    symbol: "CO$",
    name: "Colombian Peso",
    symbol_native: "$",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Colombia",
    code: "COP",
    name_plural: "Colombian pesos",
    money_format: "${{amount_with_comma_separator}}",
    money_with_currency_format: "${{amount_with_comma_separator}} COP",
  },
  CRC: {
    symbol: "₡",
    name: "Costa Rican Colón",
    symbol_native: "₡",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Costa-Rica",
    code: "CRC",
    name_plural: "Costa Rican colóns",
    money_format: "&#8353; {{amount_with_comma_separator}}",
    money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC",
  },
  CVE: {
    symbol: "CV$",
    name: "Cape Verdean Escudo",
    symbol_native: "CV$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Cape-Verde",
    code: "CVE",
    name_plural: "Cape Verdean escudos",
    money_format: "&#36; {{amount}}",
    money_with_currency_format: "&#36; {{amount}} CVE",
  },
  CZK: {
    symbol: "Kč",
    name: "Czech Republic Koruna",
    symbol_native: "Kč",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Czech-Republic",
    code: "CZK",
    name_plural: "Czech Republic korunas",
    money_format: "{{amount_with_comma_separator}} K&#269;",
    money_with_currency_format: "{{amount_with_comma_separator}} K&#269;",
  },
  DJF: {
    symbol: "Fdj",
    name: "Djiboutian Franc",
    symbol_native: "Fdj",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Djibouti",
    code: "DJF",
    name_plural: "Djiboutian francs",
    money_format: "&#70;&#100;&#106; {{amount}}",
    money_with_currency_format: "&#70;&#100;&#106; {{amount}} DJF",
  },
  DKK: {
    symbol: "Dkr",
    name: "Danish Krone",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Denmark",
    code: "DKK",
    name_plural: "Danish kroner",
    money_format: "kr {{amount_with_comma_separator}}",
    money_with_currency_format: "kr {{amount_with_comma_separator}} DKK",
  },
  DOP: {
    symbol: "RD$",
    name: "Dominican Peso",
    symbol_native: "RD$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Dominica",
    code: "DOP",
    name_plural: "Dominican pesos",
    money_format: "RD$ {{amount}}",
    money_with_currency_format: "RD$ {{amount}}",
  },
  DZD: {
    symbol: "DA",
    name: "Algerian Dinar",
    symbol_native: "د.ج.‏",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Algeria",
    code: "DZD",
    name_plural: "Algerian dinars",
    money_format: "DA {{amount}}",
    money_with_currency_format: "DA {{amount}} DZD",
  },
  EEK: {
    symbol: "Ekr",
    name: "Estonian Kroon",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Estonia",
    code: "EEK",
    name_plural: "Estonian kroons",
    money_format: "{{amount}}",
    money_with_currency_format: "{{amount}} EEK",
  },
  EGP: {
    symbol: "EGP",
    name: "Egyptian Pound",
    symbol_native: "ج.م.‏",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Egypt",
    code: "EGP",
    name_plural: "Egyptian pounds",
    money_format: "LE {{amount}}",
    money_with_currency_format: "LE {{amount}} EGP",
  },
  ERN: {
    symbol: "Nfk",
    name: "Eritrean Nakfa",
    symbol_native: "Nfk",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Eritrea",
    code: "ERN",
    name_plural: "Eritrean nakfas",
    money_format: "{{amount}}",
    money_with_currency_format: "{{amount}} ERN",
  },
  ETB: {
    symbol: "Br",
    name: "Ethiopian Birr",
    symbol_native: "Br",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Ethiopia",
    code: "ETB",
    name_plural: "Ethiopian birrs",
    money_format: "Br{{amount}}",
    money_with_currency_format: "Br{{amount}} ETB",
  },
  GBP: {
    symbol: "£",
    name: "British Pound Sterling",
    symbol_native: "£",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-United-Kingdom",
    code: "GBP",
    name_plural: "British pounds sterling",
    money_format: "&pound;{{amount}}",
    money_with_currency_format: "&pound;{{amount}} GBP",
  },
  GEL: {
    symbol: "GEL",
    name: "Georgian Lari",
    symbol_native: "GEL",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Georgia",
    code: "GEL",
    name_plural: "Georgian laris",
    money_format: "{{amount}} GEL",
    money_with_currency_format: "{{amount}} GEL",
  },
  GHS: {
    symbol: "GH₵",
    name: "Ghanaian Cedi",
    symbol_native: "GH₵",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Ghana",
    code: "GHS",
    name_plural: "Ghanaian cedis",
    money_format: "GH&#8373;{{amount}}",
    money_with_currency_format: "GH&#8373;{{amount}}",
  },
  GNF: {
    symbol: "FG",
    name: "Guinean Franc",
    symbol_native: "FG",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Guinea",
    code: "GNF",
    name_plural: "Guinean francs",
    money_format: "&#70;&#71; {{amount}}",
    money_with_currency_format: "&#70;&#71; {{amount}} GNF",
  },
  GTQ: {
    symbol: "GTQ",
    name: "Guatemalan Quetzal",
    symbol_native: "Q",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Guatemala",
    code: "GTQ",
    name_plural: "Guatemalan quetzals",
    money_format: "Q{{amount}}",
    money_with_currency_format: "{{amount}} GTQ",
  },
  HKD: {
    symbol: "HK$",
    name: "Hong Kong Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Hong-Kong",
    code: "HKD",
    name_plural: "Hong Kong dollars",
    money_format: "HK${{amount}}",
    money_with_currency_format: "HK${{amount}} HKD",
  },
  HNL: {
    symbol: "HNL",
    name: "Honduran Lempira",
    symbol_native: "L",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Honduras",
    code: "HNL",
    name_plural: "Honduran lempiras",
    money_format: "L {{amount}}",
    money_with_currency_format: "L {{amount}} HNL",
  },
  HRK: {
    symbol: "kn",
    name: "Croatian Kuna",
    symbol_native: "kn",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Croatia",
    code: "HRK",
    name_plural: "Croatian kunas",
    money_format: "{{amount_with_comma_separator}} kn",
    money_with_currency_format: "{{amount_with_comma_separator}} kn HRK",
  },
  HUF: {
    symbol: "Ft",
    name: "Hungarian Forint",
    symbol_native: "Ft",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Hungary",
    code: "HUF",
    name_plural: "Hungarian forints",
    money_format: "{{amount_no_decimals_with_comma_separator}}",
    money_with_currency_format:
      "{{amount_no_decimals_with_comma_separator}} Ft",
  },
  IDR: {
    symbol: "Rp",
    name: "Indonesian Rupiah",
    symbol_native: "Rp",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Indonesia",
    code: "IDR",
    name_plural: "Indonesian rupiahs",
    money_format: "{{amount_with_comma_separator}} IDR",
    money_with_currency_format: "Rp {{amount_with_comma_separator}} IDR",
  },
  ILS: {
    symbol: "₪",
    name: "Israeli New Sheqel",
    symbol_native: "₪",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Israel",
    code: "ILS",
    name_plural: "Israeli new sheqels",
    money_format: "&#8362;{{amount}}",
    money_with_currency_format: "&#8362;{{amount}} NIS",
  },
  INR: {
    symbol: "Rs",
    name: "Indian Rupee",
    symbol_native: "টকা",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-India",
    code: "INR",
    name_plural: "Indian rupees",
    money_format: "&#8377; {{amount}}",
    money_with_currency_format: "&#8377; {{amount}} INR",
  },
  IQD: {
    symbol: "IQD",
    name: "Iraqi Dinar",
    symbol_native: "د.ع.‏",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Iraq",
    code: "IQD",
    name_plural: "Iraqi dinars",
    money_format: "&#1593;.&#1583; {{amount}}",
    money_with_currency_format: "&#1593;.&#1583; {{amount}} IQD",
  },
  IRR: {
    symbol: "IRR",
    name: "Iranian Rial",
    symbol_native: "﷼",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Iran",
    code: "IRR",
    name_plural: "Iranian rials",
    money_format: "&#65020; {{amount}}",
    money_with_currency_format: "&#65020; {{amount}} IRR",
  },
  ISK: {
    symbol: "Ikr",
    name: "Icelandic Króna",
    symbol_native: "kr",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Iceland",
    code: "ISK",
    name_plural: "Icelandic krónur",
    money_format: "{{amount_no_decimals}} kr",
    money_with_currency_format: "{{amount_no_decimals}} kr ISK",
  },
  JMD: {
    symbol: "J$",
    name: "Jamaican Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Jamaica",
    code: "JMD",
    name_plural: "Jamaican dollars",
    money_format: "${{amount}}",
    money_with_currency_format: "${{amount}} JMD",
  },
  JOD: {
    symbol: "JD",
    name: "Jordanian Dinar",
    symbol_native: "د.أ.‏",
    decimal_digits: 3,
    rounding: 0,
    class_name: "flags-Jordan",
    code: "JOD",
    name_plural: "Jordanian dinars",
    money_format: "{{amount}} JD",
    money_with_currency_format: "{{amount}} JOD",
  },
  JPY: {
    symbol: "¥",
    name: "Japanese Yen",
    symbol_native: "￥",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Japan",
    code: "JPY",
    name_plural: "Japanese yen",
    money_format: "&#165;{{amount_no_decimals}}",
    money_with_currency_format: "&#165;{{amount_no_decimals}} JPY",
  },
  KES: {
    symbol: "Ksh",
    name: "Kenyan Shilling",
    symbol_native: "Ksh",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Kenya",
    code: "KES",
    name_plural: "Kenyan shillings",
    money_format: "KSh{{amount}}",
    money_with_currency_format: "KSh{{amount}}",
  },
  KHR: {
    symbol: "KHR",
    name: "Cambodian Riel",
    symbol_native: "៛",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Cambodia",
    code: "KHR",
    name_plural: "Cambodian riels",
    money_format: "KHR{{amount}}",
    money_with_currency_format: "KHR{{amount}}",
  },
  KMF: {
    symbol: "CF",
    name: "Comorian Franc",
    symbol_native: "FC",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Comoros",
    code: "KMF",
    name_plural: "Comorian francs",
    money_format: "&#67;&#70; {{amount}}",
    money_with_currency_format: "&#67;&#70; {{amount}} KMF",
  },
  KRW: {
    symbol: "₩",
    name: "South Korean Won",
    symbol_native: "₩",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Korea-South",
    code: "KRW",
    name_plural: "South Korean won",
    money_format: "&#8361;{{amount_no_decimals}}",
    money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW",
  },
  KWD: {
    symbol: "KD",
    name: "Kuwaiti Dinar",
    symbol_native: "د.ك.‏",
    decimal_digits: 3,
    rounding: 0,
    class_name: "flags-Kuwait",
    code: "KWD",
    name_plural: "Kuwaiti dinars",
    money_format: "{{amount}} KD",
    money_with_currency_format: "{{amount}} KWD",
  },
  KZT: {
    symbol: "KZT",
    name: "Kazakhstani Tenge",
    symbol_native: "тңг.",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Kazakhstan",
    code: "KZT",
    name_plural: "Kazakhstani tenges",
    money_format: "{{amount}} KZT",
    money_with_currency_format: "{{amount}} KZT",
  },
  LBP: {
    symbol: "LB£",
    name: "Lebanese Pound",
    symbol_native: "ل.ل.‏",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Lebanon",
    code: "LBP",
    name_plural: "Lebanese pounds",
    money_format: "L.L.{{amount}}",
    money_with_currency_format: "L.L.{{amount}} LBP",
  },
  LKR: {
    symbol: "SLRs",
    name: "Sri Lankan Rupee",
    symbol_native: "SL Re",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Sri-Lanka",
    code: "LKR",
    name_plural: "Sri Lankan rupees",
    money_format: "Rs {{amount}}",
    money_with_currency_format: "Rs {{amount}} LKR",
  },
  LTL: {
    symbol: "Lt",
    name: "Lithuanian Litas",
    symbol_native: "Lt",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Lithuania",
    code: "LTL",
    name_plural: "Lithuanian litai",
    money_format: "{{amount}} Lt",
    money_with_currency_format: "{{amount}} Lt",
  },
  LVL: {
    symbol: "Ls",
    name: "Latvian Lats",
    symbol_native: "Ls",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Latvia",
    code: "LVL",
    name_plural: "Latvian lati",
    money_format: "Ls {{amount}}",
    money_with_currency_format: "Ls {{amount}} LVL",
  },
  LYD: {
    symbol: "LD",
    name: "Libyan Dinar",
    symbol_native: "د.ل.‏",
    decimal_digits: 3,
    rounding: 0,
    class_name: "flags-Libya",
    code: "LYD",
    name_plural: "Libyan dinars",
    money_format: "&#1604;.&#1583; {{amount}}",
    money_with_currency_format: "&#1604;.&#1583; {{amount}} LYD",
  },
  MAD: {
    symbol: "MAD",
    name: "Moroccan Dirham",
    symbol_native: "د.م.‏",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Morocco",
    code: "MAD",
    name_plural: "Moroccan dirhams",
    money_format: "{{amount}} dh",
    money_with_currency_format: "Dh {{amount}} MAD",
  },
  MDL: {
    symbol: "MDL",
    name: "Moldovan Leu",
    symbol_native: "MDL",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Moldova",
    code: "MDL",
    name_plural: "Moldovan lei",
    money_format: "{{amount}} MDL",
    money_with_currency_format: "{{amount}} MDL",
  },
  MGA: {
    symbol: "MGA",
    name: "Malagasy Ariary",
    symbol_native: "MGA",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Madagascar",
    code: "MGA",
    name_plural: "Malagasy Ariaries",
    money_format: "Ar {{amount}}",
    money_with_currency_format: "Ar {{amount}} MGA",
  },
  MKD: {
    symbol: "MKD",
    name: "Macedonian Denar",
    symbol_native: "MKD",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Macedonia",
    code: "MKD",
    name_plural: "Macedonian denari",
    money_format: "ден {{amount}}",
    money_with_currency_format: "ден {{amount}} MKD",
  },
  MMK: {
    symbol: "MMK",
    name: "Myanma Kyat",
    symbol_native: "K",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Myanmar",
    code: "MMK",
    name_plural: "Myanma kyats",
    money_format: "K{{amount}}",
    money_with_currency_format: "K{{amount}} MMK",
  },
  MOP: {
    symbol: "MOP$",
    name: "Macanese Pataca",
    symbol_native: "MOP$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Macao",
    code: "MOP",
    name_plural: "Macanese patacas",
    money_format: "MOP${{amount}}",
    money_with_currency_format: "MOP${{amount}}",
  },
  MUR: {
    symbol: "MURs",
    name: "Mauritian Rupee",
    symbol_native: "MURs",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Mauritius",
    code: "MUR",
    name_plural: "Mauritian rupees",
    money_format: "Rs {{amount}}",
    money_with_currency_format: "Rs {{amount}} MUR",
  },
  MXN: {
    symbol: "MX$",
    name: "Mexican Peso",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Mexico",
    code: "MXN",
    name_plural: "Mexican pesos",
    money_format: "$ {{amount}}",
    money_with_currency_format: "$ {{amount}} MXN",
  },
  MYR: {
    symbol: "RM",
    name: "Malaysian Ringgit",
    symbol_native: "RM",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Malaysia",
    code: "MYR",
    name_plural: "Malaysian ringgits",
    money_format: "RM{{amount}}",
    money_with_currency_format: "RM{{amount}} MYR",
  },
  MZN: {
    symbol: "MTn",
    name: "Mozambican Metical",
    symbol_native: "MTn",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Mozambique",
    code: "MZN",
    name_plural: "Mozambican meticals",
    money_format: "{{amount}} Mt",
    money_with_currency_format: "Mt {{amount}} MZN",
  },
  NAD: {
    symbol: "N$",
    name: "Namibian Dollar",
    symbol_native: "N$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Namibia",
    code: "NAD",
    name_plural: "Namibian dollars",
    money_format: "N${{amount}}",
    money_with_currency_format: "N${{amount}} NAD",
  },
  NGN: {
    symbol: "₦",
    name: "Nigerian Naira",
    symbol_native: "₦",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Nigeria",
    code: "NGN",
    name_plural: "Nigerian nairas",
    money_format: "&#8358;{{amount}}",
    money_with_currency_format: "&#8358;{{amount}} NGN",
  },
  NIO: {
    symbol: "C$",
    name: "Nicaraguan Córdoba",
    symbol_native: "C$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Nicaragua",
    code: "NIO",
    name_plural: "Nicaraguan córdobas",
    money_format: "C${{amount}}",
    money_with_currency_format: "C${{amount}} NIO",
  },
  NOK: {
    symbol: "Nkr",
    name: "Norwegian Krone",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Norway",
    code: "NOK",
    name_plural: "Norwegian kroner",
    money_format: "kr {{amount_with_comma_separator}}",
    money_with_currency_format: "kr {{amount_with_comma_separator}} NOK",
  },
  NPR: {
    symbol: "NPRs",
    name: "Nepalese Rupee",
    symbol_native: "नेरू",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Nepal",
    code: "NPR",
    name_plural: "Nepalese rupees",
    money_format: "Rs{{amount}}",
    money_with_currency_format: "Rs{{amount}} NPR",
  },
  NZD: {
    symbol: "NZ$",
    name: "New Zealand Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-New-Zealand",
    code: "NZD",
    name_plural: "New Zealand dollars",
    money_format: "${{amount}}",
    money_with_currency_format: "${{amount}} NZD",
  },
  OMR: {
    symbol: "OMR",
    name: "Omani Rial",
    symbol_native: "ر.ع.‏",
    decimal_digits: 3,
    rounding: 0,
    class_name: "flags-Oman",
    code: "OMR",
    name_plural: "Omani rials",
    money_format: "{{amount_with_comma_separator}} OMR",
    money_with_currency_format: "{{amount_with_comma_separator}} OMR",
  },
  PAB: {
    symbol: "B/.",
    name: "Panamanian Balboa",
    symbol_native: "B/.",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Panama",
    code: "PAB",
    name_plural: "Panamanian balboas",
    money_format: "&#66;&#47;&#46; {{amount}}",
    money_with_currency_format: "&#66;&#47;&#46; {{amount}} PAB",
  },
  PEN: {
    symbol: "S/.",
    name: "Peruvian Nuevo Sol",
    symbol_native: "S/.",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Peru",
    code: "PEN",
    name_plural: "Peruvian nuevos soles",
    money_format: "S/. {{amount}}",
    money_with_currency_format: "S/. {{amount}} PEN",
  },
  PHP: {
    symbol: "₱",
    name: "Philippine Peso",
    symbol_native: "₱",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Philippines",
    code: "PHP",
    name_plural: "Philippine pesos",
    money_format: "&#8369;{{amount}}",
    money_with_currency_format: "&#8369;{{amount}} PHP",
  },
  PKR: {
    symbol: "PKRs",
    name: "Pakistani Rupee",
    symbol_native: "₨",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Pakistan",
    code: "PKR",
    name_plural: "Pakistani rupees",
    money_format: "Rs.{{amount}}",
    money_with_currency_format: "Rs.{{amount}} PKR",
  },
  PLN: {
    symbol: "zł",
    name: "Polish Zloty",
    symbol_native: "zł",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Poland",
    code: "PLN",
    name_plural: "Polish zlotys",
    money_format: "{{amount_with_comma_separator}} zl",
    money_with_currency_format: "{{amount_with_comma_separator}} zl PLN",
  },
  PYG: {
    symbol: "₲",
    name: "Paraguayan Guarani",
    symbol_native: "₲",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Paraguay",
    code: "PYG",
    name_plural: "Paraguayan guaranis",
    money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
    money_with_currency_format:
      "Gs. {{amount_no_decimals_with_comma_separator}} PYG",
  },
  QAR: {
    symbol: "QR",
    name: "Qatari Rial",
    symbol_native: "ر.ق.‏",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Qatar",
    code: "QAR",
    name_plural: "Qatari rials",
    money_format: "QAR {{amount_with_comma_separator}}",
    money_with_currency_format: "QAR {{amount_with_comma_separator}}",
  },
  RON: {
    symbol: "RON",
    name: "Romanian Leu",
    symbol_native: "RON",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Romania",
    code: "RON",
    name_plural: "Romanian lei",
    money_format: "{{amount_with_comma_separator}} lei",
    money_with_currency_format: "{{amount_with_comma_separator}} lei RON",
  },
  RSD: {
    symbol: "din.",
    name: "Serbian Dinar",
    symbol_native: "дин.",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Serbia",
    code: "RSD",
    name_plural: "Serbian dinars",
    money_format: "{{amount}} RSD",
    money_with_currency_format: "{{amount}} RSD",
  },
  RUB: {
    symbol: "RUB",
    name: "Russian Ruble",
    symbol_native: "₽.",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Russia",
    code: "RUB",
    name_plural: "Russian rubles",
    money_format: "&#8381; {{amount_with_comma_separator}}",
    money_with_currency_format: "&#8381; {{amount_with_comma_separator}} RUB",
  },
  RWF: {
    symbol: "RWF",
    name: "Rwandan Franc",
    symbol_native: "FR",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Rwanda",
    code: "RWF",
    name_plural: "Rwandan francs",
    money_format: "{{amount_no_decimals}} RF",
    money_with_currency_format: "{{amount_no_decimals}} RWF",
  },
  SAR: {
    symbol: "SR",
    name: "Saudi Riyal",
    symbol_native: "ر.س.‏",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Saudi-Arabia",
    code: "SAR",
    name_plural: "Saudi riyals",
    money_format: "{{amount}} SR",
    money_with_currency_format: "{{amount}} SAR",
  },
  SDG: {
    symbol: "SDG",
    name: "Sudanese Pound",
    symbol_native: "SDG",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Sudan",
    code: "SDG",
    name_plural: "Sudanese pounds",
    money_format: "&#163; {{amount}}",
    money_with_currency_format: "&#163; {{amount}} SDG",
  },
  SEK: {
    symbol: "Skr",
    name: "Swedish Krona",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Sweden",
    code: "SEK",
    name_plural: "Swedish kronor",
    money_format: "kr {{amount_with_comma_separator}}",
    money_with_currency_format: "kr {{amount_with_comma_separator}} SEK",
  },
  SGD: {
    symbol: "S$",
    name: "Singapore Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Singapore",
    code: "SGD",
    name_plural: "Singapore dollars",
    money_format: "S${{amount}}",
    money_with_currency_format: "S${{amount}} SGD",
  },
  SOS: {
    symbol: "Ssh",
    name: "Somali Shilling",
    symbol_native: "Ssh",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Somalia",
    code: "SOS",
    name_plural: "Somali shillings",
    money_format: "&#83; {{amount}}",
    money_with_currency_format: "&#83; {{amount}} SOS",
  },
  SYP: {
    symbol: "SY£",
    name: "Syrian Pound",
    symbol_native: "ل.س.‏",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Syria",
    code: "SYP",
    name_plural: "Syrian pounds",
    money_format: "S&pound;{{amount}}",
    money_with_currency_format: "S&pound;{{amount}} SYP",
  },
  THB: {
    symbol: "฿",
    name: "Thai Baht",
    symbol_native: "฿",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Thailand",
    code: "THB",
    name_plural: "Thai baht",
    money_format: "{{amount}} &#xe3f;",
    money_with_currency_format: "{{amount}} &#xe3f; THB",
  },
  TND: {
    symbol: "DT",
    name: "Tunisian Dinar",
    symbol_native: "د.ت.‏",
    decimal_digits: 3,
    rounding: 0,
    class_name: "flags-Tunisia",
    code: "TND",
    name_plural: "Tunisian dinars",
    money_format: "{{amount}}",
    money_with_currency_format: "{{amount}} DT",
  },
  TOP: {
    symbol: "T$",
    name: "Tongan Paʻanga",
    symbol_native: "T$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Tonga",
    code: "TOP",
    name_plural: "Tongan paʻanga",
    money_format: "&#84;&#36; {{amount}}",
    money_with_currency_format: "&#84;&#36; {{amount}} TOP",
  },
  TRY: {
    symbol: "TL",
    name: "Turkish Lira",
    symbol_native: "TL",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Turkey",
    code: "TRY",
    name_plural: "Turkish Lira",
    money_format: "{{amount}} TL",
    money_with_currency_format: "{{amount}} TL",
  },
  TTD: {
    symbol: "TT$",
    name: "Trinidad and Tobago Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Trinidad-and-Tobago",
    code: "TTD",
    name_plural: "Trinidad and Tobago dollars",
    money_format: "${{amount}}",
    money_with_currency_format: "${{amount}} TTD",
  },
  TWD: {
    symbol: "NT$",
    name: "New Taiwan Dollar",
    symbol_native: "NT$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Taiwan",
    code: "TWD",
    name_plural: "New Taiwan dollars",
    money_format: "${{amount}}",
    money_with_currency_format: "${{amount}} TWD",
  },
  TZS: {
    symbol: "TSh",
    name: "Tanzanian Shilling",
    symbol_native: "TSh",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Tanzania",
    code: "TZS",
    name_plural: "Tanzanian shillings",
    money_format: "{{amount}} TZS",
    money_with_currency_format: "{{amount}} TZS",
  },
  UAH: {
    symbol: "₴",
    name: "Ukrainian Hryvnia",
    symbol_native: "₴",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Ukraine",
    code: "UAH",
    name_plural: "Ukrainian hryvnias",
    money_format: "₴{{amount}}",
    money_with_currency_format: "₴{{amount}} UAH",
  },
  UGX: {
    symbol: "USh",
    name: "Ugandan Shilling",
    symbol_native: "USh",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Uganda",
    code: "UGX",
    name_plural: "Ugandan shillings",
    money_format: "Ush {{amount_no_decimals}}",
    money_with_currency_format: "Ush {{amount_no_decimals}} UGX",
  },
  UYU: {
    symbol: "$U",
    name: "Uruguayan Peso",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Uruguay",
    code: "UYU",
    name_plural: "Uruguayan pesos",
    money_format: "${{amount_with_comma_separator}}",
    money_with_currency_format: "${{amount_with_comma_separator}} UYU",
  },
  UZS: {
    symbol: "UZS",
    name: "Uzbekistan Som",
    symbol_native: "UZS",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Uzbekistan",
    code: "UZS",
    name_plural: "Uzbekistan som",
    money_format: "&#1083;&#1074; {{amount}}",
    money_with_currency_format: "&#1083;&#1074; {{amount}} UZS",
  },
  VEF: {
    symbol: "Bs.F.",
    name: "Venezuelan Bolívar",
    symbol_native: "Bs.F.",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-Venezuela",
    code: "VEF",
    name_plural: "Venezuelan bolívars",
    money_format: "Bs. {{amount_with_comma_separator}}",
    money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF",
  },
  VND: {
    symbol: "₫",
    name: "Vietnamese Dong",
    symbol_native: "₫",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Vietnam",
    code: "VND",
    name_plural: "Vietnamese dong",
    money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
    money_with_currency_format:
      "{{amount_no_decimals_with_comma_separator}} VND",
  },
  XAF: {
    symbol: "FCFA",
    name: "CFA Franc BEAC",
    symbol_native: "FCFA",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Central-African-Republic",
    code: "XAF",
    name_plural: "CFA francs BEAC",
    money_format: "FCFA{{amount}}",
    money_with_currency_format: "FCFA{{amount}} XAF",
  },
  XOF: {
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    symbol_native: "CFA",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Central-African-Republic",
    code: "XOF",
    name_plural: "CFA francs BCEAO",
    money_format: "CFA{{amount}}",
    money_with_currency_format: "CFA{{amount}} XOF",
  },
  YER: {
    symbol: "YR",
    name: "Yemeni Rial",
    symbol_native: "ر.ي.‏",
    decimal_digits: 0,
    rounding: 0,
    class_name: "flags-Yemen",
    code: "YER",
    name_plural: "Yemeni rials",
    money_format: "&#65020; {{amount}}",
    money_with_currency_format: "&#65020; {{amount}} YER",
  },
  ZAR: {
    symbol: "R",
    name: "South African Rand",
    symbol_native: "R",
    decimal_digits: 2,
    rounding: 0,
    class_name: "flags-South-Africa",
    code: "ZAR",
    name_plural: "South African rand",
    money_format: "R {{amount}}",
    money_with_currency_format: "R {{amount}} ZAR",
  },
};
export default currencyData;
