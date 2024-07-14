import axios from 'axios';

// https://eu-west-2.aws.data.mongodb-api.com/app/data-zyevb/endpoint/data/v1

const mongokey = 'Q1ZwGxeTOQgY3F6B4zd1nSpFhhNj4eDF4nJydrgmnAFPVPmwgxi0lEcHSx9Gc5kc'
const mongourl = 'https://eu-west-2.aws.data.mongodb-api.com/app/data-zyevb/endpoint/data/v1/action/'
const mongoheader =  {
    "Content-Type": "application/json",
    "api-key": mongokey,
  }



export async function storeEmail(emailaddr, walletaddress, walletkey) {
    await axios.post(mongourl + "insertOne",
    {
        collection: "emails",
        database: "Zar-database",
        dataSource: "Cluster0",
        document: {
            email: emailaddr,
            paywallet: walletaddress,
            private: walletkey,
        }
    },
    mongoheader
    ).catch((error) => {
        console.log('Call failed:' + error)
  })
}  

export async function getInfoE(emailaddr) {
    const getInfo = await axios.post(mongourl + "findOne",
    {
        collection: "emails",
        database: "Zar-database",
        dataSource: "Cluster0",
        filter: {
            email: emailaddr,
        }
    },
    mongoheader
    ).catch((error) => {
        console.log('Call failed:' + error)
  })
  return getInfo.data.document.email;
}

export async function getInfoW(emailaddr) {
    const getInfo = await axios.post(mongourl + "findOne",
    {
        collection: "emails",
        database: "Zar-database",
        dataSource: "Cluster0",
        filter: {
            email: emailaddr,
        }
    },
    mongoheader
    ).catch((error) => {
        console.log('Call failed:' + error)
  })
  return getInfo.data.document.paywallet;
}

export async function getInfoP(emailaddr) {
    const getInfo = await axios.post(mongourl + "findOne",
    {
        collection: "emails",
        database: "Zar-database",
        dataSource: "Cluster0",
        filter: {
            email: emailaddr,
        }
    },
    mongoheader
    ).catch((error) => {
        console.log('Call failed:' + error)
  })
  return getInfo.data.document.private;
}
