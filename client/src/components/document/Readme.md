Document example:

document with code

```js
(() => {
  const doc = {
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
    ]
  }
  return <Document {...doc} />
})()
```
