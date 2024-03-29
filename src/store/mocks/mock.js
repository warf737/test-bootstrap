/** Остаток по счету на дату
 * AcctNum - номер счета,связь с объектом
 * OpDate - дата
 * Balance - остаток
 */
export const ACCT_POS = {
  'AcctPos': [
    {
      'AcctNum': '10201810000000010019',
      'Balance': 290.0,
      'OpDate': '2019-07-12',
    },
    {
      'AcctNum': '47441810000200000020',
      'Balance': -90.0,
      'OpDate': '2019-07-12',
    },
    {
      'AcctNum': '47443810000200000023',
      'Balance': -200.0,
      'OpDate': '2019-07-12',
    },
    {
      'AcctNum': '10201810000000010019',
      'Balance': 970.0,
      'OpDate': '2019-07-15',
    },
    {
      'AcctNum': '47441810000200000020',
      'Balance': -470.0,
      'OpDate': '2019-07-15',
    },
    {
      'AcctNum': '47443810000200000023',
      'Balance': -500.0,
      'OpDate': '2019-07-15',
    },
    {
      'AcctNum': '10201810000000010019',
      'Balance': 1000.0,
      'OpDate': '2019-07-16',
    },
    {
      'AcctNum': '47441810000200000020',
      'Balance': -434.0,
      'OpDate': '2019-07-16',
    },
    {
      'AcctNum': '47443810000200000023',
      'Balance': -116.0,
      'OpDate': '2019-07-16',
    },
  ],
};

/** Проводка
 * OpDate - дата
 * AcctNumDb - счет дебета, связь с объектом счет
 * AcctNumCr - счет кредита, Связь с объектом счет
 * Amount - сумма проводки
 *
 */
export const OP_ENTRY = {
  'OpEntry': [
    {
      'AcctNumCr': '10201810000000010019',
      'AcctNumDB': '47441810000200000020',
      'Amount': 10.0,
      'OpDate': '2019-07-12',
    },
    {
      'AcctNumCr': '47441810000200000020',
      'AcctNumDB': '47443810000200000023',
      'Amount': 100.0,
      'OpDate': '2019-07-12',
    },
    {
      'AcctNumCr': '47443810000200000023',
      'AcctNumDB': '10201810000000010019',
      'Amount': 300.0,
      'OpDate': '2019-07-12',
    },
    {
      'AcctNumCr': '10201810000000010019',
      'AcctNumDB': '47441810000200000020',
      'Amount': 20.0,
      'OpDate': '2019-07-15',
    },
    {
      'AcctNumCr': '47441810000200000020',
      'AcctNumDB': '47443810000200000023',
      'Amount': 400.0,
      'OpDate': '2019-07-15',
    },
    {
      'AcctNumCr': '47443810000200000023',
      'AcctNumDB': '10201810000000010019',
      'Amount': 700.0,
      'OpDate': '2019-07-15',
    },
    {
      'AcctNumCr': '10201810000000010019',
      'AcctNumDB': '47441810000200000020',
      'Amount': 40.0,
      'OpDate': '2019-07-16',
    },
    {
      'AcctNumCr': '47441810000200000020',
      'AcctNumDB': '47443810000200000023',
      'Amount': 4.0,
      'OpDate': '2019-07-16',
    },
    {
      'AcctNumCr': '4744381000200000023',
      'AcctNumDB': '10201810000000010019',
      'Amount': 70.0,
      'OpDate': '2019-07-16',
    },
  ],
};

/** Опердень
 * OpDate - дата
 *
 */
export const OP_DATE = {
  'OpDate': [
    {
      'OpDate': '2019-07-12',
    },
    {
      'OpDate': '2019-07-15',
    },
    {
      'OpDate': '2019-07-16',
    },
  ],
};

