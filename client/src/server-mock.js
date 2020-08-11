class ServerMock {
  constructor () {
    this.documents = []
  }

  getDocuments () {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(this.documents)
        },
        1000
      )
    })
  }

  addDocument () {
    this.documents.push(
      {
        initiator: 'NachSklad',
        name: 'supply',
        history: [
          {
            responsible: 'Stas',
            position: 'chief supply',
            state: null
          }, 
          {
            responsible: 'Lily',
            position: 'chief accountant',
            state: 'negotiated'
          },
          {
            responsible: 'Igor',
            position: 'chief lawyer',
            state: 'return'
          },
          {
            responsible: 'Ilya',
            position: 'CEO',
            state: 'cancel'
          }
        ],
        attaches: [
          {
            name: 'contract.doc',
            url: 'URL'
          },
          {
            name: 'contract.pdf',
            url: 'URL1'
          },
          {
            name: 'price.xls',
            url: 'URL2'
          }
        ]
      }
    )
  }
}

export default ServerMock