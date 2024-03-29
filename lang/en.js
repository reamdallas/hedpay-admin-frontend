module.exports = {
  sidebar: {
    shortTitle: 'CT',
    dashboard: 'Dashboard',
    pages: 'Pages',
    pricing: 'Pricing',
    rtl: 'RTL Support',
    timeline: 'Timeline',
    login: 'Login',
    register: 'Register',
    lock: 'Lock Screen',
    userProfile: 'User Profile',
    components: 'Components',
    multiLevelCollapse: 'Multilevel Collapse',
    example: 'Example Page',
    buttons: 'Buttons',
    gridSystem: 'Grid System',
    panels: 'Panels',
    sweetAlert: 'Sweet Alert',
    icons: 'Icons',
    notifications: 'Notifications',
    typography: 'Typography',
    forms: 'Forms',
    regularForms: 'Regular Forms',
    extendedForms: 'Extended Forms',
    validationForms: 'Validation Forms',
    wizard: 'Wizard',
    tables: 'Tables',
    regularTables: 'Regular Tables',
    extendedTables: 'Extended Tables',
    paginatedTables: 'Paginated Tables',
    maps: 'Maps',
    googleMaps: 'Google Maps',
    fullScreenMaps: 'Full Screen Map',
    vectorMaps: 'Vector Maps',
    widgets: 'Widgets',
    charts: 'Charts',
    calendar: 'Calendar',
  },
  main: {
    usersCount: 'Registered users',
    usersCountText: 'Text',
    usersOnline: 'Users online',
    usersOnlineText: 'Text',
    newUsers: 'New users (per day)',
    newUsersText: 'Text',
    fee: 'Fee',
    feeText: 'Text',
    tradingVolume: 'Trading volume',
    amountOfInsights: 'Amount of insights',
    volumeOfDeposits: 'Volume of deposits',
    nullData: 'No data for current pair',
    noDataCards: 'No data',
    total: 'Total',
    count: 'Count',
  },
  error: {
    title: 'Error',
    backToHome: 'Back to the dashboard',
    backToLogin: 'Back to the login page',
    serverError: 'Server error',
  },
  newSidebar: {
    rus: 'Rus.',
    eng: 'Eng.',
    title: 'HedPay',
    shortTitle: 'CN',
    dashboard: 'Dashboard',
    logOut: 'LogOut',
    'exchange-settings': 'Exchange settings',
    chat: 'Chat',
    management: 'Management',
    'admins-management': 'Admins management',
    'users-management': 'Users management',
    'currency-management': 'Currency management',
    'currency-pairs-management': 'Currency Pairs Management',
    'order-history': 'Order History',
    markdown: '',
    'faq-editor': 'FAQ editor',
    transactions: 'Transactions',
    deposit: 'Deposit',
    withdraw: 'Withdraw',
    transfer: 'Transfers',
    statistics: 'Statistics',
    orders: 'Orders',
    'user-info': 'User info',
  },
  statistics: {
    title: 'Statistics',
    calculate: 'Apply',
    sell: 'Sales',
    sum: 'Amount',
    middlePrice: 'Average price',
    currency: 'Currency',
    noData: 'No data for current date',
  },
  currencyManagement: {
    title: 'Available currency',
    currencyAddModal: {
      editTitle: 'Edit currency',
      infoTitle: 'Currency settings:',
      title: 'Add currency',
      name: 'Title',
      ticker: 'Ticker',
      site: 'Site',
      priceStep: 'Price step',
      minTransactionVolume: 'Min. transaction volume',
      comment: 'Comment',
      addButton: 'Add',
      editButton: 'Edit',
      closeButton: 'Close',
      fullName: 'Full name',
      description: 'Description',
      blockChain: 'Blockchain',
      logoURL: 'Logo URL',
      type: 'Type',
      address: 'Address',
      decimals: 'Decimals',
      maxWithdraw: 'Max withdraw',
      minWithdraw: 'Min withdraw',
      withdrawCommissionFixed: 'Withdraw commission',
      withdrawCommissionPercentage: 'Withdraw commission %',
      completeDrop: 'Select items from the dropdown lists',
    },
    withdrawalFeeModal: {
      title: 'Setting a fee for the withdrawal',
      currencyName: 'Currency name',
      commission: 'Commission',
    },
    addValue: 'Add value',
  },
  currencyPairsManagement: {
    deleted: 'Deleted',
    updated: 'Updated',
    added: 'Added',
    title: 'Currency pairs',
    addValue: 'Add value',
    pairDisabled: 'Pair has been disabled',
    pairEnabled: 'Pair has been enabled',
    currencyPairsAddModal: {
      tiker: 'Tiker',
      selectCurrencies: 'Select currencies',
      sameCurrencies: 'You selected the same currencies',
      noFiat: 'Fiat can\'t be the first currency',
      title: 'Add a currency pair',
      infoTitle: 'Currency pair settings:',
      fullName: 'Full name',
      description: 'Description',
      pairId: 'Pair id',
      takerFee: 'Taker fee',
      makerFee: 'Maker fee',
      priceMin: 'Price min',
      priceMax: 'Price max',
      priceTick: 'Price tick',
      lotSizeMin: 'Lot size min',
      lotSizeMax: 'Lot size max',
      lotSizeTick: 'Lot size tick',
    },
    currencyPairsEdit: {
      title: 'Edit pair',
      takerFee: 'Taker fee',
      makerFee: 'Maker fee',
      priceMin: 'Price min',
      priceMax: 'Price max',
      priceTick: 'Price tick',
      lotSizeMin: 'Lot size min',
      lotSizeMax: 'Lot size max',
      lotSizeTick: 'Lot size tick',
    },
    // currencyPairsInfo: {
    //   type: 'Type',
    //   blockchain: 'Blockchain',
    //   fullname: 'Fullname',
    //   description: 'Description',
    //   logoURL: 'Logo URL',
    //   address: 'Address',
    //   ticker: 'Ticker',
    //   ID: 'ID',
    //   decimals: 'Decimals',
    //   maxWithdraw: 'Max withdraw',
    //   minWithdraw: 'Min withdraw',
    //   withdrawCommission: 'Withdraw commission',
    //   WithdrawPercentage: 'Withdraw commission (%)',
    // },
    commissionModal: {
      titleFixFee: 'Fix fee',
      titleDiscount: 'Amount of discount',
      currencyPair: 'Currency pair',
      fix: {
        title: 'Fix fee',
        makerFee: 'Maker fee',
        takerFee: 'Taker fee',
      },
      volume: {
        title: 'Volume fee',
        from: 'From',
        to: 'To',
        commission: 'Commission',
        makerCommission: 'Maker fee',
        takerCommission: 'Taker fee',
        bttBalance: 'BTT balance',
      },
      close: 'Close',
      save: 'Save',
      discount: 'Discount',
    },
  },
  monitoring: {
    monitoring: '',
  },
  transactions: {
    title: 'Transactions',
    copySuccess: 'Copied',
    table: {
      currency: 'Currency',
      type: 'Type',
      status: 'Status',
      date: 'Date',
      amount: 'Amount',
      reason: 'Reason',
      recipient: 'Recipient',
      failed: 'Failed',
      confirmed: 'Confirmed',
      created: 'Created',
      error: 'Error',
      rejected: 'Rejected',
      pending: 'Pending',
    },
    selects: {
      withdraw: 'Withdraw',
      deposit: 'Deposit',
      all: 'All reasons',
      allTypes: 'All types',
      trade: 'Trade',
      p2p: 'P2P',
      reward: 'Reward',
      approving: 'Approving',
      pending: 'Pending',
      rejected: 'Rejected',
      confirmed: 'Confirmed',
    },
    modals: {
      null: 'Complete all fields',
      confirm: 'Confirm',
      enterMessage: 'Enter message',
      enterCode: 'Enter code',
      reject: 'Reject',
      approve: 'Approve',
    },
  },
  management: {
    completed: 'Completed',
    addAdmin: 'Add admin',
    addAdminModal: {
      title: 'New admin',
      text: 'text',
      options: {
        role: 'Role',
        admin: 'Admin',
        operator: 'Operator',
        unconfirmed: 'Unconfirmed',
        super: 'Super',
      },
      addButton: 'Add',
      successMessage: 'The registration email was sent to the administrator by email',
      nullRole: 'Select a role',
    },
    users: 'Users',
    admins: 'Admins',
    search: 'Search records',
    table: {
      activity: 'Activity',
      block: 'Block',
      hold: 'Hold',
      unblock: 'Unblock',
      userInfo: 'User info',
      verified: 'Verified',
      unverified: 'Unverified',
      status: 'Status',
      email: 'Email',
      firstName: 'First name',
      lastName: 'Last name',
      login: 'Username',
      id: 'Id',
      phone: 'Phone',
      country: 'Country',
      active: 'Active',
      banned: 'Blocked',
      allUsers: 'All users',
      blockedUsers: 'Blocked',
      activeUsers: 'Active',
    },
    actions: {
      blocked: 'User blocked',
      unblocked: 'User unblocked',
      roleChange: 'Role changed',
    },
    orderHistory: {
      successClose: 'Order was closed',
      closeOrder: 'Cancel order',
      title: 'Order history',
      pair: 'Pair',
      side: 'Side',
      quantity: 'Quantity',
      executed: 'Executed',
      allPairs: 'All pairs',
      price: 'Price',
      date: 'Date',
      status: 'Status',
      back: 'Back',
      stats: {
        all: 'All statuses',
        created: 'Created',
        accepted: 'Accepted',
        rejected: 'Rejected',
        executing: 'Executing',
        executed: 'Executed',
        cancelled: 'Cancelled',
        error: 'Error',
      },
      sides: {
        all: 'All sides',
        buy: 'Buy',
        sell: 'Sell',
        buyShort: 'Buy short',
        sellShort: 'Sell short',
      },
    },
    roleError: 'You don\'t have access to this page',
    'user-info': {
      userChat: 'Chat',
      general: {
        active: 'Active',
        blocked: 'Blocked',
        title: 'General',
        login: 'Login',
        email: 'Email',
        phone: 'Phone number',
        date: 'Date of registration',
        hold: 'Hold',
        block: 'Block',
        modal: {
          title: 'User hold',
          titleBlock: 'Block user',
          hold: 'Hold',
          comment: 'Comment',
          holdTime: 'Hold time',
          takeHoldTime: 'Select the hold time',
          close: 'Close',
          hour: 'Hour',
          day: 'Day',
          threeDays: 'Three days',
          success: 'User in hold!',
        },
      },
      verification: {
        title: 'Verification',
        passport: 'Passport',
        selfie: 'Selfie',
        verify: 'Verify',
        cancel: 'Cancel',
      },
      balance: {
        title: 'Balance',
        currency: 'Currency',
        allcurrency: 'All currencies',
        balance: 'Balance',
        wallet: 'Wallet',
        hide: 'Hide zero balances',
        type: 'Type',
        walletsHistory: 'Wallets history',
        allTypes: 'All types',
        crypto: 'Crypto',
        cryptoasfiat: 'Crypto as fiat',
      },
      transactions: {
        title: 'Transactions',
        table: {
          username: 'Username',
          currency: 'Currency',
          type: 'Type',
          status: 'Status',
          date: 'Date',
          amount: 'Amount',
          reason: 'Reason',
          recipient: 'Recipient',
        },
      },
      loginLogs: {
        title: 'Logs',
        table: {
          type: 'Type',
          usedIP: 'Used IP',
          date: 'Date',
        },
      },
      settings: {
        title: 'Settings',
        enabled: 'Enabled',
        disabled: 'Disabled',
        language: 'Language',
        verified: 'Verified',
        unverified: 'Unverified',
        BTTToken: 'BTT Token',
        phoneVerification: 'Phone verification',
        KYCVerification: 'KYC verification',
      },
      locks: {
        title: 'Locks',
        table: {
          lockType: 'Lock type',
          banStart: 'Ban start',
          banEnd: 'Ban end',
          comment: 'Comment',
          time: 'Time',
          unholdDate: 'Unhold date',
          changeTime: 'Change time',
          unhold: 'Unhold',
        },
      },
    },
  },
  'faq-editor': {
    add: 'Add',
    faq: 'FAQ items',
    tableTitle: 'Title',
    tableActions: 'Actions',
    modal: {
      enterFaqName: 'Enter faq name',
      sure: 'Are you sure?',
      notRevert: 'You won\'t be able to revert this!',
      deleteIt: 'Yes, delete it!',
      deleted: 'Deleted!',
      deleteSuccess: 'You deleted:',
      success: 'Success',
      cancel: 'Cancel',
    },
    editor: {
      back: 'Back',
      save: 'Save',
      selectedLanguage: 'Selected language:',
    },
  },
  'forgot-pass': {
    forgotPass: 'Forgot password?',
    forgotDesc: 'Type in your email address below and we\'ll send you an email with instructions on how to create a new password',
    resetPass: 'Reset password',
    checkEmail: 'Check your email',
    checkDesc: 'The email with further instructions was sent to the submitted email address. If you don’t receive a message in 5 minutes, check the junk folder. If you are still experiencing any problems, contact support at support@domain.com',
    ok: 'Ok',
    createPass: 'Create new password',
    passDesc: 'Type in your email address below and we\'ll send you an email with instructions on how to create a new password',
    newPass: 'New password',
    confirmNewPass: 'Confirm new password',
    passSuccess: 'Your password has been changed successfully!',
    successDesc: 'Click the button to enter your personal wallet account',
  },
  login: {
    smallTitle: 'Please',
    bigTitle: 'Sign in',
    button: 'Log in',
    email: 'Email',
    password: 'Password',
    token: 'Token 2FA',
    forgotPass: 'Forgot password?',
  },
  registration: {
    title: 'New user',
    firstName: 'First name',
    lastName: 'Last name',
    password: 'Password',
    passwordConfirm: 'Confirm password',
    token2FA: 'Code',
    confirm: 'Confirm',
    complete: 'Complete',
  },
  chat: {
    chat: 'Chat',
    messages: 'Messages',
    inputPlaceholder: 'Enter text',
    nothingFound: 'Nothing found',
    search: 'Search',
    endDialogue: 'End dialogue',
    dialogActive: 'Active',
    dialogInactive: 'Inactive',
    noInActive: 'No inactive dialogs',
    noActive: 'No active dialogs',
    modal: {
      title: 'Dialogue complete ',
      infoText: 'Are you sure you will end the dialogue?',
      complete: 'Complete',
      cancel: 'Cancel',
    },
    messageError: 'Message length must be less than or equal to 500 characters long',
    messageLengthError: 'No more than 3 files',
    messageErrorNull: 'The message cannot be empty',
    messageErrorFileExtension: 'Uploaded file must be of image or document type',
    messageErrorFileSize: 'The file size should not exceed 15MB',
    emptyDialog: 'Select a dialog',
    you: 'You',
  },
};
