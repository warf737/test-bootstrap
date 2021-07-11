export const MENU_ITEMS = [
  {
    id: 0,
    name: 'acct',
    title: 'Счета',
  },
  {
    id: 1,
    name: 'dates',
    title: 'Операционные дни',
  },
  {
    id: 2,
    name: 'operations',
    title: 'Операции',
  }
];

export const DEFAULT_MENU_ITEM = 0;

export const CUSTOM_TABLE_FIELDS = [
  {
    key: 'AcctNum',
  },
  {
    key: 'Balance',
  },
];

export const MODAL_FORM_FIELDS = {
  'acct-pos': {
    fields: {
      'AcctNum': '',
      'Balance' : '',
      'OpDate': '',
    },
  },
  'entries': {
    fields:
      { 'AcctNumCr': '' ,
        'AcctNumDB': '' ,
        'Amount': '',
        'OpDate': '' ,
      },
  },
  'dates': {
    fields: {
      'OpDate': '',
    },
  },
};

